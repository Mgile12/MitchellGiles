import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import AnimateOnScroll from './AnimateOnScroll';

export default function FinalCTA() {
  return (
    <section className="relative bg-navy-950 text-slate-50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gold/20"></div>

      <AnimateOnScroll className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-serif">
            Ask yourself something honestly.
          </h3>

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
              className="inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold border border-white/10 text-slate-500 hover:border-white/20 hover:text-slate-400 transition-all duration-300"
            >
              Keep Searching For Cheap
            </a>

            <Link
              href="/book"
              className="gold-flat-btn inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold group"
            >
              Book My Growth Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
