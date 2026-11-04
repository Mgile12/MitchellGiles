import type { Metadata } from 'next';
import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/business-info';
import SiteShell from '@/components/site/SiteShell';
import { CtaSection, LinksSection, PageHero } from '@/components/site/Blocks';
import { POSTS, formatDate } from './posts';

const DESCRIPTION =
  'Local SEO, Google Business Profile and AI search advice for Gold Coast tradies and local businesses, from Mitchell Giles at MRG Marketing in Ormeau.';

export const metadata: Metadata = {
  title: 'Blog | Local SEO Advice for Gold Coast Tradies',
  description: DESCRIPTION,
  openGraph: {
    title: 'Blog | MRG Marketing',
    description: DESCRIPTION,
    type: 'website',
    url: `${BUSINESS_INFO.url}/blog/`,
    locale: 'en_AU',
    images: [{ url: POSTS[0].image.src, width: 1200, height: 900, alt: POSTS[0].image.alt }],
  },
  alternates: { canonical: `${BUSINESS_INFO.url}/blog/` },
};

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${BUSINESS_INFO.url}/blog/#blog`,
    name: 'MRG Marketing blog',
    description: DESCRIPTION,
    url: `${BUSINESS_INFO.url}/blog/`,
    inLanguage: 'en-AU',
    publisher: { '@id': `${BUSINESS_INFO.url}/#business` },
    blogPost: POSTS.map((p) => ({ '@id': `${BUSINESS_INFO.url}/blog/${p.slug}/#article` })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS_INFO.url },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BUSINESS_INFO.url}/blog/` },
    ],
  },
];

export default function BlogIndex() {
  const posts = [...POSTS].sort((a, b) => b.datePublished.localeCompare(a.datePublished));
  return (
    <SiteShell>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
        kicker="Blog"
        title={<>Local SEO advice for <span className="s-accent">Gold Coast tradies</span></>}
        lead={<p>What I see every week inside the Google Business Profiles of plumbers, sparkies and builders, written up plainly so you can use it.</p>}
        form={false}
      />
      <section className="s-sec s-white">
        <div className="s-wrap s-cards">
          {posts.map((p) => (
            <Link key={p.slug} data-rv="up" href={`/blog/${p.slug}/`} className="s-card">
              <img src={p.image.src} alt={p.image.alt} width={1200} height={900} loading="lazy" className="s-card-img" style={{ aspectRatio: '4/3' }} />
              <time dateTime={p.datePublished} className="s-card-k">{formatDate(p.datePublished)}</time>
              <h2>{p.h1}</h2>
              <span className="s-card-b">{p.excerpt}</span>
              <span className="s-card-more">Read it →</span>
            </Link>
          ))}
        </div>
      </section>
      <CtaSection title={<>Rather see your <span className="s-accent">own map?</span></>} variant="blog">
        <p>Send me your business and the search you want to win. Within 48 hours you get a short video of your own Google Maps position, and the three things I&apos;d fix first.</p>
      </CtaSection>
      <LinksSection title="Keep reading" current="/blog/" />
    </SiteShell>
  );
}
