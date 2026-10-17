// Blog index. Each post has its own route folder under src/app/blog/<slug>/ for the body;
// this list feeds the /blog/ hub, the sitemap and the post metadata.
export interface BlogPost {
  slug: string;
  /** <title> text before the layout's " | MRG Marketing" suffix */
  title: string;
  h1: string;
  description: string;
  excerpt: string;
  /** ISO date, AEST */
  datePublished: string;
  dateModified: string;
  image: { src: string; alt: string };
  keywords: string[];
}

export const POSTS: BlogPost[] = [
  {
    slug: 'local-seo-gold-coast-tradies-2026',
    title: 'Local SEO Gold Coast for Tradies 2026: What Works',
    h1: "Local SEO Gold Coast for Tradies in 2026: What Still Works and What Doesn't",
    description:
      'Local SEO Gold Coast tips for tradies in 2026. What still gets calls from Google Maps, what to stop doing, and a simple 6-step plan from an Ormeau local SEO agency.',
    excerpt:
      'What still gets tradies calls from Google Maps in 2026, what to stop doing, and the six-step plan I would follow with a plumber in Pimpama tomorrow.',
    datePublished: '2026-10-20T09:00:00+10:00',
    dateModified: '2026-10-20T09:00:00+10:00',
    image: {
      src: '/images/blog/local-seo-gold-coast-tradie-phone-call.webp',
      alt: 'Gold Coast tradie in hi-vis taking a customer call next to his ute in a northern Gold Coast street',
    },
    keywords: ['local seo gold coast', 'seo for tradies gold coast', 'google business profile', 'seo ormeau', 'ai search'],
  },
];

export function getPost(slug: string): BlogPost {
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) throw new Error(`Unknown blog post: ${slug}`);
  return post;
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Australia/Brisbane' });
}
