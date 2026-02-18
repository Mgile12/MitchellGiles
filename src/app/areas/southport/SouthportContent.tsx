'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ChevronRight, ChevronDown, MapPin, ArrowRight,
  Search, Megaphone, Mail, Cog, BarChart3, Target,
  TrendingUp, Eye, Scissors, Award,
} from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/business-info';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import AreaMapDirections from '@/components/AreaMapDirections';

interface FAQItem { question: string; answer: string; }
interface Props { faqItems: FAQItem[]; }

function FAQItem({ question, answer }: FAQItem) {
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
          <div className="pb-6"><div className="border-l-2 border-gold/30 pl-4"><p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">{answer}</p></div></div>
        </div>
      </div>
    </div>
  );
}

const differentiators = [
  { icon: BarChart3, title: 'Data-Driven Accountability', description: 'Every decision backed by data. Every dollar tracked. Every result measured against real business outcomes.' },
  { icon: Eye, title: 'Full Transparency', description: 'No black-box reporting. You see exactly what work is being done, what it costs, and what it produces.' },
  { icon: Scissors, title: 'Ruthless Optimisation', description: 'Cut what does not work. Scale what does. Continuous improvement based on actual performance data.' },
  { icon: Target, title: 'Single-System Focus', description: 'All your marketing channels managed under one roof. No conflicting strategies, no wasted overlap.' },
  { icon: Award, title: 'Gold Coast Local Authority', description: 'Based in Southport with deep understanding of the local market, competition, and seasonal patterns.' },
];

const services = [
  { icon: Search, title: 'SEO', href: '/seo-gold-coast', desc: 'Organic visibility that compounds over time' },
  { icon: Megaphone, title: 'Google Ads', href: '/google-ads-gold-coast', desc: 'Immediate leads from paid search' },
  { icon: Mail, title: 'Email Marketing', href: '/email-marketing-gold-coast', desc: 'Database monetisation and lead nurturing' },
  { icon: Target, title: 'Lead Generation', href: '/lead-generation-gold-coast', desc: 'Predictable pipeline of qualified leads' },
  { icon: TrendingUp, title: 'Digital Marketing', href: '/digital-marketing-gold-coast', desc: 'Integrated strategy across all channels' },
  { icon: Cog, title: 'Marketing Automation', href: '/marketing-automation-gold-coast', desc: 'Systems that scale without headcount' },
];

const caseStudyStats = [
  { value: '$50k to $425k', label: 'Revenue growth in 12 months' },
  { value: '$100k+', label: 'From email marketing alone' },
  { value: '1,177%', label: 'Increase in total orders' },
  { value: '10x+', label: 'ROAS on top ad sets' },
];

export default function SouthportContent({ faqItems }: Props) {
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
            <span className="text-slate-300">Southport</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center animate-fade-in-up">
            <div>
              <span className="inline-block text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-5 font-sans">Southport QLD</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6 font-serif">
                Marketing Consultant Southport
              </h1>
              <div className="space-y-4 mb-10">
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                  Southport is the Gold Coast&apos;s central business hub. Home to Australia Fair, the Broadwater, and a growing
                  cluster of professional services, trades, and hospitality businesses.
                </p>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                  If you operate in Southport, you are competing with businesses that are investing in their marketing.
                  The question is whether you are keeping up.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={BUSINESS_INFO.bookingUrl} target="_blank" rel="noopener noreferrer" className="gold-flat-btn inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold tracking-wide group">
                  Book a Strategy Session
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
            <div className="animate-fade-in-up animate-delay-200">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-gold" />
                  <h2 className="text-lg font-bold text-white font-serif">Our Location</h2>
                </div>
                <p className="text-sm text-slate-300 mb-4 font-sans">{BUSINESS_INFO.address.full}</p>
                <div className="space-y-2 text-sm text-slate-400 font-sans">
                  <p>Walking distance from Broadwater Parklands</p>
                  <p>Minutes from Australia Fair Shopping Centre</p>
                  <p>In the heart of Southport CBD</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/[0.06]">
                  <a href={`tel:${BUSINESS_INFO.phoneFormatted}`} className="text-gold hover:text-gold-light font-semibold text-sm transition-colors duration-200 font-sans">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,161,78,0.04),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <AnimateOnScroll className="text-center mb-14 sm:mb-20">
            <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">Why Choose Local</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
              Five Reasons to Work With a Southport-Based Consultant
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
                  <p className="text-sm text-slate-400 leading-relaxed font-sans">{item.description}</p>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(200,161,78,0.05),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <AnimateOnScroll className="text-center mb-14 sm:mb-20">
            <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">Services Available</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
              Marketing Services in Southport
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
      </section>

      <section className="bg-navy-900 relative overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <AnimateOnScroll className="text-center mb-14">
            <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">Proven Results</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5 font-serif">Case Study: Elite Football Agency</h2>
            <p className="text-base text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
              A Gold Coast business transformed through integrated marketing systems.
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {caseStudyStats.map((stat, index) => (
              <AnimateOnScroll key={index} stagger={index + 1} className="text-center rounded-2xl border border-gold/15 bg-gold/[0.04] p-5">
                <p className="text-xl sm:text-2xl font-bold text-gold mb-1 font-serif">{stat.value}</p>
                <p className="text-xs text-slate-400 font-sans">{stat.label}</p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <AreaMapDirections
        areaName="Southport"
        landmarks={[
          { name: 'Broadwater Parklands', time: '3 min walk' },
          { name: 'Australia Fair Shopping Centre', time: '5 min walk' },
          { name: 'Southport Courthouse', time: '4 min drive' },
          { name: 'Gold Coast University Hospital', time: '8 min drive' },
        ]}
        directions={[
          'Head along Marine Parade toward the Broadwater.',
          'Our office is at 82 Marine Parade, opposite Broadwater Parklands.',
          'Street parking available on Marine Parade and surrounding streets.',
        ]}
        publicTransport={[
          'Southport Station (G:link light rail) - 10 min walk or one tram stop.',
          'Bus routes 704, 705, 709 stop within walking distance.',
        ]}
      />

      <section className="bg-navy-900 text-slate-50" aria-labelledby="southport-faq-heading">
        <AnimateOnScroll className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="mb-12">
            <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">Common Questions</span>
            <h2 id="southport-faq-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-serif">Southport Marketing FAQ</h2>
          </div>
          <div className="space-y-0">
            {faqItems.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </AnimateOnScroll>
      </section>

      <section className="relative bg-navy-950 text-slate-50">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <AnimateOnScroll className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6 font-serif">
              Ready to grow your Southport business?
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed font-sans mb-12">
              Book a free strategy session and find out exactly how to get more leads, more customers, and more revenue from your marketing.
            </p>
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold via-gold-light to-gold rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300" />
              <a href={BUSINESS_INFO.bookingUrl} target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold bg-gradient-to-r from-gold via-gold-light to-gold text-navy-950 hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300 group">
                Book a Free Strategy Session
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
