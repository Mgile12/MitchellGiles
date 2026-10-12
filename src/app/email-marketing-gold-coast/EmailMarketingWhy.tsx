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
  { metric: '63.4%', label: 'of one store’s monthly revenue from email, in a 30-day window' },
  { metric: '72%', label: 'open rate on one campaign to a list the client already had' },
  { metric: '$60,632', label: 'attributed to email in 30 days, from the store’s own list' },
];

export default function EmailMarketingWhy() {
  return (
    <section id="why-email" className="bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.45),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-14 sm:mb-20">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
            Why Email Works Here
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink mb-5 font-serif">
            Why Email Marketing Still Wins on the Gold Coast
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-ink/80 leading-relaxed font-sans">
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
                    className="rounded-2xl border border-ink/[0.06] bg-white/55 p-6 hover:border-gold/20 hover:bg-white/85 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="text-base font-bold text-ink mb-2 font-serif">{benefit.title}</h3>
                    <p className="text-sm text-ink/65 leading-relaxed font-sans">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll stagger={2}>
            <div className="relative rounded-2xl overflow-hidden border border-ink/[0.08]">
              <img
                src="/email/email-marketing-why.jpg"
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
                <p className="text-sm text-ink/65 font-sans">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-base sm:text-lg text-ink/80 leading-relaxed font-sans">
            Unlike social media, where reach is dictated by algorithms and ad spend, your email list is an{' '}
            <span className="text-ink font-semibold">owned asset</span>. No platform changes can take it away.
            That makes it one of the most reliable growth channels available to any Gold Coast business.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
