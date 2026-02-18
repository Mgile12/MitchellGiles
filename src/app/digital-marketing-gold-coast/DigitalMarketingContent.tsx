'use client';

import DigitalMarketingHero from './DigitalMarketingHero';
import DigitalMarketingChannels from './DigitalMarketingChannels';
import DigitalMarketingIntegration from './DigitalMarketingIntegration';
import DigitalMarketingCTA from './DigitalMarketingCTA';
import ServedAreasLinks from '@/components/ServedAreasLinks';

const DIGITAL_MARKETING_AREAS = [
  { name: 'Southport', slug: 'southport' },
  { name: 'Broadbeach', slug: 'broadbeach' },
  { name: 'Burleigh Heads', slug: 'burleigh-heads' },
  { name: 'Surfers Paradise', slug: 'surfers-paradise' },
  { name: 'Robina', slug: 'robina' },
  { name: 'Hope Island', slug: 'hope-island' },
  { name: 'Main Beach', slug: 'main-beach' },
  { name: 'Varsity Lakes', slug: 'varsity-lakes' },
  { name: 'Molendinar', slug: 'molendinar' },
  { name: 'Gold Coast', slug: 'gold-coast' },
];

export default function DigitalMarketingContent() {
  return (
    <div className="bg-navy-950 min-h-screen">
      <DigitalMarketingHero />
      <DigitalMarketingChannels />
      <DigitalMarketingIntegration />
      <ServedAreasLinks areas={DIGITAL_MARKETING_AREAS} heading="Digital Marketing Across the Gold Coast" />
      <DigitalMarketingCTA />
    </div>
  );
}
