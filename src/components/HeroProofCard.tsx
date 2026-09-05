import Link from 'next/link';
import { TrendingUp, MapPin, Mail } from 'lucide-react';
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

const BARS = [
  { label: 'Calls', delta: '+324%', pct: 100 },
  { label: 'Website clicks', delta: '+273%', pct: 84 },
  { label: 'Website clicks', delta: '+197%', pct: 61 },
  { label: 'Calls', delta: '+83%', pct: 26 },
];

const CHIPS = [
  { text: 'Top 3 on Maps in 2 days', icon: MapPin, pos: 'lg:-top-4 lg:-right-3', delay: 1500, float: '7s' },
  { text: '6.88x return on ad spend', icon: TrendingUp, pos: 'lg:-top-4 lg:-left-6', delay: 1650, float: '8s' },
  { text: '$60,632 in 30 days from email', icon: Mail, pos: 'lg:-bottom-5 lg:right-8', delay: 1800, float: '6.5s' },
];

export default function HeroProofCard() {
  const [lastX, lastY] = POINTS[POINTS.length - 1];

  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-none">
      <div className="hero-card-in relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-sm shadow-[0_24px_64px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-dark via-gold-light to-gold-dark" />

        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3 mb-5">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gold font-sans">
              Google Business Profile
            </p>
            <span className="text-[11px] font-medium text-slate-400 border border-white/10 rounded-full px-2.5 py-1 font-sans whitespace-nowrap">
              Apr – Aug 2026
            </span>
          </div>

          <div className="flex items-end gap-3 mb-1">
            <p className="text-5xl font-bold text-white font-serif tabular-nums leading-none">
              <CountUp value="89" delay={700} duration={1400} />
            </p>
            <p className="text-sm text-slate-400 font-sans pb-1">calls from one client&apos;s profile</p>
          </div>
          <p className="text-sm font-sans mb-4">
            <span className="inline-flex items-center gap-1 font-semibold text-emerald-400">
              <TrendingUp className="w-3.5 h-3.5" />
              +324%
            </span>
            <span className="text-slate-400"> on the same five months last year</span>
          </p>

          <svg
            viewBox="0 0 320 130"
            className="w-full h-auto block"
            role="img"
            aria-label="Calls per month, April to August 2026: 12, 17, 8, 17, 35"
          >
            <defs>
              <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0C86EA" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#0C86EA" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[14, 35.5, 57, 78.5, 100].map((y) => (
              <line key={y} x1="16" x2="304" y1={y} y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            ))}
            <path className="chart-area" d={AREA} fill="url(#heroArea)" />
            <polyline
              className="chart-line"
              pathLength={1}
              points={LINE}
              fill="none"
              stroke="#3DA0F0"
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
              fill="rgba(61,160,240,0.18)"
            />
            {POINTS.map(([x, y], i) => (
              <circle
                key={x}
                className="chart-dot"
                style={{ ['--d' as string]: `${900 + i * 180}ms` }}
                cx={x}
                cy={y}
                r={i === POINTS.length - 1 ? 4.5 : 3}
                fill="#0A0A0A"
                stroke="#3DA0F0"
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
              fill="#EAEAEA"
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
                fill="rgba(255,255,255,0.4)"
                style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
              >
                {m}
              </text>
            ))}
          </svg>

          <div className="mt-4 space-y-2.5">
            {BARS.map((b, i) => (
              <div key={`${b.label}-${b.delta}`} className="grid grid-cols-[92px_1fr_52px] items-center gap-3">
                <span className="text-xs text-slate-400 font-sans truncate">{b.label}</span>
                <div className="h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
                  <div
                    className="bar-fill h-full rounded-full bg-gradient-to-r from-gold-dark to-gold-light"
                    style={{ width: `${b.pct}%`, ['--d' as string]: `${1100 + i * 110}ms` }}
                  />
                </div>
                <span className="text-xs font-semibold text-white font-sans tabular-nums text-right">{b.delta}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[11px] text-slate-400 font-sans leading-relaxed">
            Four client profiles, year on year.{' '}
            <Link
              href="/google-business-profile-gold-coast"
              className="text-slate-300 underline underline-offset-2 hover:text-white transition-colors duration-150"
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
              className={`chip inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-navy-900/90 backdrop-blur px-3 py-1.5 text-xs font-semibold text-white shadow-[0_8px_24px_rgba(0,0,0,0.45)] whitespace-nowrap lg:absolute ${c.pos}`}
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
