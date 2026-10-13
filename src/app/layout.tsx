import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Montserrat } from 'next/font/google';
import { BUSINESS_INFO } from '@/lib/business-info';
import LayoutClient from './LayoutClient';
import '@/index.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS_INFO.url),
  title: {
    default: 'BEST Internet Marketing Service Ormeau | MRG Marketing | looking for an online marketing agency near me for local seo, google business optimisation or ai search? we put your business at the top 3 of Google',
    template: '%s | MRG Marketing',
  },
  description: `MRG Marketing is an internet marketing service in Ormeau on the northern Gold Coast. Local SEO, Google Business Profile optimisation and AI search (GEO) that put local businesses in the top 3 on Google Maps and in front of AI answers, with results you can check. Call ${BUSINESS_INFO.phone}.`,
  keywords: [
    'internet marketing service ormeau',
    'internet marketing service gold coast',
    'local seo ormeau',
    'local seo gold coast',
    'google business profile optimisation gold coast',
    'google my business optimisation gold coast',
    'google maps ranking gold coast',
    'ai search optimisation gold coast',
    'generative engine optimisation gold coast',
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
    title: 'BEST Internet Marketing Service Ormeau | MRG Marketing | looking for an online marketing agency near me for local seo, google business optimisation or ai search? we put your business at the top 3 of Google',
    description:
      'Local SEO, Google Business Profile optimisation and AI search for Gold Coast businesses, with results you can check.',
    type: 'website',
    url: BUSINESS_INFO.url,
    siteName: BUSINESS_INFO.name,
    locale: 'en_AU',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MRG Marketing, internet marketing service, Ormeau, Gold Coast' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BEST Internet Marketing Service Ormeau | MRG Marketing | looking for an online marketing agency near me for local seo, google business optimisation or ai search? we put your business at the top 3 of Google',
    description:
      'Local SEO, Google Business Profile optimisation and AI search for Gold Coast businesses, with results you can check.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: BUSINESS_INFO.url,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: '/apple-touch-icon.png',
  },
  other: {
    'geo.region': `${BUSINESS_INFO.address.country}-${BUSINESS_INFO.address.region}`,
    'geo.placename': BUSINESS_INFO.address.locality,
    'geo.position': `${BUSINESS_INFO.geo.latitude};${BUSINESS_INFO.geo.longitude}`,
    ICBM: `${BUSINESS_INFO.geo.latitude}, ${BUSINESS_INFO.geo.longitude}`,
  },
};

function buildJsonLd() {
  const businessId = `${BUSINESS_INFO.url}/#business`;
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': businessId,
    name: BUSINESS_INFO.name,
    description: BUSINESS_INFO.description,
    url: `${BUSINESS_INFO.url}/`,
    logo: BUSINESS_INFO.logo,
    image: [BUSINESS_INFO.logo, BUSINESS_INFO.image],
    telephone: BUSINESS_INFO.phoneFormatted,
    email: BUSINESS_INFO.email,
    founder: {
      '@type': 'Person',
      name: BUSINESS_INFO.founder,
      jobTitle: 'Founder',
      sameAs: [BUSINESS_INFO.social.linkedin],
    },
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
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.legalName)}&query_place_id=${BUSINESS_INFO.placeId}`,
    areaServed: BUSINESS_INFO.serviceArea.map((name) => ({ '@type': 'Place', name })),
    knowsAbout: [...BUSINESS_INFO.services],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '14:00',
      },
    ],
    sameAs: [BUSINESS_INFO.social.facebook, BUSINESS_INFO.social.instagram],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: BUSINESS_INFO.name,
    url: BUSINESS_INFO.url,
    description: BUSINESS_INFO.description,
    publisher: { '@id': businessId },
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
    <html lang="en-AU" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        {jsonLdData.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <noscript>
          <img height="1" width="1" loading="lazy" style={{ display: 'none' }} alt="" src="https://www.facebook.com/tr?id=1874195909924234&ev=PageView&noscript=1" />
        </noscript>
      </head>
      {/* Trackers load after the page is interactive: same PageView events, no main-thread contention during load.
          GA4 property G-K7EN1S3XSH (replaced G-GNM9TTTWFJ on 14 Oct 2026). */}
      <Script id="fb-pixel" strategy="lazyOnload">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1874195909924234');fbq('track','PageView');`}
      </Script>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-K7EN1S3XSH"
        strategy="lazyOnload"
      />
      <Script id="gtag-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K7EN1S3XSH');
        `}
      </Script>
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
