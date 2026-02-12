import { CheckSquare } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const checklistItems = [
  'Do you have a defined email marketing strategy?',
  'Are your campaigns segmented by audience behaviour?',
  'Do you have at least one active automation sequence?',
  'Can you track revenue generated from email?',
  'Are you growing your list with intentional lead capture?',
];

const benchmarks = [
  { metric: 'Open Rate', range: '20 - 40%' },
  { metric: 'Click Rate', range: '2 - 8%' },
  { metric: 'Conversion Rate', range: '1 - 5%' },
  { metric: 'Unsubscribe Rate', range: 'Under 0.5%' },
];

export default function EmailMarketingChecklist() {
  return (
    <section className="bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,161,78,0.04),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-14 sm:mb-20">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
            Self-Assessment
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
            Practical Email Marketing Checklist for Managers
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              Before you hire anyone, audit what you already have. Answer these five questions honestly.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <AnimateOnScroll>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8">
              <ul className="space-y-5">
                {checklistItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckSquare className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-xl border-l-2 border-gold/40 bg-gold/[0.04] p-5">
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
                  If you answered <span className="text-gold font-semibold">no to 3 or more</span>, there is
                  immediate opportunity to improve your email marketing performance and recover lost revenue.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll stagger={2}>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
              <div className="px-6 sm:px-8 py-5 border-b border-white/[0.06]">
                <h3 className="text-lg font-bold text-white font-serif">Performance Benchmarks</h3>
                <p className="text-sm text-slate-400 mt-1 font-sans">Healthy ranges for Gold Coast businesses</p>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="bg-gold/[0.06] border-b border-gold/15">
                    <th className="text-left px-6 sm:px-8 py-3 text-xs font-bold text-gold uppercase tracking-wider font-sans">
                      Metric
                    </th>
                    <th className="text-right px-6 sm:px-8 py-3 text-xs font-bold text-gold uppercase tracking-wider font-sans">
                      Healthy Range
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {benchmarks.map((row, index) => (
                    <tr key={index} className={`border-b border-white/[0.04] ${index % 2 === 0 ? 'bg-white/[0.01]' : 'bg-white/[0.025]'}`}>
                      <td className="px-6 sm:px-8 py-3.5 text-sm font-medium text-white font-sans">{row.metric}</td>
                      <td className="px-6 sm:px-8 py-3.5 text-sm text-slate-300 text-right font-sans">{row.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
