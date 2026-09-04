import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/business-info';
import DigitalMarketingContent from './DigitalMarketingContent';

export const metadata: Metadata = {
  title: 'Digital Marketing Gold Coast | Integrated Strategy for Sustainable Growth',
  description:
    'Full-service digital marketing for Gold Coast businesses. SEO, Google Ads, email marketing and automation integrated into one strategy that drives predictable growth. Based in Ormeau QLD.',
  openGraph: {
    title: 'Digital Marketing Gold Coast | MRG Marketing',
    description:
      'Integrated digital marketing strategy for Gold Coast businesses. SEO, Google Ads, email and automation working together for sustainable growth.',
    type: 'website',
    url: `${BUSINESS_INFO.url}/digital-marketing-gold-coast`,
    locale: 'en_AU',
    images: [{ url: '/image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Gold Coast | MRG Marketing',
    description:
      'Integrated digital marketing strategy for Gold Coast businesses. SEO, Google Ads, email and automation working together for sustainable growth.',
    images: ['/image.png'],
  },
  alternates: {
    canonical: `${BUSINESS_INFO.url}/digital-marketing-gold-coast`,
  },
};

function buildPageJsonLd() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Digital Marketing Services',
    name: 'Digital Marketing Gold Coast',
    description:
      'Full-service digital marketing including SEO, Google Ads, email marketing and marketing automation for Gold Coast businesses.',
    provider: { '@id': `${BUSINESS_INFO.url}/#business` },
    areaServed: {
      '@type': 'City',
      name: 'Gold Coast',
      containedInPlace: { '@type': 'State', name: 'Queensland' },
    },
    url: `${BUSINESS_INFO.url}/digital-marketing-gold-coast`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS_INFO.url },
      { '@type': 'ListItem', position: 2, name: 'Digital Marketing Gold Coast', item: `${BUSINESS_INFO.url}/digital-marketing-gold-coast` },
    ],
  };

  return [serviceSchema, breadcrumbSchema];
}

export default function DigitalMarketingGoldCoastPage() {
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
      <DigitalMarketingContent />
    </>
  );
}
