import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/business-info';
import BestAgencyContent from './BestAgencyContent';

const PATH = '/best-marketing-agency-in-gold-coast';
const TITLE = 'Best Marketing Agency in Gold Coast';
const DESCRIPTION = "MRG Marketing has been called the best marketing agency in Gold Coast. Here's the proof.";
const IMAGE = '/best-marketing-agency-in-gold-coast.jpg';

// The layout's title template appends " | MRG Marketing".
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: `${TITLE} | MRG Marketing`,
    description: DESCRIPTION,
    type: 'article',
    url: `${BUSINESS_INFO.url}${PATH}/`,
    locale: 'en_AU',
    images: [{ url: IMAGE, width: 1200, height: 1200, alt: 'best marketing agency in gold coast' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} | MRG Marketing`,
    description: DESCRIPTION,
    images: [IMAGE],
  },
  alternates: {
    canonical: `${BUSINESS_INFO.url}${PATH}/`,
  },
};

function buildPageJsonLd() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: TITLE,
    description: DESCRIPTION,
    url: `${BUSINESS_INFO.url}${PATH}/`,
    primaryImageOfPage: `${BUSINESS_INFO.url}${IMAGE}`,
    about: { '@id': `${BUSINESS_INFO.url}/#business` },
    author: { '@type': 'Person', name: BUSINESS_INFO.founder },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS_INFO.url },
      { '@type': 'ListItem', position: 2, name: TITLE, item: `${BUSINESS_INFO.url}${PATH}/` },
    ],
  };

  return [pageSchema, breadcrumbSchema];
}

export default function BestMarketingAgencyPage() {
  const schemas = buildPageJsonLd();
  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <BestAgencyContent />
    </>
  );
}
