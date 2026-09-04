import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import AnimateOnScroll from './AnimateOnScroll';

export default function FinalCTA() {
  return (
    <section className="relative bg-navy-950 text-slate-50" aria-labelledby="final-heading">
      <div className="absolute top-0 left-0 right-0 h-px bg-gold/20" />

      <AnimateOnScroll className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-6 font-sans">
            One honest question
          </span>
          <h3
            id="final-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] font-serif"
          >
            Do you care more about what you pay,
            <span className="text-slate-400"> or what your marketing makes you?</span>
          </h3>

          <p className="mt-8 text-lg sm:text-xl text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
            If it&apos;s the second, book a call and bring your numbers. If it&apos;s the first, I&apos;m not the
            right fit, and that&apos;s fine.
          </p>

          <div className="mt-10">
            <Link
              href="/book"
              className="gold-flat-btn inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold group"
            >
              Book a call with Mitchell
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <p className="mt-4 text-sm text-slate-500 font-sans">30 minutes. No pitch on the first call.</p>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
