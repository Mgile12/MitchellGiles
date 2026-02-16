'use client';

import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/business-info';

export default function GoogleAdsHero() {
  return (
    <section className="relative bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,161,78,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(200,161,78,0.03),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-16 sm:pb-24">
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-10 animate-fade-in font-sans">
          <Link href="/" className="hover:text-gold transition-colors duration-200">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-slate-300">Google Ads Gold Coast</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in-up">
            <span className="inline-block text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-5 font-sans">
              Paid Search Management
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6 font-serif">
              Google Ads Gold Coast
              <span className="block text-slate-400 text-2xl sm:text-3xl lg:text-4xl mt-3 font-serif">
                Paid Search That Drives Qualified Leads
              </span>
            </h1>
            <div className="space-y-4 mb-10">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                Most Google Ads accounts waste money. Broad match keywords, no negative lists, no conversion tracking,
                and landing pages that leak leads. The result is expensive clicks that never convert.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                Effective Google Ads management is about precision -- the right keywords, the right audiences,
                and landing pages built to convert. Every dollar accountable.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={BUSINESS_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-flat-btn inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold tracking-wide group"
              >
                Get a Free Ads Review
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          <div className="animate-fade-in-up animate-delay-200">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/30">
              <img
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Google Ads campaign analytics dashboard"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
