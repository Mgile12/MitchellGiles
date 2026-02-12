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
      <EmailMarketingCTA />
    </div>
  );
}
