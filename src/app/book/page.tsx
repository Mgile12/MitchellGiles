import type { Metadata } from 'next';
import BookingContent from './BookingContent';

export const metadata: Metadata = {
  title: 'Book a Free Strategy Call | MRG Marketing Marketing',
  description:
    'Book a free 30-minute growth strategy session with MRG Marketing. Get a clear, channel-specific marketing plan for your Gold Coast business.',
  robots: { index: false, follow: false },
};

export default function BookPage() {
  return <BookingContent />;
}
