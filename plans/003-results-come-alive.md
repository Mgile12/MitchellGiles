# 003 — Results rows enter from opposite sides; screenshots tilt toward the cursor

- **Status**: DONE (2026-09-05)
- **Commit**: 65d0c123
- **Severity**: MEDIUM (fixes the uniform-reveal cohesion finding; adds the page's richest interaction)
- **Category**: Cohesion & tokens / Missed opportunities
- **Estimated scope**: 1 new file (`src/components/TiltCard.tsx`), edits in `src/components/KillerResults.tsx`, `src/index.css`

## Problem

```tsx
// src/components/KillerResults.tsx:96 — current: image and text fade as one block
<AnimateOnScroll className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
// src/components/KillerResults.tsx:102 — current: the only hover is a 2% scale
<button type="button" className="relative group cursor-pointer hover-scale block w-full text-left" ...>
```

## Target

- Wrapper becomes `<AnimateOnScroll variant="group" ...>` (plan 000). Image column gets `rv-left` when it sits on the left (even index) or `rv-right` (odd); the text column gets the opposite direction plus `rv-delay-1`.
- Desktop hover: the screenshot card tilts toward the cursor, at most 4 degrees on each axis, scales to 1.02, and a soft light follows the cursor. Transform is set directly on the element (never through a variable on a parent). Touch devices and reduced motion get none of it.

```tsx
// target: src/components/TiltCard.tsx ('use client')
// onPointerMove: rect = el.getBoundingClientRect(); px = (x - rect.left) / rect.width; py = (y - rect.top) / rect.height
// el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * 8}deg) rotateY(${(px - 0.5) * 8}deg) scale(1.02)`
// el.style.setProperty('--mx', `${x - rect.left}px`); el.style.setProperty('--my', `${y - rect.top}px`)
// onPointerLeave: el.style.transform = ''
// gate once in useEffect: matchMedia('(hover: hover) and (pointer: fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches
```

```css
/* target, src/index.css */
.tilt { transition: transform 160ms var(--ease-out); transform-style: preserve-3d; will-change: transform; }
.tilt-light {
  position: absolute; inset: 0; border-radius: inherit; pointer-events: none; opacity: 0;
  transition: opacity 250ms ease;
  background: radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(255, 255, 255, 0.12), transparent 55%);
}
@media (hover: hover) and (pointer: fine) { .tilt:hover .tilt-light { opacity: 1; } }
```

## Repo conventions to follow

- Pointer handlers live in small client components (see `src/components/AnimateOnScroll.tsx`); page sections stay server components where possible. `KillerResults.tsx` is already `'use client'`.
- Hover gating: `@media (hover: hover) and (pointer: fine)` (see `src/index.css:88`).

## Steps

1. Create `TiltCard.tsx`: a `div` with `className="tilt relative ..."` containing `children` and a trailing `<div className="tilt-light" aria-hidden="true" />`.
2. In `ResultCard`, switch the wrapper to `variant="group"`, add `rv-left|rv-right` to the image column `div` (line 99) and the opposite plus `rv-delay-1` to the text column `div` (line 137).
3. Remove `hover-scale` from the button (line 102) and wrap the card `div` (line 106) in `<TiltCard>`; the `rounded-2xl` must be on the tilt element or its child so `border-radius: inherit` on the light works.
4. Delete the now-unused `.hover-scale` rules in `src/index.css:84-92` and its entry in the reduced-motion list at line 189.

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
- **Feel check**: scroll through Results. Each screenshot slides in from the outside edge and the text follows 120 ms later from the other side. Hover a screenshot on desktop: it tilts toward the pointer and a soft highlight follows; leave and it settles in about 160 ms without overshoot. On a phone (or DevTools touch emulation) nothing tilts. With reduced motion, rows fade only.
- **Done when**: six rows animate directionally, tilt works on hover-capable devices only, `.hover-scale` is gone, tests pass.
