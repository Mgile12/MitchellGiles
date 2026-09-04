import type { MetadataRoute } from 'next';
import { BUSINESS_INFO } from '@/lib/business-info';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BUSINESS_INFO.url;

  const servicePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/google-business-profile-gold-coast`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/seo-gold-coast`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/google-ads-gold-coast`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/meta-ads-agency`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/email-marketing-gold-coast`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/lead-generation-gold-coast`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/digital-marketing-gold-coast`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/marketing-automation-gold-coast`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ];

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    ...servicePages,
    { url: `${baseUrl}/areas`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];
}
