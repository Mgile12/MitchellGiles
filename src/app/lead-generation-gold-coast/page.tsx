import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/business-info';
import LeadGenContent from './LeadGenContent';

export const metadata: Metadata = {
  title: 'Lead Generation Gold Coast | Paid Advertising & Systems That Convert',
  description:
    'Professional lead generation services for Gold Coast businesses. Google Ads, Meta Ads, SEO, email nurturing and conversion tracking that builds a predictable pipeline. Based in Ormeau QLD.',
  openGraph: {
    title: 'Lead Generation Gold Coast | MRG Marketing',
    description:
      'Lead generation systems for Gold Coast businesses. Paid ads, SEO, email nurturing and conversion tracking that delivers qualified leads on repeat.',
    type: 'website',
    url: `${BUSINESS_INFO.url}/lead-generation-gold-coast`,
    locale: 'en_AU',
    images: [{ url: '/image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lead Generation Gold Coast | MRG Marketing',
    description:
      'Lead generation systems for Gold Coast businesses. Paid ads, SEO, email nurturing and conversion tracking that delivers qualified leads on repeat.',
    images: ['/image.png'],
  },
  alternates: {
    canonical: `${BUSINESS_INFO.url}/lead-generation-gold-coast`,
  },
};

const faqItems = [
  {
    question: 'How quickly will I start getting leads?',
    answer:
      'Paid advertising can generate leads within the first week. SEO-driven leads take 3 to 6 months to build but compound over time. Most clients see a blended pipeline producing consistently within 60 to 90 days.',
  },
  {
    question: 'How much should I budget for lead generation?',
    answer:
      'It depends on your industry, target cost per lead, and growth goals. We recommend starting with a budget that allows meaningful data collection, then scaling what works. We will advise on realistic numbers during your strategy call.',
  },
  {
    question: 'What is the difference between lead generation and marketing?',
    answer:
      'Marketing builds awareness. Lead generation converts that awareness into measurable enquiries you can follow up and close. We focus on the full system -- from generating attention to capturing, nurturing, and converting leads.',
  },
  {
    question: 'Do you work with specific industries?',
    answer:
      'We work with trades, professional services, real estate, health and wellness, and event-based businesses. The lead generation framework adapts to each industry but the principles of targeting, capture, and nurture remain consistent.',
  },
  {
    question: 'How do you track lead quality?',
    answer:
      'We implement full conversion tracking across all channels -- call tracking, form submissions, CRM integration, and revenue attribution. You know exactly which channels and campaigns drive real business, not just clicks.',
  },
  {
    question: 'Can you fix my existing lead generation if it is underperforming?',
    answer:
      'Yes. We start with an audit of your current setup -- ad accounts, landing pages, tracking, and follow-up process. Most businesses have fixable gaps that are costing them leads right now.',
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
    serviceType: 'Lead Generation Services',
    name: 'Lead Generation Gold Coast',
    description:
      'Professional lead generation including Google Ads, Meta Ads, SEO, email nurturing and conversion tracking for Gold Coast businesses.',
    provider: { '@id': `${BUSINESS_INFO.url}/#business` },
    areaServed: {
      '@type': 'City',
      name: 'Gold Coast',
      containedInPlace: { '@type': 'State', name: 'Queensland' },
    },
    url: `${BUSINESS_INFO.url}/lead-generation-gold-coast`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS_INFO.url },
      { '@type': 'ListItem', position: 2, name: 'Lead Generation Gold Coast', item: `${BUSINESS_INFO.url}/lead-generation-gold-coast` },
    ],
  };

  return [faqSchema, serviceSchema, breadcrumbSchema];
}

export default function LeadGenerationGoldCoastPage() {
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
      <LeadGenContent faqItems={faqItems} />
    </>
  );
}
