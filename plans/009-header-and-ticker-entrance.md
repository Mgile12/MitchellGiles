# 009 — Header slides down and the ticker rises with the hero

- **Status**: DONE (2026-09-05)
- **Commit**: 65d0c123
- **Severity**: LOW (polish)
- **Category**: Cohesion & tokens
- **Estimated scope**: `src/components/HeaderNav.tsx`, `src/components/ui/animated-hero.tsx`, `src/index.css`

## Problem

The hero choreography (`.hero-in` at 0/160/320/420 ms, card at 250 ms) does not include the header or the stats ticker, which are simply present on the first frame.

```tsx
// src/components/ui/animated-hero.tsx:171 — current
<div className="relative z-10 w-full bg-[#0B6FC4] py-4">
```

## Target

```css
.header-in { animation: headerIn 600ms var(--ease-out) both; }
@keyframes headerIn { from { transform: translateY(-100%); opacity: 0; } to { transform: none; opacity: 1; } }
.ticker-in { animation: tickerIn 700ms var(--ease-out) 450ms both; }
@keyframes tickerIn { from { transform: translateY(100%); opacity: 0; } to { transform: none; opacity: 1; } }
@media (prefers-reduced-motion: reduce) { .header-in, .ticker-in { animation: none; } }
```

The hero section is already `overflow-hidden`, so the ticker rises out of the hero's bottom edge. The header keyframe ends at `transform: none`, so the fixed header has no lingering transform.

## Steps

1. Add `header-in` to the `<header>` className in `HeaderNav.tsx:71`.
2. Add `ticker-in` to the ticker wrapper in `animated-hero.tsx:171`.
3. Add the CSS next to the `.hero-in` rules (`src/index.css:233`).

## Boundaries

- Homepage only. Do NOT touch `src/app/google-business-profile-gold-coast/` or any other route's components.
- Do NOT animate the H1 (`Marketing Consultant Ormeau`) or the hero standfirst paragraph: they are the LCP elements and must paint on the first frame.
- Animate `transform`, `opacity` and `clip-path` only. No `width`, `height`, `top`, `left`, `margin`.
- No new dependencies. framer-motion is already installed but CSS is preferred for predetermined motion.
- Every new movement needs a `@media (prefers-reduced-motion: reduce)` fallback that keeps opacity feedback and drops movement, and every cursor effect is gated by `@media (hover: hover) and (pointer: fine)` or the matching `matchMedia` check.
- If a step does not match the code you find (drift since the commit stamp), STOP and report instead of improvising.


## Verification

- **Mechanical**: `npx tsc --noEmit` (0 errors), `npm run lint` (0 problems), `npm run knip` (clean), `npm test` (build + smoke test pass).
- **Performance**: after `npm run build`, serve `out/` and load the homepage with DevTools Performance recording. No long task over 100 ms attributable to the new code; LCP element is still the H1 with no animation delay.
- **Feel check**: reload. The header drops into place as the eyebrow appears, the ticker rises after the buttons land, and the H1 is visible on the very first frame (check with the Performance panel's screenshots). Reduced motion: both simply present.
- **Done when**: both entrances play once per load, LCP unchanged, tests pass.
