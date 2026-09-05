# 007 — The final CTA glow breathes

- **Status**: DONE (2026-09-05)
- **Commit**: 65d0c123
- **Severity**: LOW (missed opportunity)
- **Category**: Missed opportunities
- **Estimated scope**: `src/components/FinalCTA.tsx`, `src/index.css`

## Problem

```tsx
// src/components/FinalCTA.tsx:11 — current: static glow behind the last button
<div className="glow w-[700px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ ['--glow-a' as string]: '0.14' }} aria-hidden="true" />
```

## Target

```tsx
<div className="glow glow-breathe w-[700px] h-[500px] top-1/2 left-1/2" style={{ ['--glow-a' as string]: '0.14' }} aria-hidden="true" />
```

```css
.glow-breathe { animation: glowBreathe 3.2s ease-in-out infinite; }
@keyframes glowBreathe {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
  50% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
}
@media (prefers-reduced-motion: reduce) { .glow-breathe { animation: none; transform: translate(-50%, -50%); } }
html[data-motion='paused'] .glow-breathe { animation-play-state: paused; }
```

The Tailwind translate utilities come off the element because the keyframes now own `transform` (a keyframe transform would otherwise override them and un-centre the glow).

## Repo conventions to follow

- Looping motion is listed under `html[data-motion='paused']` at `src/index.css:478` so the hero's Pause button stops it.

## Steps

1. Edit the `div` in `FinalCTA.tsx:11` as shown.
2. Add the CSS after the `.glow` rule (line 356) and add `.glow-breathe` to the paused list.

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
- **Feel check**: at the final section the glow behind the button swells and fades over about three seconds, centred on the button the whole time. Press Pause in the hero ticker: it freezes. Reduced motion: static.
- **Done when**: glow breathes, stays centred, pauses, tests pass.
