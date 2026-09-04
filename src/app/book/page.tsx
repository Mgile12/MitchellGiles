import type { Metadata } from 'next';
import BookingContent from './BookingContent';

export const metadata: Metadata = {
  title: 'Book a 15-minute call | MRG Marketing',
  description:
    'Book a 15-minute call with Mitchell Giles, marketing consultant in Ormeau. Tell him what you sell and what is not working. If he can help, you get a plan.',
  robots: { index: false, follow: false },
};

export default function BookPage() {
  return <BookingContent />;
}
