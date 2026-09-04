import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import AnimateOnScroll from './AnimateOnScroll';
import Eyebrow from './Eyebrow';

export default function FinalCTA() {
  return (
    <section className="relative bg-navy-950 text-slate-50 overflow-hidden" aria-labelledby="final-heading">
      <div className="absolute top-0 left-0 right-0 h-px bg-gold/20" />
      <div className="grid-ground absolute inset-0" aria-hidden="true" />
      <div className="glow w-[700px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ ['--glow-a' as string]: '0.14' }} aria-hidden="true" />

      <AnimateOnScroll className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow className="mb-6">One honest question</Eyebrow>
          <h2
            id="final-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] font-serif"
          >
            Do you care more about what you pay,
            <span className="text-slate-400"> or what your marketing makes you?</span>
          </h2>

          <p className="mt-8 text-lg sm:text-xl text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
            If it&apos;s the second, book 15 minutes. Tell me what you sell and what&apos;s not working. If I can help,
            you get a plan. If I can&apos;t, I&apos;ll say so.
          </p>

          <div className="mt-10">
            <Link
              href="/book"
              className="gold-flat-btn inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold group"
            >
              Book a 15-minute call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <p className="mt-4 text-sm text-slate-500 font-sans">No pitch.</p>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
