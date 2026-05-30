'use client';

import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/business-info';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function AreasContent() {
  return (
    <div className="bg-navy-950 min-h-screen">
      <section className="relative bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,161,78,0.06),transparent_60%)]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-16 sm:pb-24">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-10 animate-fade-in font-sans">
            <Link href="/" className="hover:text-gold transition-colors duration-200">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-slate-300">Areas We Serve</span>
          </nav>

          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-5 font-sans">
              Local Coverage
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6 font-serif">
              Areas We Serve
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              Based in {BUSINESS_INFO.address.locality}, we work with businesses across the Gold Coast, Brisbane
              and South East Queensland. Local expertise, real results. See our full range of{' '}
              <Link href="/services" className="text-gold hover:underline">marketing services</Link> to find out what we can do for your business.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-navy-950 text-slate-50">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <AnimateOnScroll className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight mb-6 font-serif">
              Ready to grow your local business?
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed font-sans mb-12">
              No matter where you are in South East Queensland, the process starts with a conversation.
            </p>
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold via-gold-light to-gold rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300" />
              <Link
                href="/book"
                className="relative inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold bg-gradient-to-r from-gold via-gold-light to-gold text-navy-950 hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300 group"
              >
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
