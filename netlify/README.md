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

Without the first three, the page says the scan is being set up and shows no results. Without the email pair, the report shows on screen and is not emailed.

`CALC_DEMO=1` returns labelled sample data. It is for local testing only: never set it in Netlify.

The estimate's arithmetic is in `src/lib/calc-maths.ts`.
