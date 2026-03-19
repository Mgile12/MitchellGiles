import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/business-info';
import GoogleAdsContent from './GoogleAdsContent';

export const metadata: Metadata = {
  title: 'Google Ads Gold Coast | Paid Search That Drives Qualified Leads',
  description:
    'Professional Google Ads management for Gold Coast businesses. Search campaigns, remarketing, performance tracking and budget optimisation that delivers measurable ROI. Based in Southport QLD.',
  openGraph: {
    title: 'Google Ads Gold Coast | MRG Marketing',
    description:
      'Strategic Google Ads management for Gold Coast businesses. Search campaigns, remarketing and budget optimisation built for real ROI.',
    type: 'website',
    url: `${BUSINESS_INFO.url}/google-ads-gold-coast`,
    locale: 'en_AU',
    images: [{ url: '/image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Ads Gold Coast | MRG Marketing',
    description:
      'Strategic Google Ads management for Gold Coast businesses. Search campaigns, remarketing and budget optimisation built for real ROI.',
    images: ['/image.png'],
  },
  alternates: {
    canonical: `${BUSINESS_INFO.url}/google-ads-gold-coast`,
  },
};

function buildPageJsonLd() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Google Ads Management',
    name: 'Google Ads Gold Coast',
    description:
      'Professional Google Ads campaign management including search, remarketing, performance tracking and budget optimisation for Gold Coast businesses.',
    provider: { '@id': `${BUSINESS_INFO.url}/#business` },
    areaServed: {
      '@type': 'City',
      name: 'Gold Coast',
      containedInPlace: { '@type': 'State', name: 'Queensland' },
    },
    url: `${BUSINESS_INFO.url}/google-ads-gold-coast`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS_INFO.url },
      { '@type': 'ListItem', position: 2, name: 'Google Ads Gold Coast', item: `${BUSINESS_INFO.url}/google-ads-gold-coast` },
    ],
  };

  return [serviceSchema, breadcrumbSchema];
}

export default function GoogleAdsGoldCoastPage() {
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
      <GoogleAdsContent />
    </>
  );
}
