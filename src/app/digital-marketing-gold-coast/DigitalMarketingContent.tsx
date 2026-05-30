'use client';

import DigitalMarketingHero from './DigitalMarketingHero';
import DigitalMarketingChannels from './DigitalMarketingChannels';
import DigitalMarketingIntegration from './DigitalMarketingIntegration';
import DigitalMarketingCTA from './DigitalMarketingCTA';

export default function DigitalMarketingContent() {
  return (
    <div className="bg-navy-950 min-h-screen">
      <DigitalMarketingHero />
      <DigitalMarketingChannels />
      <DigitalMarketingIntegration />
      <DigitalMarketingCTA />
    </div>
  );
}
