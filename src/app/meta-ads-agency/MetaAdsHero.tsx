'use client';

import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/business-info';

export default function MetaAdsHero() {
  return (
    <section className="relative bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,161,78,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(200,161,78,0.03),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-16 sm:pb-24">
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-10 animate-fade-in font-sans">
          <Link href="/" className="hover:text-gold transition-colors duration-200">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/services" className="hover:text-gold transition-colors duration-200">Services</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-slate-300">Meta Ads Agency</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in-up">
            <span className="inline-block text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-5 font-sans">
              Facebook & Instagram Advertising
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6 font-serif">
              Meta Ads Agency
              <span className="block text-slate-400 text-2xl sm:text-3xl lg:text-4xl mt-3 font-serif">
                Strategic Facebook & Instagram Growth
              </span>
            </h1>
            <div className="space-y-4 mb-10">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                Most businesses do not lose money on Meta because Facebook stopped working. They lose money
                because they do not understand how the system actually works.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                Meta's algorithm is a machine-learning ecosystem powered by complex delivery models — including
                Andromeda, GEM and Lattice — that determine who sees your ads, how much you pay, and whether
                your campaign scales.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                If your Meta Ads Agency does not understand this, they are operating blind.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={BUSINESS_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-flat-btn inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold tracking-wide group"
              >
                Book a Free Meta Ads Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 pt-8 border-t border-white/[0.06]">
              {[
                { label: 'Signal-Driven', sub: 'Not guesswork' },
                { label: 'Creative-Led', sub: 'Not just targeting' },
                { label: 'Algorithm-Aware', sub: 'Not set & forget' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-sm font-bold text-white font-serif">{item.label}</div>
                  <div className="text-xs text-slate-500 font-sans mt-0.5">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-up animate-delay-200">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/30">
              <img
                src="/meta-ads-agency-gold-coast-analytics-dashboard.jpg"
                alt="Meta Ads Agency Gold Coast analytics dashboard"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-navy-950/80 backdrop-blur-sm rounded-xl border border-white/[0.08] p-4">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    {[
                      { value: '3.2x', label: 'Avg ROAS' },
                      { value: '-38%', label: 'CPA reduction' },
                      { value: '94%', label: 'Signal accuracy' },
                    ].map((stat, i) => (
                      <div key={i}>
                        <div className="text-gold font-bold text-lg font-serif">{stat.value}</div>
                        <div className="text-slate-400 text-xs font-sans">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
