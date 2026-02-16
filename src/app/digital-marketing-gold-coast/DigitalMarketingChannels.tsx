import Link from 'next/link';
import { Search, Megaphone, Mail, Cog } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const channels = [
  {
    icon: Search,
    title: 'SEO',
    description:
      'Build organic visibility that compounds over time. Technical audits, on-page optimisation, local SEO, and content strategy that earns sustainable traffic.',
    href: '/seo-gold-coast',
    linkLabel: 'SEO Gold Coast',
  },
  {
    icon: Megaphone,
    title: 'Google Ads',
    description:
      'Immediate visibility for high-intent searches. Precision targeting, conversion tracking, and budget optimisation that turns ad spend into qualified leads.',
    href: '/google-ads-gold-coast',
    linkLabel: 'Google Ads Gold Coast',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description:
      'Turn your database into predictable monthly revenue. Strategy, automation, campaign management, and reporting that nurtures leads and drives repeat business.',
    href: '/email-marketing-gold-coast',
    linkLabel: 'Email Marketing Gold Coast',
  },
  {
    icon: Cog,
    title: 'Marketing Automation',
    description:
      'Build systems that scale without adding headcount. CRM integration, lead scoring, nurture sequences, and conversion tracking that runs while you sleep.',
    href: '/marketing-automation-gold-coast',
    linkLabel: 'Marketing Automation Gold Coast',
  },
];

export default function DigitalMarketingChannels() {
  return (
    <section className="bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,161,78,0.04),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-14 sm:mb-20">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
            The Channels
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
            Four Channels, One Integrated Strategy
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              Each channel has a specific role. Together, they create a system where leads are generated,
              nurtured, and converted without gaps or wasted effort.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {channels.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimateOnScroll
                key={index}
                stagger={index + 1}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 hover:border-gold/20 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-serif">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5 font-sans">{item.description}</p>
                <Link
                  href={item.href}
                  className="text-sm font-semibold text-gold hover:text-gold-light transition-colors duration-200 font-sans"
                >
                  {item.linkLabel} &rarr;
                </Link>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
