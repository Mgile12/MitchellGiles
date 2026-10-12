import { ServiceRoute, serviceMetadata } from '@/app/services/service-route';

export const metadata = serviceMetadata('ai-search-geo-gold-coast');

export default function Page() {
  return <ServiceRoute slug="ai-search-geo-gold-coast" />;
}
