import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/business-info';
import MetaAdsContent from './MetaAdsContent';

export const metadata: Metadata = {
  title: 'Meta Ads Agency Gold Coast & Brisbane | Strategic Facebook Advertising',
  description:
    'Expert Meta Ads Agency for Gold Coast & Brisbane businesses. Data-driven Facebook & Instagram ads with advanced optimisation frameworks including Andromeda, GEM and Lattice.',
  openGraph: {
    title: 'Meta Ads Agency Gold Coast & Brisbane | MRG Marketing',
    description:
      'Strategic Facebook & Instagram advertising for Gold Coast and Brisbane businesses. Signal-driven Meta Ads management with technical depth most agencies ignore.',
    type: 'website',
    url: `${BUSINESS_INFO.url}/meta-ads-agency`,
    locale: 'en_AU',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meta Ads Agency Gold Coast & Brisbane | MRG Marketing',
    description:
      'Strategic Facebook & Instagram advertising for Gold Coast and Brisbane businesses. Signal-driven Meta Ads management with technical depth most agencies ignore.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: `${BUSINESS_INFO.url}/meta-ads-agency`,
  },
};

function buildPageJsonLd() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Meta Ads Management',
    name: 'Meta Ads Agency Gold Coast & Brisbane',
    description:
      'Data-driven Facebook and Instagram advertising management for Gold Coast and Brisbane businesses. Strategic Meta Ads with signal integrity, creative systems and technical optimisation.',
    provider: { '@id': `${BUSINESS_INFO.url}/#business` },
    areaServed: [
      { '@type': 'City', name: 'Gold Coast', containedInPlace: { '@type': 'State', name: 'Queensland' } },
      { '@type': 'City', name: 'Brisbane', containedInPlace: { '@type': 'State', name: 'Queensland' } },
    ],
    url: `${BUSINESS_INFO.url}/meta-ads-agency`,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Andromeda in Meta Ads?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Andromeda is Meta\'s advanced ad ranking system that evaluates expected action rate, ad quality, bid amount and user behaviour likelihood every time your ad enters an auction. Strong creative and clean conversion data improves how Andromeda ranks and delivers your campaigns.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Conversion API and why does it matter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Conversion API (CAPI) improves signal reliability by sending server-side conversion data directly to Meta. Post-iOS tracking changes made browser-based pixels less reliable, so CAPI ensures Meta\'s algorithm receives accurate conversion signals for better optimisation.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long before Meta ads become profitable?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The testing phase typically takes 4–8 weeks. Scaling to profitability depends on signal strength, offer quality and creative performance. Businesses with strong offers and clean tracking data tend to see results faster.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Meta advertising still worth investing in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — if structured correctly with strong creative and accurate signal tracking. Meta\'s machine learning is extremely powerful when fed quality data. The issue for most businesses is not the platform — it\'s poor signal integrity and weak creative.',
        },
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS_INFO.url },
      { '@type': 'ListItem', position: 2, name: 'Meta Ads Agency', item: `${BUSINESS_INFO.url}/meta-ads-agency` },
    ],
  };

  return [serviceSchema, faqSchema, breadcrumbSchema];
}

export default function MetaAdsAgencyPage() {
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
      <MetaAdsContent />
    </>
  );
}
