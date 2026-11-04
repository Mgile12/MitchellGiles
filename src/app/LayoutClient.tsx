'use client';

import { usePathname } from 'next/navigation';
import HeaderNav from '@/components/HeaderNav';
import Footer from '@/components/Footer';

// Pages in the new design carry their own header and footer (components/site/SiteShell).
const MINIMAL_ROUTES: string[] = [
  '/',
  '/areas',
  '/services',
  '/ai-search-geo-gold-coast',
  '/seo-for-tradies-gold-coast',
  '/google-maps-ranking-gold-coast',
  '/review-management-gold-coast',
  '/local-citations-gold-coast',
  '/local-seo-audit-gold-coast',
  '/seo-for-plumbers',
  '/seo-for-electricians',
  '/seo-for-builders',
  '/google-business-profile-gold-coast',
  '/best-local-seo-expert-in-gold-coast',
  '/best-marketing-agency-in-gold-coast',
  '/best-seo-agency-for-tradies-in-australia',
  '/email-marketing-gold-coast',
];

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
