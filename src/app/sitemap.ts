import type { MetadataRoute } from 'next';
import { BUSINESS_INFO } from '@/lib/business-info';
import { caseStudies } from './case-studies/data';
import { SERVICE_PAGES } from './services/services-data';
import { POSTS } from './blog/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BUSINESS_INFO.url;

  const servicePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/services/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/google-business-profile-gold-coast/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    ...SERVICE_PAGES.map((sp) => ({ url: `${baseUrl}/${sp.slug}/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: sp.group === 'core' ? 0.9 : 0.7 })),
    { url: `${baseUrl}/email-marketing-gold-coast/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/best-local-seo-expert-in-gold-coast/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ];

  return [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    ...servicePages,
    { url: `${baseUrl}/areas/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/areas/ormeau/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/areas/pimpama/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/areas/coomera/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/areas/upper-coomera/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/areas/beenleigh/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/areas/yatala/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/areas/stapylton/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/best-marketing-agency-in-gold-coast/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/hardest-working-seo-expert-in-gold-coast/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/best-seo-agency-for-tradies-in-australia/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/case-studies/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/blog/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
    ...POSTS.map((p) => ({ url: `${baseUrl}/blog/${p.slug}/`, lastModified: new Date(p.dateModified), changeFrequency: 'monthly' as const, priority: 0.6 })),
    ...caseStudies.map((c) => ({ url: `${baseUrl}/case-studies/${c.slug}/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 })),
  ];
}
