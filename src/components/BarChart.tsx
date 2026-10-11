/**
 * Small grouped bar chart as inline SVG, for case-study evidence. One axis, counts only.
 * Series are the periods (before, after) or the measures (calls, clicks); every bar carries its value,
 * the legend names the series, and the whole thing is also readable as the <table> below it.
 */
interface BarGroup {
  label: string;
  values: number[];
}

export interface BarChartSpec {
  title: string;
  subtitle?: string;
  series: string[];
  groups: BarGroup[];
  /** Index of a group boundary to mark, e.g. the month the work started. Draws a dashed rule before that group. */
  markBefore?: number;
  markLabel?: string;
  note?: string;
}

const FILLS = ['rgba(10,10,10,0.32)', '#0A0A0A', 'rgba(10,10,10,0.62)'];

export default function BarChart({ spec }: { spec: BarChartSpec }) {
  const { series, groups } = spec;
  const W = 720;
  const H = 340;
  const padL = 12;
  const padR = 12;
  const padT = 34;
  const padB = 44;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const max = Math.max(1, ...groups.flatMap((g) => g.values));
  const groupW = plotW / groups.length;
  const barGap = 2;
  const groupPad = Math.min(18, groupW * 0.18);
  const barW = (groupW - groupPad * 2 - barGap * (series.length - 1)) / series.length;
  const y = (v: number) => padT + plotH - (v / max) * plotH;
  const ticks = [0, 0.5, 1].map((f) => Math.round(max * f));

  return (
    <figure className="rounded-2xl border border-ink/10 bg-white/70 p-4 sm:p-6">
      <figcaption className="mb-3">
        <p className="text-base sm:text-lg font-bold text-ink font-serif leading-snug">{spec.title}</p>
        {spec.subtitle && <p className="text-sm text-ink/65 font-sans mt-1">{spec.subtitle}</p>}
      </figcaption>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto block" role="img" aria-label={spec.title}>
        {ticks.map((t) => (
          <g key={t}>
            <line x1={padL} x2={W - padR} y1={y(t)} y2={y(t)} stroke="rgba(10,10,10,0.08)" strokeWidth="1" />
            <text x={padL} y={y(t) - 4} fontSize="15" fill="rgba(10,10,10,0.45)" fontFamily="var(--font-inter), system-ui, sans-serif">
              {t}
            </text>
          </g>
        ))}
        {spec.markBefore !== undefined && spec.markBefore > 0 && spec.markBefore < groups.length && (
          <g>
            <line
              x1={padL + groupW * spec.markBefore}
              x2={padL + groupW * spec.markBefore}
              y1={padT - 10}
              y2={padT + plotH}
              stroke="#0A0A0A"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            {spec.markLabel && (
              <text x={padL + groupW * spec.markBefore + 6} y={padT - 12} fontSize="16" fontWeight="600" fill="#0A0A0A" fontFamily="var(--font-inter), system-ui, sans-serif">
                {spec.markLabel}
              </text>
            )}
          </g>
        )}
        {groups.map((g, gi) => (
          <g key={g.label}>
            {g.values.map((v, si) => {
              const x = padL + groupW * gi + groupPad + si * (barW + barGap);
              const top = y(v);
              const h = Math.max(0, padT + plotH - top);
              return (
                <g key={si}>
                  <rect x={x} y={top} width={barW} height={h} rx={h > 4 ? 3 : 0} fill={FILLS[si % FILLS.length]}>
                    <title>{`${g.label}, ${series[si]}: ${v}`}</title>
                  </rect>
                  {barW > 16 && (
                    <text
                      x={x + barW / 2}
                      y={top - 5}
                      fontSize="17"
                      fontWeight="600"
                      textAnchor="middle"
                      fill="#0A0A0A"
                      fontFamily="var(--font-inter), system-ui, sans-serif"
                    >
                      {v}
                    </text>
                  )}
                </g>
              );
            })}
            <text
              x={padL + groupW * gi + groupW / 2}
              y={H - padB + 18}
              fontSize={groups.length > 8 ? 14 : 16}
              textAnchor="middle"
              fill="rgba(10,10,10,0.7)"
              fontFamily="var(--font-inter), system-ui, sans-serif"
            >
              {g.label}
            </text>
          </g>
        ))}
        <line x1={padL} x2={W - padR} y1={padT + plotH} y2={padT + plotH} stroke="rgba(10,10,10,0.25)" strokeWidth="1" />
      </svg>
      {series.length > 1 && (
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-ink/70 font-sans" aria-label="Legend">
          {series.map((s, i) => (
            <li key={s} className="inline-flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-sm" style={{ background: FILLS[i % FILLS.length] }} aria-hidden="true" />
              {s}
            </li>
          ))}
        </ul>
      )}
      <div className="sr-only">
      <table>
        <caption>{spec.title}</caption>
        <thead>
          <tr>
            <th scope="col">Period</th>
            {series.map((s) => (
              <th key={s} scope="col">
                {s}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {groups.map((g) => (
            <tr key={g.label}>
              <th scope="row">{g.label}</th>
              {g.values.map((v, i) => (
                <td key={i}>{v}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      {spec.note && <p className="mt-3 text-xs text-ink/55 font-sans">{spec.note}</p>}
    </figure>
  );
}
