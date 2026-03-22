'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { MoveRight, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import { MarqueeAnimation } from '@/components/ui/marquee-effect';

const services = [
  'Meta Ads',
  'Email Marketing',
  'Copywriting',
  'Local SEO',
  'Automation',
  'Google Ads',
  'AI Optimisation (GEO)',
  'TikTok Ads',
  'Website Design',
  'Event Marketing',
];

const STATS =
  '$60,632 in 30 Days | $82,574 from a Single Event Upsell | Top 3 Google Maps in 2 Days | 72% open rate & 10.3% click rate | $425K total sales with 436% growth | $100.3K in weekly sales | From 49 tickets to 88 and $25K+ in event tickets';

export function AnimatedHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => services, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section className="w-full bg-navy-950 hero-grain overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8 py-20 lg:py-32 pb-12 lg:pb-16 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col items-center">
            <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tighter text-center font-bold font-serif text-white">
              Marketing Agency Gold Coast
            </h1>

            <div className="relative flex w-full justify-center overflow-hidden h-[90px] md:h-[80px] mt-2">
              {titles.map((title, index) => (
                <motion.span
                  key={index}
                  className="absolute w-full text-center text-4xl md:text-6xl font-bold font-serif text-gold tracking-tighter"
                  initial={{ opacity: 0, y: 80 }}
                  transition={{ type: 'spring', stiffness: 60, damping: 14 }}
                  animate={
                    titleNumber === index
                      ? { y: 0, opacity: 1 }
                      : {
                          y: titleNumber > index ? -80 : 80,
                          opacity: 0,
                        }
                  }
                >
                  {title}
                </motion.span>
              ))}
            </div>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-slate-300 max-w-2xl text-center mt-4 font-sans">
              Predictable revenue systems for Gold Coast businesses. We build the pipelines — you close the clients.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-3 h-11 rounded-lg px-8 text-sm font-semibold tracking-wide border border-white/20 text-white bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            >
              Book a Strategy Call <PhoneCall className="w-4 h-4" />
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

      <div className="w-full overflow-hidden">
        <div className="bg-[#0C86EA] py-4">
          <MarqueeAnimation
            direction="left"
            baseVelocity={-1.5}
            className="text-xl md:text-2xl text-white font-bold tracking-wide normal-case font-sans"
          >
            {STATS}
          </MarqueeAnimation>
        </div>
        <div className="bg-navy-800 py-4">
          <MarqueeAnimation
            direction="right"
            baseVelocity={-1.5}
            className="text-xl md:text-2xl text-[#0C86EA] font-bold tracking-wide normal-case font-sans"
          >
            {STATS}
          </MarqueeAnimation>
        </div>
      </div>
    </section>
  );
}
