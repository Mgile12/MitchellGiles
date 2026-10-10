'use client';

import Link from 'next/link';
import { ChevronRight, MapPin, Search, Megaphone, Mail, Sparkles, Ticket, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/business-info';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Eyebrow from '@/components/Eyebrow';
import ServicesOverview from '@/components/ServicesOverview';

const services = [
  {
    icon: MapPin,
    title: 'Google Business Profile',
    description:
      'Top 3 on Google Maps for the searches that happen within a few kilometres of you. The cheapest customers a local business will ever get.',
    href: '/google-business-profile-gold-coast',
  },
  {
    icon: Search,
    title: 'Local SEO',
    description:
      'A page for every service and every suburb you serve, so you rank for what people in your area actually type, not what a keyword tool says.',
    href: '/seo-gold-coast',
  },
  {
    icon: Megaphone,
    title: 'Meta Ads',
    description:
      'Facebook and Instagram campaigns built around an offer, not a boost button. Tracked to the enquiry, scaled when the numbers say so.',
    href: '/meta-ads-agency',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description:
      'Turn the list you already own into revenue. Campaigns, automations and reporting. One client does 63% of monthly sales this way.',
    href: '/email-marketing-gold-coast',
  },
  {
    icon: Sparkles,
    title: 'AI Automations',
    description:
      'Follow-up, review requests and booking reminders that run whether or not you are on the tools, so every lead gets a reply and nothing slips.',
    href: '/book',
  },
  {
    icon: Ticket,
    title: 'Event Tickets',
    description:
      'Fill the room and lift the spend per head. Launch sequences, reminders and upsells. One upsell did $82K in three hours, twice.',
    href: '/book',
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
            <Eyebrow align="left" className="mb-5">All services</Eyebrow>
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
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </Link>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 relative overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <AnimateOnScroll className="text-center mb-10">
            <Eyebrow className="mb-4">Location</Eyebrow>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5 font-serif">
              Based in Ormeau
            </h2>
            <p className="text-slate-400 text-base max-w-2xl mx-auto font-sans">
              North end of the Gold Coast, half an hour from Brisbane. I work with businesses across both, and most of
              it happens over the phone and on site with you.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="rounded-2xl overflow-hidden border border-white/[0.08]" style={{ height: '450px' }}>
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(`${BUSINESS_INFO.address.full}, Australia`)}&z=14&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`MRG Marketing, ${BUSINESS_INFO.address.full}, on Google Maps`}
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <ServicesOverview />

      <section className="relative bg-navy-950 text-slate-50">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <AnimateOnScroll className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6 font-serif">
              Not sure where to start?
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-sans mb-12">
              Book a 30-minute call. Tell me what you sell and what is not working, and I will tell you where I would start,
              and recommend exactly where to focus first.
            </p>

            <div className="relative inline-block group">
              <Link
                href="/book"
                className="gold-flat-btn inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 group"
              >
                Book a 30-minute call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
