# 002 — Section headlines reveal word by word from behind a mask

- **Status**: DONE (2026-09-05)
- **Commit**: 65d0c123
- **Severity**: HIGH (missed opportunity)
- **Category**: Missed opportunities
- **Estimated scope**: 1 new file (`src/components/RevealText.tsx`), edits in `ServicesGrid.tsx`, `AboutSection.tsx`, `KillerResults.tsx`, `FinalCTA.tsx`, `src/index.css`

## Problem

Section H2s fade with their section. They deserve their own entrance, and the final question should land in two beats.

```tsx
// src/components/FinalCTA.tsx:16 — current
<h2 id="final-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] font-serif">
  Do you care more about what you pay,
  <span className="text-slate-400"> or what your marketing makes you?</span>
</h2>
```

## Target

Each word sits in an `overflow: hidden` inline-block and slides up from `translateY(110%)` to rest, 700 ms `var(--ease-out)`, 45 ms later than the previous word. Trigger is the existing `.is-visible` class on the enclosing reveal wrapper. Descenders get room via padding.

```css
/* target, src/index.css */
.rw { display: inline-block; overflow: hidden; vertical-align: bottom; padding-bottom: 0.12em; margin-bottom: -0.12em; }
.rw-in {
  display: inline-block;
  transform: translateY(110%);
  transition: transform 700ms var(--ease-out);
  transition-delay: calc(var(--rw-base, 0ms) + var(--i, 0) * 45ms);
}
.is-visible .rw-in { transform: none; }
@media (prefers-reduced-motion: reduce) { .rw-in { transform: none; transition: none; } }
```

```tsx
// target component: src/components/RevealText.tsx (server component, no JS)
export default function RevealText({ text, startIndex = 0, className = '' }) {
  return text.split(' ').map((word, i) => (
    <Fragment key={i}>{i > 0 && ' '}<span className="rw" style={{ ['--i' as string]: startIndex + i }}><span className={`rw-in ${className}`}>{word}</span></span></Fragment>
  ));
}
```

Headings to convert (H1 excluded):
- `ServicesGrid.tsx`: `Pick the problem. I'll pick the channel.`
- `AboutSection.tsx`: `One consultant.` then the grey span `No account manager in between.` with `startIndex={2}`; keep `{' '}` between them.
- `KillerResults.tsx`: `What the work made.`
- `FinalCTA.tsx`: `Do you care more about what you pay,` then the second clause with `--rw-base: 520ms` on its span and `className="text-gradient-accent"` on the words, so it lands a beat later in the accent colour (replacing `text-slate-400`).

## Repo conventions to follow

- Inline style custom properties use the `['--i' as string]` cast (see `src/components/HeroProofCard.tsx:88`).
- Server components have no `'use client'` directive (see `src/components/Eyebrow.tsx`).

## Steps

1. Create `src/components/RevealText.tsx` as above.
2. Add the CSS after the `.reveal-group` rules from plan 000.
3. Convert the four headings. Keep every `id`, class and `aria-labelledby` relationship intact.

## Boundaries

- Homepage only. Do NOT touch `src/app/google-business-profile-gold-coast/` or any other route's components.
- Do NOT animate the H1 (`Marketing Consultant Ormeau`) or the hero standfirst paragraph: they are the LCP elements and must paint on the first frame.
- Animate `transform`, `opacity` and `clip-path` only. No `width`, `height`, `top`, `left`, `margin`.
- No new dependencies. framer-motion is already installed but CSS is preferred for predetermined motion.
- Every new movement needs a `@media (prefers-reduced-motion: reduce)` fallback that keeps opacity feedback and drops movement, and every cursor effect is gated by `@media (hover: hover) and (pointer: fine)` or the matching `matchMedia` check.
- If a step does not match the code you find (drift since the commit stamp), STOP and report instead of improvising.

- Do NOT convert the H1 or the rotating hero word.

## Verification

- **Mechanical**: `npx tsc --noEmit` (0 errors), `npm run lint` (0 problems), `npm run knip` (clean), `npm test` (build + smoke test pass).
- **Performance**: after `npm run build`, serve `out/` and load the homepage with DevTools Performance recording. No long task over 100 ms attributable to the new code; LCP element is still the H1 with no animation delay.
- **Feel check**: in DevTools Animations panel at 25% speed, scroll to Services: words rise one after another, no descender is clipped (check `p` in "problem", `y` in "your"). Final CTA: the first clause lands, then "or what your marketing makes you?" arrives in blue about half a second later. Resize to 375 px: wrapping still works (words are inline-blocks separated by real spaces). Screen reader reads the heading as one sentence.
- **Done when**: four headings animate, sitemap smoke test still finds exactly one H1 per page, tests pass.
