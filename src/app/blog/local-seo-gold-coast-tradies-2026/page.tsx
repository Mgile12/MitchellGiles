import type { Metadata } from 'next';
import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/business-info';
import BlogArticle from '../BlogArticle';
import { getPost } from '../posts';

const post = getPost('local-seo-gold-coast-tradies-2026');
const URL = `${BUSINESS_INFO.url}/blog/${post.slug}/`;

const IMAGES = {
  gbp: {
    src: '/images/blog/google-business-profile-tradie-reviews-call-button.webp',
    alt: 'Tradie holding a phone showing a Google Business Profile with five-star reviews and a call button on a building site',
  },
  ai: {
    src: '/images/blog/ai-search-local-tradie-recommendation-gold-coast.webp',
    alt: 'Gold Coast homeowner asking an AI assistant on her phone to recommend a local tradie',
  },
  report: {
    src: '/images/blog/local-seo-ranking-report-gold-coast.webp',
    alt: 'Printed local SEO ranking report showing growing calls on a desk with a Gold Coast skyline view',
  },
};

const FAQS = [
  {
    q: 'What is local SEO for Gold Coast tradies?',
    a: 'Local SEO is getting your business into the Google Maps top three and the local results when people nearby search for your trade. For Gold Coast tradies it mainly means a well-run Google Business Profile, steady reviews, matching business details across directories, and useful suburb and service pages on your website.',
  },
  {
    q: 'Do I need a new website to get more calls from Google?',
    a: 'Usually not. For most tradies the Google Business Profile drives more calls than the website. Fix the profile, reviews and business details first, then add proper service and suburb pages to the site you already have.',
  },
  {
    q: 'How many Google reviews does a tradie need?',
    a: "There's no magic number, but a steady three to five new reviews a month, each with a reply, beats a one-off burst. Reviews that mention the job and suburb help most.",
  },
  {
    q: 'Does local SEO help me show up in ChatGPT and AI search?',
    a: 'Yes. AI tools recommend businesses they can confirm across several trusted sources, so the same work (matching details, reviews and clear service information) helps with both Google and AI search.',
  },
];

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  authors: [{ name: BUSINESS_INFO.founder }],
  openGraph: {
    title: `${post.title} | MRG Marketing`,
    description: post.description,
    type: 'article',
    url: URL,
    locale: 'en_AU',
    publishedTime: post.datePublished,
    modifiedTime: post.dateModified,
    authors: [BUSINESS_INFO.founder],
    images: [{ url: post.image.src, width: 1200, height: 900, alt: post.image.alt }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${post.title} | MRG Marketing`,
    description: post.description,
    images: [post.image.src],
  },
  alternates: { canonical: URL },
};

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${URL}#article`,
    headline: post.h1,
    description: post.description,
    image: [post.image.src, IMAGES.gbp.src, IMAGES.ai.src, IMAGES.report.src].map((s) => `${BUSINESS_INFO.url}${s}`),
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    inLanguage: 'en-AU',
    mainEntityOfPage: URL,
    keywords: post.keywords.join(', '),
    about: [
      { '@type': 'Thing', name: 'Local SEO' },
      { '@type': 'Thing', name: 'Google Business Profile' },
    ],
    author: {
      '@type': 'Person',
      '@id': `${BUSINESS_INFO.url}/#mitchell-giles`,
      name: BUSINESS_INFO.founder,
      url: `${BUSINESS_INFO.url}/hardest-working-seo-expert-in-gold-coast/`,
      worksFor: { '@id': `${BUSINESS_INFO.url}/#business` },
    },
    publisher: { '@id': `${BUSINESS_INFO.url}/#business` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS_INFO.url },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BUSINESS_INFO.url}/blog/` },
      { '@type': 'ListItem', position: 3, name: 'Local SEO Gold Coast for Tradies in 2026', item: URL },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
];

function Figure({ img }: { img: { src: string; alt: string } }) {
  return (
    <figure>
      <img src={img.src} alt={img.alt} width={1200} height={900} loading="lazy" decoding="async" />
    </figure>
  );
}

export default function LocalSeoGoldCoastTradies2026() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <BlogArticle post={post}>
        <p>
          I spend most of my week inside the Google Business Profiles and websites of plumbers and tradies, mostly on the
          northern Gold Coast around Ormeau, Pimpama and Coomera. The questions I get haven&apos;t changed much over the
          years. &ldquo;Why isn&apos;t my phone ringing from Google?&rdquo; &ldquo;Do I need a new website?&rdquo;
          &ldquo;Should I be paying for ads?&rdquo;
        </p>
        <p>
          What has changed is the answer. Local search in 2026 looks different from even two years ago, and a lot of the
          advice tradies get is out of date. Here&apos;s how I see it right now.
        </p>

        <h2>The map pack is still where the calls come from</h2>
        <p>
          When someone searches &ldquo;electrician near me&rdquo; or &ldquo;blocked drain Coomera&rdquo;, the first thing
          they see is a map with three businesses. For most tradies I work with, that map pack drives more calls than
          everything else online put together. It&apos;s ahead of the organic website results and ahead of social media
          for most trades.
        </p>
        <p>
          So if you only have time for one thing, it&apos;s your{' '}
          <Link href="/google-business-profile-gold-coast">Google Business Profile</Link>.
        </p>

        <h2>What still works</h2>
        <Figure img={IMAGES.gbp} />
        <p>
          <strong>Getting your categories right.</strong> The primary category remains the strongest relevance signal on
          your profile. I still regularly find plumbers listed under a vague category, or electricians missing secondary
          categories for work they do every week. It&apos;s a ten minute fix and often the quickest movement I see.
        </p>
        <p>
          <strong>A real services list.</strong> Every job you want calls for, with a short plain description. Google
          matches searches against it.
        </p>
        <p>
          <strong>A steady flow of reviews.</strong> Not a burst of twenty after a reminder from your marketing person,
          then nothing for six months. Three to five a month, every month, with replies to each one. When customers
          mention the job and suburb in their own words, even better. More on this in our{' '}
          <Link href="/review-management-gold-coast">review management</Link> service.
        </p>
        <p>
          <strong>Consistent business details.</strong> Your name, address and phone number need to match on your
          website, Google, Apple Maps, Bing and the main Australian directories. I clean up wrong listings for nearly
          every new client. Old mobile numbers and previous addresses are the usual culprits. That&apos;s what our{' '}
          <Link href="/local-citations-gold-coast">local citations</Link> work fixes.
        </p>
        <p>
          <strong>Suburb and service pages on your website.</strong> Your Google profile borrows relevance from your
          site. A tradie with a genuinely useful page for each key suburb and each core service will usually outrank one
          with a five page brochure site. &ldquo;Useful&rdquo; is the key word: local detail, common issues, FAQs, a map.
          Not the same paragraph with the suburb name swapped.
        </p>

        <h2>What doesn&apos;t work anymore (or never did)</h2>
        <p>
          <strong>Keyword stuffing your business name.</strong> &ldquo;Bob&apos;s Plumbing Ormeau Best Plumber Gold
          Coast&rdquo; can still push a profile up for a while. Then it gets suspended, usually at the worst time.
          I&apos;ve seen competitors do it, and I&apos;ve seen them disappear.
        </p>
        <p>
          <strong>Set and forget.</strong> A profile that was set up nicely in 2023 and hasn&apos;t been touched since is
          losing ground every month to profiles that post, add photos and reply to reviews weekly.
        </p>
        <p>
          <strong>Buying thousands of links.</strong> For local trades, a few dozen accurate directory listings and a
          handful of genuine local mentions do far more than any bulk link package.
        </p>
        <p>
          <strong>Judging your ranking from your own phone.</strong> Rankings change every few hundred metres. Searching
          from your driveway shows you one point on a very large map.
        </p>

        <h2>What&apos;s new in 2026</h2>
        <Figure img={IMAGES.ai} />
        <p>
          <strong>AI search is now part of local search.</strong> Homeowners ask ChatGPT, Perplexity and Google&apos;s AI
          Overviews to recommend a plumber in their suburb. Those tools favour businesses they can confirm across
          multiple trustworthy sources: matching details, solid reviews and clear service information. The good news is
          that the work overlaps heavily with local SEO. I&apos;ve written more about this on our page about{' '}
          <Link href="/ai-search-geo-gold-coast">AI search (GEO) for Gold Coast businesses</Link>.
        </p>
        <p>
          <strong>Geo-grid tracking is the standard.</strong> I use Local Falcon to check rankings across a grid of
          points over a whole area, so we can see exactly where a client is in the top three and where a competitor
          takes over. It changes the conversation from &ldquo;are we ranking?&rdquo; to &ldquo;we own Ormeau and Yatala,
          now let&apos;s win Upper Coomera.&rdquo;
        </p>
        <p>
          <strong>Activity counts more than it used to.</strong> Weekly posts, fresh photos and fast review replies
          don&apos;t just look good. They lift engagement, which helps rankings over time and converts more of the people
          who do see you.
        </p>

        <h2>A simple local SEO plan for a Gold Coast tradie</h2>
        <Figure img={IMAGES.report} />
        <p>If I were starting from scratch with a plumber in Pimpama tomorrow, the order would be:</p>
        <ol>
          <li>Fix the profile: categories, services, hours, service area, photos.</li>
          <li>Clean up the business details across the big directories.</li>
          <li>Set up a review request text that goes out after every job.</li>
          <li>Build or rewrite the website pages for core services and the top three suburbs.</li>
          <li>Run a geo grid for the main keyword, then repeat it monthly.</li>
          <li>Post weekly and add photos weekly, forever.</li>
        </ol>
        <p>
          None of it is complicated. The hard part is doing it consistently while running a business, which is exactly
          why so many profiles stall. See how we do it for trades on our{' '}
          <Link href="/seo-for-tradies-gold-coast">SEO for tradies Gold Coast</Link> page.
        </p>

        <h2>Frequently asked questions</h2>
        {FAQS.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}

        <h2>Where to start</h2>
        <p>
          If you&apos;re a tradie on the northern Gold Coast and you&apos;re not sure where your profile stands, the
          first step is to look at it honestly against the list above. If you&apos;d like someone to do that for you,
          we&apos;re local, based in Ormeau, and we work with tradies across the area. You can see what we cover for{' '}
          <Link href="/areas/ormeau">local SEO in Ormeau</Link>, or call me on{' '}
          <a href={`tel:${BUSINESS_INFO.phoneFormatted}`}>{BUSINESS_INFO.phone}</a>.
        </p>
        <p>
          <strong>MRG Marketing</strong>
          <br />
          {BUSINESS_INFO.address.full}
          <br />
          <a href={`tel:${BUSINESS_INFO.phoneFormatted}`}>{BUSINESS_INFO.phone}</a>
        </p>
      </BlogArticle>
    </>
  );
}
