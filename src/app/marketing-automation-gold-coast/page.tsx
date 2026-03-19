import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/business-info';
import AutomationContent from './AutomationContent';

export const metadata: Metadata = {
  title: 'Marketing Automation Gold Coast | Build Systems That Scale',
  description:
    'Marketing automation services for Gold Coast businesses. CRM integration, lead scoring, nurture sequences and conversion tracking that scales without adding headcount. Based in Southport QLD.',
  openGraph: {
    title: 'Marketing Automation Gold Coast | MRG Marketing',
    description:
      'Marketing automation for Gold Coast businesses. CRM integration, lead scoring, nurture sequences and conversion tracking that runs while you sleep.',
    type: 'website',
    url: `${BUSINESS_INFO.url}/marketing-automation-gold-coast`,
    locale: 'en_AU',
    images: [{ url: '/image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing Automation Gold Coast | MRG Marketing',
    description:
      'Marketing automation for Gold Coast businesses. CRM integration, lead scoring, nurture sequences and conversion tracking that runs while you sleep.',
    images: ['/image.png'],
  },
  alternates: {
    canonical: `${BUSINESS_INFO.url}/marketing-automation-gold-coast`,
  },
};

function buildPageJsonLd() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Marketing Automation Services',
    name: 'Marketing Automation Gold Coast',
    description:
      'Marketing automation including CRM integration, lead scoring, nurture sequences and conversion tracking for Gold Coast businesses.',
    provider: { '@id': `${BUSINESS_INFO.url}/#business` },
    areaServed: {
      '@type': 'City',
      name: 'Gold Coast',
      containedInPlace: { '@type': 'State', name: 'Queensland' },
    },
    url: `${BUSINESS_INFO.url}/marketing-automation-gold-coast`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS_INFO.url },
      { '@type': 'ListItem', position: 2, name: 'Marketing Automation Gold Coast', item: `${BUSINESS_INFO.url}/marketing-automation-gold-coast` },
    ],
  };

  return [serviceSchema, breadcrumbSchema];
}

export default function MarketingAutomationGoldCoastPage() {
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
      <AutomationContent />
    </>
  );
}
