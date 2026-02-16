import Link from 'next/link';
import { Search, Megaphone, Mail, Cog, BarChart3 } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const connections = [
  {
    icon: Search,
    title: 'SEO',
    description: 'Organic rankings generate free leads that compound over time. SEO-driven leads are some of the highest quality because they come from active search intent.',
    href: '/seo-gold-coast',
    linkLabel: 'SEO Gold Coast',
  },
  {
    icon: Megaphone,
    title: 'Google Ads',
    description: 'Immediate visibility for high-intent searches. Google Ads fills the pipeline fast while SEO builds the long-term organic asset.',
    href: '/google-ads-gold-coast',
    linkLabel: 'Google Ads Gold Coast',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Nurture captured leads with automated sequences that build trust and drive conversions. The bridge between lead capture and revenue.',
    href: '/email-marketing-gold-coast',
    linkLabel: 'Email Marketing Gold Coast',
  },
  {
    icon: Cog,
    title: 'Marketing Automation',
    description: 'CRM integration, lead scoring, and automated follow-up ensure no lead falls through the cracks.',
    href: '/marketing-automation-gold-coast',
    linkLabel: 'Marketing Automation Gold Coast',
  },
  {
    icon: BarChart3,
    title: 'Digital Marketing',
    description: 'Lead generation works best as part of an integrated digital strategy where all channels reinforce each other.',
    href: '/digital-marketing-gold-coast',
    linkLabel: 'Digital Marketing Gold Coast',
  },
];

export default function LeadGenIntegration() {
  return (
    <section className="bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(200,161,78,0.05),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-14 sm:mb-20">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
            Connected Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
            How Lead Generation Connects to Everything Else
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              Lead generation is not a standalone service. It performs best when every marketing channel feeds the same system.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {connections.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimateOnScroll
                key={index}
                stagger={index + 1}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-gold/20 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 font-serif">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-3 font-sans">{item.description}</p>
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
