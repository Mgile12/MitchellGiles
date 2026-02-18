'use client';

import GoogleAdsHero from './GoogleAdsHero';
import GoogleAdsServices from './GoogleAdsServices';
import GoogleAdsSEOConnection from './GoogleAdsSEOConnection';
import GoogleAdsCTA from './GoogleAdsCTA';
import ServedAreasLinks from '@/components/ServedAreasLinks';

const GOOGLE_ADS_AREAS = [
  { name: 'Southport', slug: 'southport' },
  { name: 'Surfers Paradise', slug: 'surfers-paradise' },
  { name: 'Robina', slug: 'robina' },
  { name: 'Coomera', slug: 'coomera' },
  { name: 'Hope Island', slug: 'hope-island' },
  { name: 'Bundall', slug: 'bundall' },
  { name: 'Varsity Lakes', slug: 'varsity-lakes' },
  { name: 'Nerang', slug: 'nerang' },
  { name: 'Oxenford', slug: 'oxenford' },
  { name: 'Gold Coast', slug: 'gold-coast' },
];

export default function GoogleAdsContent() {
  return (
    <div className="bg-navy-950 min-h-screen">
      <GoogleAdsHero />
      <GoogleAdsServices />
      <GoogleAdsSEOConnection />
      <ServedAreasLinks areas={GOOGLE_ADS_AREAS} heading="Google Ads Management Across the Gold Coast" />
      <GoogleAdsCTA />
    </div>
  );
}
