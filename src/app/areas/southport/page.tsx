import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/business-info';
import SouthportContent from './SouthportContent';

export const metadata: Metadata = {
  title: 'Marketing Consultant Southport | Local Marketing Services Southport QLD',
  description:
    'Southport marketing consultant specialising in SEO, Google Ads, email marketing, lead generation and automation. Based at 82 Marine Parade, Southport QLD 4215. Book a strategy session.',
  openGraph: {
    title: 'Marketing Consultant Southport | Mitchell Giles Marketing',
    description:
      'Local marketing consultant in Southport QLD. SEO, Google Ads, email marketing, lead generation and automation for Southport businesses.',
    type: 'website',
    url: `${BUSINESS_INFO.url}/areas/southport`,
    locale: 'en_AU',
    images: [{ url: '/image.png' }],
  },
  alternates: {
    canonical: `${BUSINESS_INFO.url}/areas/southport`,
  },
};

const faqItems = [
  {
    question: 'Where is Mitchell Giles based in Southport?',
    answer: '82 Marine Parade, Southport QLD 4215. Walking distance from Broadwater Parklands, Australia Fair Shopping Centre, and Southport CBD.',
  },
  {
    question: 'Do you only work with Southport businesses?',
    answer: 'No. While we are based in Southport, we work with businesses across the entire Gold Coast, Brisbane, and South East Queensland. Southport is our home base.',
  },
  {
    question: 'What marketing services do you offer in Southport?',
    answer: 'SEO, Google Ads, email marketing, lead generation, digital marketing strategy, and marketing automation. All designed for local Gold Coast businesses.',
  },
  {
    question: 'How is working with a local Southport consultant different?',
    answer: 'You get someone who understands the Gold Coast market, the local competition, and the seasonal patterns. No generic strategies from interstate agencies.',
  },
  {
    question: 'Can I meet in person for strategy sessions?',
    answer: 'Yes. Being based in Southport means face-to-face meetings are easy. We also work remotely with clients across SEQ.',
  },
  {
    question: 'What industries do you work with in Southport?',
    answer: 'Trades, professional services, real estate, hospitality, health and wellness, and event-based businesses. If you operate in Southport or the Gold Coast, we can help.',
  },
  {
    question: 'How do I get started?',
    answer: 'Book a free strategy call. We will review your current marketing, identify the biggest opportunities, and recommend a clear path forward.',
  },
];

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

  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: BUSINESS_INFO.name,
    url: `${BUSINESS_INFO.url}/areas/southport`,
    telephone: '0474870535',
    email: BUSINESS_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: 'Southport',
      addressRegion: 'QLD',
      postalCode: '4215',
      addressCountry: 'AU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -27.9635248,
      longitude: 153.4133307,
    },
    areaServed: {
      '@type': 'City',
      name: 'Southport QLD',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS_INFO.url },
      { '@type': 'ListItem', position: 2, name: 'Areas We Serve', item: `${BUSINESS_INFO.url}/areas` },
      { '@type': 'ListItem', position: 3, name: 'Southport', item: `${BUSINESS_INFO.url}/areas/southport` },
    ],
  };

  return [faqSchema, localSchema, breadcrumbSchema];
}

export default function SouthportPage() {
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
      <SouthportContent faqItems={faqItems} />
    </>
  );
}
