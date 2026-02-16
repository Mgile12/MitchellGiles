import { Wrench, Briefcase, Home, Heart } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const industries = [
  {
    icon: Wrench,
    title: 'Trades & Services',
    description:
      'Plumbers, electricians, builders, cleaners, and landscapers. Suburb-level targeting, emergency-intent keywords, and lead capture that converts searchers into booked jobs.',
  },
  {
    icon: Briefcase,
    title: 'Professional Services',
    description:
      'Accountants, lawyers, financial planners, and consultants. Trust-building content, authority positioning, and nurture sequences that convert high-value prospects.',
  },
  {
    icon: Home,
    title: 'Real Estate',
    description:
      'Agents, property managers, and developers. Listing promotion, buyer and seller lead capture, suburb-focused SEO, and automated follow-up systems.',
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    description:
      'Dentists, physios, chiropractors, and gyms. Appointment booking funnels, local SEO dominance, and retention campaigns that maximise lifetime value.',
  },
];

export default function LeadGenIndustries() {
  return (
    <section className="bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(200,161,78,0.05),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-14 sm:mb-20">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
            Industry Focus
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
            Lead Generation by Industry
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              The framework adapts to your industry. The targeting, messaging, and conversion approach
              changes based on how your customers search and buy.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {industries.map((item, index) => {
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
      </div>
    </section>
  );
}
