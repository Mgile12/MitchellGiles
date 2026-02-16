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
      <SEOCTA />
    </div>
  );
}
