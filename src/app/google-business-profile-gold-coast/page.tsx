import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/business-info';
import GBPContent from './GBPContent';

const PATH = '/google-business-profile-gold-coast';

export const metadata: Metadata = {
  title: 'Google Business Profile Gold Coast | Top 3 on Google Maps',
  description:
    'Google Business Profile management for Gold Coast businesses. Top 3 on Google Maps within 90 days, measured in calls and website clicks, with live ranking heatmaps from real clients. Based in Ormeau QLD.',
  openGraph: {
    title: 'Google Business Profile Gold Coast | MRG Marketing',
    description:
      'Top 3 on Google Maps within 90 days, measured in calls and website clicks. Live heatmaps from real Gold Coast clients.',
    type: 'website',
    url: `${BUSINESS_INFO.url}${PATH}/`,
    locale: 'en_AU',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Business Profile Gold Coast | MRG Marketing',
    description:
      'Top 3 on Google Maps within 90 days, measured in calls and website clicks. Live heatmaps from real Gold Coast clients.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: `${BUSINESS_INFO.url}${PATH}/`,
  },
};

const faqItems = [
  {
    question: 'How long does it take to get into the top 3?',
    answer:
      "Some profiles move in days. The heatmaps on this page show two that did. I plan for 90 days, because reviews, photos and Google's own reindexing take time, and I would rather be early than make a promise I can't keep.",
  },
  {
    question: 'Do you guarantee a top 3 ranking?',
    answer:
      "No. Nobody can guarantee a Google ranking, and anyone who does is guessing with your money. What I can show you is the track record on this page, and I'll tell you on the call if your situation isn't a fit.",
  },
  {
    question: 'What does it cost?',
    answer:
      "It depends on your industry, your area and how far behind you are. We cover it on the call, once I've looked at your profile and the three businesses above you.",
  },
  {
    question: 'Why only one business per industry, per area?',
    answer:
      "Because I can't rank two competitors in the same top three. When you're in, that spot is yours for as long as we're working together.",
  },
  {
    question: 'What do I need to do?',
    answer:
      'Reply to reviews when I ask, send photos when I ask, and take the calls. The rest is mine.',
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

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Google Business Profile Management',
    name: 'Google Business Profile Gold Coast',
    description:
      'Google Business Profile optimisation and management for Gold Coast businesses, targeting the top 3 Google Maps positions within 90 days.',
    provider: { '@id': `${BUSINESS_INFO.url}/#business` },
    areaServed: {
      '@type': 'City',
      name: 'Gold Coast',
      containedInPlace: { '@type': 'State', name: 'Queensland' },
    },
    url: `${BUSINESS_INFO.url}${PATH}/`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS_INFO.url },
      { '@type': 'ListItem', position: 2, name: 'Google Business Profile Gold Coast', item: `${BUSINESS_INFO.url}${PATH}` },
    ],
  };

  return [faqSchema, serviceSchema, breadcrumbSchema];
}

export default function GoogleBusinessProfilePage() {
  const schemas = buildPageJsonLd();

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <GBPContent faqItems={faqItems} />
    </>
  );
}
