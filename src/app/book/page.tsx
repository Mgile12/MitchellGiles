import type { Metadata } from 'next';
import BookingContent from './BookingContent';

export const metadata: Metadata = {
  title: 'Book a Free Strategy Call | Mitchell Giles Marketing',
  description:
    'Book a free 30-minute growth strategy session with Mitchell Giles. Get a clear, channel-specific marketing plan for your Gold Coast business.',
  robots: { index: false, follow: false },
};

export default function BookPage() {
  return <BookingContent />;
}
