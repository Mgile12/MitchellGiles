import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/business-info';
import EmailMarketingContent from './EmailMarketingContent';

export const metadata: Metadata = {
  title: 'Email Marketing Gold Coast | Strategy & Services for Local Business Growth',
  description:
    'Professional email marketing services for Gold Coast businesses. Strategy, automation, campaign management and reporting that drives measurable revenue. Based in Ormeau QLD.',
  openGraph: {
    title: 'Email Marketing Gold Coast | MRG Marketing',
    description:
      'Strategic email marketing services for Gold Coast businesses. Automation, campaigns, and reporting that turn your database into predictable monthly revenue.',
    type: 'website',
    url: `${BUSINESS_INFO.url}/email-marketing-gold-coast/`,
    locale: 'en_AU',
    images: [{ url: 'https://iili.io/qHd5dYb.md.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Email Marketing Gold Coast | MRG Marketing',
    description:
      'Strategic email marketing services for Gold Coast businesses. Automation, campaigns, and reporting that turn your database into predictable monthly revenue.',
    images: ['https://iili.io/qHd5dYb.md.jpg'],
  },
  alternates: {
    canonical: `${BUSINESS_INFO.url}/email-marketing-gold-coast/`,
  },
};

const faqItems = [
  {
    question: 'How much does email marketing cost on the Gold Coast?',
    answer:
      'It depends on scope. A basic monthly campaign service starts lower than most businesses expect. Strategy, automation, and full management sit higher. We quote based on your situation, not a generic price list.',
  },
  {
    question: 'How long before I see results from email marketing?',
    answer:
      'Most businesses see measurable engagement within the first 2 to 4 weeks. Revenue impact typically follows within 60 to 90 days, depending on your list size and offer strength.',
  },
  {
    question: 'Do I need a big email list to get started?',
    answer:
      'No. Even a list of 200 to 500 engaged contacts can generate meaningful revenue when the strategy is right. We also build list growth into every engagement.',
  },
  {
    question: 'What platforms do you work with?',
    answer:
      'We work across all major platforms including Mailchimp, Klaviyo, ActiveCampaign, HubSpot, and GoHighLevel. Platform choice depends on your business needs, not our preference.',
  },
  {
    question: 'Can you help with automation, not just campaigns?',
    answer:
      'Automation is central to what we do. Welcome sequences, abandoned cart flows, re-engagement series, and post-purchase follow-ups are all part of the service.',
  },
  {
    question: 'What industries do you work with?',
    answer:
      'We work with trades, professional services, hospitality, real estate, e-commerce, and event-based businesses across the Gold Coast and South East Queensland.',
  },
  {
    question: 'How is this different from hiring a freelancer or using templates?',
    answer:
      'Templates send emails. Strategy builds revenue. We combine local market knowledge, conversion-focused copywriting, automation architecture, and ongoing optimisation. The difference shows in your results.',
  },
];

function buildPageJsonLd() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Email Marketing Services',
    name: 'Email Marketing Gold Coast',
    description:
      'Professional email marketing strategy, automation, campaign management and performance reporting for Gold Coast businesses.',
    provider: { '@id': `${BUSINESS_INFO.url}/#business` },
    areaServed: {
      '@type': 'City',
      name: 'Gold Coast',
      containedInPlace: {
        '@type': 'State',
        name: 'Queensland',
      },
    },
    url: `${BUSINESS_INFO.url}/email-marketing-gold-coast/`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BUSINESS_INFO.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Email Marketing Gold Coast',
        item: `${BUSINESS_INFO.url}/email-marketing-gold-coast`,
      },
    ],
  };

  return [faqSchema, serviceSchema, breadcrumbSchema];
}

export default function EmailMarketingGoldCoastPage() {
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
      <EmailMarketingContent faqItems={faqItems} />
    </>
  );
}
