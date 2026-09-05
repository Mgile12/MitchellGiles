'use client';

import { usePathname } from 'next/navigation';
import HeaderNav from '@/components/HeaderNav';
import Footer from '@/components/Footer';

const MINIMAL_ROUTES = ['/book'];

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isMinimal = MINIMAL_ROUTES.some((route) => pathname === route || pathname.startsWith(route + '/'));

  if (isMinimal) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-navy-950">
      <a href="#main" className="skip-link">Skip to content</a>
      <HeaderNav />
      <main id="main" tabIndex={-1} className="outline-none">{children}</main>
      <Footer />
    </div>
  );
}
