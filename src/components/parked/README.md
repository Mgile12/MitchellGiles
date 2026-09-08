# Parked homepage sections

Components removed from the homepage but kept for later. Not imported anywhere; knip ignores this folder.

- `KillerResults.tsx` — "What the work made." results section (GBP screenshots, heatmaps, client messages, CountUp metrics, TiltCard). Parked 2026-09-08 at Mitchell's request. Its proof images are still in `public/proof/`.
- `TiltCard.tsx` — pointer-tilt card used only by KillerResults.

To restore: move both files back to `src/components/`, revert the `../` imports to `./`, and add `<KillerResults />` between `<WhyMe />` and `<FinalCTA />` in `src/app/page.tsx`.
