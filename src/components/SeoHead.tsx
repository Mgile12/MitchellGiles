import { useEffect } from 'react';
import { BUSINESS_INFO } from '../lib/business-info';

interface SeoHeadProps {
  title?: string;
  description?: string;
  path?: string;
}

export default function SeoHead({ title, description, path = '' }: SeoHeadProps) {
  const defaultTitle = `BEST Marketing Consultant Gold Coast - If You're Looking for Email Marketing Near Me or Paid Advertising & Digital Marketing Near Me - Work with Mitchell Giles`;
  const defaultDescription = `${BUSINESS_INFO.name} - Gold Coast's leading marketing consultant. Specialising in email marketing, Meta Ads, Google Ads, SEO & digital marketing for Australian businesses. Based in ${BUSINESS_INFO.address.locality}, serving ${BUSINESS_INFO.serviceArea.slice(0, 5).join(', ')}. Call ${BUSINESS_INFO.phone}.`;

  const pageTitle = title || defaultTitle;
  const pageDescription = description || defaultDescription;
  const canonicalUrl = `${BUSINESS_INFO.url}${path}`;

  useEffect(() => {
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    document.title = pageTitle;

    setMeta('description', pageDescription);
    setMeta('keywords', `marketing consultant gold coast, email marketing near me, digital marketing gold coast, paid advertising gold coast, Meta Ads gold coast, Google Ads gold coast, SEO gold coast, marketing consultant southport, marketing agency gold coast, ${BUSINESS_INFO.services.join(', ').toLowerCase()}`);
    setMeta('author', BUSINESS_INFO.founder);
    setMeta('robots', 'index, follow, max-image-preview:large, max-snippet:-1');

    setMeta('geo.region', `${BUSINESS_INFO.address.country}-${BUSINESS_INFO.address.region}`);
    setMeta('geo.placename', BUSINESS_INFO.address.locality);
    setMeta('geo.position', `${BUSINESS_INFO.geo.latitude};${BUSINESS_INFO.geo.longitude}`);
    setMeta('ICBM', `${BUSINESS_INFO.geo.latitude}, ${BUSINESS_INFO.geo.longitude}`);

    setMeta('og:title', pageTitle, true);
    setMeta('og:description', pageDescription, true);
    setMeta('og:type', 'website', true);
    setMeta('og:url', canonicalUrl, true);
    setMeta('og:site_name', BUSINESS_INFO.name, true);
    setMeta('og:locale', 'en_AU', true);

    setMeta('twitter:title', pageTitle);
    setMeta('twitter:description', pageDescription);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [pageTitle, pageDescription, canonicalUrl]);

  return null;
}
