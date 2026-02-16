import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/business-info';
import AreaPlaceholderContent from '../AreaPlaceholderContent';

export const metadata: Metadata = {
  title: 'Marketing Consultant Burleigh Heads | Boutique & Wellness Marketing',
  description: 'Marketing consultant for Burleigh Heads businesses. SEO, Google Ads, email marketing and lead generation for boutique, wellness and creative brands.',
  alternates: { canonical: `${BUSINESS_INFO.url}/areas/burleigh-heads` },
};

export default function BurleighHeadsPage() {
  return (
    <AreaPlaceholderContent
      areaName="Burleigh Heads"
      description="Burleigh Heads has become the Gold Coast's creative and wellness hub. Boutique retailers, health practitioners, cafes, and lifestyle brands thrive here -- but standing out requires marketing that matches the quality of your product."
    />
  );
}
