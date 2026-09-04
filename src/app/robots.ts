import type { MetadataRoute } from 'next';
import { BUSINESS_INFO } from '@/lib/business-info';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${BUSINESS_INFO.url}/sitemap.xml`,
  };
}
