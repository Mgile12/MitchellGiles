import { ServiceRoute, serviceMetadata } from '@/app/services/service-route';

export const metadata = serviceMetadata('seo-for-electricians');

export default function Page() {
  return <ServiceRoute slug="seo-for-electricians" />;
}
