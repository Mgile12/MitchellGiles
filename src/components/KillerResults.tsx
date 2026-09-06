'use client';

import { TrendingUp, BarChart3, Mail, ShoppingCart, Trophy } from 'lucide-react';
import Lightbox from './Lightbox';
import { useState } from 'react';
import Link from 'next/link';
import AnimateOnScroll from './AnimateOnScroll';
import CountUp from './CountUp';
import Eyebrow from './Eyebrow';
import RevealText from './RevealText';
import TiltCard from './TiltCard';
import type { LucideIcon } from 'lucide-react';

interface Result {
  image: string;
  width: number;
  height: number;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  icon: LucideIcon;
  overlay: string;
}

const results: Result[] = [
  {
    image: '/results/meta-ads-6-88x-roas.webp',
    width: 1400,
    height: 513,
    title: '6.88x return on Meta, three ad sets',
    description: 'Three ad sets, 67 website purchases, $30K in value. Screenshot from Ads Manager.',
    metric: '6.88x',
    metricLabel: 'return on ad spend',
    icon: BarChart3,
    overlay: '6.88x ROAS | 67 Purchases | $30K+ Value',
  },
  {
    image: '/results/email-60k-in-30-days.webp',
    width: 764,
    height: 402,
    title: '$60,632 from email in 30 days',
    description: "Email drove 63.4% of the store's revenue that month, from a list they already had.",
    metric: '$60K',
    metricLabel: 'from email',
    icon: Mail,
    overlay: '$60,632 in 30 Days | Email Marketing | 63.4% Monthly Revenue',
  },
  {
    image: '/results/event-upsell-82k.webp',
    width: 479,
    height: 288,
    title: '$82,574 from one event upsell, twice',
    description: 'A high-ticket upsell waitlist off a live event. $82,574 in under three hours, no ads. I ran the same sequence twice.',
    metric: '$82K',
    metricLabel: 'in 3hrs, twice',
    icon: TrendingUp,
    overlay: '$82,574 | Event Upsell | 3 Hours | Done Twice',
  },
  {
    image: '/results/email-72-open-rate.webp',
    width: 488,
    height: 507,
    title: '72% open rate, 10.3% click rate',
    description: 'One campaign to a list the client already had.',
    metric: '72%',
    metricLabel: 'open rate',
    icon: Mail,
    overlay: '72% Open Rate | 10.3% Click Rate | Real Engagement',
  },
  {
    image: '/results/annual-425k.webp',
    width: 1280,
    height: 720,
    title: '$425K in a year, up 436%',
    description: '1,801 orders and 1,425 bookings in twelve months.',
    metric: '$425K',
    metricLabel: 'in a year',
    icon: ShoppingCart,
    overlay: '$425K Annual | 436% Growth | 1,801 Orders',
  },
  {
    image: '/results/weekly-100k.webp',
    width: 1280,
    height: 720,
    title: '$100.3K in one week',
    description: '49 orders and 87 form submissions in seven days.',
    metric: '$100K',
    metricLabel: 'in a week',
    icon: TrendingUp,
    overlay: '$100K in a week | No paid ads',
  }
];

function ResultCard({ result, index, onImageClick }: { result: Result; index: number; onImageClick: () => void }) {
  const Icon = result.icon;

  return (
    <AnimateOnScroll
      variant="group"
      className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
    >
      <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'rv-left' : 'rv-right'}`}>
        <button
          type="button"
          className="relative group cursor-pointer block w-full text-left"
          onClick={onImageClick}
          aria-label={`Open the screenshot for ${result.title} at full size`}
        >
          <TiltCard className="rounded-2xl">
          <div className="relative rounded-2xl overflow-hidden border border-gold/20 bg-white/[0.03] backdrop-blur-sm p-2 sm:p-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] group-hover:border-gold/40 transition-colors duration-200">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={result.image}
                alt={result.title}
                className="w-full h-auto block"
                loading="lazy"
                decoding="async"
                width={result.width}
                height={result.height}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <div className="flex items-center gap-2">
                  <Trophy className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-white/90 tracking-wide font-sans">
                    {result.overlay}
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150 bg-black/20">
                <div className="px-4 py-2 bg-navy-950/90 text-white rounded-lg font-semibold text-sm border border-white/20">
                  Open full size
                </div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-2xl border border-gold/10 pointer-events-none" />
          </div>
          </TiltCard>
        </button>
      </div>

      <div className={`w-full lg:w-1/2 space-y-6 rv-delay-1 ${index % 2 === 0 ? 'rv-right' : 'rv-left'}`}>
        <div>
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gold/10 border border-gold/30 text-gold mb-4">
            <Icon className="w-7 h-7" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-serif">
            {result.title}
          </h3>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-sans">
            {result.description}
          </p>
        </div>

        <div className="inline-block px-6 py-4 rounded-xl bg-gold/10 border-2 border-gold/30">
          <div className="flex items-baseline gap-2">
            <span className="text-gradient-accent text-4xl sm:text-5xl font-bold font-serif">
              <CountUp value={result.metric} />
            </span>
          </div>
          <p className="text-sm font-semibold mt-1 text-gold font-sans">
            {result.metricLabel}
          </p>
        </div>

        <div className="pt-4 border-t border-white/[0.06]">
          <p className="text-sm text-slate-400 italic font-sans">
            Client account. Screenshot unedited.
          </p>
        </div>
      </div>
    </AnimateOnScroll>
  );
}

export default function KillerResults() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="results" className="relative bg-navy-950 text-white overflow-hidden">
      <div className="glow w-[640px] h-[640px] -top-56 right-[-10%]" style={{ ['--glow-a' as string]: '0.12' }} aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-12 sm:mb-16">
          <Eyebrow className="mb-4">Results</Eyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 font-serif">
            <RevealText text="What the work made." />
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto font-sans">
            Revenue, not vanity metrics. Every screenshot is from a client account. Tap any to enlarge. The Google Maps heatmaps and profile numbers are on the{' '}
            <Link href="/google-business-profile-gold-coast" className="text-gold underline underline-offset-2 hover:text-gold/80">Business Profile page</Link>.
          </p>
        </AnimateOnScroll>

        <div className="space-y-12 sm:space-y-16">
          {results.map((result, index) => (
            <ResultCard
              key={index}
              result={result}
              index={index}
              onImageClick={() => setSelectedImage(result.image)}
            />
          ))}
        </div>
      </div>

      <Lightbox src={selectedImage} alt={results.find((r) => r.image === selectedImage)?.title ?? 'Result screenshot'} onClose={() => setSelectedImage(null)} />
    </section>
  );
}
