import type { Metadata } from 'next';
import Script from 'next/script';
import { BUSINESS_INFO } from '@/lib/business-info';
import LayoutClient from './LayoutClient';
import '@/index.css';

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS_INFO.url),
  title: {
    default: "BEST Marketing Agency Gold Coast - If You're Looking for Digital Marketing Services Near Me or Social Media Marketing & Search Engine Optimisation Near Me - MRG Marketing Agency Gold Coast is the place to be",
    template: '%s | MRG Marketing',
  },
  description: `${BUSINESS_INFO.name} - Gold Coast's leading marketing agency gold coast. Specialising in email marketing, Meta Ads, Google Ads, SEO & digital marketing for Australian businesses. Based in ${BUSINESS_INFO.address.locality}, serving ${BUSINESS_INFO.serviceArea.slice(0, 5).join(', ')}. Call ${BUSINESS_INFO.phone}.`,
  keywords: [
    'marketing agency gold coast',
    'email marketing near me',
    'digital marketing gold coast',
    'paid advertising gold coast',
    'Meta Ads gold coast',
    'Google Ads gold coast',
    'SEO gold coast',
    'marketing agency gold coast',
    'marketing agency gold coast',
    ...BUSINESS_INFO.services.map((s) => s.toLowerCase()),
  ],
  authors: [{ name: BUSINESS_INFO.founder }],
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
  openGraph: {
    title: 'BEST Marketing Agency Gold Coast - MRG Marketing',
    description:
      "Gold Coast marketing agency gold coast specialising in email marketing, paid advertising, Meta Ads, Google Ads, SEO & digital marketing. Based in Southport QLD.",
    type: 'website',
    url: BUSINESS_INFO.url,
    siteName: BUSINESS_INFO.name,
    locale: 'en_AU',
    images: [{ url: '/image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BEST Marketing Agency Gold Coast - MRG Marketing',
    description:
      "Gold Coast marketing agency gold coast specialising in email marketing, paid advertising, Meta Ads, Google Ads, SEO & digital marketing. Based in Southport QLD.",
    images: ['/image.png'],
  },
  alternates: {
    canonical: BUSINESS_INFO.url,
  },
  icons: {
    icon: BUSINESS_INFO.logo,
  },
  other: {
    'geo.region': `${BUSINESS_INFO.address.country}-${BUSINESS_INFO.address.region}`,
    'geo.placename': BUSINESS_INFO.address.locality,
    'geo.position': `${BUSINESS_INFO.geo.latitude};${BUSINESS_INFO.geo.longitude}`,
    ICBM: `${BUSINESS_INFO.geo.latitude}, ${BUSINESS_INFO.geo.longitude}`,
  },
};

function buildJsonLd() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${BUSINESS_INFO.url}/#business`,
    name: BUSINESS_INFO.name,
    description: BUSINESS_INFO.description,
    url: BUSINESS_INFO.url,
    logo: BUSINESS_INFO.logo,
    image: BUSINESS_INFO.image,
    telephone: '0474870535',
    email: BUSINESS_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.locality,
      addressRegion: BUSINESS_INFO.address.region,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -27.9635248,
      longitude: 153.4133307,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Gold Coast QLD',
    },
    makesOffer: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Email Marketing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Copywriting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lead Generation & Paid Advertising' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Awareness' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Strategic SEO' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Automation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Event Management' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Consulting' } },
    ],
    sameAs: [
      BUSINESS_INFO.social.facebook,
      BUSINESS_INFO.social.instagram,
      BUSINESS_INFO.social.twitter,
      BUSINESS_INFO.social.linkedin,
    ],
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '16:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '16:00',
      },
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: BUSINESS_INFO.name,
    url: BUSINESS_INFO.url,
    description: BUSINESS_INFO.description,
    publisher: { '@id': `${BUSINESS_INFO.url}/#business` },
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
    ],
  };

  return [localBusinessSchema, websiteSchema, breadcrumbSchema];
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLdData = buildJsonLd();

  return (
    <html lang="en-AU">
      <head>
        <link rel="icon" href="https://iili.io/qjWolf9.md.png" type="image/png" />
        <link rel="apple-touch-icon" href="https://iili.io/qjWolf9.md.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {jsonLdData.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-GNM9TTTWFJ"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-GNM9TTTWFJ');
        `}
      </Script>
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
