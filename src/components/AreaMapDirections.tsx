'use client';

import { MapPin, Navigation, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/business-info';
import AnimateOnScroll from './AnimateOnScroll';

interface Landmark {
  name: string;
  time: string;
}

interface AreaMapDirectionsProps {
  areaName: string;
  landmarks: Landmark[];
  directions: string[];
  publicTransport: string[];
}

export default function AreaMapDirections({
  areaName,
  landmarks,
  directions,
  publicTransport,
}: AreaMapDirectionsProps) {
  return (
    <section className="bg-navy-950 relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-14">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
            Easy Access
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5 font-serif">
            Conveniently Located Near {areaName}
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <AnimateOnScroll>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gold font-sans">Office Address</p>
                  </div>
                </div>
                <p className="text-base text-white font-semibold font-sans mb-1">{BUSINESS_INFO.address.full}</p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                  className="text-sm text-gold hover:text-gold-light transition-colors duration-200 font-sans"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {landmarks.slice(0, 4).map((landmark, index) => (
                <AnimateOnScroll key={index} stagger={index + 1}>
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 hover:border-gold/20 hover:bg-white/[0.04] transition-all duration-300">
                    <div className="flex items-center gap-2.5 mb-2">
                      <Navigation className="w-4 h-4 text-gold flex-shrink-0" />
                      <p className="text-sm font-semibold text-white font-sans">{landmark.name}</p>
                    </div>
                    <div className="flex items-center gap-1.5 pl-6">
                      <Clock className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                      <p className="text-xs text-slate-400 font-sans">{landmark.time}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            {(directions.length > 0 || publicTransport.length > 0) && (
              <AnimateOnScroll>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                  {directions.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gold mb-3 font-sans">Driving Directions</p>
                      <ol className="space-y-1.5">
                        {directions.map((step, i) => (
                          <li key={i} className="text-sm text-slate-300 font-sans flex gap-2">
                            <span className="text-gold font-semibold flex-shrink-0">{i + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                  {publicTransport.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gold mb-3 font-sans">Public Transport</p>
                      <ul className="space-y-1.5">
                        {publicTransport.map((option, i) => (
                          <li key={i} className="text-sm text-slate-300 font-sans">{option}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </AnimateOnScroll>
            )}
          </div>

          <div className="lg:col-span-3">
            <AnimateOnScroll className="h-full">
              <div className="rounded-2xl overflow-hidden border border-white/[0.08] h-full min-h-[400px] lg:min-h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.992210498041!2d153.4133307!3d-27.963524800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b910f7b954aafeb%3A0x46bd1aa9daada649!2sMitchell%20Giles!5e0!3m2!1sen!2sau!4v1770894024737!5m2!1sen!2sau"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`MRG Marketing office location near ${areaName}`}
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
