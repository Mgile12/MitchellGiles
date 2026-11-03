import { Archivo, JetBrains_Mono } from 'next/font/google';
import HomeContent from '@/components/home/HomeContent';
import { FAQS } from '@/components/home/faqs';
import { BUSINESS_INFO } from '@/lib/business-info';

// The homepage's title, description, canonical, LocalBusiness and WebSite schema all come from layout.tsx.

const archivo = Archivo({ subsets: ['latin'], axes: ['wdth'], variable: '--font-archivo', display: 'swap' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-jb', display: 'swap' });

const VIDEO_ID = 'uC-0gdj_ii4';

const offerSchema = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  name: 'Free Google Maps video for Ormeau and Gold Coast businesses',
  url: `${BUSINESS_INFO.url}/#get-video`,
  itemListElement: [
    {
      '@type': 'Offer',
      name: 'Free personal Google Maps video',
      description:
        "A short video of your own Google Maps position, street by street: who's beating you, and the three things I'd fix first. Within 48 hours.",
      url: `${BUSINESS_INFO.url}/#get-video`,
      availability: 'https://schema.org/InStock',
      areaServed: [
        { '@type': 'Place', name: 'Ormeau' },
        { '@type': 'Place', name: 'Gold Coast' },
      ],
      offeredBy: { '@id': `${BUSINESS_INFO.url}/#business` },
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: "Who's Taking Your Google Calls? | Local SEO for Gold Coast Businesses",
  description: 'Mitchell Giles from MRG Marketing in Ormeau on how local businesses get into the top 3 on Google Maps and get more calls.',
  thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
  uploadDate: '2026-11-02T13:26:32-08:00',
  duration: 'PT1M40S',
  embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
  contentUrl: `https://www.youtube.com/watch?v=${VIDEO_ID}`,
  publisher: { '@id': `${BUSINESS_INFO.url}/#business` },
};

export default function HomePage() {
  return (
    <div className={`${archivo.variable} ${jetbrains.variable}`}>
      {[offerSchema, faqSchema, videoSchema].map((schema) => (
        <script key={schema['@type']} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <HomeContent />
    </div>
  );
}
