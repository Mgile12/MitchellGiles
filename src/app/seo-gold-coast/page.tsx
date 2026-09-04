import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/business-info';
import SEOContent from './SEOContent';

export const metadata: Metadata = {
  title: 'SEO Gold Coast | Strategic Search Engine Optimisation for Local Business Growth',
  description:
    'Professional SEO services for Gold Coast businesses. Technical audits, on-page optimisation, local SEO, content strategy and link building that delivers sustainable organic growth. Based in Ormeau QLD.',
  openGraph: {
    title: 'SEO Gold Coast | MRG Marketing',
    description:
      'Strategic SEO services for Gold Coast businesses. Technical audits, local SEO, content strategy and ongoing optimisation that drives sustainable organic traffic.',
    type: 'website',
    url: `${BUSINESS_INFO.url}/seo-gold-coast`,
    locale: 'en_AU',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Gold Coast | MRG Marketing',
    description:
      'Strategic SEO services for Gold Coast businesses. Technical audits, local SEO, content strategy and ongoing optimisation that drives sustainable organic traffic.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: `${BUSINESS_INFO.url}/seo-gold-coast`,
  },
};

const faqItems = [
  {
    question: 'How long does SEO take to work on the Gold Coast?',
    answer:
      'Most businesses start seeing measurable improvements in rankings within 3 to 6 months. The timeline depends on your current site health, competition level, and the keywords you are targeting. Local service-based keywords tend to move faster than broad commercial terms.',
  },
  {
    question: 'How much does SEO cost for a Gold Coast business?',
    answer:
      'SEO investment varies based on scope. A focused local campaign costs less than a full technical overhaul with content strategy. We quote based on your specific situation after an initial audit, not a generic price list.',
  },
  {
    question: 'What is the difference between SEO and Google Ads?',
    answer:
      'Google Ads puts you at the top of search results immediately but you pay for every click. SEO builds organic visibility that compounds over time without ongoing click costs. The best strategies use both together -- ads for immediate leads, SEO for long-term growth.',
  },
  {
    question: 'Do I need SEO if I already run Google Ads?',
    answer:
      'Yes. Ads stop the moment you stop paying. SEO builds an asset that continues generating traffic and leads. Running both means you capture more of the search results page and reduce your overall cost per lead over time.',
  },
  {
    question: 'Can you guarantee first page rankings?',
    answer:
      'No legitimate SEO professional can guarantee specific rankings. Google controls their algorithm and it changes constantly. What we guarantee is a transparent, data-driven process that consistently improves your visibility, traffic, and leads.',
  },
  {
    question: 'What does an SEO audit include?',
    answer:
      'A comprehensive audit covers technical health (site speed, mobile performance, crawl errors), on-page factors (content quality, keyword targeting, meta data), local SEO (Google Business Profile, citations, reviews), and backlink profile analysis. You get a prioritised action plan, not just a list of issues.',
  },
  {
    question: 'How do I know if my SEO is working?',
    answer:
      'We track keyword rankings, organic traffic, phone calls, form submissions, and revenue attributed to organic search. You get monthly reporting that shows exactly what is improving and what is driving real business results.',
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
    serviceType: 'SEO Services',
    name: 'SEO Gold Coast',
    description:
      'Professional search engine optimisation services for Gold Coast businesses including technical SEO, on-page optimisation, local SEO, content strategy and link building.',
    provider: { '@id': `${BUSINESS_INFO.url}/#business` },
    areaServed: {
      '@type': 'City',
      name: 'Gold Coast',
      containedInPlace: {
        '@type': 'State',
        name: 'Queensland',
      },
    },
    url: `${BUSINESS_INFO.url}/seo-gold-coast`,
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
        name: 'SEO Gold Coast',
        item: `${BUSINESS_INFO.url}/seo-gold-coast`,
      },
    ],
  };

  return [faqSchema, serviceSchema, breadcrumbSchema];
}

export default function SEOGoldCoastPage() {
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
      <SEOContent faqItems={faqItems} />
    </>
  );
}
