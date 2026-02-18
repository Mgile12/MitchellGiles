'use client';

import MetaAdsHero from './MetaAdsHero';
import MetaAdsWhy from './MetaAdsWhy';
import MetaAdsEngine from './MetaAdsEngine';
import MetaAdsLocal from './MetaAdsLocal';
import MetaAdsFramework from './MetaAdsFramework';
import MetaAdsFAQ from './MetaAdsFAQ';
import MetaAdsCTA from './MetaAdsCTA';

export default function MetaAdsContent() {
  return (
    <div className="bg-navy-950 min-h-screen">
      <MetaAdsHero />
      <MetaAdsWhy />
      <MetaAdsEngine />
      <MetaAdsLocal />
      <MetaAdsFramework />
      <MetaAdsFAQ />
      <MetaAdsCTA />
    </div>
  );
}
