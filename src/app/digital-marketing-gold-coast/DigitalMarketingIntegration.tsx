import AnimateOnScroll from '@/components/AnimateOnScroll';

const journeySteps = [
  {
    stage: 'Discovery',
    description: 'A prospect searches Google for a service you offer. Your SEO rankings or Google Ads put you in front of them at the moment of intent.',
  },
  {
    stage: 'Capture',
    description: 'They land on an optimised page and opt in -- downloading a guide, requesting a quote, or booking a call. Now they are in your system.',
  },
  {
    stage: 'Nurture',
    description: 'Email automation delivers value, builds trust, and positions your business as the obvious choice. No manual follow-up required.',
  },
  {
    stage: 'Convert',
    description: 'The prospect becomes a customer. The sale happens because the system moved them from awareness to trust to action without a single dropped touchpoint.',
  },
  {
    stage: 'Retain & Grow',
    description: 'Post-purchase automation drives repeat business, referrals, and reviews. Customer lifetime value increases with every cycle.',
  },
];

export default function DigitalMarketingIntegration() {
  return (
    <section className="bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(200,161,78,0.05),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-14 sm:mb-20">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
            Why Integration Matters
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
            The Prospect Journey: From Search to Sale
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              When your channels are connected, every interaction moves the prospect closer to a decision.
              No channel works alone -- each handoff is seamless.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {journeySteps.map((step, index) => (
              <AnimateOnScroll key={index} stagger={index + 1} className="relative">
                <div className="sm:pl-16 relative">
                  <div className="absolute left-0 top-4 hidden sm:flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                      <span className="text-gold font-bold text-xs font-serif">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 hover:border-gold/20 hover:bg-white/[0.04] transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2 sm:hidden">
                      <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                        <span className="text-gold font-bold text-xs font-serif">{String(index + 1).padStart(2, '0')}</span>
                      </div>
                      <span className="text-gold font-bold text-lg font-serif">{step.stage}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 font-serif hidden sm:block">{step.stage}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-sans">{step.description}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
