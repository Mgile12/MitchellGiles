import { BUSINESS_INFO } from '@/lib/business-info';
import Link from 'next/link';
import { SectionHead } from '@/components/site/Blocks';

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
    cta: { label: 'Book Now', href: 'https://calendar.notion.com/meet/mitchellgiles134/tovi31rm', kind: 'book' as const },
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
    <section id="offers" className="s-sec s-sand" aria-labelledby="offers-heading">
      <div className="s-wrap s-stack-lg">
        <SectionHead kicker="Until 31 December 2026" id="offers-heading" title="Special Offers for Ormeau & Northern Gold Coast Businesses" />
        <div className="s-offers">
          {OFFERS.map((o, i) => (
            <article key={o.id} id={o.id} data-rv="up" data-d={String(i * 0.1)} className="s-offer">
              <img src={o.image.src} alt={o.image.alt} title={o.image.title} width={1200} height={900} loading="lazy" decoding="async" />
              <div className="s-offer-b">
                <h3>{o.title}</h3>
                <p>{o.body}</p>
                {o.cta.kind === 'book' ? (
                  <Link href={o.cta.href} className="s-btn">{o.cta.label}</Link>
                ) : (
                  <a href={o.cta.href} className="s-btn">{o.cta.label}</a>
                )}
                <details>
                  <summary>Terms and conditions +</summary>
                  <p>{o.terms}</p>
                </details>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
