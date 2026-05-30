'use client';

import GoogleAdsHero from './GoogleAdsHero';
import GoogleAdsServices from './GoogleAdsServices';
import GoogleAdsSEOConnection from './GoogleAdsSEOConnection';
import GoogleAdsCTA from './GoogleAdsCTA';

export default function GoogleAdsContent() {
  return (
    <div className="bg-navy-950 min-h-screen">
      <GoogleAdsHero />
      <GoogleAdsServices />
      <GoogleAdsSEOConnection />
      <GoogleAdsCTA />
    </div>
  );
}
