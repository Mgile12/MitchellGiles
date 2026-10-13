import { ArrowRight, PhoneCall } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/business-info';
import AnimateOnScroll from './AnimateOnScroll';
import Eyebrow from './Eyebrow';
import RevealText from './RevealText';

// Three offers, worded identically to the Google Business Profile Offer posts (both run to 31 Dec 2026).
// After 31 Dec, change the dates or the offers here AND on the profile, together.
export const OFFERS = [
  {
    id: 'free-google-maps-ranking-check',
    title: 'Free Google Maps Ranking Check',
    body:
      'See exactly where your business shows up on Google Maps, street by street, across Ormeau, Pimpama, Coomera and the northern Gold Coast. Free 15 minute map check plus a written action list. Valid until 31 December 2026.',
    terms:
      'Offer valid until 31 December 2026. Available to businesses based in or servicing Ormeau and the northern Gold Coast. One free map check per business. Includes a 15 minute call and a written action list. No obligation to purchase. MRG Marketing may withdraw or change this offer at any time.',
    cta: { label: 'Call Now', href: `tel:${BUSINESS_INFO.phoneFormatted}`, kind: 'call' as const },
    image: {
      src: '/images/offers/free-google-maps-ranking-check-ormeau-mrg-marketing.jpg',
      alt: 'Ormeau tradie checking his Google Maps ranking on a smartphone in his ute',
      title: 'Free Google Maps Ranking Check Ormeau',
    },
    validThrough: '2026-12-31',
  },
  {
    id: 'half-price-first-month-google-business-profile-optimisation',
    title: '50% Off Your First Month of Google Business Profile Optimisation',
    body:
      'New clients get their first month of Google Business Profile optimisation at half price. We handle your categories, services, photos, posts and reviews. Offer ends 31 December 2026.',
    terms:
      'Offer valid for new clients who sign up by 31 December 2026. 50% discount applies to the first month of the Google Business Profile optimisation service only. Ongoing months are charged at the standard monthly rate. Minimum term 3 months. One offer per business. Cannot be combined with any other offer. MRG Marketing may withdraw or change this offer at any time.',
    cta: { label: 'Call Now', href: `tel:${BUSINESS_INFO.phoneFormatted}`, kind: 'call' as const },
    image: {
      src: '/images/offers/google-business-profile-optimisation-offer-pimpama-mrg-marketing.jpg',
      alt: 'Laptop showing a five star Google Business Profile with a gift tag for the half price first month offer',
      title: 'Google Business Profile Optimisation Offer Gold Coast',
    },
    validThrough: '2026-12-31',
  },
  {
    id: 'free-ai-search-geo-visibility-audit',
    title: 'Free AI Search (GEO) Visibility Audit',
    body:
      'Find out if ChatGPT, Gemini and Google AI recommend your business when locals ask who to call. Free AI search audit for Ormeau and Gold Coast businesses. Valid until 31 December 2026.',
    terms:
      'Offer valid until 31 December 2026. Available to businesses in Ormeau and the Gold Coast. One free audit per business, delivered as a short written summary. Bookings subject to availability. No obligation to purchase. MRG Marketing may withdraw or change this offer at any time.',
    cta: { label: 'Call Now', href: `tel:${BUSINESS_INFO.phoneFormatted}`, kind: 'call' as const },
    image: {
      src: '/images/offers/free-ai-search-geo-audit-coomera-mrg-marketing.jpg',
      alt: 'Plumber checking whether AI search recommends his business on a smartphone in a Coomera kitchen',
      title: 'Free AI Search GEO Audit Gold Coast',
    },
    validThrough: '2026-12-31',
  },
];

export default function Offers() {
  return (
    <section id="offers" className="relative bg-navy-950 overflow-x-clip scroll-mt-24" aria-labelledby="offers-heading">
      <div className="grid-ground absolute inset-0" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-10 sm:mb-14">
          <Eyebrow className="mb-4">Until 31 December 2026</Eyebrow>
          <h2 id="offers-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink font-serif">
            <RevealText text="Special Offers for Ormeau & Northern Gold Coast Businesses" />
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll variant="group" className="grid gap-5 lg:grid-cols-3">
          {OFFERS.map((o, i) => {
            const Icon = PhoneCall;
            const button = (
              <>
                {o.cta.label} <Icon className="w-4 h-4" />
              </>
            );
            const cls = 'gold-flat-btn inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold w-full sm:w-auto';
            return (
              <article
                key={o.id}
                id={o.id}
                className={`rv-up ${i === 1 ? 'rv-delay-1' : i === 2 ? 'rv-delay-2' : ''} flex flex-col rounded-2xl border border-ink/10 bg-white/55 overflow-hidden scroll-mt-28`}
              >
                <div className="aspect-[4/3] overflow-hidden border-b border-ink/10 bg-white">
                  <img src={o.image.src} alt={o.image.alt} title={o.image.title} width={1200} height={900} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-ink font-serif leading-snug">{o.title}</h3>
                  <p className="mt-3 text-base text-ink/80 font-sans leading-relaxed">{o.body}</p>
                  <div className="mt-6">
                    <a href={o.cta.href} className={cls}>
                      {button}
                    </a>
                  </div>
                  <details className="mt-5 group">
                    <summary className="cursor-pointer text-xs font-semibold tracking-[0.18em] uppercase text-ink/55 font-sans inline-flex items-center gap-1.5 list-none [&::-webkit-details-marker]:hidden">
                      Terms and conditions <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-open:rotate-90" />
                    </summary>
                    <p className="mt-3 text-xs text-ink/60 font-sans leading-relaxed">{o.terms}</p>
                  </details>
                </div>
              </article>
            );
          })}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
