import { Search, BarChart3, Rocket, FileBarChart } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const deliverables = [
  {
    icon: Search,
    title: 'Comprehensive Audit',
    description:
      'A thorough analysis of your current site health, keyword positions, competitor landscape, and opportunity gaps. Not a templated report -- a custom roadmap.',
  },
  {
    icon: BarChart3,
    title: 'Clear Strategy',
    description:
      'A prioritised action plan that explains what needs to happen, why it matters, and what results to expect. No jargon, no guesswork.',
  },
  {
    icon: Rocket,
    title: 'Consistent Execution',
    description:
      'Monthly implementation of technical fixes, content creation, on-page optimisation, and link building. Real work that compounds over time.',
  },
  {
    icon: FileBarChart,
    title: 'Transparent Reporting',
    description:
      'Monthly reports showing keyword rankings, traffic changes, lead generation, and ROI. You always know exactly what is being done and what it is producing.',
  },
];

const redFlags = [
  'Guaranteed rankings within a specific timeframe',
  'Secret proprietary techniques they cannot explain',
  'Extremely low pricing that seems too good to be true',
  'No reporting or transparency on work performed',
  'Focus on vanity metrics instead of leads and revenue',
];

export default function SEODelivers() {
  return (
    <section className="bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(200,161,78,0.05),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-14 sm:mb-20">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
            Expectations
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
            What a Professional SEO Company Should Deliver
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              The gap between good SEO and wasted money often comes down to four things.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {deliverables.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimateOnScroll
                key={index}
                stagger={index + 1}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-7 hover:border-gold/20 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 font-serif">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-sans">{item.description}</p>
              </AnimateOnScroll>
            );
          })}
        </div>

        <AnimateOnScroll>
          <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.04] p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-5 font-serif">Red Flags to Watch For</h3>
            <ul className="space-y-3">
              {redFlags.map((flag, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-slate-300 font-sans">
                  <span className="text-red-400 mt-0.5 shrink-0">&#10005;</span>
                  {flag}
                </li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
