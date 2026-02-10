import { ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0A0E1A]">
      {children}
    </div>
  );
}
