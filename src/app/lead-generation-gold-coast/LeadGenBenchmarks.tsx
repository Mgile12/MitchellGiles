import AnimateOnScroll from '@/components/AnimateOnScroll';

const benchmarks = [
  { metric: 'Cost Per Lead', range: '$15 - $150+', note: 'Varies by industry and competition level' },
  { metric: 'Landing Page Conversion', range: '5% - 25%', note: 'Depends on offer strength and page quality' },
  { metric: 'Email Open Rate', range: '25% - 45%', note: 'Segmented, targeted lists outperform generic blasts' },
  { metric: 'Lead Response Time', range: 'Under 5 min', note: 'Speed to lead is the single biggest conversion factor' },
];

export default function LeadGenBenchmarks() {
  return (
    <section className="bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(200,161,78,0.04),transparent_60%)]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-14">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
            Performance Benchmarks
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5 font-serif">
            What Good Lead Generation Looks Like
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
            These benchmarks give you a realistic picture of what to expect from a well-run lead generation system
            on the Gold Coast.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
            <div className="hidden sm:grid grid-cols-3 gap-0 border-b border-white/[0.06] bg-white/[0.03]">
              <div className="px-6 py-4 text-sm font-semibold text-gold tracking-wide uppercase font-sans">Metric</div>
              <div className="px-6 py-4 text-sm font-semibold text-gold tracking-wide uppercase font-sans">Benchmark</div>
              <div className="px-6 py-4 text-sm font-semibold text-gold tracking-wide uppercase font-sans">Note</div>
            </div>
            {benchmarks.map((row, index) => (
              <div
                key={index}
                className={`sm:grid sm:grid-cols-3 gap-0 p-6 sm:p-0 ${
                  index < benchmarks.length - 1 ? 'border-b border-white/[0.06]' : ''
                }`}
              >
                <div className="sm:px-6 sm:py-5">
                  <span className="text-xs text-gold uppercase tracking-wide sm:hidden font-sans">Metric</span>
                  <p className="text-sm font-semibold text-white font-sans">{row.metric}</p>
                </div>
                <div className="sm:px-6 sm:py-5 mt-2 sm:mt-0">
                  <span className="text-xs text-gold uppercase tracking-wide sm:hidden font-sans">Benchmark</span>
                  <p className="text-sm text-slate-300 font-sans">{row.range}</p>
                </div>
                <div className="sm:px-6 sm:py-5 mt-2 sm:mt-0">
                  <span className="text-xs text-gold uppercase tracking-wide sm:hidden font-sans">Note</span>
                  <p className="text-sm text-slate-500 font-sans">{row.note}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
