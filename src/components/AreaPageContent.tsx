'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ChevronRight, ChevronDown, MapPin, ArrowRight,
  Search, Megaphone, Mail, Cog, Target, TrendingUp,
  BarChart3, Eye, Scissors, Award,
} from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/business-info';
import type { AreaPageData } from '@/lib/area-data';
import AnimateOnScroll from './AnimateOnScroll';
import AreaMapDirections from './AreaMapDirections';

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/[0.06] overflow-hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between gap-4 py-5 text-left group" aria-expanded={isOpen}>
        <span className={`text-base sm:text-lg font-semibold transition-colors duration-200 font-sans ${isOpen ? 'text-gold' : 'text-white group-hover:text-gold/80'}`}>{question}</span>
        <div className={`transition-transform duration-300 ease-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-colors duration-200 ${isOpen ? 'text-gold' : 'text-slate-500 group-hover:text-gold/60'}`} />
        </div>
      </button>
      <div className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="pb-6">
            <div className="border-l-2 border-gold/30 pl-4">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">{answer}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const differentiators = [
  { icon: BarChart3, title: 'Data-Driven Accountability', key: 'accountability' },
  { icon: Eye, title: 'Full Transparency', key: 'transparency' },
  { icon: Scissors, title: 'Ruthless Optimisation', key: 'optimisation' },
  { icon: Target, title: 'Single-System Focus', key: 'system' },
  { icon: Award, title: 'Gold Coast Local Authority', key: 'authority' },
];

const diffDescriptions: Record<string, string> = {
  accountability: 'Every decision tied to revenue. No opinions over numbers. Track every lead, validate every campaign. If it does not produce measurable return, it gets cut.',
  transparency: 'You see what is running, why it is running, what it costs, and what it returns. No mysteries. No hidden mechanics. Full pipeline visibility.',
  optimisation: 'Kill what loses. Double down on what wins. Eliminate waste continuously. Speed beats comfort.',
  system: 'One core revenue system. No scattered tactics. Everything builds on itself. SEO feeds ads. Ads feed email. Email feeds automation.',
  authority: 'Based at 82 Marine Parade, Southport with deep understanding of Gold Coast suburb-driven search behaviour, seasonal patterns, and Brisbane crossover traffic.',
};

const services = [
  { icon: Search, title: 'SEO', href: '/seo-gold-coast', desc: 'Suburb-specific organic visibility that grows stronger over time' },
  { icon: Megaphone, title: 'Google Ads', href: '/google-ads-gold-coast', desc: 'High-intent paid search capturing immediate local demand' },
  { icon: Mail, title: 'Email Marketing', href: '/email-marketing-gold-coast', desc: 'Database monetisation with automated nurture sequences' },
  { icon: Target, title: 'Lead Generation', href: '/lead-generation-gold-coast', desc: 'Predictable pipeline of qualified local leads' },
  { icon: TrendingUp, title: 'Digital Marketing', href: '/digital-marketing-gold-coast', desc: 'Integrated strategy across all channels' },
  { icon: Cog, title: 'Marketing Automation', href: '/marketing-automation-gold-coast', desc: 'Pipelines that deliver while you sleep' },
];

const caseStudyStats = [
  { value: '$50k to $425k', label: 'Revenue growth in 12 months' },
  { value: '6.88x', label: 'ROAS on paid campaigns' },
  { value: '$190k', label: 'Generated via email marketing' },
  { value: '72%', label: 'Email open rates achieved' },
];

interface Props {
  data: AreaPageData;
}

export default function AreaPageContent({ data }: Props) {
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
            <span className="text-slate-300">{data.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center animate-fade-in-up">
            <div>
              <span className="inline-block text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-5 font-sans">
                <MapPin className="inline w-3.5 h-3.5 mr-1.5 -mt-0.5" />
                {data.name}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-white leading-[1.1] mb-6 font-serif">
                {data.heroH1}
              </h1>
              <div className="space-y-4 mb-10">
                {data.heroIntro.map((paragraph, i) => (
                  <p key={i} className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">{paragraph}</p>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book" className="gold-flat-btn inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold tracking-wide group">
                  Book a Strategy Session
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
            {data.images[0] && (
              <div className="animate-fade-in-up animate-delay-200">
                <div className="rounded-2xl overflow-hidden border border-white/[0.08]">
                  <img
                    src={data.images[0].src}
                    alt={data.images[0].alt}
                    className="w-full h-72 sm:h-80 object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,161,78,0.04),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <AnimateOnScroll className="mb-14 sm:mb-20">
            <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">Local Insight</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 font-serif">
              {data.whyDifferentTitle}
            </h2>
            <div className="space-y-4 max-w-3xl">
              {data.whyDifferentIntro.map((para, i) => (
                <p key={i} className="text-base text-slate-300 leading-relaxed font-sans">{para}</p>
              ))}
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <AnimateOnScroll>
                <div className="space-y-4">
                  {data.whyDifferentPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-gold" />
                      </div>
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">{point}</p>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
            {data.images[1] && (
              <AnimateOnScroll>
                <div className="rounded-2xl overflow-hidden border border-white/[0.08]">
                  <img
                    src={data.images[1].src}
                    alt={data.images[1].alt}
                    className="w-full h-64 sm:h-72 object-cover"
                    loading="lazy"
                  />
                </div>
              </AnimateOnScroll>
            )}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(200,161,78,0.05),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <AnimateOnScroll className="text-center mb-14 sm:mb-20">
            <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">Why Choose Local</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
              Why {data.name} Businesses Choose Mitchell Giles
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimateOnScroll key={index} stagger={index + 1} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-gold/20 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 font-serif">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-sans">{diffDescriptions[item.key]}</p>
                </AnimateOnScroll>
              );
            })}
          </div>
          {data.whyChooseLocalAuthority.length > 0 && (
            <AnimateOnScroll className="mt-10">
              <div className="rounded-2xl border border-gold/15 bg-gold/[0.04] p-6 sm:p-8 max-w-3xl mx-auto">
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gold mb-4 font-sans">Local Understanding</p>
                <div className="space-y-2">
                  {data.whyChooseLocalAuthority.map((point, i) => (
                    <p key={i} className="text-sm text-slate-300 leading-relaxed font-sans">{point}</p>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          )}
        </div>
      </section>

      <section className="bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,161,78,0.04),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <AnimateOnScroll className="text-center mb-14 sm:mb-20">
            <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">Services Available</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
              Marketing Services for {data.name}
            </h2>
            <p className="text-base text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">{data.servicesIntro}</p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {services.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimateOnScroll key={index} stagger={index + 1}>
                  <Link href={item.href} className="block h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-gold/20 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300 group">
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

          {data.seoTargets.length > 0 && (
            <AnimateOnScroll className="max-w-3xl mx-auto">
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8">
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gold mb-4 font-sans">Ranking For</p>
                <div className="space-y-2">
                  {data.seoTargets.map((target, i) => (
                    <p key={i} className="text-sm text-slate-300 font-sans italic">&ldquo;{target}&rdquo;</p>
                  ))}
                </div>
                <p className="text-sm text-slate-400 mt-4 font-sans">Structured SEO builds long-term authority that keeps growing.</p>
              </div>
            </AnimateOnScroll>
          )}

          {data.images[2] && (
            <AnimateOnScroll className="mt-10 max-w-3xl mx-auto">
              <div className="rounded-2xl overflow-hidden border border-white/[0.08]">
                <img
                  src={data.images[2].src}
                  alt={data.images[2].alt}
                  className="w-full h-56 sm:h-64 object-cover"
                  loading="lazy"
                />
              </div>
            </AnimateOnScroll>
          )}
        </div>
      </section>

      <section className="bg-navy-950 relative overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <AnimateOnScroll className="text-center mb-14">
            <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">Proven Results</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5 font-serif">Documented Gold Coast Revenue Outcomes</h2>
            <p className="text-base text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
              These are verified results from structured marketing systems, not theoretical projections.
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-10">
            {caseStudyStats.map((stat, index) => (
              <AnimateOnScroll key={index} stagger={index + 1} className="text-center rounded-2xl border border-gold/15 bg-gold/[0.04] p-5">
                <p className="text-xl sm:text-2xl font-bold text-gold mb-1 font-serif">{stat.value}</p>
                <p className="text-xs text-slate-400 font-sans">{stat.label}</p>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-center">
                <p className="text-lg font-bold text-white font-serif">$82k</p>
                <p className="text-xs text-slate-400 font-sans">Generated in 3 hours organically</p>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-center">
                <p className="text-lg font-bold text-white font-serif">$100k+</p>
                <p className="text-xs text-slate-400 font-sans">Weekly sales achieved</p>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-center">
                <p className="text-lg font-bold text-white font-serif">$25k+</p>
                <p className="text-xs text-slate-400 font-sans">Event revenue, sold-out tickets</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <AreaMapDirections
        areaName={data.name}
        landmarks={data.landmarks}
        directions={data.directions}
        publicTransport={data.publicTransport}
      />

      <section className="bg-navy-900 text-slate-50" aria-labelledby={`${data.slug}-faq-heading`}>
        <AnimateOnScroll className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="mb-12">
            <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">Common Questions</span>
            <h2 id={`${data.slug}-faq-heading`} className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-serif">
              {data.name} Marketing FAQ
            </h2>
          </div>
          <div className="space-y-0">
            {data.faqItems.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </AnimateOnScroll>
      </section>

      {data.images[3] && (
        <section className="bg-navy-950 relative overflow-hidden">
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="rounded-2xl overflow-hidden border border-white/[0.08] max-w-4xl mx-auto">
              <img
                src={data.images[3].src}
                alt={data.images[3].alt}
                className="w-full h-56 sm:h-64 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      )}

      <section className="relative bg-navy-950 text-slate-50">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <AnimateOnScroll className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6 font-serif">
              Book Your {data.name} Strategy Session
            </h2>
            {data.ctaNearbyPlaces.length > 0 && (
              <p className="text-base text-slate-300 leading-relaxed font-sans mb-4">
                If you operate near {data.ctaNearbyPlaces.join(', ')} and want predictable growth, it is time to build a system.
              </p>
            )}
            <p className="text-lg text-slate-300 leading-relaxed font-sans mb-12">
              No generic packages. No tiered pricing. Custom-built revenue systems designed for predictable growth.
            </p>
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold via-gold-light to-gold rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300" />
              <Link href="/book" className="relative inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold bg-gradient-to-r from-gold via-gold-light to-gold text-navy-950 hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300 group">
                Book a Free Strategy Session
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {data.internalLinks.length > 0 && (
        <section className="bg-navy-900 border-t border-white/[0.06]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gold mb-4 font-sans">Related Services</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {data.internalLinks.map((link, i) => (
                <Link key={i} href={link.href} className="text-sm text-slate-400 hover:text-gold transition-colors duration-200 font-sans">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
