'use client';

import Link from 'next/link';
import { ChevronRight, Search, Megaphone, Mail, Target, BarChart3, Cog, ArrowRight, Layers } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/business-info';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import ServedAreasLinks from '@/components/ServedAreasLinks';

const SERVICES_AREAS = [
  { name: 'Southport', slug: 'southport' },
  { name: 'Surfers Paradise', slug: 'surfers-paradise' },
  { name: 'Broadbeach', slug: 'broadbeach' },
  { name: 'Burleigh Heads', slug: 'burleigh-heads' },
  { name: 'Robina', slug: 'robina' },
  { name: 'Nerang', slug: 'nerang' },
  { name: 'Hope Island', slug: 'hope-island' },
  { name: 'Main Beach', slug: 'main-beach' },
  { name: 'Gold Coast', slug: 'gold-coast' },
  { name: 'Brisbane', slug: 'brisbane' },
];

const services = [
  {
    icon: Search,
    title: 'SEO Gold Coast',
    description:
      'Technical audits, on-page optimisation, local SEO, content strategy and link building that earns sustainable organic visibility. Build an asset that keeps paying off over time.',
    href: '/seo-gold-coast',
  },
  {
    icon: Megaphone,
    title: 'Google Ads Gold Coast',
    description:
      'Search campaigns, remarketing, performance tracking and budget optimisation. Precision paid search that turns ad spend into qualified leads.',
    href: '/google-ads-gold-coast',
  },
  {
    icon: Layers,
    title: 'Meta Ads Agency',
    description:
      'Signal-driven Facebook and Instagram advertising built on Andromeda, GEM and Lattice. Creative strategy, conversion tracking and methodical scaling for predictable revenue growth.',
    href: '/meta-ads-agency',
  },
  {
    icon: Mail,
    title: 'Email Marketing Gold Coast',
    description:
      'Strategy, automation, campaign management and reporting that turns your database into predictable monthly revenue. Nurture leads and drive repeat business.',
    href: '/email-marketing-gold-coast',
  },
  {
    icon: Target,
    title: 'Lead Generation Gold Coast',
    description:
      'Paid advertising, SEO, email nurturing and conversion tracking built into one system that generates qualified leads on repeat.',
    href: '/lead-generation-gold-coast',
  },
  {
    icon: BarChart3,
    title: 'Digital Marketing Gold Coast',
    description:
      'Integrated strategy where SEO, ads, email and automation work together. Stop running channels in isolation and start building a connected system.',
    href: '/digital-marketing-gold-coast',
  },
  {
    icon: Cog,
    title: 'Marketing Automation Gold Coast',
    description:
      'CRM integration, lead scoring, nurture sequences and conversion tracking. Build systems that scale without adding headcount.',
    href: '/marketing-automation-gold-coast',
  },
];

export default function ServicesContent() {
  return (
    <div className="bg-navy-950 min-h-screen">
      <section className="relative bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,161,78,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(200,161,78,0.03),transparent_60%)]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-16 sm:pb-24">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-10 animate-fade-in font-sans">
            <Link href="/" className="hover:text-gold transition-colors duration-200">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-slate-300">Services</span>
          </nav>

          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-5 font-sans">
              All Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6 font-serif">
              Marketing Services Gold Coast
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              Six interconnected services designed to work together. Each one drives results independently,
              but the real power comes when they are integrated into a single strategy built for your business.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,161,78,0.04),transparent_60%)]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimateOnScroll
                  key={index}
                  stagger={index + 1}
                >
                  <Link
                    href={item.href}
                    className="block h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-7 hover:border-gold/20 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <h2 className="text-xl font-bold text-white mb-3 font-serif group-hover:text-gold transition-colors duration-200">
                      {item.title}
                    </h2>
                    <p className="text-sm text-slate-400 leading-relaxed mb-5 font-sans">{item.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold group-hover:text-gold-light transition-colors duration-200 font-sans">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Link>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <ServedAreasLinks areas={SERVICES_AREAS} heading="We Work With Businesses Across the Gold Coast" />

      <section className="relative bg-navy-950 text-slate-50">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <AnimateOnScroll className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6 font-serif">
              Not sure where to start?
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-sans mb-12">
              Book a free strategy call and we will audit your current setup, identify the biggest opportunities,
              and recommend exactly where to focus first.
            </p>

            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold via-gold-light to-gold rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300" />
              <a
                href={BUSINESS_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold bg-gradient-to-r from-gold via-gold-light to-gold text-navy-950 hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 group"
              >
                Book a Free Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
