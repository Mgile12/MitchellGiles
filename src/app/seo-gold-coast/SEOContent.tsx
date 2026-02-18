'use client';

import SEOHero from './SEOHero';
import SEOWhyMatters from './SEOWhyMatters';
import SEOPillars from './SEOPillars';
import SEOLandscape from './SEOLandscape';
import SEODelivers from './SEODelivers';
import SEOTimelines from './SEOTimelines';
import SEOChecklist from './SEOChecklist';
import SEOIntegration from './SEOIntegration';
import SEOFAQ from './SEOFAQ';
import SEOCTA from './SEOCTA';
import ServedAreasLinks from '@/components/ServedAreasLinks';

const SEO_AREAS = [
  { name: 'Southport', slug: 'southport' },
  { name: 'Surfers Paradise', slug: 'surfers-paradise' },
  { name: 'Broadbeach', slug: 'broadbeach' },
  { name: 'Burleigh Heads', slug: 'burleigh-heads' },
  { name: 'Robina', slug: 'robina' },
  { name: 'Nerang', slug: 'nerang' },
  { name: 'Coolangatta', slug: 'coolangatta' },
  { name: 'Palm Beach', slug: 'palm-beach' },
  { name: 'Helensvale', slug: 'helensvale' },
  { name: 'Gold Coast', slug: 'gold-coast' },
];

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  faqItems: FAQItem[];
}

export default function SEOContent({ faqItems }: Props) {
  return (
    <div className="bg-navy-950 min-h-screen">
      <SEOHero />
      <SEOWhyMatters />
      <SEOPillars />
      <SEOLandscape />
      <SEODelivers />
      <SEOTimelines />
      <SEOChecklist />
      <SEOIntegration />
      <SEOFAQ faqItems={faqItems} />
      <ServedAreasLinks areas={SEO_AREAS} heading="SEO Services Across the Gold Coast" />
      <SEOCTA />
    </div>
  );
}
