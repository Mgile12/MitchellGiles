'use client';

import { Footer as UIFooter } from '@/components/ui/footer';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../lib/business-info';

interface FooterProps {
  onOpenModal: () => void;
}

const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="currentColor"
  >
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
  </svg>
);

export default function Footer({ onOpenModal }: FooterProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <UIFooter
      logo={<img src={BUSINESS_INFO.logo} alt="MG Logo" className="h-12 w-12 object-contain" />}
      brandName={BUSINESS_INFO.legalName}
      tagline="Pipelines & leads for Aussie businesses."
      mainLinks={[
        {
          href: '/case-studies/elite-football-agency',
          label: 'Case Studies',
        },
        {
          label: 'Process',
          onClick: () => scrollToSection('services'),
        },
        {
          label: 'Contact',
          onClick: onOpenModal,
        },
      ]}
      contactInfo={{
        email: BUSINESS_INFO.email,
        phone: BUSINESS_INFO.phone,
        location: BUSINESS_INFO.address.full,
      }}
      socialLinks={[
        {
          href: BUSINESS_INFO.social.facebook,
          icon: <Facebook size={20} />,
          label: 'Facebook',
        },
        {
          href: BUSINESS_INFO.social.instagram,
          icon: <Instagram size={20} />,
          label: 'Instagram',
        },
        {
          href: BUSINESS_INFO.social.twitter,
          icon: <XIcon size={20} />,
          label: 'X (Twitter)',
        },
        {
          href: BUSINESS_INFO.social.linkedin,
          icon: <Linkedin size={20} />,
          label: 'LinkedIn',
        },
      ]}
      copyright={{
        text: `\u00A9 ${new Date().getFullYear()} ${BUSINESS_INFO.legalName}`,
        license: 'All rights reserved',
      }}
      bottomTagline="Built for speed & conversion. No agency fluff."
    />
  );
}
