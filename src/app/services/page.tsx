import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/business-info';
import { OFFERS } from '@/components/Offers';
import ServicesContent from './ServicesContent';

export const metadata: Metadata = {
  title: 'Services Gold Coast | Local SEO, Google Business Profile & AI Search',
  description:
    'Three services for Gold Coast businesses: local SEO, Google Business Profile optimisation and AI search (GEO). An internet marketing service based in Ormeau QLD.',
  openGraph: {
    title: 'Services Gold Coast | MRG Marketing',
    description:
      'Local SEO, Google Business Profile optimisation and AI search for Gold Coast businesses.',
    type: 'website',
    url: `${BUSINESS_INFO.url}/services/`,
    locale: 'en_AU',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services Gold Coast | MRG Marketing',
    description:
      'Local SEO, Google Business Profile optimisation and AI search for Gold Coast businesses.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: `${BUSINESS_INFO.url}/services/`,
  },
};

function buildPageJsonLd() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS_INFO.url },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${BUSINESS_INFO.url}/services` },
    ],
  };

  // The offers and their schema moved here from the homepage (4 Nov 2026). Same three as the Google Business Profile Offer posts.
  const offerSchema = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Special Offers for Ormeau & Northern Gold Coast Businesses',
    url: `${BUSINESS_INFO.url}/services/#offers`,
    itemListElement: OFFERS.map((o) => ({
      '@type': 'Offer',
      name: o.title,
      description: o.body,
      url: `${BUSINESS_INFO.url}/services/#${o.id}`,
      validThrough: o.validThrough,
      availability: 'https://schema.org/InStock',
      areaServed: [
        { '@type': 'Place', name: 'Ormeau' },
        { '@type': 'Place', name: 'Northern Gold Coast' },
      ],
      offeredBy: { '@id': `${BUSINESS_INFO.url}/#business` },
      image: `${BUSINESS_INFO.url}${o.image.src}`,
    })),
  };

  return [breadcrumbSchema, offerSchema];
}

export default function ServicesPage() {
  const schemas = buildPageJsonLd();

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <ServicesContent />
    </>
  );
}
