import { ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/business-info';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function MetaAdsCTA() {
  return (
    <section className="relative bg-navy-950 text-slate-50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <AnimateOnScroll className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-5 font-sans">
            Ready to Scale
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6 font-serif">
            Stop guessing. Start scaling Meta ads with signal integrity.
          </h2>
          <div className="space-y-4">
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-sans">
              If you are looking for a Meta Ads Agency that optimises based on revenue, maintains signal
              integrity, explains technical frameworks clearly and scales methodically — let's talk.
            </p>
            <p className="text-base text-slate-400 font-sans">
              Get a free audit of your current Meta Ads account. We will show you exactly where budget
              is being wasted and what it will take to scale profitably.
            </p>
          </div>

          <div className="mt-12 relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-gold via-gold-light to-gold rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300" />
            <a
              href={BUSINESS_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold bg-gradient-to-r from-gold via-gold-light to-gold text-navy-950 hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 group"
            >
              Book a Free Meta Ads Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-12 border-t border-white/[0.06]">
            {[
              { label: 'Service Businesses', desc: 'Trades, health, education, hospitality' },
              { label: 'Professional Services', desc: 'Finance, legal, consulting, real estate' },
              { label: 'eCommerce & Events', desc: '$3K–$50K+ monthly ad spend' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-sm font-bold text-white font-serif mb-1">{item.label}</div>
                <div className="text-xs text-slate-500 font-sans">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
