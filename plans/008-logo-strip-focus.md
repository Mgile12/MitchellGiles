# 008 — Hovered client logo brightens, neighbours dim

- **Status**: DONE (2026-09-05)
- **Commit**: 65d0c123
- **Severity**: LOW (missed opportunity)
- **Category**: Missed opportunities
- **Estimated scope**: `src/index.css` only

## Problem

```css
/* src/index.css:159-164 — current */
.logo-tile:hover { opacity: 1; transform: translateY(-2px); }
```

Tiles render with Tailwind `opacity-70`; the strip pauses on hover. The hovered logo barely stands out.

## Target

```css
@media (hover: hover) and (pointer: fine) {
  .marquee:has(.logo-tile:hover) .logo-tile:not(:hover) { opacity: 0.35; }
  .logo-tile:hover { opacity: 1; transform: translateY(-2px) scale(1.06); }
}
```

The existing `.logo-tile` transition (`opacity 200ms ease, transform 200ms var(--ease-out)`) animates both. Specificity of the `:not(:hover)` rule beats the `opacity-70` utility.

## Steps

1. Replace the `.logo-tile:hover` block inside the existing hover media query with the target.

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
- **Feel check**: hover a logo: the strip pauses (unchanged), the logo lifts and brightens, the others dim to about a third. Move between logos: focus follows smoothly. Leave: everything returns to 70%.
- **Done when**: focus effect works on desktop, nothing changes on touch, tests pass.
