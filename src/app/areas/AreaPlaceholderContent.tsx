'use client';

import Link from 'next/link';
import { ChevronRight, MapPin, ArrowRight, Search, Megaphone, Mail, Target, TrendingUp, Cog } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/business-info';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import ServedAreasLinks from '@/components/ServedAreasLinks';

const services = [
  { icon: Search, title: 'SEO', href: '/seo-gold-coast', desc: 'Organic visibility that compounds over time' },
  { icon: Megaphone, title: 'Google Ads', href: '/google-ads-gold-coast', desc: 'Immediate leads from paid search' },
  { icon: Mail, title: 'Email Marketing', href: '/email-marketing-gold-coast', desc: 'Database monetisation and lead nurturing' },
  { icon: Target, title: 'Lead Generation', href: '/lead-generation-gold-coast', desc: 'Predictable pipeline of qualified leads' },
  { icon: TrendingUp, title: 'Digital Marketing', href: '/digital-marketing-gold-coast', desc: 'Integrated strategy across all channels' },
  { icon: Cog, title: 'Marketing Automation', href: '/marketing-automation-gold-coast', desc: 'Systems that scale without headcount' },
];

const NEARBY_AREAS = [
  { name: 'Gold Coast', slug: 'gold-coast' },
  { name: 'Southport', slug: 'southport' },
  { name: 'Surfers Paradise', slug: 'surfers-paradise' },
  { name: 'Broadbeach', slug: 'broadbeach' },
  { name: 'Burleigh Heads', slug: 'burleigh-heads' },
  { name: 'Robina', slug: 'robina' },
  { name: 'Nerang', slug: 'nerang' },
  { name: 'Hope Island', slug: 'hope-island' },
  { name: 'Main Beach', slug: 'main-beach' },
  { name: 'Coolangatta', slug: 'coolangatta' },
];

interface Props {
  areaName: string;
  description: string;
}

export default function AreaPlaceholderContent({ areaName, description }: Props) {
  return (
    <div className="bg-navy-950 min-h-screen">
      <section className="relative bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,161,78,0.06),transparent_60%)]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-16 sm:pb-24">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-10 animate-fade-in font-sans">
            <Link href="/" className="hover:text-gold transition-colors duration-200">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/areas" className="hover:text-gold transition-colors duration-200">Areas We Serve</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-slate-300">{areaName}</span>
          </nav>

          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-5 font-sans">
              <MapPin className="inline w-3.5 h-3.5 mr-1.5 -mt-0.5" />
              {areaName}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6 font-serif">
              Marketing Consultant {areaName}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 font-sans">
              {description}
            </p>
            <p className="text-base text-slate-400 leading-relaxed mb-10 font-sans">
              Whether you need{' '}
              <Link href="/seo-gold-coast" className="text-gold hover:underline">local SEO</Link>,{' '}
              <Link href="/google-ads-gold-coast" className="text-gold hover:underline">Google Ads</Link>, or a full{' '}
              <Link href="/digital-marketing-gold-coast" className="text-gold hover:underline">digital marketing strategy</Link>,
              {' '}we work with businesses right across the Gold Coast region from our Southport base.
            </p>
            <Link
              href="/book"
              className="gold-flat-btn inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold tracking-wide group"
            >
              Book a Strategy Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,161,78,0.04),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <AnimateOnScroll className="text-center mb-14 sm:mb-20">
            <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">Services Available</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
              Marketing Services for {areaName} Businesses
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
              Based in Southport, we work with businesses across {areaName} and the wider Gold Coast region.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimateOnScroll key={index} stagger={index + 1}>
                  <Link
                    href={item.href}
                    className="block h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-gold/20 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2 font-serif group-hover:text-gold transition-colors duration-200">{item.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-sans">{item.desc}</p>
                  </Link>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <ServedAreasLinks areas={NEARBY_AREAS} heading="Other Areas We Serve" />

      <section className="relative bg-navy-950 text-slate-50">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <AnimateOnScroll className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight mb-6 font-serif">
              Ready to grow your {areaName} business?
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed font-sans mb-12">
              Book a free strategy call and find out exactly how to get more leads, more customers, and more revenue.
            </p>
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold via-gold-light to-gold rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300" />
              <Link href="/book" className="relative inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold bg-gradient-to-r from-gold via-gold-light to-gold text-navy-950 hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300 group">
                Book a Free Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
