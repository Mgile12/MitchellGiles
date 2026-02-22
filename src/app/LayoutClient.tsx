'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import HeaderNav from '@/components/HeaderNav';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

const MINIMAL_ROUTES = ['/book'];

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  const isMinimal = MINIMAL_ROUTES.some((route) => pathname === route || pathname.startsWith(route + '/'));

  if (isMinimal) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-navy-950">
      <HeaderNav />
      <main>{children}</main>
      <Footer onOpenModal={() => setIsModalOpen(true)} />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
