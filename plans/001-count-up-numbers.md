# 001 — Numbers count up when they enter view

- **Status**: DONE (2026-09-05)
- **Commit**: 65d0c123
- **Severity**: HIGH (missed opportunity, highest emotion on the page)
- **Category**: Missed opportunities
- **Estimated scope**: 1 new file (`src/components/CountUp.tsx`), edits in `src/components/AboutSection.tsx`, `src/components/KillerResults.tsx`, `src/components/HeroProofCard.tsx`

## Problem

The numbers are the site's argument and they simply appear.

```tsx
// src/components/AboutSection.tsx:93 — current
<p className="text-gradient-accent text-3xl sm:text-4xl font-bold font-serif tabular-nums">{p.figure}</p>
// src/components/KillerResults.tsx:152 — current
<span className="text-gradient-accent text-4xl sm:text-5xl font-bold font-serif">
  {result.metric}
</span>
// src/components/HeroProofCard.tsx:49 — current
<p className="text-5xl font-bold text-white font-serif tabular-nums leading-none">89</p>
```

Values in play: About `266`, `$60,632`, `6.88x`; Results `6.88x`, `$60K`, `$82K`, `72%`, `$425K`, `$100K`; hero `89`.

## Target

A `<CountUp value="$60,632" />` component. Server render and no-JS show the final value. On the client, before first paint, it resets to zero (same prefix and suffix), then when 35% of it is in the viewport it counts to the final value over `duration` ms (default 900) after `delay` ms (default 0), easing `1 - (1 - t)^4` (matches the feel of `--ease-out`). Digits are tabular so the width never jitters. Decimals and thousands separators follow the source string (`6.88x` keeps two decimals, `$60,632` keeps the comma, `$60K` stays an integer). Screen readers get the final value only.

```tsx
// target markup
<span className={className}>
  <span className="sr-only">{value}</span>
  <span aria-hidden="true" className="tabular-nums">{display}</span>
</span>
```

Reduced motion (`matchMedia('(prefers-reduced-motion: reduce)')`): render the final value, no reset, no animation.

Hero: `<CountUp value="89" delay={700} duration={1400} />` so the number climbs while the chart line draws (`chartDraw 1400ms ... 700ms` in `src/index.css:257`).

## Repo conventions to follow

- Client components start with `'use client'` and live in `src/components/` (see `src/components/AnimateOnScroll.tsx`).
- IntersectionObserver with `observer.unobserve(el)` after the first hit (same file, line 20).
- Avoid the framer-motion dependency here; a `matchMedia` check is enough.

## Steps

1. Create `src/components/CountUp.tsx` per the target. Parse with `/^([^0-9]*)([0-9][0-9,]*)(\.[0-9]+)?(.*)$/`; if the string does not match, render `value` unchanged.
2. Use `useLayoutEffect` for the reset-to-zero so it happens before paint; use `requestAnimationFrame` for the loop; cancel on unmount.
3. `AboutSection.tsx:93`: replace `{p.figure}` with `<CountUp value={p.figure} />`.
4. `KillerResults.tsx:152`: replace `{result.metric}` with `<CountUp value={result.metric} />`.
5. `HeroProofCard.tsx:49`: replace `89` with `<CountUp value="89" delay={700} duration={1400} />`.

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
- **Feel check**: reload the homepage. The 89 starts climbing as the chart line starts drawing and lands on 89 as the line finishes. Scroll to About: the three numbers count up together and settle within a second, no width jitter. Each Results metric counts up as its row appears. `View source` shows the real numbers in the HTML. With reduced motion on, numbers are static and correct.
- **Done when**: all ten numbers animate once, the sr-only text equals the source string, tests pass.
