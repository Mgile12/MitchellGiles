import type { MetadataRoute } from 'next';
import { AREAS } from '@/lib/areas';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mitchellgiles.com';

  const servicePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/seo-gold-coast`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/google-ads-gold-coast`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/email-marketing-gold-coast`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/lead-generation-gold-coast`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/digital-marketing-gold-coast`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/marketing-automation-gold-coast`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ];

  const areaPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/areas`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ...AREAS.map((area) => ({
      url: `${baseUrl}/areas/${area.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    ...servicePages,
    ...areaPages,
    { url: `${baseUrl}/case-studies/elite-football-agency`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];
}
