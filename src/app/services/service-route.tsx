import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BUSINESS_INFO } from '@/lib/business-info';
import ServicePageContent, { type ServiceImages } from './ServicePageContent';
import { SERVICE_PAGES } from './services-data';

function slugify(t: string) {
  return t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function serviceImages(slug: string): ServiceImages {
  const s = SERVICE_PAGES.find((x) => x.slug === slug)!;
  const kw = s.primaryKeyword.toLowerCase();
  const kws = slugify(s.primaryKeyword);
  return {
    portrait: { src: `/images/services/${slug}/${kws}-mitchell-giles-ormeau.jpg`, alt: `${kw}: Mitchell Giles, MRG Marketing, Ormeau` },
    grid: { src: `/images/services/${slug}/${kws}-google-maps-ranking-grid.jpg`, alt: `${kw}: Google Maps ranking grid, Gold Coast plumber in the top 3 at 46 of 49 points` },
  };
}

// The layout's title template appends " | MRG Marketing".
export function serviceMetadata(slug: string): Metadata {
  const s = SERVICE_PAGES.find((x) => x.slug === slug);
  if (!s) return {};
  const url = `${BUSINESS_INFO.url}/${s.slug}/`;
  const img = serviceImages(slug).portrait;
  return {
    title: s.title,
    description: s.description,
    openGraph: { title: `${s.name} | MRG Marketing`, description: s.description, type: 'article', url, locale: 'en_AU', images: [{ url: img.src, width: 1200, height: 960, alt: img.alt }] },
    twitter: { card: 'summary_large_image', title: `${s.name} | MRG Marketing`, description: s.description, images: [img.src] },
    alternates: { canonical: url },
  };
}

export function ServiceRoute({ slug }: { slug: string }) {
  const s = SERVICE_PAGES.find((x) => x.slug === slug);
  if (!s) notFound();
  const url = `${BUSINESS_INFO.url}/${s.slug}/`;
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: s.name,
      name: s.h1,
      description: s.description,
      provider: { '@id': `${BUSINESS_INFO.url}/#business` },
      areaServed: BUSINESS_INFO.serviceArea.map((name) => ({ '@type': 'Place', name })),
      url,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: s.faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS_INFO.url },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${BUSINESS_INFO.url}/services/` },
        { '@type': 'ListItem', position: 3, name: s.name, item: url },
      ],
    },
  ];
  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <ServicePageContent s={s} images={serviceImages(slug)} />
    </>
  );
}
