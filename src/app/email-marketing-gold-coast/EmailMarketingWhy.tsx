import { TrendingUp, Heart, DollarSign, Sun } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const benefits = [
  {
    icon: Heart,
    title: 'Builds Relationships',
    description: 'Stay top-of-mind with past clients and warm leads without relying on algorithms.',
  },
  {
    icon: DollarSign,
    title: 'Reduces Paid Ad Reliance',
    description: 'Generate revenue from your existing database instead of paying for every click.',
  },
  {
    icon: TrendingUp,
    title: 'Increases Lifetime Value',
    description: 'Turn one-time buyers into repeat customers through targeted follow-up sequences.',
  },
  {
    icon: Sun,
    title: 'Smooths Seasonal Dips',
    description: 'Keep cash flow consistent through quieter months with strategic campaigns.',
  },
];

const stats = [
  { metric: '20-40%', label: 'Typical open rates' },
  { metric: '$36-42', label: 'Return per $1 spent' },
  { metric: '6x', label: 'More clicks than social' },
];

export default function EmailMarketingWhy() {
  return (
    <section id="why-email" className="bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(200,161,78,0.05),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-14 sm:mb-20">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
            Why Email Works Here
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
            Why Email Marketing Still Wins on the Gold Coast
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              The Gold Coast is one of the most competitive local markets in Australia. High competition, seasonal
              tourism swings, a strong SME presence, and customers who expect repeat value -- this is exactly the
              environment where email marketing delivers the strongest returns.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          <AnimateOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-gold/20 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2 font-serif">{benefit.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-sans">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll stagger={2}>
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08]">
              <img
                src="/gold-coast-email-marketing-analytics-review.jpg"
                alt="Gold Coast business owner reviewing email campaign analytics and performance data"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center rounded-2xl border border-gold/15 bg-gold/[0.03] p-6"
              >
                <p className="text-3xl sm:text-4xl font-bold text-gold mb-1 font-serif">{stat.metric}</p>
                <p className="text-sm text-slate-400 font-sans">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Unlike social media, where reach is dictated by algorithms and ad spend, your email list is an{' '}
            <span className="text-white font-semibold">owned asset</span>. No platform changes can take it away.
            That makes it one of the most reliable growth channels available to any Gold Coast business.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
