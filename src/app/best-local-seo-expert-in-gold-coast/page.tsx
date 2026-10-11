import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/business-info';
import BestSeoContent from './BestSeoContent';

const PATH = '/best-local-seo-expert-in-gold-coast';
const TITLE = 'Best Local SEO Expert in Gold Coast';
const DESCRIPTION = "MRG Marketing has been called the best local seo expert in Gold Coast. Here's the proof.";
const IMAGE = '/best-local-seo-expert-in-gold-coast.jpg';
const ALT = 'best local seo expert in gold coast';

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
    images: [{ url: IMAGE, width: 1200, height: 1200, alt: ALT }],
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

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': personId,
    name: BUSINESS_INFO.founder,
    jobTitle: 'SEO Expert',
    description:
      'Local SEO expert and founder of MRG Marketing, an internet marketing service in Ormeau on the Gold Coast. Local SEO, Google Business Profile optimisation and AI search for local businesses.',
    image: `${BUSINESS_INFO.url}${IMAGE}`,
    url: `${BUSINESS_INFO.url}${PATH}/`,
    telephone: BUSINESS_INFO.phoneFormatted,
    email: BUSINESS_INFO.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gold Coast',
      addressRegion: BUSINESS_INFO.address.region,
      addressCountry: BUSINESS_INFO.address.country,
    },
    worksFor: { '@id': `${BUSINESS_INFO.url}/#business` },
    knowsAbout: ['Local SEO', 'Google Business Profile optimisation', 'Google Maps ranking', 'AI search optimisation'],
    areaServed: BUSINESS_INFO.serviceArea.map((name) => ({ '@type': 'Place', name })),
    sameAs: [BUSINESS_INFO.social.linkedin, BUSINESS_INFO.social.facebook, BUSINESS_INFO.social.instagram],
  };

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: TITLE,
    description: DESCRIPTION,
    url: `${BUSINESS_INFO.url}${PATH}/`,
    primaryImageOfPage: `${BUSINESS_INFO.url}${IMAGE}`,
    about: { '@id': personId },
    author: { '@id': personId },
    publisher: { '@id': `${BUSINESS_INFO.url}/#business` },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Local SEO',
    name: 'Local SEO Gold Coast',
    description:
      'Local SEO for Gold Coast businesses: a page for every service and suburb, a Google Business Profile that matches the website, and the weekly work that keeps a business in the top 3 on Google Maps.',
    provider: { '@id': `${BUSINESS_INFO.url}/#business` },
    areaServed: { '@type': 'City', name: 'Gold Coast', containedInPlace: { '@type': 'State', name: 'Queensland' } },
    url: `${BUSINESS_INFO.url}${PATH}/`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS_INFO.url },
      { '@type': 'ListItem', position: 2, name: TITLE, item: `${BUSINESS_INFO.url}${PATH}/` },
    ],
  };

  return [personSchema, pageSchema, serviceSchema, breadcrumbSchema];
}

export default function BestLocalSeoExpertPage() {
  const schemas = buildPageJsonLd();
  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <BestSeoContent />
    </>
  );
}
