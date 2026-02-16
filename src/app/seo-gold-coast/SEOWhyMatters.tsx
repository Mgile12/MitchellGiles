import { TrendingUp, MapPin, Users, Calendar, Building2 } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const reasons = [
  {
    icon: Building2,
    title: 'Competitive Trades & Services',
    description:
      'Plumbers, electricians, builders, and cleaners are all fighting for the same suburb-level keywords. If you are not ranking, your competitor is getting that call.',
  },
  {
    icon: TrendingUp,
    title: 'Growing Professional Services',
    description:
      'Accountants, lawyers, financial planners, and consultants on the Gold Coast rely on trust-based search. Organic rankings signal credibility before a prospect ever picks up the phone.',
  },
  {
    icon: MapPin,
    title: 'Suburb-Specific Demand',
    description:
      'People search for services in their suburb. "Plumber Burleigh Heads" and "plumber Southport" are different markets. Local SEO captures this hyper-targeted intent.',
  },
  {
    icon: Calendar,
    title: 'Seasonal Traffic Patterns',
    description:
      'Tourism, events, and seasonal demand create predictable search spikes. The businesses ranking when those spikes hit capture the most revenue.',
  },
  {
    icon: Users,
    title: 'Real Estate & Property Heavy',
    description:
      'The Gold Coast property market drives enormous search volume. Agents, property managers, and related services need consistent organic visibility to compete.',
  },
];

const stats = [
  { value: '68%', label: 'of online experiences begin with a search engine' },
  { value: '75%', label: 'of users never scroll past the first page' },
  { value: '14.6%', label: 'close rate for SEO leads vs 1.7% for outbound' },
];

export default function SEOWhyMatters() {
  return (
    <section id="why-seo" className="bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,161,78,0.04),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-14 sm:mb-20">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
            Why It Matters
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
            Why SEO Matters More on the Gold Coast Than You Think
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              The Gold Coast is not a single market. It is a collection of suburbs, industries, and seasonal patterns
              that create unique search demand. Generic SEO strategies miss this entirely.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((item, index) => {
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center rounded-2xl border border-gold/15 bg-gold/[0.04] p-6"
              >
                <p className="text-3xl sm:text-4xl font-bold text-gold mb-2 font-serif">{stat.value}</p>
                <p className="text-sm text-slate-400 font-sans">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
