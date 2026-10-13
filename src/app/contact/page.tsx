import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/business-info';
import ContactContent from './ContactContent';

const TITLE = 'Contact | Book a 30-Minute Call or Phone 0474 870 535';
const DESCRIPTION =
  'Contact Mitchell Giles at MRG Marketing, an internet marketing service at 9 Laverton St, Ormeau. Book a 30-minute call, phone 0474 870 535 or email. Local SEO, Google Business Profile optimisation and AI search (GEO) for the Gold Coast and Brisbane.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: 'Contact MRG Marketing Ormeau',
    description: DESCRIPTION,
    type: 'website',
    url: `${BUSINESS_INFO.url}/contact/`,
    locale: 'en_AU',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact MRG Marketing Ormeau',
    description: DESCRIPTION,
    images: ['/og-image.png'],
  },
  alternates: { canonical: `${BUSINESS_INFO.url}/contact/` },
};

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${BUSINESS_INFO.url}/contact/#contactpage`,
    url: `${BUSINESS_INFO.url}/contact/`,
    name: 'Contact MRG Marketing',
    description: DESCRIPTION,
    inLanguage: 'en-AU',
    about: { '@id': `${BUSINESS_INFO.url}/#business` },
    mainEntity: {
      '@type': 'LocalBusiness',
      '@id': `${BUSINESS_INFO.url}/#business`,
      name: BUSINESS_INFO.legalName,
      telephone: BUSINESS_INFO.phoneFormatted,
      email: BUSINESS_INFO.email,
      url: BUSINESS_INFO.url,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS_INFO.address.street,
        addressLocality: BUSINESS_INFO.address.locality,
        addressRegion: BUSINESS_INFO.address.region,
        postalCode: BUSINESS_INFO.address.postalCode,
        addressCountry: BUSINESS_INFO.address.country,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        telephone: BUSINESS_INFO.phoneFormatted,
        email: BUSINESS_INFO.email,
        areaServed: 'AU',
        availableLanguage: 'en',
      },
      potentialAction: {
        '@type': 'ReserveAction',
        name: 'Book a 30-minute call',
        target: BUSINESS_INFO.bookingUrl,
      },
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS_INFO.url },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: `${BUSINESS_INFO.url}/contact/` },
    ],
  },
];

export default function ContactPage() {
  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <ContactContent />
    </>
  );
}
