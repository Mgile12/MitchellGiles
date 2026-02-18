'use client';

import EmailMarketingHero from './EmailMarketingHero';
import EmailMarketingWhy from './EmailMarketingWhy';
import EmailMarketingServices from './EmailMarketingServices';
import EmailMarketingIndustries from './EmailMarketingIndustries';
import EmailMarketingChoosing from './EmailMarketingChoosing';
import EmailMarketingChecklist from './EmailMarketingChecklist';
import EmailMarketingIntegration from './EmailMarketingIntegration';
import EmailMarketingFAQ from './EmailMarketingFAQ';
import EmailMarketingCTA from './EmailMarketingCTA';
import ServedAreasLinks from '@/components/ServedAreasLinks';

const EMAIL_AREAS = [
  { name: 'Southport', slug: 'southport' },
  { name: 'Robina', slug: 'robina' },
  { name: 'Broadbeach', slug: 'broadbeach' },
  { name: 'Helensvale', slug: 'helensvale' },
  { name: 'Pacific Pines', slug: 'pacific-pines' },
  { name: 'Mudgeeraba', slug: 'mudgeeraba' },
  { name: 'Carrara', slug: 'carrara' },
  { name: 'Ashmore', slug: 'ashmore' },
  { name: 'Labrador', slug: 'labrador' },
  { name: 'Gold Coast', slug: 'gold-coast' },
];

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  faqItems: FAQItem[];
}

export default function EmailMarketingContent({ faqItems }: Props) {
  return (
    <div className="bg-navy-950 min-h-screen">
      <EmailMarketingHero />
      <EmailMarketingWhy />
      <EmailMarketingServices />
      <EmailMarketingIndustries />
      <EmailMarketingChoosing />
      <EmailMarketingChecklist />
      <EmailMarketingIntegration />
      <EmailMarketingFAQ faqItems={faqItems} />
      <ServedAreasLinks areas={EMAIL_AREAS} heading="Email Marketing Across the Gold Coast" />
      <EmailMarketingCTA />
    </div>
  );
}
