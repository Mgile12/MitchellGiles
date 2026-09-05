# 006 — Scroll progress line under the header (CSS scroll timeline, zero JS)

- **Status**: DONE (2026-09-05)
- **Commit**: 65d0c123
- **Severity**: LOW (missed opportunity)
- **Category**: Missed opportunities
- **Estimated scope**: `src/components/HeaderNav.tsx`, `src/index.css`

## Problem

Nothing tells the visitor how far they are through a long page.

```tsx
// src/components/HeaderNav.tsx:71 — current header, no progress indicator
<header className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-200 ${...}`}>
```

## Target

```tsx
{/* last child inside <header> */}
<div className="scroll-progress" aria-hidden="true" />
```

```css
.scroll-progress {
  position: absolute; left: 0; right: 0; bottom: -1px; height: 2px;
  transform-origin: left center; transform: scaleX(0); opacity: 0; pointer-events: none;
  background: linear-gradient(90deg, var(--accent-dark), var(--accent-light));
}
@supports (animation-timeline: scroll()) {
  .scroll-progress { opacity: 1; animation: progressGrow linear both; animation-timeline: scroll(root block); }
}
@keyframes progressGrow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
```

Browsers without scroll timelines never see the line. Scroll-linked, so it stays under reduced motion.

## Repo conventions to follow

- Accent tokens `--accent-dark`, `--accent-light` are defined in `src/index.css` (used by `.accent-line::before`, line 396).

## Steps

1. Add the `div` as the last child of `<header>` in `HeaderNav.tsx`.
2. Add the CSS after the `.accent-line::before` rule.

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
- **Feel check**: in Chrome, scroll: a 2 px blue line grows from the left edge of the header to the right edge as you reach the footer, exactly tracking the scrollbar. Firefox without the flag: no line, nothing broken.
- **Done when**: line tracks scroll in Chromium and Safari, absent elsewhere, tests pass.
