'use client';

import LeadGenHero from './LeadGenHero';
import LeadGenLayers from './LeadGenLayers';
import LeadGenPaidAds from './LeadGenPaidAds';
import LeadGenBenchmarks from './LeadGenBenchmarks';
import LeadGenIndustries from './LeadGenIndustries';
import LeadGenChecklist from './LeadGenChecklist';
import LeadGenIntegration from './LeadGenIntegration';
import LeadGenFAQ from './LeadGenFAQ';
import LeadGenCTA from './LeadGenCTA';
import ServedAreasLinks from '@/components/ServedAreasLinks';

const LEAD_GEN_AREAS = [
  { name: 'Southport', slug: 'southport' },
  { name: 'Surfers Paradise', slug: 'surfers-paradise' },
  { name: 'Pimpama', slug: 'pimpama' },
  { name: 'Upper Coomera', slug: 'upper-coomera' },
  { name: 'Yatala', slug: 'yatala' },
  { name: 'Ormeau', slug: 'ormeau' },
  { name: 'Nerang', slug: 'nerang' },
  { name: 'Burleigh Heads', slug: 'burleigh-heads' },
  { name: 'Robina', slug: 'robina' },
  { name: 'Gold Coast', slug: 'gold-coast' },
];

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  faqItems: FAQItem[];
}

export default function LeadGenContent({ faqItems }: Props) {
  return (
    <div className="bg-navy-950 min-h-screen">
      <LeadGenHero />
      <LeadGenLayers />
      <LeadGenPaidAds />
      <LeadGenBenchmarks />
      <LeadGenIndustries />
      <LeadGenChecklist />
      <LeadGenIntegration />
      <LeadGenFAQ faqItems={faqItems} />
      <ServedAreasLinks areas={LEAD_GEN_AREAS} heading="Lead Generation Across the Gold Coast" />
      <LeadGenCTA />
    </div>
  );
}
