'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/business-info';
import AnimateOnScroll from './AnimateOnScroll';
import Eyebrow from './Eyebrow';
import RevealText from './RevealText';

const PLACE_ID = 'ChIJI7me_LgPkWsRiuaYKm_2oqc';
const PIN = { lat: -27.7667993, lng: 153.2613798 };

// Browser key for Google's Locator Plus. Inlined at build time; restrict it to mrgmarketing.com.au in
// Google Cloud. When it's absent the section falls back to the keyless Maps embed.
const MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY ?? '';
const LOCATOR_LIB = 'https://ajax.googleapis.com/ajax/libs/@googlemaps/extended-component-library/0.6.15/index.min.js';

// Mitchell's Locator Plus Quick Builder config, re-centred on the Ormeau pin
const LOCATOR_CONFIG = {
  locations: [
    {
      title: BUSINESS_INFO.legalName,
      address1: BUSINESS_INFO.address.street,
      address2: `${BUSINESS_INFO.address.locality}, ${BUSINESS_INFO.address.region}, Australia`,
      coords: PIN,
      placeId: PLACE_ID,
      actions: [{ label: 'Book appointment', defaultUrl: `${BUSINESS_INFO.url}/book/` }],
    },
  ],
  mapOptions: {
    center: PIN,
    fullscreenControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    zoom: 14,
    zoomControl: true,
    maxZoom: 17,
    mapId: '',
  },
  mapsApiKey: MAPS_KEY,
  capabilities: { input: false, autocomplete: false, directions: false, distanceMatrix: false, details: false, actions: true },
};

const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.legalName)}&query_place_id=${PLACE_ID}`;
const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(`${BUSINESS_INFO.legalName}, ${BUSINESS_INFO.address.full}`)}&z=15&output=embed`;

function LocatorPlus() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    let cancelled = false;

    // Only pull Google's library once the map scrolls near the viewport
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        if (!document.querySelector(`script[src="${LOCATOR_LIB}"]`)) {
          const s = document.createElement('script');
          s.type = 'module';
          s.src = LOCATOR_LIB;
          document.head.appendChild(s);
        }
        el.innerHTML = `<gmpx-api-loader key="${MAPS_KEY}" solution-channel="GMP_QB_locatorplus_v11_cF"></gmpx-api-loader><gmpx-store-locator map-id="DEMO_MAP_ID"></gmpx-store-locator>`;
        customElements.whenDefined('gmpx-store-locator').then(() => {
          if (cancelled) return;
          const locator = el.querySelector('gmpx-store-locator') as (HTMLElement & { configureFromQuickBuilder?: (c: unknown) => void }) | null;
          locator?.configureFromQuickBuilder?.(LOCATOR_CONFIG);
        });
      },
      { rootMargin: '400px' },
    );
    io.observe(el);
    return () => {
      cancelled = true;
      io.disconnect();
    };
  }, []);

  return <div ref={host} className="locator-plus h-full w-full" aria-label="MRG Marketing on Google Maps" />;
}

/** Homepage profile map: Google Locator Plus when a Maps key is configured, otherwise the keyless embed. */
export default function LocationMap() {
  return (
    <section id="location" className="relative bg-navy-900 overflow-hidden" aria-labelledby="location-heading">
      <div className="grid-ground absolute inset-0" aria-hidden="true" />
      <div className="glow w-[600px] h-[600px] -bottom-52 right-[-8%]" style={{ ['--glow-a' as string]: '0.1' }} aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-center">
          <AnimateOnScroll className="lg:col-span-5">
            <Eyebrow className="mb-4">Where I am</Eyebrow>
            <h2 id="location-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
              <RevealText text="Ormeau, northern Gold Coast." />
            </h2>
            <p className="text-base sm:text-lg text-slate-400 font-sans leading-relaxed">
              Based in Ormeau, between the Gold Coast and Brisbane. Most calls happen online, and if you&apos;re nearby
              I&apos;m happy to come to you.
            </p>

            <ul className="mt-8 space-y-4 font-sans">
              <li className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                <span>{BUSINESS_INFO.address.full}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                <a href={`tel:${BUSINESS_INFO.phoneFormatted}`} className="hover:text-white transition-colors duration-150">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href="/book"
                className="gold-flat-btn inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold group"
              >
                Book a 30-minute call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <a
                href={mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold/80 transition-colors duration-150 font-sans"
              >
                Open in Google Maps <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_24px_64px_rgba(0,0,0,0.5)] bg-navy-950" style={{ height: '440px' }}>
              {MAPS_KEY ? (
                <LocatorPlus />
              ) : (
                <iframe
                  src={embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MRG Marketing on Google Maps, 9 Laverton St, Ormeau"
                />
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
