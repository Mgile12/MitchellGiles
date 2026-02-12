import { Wrench, Briefcase, UtensilsCrossed, Home, Ticket } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const industries = [
  {
    icon: Wrench,
    title: 'Trades & Home Services',
    description:
      'Automated follow-ups after quotes, seasonal maintenance reminders, and referral prompts that keep your calendar full without chasing leads.',
  },
  {
    icon: Briefcase,
    title: 'Professional Services',
    description:
      'Build trust and authority with educational content sequences. Stay top-of-mind so when prospects are ready to buy, you are the first call.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Hospitality & Tourism',
    description:
      'Stabilise seasonal revenue with targeted promotions, event announcements, and loyalty campaigns that drive repeat visits year-round.',
  },
  {
    icon: Home,
    title: 'Real Estate',
    description:
      'Database marketing at scale. Market updates, new listing alerts, and long-term nurture sequences that keep you top-of-mind across buying cycles.',
  },
  {
    icon: Ticket,
    title: 'Event-Based Businesses',
    description:
      'Ticket sales funnels, countdown email sequences, waitlist campaigns, and post-event follow-ups that maximise attendance and lifetime value.',
  },
];

export default function EmailMarketingIndustries() {
  return (
    <section className="bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(200,161,78,0.04),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-14 sm:mb-20">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
            Industry Focus
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
            Local Gold Coast Industries That Benefit Most
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              Email marketing works across industries, but the strategy must fit the business.
              Here is how we approach each.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <AnimateOnScroll
                key={index}
                stagger={index + 1}
                className={`rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-7 hover:border-gold/20 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300 ${
                  index >= 3 ? 'lg:col-span-1 sm:col-span-1' : ''
                }`}
              >
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 font-serif">{industry.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-sans">{industry.description}</p>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
