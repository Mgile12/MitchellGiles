'use client';

import MetaAdsHero from './MetaAdsHero';
import MetaAdsWhy from './MetaAdsWhy';
import MetaAdsEngine from './MetaAdsEngine';
import MetaAdsLocal from './MetaAdsLocal';
import MetaAdsFramework from './MetaAdsFramework';
import MetaAdsFAQ from './MetaAdsFAQ';
import MetaAdsCTA from './MetaAdsCTA';
import ServedAreasLinks from '@/components/ServedAreasLinks';

const META_ADS_AREAS = [
  { name: 'Surfers Paradise', slug: 'surfers-paradise' },
  { name: 'Broadbeach', slug: 'broadbeach' },
  { name: 'Burleigh Heads', slug: 'burleigh-heads' },
  { name: 'Coolangatta', slug: 'coolangatta' },
  { name: 'Main Beach', slug: 'main-beach' },
  { name: 'Miami', slug: 'miami' },
  { name: 'Mermaid Beach', slug: 'mermaid-beach' },
  { name: 'Palm Beach', slug: 'palm-beach' },
  { name: 'Southport', slug: 'southport' },
  { name: 'Gold Coast', slug: 'gold-coast' },
];

export default function MetaAdsContent() {
  return (
    <div className="bg-navy-950 min-h-screen">
      <MetaAdsHero />
      <MetaAdsWhy />
      <MetaAdsEngine />
      <MetaAdsLocal />
      <MetaAdsFramework />
      <MetaAdsFAQ />
      <ServedAreasLinks areas={META_ADS_AREAS} heading="Meta Ads Services Across the Gold Coast" />
      <MetaAdsCTA />
    </div>
  );
}
