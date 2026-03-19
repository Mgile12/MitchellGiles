'use client';

import { useState } from 'react';
import { MapPin, TrendingUp, Shield, Phone, X, ChevronRight } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import { BUSINESS_INFO } from '@/lib/business-info';

const heatmaps = [
  {
    client: 'Polish Hub Marine Detailing',
    result: '2 Days',
    before: 'https://iili.io/qjTeSUX.png',
    after: 'https://iili.io/qjTegJn.md.png',
  },
  {
    client: 'Ceramics Gold Coast',
    result: '11 Days',
    before: 'https://iili.io/qjTeNxR.png',
    after: 'https://iili.io/qjTnVX1.jpg',
  },
];

const testimonials = [
  'https://iili.io/qjTn7qu.jpg',
  'https://iili.io/qjTnagj.jpg',
];

export default function GoogleMapsOffer() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section className="relative bg-navy-950 text-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,175,55,0.07)_0%,transparent_65%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative">

        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/40 text-gold rounded-full mb-6 font-semibold text-sm tracking-wide uppercase">
            <MapPin className="w-4 h-4" />
            Limited Offer
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-serif mb-6">
            Top 3 on Google Maps.<br />
            <span className="text-gold">In 7 Days.</span> Guaranteed.
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans">
            The top 3 Google Maps listings capture <strong className="text-white">70% of all local clicks</strong>.
            Everyone outside that pack is splitting the remaining 30% — if they're lucky.
          </p>
        </AnimateOnScroll>

        {/* Project Math Block */}
        <AnimateOnScroll className="mb-16">
          <div className="relative rounded-2xl border border-gold/20 bg-white/[0.03] backdrop-blur-sm overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0" />
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gold/10 border border-gold/30">
                      <TrendingUp className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-serif">The Project Math</h3>
                  </div>

                  <p className="text-slate-400 leading-relaxed mb-6 font-sans">
                    Let's say your average job is worth <strong className="text-white">$500</strong> and you miss
                    just <strong className="text-white">2 calls per week</strong> because you're buried on page 2.
                  </p>

                  <div className="space-y-3 font-sans">
                    <div className="flex justify-between items-center py-3 border-b border-white/[0.06]">
                      <span className="text-slate-400">Missed calls per week</span>
                      <span className="text-white font-semibold">2 jobs</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/[0.06]">
                      <span className="text-slate-400">Average job value</span>
                      <span className="text-white font-semibold">$500</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/[0.06]">
                      <span className="text-slate-400">Weekly revenue lost</span>
                      <span className="text-red-400 font-semibold">−$1,000</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/[0.06]">
                      <span className="text-slate-400">Monthly revenue lost</span>
                      <span className="text-red-400 font-semibold">−$4,000+</span>
                    </div>
                    <div className="flex justify-between items-center py-4 rounded-xl bg-gold/5 border border-gold/20 px-4 mt-2">
                      <span className="text-white font-semibold">One-time investment</span>
                      <span className="text-gold font-bold text-xl">$2,000</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="rounded-xl bg-white/[0.04] border border-white/[0.08] p-6">
                    <p className="text-2xl sm:text-3xl font-bold text-white font-serif mb-2">
                      $2,000 once.<br />
                      <span className="text-gold">$4,000+ every month</span><br />
                      you stay invisible.
                    </p>
                    <p className="text-slate-400 text-sm mt-3 font-sans">
                      Your competitors in the top 3 are taking your calls right now. Every single day you wait is money you'll never get back.
                    </p>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gold/5 border border-gold/20">
                    <Shield className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold text-sm mb-1">Money-Back Guarantee</p>
                      <p className="text-slate-400 text-sm font-sans leading-relaxed">
                        If you're not ranked in the top 3 within 7 days, you get a full refund. No questions. No excuses.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                    <ChevronRight className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <p className="text-slate-300 text-sm font-sans leading-relaxed">
                      We've done this for businesses that weren't even listed on Google — and had them outranking established competitors within days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Heatmap Before/After */}
        <AnimateOnScroll className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif mb-3">
              Real Clients. Real Heatmaps. Real Rankings.
            </h3>
            <p className="text-slate-400 font-sans">
              These aren't projections — these are live Google Maps ranking heatmaps from actual clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {heatmaps.map((item) => (
              <div key={item.client} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
                <div className="px-6 py-4 border-b border-white/[0.06] flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold font-sans">{item.client}</p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider">
                    {item.result}
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2 text-center">Before</div>
                      <div
                        className="relative rounded-lg overflow-hidden cursor-pointer group border border-white/[0.06] hover:border-white/20 transition-colors duration-200"
                        onClick={() => setLightbox(item.before)}
                      >
                        <img
                          src={item.before}
                          alt={`${item.client} before`}
                          className="w-full h-auto block"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/30">
                          <span className="text-xs font-semibold text-white bg-black/60 px-3 py-1 rounded-full">Expand</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gold uppercase tracking-wider mb-2 text-center">After</div>
                      <div
                        className="relative rounded-lg overflow-hidden cursor-pointer group border border-gold/20 hover:border-gold/40 transition-colors duration-200"
                        onClick={() => setLightbox(item.after)}
                      >
                        <img
                          src={item.after}
                          alt={`${item.client} after`}
                          className="w-full h-auto block"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/30">
                          <span className="text-xs font-semibold text-white bg-black/60 px-3 py-1 rounded-full">Expand</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Testimonial Screenshots */}
        <AnimateOnScroll className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-serif mb-2">What People Are Saying</h3>
            <p className="text-slate-400 text-sm font-sans">Unfiltered. Unedited. Real.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {testimonials.map((src, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden border border-gold/20 cursor-pointer group hover:border-gold/40 transition-colors duration-200 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
                onClick={() => setLightbox(src)}
              >
                <img
                  src={src}
                  alt={`Client testimonial ${i + 1}`}
                  className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* CTA */}
        <AnimateOnScroll className="text-center">
          <div className="max-w-xl mx-auto">
            <p className="text-sm text-gold/80 font-semibold uppercase tracking-widest mb-4 font-sans">
              Limited spots available
            </p>
            <h3 className="text-3xl sm:text-4xl font-bold text-white font-serif mb-4">
              Ready to own the top 3?
            </h3>
            <p className="text-slate-400 mb-8 font-sans leading-relaxed">
              One call. One investment. Top 3 in 7 days — or your money back.
            </p>

            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold via-gold-light to-gold rounded-lg blur opacity-40 group-hover:opacity-60 transition duration-300" />
              <a
                href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                className="relative inline-flex items-center justify-center gap-3 rounded-lg px-10 py-5 text-lg font-bold bg-gradient-to-r from-gold via-gold-light to-gold text-navy-950 hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300 group"
              >
                <Phone className="w-5 h-5" />
                Call Now — {BUSINESS_INFO.phone}
              </a>
            </div>

            <p className="mt-5 text-xs text-slate-500 font-sans">
              $2,000 one-time. Top 3 in 7 days. Money-back guarantee.
            </p>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200 z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div
            className="relative max-w-5xl max-h-[90vh] cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox}
              alt="Expanded view"
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
