import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/business-info';
import OrmeauContent, { faqItems } from './OrmeauContent';

const PATH = '/areas/ormeau';

// The layout's title template appends " | MRG Marketing".
export const metadata: Metadata = {
  title: 'Local SEO & Google Business Profile in Ormeau | Internet Marketing Service for Ormeau Businesses',
  description:
    'Local SEO, Google Business Profile optimisation and AI search for Ormeau businesses from an internet marketing service based at 9 Laverton St. Top 3 on Google Maps for the Yatala to Coomera corridor. Book a 30-minute call.',
  openGraph: {
    title: 'Marketing in Ormeau | MRG Marketing',
    description:
      'Local SEO, Google Business Profile optimisation and AI search for Ormeau businesses, from an internet marketing service that is based here.',
    type: 'website',
    url: `${BUSINESS_INFO.url}${PATH}/`,
    locale: 'en_AU',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing in Ormeau | MRG Marketing',
    description:
      'Local SEO, Google Business Profile optimisation and AI search for Ormeau businesses, from an internet marketing service that is based here.',
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
      'Local SEO, Google Business Profile optimisation and AI search for businesses in Ormeau and the northern Gold Coast.',
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

  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'SEO Ormeau: How to Get Into the Google Maps Top 3',
    description:
      'Mitchell Giles from MRG Marketing explains what gets Ormeau and northern Gold Coast businesses into the Google Maps top 3: Google Business Profile setup, suburb pages, directory listings and rank tracking.',
    thumbnailUrl: 'https://i.ytimg.com/vi/JS08Od_TN-g/hqdefault.jpg',
    uploadDate: '2026-10-20T08:30:00+10:00',
    duration: 'PT54S',
    embedUrl: 'https://www.youtube.com/embed/JS08Od_TN-g',
    contentUrl: 'https://www.youtube.com/shorts/JS08Od_TN-g',
    inLanguage: 'en-AU',
    author: { '@id': `${BUSINESS_INFO.url}/#mitchell-giles` },
    publisher: { '@id': `${BUSINESS_INFO.url}/#business` },
  };

  return [faqSchema, serviceSchema, breadcrumbSchema, videoSchema];
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
