# Motion plans for the homepage

Written by `/improve-animations` on 2026-09-05 at commit `65d0c123` from Mitchell's brief: "animate to the extreme, make it exciting and keep people engaged", inside the guardrails that keep the site fast and accessible (LCP text never animates, transform/opacity only, reduced-motion and hover gating everywhere).

| # | Plan | Severity | Status |
| --- | --- | --- | --- |
| 000 | [Reveal scaffolding](000-reveal-scaffolding.md) | LOW (enabler) | DONE |
| 001 | [Numbers count up](001-count-up-numbers.md) | HIGH | DONE |
| 002 | [Masked headline reveals](002-masked-headline-reveals.md) | HIGH | DONE |
| 003 | [Results come alive](003-results-come-alive.md) | MEDIUM | DONE |
| 004 | [Hero reacts to the cursor](004-hero-reacts-to-the-cursor.md) | MEDIUM | DONE |
| 005 | [Spotlight service cards](005-spotlight-service-cards.md) | LOW + MEDIUM | DONE |
| 006 | [Scroll progress line](006-scroll-progress-line.md) | LOW | DONE |
| 007 | [Final CTA breathing glow](007-final-cta-breathing-glow.md) | LOW | DONE |
| 008 | [Logo strip focus](008-logo-strip-focus.md) | LOW | DONE |
| 009 | [Header and ticker entrance](009-header-and-ticker-entrance.md) | LOW | DONE |

## Status

All ten plans were executed on 2026-09-05 in one pass. Verification: tsc, eslint, knip and `npm test` clean; headless probe confirmed every reveal, count-up and the progress line; LCP still the H1.

## Execution order and dependencies

000 first (002 and 003 depend on the `reveal-group` variant and the `.rv-*` classes). Then 001, 002, 003 in any order. 004 to 009 are independent of each other and of the first four; run them in numeric order for a tidy diff.

## Not planned

- Mobile menu `grid-template-rows` transition (`HeaderNav.tsx:180,197`): a layout animation on an occasional menu, accepted as the CSS-only way to animate height. Left alone.
