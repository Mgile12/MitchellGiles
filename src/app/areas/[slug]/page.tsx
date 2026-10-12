import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BUSINESS_INFO } from '@/lib/business-info';
import SuburbContent from '../SuburbContent';
import { SUBURB_PAGES } from '../suburbs';

export function generateStaticParams() {
  return SUBURB_PAGES.map((s) => ({ slug: s.slug }));
}

function images(s: { slug: string; name: string; primaryKeyword: string }) {
  const kw = s.primaryKeyword.toLowerCase();
  const kws = s.primaryKeyword.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return {
    portrait: { src: `/images/areas/${s.slug}/${kws}-mitchell-giles-ormeau.jpg`, alt: `${kw}: Mitchell Giles, MRG Marketing, Ormeau` },
    grid: { src: `/images/areas/${s.slug}/${kws}-google-maps-ranking-grid.jpg`, alt: `${kw}: Google Maps ranking grid, Gold Coast plumber in the top 3 at 46 of 49 points` },
  };
}

// The layout's title template appends " | MRG Marketing".
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = SUBURB_PAGES.find((x) => x.slug === params.slug);
  if (!s) return {};
  const url = `${BUSINESS_INFO.url}/areas/${s.slug}/`;
  const img = images(s).portrait;
  return {
    title: s.title,
    description: s.description,
    openGraph: { title: `${s.primaryKeyword} | MRG Marketing`, description: s.description, type: 'website', url, locale: 'en_AU', images: [{ url: img.src, width: 1200, height: 960, alt: img.alt }] },
    twitter: { card: 'summary_large_image', title: `${s.primaryKeyword} | MRG Marketing`, description: s.description, images: [img.src] },
    alternates: { canonical: url },
  };
}

export default function SuburbPageRoute({ params }: { params: { slug: string } }) {
  const s = SUBURB_PAGES.find((x) => x.slug === params.slug);
  if (!s) notFound();
  const url = `${BUSINESS_INFO.url}/areas/${s.slug}/`;
  const imgs = images(s);

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: s.faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Local SEO and Google Business Profile optimisation',
      name: s.primaryKeyword,
      description: s.description,
      provider: { '@id': `${BUSINESS_INFO.url}/#business` },
      areaServed: [
        { '@type': 'Place', name: s.name, containedInPlace: { '@type': 'State', name: 'Queensland' } },
        ...s.nearby.map((n) => ({ '@type': 'Place', name: n })),
      ],
      url,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS_INFO.url },
        { '@type': 'ListItem', position: 2, name: 'Areas we serve', item: `${BUSINESS_INFO.url}/areas/` },
        { '@type': 'ListItem', position: 3, name: s.name, item: url },
      ],
    },
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <SuburbContent s={s} images={imgs} />
    </>
  );
}
