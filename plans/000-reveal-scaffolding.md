# 000 — Reveal scaffolding: group reveals, directional children, deeper block reveal

- **Status**: DONE (2026-09-05)
- **Commit**: 65d0c123
- **Severity**: LOW (enabler for 002, 003)
- **Category**: Cohesion & tokens
- **Estimated scope**: 2 files (`src/components/AnimateOnScroll.tsx`, `src/index.css`), ~40 lines

## Problem

Every homepage section reveals the same way: the `AnimateOnScroll` wrapper fades in and rises 16 px over 500 ms. Children cannot reveal individually because the wrapper owns the opacity.

```css
/* src/index.css:65 — current */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 500ms var(--ease-out), transform 500ms var(--ease-out);
}
```

```tsx
// src/components/AnimateOnScroll.tsx:35 — current
<div ref={ref} className={`animate-on-scroll ${staggerClass} ${className}`}>
```

## Target

- Block reveal travels 24 px over 650 ms (marketing page, deliberate).
- A `variant="group"` wrapper that only toggles `is-visible` and lets children declare their own entrance with `rv-up`, `rv-left`, `rv-right`, optionally delayed with `rv-delay-1` (120 ms) or `rv-delay-2` (240 ms).

```css
/* target, src/index.css */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 650ms var(--ease-out), transform 650ms var(--ease-out);
}
.reveal-group .rv-up, .reveal-group .rv-left, .reveal-group .rv-right {
  opacity: 0;
  transition: opacity 700ms var(--ease-out), transform 700ms var(--ease-out);
}
.reveal-group .rv-up { transform: translateY(24px); }
.reveal-group .rv-left { transform: translateX(-6%); }
.reveal-group .rv-right { transform: translateX(6%); }
.reveal-group.is-visible .rv-up, .reveal-group.is-visible .rv-left, .reveal-group.is-visible .rv-right {
  opacity: 1;
  transform: none;
}
.rv-delay-1 { transition-delay: 120ms; }
.rv-delay-2 { transition-delay: 240ms; }
@media (prefers-reduced-motion: reduce) {
  .reveal-group .rv-up, .reveal-group .rv-left, .reveal-group .rv-right { transform: none; transition: opacity 200ms ease; }
}
```

## Repo conventions to follow

- Easing tokens live in `src/index.css` `:root` (`--ease-out: cubic-bezier(0.23, 1, 0.32, 1)`). Reuse them; add none.
- Reduced-motion rules sit next to the rules they neutralise (see `src/index.css:182`).

## Steps

1. `src/components/AnimateOnScroll.tsx`: add `variant?: 'block' | 'group'` (default `'block'`); render class `reveal-group` when `variant === 'group'`, `animate-on-scroll` otherwise. The IntersectionObserver logic is unchanged.
2. `src/index.css`: change `.animate-on-scroll` to 24 px / 650 ms; add the `.reveal-group` rules above directly after the `.stagger-7` rule.

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
- **Feel check**: scroll to the Services heading. It rises a little further and settles a little slower than before, still snappy at the end (strong ease-out). Nothing else on the page changes yet.
- **Done when**: both variants render, existing sections still reveal, tests pass.
