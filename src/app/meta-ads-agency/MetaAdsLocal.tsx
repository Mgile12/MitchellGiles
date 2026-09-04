import { MapPin, TrendingUp } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const goldCoastPoints = [
  { point: 'Tourism cycles', detail: 'Seasonal demand spikes affect CPMs and audience saturation — timing matters.' },
  { point: 'Event-driven demand', detail: 'Major events create short windows of high-intent traffic worth capitalising on.' },
  { point: 'Service-based economy', detail: 'Strong local demand for trades, health, education and hospitality businesses.' },
  { point: 'Suburb-driven buying patterns', detail: 'Audiences in Mermaid Beach, Broadbeach and Burleigh Heads convert differently.' },
];

const brisbanePoints = [
  { point: 'Higher CPMs', detail: 'More competitive market means stronger creative hooks are non-negotiable.' },
  { point: 'Larger audiences', detail: 'Greater reach potential but requires tighter segmentation to stay efficient.' },
  { point: 'B2B opportunities', detail: 'More corporate and professional service demand than the Gold Coast.' },
  { point: 'Robust retargeting systems', detail: 'Larger pools mean retargeting sequences can be more sophisticated.' },
];

export default function MetaAdsLocal() {
  return (
    <section className="bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,161,78,0.04),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-14 sm:mb-20">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
            Local Context
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
            Meta Ads in the Gold Coast & Brisbane Market
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Local behaviour matters. The same campaign structure that works in Sydney behaves differently in
            South East Queensland. Understanding these market-specific dynamics directly impacts campaign efficiency.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <AnimateOnScroll stagger={1}>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-serif">Gold Coast</h3>
                  <p className="text-xs text-slate-500 font-sans">Suburb-driven, seasonal, service-heavy</p>
                </div>
              </div>

              <div className="space-y-4">
                {goldCoastPoints.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-gold text-[8px] mt-2 shrink-0">&#9670;</span>
                    <div>
                      <span className="text-sm font-semibold text-white font-serif">{item.point}: </span>
                      <span className="text-sm text-slate-400 font-sans">{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <p className="text-xs text-slate-500 uppercase tracking-widest font-sans mb-2">Local insight</p>
                <p className="text-sm text-slate-300 font-sans leading-relaxed">
                  A specialist understands when Gold Coast CPMs spike seasonally, how audience saturation
                  affects cost in smaller suburbs, and where geographic layering adds the most value.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll stagger={2}>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-serif">Brisbane</h3>
                  <p className="text-xs text-slate-500 font-sans">Broader, more competitive, B2B potential</p>
                </div>
              </div>

              <div className="space-y-4">
                {brisbanePoints.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-gold text-[8px] mt-2 shrink-0">&#9670;</span>
                    <div>
                      <span className="text-sm font-semibold text-white font-serif">{item.point}: </span>
                      <span className="text-sm text-slate-400 font-sans">{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <p className="text-xs text-slate-500 uppercase tracking-widest font-sans mb-2">Local insight</p>
                <p className="text-sm text-slate-300 font-sans leading-relaxed">
                  Brisbane campaigns need stronger creative hooks to cut through higher competition.
                  Clearer audience segmentation and robust retargeting sequences deliver the best cost-per-lead outcomes.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll>
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/30">
            <div className="w-full h-64 sm:h-80 bg-navy-950 relative" aria-hidden="true">
              <div className="grid-ground absolute inset-0" />
              <div className="glow w-[520px] h-[520px] -top-40 right-[-10%]" style={{ ['--glow-a' as string]: '0.2' }} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="p-8 sm:p-12 max-w-xl">
                <p className="text-xs text-gold font-semibold tracking-[0.2em] uppercase font-sans mb-3">
                  GEM in Action
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif mb-4 leading-snug">
                  Local context improves campaign efficiency
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                  When distribution is structured with local market knowledge, GEM can identify profitable
                  micro-clusters faster — reducing wasted spend in the learning phase.
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
