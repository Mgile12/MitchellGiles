'use client';

import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function AutomationHero() {
  return (
    <section className="relative bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,161,78,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(200,161,78,0.03),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-16 sm:pb-24">
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-10 animate-fade-in font-sans">
          <Link href="/" className="hover:text-gold transition-colors duration-200">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-slate-300">Marketing Automation Gold Coast</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in-up">
            <span className="inline-block text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-5 font-sans">
              Business Automation
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6 font-serif">
              Marketing Automation Gold Coast
              <span className="block text-slate-400 text-2xl sm:text-3xl lg:text-4xl mt-3 font-serif">
                Build Systems That Scale Without Adding Headcount
              </span>
            </h1>
            <div className="space-y-4 mb-10">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                Manual follow-up does not scale. Every lead that slips through the cracks is revenue lost.
                Every hour spent on repetitive tasks is an hour not spent growing your business.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                Marketing automation builds the systems that handle lead nurturing, follow-up, and conversion
                tracking automatically -- so your business grows without proportionally growing your workload.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="gold-flat-btn inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold tracking-wide group"
              >
                Book a 15-minute call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>

          <div className="animate-fade-in-up animate-delay-200">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/30">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Marketing automation workflow on a screen"
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
