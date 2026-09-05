# 004 — Hero glows follow the cursor; primary buttons get a shine sweep

- **Status**: DONE (2026-09-05)
- **Commit**: 65d0c123
- **Severity**: MEDIUM (missed opportunity, first screen)
- **Category**: Missed opportunities
- **Estimated scope**: `src/components/ui/animated-hero.tsx`, `src/index.css`

## Problem

```tsx
// src/components/ui/animated-hero.tsx:68 — current: two glows drift on a 24 s / 30 s loop and ignore the visitor
<div className="hero-blob hero-blob-1 absolute z-0 w-[520px] h-[520px] -top-40 -left-32 bg-[radial-gradient(...)]" aria-hidden="true" />
<div className="hero-blob hero-blob-2 absolute z-0 w-[640px] h-[640px] -bottom-64 right-[-12%] bg-[radial-gradient(...)]" aria-hidden="true" />
```

```css
/* src/index.css:407 — current: the gradient button only changes shadow on hover */
.gold-flat-btn:hover { background-image: ...; box-shadow: ...; }
```

## Target

- Each glow sits inside a positioned wrapper `div.hero-blob-wrap` that carries the old position and size classes; the glow inside is `absolute inset-0` and keeps its `heroDrift` animation. One `pointermove` listener on the hero section (desktop, no reduced motion), throttled to one `requestAnimationFrame`, sets `transform: translate(nx * 48px, ny * 32px)` on wrapper 1 and `translate(nx * -36px, ny * -24px)` on wrapper 2, where `nx, ny` are the pointer position relative to the viewport centre in the range -0.5..0.5. `pointerleave` resets both to `''`.

```css
.hero-blob-wrap { transition: transform 900ms var(--ease-out); will-change: transform; }
```

- Every `.gold-flat-btn` gets a shine: a `::after` band that sweeps left to right once per hover.

```css
.gold-flat-btn { position: relative; overflow: hidden; }
.gold-flat-btn::after {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background: linear-gradient(105deg, transparent 35%, rgba(255, 255, 255, 0.35) 50%, transparent 65%);
  transform: translateX(-130%);
  mix-blend-mode: screen;
}
@media (hover: hover) and (pointer: fine) {
  .gold-flat-btn:hover::after { transform: translateX(130%); transition: transform 750ms var(--ease-in-out); }
}
@media (prefers-reduced-motion: reduce) { .gold-flat-btn::after { display: none; } }
```

`overflow: hidden` does not clip the button's own box-shadow or focus outline, so the hover glow and the white focus ring are unaffected.

## Repo conventions to follow

- The hero already pauses its loops through `html[data-motion='paused']` (`src/index.css:478`); the parallax is user-driven so it stays active.
- Throttle with a stored latest position and a single pending `requestAnimationFrame`, as the scroll handler in `HeaderNav.tsx:30` uses a passive listener.

## Steps

1. `animated-hero.tsx`: add `useRef` for the section and both wrappers; wrap the blobs; add the `useEffect` with the gated `pointermove`/`pointerleave` listeners (passive) and cleanup.
2. `src/index.css`: add `.hero-blob-wrap` and the shine rules next to the existing `.gold-flat-btn` block (line 407).

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
- **Feel check**: move the mouse across the hero: the two glows drift gently in opposite directions and lag the cursor (900 ms ease-out), never jumping. Hover "Book a 15-minute call": a soft band sweeps across once in about three quarters of a second; leaving and re-entering sweeps again. Text stays white throughout (screen blend). Touch emulation: no parallax, no sweep. H1 and standfirst unaffected in the Performance panel's LCP marker.
- **Done when**: parallax and sweep work on desktop only, reduced motion disables both, tests pass.
