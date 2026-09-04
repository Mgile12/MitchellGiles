'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MoveRight, PhoneCall } from 'lucide-react';
import Link from 'next/link';

// Mirrors the eight cards in ServicesGrid so the hero and the page say the same thing.
const services = [
  'Google Maps',
  'Local SEO',
  'Google Ads',
  'Meta Ads',
  'Email Marketing',
  'Lead Generation',
  'Marketing Automation',
  'AI Search (GEO)',
];

const STATS = [
  '$60,632 in 30 days from email',
  '$82,574 from a single event upsell',
  'Top 3 on Google Maps in 2 days',
  '72% open rate, 10.3% click rate',
  '$425K in sales, 436% growth',
  '$100.3K in weekly sales',
  '266 calls in five months from one profile',
];

const DISPLAY_MS = 3800;
const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export function AnimatedHero() {
  const [titleNumber, setTitleNumber] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    }, DISPLAY_MS);
    return () => clearTimeout(timeoutId);
  }, [titleNumber]);

  return (
    <section className="w-full hero-grain overflow-hidden relative bg-cover bg-center bg-no-repeat [background-image:url('https://iili.io/qrRtzxa.png')] md:[background-image:url('https://iili.io/qrRBDes.png')]">
      <div className="absolute inset-0 bg-navy-950/80 z-0" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8 py-20 lg:py-32 pb-12 lg:pb-16 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col items-center">
            <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tighter text-center font-bold font-serif text-white">
              Marketing Consultant Ormeau
            </h1>

            <div className="relative flex w-full justify-center overflow-hidden h-[64px] md:h-[80px] mt-2">
              {services.map((title, index) => {
                const isCurrent = titleNumber === index;
                const isPast = index < titleNumber || (titleNumber === 0 && index === services.length - 1);
                return (
                  <motion.span
                    key={title}
                    className="absolute w-full text-center text-4xl md:text-6xl font-bold font-serif text-gold tracking-tighter whitespace-nowrap"
                    initial={false}
                    animate={
                      isCurrent
                        ? { opacity: 1, transform: 'translateX(0px)' }
                        : { opacity: 0, transform: isPast ? 'translateX(-64px)' : 'translateX(64px)' }
                    }
                    transition={
                      isCurrent
                        ? { duration: 0.9, ease: EASE_OUT }
                        : { duration: 0.45, ease: EASE_OUT }
                    }
                    aria-hidden={!isCurrent}
                  >
                    {title}
                  </motion.span>
                );
              })}
            </div>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-slate-300 max-w-2xl text-center mt-4 font-sans">
              I find where your business is losing customers, fix it, and stay until the numbers move. Ormeau based,
              working across the Gold Coast and Brisbane.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href="/book"
              className="press inline-flex items-center justify-center gap-3 h-11 rounded-lg px-8 text-sm font-semibold tracking-wide border border-white/20 text-white bg-white/5 hover:bg-white/10 hover:border-white/40"
            >
              Book a 15-minute call <PhoneCall className="w-4 h-4" />
            </Link>
            <a
              href="#results"
              className="gold-flat-btn inline-flex items-center justify-center gap-3 h-11 rounded-lg px-8 text-sm font-semibold tracking-wide"
            >
              View Results <MoveRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* One slow stats ticker. CSS-driven so it never stutters while the page loads. */}
      <div className="relative z-10 w-full bg-[#0C86EA] py-4">
        <div className="marquee" style={{ ['--marquee-duration' as string]: '90s' }}>
          <div className="marquee-track" data-direction="left">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
                {STATS.map((stat) => (
                  <span
                    key={`${copy}-${stat}`}
                    className="whitespace-nowrap px-6 text-lg md:text-xl text-white font-bold tracking-wide font-sans"
                  >
                    {stat}
                    <span className="ml-12 text-white/40" aria-hidden="true">
                      |
                    </span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
