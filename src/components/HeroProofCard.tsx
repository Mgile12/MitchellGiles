import Link from 'next/link';
import { TrendingUp, MapPin, Phone } from 'lucide-react';
import CountUp from '@/components/CountUp';

/**
 * Hero proof card. Every number is from a client account screenshot that also
 * appears on /google-business-profile-gold-coast/ or in the Results section.
 *
 * Chart: calls per month from one Business Profile, April to August 2026.
 * Plot area x 16..304 (five points, 72 apart), y 14 (40 calls) .. 100 (0 calls).
 */
const MONTHS = ['Apr', 'May', 'Jun', 'Jul', 'Aug'];
const CALLS = [12, 17, 8, 17, 35];
const POINTS = CALLS.map((v, i) => [16 + i * 72, Math.round((100 - (v / 40) * 86) * 10) / 10] as const);
const LINE = POINTS.map(([x, y]) => `${x},${y}`).join(' ');
const AREA = `M${LINE.split(' ')[0]} ${POINTS.slice(1).map(([x, y]) => `L${x},${y}`).join(' ')} L304,100 L16,100 Z`;

// `client` is optional: when the business names are supplied they show under each metric.
const BARS: { label: string; delta: string; pct: number; client?: string }[] = [
  { label: 'Calls', delta: '+324%', pct: 100 },
  { label: 'Website clicks', delta: '+273%', pct: 84 },
  { label: 'Website clicks', delta: '+197%', pct: 61 },
  { label: 'Calls', delta: '+83%', pct: 26 },
];

const CHIPS = [
  { text: 'Top 3 on Maps in 2 days', icon: MapPin, pos: 'lg:-top-4 lg:-right-3', delay: 1500, float: '7s' },
  { text: 'Website clicks +273% year on year', icon: TrendingUp, pos: 'lg:-top-4 lg:-left-6', delay: 1650, float: '8s' },
  { text: '33 calls from a brand-new profile', icon: Phone, pos: 'lg:-bottom-5 lg:right-8', delay: 1800, float: '6.5s' },
];

export default function HeroProofCard() {
  const [lastX, lastY] = POINTS[POINTS.length - 1];

  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-none">
      <div className="hero-card-in relative rounded-2xl border border-ink/10 bg-gradient-to-b from-white/75 to-white/40 backdrop-blur-sm shadow-[0_24px_64px_rgba(0,0,0,0.16)] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-dark via-gold-light to-gold-dark" />

        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3 mb-5">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gold font-sans">
              Google Business Profile
            </p>
            <span className="text-[11px] font-medium text-ink/65 border border-ink/10 rounded-full px-2.5 py-1 font-sans whitespace-nowrap">
              Apr – Aug 2026
            </span>
          </div>

          <div className="flex items-end gap-3 mb-1">
            <p className="text-5xl font-bold text-ink font-serif tabular-nums leading-none">
              <CountUp value="89" delay={700} duration={1400} />
            </p>
            <p className="text-sm text-ink/65 font-sans pb-1">calls from one client&apos;s profile</p>
          </div>
          <p className="text-sm font-sans mb-4">
            <span className="inline-flex items-center gap-1 font-semibold text-ink">
              <TrendingUp className="w-3.5 h-3.5" />
              +324%
            </span>
            <span className="text-ink/65"> on the same five months last year</span>
          </p>

          <svg
            viewBox="0 0 320 130"
            className="w-full h-auto block"
            role="img"
            aria-label="Calls per month, April to August 2026: 12, 17, 8, 17, 35"
          >
            <defs>
              <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0A0A0A" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#0A0A0A" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[14, 35.5, 57, 78.5, 100].map((y) => (
              <line key={y} x1="16" x2="304" y1={y} y2={y} stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
            ))}
            <path className="chart-area" d={AREA} fill="url(#heroArea)" />
            <polyline
              className="chart-line"
              pathLength={1}
              points={LINE}
              fill="none"
              stroke="#0A0A0A"
              strokeWidth="2.5"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <circle
              className="chart-dot"
              style={{ ['--d' as string]: '1650ms' }}
              cx={lastX}
              cy={lastY}
              r="9"
              fill="rgba(10,10,10,0.1)"
            />
            {POINTS.map(([x, y], i) => (
              <circle
                key={x}
                className="chart-dot"
                style={{ ['--d' as string]: `${900 + i * 180}ms` }}
                cx={x}
                cy={y}
                r={i === POINTS.length - 1 ? 4.5 : 3}
                fill="#FFFFFF"
                stroke="#0A0A0A"
                strokeWidth="2"
              />
            ))}
            <text
              className="chart-label"
              x={lastX - 12}
              y={lastY - 6}
              textAnchor="end"
              fontSize="10"
              fontWeight="600"
              fill="#0A0A0A"
              style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
            >
              Aug · 35
            </text>
            {MONTHS.map((m, i) => (
              <text
                key={m}
                x={16 + i * 72}
                y="120"
                textAnchor="middle"
                fontSize="10"
                fill="rgba(0,0,0,0.5)"
                style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
              >
                {m}
              </text>
            ))}
          </svg>

          <div className="mt-4 space-y-2.5">
            {BARS.map((b, i) => (
              <div key={`${b.label}-${b.delta}`} className="grid grid-cols-[92px_1fr_52px] items-center gap-3">
                <span className="min-w-0 font-sans">
                  <span className="block text-xs text-ink/65 truncate">{b.label}</span>
                  {b.client && <span className="block text-[10px] leading-tight text-ink/55 truncate">{b.client}</span>}
                </span>
                <div className="h-1.5 rounded-full bg-white/55 overflow-hidden">
                  <div
                    className="bar-fill h-full rounded-full bg-gradient-to-r from-gold-dark to-gold-light"
                    style={{ width: `${b.pct}%`, ['--d' as string]: `${1100 + i * 110}ms` }}
                  />
                </div>
                <span className="text-xs font-semibold text-ink font-sans tabular-nums text-right">{b.delta}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[11px] text-ink/65 font-sans leading-relaxed">
            Four client profiles, year on year. Calls are call-button taps, Google&apos;s own metric.{' '}
            <Link
              href="/google-business-profile-gold-coast"
              className="text-ink/80 underline underline-offset-2 hover:text-ink transition-colors duration-150"
            >
              Screenshots here
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Chips: a row under the card on small screens, floating around it from lg up */}
      <div className="flex flex-wrap justify-center gap-2 mt-5 lg:contents">
        {CHIPS.map((c) => {
          const Icon = c.icon;
          return (
            <span
              key={c.text}
              className={`chip inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-navy-900/90 backdrop-blur px-3 py-1.5 text-xs font-semibold text-ink shadow-[0_8px_24px_rgba(0,0,0,0.14)] whitespace-nowrap lg:absolute ${c.pos}`}
              style={{ ['--d' as string]: `${c.delay}ms`, ['--float' as string]: c.float }}
            >
              <Icon className="w-3.5 h-3.5 text-gold" />
              {c.text}
            </span>
          );
        })}
      </div>
    </div>
  );
}
