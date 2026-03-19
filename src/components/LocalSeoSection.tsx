import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../lib/business-info';
import AnimateOnScroll from './AnimateOnScroll';

const serviceAreas = [
  {
    area: 'Gold Coast',
    href: '/areas/gold-coast',
    description: 'Southport, Surfers Paradise, Broadbeach, Burleigh Heads, Robina, Nerang & surrounds',
  },
  {
    area: 'Brisbane',
    href: '/areas/brisbane',
    description: 'CBD, South Bank, Fortitude Valley, West End, Paddington & surrounds',
  },
  {
    area: 'South East Queensland',
    href: '/areas/south-east-queensland',
    description: 'Ipswich, Logan, Redlands, Moreton Bay & the wider SEQ corridor',
  },
];

const TOP_SUBURBS = [
  { name: 'Southport', slug: 'southport' },
  { name: 'Surfers Paradise', slug: 'surfers-paradise' },
  { name: 'Broadbeach', slug: 'broadbeach' },
  { name: 'Burleigh Heads', slug: 'burleigh-heads' },
  { name: 'Robina', slug: 'robina' },
  { name: 'Nerang', slug: 'nerang' },
  { name: 'Main Beach', slug: 'main-beach' },
  { name: 'Coolangatta', slug: 'coolangatta' },
  { name: 'Hope Island', slug: 'hope-island' },
  { name: 'Palm Beach', slug: 'palm-beach' },
];

export default function LocalSeoSection() {
  return (
    <section className="bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(12,134,234,0.04),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-14">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
            Local Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
            Gold Coast Marketing Agency Gold Coast
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              Based in {BUSINESS_INFO.address.locality}, I work with businesses across the Gold Coast, Brisbane
              and South East Queensland. Whether you need email marketing, paid ads, or a complete digital
              strategy -- you get a local marketing agency gold coast who understands the Australian market.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {serviceAreas.map((item, index) => (
            <AnimateOnScroll
              key={item.area}
              stagger={index + 1}
            >
              <Link
                href={item.href}
                className="block rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-gold/20 hover:bg-white/[0.04] transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-serif group-hover:text-gold transition-colors duration-200">{item.area}</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed font-sans">{item.description}</p>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="mb-14">
          <p className="text-sm text-slate-500 font-sans mb-4 font-semibold tracking-wider uppercase">Popular Suburbs</p>
          <div className="flex flex-wrap gap-2">
            {TOP_SUBURBS.map((suburb) => (
              <Link
                key={suburb.slug}
                href={`/areas/${suburb.slug}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/[0.07] bg-white/[0.02] text-sm text-slate-400 hover:text-gold hover:border-gold/25 hover:bg-white/[0.04] transition-all duration-200 font-sans"
              >
                <MapPin className="w-3 h-3 text-gold/50" />
                {suburb.name}
              </Link>
            ))}
            <Link
              href="/areas"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-gold/20 bg-gold/5 text-sm text-gold hover:bg-gold/10 hover:border-gold/35 transition-all duration-200 font-sans font-semibold"
            >
              All areas →
            </Link>
          </div>
        </AnimateOnScroll>

        <div className="rounded-xl overflow-hidden border border-white/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.992210498041!2d153.4133307!3d-27.963524800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b910f7b954aafeb%3A0x46bd1aa9daada649!2sMitchell%20Giles!5e0!3m2!1sen!2sau!4v1770894024737!5m2!1sen!2sau"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
