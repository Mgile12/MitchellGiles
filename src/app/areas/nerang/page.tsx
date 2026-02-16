import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/business-info';
import AreaPlaceholderContent from '../AreaPlaceholderContent';

export const metadata: Metadata = {
  title: 'Marketing Consultant Nerang | Trades & Services Marketing',
  description: 'Marketing consultant for Nerang businesses. SEO, Google Ads, email marketing and lead generation for trades, services and growing local businesses.',
  alternates: { canonical: `${BUSINESS_INFO.url}/areas/nerang` },
};

export default function NerangPage() {
  return (
    <AreaPlaceholderContent
      areaName="Nerang"
      description="Nerang is a growing hub for trades and services on the Gold Coast hinterland. With strong demand from residential and commercial sectors, local businesses need marketing that captures suburb-level search intent effectively."
    />
  );
}
