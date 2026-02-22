import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import AnimateOnScroll from './AnimateOnScroll';

export default function FinalCTA() {
  return (
    <section className="relative bg-navy-950 text-slate-50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

      <AnimateOnScroll className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-serif">
            Ask yourself something honestly.
          </h2>

          <div className="mt-8 space-y-4">
            <p className="text-xl sm:text-2xl text-slate-200 leading-relaxed font-sans">
              Do you care more about what you pay&hellip;<br />
              or what your marketing makes you?
            </p>
            <p className="text-lg text-slate-400 leading-relaxed font-sans">
              One keeps you small.<br />
              The other builds leverage.
            </p>
            <p className="text-xl sm:text-2xl font-semibold text-white font-sans">
              Choose who you want to be.
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.google.com"
              className="inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold border border-slate-600 text-slate-400 hover:border-slate-500 hover:text-slate-300 transition-all duration-300"
            >
              Keep Searching For Cheap
            </a>

            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold via-gold-light to-gold rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <Link
                href="/book"
                className="relative inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold bg-gradient-to-r from-gold via-gold-light to-gold text-navy-950 hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 group"
              >
                Book My Growth Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
