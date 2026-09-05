# mrgmarketing.com.au

Marketing site for MRG Marketing: Mitchell Giles, marketing consultant in Ormeau on the Gold Coast.
Next.js 14 static export, deployed on Netlify. No server, no database, no forms. Every call to
action leads to the 15-minute booking call at `/book`.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Static export to `out/`. This is what Netlify runs |
| `npm run lint` | ESLint (flat config in `eslint.config.mjs`) |
| `npm run knip` | Unused files, exports and dependencies |
| `npm test` | Builds, then `scripts/smoke.mjs` checks every internal link, asset, anchor, sitemap URL, canonical, JSON-LD block and redirect in the export |

Run `npm test` before pushing. It fails on the things Google and visitors notice first: a broken
link, a sitemap URL with no page, a canonical that disagrees with the sitemap, or a
`NEXT_PUBLIC_` variable that was never set at build time.

## Deploying

Netlify builds from `main` with `npx next build` and publishes `out/`. **Auto-publish is locked**,
so a push does not change the live site. Open the new deploy in Netlify and click Publish.

`public/_redirects` carries the 301s from the old domain (mitchellgiles.com) to
mrgmarketing.com.au. Keep it; Search Console history depends on it.

## Where things live

- `src/app/` has one folder per route. `page.tsx` holds the metadata and JSON-LD, the content
  sits in a sibling component. `layout.tsx` carries the site-wide metadata, the LocalBusiness
  schema, the fonts (Montserrat and Inter through `next/font`, self-hosted), GA4 and the Meta
  Pixel (both load after the page is interactive). `sitemap.ts` and `robots.ts` generate
  `/sitemap.xml` and `/robots.txt`.
- `src/components/` holds the homepage sections in page order: `ui/animated-hero.tsx` with
  `HeroProofCard.tsx`, then `ServicesGrid.tsx`, `CurrentClients.tsx`, `AboutSection.tsx`,
  `KillerResults.tsx`, `FinalCTA.tsx`. `HeaderNav.tsx`, `Footer.tsx` (wrapping `ui/footer.tsx`)
  and `Lightbox.tsx` are shared.
- `src/lib/business-info.ts` is the single source of business facts: name, address, phone, email,
  booking URL, socials, opening hours. Change it there and the footer, schema, meta tags and
  booking page follow.
- `src/index.css` and `src/lib/motion.ts` are the motion system: easing tokens, `.press`, the
  marquee, the hero choreography and the reduced-motion fallbacks. `tailwind.config.js` defines
  the `gold` (the blue accent) and `navy` colour tokens.
- `public/` holds the images: `clients/` for the logo strip, `logos/` for the wordmark and partner
  badges, `proof/` for the Business Profile screenshots on the GBP page, `results/` for the Results
  section (WebP), `email/` for the email marketing screenshots. `brand/mrg-wordmark-2000.png` at
  the repo root is the logo source the icons and share image were cut from.
- `scripts/smoke.mjs` is the post-build test described above.
- `supabase/migrations/` is history only. The site no longer talks to Supabase (see below).

## Rules for the site

- No prices and no guarantees anywhere on the site. Offers, proof and detail belong on the
  service pages. The homepage stays general: what Mitchell does, the service categories, about,
  proof, one call to action.
- Every call to action is the 15-minute call at `/book` (Motion embed). No free audits, no
  contact forms.
- Copy is sentence case, first person, with contractions. Numbers lead the headlines. Australian
  English throughout.
- URLs end with a slash (`trailingSlash: true`). Canonicals and the sitemap must match the URLs
  the site serves.
- Homepage images are committed to `public/`, WebP where possible, and lazy-loaded below the fold.
  The remaining Pexels hotlinks are on the service pages, which are under review.

## History worth knowing

- September 2026: the homepage was rebuilt around the consultant positioning, then taken through
  QA, copy, accessibility (WCAG 2.1 AA), motion, performance (first and largest paint about 0.5 s
  unthrottled) and security passes. The reports live locally in `.gstack/`, which is gitignored.
- September 2026: the footer contact form and `@supabase/supabase-js` were removed. The form had
  never worked on Netlify because the `NEXT_PUBLIC_SUPABASE_*` variables were never set. The
  `contact_submissions` table it wrote to still exists in the Supabase project. If the table is
  kept, its policies must not give the `authenticated` role blanket read access, and public
  sign-ups should stay off.
- The service pages other than Google Business Profile are under review and may be removed.
- The repo started life as a Bolt project (`bolt-vite-react-ts`), later moved to Next.js. `.bolt/`
  is scaffolding.
