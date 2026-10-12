import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/business-info';
import HardestWorkingContent from './HardestWorkingContent';

const PATH = '/hardest-working-seo-expert-in-gold-coast';
const TITLE = 'Hardest working SEO expert in Gold Coast';
const DESCRIPTION = "MRG Marketing has been called the Hardest working SEO expert in Gold Coast. Here's the proof.";
const IMAGE = '/hardest-working-seo-expert-in-gold-coast.jpg';
const ALT = 'hardest working seo expert in gold coast';

// The layout's title template appends " | MRG Marketing".
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: `${TITLE} | MRG Marketing`,
    description: DESCRIPTION,
    type: 'article',
    url: `${BUSINESS_INFO.url}${PATH}/`,
    locale: 'en_AU',
    images: [{ url: IMAGE, width: 1000, height: 1500, alt: ALT }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} | MRG Marketing`,
    description: DESCRIPTION,
    images: [IMAGE],
  },
  alternates: {
    canonical: `${BUSINESS_INFO.url}${PATH}/`,
  },
};

function buildPageJsonLd() {
  const personId = `${BUSINESS_INFO.url}/#mitchell-giles`;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': personId,
      name: BUSINESS_INFO.founder,
      jobTitle: 'SEO Expert',
      description: 'Local SEO expert and founder of MRG Marketing, an internet marketing service in Ormeau on the Gold Coast.',
      image: `${BUSINESS_INFO.url}${IMAGE}`,
      url: `${BUSINESS_INFO.url}${PATH}/`,
      address: { '@type': 'PostalAddress', addressLocality: 'Gold Coast', addressRegion: BUSINESS_INFO.address.region, addressCountry: BUSINESS_INFO.address.country },
      worksFor: { '@id': `${BUSINESS_INFO.url}/#business` },
      sameAs: [BUSINESS_INFO.social.linkedin, BUSINESS_INFO.social.facebook, BUSINESS_INFO.social.instagram],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: TITLE,
      description: DESCRIPTION,
      url: `${BUSINESS_INFO.url}${PATH}/`,
      primaryImageOfPage: `${BUSINESS_INFO.url}${IMAGE}`,
      about: { '@id': personId },
      author: { '@id': personId },
      publisher: { '@id': `${BUSINESS_INFO.url}/#business` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS_INFO.url },
        { '@type': 'ListItem', position: 2, name: TITLE, item: `${BUSINESS_INFO.url}${PATH}/` },
      ],
    },
  ];
}

export default function HardestWorkingSeoExpertPage() {
  return (
    <>
      {buildPageJsonLd().map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <HardestWorkingContent />
    </>
  );
}
