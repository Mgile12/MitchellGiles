import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function GoogleAdsCTA() {
  return (
    <section className="relative bg-navy-900 text-slate-50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <AnimateOnScroll className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6 font-serif">
            Stop wasting ad spend. Start generating qualified leads.
          </h2>
          <div className="space-y-4">
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-sans">
              Book a 15-minute call about your Google Ads account. I&apos;ll show you exactly where money
              is being wasted and how to fix it.
            </p>
          </div>

          <div className="mt-12 relative inline-block group">
            <Link
              href="/book"
              className="gold-flat-btn inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 group"
            >
              Book a 15-minute call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
