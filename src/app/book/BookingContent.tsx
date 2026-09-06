'use client';

import Link from 'next/link';
import { ArrowLeft, Phone, CheckCircle2, TrendingUp, Users, Award, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/business-info';

const trustPoints = [
  'No lock-in contracts — results-first approach',
  'Transparent reporting — always know your ROI',
  'Direct access to your strategist, no account managers',
];

const stats = [
  { value: '$190k+', label: 'Email Marketing', icon: Users },
  { value: '$425k', label: 'YoY Growth (1 Client)', icon: TrendingUp },
  { value: '$100k', label: 'Weekly Sales (1 Client)', icon: Award },
];

export default function BookingContent() {
  return (
    <div className="min-h-screen bg-navy-950 flex flex-col">
      <header className="border-b border-white/[0.06] bg-navy-950/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/logos/mrg-wordmark.png" alt="MRG Marketing" width={240} height={63} className="h-6 w-auto object-contain" />
            <span className="sr-only">MRG Marketing</span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-gold transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to site
          </Link>
        </div>
      </header>

      <main className="flex-1 py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-16 items-start">
            <div className="lg:pt-4 lg:sticky lg:top-8">
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-6">
                <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                <span className="text-xs font-semibold text-gold tracking-widest uppercase">30 minutes, free</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
                Book a<br />
                <span className="text-gold">30-minute call</span>
              </h1>

              <p className="text-slate-400 text-base leading-relaxed mb-8">
                Tell me what you sell and what's not working. If I can help, you get a plan. If I can't, I'll say so. No pitch.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-10">
                {stats.map(({ value, label, icon: Icon }) => (
                  <div key={label} className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-4 text-center">
                    <Icon className="h-5 w-5 text-gold mx-auto mb-2 opacity-80" />
                    <div className="text-2xl font-bold text-white mb-0.5">{value}</div>
                    <div className="text-xs text-slate-500 leading-tight">{label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-10">
                {trustPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-300 leading-snug">{point}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/[0.06] pt-8">
                <p className="text-xs text-slate-500 mb-3 uppercase tracking-widest font-semibold">Prefer to call?</p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                  className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold transition-colors duration-200"
                >
                  <Phone className="h-4 w-4" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.07] rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
              <iframe
                src="https://app.usemotion.com/meet/mitchell-giles-xsnm/d2h4337"
                title="Motion Booking Page"
                width="100%"
                height="840px"
                frameBorder="0"
                className="block"
              />
            </div>
          </div>
        </div>
      </main>

      <section className="border-t border-white/[0.06] py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
              <MapPin className="w-4 h-4 text-gold" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gold font-sans">Where I am</p>
              <p className="text-sm text-slate-400 font-sans">{BUSINESS_INFO.address.full}</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/[0.08]" style={{ height: '420px' }}>
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(`${BUSINESS_INFO.address.full}, Australia`)}&z=14&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`MRG Marketing, ${BUSINESS_INFO.address.full}, on Google Maps`}
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.06] py-6">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <span>&copy; {new Date().getFullYear()} MRG Marketing. All rights reserved.</span>
          <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-slate-400 transition-colors duration-200">
            {BUSINESS_INFO.email}
          </a>
        </div>
      </footer>
    </div>
  );
}
