import Link from 'next/link';
import { MapPin, Search, Megaphone, Layers, Mail, Target, Cog, BarChart3, ArrowUpRight } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import Eyebrow from './Eyebrow';

const services = [
  {
    title: 'Google Business Profile',
    blurb: 'Top 3 on Google Maps. The cheapest customers a local business will ever get.',
    href: '/google-business-profile-gold-coast',
    icon: MapPin,
  },
  {
    title: 'SEO',
    blurb: 'Rank for what people in your suburb actually type, not what a keyword tool says.',
    href: '/seo-gold-coast',
    icon: Search,
  },
  {
    title: 'Google Ads',
    blurb: 'Search campaigns tracked to the phone call, so you know what every dollar bought.',
    href: '/google-ads-gold-coast',
    icon: Megaphone,
  },
  {
    title: 'Meta Ads',
    blurb: 'Facebook and Instagram campaigns built around an offer, not a boost button.',
    href: '/meta-ads-agency',
    icon: Layers,
  },
  {
    title: 'Email Marketing',
    blurb: 'Turn the list you already own into revenue. One client does 63% of monthly sales from it.',
    href: '/email-marketing-gold-coast',
    icon: Mail,
  },
  {
    title: 'Lead Generation',
    blurb: 'A pipeline you can count on every week, not a spike you can&apos;t repeat.',
    href: '/lead-generation-gold-coast',
    icon: Target,
  },
  {
    title: 'Marketing Automation',
    blurb: 'Follow-up that happens whether or not you&apos;re on the tools that day.',
    href: '/marketing-automation-gold-coast',
    icon: Cog,
  },
  {
    title: 'Digital Marketing Strategy',
    blurb: 'The plan that decides which of the above you actually need, and in what order.',
    href: '/digital-marketing-gold-coast',
    icon: BarChart3,
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-navy-900 relative overflow-hidden" aria-labelledby="services-heading">
      <div className="grid-ground absolute inset-0" aria-hidden="true" />
      <div className="glow w-[560px] h-[560px] -top-48 right-[-8%]" style={{ ['--glow-a' as string]: '0.14' }} aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-12 sm:mb-16">
          <Eyebrow className="mb-4">What I help with</Eyebrow>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif"
          >
            Pick the problem. I&apos;ll pick the channel.
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 font-sans">
            Eight things I do for Gold Coast businesses. Not sure which one you need? That&apos;s what the call is for.
          </p>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {services.map((s, index) => {
            const Icon = s.icon;
            return (
              <AnimateOnScroll key={s.href} stagger={Math.min(index + 1, 7)}>
                <Link
                  href={s.href}
                  className="proof-card group flex h-full flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:bg-white/[0.04]"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-gold transition-colors duration-200" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-serif mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-sans">{s.blurb}</p>
                </Link>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
