import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/business-info';
import AreasContent from './AreasContent';

export const metadata: Metadata = {
  title: 'Areas We Serve | Gold Coast & South East Queensland Marketing',
  description:
    'Mitchell Giles Marketing serves the Gold Coast, Southport, Surfers Paradise, Broadbeach, Burleigh Heads, Robina, Nerang, Brisbane and South East Queensland.',
  openGraph: {
    title: 'Areas We Serve | Mitchell Giles Marketing',
    description:
      'Marketing services across the Gold Coast, Brisbane and South East Queensland.',
    type: 'website',
    url: `${BUSINESS_INFO.url}/areas`,
    locale: 'en_AU',
    images: [{ url: '/image.png' }],
  },
  alternates: {
    canonical: `${BUSINESS_INFO.url}/areas`,
  },
};

function buildPageJsonLd() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS_INFO.url },
      { '@type': 'ListItem', position: 2, name: 'Areas We Serve', item: `${BUSINESS_INFO.url}/areas` },
    ],
  };
  return [breadcrumbSchema];
}

export default function AreasPage() {
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
      <AreasContent />
    </>
  );
}
