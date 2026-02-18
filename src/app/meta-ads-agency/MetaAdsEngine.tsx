import { Trophy, Globe, Database } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const engines = [
  {
    icon: Trophy,
    number: '01',
    name: 'Andromeda',
    subtitle: 'The Ad Ranking Engine',
    overview:
      "Every time your ad enters an auction, Meta's Andromeda system evaluates multiple factors to determine if your ad gets shown — and at what cost.",
    factors: [
      { label: 'Expected action rate', desc: 'How likely a user is to take your desired conversion action' },
      { label: 'Ad quality score', desc: 'Creative relevance, engagement signals and user feedback' },
      { label: 'Bid competitiveness', desc: 'Your bid relative to other advertisers in the same auction' },
      { label: 'User behaviour likelihood', desc: 'Pattern matching against historical conversion behaviour' },
    ],
    insight:
      'Two businesses in the same industry can see wildly different CPAs because Andromeda rewards relevance and penalises weak creative and noisy conversion data.',
    optimise: ['Higher engagement probability through creative testing', 'Clear, specific messaging that pre-qualifies clicks', 'Creative that holds attention past the 3-second mark', 'Conversion alignment between ad promise and landing page'],
  },
  {
    icon: Globe,
    number: '02',
    name: 'GEM',
    subtitle: 'Geo Expansion & Machine Learning Distribution',
    overview:
      'GEM influences how Meta expands and distributes your ads across geographic and behavioural clusters as the algorithm learns from your conversion data.',
    factors: [
      { label: 'Geographic clustering', desc: 'How Meta groups similar audiences across locations' },
      { label: 'Behavioural expansion', desc: 'Expanding delivery to users with similar patterns to converters' },
      { label: 'Micro-cluster identification', desc: 'Finding high-performing pockets within broader regions' },
      { label: 'Competitive landscape', desc: 'Distribution cost relative to audience density per suburb' },
    ],
    insight:
      'Surfers Paradise audiences behave differently from Robina. Brisbane north behaves differently from Brisbane south. Over-constraining targeting can prevent GEM from finding your most profitable segments.',
    optimise: ['Controlled expansion rather than rigid targeting', 'Allow the algorithm to identify micro-clusters', 'Avoid over-constraining geographic parameters early', 'Monitor geographic performance at suburb level'],
  },
  {
    icon: Database,
    number: '03',
    name: 'Lattice',
    subtitle: 'Conversion Signal Modelling',
    overview:
      'Lattice is how Meta interprets and models conversion signals. After iOS tracking changes, browser-based attribution became unreliable — Lattice fills the gaps using probabilistic modelling.',
    factors: [
      { label: 'Conversion API (CAPI)', desc: 'Server-side data that bypasses browser tracking limitations' },
      { label: 'Event prioritisation', desc: 'Correctly ordering your conversion events by funnel stage' },
      { label: 'CRM integration', desc: 'Feeding offline conversions back into the Meta ecosystem' },
      { label: 'Signal consistency', desc: 'Volume and quality of conversion events over time' },
    ],
    insight:
      'If your tracking is broken, Lattice feeds poor data back into the algorithm. Poor data means poor optimisation. Tracking is infrastructure — not an afterthought.',
    optimise: ['Conversion API active and deduplicated', 'Events prioritised in correct funnel order', 'CRM syncing offline conversions', 'Minimum conversion volume maintained'],
  },
];

export default function MetaAdsEngine() {
  return (
    <section className="bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(200,161,78,0.05),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="mb-14 sm:mb-20">
          <div className="max-w-3xl">
            <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
              Technical Depth
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
              The Meta Engine Most Agencies Don't Talk About
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              If you have never heard of Andromeda, GEM or Lattice, that is understandable. Most business owners
              have not. But a Meta Ads professional should. These are the internal frameworks that determine how
              your campaigns are delivered, distributed and optimised.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="space-y-8">
          {engines.map((engine, index) => {
            const Icon = engine.icon;
            return (
              <AnimateOnScroll key={index} stagger={index + 1}>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden hover:border-gold/15 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-0">
                    <div className="bg-gold/[0.04] border-b lg:border-b-0 lg:border-r border-white/[0.06] p-6 sm:p-8 lg:w-72 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-gold" />
                          </div>
                          <span className="text-gold/40 font-bold text-3xl font-serif">{engine.number}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1 font-serif">{engine.name}</h3>
                        <p className="text-sm text-gold font-semibold font-sans tracking-wide">{engine.subtitle}</p>
                      </div>
                      <div className="mt-6 pt-6 border-t border-white/[0.06]">
                        <p className="text-xs text-slate-500 font-sans uppercase tracking-widest mb-2">Key insight</p>
                        <p className="text-sm text-slate-300 font-sans leading-relaxed italic">
                          "{engine.insight}"
                        </p>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8">
                      <p className="text-base text-slate-300 leading-relaxed font-sans mb-6">{engine.overview}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        {engine.factors.map((factor, i) => (
                          <div key={i} className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-4">
                            <div className="text-sm font-semibold text-white mb-1 font-serif">{factor.label}</div>
                            <div className="text-xs text-slate-400 font-sans leading-relaxed">{factor.desc}</div>
                          </div>
                        ))}
                      </div>

                      <div>
                        <p className="text-xs text-slate-500 font-sans uppercase tracking-widest mb-3">
                          How we optimise for {engine.name}
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {engine.optimise.map((point, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-300 font-sans">
                              <span className="text-gold mt-1.5 text-[8px] shrink-0">&#9670;</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        <AnimateOnScroll className="mt-12">
          <div className="rounded-2xl border border-gold/20 bg-gold/[0.03] p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {[
                { system: 'Andromeda', result: 'Ranks your ads favourably when creative is strong and conversion data is clean' },
                { system: 'GEM', result: 'Expands efficiently to profitable micro-clusters when targeting is not over-constrained' },
                { system: 'Lattice', result: 'Models conversions accurately when signal integrity is maintained consistently' },
              ].map((item, i) => (
                <div key={i} className={`${i < 2 ? 'sm:border-r sm:border-white/[0.06]' : ''} sm:pr-6 last:pr-0`}>
                  <div className="text-gold font-bold text-base mb-2 font-serif">{item.system}</div>
                  <div className="text-sm text-slate-300 font-sans leading-relaxed">{item.result}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
