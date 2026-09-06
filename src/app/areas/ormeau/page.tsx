import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/business-info';
import OrmeauContent, { faqItems } from './OrmeauContent';

const PATH = '/areas/ormeau';

// The layout's title template appends " | MRG Marketing".
export const metadata: Metadata = {
  title: 'Marketing in Ormeau | Local SEO, Google Business Profile, Meta Ads & Email for Ormeau Businesses',
  description:
    'Marketing for Ormeau businesses from a consultant based at 9 Laverton St. Google Business Profile, local SEO, Meta Ads and email for the Yatala to Coomera corridor. Book a 30-minute call.',
  openGraph: {
    title: 'Marketing in Ormeau | MRG Marketing',
    description:
      'Marketing for Ormeau businesses from a consultant who is based here. Google Business Profile, local SEO, Meta Ads and email.',
    type: 'website',
    url: `${BUSINESS_INFO.url}${PATH}/`,
    locale: 'en_AU',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing in Ormeau | MRG Marketing',
    description:
      'Marketing for Ormeau businesses from a consultant who is based here. Google Business Profile, local SEO, Meta Ads and email.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: `${BUSINESS_INFO.url}${PATH}/`,
  },
};

function buildPageJsonLd() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Local marketing',
    name: 'Marketing in Ormeau',
    description:
      'Google Business Profile, local SEO, Meta Ads, email marketing, AI automations and event ticket campaigns for businesses in Ormeau and the northern Gold Coast.',
    provider: { '@id': `${BUSINESS_INFO.url}/#business` },
    areaServed: {
      '@type': 'City',
      name: 'Ormeau',
      containedInPlace: { '@type': 'State', name: 'Queensland' },
    },
    url: `${BUSINESS_INFO.url}${PATH}/`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS_INFO.url },
      { '@type': 'ListItem', position: 2, name: 'Areas We Serve', item: `${BUSINESS_INFO.url}/areas/` },
      { '@type': 'ListItem', position: 3, name: 'Ormeau', item: `${BUSINESS_INFO.url}${PATH}/` },
    ],
  };

  return [faqSchema, serviceSchema, breadcrumbSchema];
}

export default function OrmeauPage() {
  const schemas = buildPageJsonLd();

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <OrmeauContent />
    </>
  );
}
