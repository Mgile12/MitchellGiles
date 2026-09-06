import { MapPin, Search, Megaphone, Mail, Sparkles, Ticket, ArrowUpRight } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import Eyebrow from './Eyebrow';
import RevealText from './RevealText';
import SpotlightLink from './SpotlightLink';

const services = [
  {
    title: 'Google Business Profile',
    blurb: 'Top 3 on Google Maps. The cheapest customers a local business will ever get.',
    href: '/google-business-profile-gold-coast',
    icon: MapPin,
  },
  {
    title: 'Local SEO',
    blurb: 'Rank for what people in your suburb actually type, not what a keyword tool says.',
    href: '/seo-gold-coast',
    icon: Search,
  },
  {
    title: 'Meta Ads',
    blurb: 'Facebook and Instagram campaigns built around an offer, not a boost button.',
    href: '/meta-ads-agency',
    icon: Megaphone,
  },
  {
    title: 'Email Marketing',
    blurb: 'Turn the list you already own into revenue. One client does 63% of monthly sales from it.',
    href: '/email-marketing-gold-coast',
    icon: Mail,
  },
  {
    title: 'AI Automations',
    blurb: 'Put the repetitive work on autopilot, so every lead gets followed up and nothing slips.',
    href: '/book',
    icon: Sparkles,
  },
  {
    title: 'Event Tickets',
    blurb: 'Fill the room and lift the spend per head. One upsell did $82K in three hours, twice.',
    href: '/book',
    icon: Ticket,
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
            <RevealText text="Pick the problem. I'll pick the channel." />
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 font-sans">
            Six things I do for Gold Coast businesses. Not sure which one you need? That&apos;s what the call is for.
          </p>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((s, index) => {
            const Icon = s.icon;
            return (
              <AnimateOnScroll key={s.href} stagger={Math.min(index + 1, 7)}>
                <SpotlightLink
                  href={s.href}
                  className="proof-card spotlight group flex h-full flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:bg-white/[0.04]"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="card-icon w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <ArrowUpRight className="card-arrow w-4 h-4 text-slate-600 group-hover:text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-serif mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-sans">{s.blurb}</p>
                </SpotlightLink>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
