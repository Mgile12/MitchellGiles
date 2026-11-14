// The missed-calls estimate. Everything here is arithmetic on the visitor's own numbers and one scan,
// so it can be read and checked in one place.
//
// 1. Each scan point gets a visibility weight from the rank there: top of the map pack counts fully,
//    below the pack counts for little, and not showing counts for nothing.
// 2. Visibility now = the average weight. Target = top 3 at 80% of points.
// 3. Calls scale with visibility, capped at 3x: the two plumber case studies on this site reached 2.5x and 2.7x.
// 4. The range shown is from halfway to the full (capped) multiple.

export interface ScanPoint {
  row: number;
  col: number;
  rank: number | null;
  top: { title: string; rating: number | null; reviews: number | null; me?: boolean }[];
  failed?: boolean;
}

export interface CalcInputs {
  calls: number;
  close: number;
  value: number;
}

export interface Rival {
  title: string;
  rating: number | null;
  reviews: number | null;
  top3: number;
  first: number;
}

const MAX_MULTIPLE = 3;
const TARGET = 0.8 * 0.8 + 0.2 * 0.12; // top 3 at 80% of points, just below the pack at the rest

function weight(rank: number | null): number {
  if (rank == null) return 0;
  if (rank === 1) return 1;
  if (rank === 2) return 0.8;
  if (rank === 3) return 0.6;
  if (rank <= 10) return 0.12;
  return 0.03;
}

export function summarise(points: ScanPoint[], inputs: CalcInputs, grid: number) {
  const ok = points.filter((p) => !p.failed);
  const usable = ok.length;
  const top3 = ok.filter((p) => p.rank != null && p.rank <= 3).length;
  const mid = (grid - 1) / 2;
  const centre = ok.find((p) => p.row === mid && p.col === mid);
  const visibility = usable ? ok.reduce((s, p) => s + weight(p.rank), 0) / usable : 0;
  const multiple = visibility >= TARGET ? 1 : Math.min(MAX_MULTIPLE, visibility > 0 ? TARGET / visibility : MAX_MULTIPLE);
  const lowMultiple = 1 + (multiple - 1) / 2;
  const extraCallsLow = Math.round(inputs.calls * (lowMultiple - 1));
  const extraCallsHigh = Math.round(inputs.calls * (multiple - 1));
  const revenue = (calls: number) => Math.round((calls * inputs.close) / 100 * inputs.value);

  const rivals = new Map<string, Rival>();
  for (const p of ok) {
    p.top.forEach((t, i) => {
      if (t.me) return;
      const r = rivals.get(t.title) ?? { title: t.title, rating: t.rating, reviews: t.reviews, top3: 0, first: 0 };
      r.top3 += 1;
      if (i === 0) r.first += 1;
      rivals.set(t.title, r);
    });
  }
  const competitors = [...rivals.values()].sort((a, b) => b.top3 - a.top3 || b.first - a.first).slice(0, 5);

  return {
    usable,
    top3,
    centreRank: centre ? centre.rank : null,
    centreScanned: Boolean(centre),
    strong: multiple === 1,
    capped: multiple === MAX_MULTIPLE,
    extraCallsLow,
    extraCallsHigh,
    revLow: revenue(extraCallsLow),
    revHigh: revenue(extraCallsHigh),
    competitors,
    leader: competitors[0] ?? null,
  };
}

