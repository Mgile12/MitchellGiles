import { MapPin, Search, Sparkles, ArrowUpRight } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import Eyebrow from './Eyebrow';
import RevealText from './RevealText';
import SpotlightLink from './SpotlightLink';

const services = [
  {
    title: 'Google Business Profile Optimisation',
    blurb: 'Top 3 on Google Maps for the searches that happen within a few kilometres of you. The cheapest customers a local business will ever get.',
    href: '/google-business-profile-gold-coast',
    icon: MapPin,
  },
  {
    title: 'Local SEO',
    blurb: 'A page for every service and every suburb you serve, so you rank for what people in your area actually type and the profile has something to stand on.',
    href: '/best-local-seo-expert-in-gold-coast',
    icon: Search,
  },
  {
    title: 'AI Search (GEO)',
    blurb: 'Getting your business named when someone asks ChatGPT, Gemini or Google AI who to call. The same local signals, tuned for how the models choose.',
    href: '/book',
    icon: Sparkles,
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-navy-900 relative overflow-hidden" aria-labelledby="services-heading">
      <div className="grid-ground absolute inset-0" aria-hidden="true" />
      <div className="glow w-[560px] h-[560px] -top-48 right-[-8%]" style={{ ['--glow-a' as string]: '0.14' }} aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-12 sm:mb-16">
          <Eyebrow className="mb-4">What I do</Eyebrow>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink mb-5 font-serif"
          >
            <RevealText text="Three things. Done properly." />
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-ink/65 font-sans">
            Local SEO, Google Business Profile optimisation and AI search for Gold Coast and Brisbane businesses. No ads, no email, no packages. If you need something else, I&apos;ll tell you who to call.
          </p>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((s, index) => {
            const Icon = s.icon;
            return (
              <AnimateOnScroll key={s.href} stagger={Math.min(index + 1, 7)}>
                <SpotlightLink
                  href={s.href}
                  className="proof-card spotlight group flex h-full flex-col rounded-2xl border border-ink/[0.06] bg-white/55 p-6 hover:bg-white/85"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="card-icon w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <ArrowUpRight className="card-arrow w-4 h-4 text-ink/50 group-hover:text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-ink font-serif mb-2">{s.title}</h3>
                  <p className="text-sm text-ink/65 leading-relaxed font-sans">{s.blurb}</p>
                </SpotlightLink>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
