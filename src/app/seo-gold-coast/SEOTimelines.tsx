import AnimateOnScroll from '@/components/AnimateOnScroll';

const phases = [
  {
    period: 'Month 1-2',
    title: 'Foundation & Audit',
    description: 'Technical audit, competitor analysis, keyword research, Google Business Profile optimisation, and strategy development.',
    status: 'Setup',
  },
  {
    period: 'Month 3-4',
    title: 'Implementation',
    description: 'Technical fixes deployed, on-page optimisation across priority pages, content creation begins, initial link building.',
    status: 'Building',
  },
  {
    period: 'Month 4-6',
    title: 'Traction',
    description: 'Rankings start moving, organic traffic increases, local visibility improves. First measurable leads from organic search.',
    status: 'Growing',
  },
  {
    period: 'Month 6+',
    title: 'Compounding Growth',
    description: 'Authority builds, rankings stabilise and climb, content drives consistent traffic. SEO becomes a predictable lead channel.',
    status: 'Scaling',
  },
];

export default function SEOTimelines() {
  return (
    <section className="bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,161,78,0.04),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-14 sm:mb-20">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
            Realistic Expectations
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
            SEO Timeline: What to Expect and When
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              SEO is not instant. Anyone who tells you otherwise is lying. Here is what a realistic timeline
              looks like for a Gold Coast business.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <AnimateOnScroll key={index} stagger={index + 1} className="relative">
                <div className="sm:pl-16 relative">
                  <div className="absolute left-0 top-4 hidden sm:flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-gold" />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 hover:border-gold/20 hover:bg-white/[0.04] transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                      <span className="text-gold font-bold text-lg font-serif">{phase.period}</span>
                      <span className="hidden sm:block text-slate-600">&#8212;</span>
                      <span className="text-xs font-semibold tracking-[0.15em] uppercase text-slate-500 font-sans">{phase.status}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 font-serif">{phase.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-sans">{phase.description}</p>
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
