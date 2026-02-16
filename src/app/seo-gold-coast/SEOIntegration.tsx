import Link from 'next/link';
import { Megaphone, Mail, BarChart3 } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const connections = [
  {
    icon: Megaphone,
    title: 'SEO + Google Ads',
    description:
      'Use SEO data to inform your ad targeting. Run ads for immediate visibility while organic rankings build. Reduce ad spend as organic traffic grows.',
    href: '/google-ads-gold-coast',
    linkLabel: 'Google Ads Gold Coast',
  },
  {
    icon: Mail,
    title: 'SEO + Email Marketing',
    description:
      'Capture organic traffic with lead magnets and convert visitors into email subscribers. Turn anonymous search traffic into a retargetable database.',
    href: '/email-marketing-gold-coast',
    linkLabel: 'Email Marketing Gold Coast',
  },
  {
    icon: BarChart3,
    title: 'SEO + Digital Strategy',
    description:
      'SEO is one channel in a broader system. When integrated with paid ads, email, and automation, each channel amplifies the others.',
    href: '/digital-marketing-gold-coast',
    linkLabel: 'Digital Marketing Gold Coast',
  },
];

export default function SEOIntegration() {
  return (
    <section className="bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(200,161,78,0.05),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-14 sm:mb-20">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
            Full-Stack Approach
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
            How SEO Integrates With Your Broader Strategy
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              SEO does not exist in isolation. The biggest returns come when organic search works alongside
              your paid advertising, email marketing, and automation systems.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {connections.map((item, index) => {
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
                <p className="text-sm text-slate-400 leading-relaxed mb-4 font-sans">{item.description}</p>
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
