import { ServiceRoute, serviceMetadata } from '@/app/services/service-route';

export const metadata = serviceMetadata('local-citations-gold-coast');

export default function Page() {
  return <ServiceRoute slug="local-citations-gold-coast" />;
}
