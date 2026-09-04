'use client';

import { useState } from 'react';
import { Award, X } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

export default function BeyondMaps() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative bg-navy-900 text-white overflow-hidden" aria-labelledby="beyond-heading">
      <div className="absolute top-0 left-0 right-0 h-px bg-gold/20" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <AnimateOnScroll className="lg:col-span-6">
            <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-5 font-sans">
              Beyond Google Maps
            </span>
            <h3
              id="beyond-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] font-serif mb-6"
            >
              Free Google traffic is where I start.
              <span className="text-slate-400"> It isn&apos;t where I stop.</span>
            </h3>
            <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              <p>
                A Google Business Profile is the cheapest customer most local businesses will ever get, and
                I&apos;ve spent years getting very good at them. The charts above are that work.
              </p>
              <p>
                But Maps is the entry point. The strategy, copy, email and paid work is what turns a busy phone
                into a bigger business. I trained in it properly, and the results below are the other side of
                what I do.
              </p>
              <p className="text-white font-medium">Results I&apos;d put against any agency on the Gold Coast.</p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll className="lg:col-span-6">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="proof-card group block w-full text-left rounded-2xl border border-white/[0.08] bg-white/[0.02] p-3 sm:p-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              aria-label="Open the certificate at full size"
            >
              <div className="relative rounded-xl overflow-hidden bg-[#f4f2ea]">
                <img
                  src="/proof/real-world-certificate.jpeg"
                  alt="Certificate of Graduation awarded to Mitchell Giles by The Real World University for strategic marketing"
                  className="w-full h-auto block"
                  loading="lazy"
                  width={2048}
                  height={1454}
                />
              </div>
              <div className="flex items-start gap-3 px-2 pt-4 pb-1">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gold/10 border border-gold/30 shrink-0">
                  <Award className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-white font-semibold font-sans text-sm">Graduate, The Real World</p>
                  <p className="text-slate-400 text-sm font-sans">Strategic marketing and copywriting. Tap to read it.</p>
                </div>
              </div>
            </button>
          </AnimateOnScroll>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-pointer animate-fade-in"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200 z-10"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div
            className="relative max-w-6xl max-h-[90vh] cursor-default animate-modal-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="/proof/real-world-certificate.jpeg"
              alt="Certificate of Graduation, Mitchell Giles, The Real World University"
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
