import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/business-info';
import ServicesContent from './ServicesContent';

export const metadata: Metadata = {
  title: 'Services Gold Coast | Marketing Services for Local Business Growth',
  description:
    'Marketing services for Gold Coast businesses: Google Business Profile, local SEO, Meta Ads, email marketing, AI automations and event tickets. One consultant, based in Ormeau QLD.',
  openGraph: {
    title: 'Services Gold Coast | MRG Marketing',
    description:
      'Google Business Profile, local SEO, Meta Ads, email marketing, AI automations and event tickets for Gold Coast businesses.',
    type: 'website',
    url: `${BUSINESS_INFO.url}/services/`,
    locale: 'en_AU',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services Gold Coast | MRG Marketing',
    description:
      'Google Business Profile, local SEO, Meta Ads, email marketing, AI automations and event tickets for Gold Coast businesses.',
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

  return [breadcrumbSchema];
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
