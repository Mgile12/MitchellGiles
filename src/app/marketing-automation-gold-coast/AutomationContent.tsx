'use client';

import AutomationHero from './AutomationHero';
import AutomationServices from './AutomationServices';
import AutomationSEOConnection from './AutomationSEOConnection';
import AutomationCTA from './AutomationCTA';
import ServedAreasLinks from '@/components/ServedAreasLinks';

const AUTOMATION_AREAS = [
  { name: 'Southport', slug: 'southport' },
  { name: 'Robina', slug: 'robina' },
  { name: 'Bundall', slug: 'bundall' },
  { name: 'Ashmore', slug: 'ashmore' },
  { name: 'Merrimac', slug: 'merrimac' },
  { name: 'Arundel', slug: 'arundel' },
  { name: 'Parkwood', slug: 'parkwood' },
  { name: 'Helensvale', slug: 'helensvale' },
  { name: 'Burleigh Heads', slug: 'burleigh-heads' },
  { name: 'Gold Coast', slug: 'gold-coast' },
];

export default function AutomationContent() {
  return (
    <div className="bg-navy-950 min-h-screen">
      <AutomationHero />
      <AutomationServices />
      <AutomationSEOConnection />
      <ServedAreasLinks areas={AUTOMATION_AREAS} heading="Marketing Automation Across the Gold Coast" />
      <AutomationCTA />
    </div>
  );
}
