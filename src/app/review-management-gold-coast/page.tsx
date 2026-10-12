import { ServiceRoute, serviceMetadata } from '@/app/services/service-route';

export const metadata = serviceMetadata('review-management-gold-coast');

export default function Page() {
  return <ServiceRoute slug="review-management-gold-coast" />;
}
