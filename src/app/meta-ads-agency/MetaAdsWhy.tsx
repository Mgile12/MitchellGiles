import { TrendingDown, Layers, BarChart2, Zap, GitMerge } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const reasons = [
  {
    icon: TrendingDown,
    title: 'Rising CPAs',
    description: 'Cost per acquisition climbs month over month despite maintaining the same audience and spend levels.',
  },
  {
    icon: Layers,
    title: 'Scaling Plateaus',
    description: 'Performance stalls when budget increases. What worked at $50/day collapses at $500/day.',
  },
  {
    icon: BarChart2,
    title: 'Unreliable Tracking',
    description: 'Numbers in Ads Manager do not match revenue in the CRM. Attribution is broken or misleading.',
  },
  {
    icon: Zap,
    title: 'Creative Burnout',
    description: 'Ads stop working after 1–2 weeks. Constant production with no systematic testing framework.',
  },
  {
    icon: GitMerge,
    title: 'Attribution Mismatch',
    description: 'Meta claims 50 conversions. The CRM shows 12. No one knows what is actually driving revenue.',
  },
];

const pillars = [
  { title: 'Offer & Positioning', desc: 'The foundation. Weak offers cannot be fixed with better targeting.' },
  { title: 'Creative Strategy', desc: 'The variable that moves the needle most. Creative is the new targeting.' },
  { title: 'Campaign Architecture', desc: 'Structure that supports the algorithm rather than fighting it.' },
  { title: 'Signal Quality', desc: 'Clean conversion data that feeds Lattice and improves modelling accuracy.' },
  { title: 'Optimisation Velocity', desc: 'Consistent weekly decisions based on data, not emotion.' },
];

export default function MetaAdsWhy() {
  return (
    <section className="bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(200,161,78,0.04),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-14 sm:mb-20">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
            The Real Problem
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
            Why Businesses Search for a Meta Ads Agency
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Meta in 2025 is not set it and forget it. It is signal-driven, creative-led and algorithm-dependent.
            That is where expertise matters.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16 sm:mb-24">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimateOnScroll
                key={index}
                stagger={index + 1}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-gold/20 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 font-serif">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-sans">{item.description}</p>
              </AnimateOnScroll>
            );
          })}
          <AnimateOnScroll
            stagger={6}
            className="sm:col-span-2 lg:col-span-1 rounded-2xl border border-gold/20 bg-gold/[0.04] p-6 flex flex-col justify-center"
          >
            <div className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-3 font-sans">The Pattern</div>
            <p className="text-white font-semibold text-base font-serif leading-snug">
              Most agencies obsess over targeting. Professionals obsess over signals and creative.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <AnimateOnScroll>
            <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
              What We Actually Control
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5 font-serif">
              Five Core Pillars of Real Meta Ads Management
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-sans">
              A strong Meta Ads Agency does not just run ads. They manage the entire system that makes campaigns
              perform predictably — from offer architecture through to signal integrity.
            </p>

            <div className="space-y-4">
              {pillars.map((pillar, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center mt-0.5">
                    <span className="text-gold font-bold text-xs font-serif">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white mb-1 font-serif">{pillar.title}</div>
                    <div className="text-sm text-slate-400 font-sans leading-relaxed">{pillar.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll stagger={2}>
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/30">
              <img
                src="/meta-ads-specialist-facebook-ads-manager-review.jpg"
                alt="Meta Ads specialist reviewing Facebook Ads Manager"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-navy-950/85 backdrop-blur-sm rounded-xl border border-white/[0.08] px-5 py-4">
                  <p className="text-sm text-slate-300 font-sans leading-relaxed">
                    <span className="text-gold font-semibold">Signal quality over audience size.</span> The agencies
                    scaling profitably on Meta focus on what the algorithm can learn — not how narrowly they can target.
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
