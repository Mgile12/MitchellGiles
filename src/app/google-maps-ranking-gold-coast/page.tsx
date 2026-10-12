import { ServiceRoute, serviceMetadata } from '@/app/services/service-route';

export const metadata = serviceMetadata('google-maps-ranking-gold-coast');

export default function Page() {
  return <ServiceRoute slug="google-maps-ranking-gold-coast" />;
}
