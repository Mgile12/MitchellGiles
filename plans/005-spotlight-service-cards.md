# 005 — Spotlight follows the cursor across service cards; press keeps the lift

- **Status**: DONE (2026-09-05)
- **Commit**: 65d0c123
- **Severity**: LOW (finding 1) + MEDIUM (missed opportunity)
- **Category**: Physicality & origin / Missed opportunities
- **Estimated scope**: 1 new file (`src/components/SpotlightLink.tsx`), `src/components/ServicesGrid.tsx`, `src/index.css`

## Problem

```css
/* src/index.css:171-180 — current: pressing swaps the hover lift for a shrink, so the card drops 3 px then scales */
.proof-card:hover { transform: translateY(-3px); border-color: rgba(12, 134, 234, 0.4); }
.proof-card:active { transform: scale(0.98); }
```

```tsx
// src/components/ServicesGrid.tsx:82 — current: a plain Link, hover changes background and arrow colour only
<Link href={s.href} className="proof-card group flex h-full flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:bg-white/[0.04]">
```

## Target

```css
/* target */
@media (hover: hover) and (pointer: fine) {
  .proof-card:active { transform: translateY(-3px) scale(0.98); }
}
.proof-card:active { transform: scale(0.98); }   /* touch: no lift to preserve */

.spotlight { position: relative; overflow: hidden; }
.spotlight::before {
  content: ''; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; opacity: 0;
  transition: opacity 250ms ease;
  background: radial-gradient(260px circle at var(--mx, 50%) var(--my, 50%), rgba(var(--accent-rgb), 0.16), transparent 60%);
}
.card-icon { transition: transform 200ms var(--ease-out); }
.card-arrow { transition: transform 200ms var(--ease-out), color 200ms ease; }
@media (hover: hover) and (pointer: fine) {
  .spotlight:hover::before { opacity: 1; }
  .proof-card:hover .card-icon { transform: rotate(-6deg) scale(1.08); }
  .proof-card:hover .card-arrow { transform: translate(2px, -2px); }
}
```

`SpotlightLink` is a `'use client'` wrapper around `next/link` whose `onPointerMove` sets `--mx` and `--my` (pixels inside the card) on the card element itself.

## Repo conventions to follow

- `--accent-rgb` is defined in `src/index.css` and used by `.glow` (line 356).
- Hover gating as at `src/index.css:88`.

## Steps

1. Create `src/components/SpotlightLink.tsx` (props: `href`, `className`, `children`).
2. `ServicesGrid.tsx`: replace `Link` with `SpotlightLink`, add `spotlight` to its className, add `card-icon` to the icon wrapper `div` (line 86) and `card-arrow` to the `ArrowUpRight` (line 90), removing its `transition-colors duration-200` (the class now owns the transition).
3. `src/index.css`: apply the target rules; the `:active` fix replaces line 178-180.

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
- **Feel check**: hover across the eight cards: a soft blue light follows the cursor inside each card, the icon tilts, the arrow nudges toward the corner. Press and hold a card: it stays lifted and shrinks slightly, no downward jump. Touch: no spotlight, press still shrinks.
- **Done when**: spotlight visible on hover-capable devices only, press has no jump, tests pass.
