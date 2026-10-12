import type { MetadataRoute } from 'next';
import { BUSINESS_INFO } from '@/lib/business-info';
import { caseStudies } from './case-studies/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BUSINESS_INFO.url;

  const servicePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/services/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/google-business-profile-gold-coast/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
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
    { url: `${baseUrl}/case-studies/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ...caseStudies.map((c) => ({ url: `${baseUrl}/case-studies/${c.slug}/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 })),
  ];
}
