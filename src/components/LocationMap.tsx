'use client';

import { useEffect, useRef } from 'react';
import { BUSINESS_INFO } from '@/lib/business-info';

const PLACE_ID = 'ChIJI7me_LgPkWsRiuaYKm_2oqc';
const PIN = { lat: -27.7667993, lng: 153.2613798 };

// Browser key for Google's Locator Plus, from Mitchell's Quick Builder export (14 Oct 2026). It is a public
// browser key, restricted to mrgmarketing.com.au in Google Cloud. A Netlify NEXT_PUBLIC_GOOGLE_MAPS_KEY
// overrides it; an empty string falls back to the keyless Maps embed.
const MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || 'AIzaSyA69MaB4yYx6weT20BzUD7Lsc_WihCRK5k';
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
      actions: [{ label: 'Book a call', defaultUrl: BUSINESS_INFO.bookingUrl }],
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

/** Contact page map: Google Locator Plus when a Maps key is configured, otherwise the keyless embed. */
export default function LocationMap() {
  return (
    <section id="location" className="s-sec s-sand" aria-labelledby="location-heading">
      <div className="s-wrap s-split" style={{ alignItems: 'center' }}>
        <div className="s-stack">
          <p data-rv="left" className="s-kicker">Where I am</p>
          <h2 id="location-heading" data-rv="up" className="s-h2">Ormeau, <span className="s-accent">northern Gold Coast.</span></h2>
          <p data-rv="up" data-d=".1" className="s-lead">
            Based in Ormeau, between the Gold Coast and Brisbane. Most calls happen online, and if you&apos;re nearby I&apos;m happy to come to you.
          </p>
          <div data-rv="up" data-d=".15" className="s-address">
            <span>{BUSINESS_INFO.address.full}</span>
            <a href={`tel:${BUSINESS_INFO.phoneFormatted}`}>{BUSINESS_INFO.phone}</a>
            <a href={BUSINESS_INFO.bookingUrl}>Book a 30-minute call</a>
            <a href={mapsSearchUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
          </div>
        </div>
        <div data-rv="up" className="s-framed" style={{ height: 440 }}>
          {MAPS_KEY ? (
            <LocatorPlus />
          ) : (
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ height: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MRG Marketing on Google Maps, 9 Laverton St, Ormeau"
            />
          )}
        </div>
      </div>
    </section>
  );
}
