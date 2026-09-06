import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/business-info';
import BookingContent from './BookingContent';

export const metadata: Metadata = {
  title: { absolute: 'Book a 30-minute call | MRG Marketing' },
  description:
    'Book a 30-minute call with Mitchell Giles, marketing consultant in Ormeau. Tell him what you sell and what is not working. If he can help, you get a plan.',
  robots: { index: false, follow: false },
  alternates: { canonical: `${BUSINESS_INFO.url}/book/` },
};

export default function BookPage() {
  return <BookingContent />;
}
