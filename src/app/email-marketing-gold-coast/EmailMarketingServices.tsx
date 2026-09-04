import { Target, Users, Zap, Mail, BarChart3 } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const pillars = [
  {
    number: '01',
    icon: Target,
    title: 'Strategy & Planning',
    points: [
      'Define your audience segments and buying triggers',
      'Map the customer journey from first touch to repeat purchase',
      'Set measurable goals tied to revenue, not vanity metrics',
      'Build a content calendar aligned with business objectives',
    ],
  },
  {
    number: '02',
    icon: Users,
    title: 'Database Growth',
    points: [
      'Grow your list with lead magnets that attract qualified prospects',
      'Implement sign-up forms and landing pages that convert',
      'Clean and segment your existing database for better targeting',
      'Build referral and re-engagement paths to recover lost contacts',
    ],
  },
  {
    number: '03',
    icon: Zap,
    title: 'Automation Systems',
    points: [
      'Welcome sequences that convert subscribers into customers',
      'Abandoned cart and follow-up flows that recover lost sales',
      'Post-purchase sequences that drive reviews and repeat orders',
      'Re-engagement campaigns that reactivate dormant contacts',
    ],
  },
  {
    number: '04',
    icon: Mail,
    title: 'Campaign Management',
    points: [
      'Regular campaigns with conversion-focused copywriting',
      'A/B testing subject lines, send times, and content layouts',
      'Seasonal and promotional campaigns timed to your business cycle',
      'Personalised content based on customer behaviour and preferences',
    ],
  },
  {
    number: '05',
    icon: BarChart3,
    title: 'Reporting & Optimisation',
    points: [
      'Monthly performance reports in plain language',
      'Track open rates, click rates, conversions, and revenue attribution',
      'Identify what is working and cut what is not',
      'Continuous improvement based on real data, not assumptions',
    ],
  },
];

const serviceTypes = [
  { business: 'Trades & services', strategy: 'Automated follow-ups, seasonal reminders, quote nurture sequences' },
  { business: 'Real estate', strategy: 'Market updates, listing alerts, long-term database nurturing' },
  { business: 'E-commerce', strategy: 'Cart recovery, post-purchase flows, product launch campaigns' },
  { business: 'Hospitality & tourism', strategy: 'Event promotion, seasonal offers, loyalty and repeat visit campaigns' },
  { business: 'Event organisers', strategy: 'Ticket sales funnels, countdown sequences, post-event follow-ups' },
];

export default function EmailMarketingServices() {
  return (
    <section className="bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,161,78,0.05),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(200,161,78,0.03),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-14 sm:mb-20">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
            The Service
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
            What Gold Coast Email Marketing Actually Involves
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              Most people think email marketing is sending a newsletter once a month. It is not. A proper email
              marketing service covers five core pillars -- each one contributing to measurable business growth.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="relative">
          <div className="absolute left-8 sm:left-10 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent hidden md:block" />

          <div className="space-y-6 sm:space-y-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <AnimateOnScroll key={index} stagger={index + 1} className="group relative">
                  <div className="md:pl-24 relative">
                    <div className="absolute left-0 top-6 hidden md:flex items-center justify-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gold/5 border border-gold/20 flex items-center justify-center group-hover:bg-gold/10 group-hover:border-gold/40 transition-all duration-300">
                        <span className="text-gold font-bold text-lg sm:text-xl font-serif">{pillar.number}</span>
                      </div>
                    </div>

                    <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-6 sm:p-8 hover:border-gold/20 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300">
                      <div className="flex items-start gap-5">
                        <div className="md:hidden shrink-0 w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                          <span className="text-gold font-bold text-sm font-serif">{pillar.number}</span>
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                              <Icon className="w-4.5 h-4.5 text-gold" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-white font-serif">
                              {pillar.title}
                            </h3>
                          </div>
                          <ul className="space-y-2.5">
                            {pillar.points.map((point, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
                                <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-gold/50" />
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold/[0.03] to-transparent rounded-2xl pointer-events-none" />
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>

        <AnimateOnScroll className="mt-14 sm:mt-20 text-center">
          <div className="inline-block relative">
            <div className="absolute -inset-x-6 -inset-y-3 bg-gold/5 rounded-2xl blur-sm" />
            <p className="relative text-lg sm:text-xl text-white font-semibold font-serif">
              Without these layers, email becomes noise.
              <span className="text-gold"> With them, it becomes revenue.</span>
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-20 sm:mt-28">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5 font-serif">
              Types of Email Marketing Services Gold Coast Businesses Use
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                Different businesses need different approaches. Here is what works for each.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="hidden sm:block rounded-2xl border border-white/[0.08] overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gold/[0.08] border-b border-gold/20">
                    <th className="text-left px-6 py-4 text-sm font-bold text-gold uppercase tracking-wider font-sans">
                      Business Type
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-bold text-gold uppercase tracking-wider font-sans">
                      Most Effective Strategy
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {serviceTypes.map((row, index) => (
                    <tr
                      key={index}
                      className={`border-b border-white/[0.04] ${index % 2 === 0 ? 'bg-white/[0.01]' : 'bg-white/[0.025]'}`}
                    >
                      <td className="px-6 py-4 text-sm font-semibold text-white font-sans">{row.business}</td>
                      <td className="px-6 py-4 text-sm text-slate-300 leading-relaxed font-sans">{row.strategy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="sm:hidden space-y-4">
              {serviceTypes.map((row, index) => (
                <div key={index} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                  <h3 className="text-sm font-bold text-gold mb-2 font-sans">{row.business}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans">{row.strategy}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll className="mt-12">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08]">
              <img
                src="/email/email-marketing-services.jpg"
                alt="Laptop showing email automation workflow for Gold Coast business"
                className="w-full h-auto object-cover aspect-[16/9] sm:aspect-[21/9]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
