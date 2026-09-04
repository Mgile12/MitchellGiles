'use client';

import { TrendingUp, BarChart3, Mail, ShoppingCart, Trophy, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import AnimateOnScroll from './AnimateOnScroll';
import type { LucideIcon } from 'lucide-react';

interface Result {
  image: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  icon: LucideIcon;
  overlay: string;
}

const results: Result[] = [
  {
    image: '/image.png',
    title: 'Multi-Campaign Performance',
    description: 'Managed 3 high-performing ad sets with 67 website purchases and $30K+ in value.',
    metric: '6.88x',
    metricLabel: 'ROAS',
    icon: BarChart3,
    overlay: '6.88x ROAS | 67 Purchases | $30K+ Value',
  },
  {
    image: '/Screenshot_2026-02-20_082607.png',
    title: '$60,632 in 30 Days',
    description: 'Email marketing driving 63.4% of monthly store revenue. Strategy, automation, and execution that turns subscribers into buyers.',
    metric: '$60K',
    metricLabel: 'Email Revenue',
    icon: Mail,
    overlay: '$60,632 in 30 Days | Email Marketing | 63.4% Monthly Revenue',
  },
  {
    image: '/Screenshot 2025-08-04 132125.png',
    title: '$82,574 from a Single Event Upsell',
    description: 'Built a high-ticket upsell waitlist off a live event and generated $82,574 in under 3 hours. No ads. We ran the same sequence twice.',
    metric: '$82K',
    metricLabel: 'in 3hrs, twice',
    icon: TrendingUp,
    overlay: '$82,574 | Event Upsell | 3 Hours | Done Twice',
  },
  {
    image: '/files_7126411-1763632304045-Screenshot 2025-07-24 143236.png',
    title: 'Email Marketing That Converts',
    description: '72% open rate, 10.3% click rate. Email performance that actually drives action.',
    metric: '72%',
    metricLabel: 'Open Rate',
    icon: Mail,
    overlay: '72% Open Rate | 10.3% Click Rate | Real Engagement',
  },
  {
    image: '/files_7126411-1763632208203-Before and After Image Youtube Thumbnail (3).png',
    title: 'Yearly Revenue Growth',
    description: '$425K total sales with 436% growth. 1,801 orders, 1,425 bookings.',
    metric: '$425K',
    metricLabel: 'Annual Sales',
    icon: ShoppingCart,
    overlay: '$425K Annual | 436% Growth | 1,801 Orders',
  },
  {
    image: '/files_7126411-1763632208151-Before and After Image Youtube Thumbnail (4).png',
    title: '7-Day Sales Surge',
    description: '$100.3K in weekly sales with 49 orders and 87 form submissions.',
    metric: '$100K',
    metricLabel: 'Weekly Sales',
    icon: TrendingUp,
    overlay: '$100K Weekly Sales | No Paid Ads',
  }
];

function ResultCard({ result, index, onImageClick }: { result: Result; index: number; onImageClick: () => void }) {
  const Icon = result.icon;

  return (
    <AnimateOnScroll className={`flex flex-col ${
      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
    } gap-8 lg:gap-12 items-center`}>
      <div className="w-full lg:w-1/2">
        <div
          className="relative group cursor-pointer hover-scale"
          onClick={onImageClick}
        >
          <div className="relative rounded-2xl overflow-hidden border border-gold/20 bg-white/[0.03] backdrop-blur-sm p-2 sm:p-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] group-hover:border-gold/40 transition-colors duration-300">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={result.image}
                alt={result.title}
                className="w-full h-auto block"
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
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                <div className="px-4 py-2 bg-gold/90 text-navy-950 rounded-lg font-semibold text-sm">
                  Click to expand
                </div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-2xl border border-gold/10 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 space-y-6">
        <div>
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gold/10 border border-gold/30 text-gold mb-4 hover:scale-105 hover:rotate-[5deg] transition-transform duration-200">
            <Icon className="w-7 h-7" />
          </div>
          <h4 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-serif">
            {result.title}
          </h4>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-sans">
            {result.description}
          </p>
        </div>

        <div className="inline-block px-6 py-4 rounded-xl bg-gold/10 border-2 border-gold/30 hover-scale">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl sm:text-5xl font-bold text-gold font-serif">
              {result.metric}
            </span>
          </div>
          <p className="text-sm font-semibold mt-1 text-gold/70 font-sans">
            {result.metricLabel}
          </p>
        </div>

        <div className="pt-4 border-t border-white/[0.06]">
          <p className="text-sm text-slate-500 italic font-sans">
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
    <section id="results" className="bg-navy-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 text-gold rounded-full mb-6 font-semibold text-sm animate-scale-in">
            <BarChart3 className="w-4 h-4" />
            Real Results
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 font-serif">
            Results That Matter
          </h3>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto font-sans">
            Revenue, not vanity metrics. Every screenshot is from a client account. Tap to enlarge. The Google Maps heatmaps and profile numbers live on the{' '}
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

        <AnimateOnScroll className="text-center mt-16 sm:mt-20">
          <Link
            href="/book"
            className="gold-flat-btn inline-block px-8 py-4 font-semibold rounded-lg text-lg font-sans"
          >
            Book a 15-minute call
          </Link>
          <p className="mt-4 text-sm text-slate-500 font-sans">
            Bring your numbers. I&apos;ll tell you what I&apos;d do with them.
          </p>
        </AnimateOnScroll>
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-pointer animate-fade-in"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200 z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl max-h-[90vh] cursor-default animate-modal-in"
          >
            <img
              src={selectedImage}
              alt="Result preview"
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
