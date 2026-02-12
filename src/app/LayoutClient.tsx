'use client';

import { useState } from 'react';
import HeaderNav from '@/components/HeaderNav';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-navy-950">
      <HeaderNav />
      <main>{children}</main>
      <Footer onOpenModal={() => setIsModalOpen(true)} />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
