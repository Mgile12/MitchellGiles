import type { Metadata } from 'next';
import Script from 'next/script';
import { BUSINESS_INFO } from '@/lib/business-info';
import LayoutClient from './LayoutClient';
import '@/index.css';

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS_INFO.url),
  title: {
    default: 'Marketing Consultant Ormeau & Gold Coast | MRG Marketing',
    template: '%s | MRG Marketing',
  },
  description: `Mitchell Giles is a marketing consultant in Ormeau on the Gold Coast. Google Business Profile, Google and Meta Ads, email and strategy for Australian businesses, with results you can check. Call ${BUSINESS_INFO.phone}.`,
  keywords: [
    'marketing consultant ormeau',
    'marketing consultant gold coast',
    'marketing agency gold coast',
    'google business profile gold coast',
    'digital marketing gold coast',
    'Meta Ads gold coast',
    'Google Ads gold coast',
    'SEO gold coast',
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
    title: 'Marketing Consultant Ormeau & Gold Coast | MRG Marketing',
    description:
      'Google Business Profile, ads, email and strategy for Gold Coast businesses, with results you can check.',
    type: 'website',
    url: BUSINESS_INFO.url,
    siteName: BUSINESS_INFO.name,
    locale: 'en_AU',
    images: [{ url: '/image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing Consultant Ormeau & Gold Coast | MRG Marketing',
    description:
      'Google Business Profile, ads, email and strategy for Gold Coast businesses, with results you can check.',
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
    '@type': 'LocalBusiness',
    name: 'MRG Marketing Agency',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjUtAOR97S5jIwly0liOCgpKzJsI87KCOkFyismaIIKhpIPGYj46=s360-w360-h360',
    '@id': 'https://mrgmarketing.com.au/',
    url: 'https://mrgmarketing.com.au',
    telephone: '0474870535',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '9 Laverton St',
      addressLocality: 'Ormeau',
      addressRegion: 'QLD',
      postalCode: '4208',
      addressCountry: 'AU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -27.767,
      longitude: 153.2616,
    },
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
    sameAs: [
      'https://www.facebook.com/profile.php?id=61557011930635',
      'https://www.linkedin.com/in/mrg-marketing/',
      'https://www.instagram.com/mrg.marketing/',
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
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {jsonLdData.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1874195909924234');fbq('track','PageView');`,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=1874195909924234&ev=PageView&noscript=1" />
        </noscript>
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
