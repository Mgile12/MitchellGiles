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
      <LeadGenCTA />
    </div>
  );
}
