import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/business-info';
import BestTradiesContent from './BestTradiesContent';

const PATH = '/best-seo-agency-for-tradies-in-australia';
const TITLE = 'Best SEO Agency For Tradies in Australia';
const DESCRIPTION = "MRG Marketing has been called the Best SEO Agency For Tradies in Australia. Here's the proof.";
const IMAGE = `${PATH}.jpg`;

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
    images: [{ url: IMAGE, width: 1536, height: 1024, alt: TITLE }],
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
    author: { '@id': `${BUSINESS_INFO.url}/#mitchell-giles` },
    publisher: { '@id': `${BUSINESS_INFO.url}/#business` },
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

export default function BestSeoAgencyForTradiesPage() {
  const schemas = buildPageJsonLd();
  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <BestTradiesContent />
    </>
  );
}
