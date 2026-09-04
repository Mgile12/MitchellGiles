'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight, ArrowDown, X, ChevronDown, Search, Magnet, CalendarDays, Lock } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Eyebrow from '@/components/Eyebrow';

const heatmaps = [
  {
    client: 'Polish Hub Marine Detailing',
    result: '2 days',
    before: 'https://iili.io/qjTeSUX.png',
    after: 'https://iili.io/qjTegJn.md.png',
  },
  {
    client: 'Ceramics Gold Coast',
    result: '11 days',
    before: 'https://iili.io/qjTeNxR.png',
    after: 'https://iili.io/qjTnVX1.jpg',
  },
];

const gbpProof = [
  { src: '/proof/gbp-calls-89-up-324.png', stat: '89 calls', note: 'Up 324% on the same five months last year' },
  { src: '/proof/gbp-clicks-164-up-273.png', stat: '164 website clicks', note: 'Up 273% year on year' },
  { src: '/proof/gbp-clicks-303-up-197.png', stat: '303 website clicks', note: 'Up 197% year on year' },
  { src: '/proof/gbp-calls-168-up-83.png', stat: '168 calls', note: 'Up 83% year on year' },
  { src: '/proof/gbp-calls-266-up-23.png', stat: '266 calls', note: 'Up 23% through the wet season, the quietest stretch of the year' },
  { src: '/proof/gbp-clicks-227-aug-up-21.png', stat: '227 website clicks in August', note: 'Up 21% on last August' },
  { src: '/proof/gbp-interactions-306-up-18.png', stat: '306 profile interactions', note: 'Up 18% year on year' },
  { src: '/proof/gbp-interactions-88-from-zero.png', stat: '88 interactions', note: 'From zero. Profile launched in June' },
  { src: '/proof/gbp-calls-33-from-zero.png', stat: '33 calls', note: 'Same new profile, first three months' },
];

const testimonials = ['https://iili.io/qjTn7qu.jpg', 'https://iili.io/qjTnagj.jpg'];

const steps = [
  {
    icon: Search,
    title: 'Audit',
    text: 'I look at your profile, your website and the three businesses currently above you, and tell you on the call what is holding you back.',
  },
  {
    icon: Magnet,
    title: 'Fix both magnets',
    text: 'Your profile and your website, together. Most people only touch one, which is why most people stay on page two.',
  },
  {
    icon: CalendarDays,
    title: 'Weekly work',
    text: 'Reviews, posts, photos, categories, services. Every week, not once at the start.',
  },
  {
    icon: Lock,
    title: 'Hold the spot',
    text: 'Rankings drift the moment the work stops. This is ongoing, and I take one business per industry, per area.',
  },
];

interface FAQItem {
  question: string;
  answer: string;
}

function FAQ({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/[0.06]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span
          className={`text-base sm:text-lg font-semibold transition-colors duration-200 font-sans ${
            open ? 'text-gold' : 'text-white group-hover:text-gold/80'
          }`}
        >
          {item.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 transition-transform duration-200 ${open ? 'rotate-180 text-gold' : 'text-slate-500'}`}
        />
      </button>
      <div className={`grid transition-all duration-300 ease-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <p className="pb-6 pl-4 border-l-2 border-gold/30 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function GBPContent({ faqItems }: { faqItems: FAQItem[] }) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="bg-navy-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="grid-ground absolute inset-0" aria-hidden="true" />
        <div className="glow w-[720px] h-[520px] -top-56 left-1/2 -translate-x-1/2" style={{ ['--glow-a' as string]: '0.16' }} aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-44 pb-16 sm:pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/40 text-gold rounded-full mb-6 font-semibold text-sm tracking-wide uppercase font-sans">
            <MapPin className="w-4 h-4" />
            Google Business Profile
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] font-serif mb-6">
            Top 3 on Google Maps.
            <br />
            <span className="text-gold">Within 90 days.</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
            The top three Maps listings take around <strong className="text-white">70% of local clicks</strong>.
            Everyone else splits what&apos;s left. I get Gold Coast businesses into that pack and keep them there.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="gold-flat-btn inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold group"
            >
              Book a 15-minute call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <a
              href="#heatmaps"
              className="press inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold border border-white/20 text-white bg-white/5 hover:bg-white/10 hover:border-white/40"
            >
              See the heatmaps
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Heatmaps */}
      <section id="heatmaps" className="relative scroll-mt-24">
        <div className="absolute top-0 left-0 right-0 h-px bg-gold/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <AnimateOnScroll className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-serif mb-3">
              Two clients. Two heatmaps. Before and after.
            </h2>
            <p className="text-slate-400 font-sans">
              Live Google Maps ranking heatmaps. The number is how many days it took.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll className="grid md:grid-cols-2 gap-8">
            {heatmaps.map((item) => (
              <div key={item.client} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
                <div className="px-6 py-4 border-b border-white/[0.06] flex items-center justify-between">
                  <p className="text-white font-semibold font-sans">{item.client}</p>
                  <div className="px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider">
                    {item.result}
                  </div>
                </div>
                <div className="p-4 sm:p-6 grid grid-cols-2 gap-3 sm:gap-4">
                  {(['before', 'after'] as const).map((k) => (
                    <div key={k}>
                      <div
                        className={`text-xs font-bold uppercase tracking-wider mb-2 text-center ${
                          k === 'before' ? 'text-red-400' : 'text-gold'
                        }`}
                      >
                        {k}
                      </div>
                      <button
                        type="button"
                        onClick={() => setLightbox(item[k])}
                        className="proof-card block w-full rounded-lg overflow-hidden border border-white/[0.06]"
                        aria-label={`${item.client} ${k}, open full size`}
                      >
                        <img src={item[k]} alt={`${item.client} ${k}`} className="w-full h-auto block" loading="lazy" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </AnimateOnScroll>
        </div>
      </section>

      {/* Performance screenshots */}
      <section className="bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <AnimateOnScroll className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-serif mb-3">
              Nine charts. Straight out of Google.
            </h2>
            <p className="text-slate-400 font-sans max-w-2xl mx-auto">
              Calls, website clicks and interactions from Business Profiles I manage, April to August 2026. Untouched
              screenshots. Tap any to enlarge.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {gbpProof.map((item) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setLightbox(item.src)}
                className="proof-card group text-left rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden"
                aria-label={`${item.stat}. ${item.note}. Open full size.`}
              >
                <div className="bg-white">
                  <img
                    src={item.src}
                    alt={`Google Business Profile performance chart: ${item.stat}`}
                    className="w-full h-auto block"
                    loading="lazy"
                    width={914}
                    height={505}
                  />
                </div>
                <div className="px-5 py-4 border-t border-white/[0.06]">
                  <p className="text-white font-semibold font-sans">{item.stat}</p>
                  <p className="text-slate-400 text-sm font-sans mt-0.5">{item.note}</p>
                </div>
              </button>
            ))}
          </AnimateOnScroll>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <AnimateOnScroll className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white font-serif mb-2">What clients say</h2>
            <p className="text-slate-400 text-sm font-sans">Screenshots, not testimonials I wrote.</p>
          </AnimateOnScroll>
          <AnimateOnScroll className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {testimonials.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setLightbox(src)}
                className="proof-card rounded-2xl overflow-hidden border border-gold/20 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
                aria-label={`Client message ${i + 1}, open full size`}
              >
                <img src={src} alt={`Client message ${i + 1}`} className="w-full h-auto block" loading="lazy" />
              </button>
            ))}
          </AnimateOnScroll>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-navy-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <AnimateOnScroll className="text-center mb-12">
            <Eyebrow className="mb-4">How it works</Eyebrow>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-serif">
              Four steps. The last one never ends.
            </h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <AnimateOnScroll key={s.title} stagger={i + 1}>
                  <div className="h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="text-lg font-bold text-white font-serif mb-2">{s.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-sans">{s.text}</p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <AnimateOnScroll className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-serif mb-10">Questions I get asked</h2>
          <div>
            {faqItems.map((item) => (
              <FAQ key={item.question} item={item} />
            ))}
          </div>
        </AnimateOnScroll>
      </section>

      {/* CTA */}
      <section className="relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gold/20" />
        <AnimateOnScroll className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-serif mb-5">
            Find out where you sit on the map
          </h2>
          <p className="text-lg text-slate-300 font-sans leading-relaxed mb-10">
            Fifteen minutes. I&apos;ll look at your profile before the call and tell you what I&apos;d do first. If
            your industry and area are already taken, I&apos;ll say so.
          </p>
          <Link
            href="/book"
            className="gold-flat-btn inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold group"
          >
            Book a 15-minute call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </AnimateOnScroll>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-pointer animate-fade-in"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200 z-10"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div className="relative max-w-5xl max-h-[90vh] cursor-default animate-modal-in" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox} alt="Expanded view" className="w-full h-full object-contain rounded-lg shadow-2xl" />
          </div>
        </div>
      )}
    </div>
  );
}
