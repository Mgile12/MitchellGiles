import { BUSINESS_INFO } from '../lib/business-info';

export default function LocalBusinessSchema() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${BUSINESS_INFO.url}/#business`,
    name: BUSINESS_INFO.name,
    alternateName: BUSINESS_INFO.legalName,
    description: BUSINESS_INFO.description,
    url: BUSINESS_INFO.url,
    logo: BUSINESS_INFO.logo,
    image: BUSINESS_INFO.image,
    telephone: BUSINESS_INFO.phoneFormatted,
    email: BUSINESS_INFO.email,
    founder: {
      '@type': 'Person',
      name: BUSINESS_INFO.founder,
      url: BUSINESS_INFO.url,
      sameAs: [
        BUSINESS_INFO.social.linkedin,
        BUSINESS_INFO.social.twitter,
        BUSINESS_INFO.social.facebook,
        BUSINESS_INFO.social.instagram,
      ],
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
    areaServed: BUSINESS_INFO.serviceArea.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Marketing Services',
      itemListElement: BUSINESS_INFO.services.map((service, i) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service,
        },
        position: i + 1,
      })),
    },
    sameAs: [
      BUSINESS_INFO.social.facebook,
      BUSINESS_INFO.social.instagram,
      BUSINESS_INFO.social.twitter,
      BUSINESS_INFO.social.linkedin,
    ],
    priceRange: '$$',
    currenciesAccepted: 'AUD',
    paymentAccepted: 'Bank Transfer, Credit Card',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
