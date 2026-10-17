import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/business-info';
import Eyebrow from '@/components/Eyebrow';
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
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <div className="bg-navy-950 min-h-screen">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.45),transparent_60%)]" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-12 sm:pb-16">
            <nav className="flex items-center gap-2 text-sm text-ink/55 mb-10 font-sans" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-gold transition-colors duration-200">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-ink/80">Blog</span>
            </nav>
            <Eyebrow align="left" className="mb-5">Blog</Eyebrow>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink font-serif leading-[1.08] max-w-3xl">
              Local SEO advice for Gold Coast tradies
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-ink/80 font-sans leading-relaxed max-w-2xl">
              What I see every week inside the Google Business Profiles of plumbers, sparkies and builders, written up
              plainly so you can use it.
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col rounded-2xl border border-ink/10 bg-white/55 overflow-hidden hover:border-ink/30 transition-colors duration-200"
              >
                <img src={p.image.src} alt={p.image.alt} width={1200} height={900} loading="lazy" className="w-full aspect-[4/3] object-cover border-b border-ink/10" />
                <div className="p-6 flex flex-col flex-1">
                  <time dateTime={p.datePublished} className="text-xs font-semibold tracking-[0.18em] uppercase text-ink/55 font-sans">
                    {formatDate(p.datePublished)}
                  </time>
                  <h2 className="mt-3 text-xl font-bold text-ink font-serif leading-snug">{p.h1}</h2>
                  <p className="mt-3 text-base text-ink/75 font-sans leading-relaxed flex-1">{p.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink font-sans">
                    Read it <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
