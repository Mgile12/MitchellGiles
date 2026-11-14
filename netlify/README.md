# Missed calls calculator

Page: `/missed-calls-calculator/`. The page calls three functions in `netlify/functions/`, which share `netlify/lib/calc.mjs`.

| Function | Does |
|---|---|
| `calc-find` | Finds the visitor's Google listing by name and suburb |
| `calc-scan` | Scans one row of the 5 x 5 grid (the page asks for five rows) |
| `calc-lead` | Emails the visitor their report |

The lead itself is saved by Netlify Forms (form name `calculator`, registered in `public/free-map-video/index.html`).

## Environment variables (Netlify → Site configuration → Environment variables)

| Name | Needed for | Value |
|---|---|---|
| `DATAFORSEO_LOGIN` | the scan | DataForSEO API login (an email address) |
| `DATAFORSEO_PASSWORD` | the scan | DataForSEO API password (from the API dashboard, not the account password) |
| `CALC_SECRET` | the scan | Any long random string |
| `RESEND_API_KEY` | the emailed report | Resend API key |
| `CALC_EMAIL_FROM` | the emailed report | e.g. `Mitchell at MRG Marketing <reports@mrgmarketing.com.au>`; the domain must be verified in Resend |
| `CALC_NOTIFY_TO` | optional | An address that gets a copy of every report |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | the human check | Cloudflare Turnstile site key (public). Needs a new deploy after adding |
| `TURNSTILE_SECRET_KEY` | the human check | Cloudflare Turnstile secret key |

Without the first three, the page says the scan is being set up and shows no results. Without the email pair, the report shows on screen and is not emailed.

## Bot protection and spending limits (`netlify/lib/guard.mjs`)

- **Human check:** Cloudflare Turnstile on the first step, invisible unless Cloudflare is unsure. Off until both Turnstile keys are set; set both, or neither.
- **Per visitor, per day:** 10 business lookups, 3 scans, 3 report emails. Visitors are told to ask for the free map video instead.
- **Per email address:** one report a day, so the form can't be used to send reports to other people.
- **Whole site:** 60 scans a day. At about 25 searches a scan, that caps DataForSEO spend at a few dollars a day.
- **Replays:** each row of a scan can be fetched once per session.

Counts live in Netlify Blobs (store `calculator-limits`) and reset at midnight Brisbane time. Change a limit without touching code: `CALC_FINDS_PER_IP`, `CALC_SCANS_PER_IP`, `CALC_EMAILS_PER_IP`, `CALC_SCANS_PER_DAY`.

`CALC_DEMO=1` returns labelled sample data. It is for local testing only: never set it in Netlify.

The estimate's arithmetic is in `src/lib/calc-maths.ts`.
