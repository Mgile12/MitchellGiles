'use client';

import { Footer as UIFooter } from '@/components/ui/footer';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../lib/business-info';
import { TOP_5_AREAS } from '../lib/areas';

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

const footerAreaLinks = [
  ...TOP_5_AREAS.map((area) => ({
    href: `/areas/${area.slug}`,
    label: area.name,
  })),
  { href: '/areas', label: 'View All Areas' },
];

export default function Footer({ onOpenModal }: FooterProps) {
  return (
    <UIFooter
      logo={<img src="https://iili.io/qjWolf9.md.png" alt="Mitchell Giles Marketing Logo" className="h-20 object-contain" style={{ width: 'auto' }} />}
      brandName={BUSINESS_INFO.legalName}
      tagline="Pipelines & leads for Aussie businesses."
      mainLinks={[
        { href: '/services', label: 'All Services' },
        { href: '/seo-gold-coast', label: 'SEO' },
        { href: '/google-ads-gold-coast', label: 'Google Ads' },
        { href: '/email-marketing-gold-coast', label: 'Email Marketing' },
        { href: '/lead-generation-gold-coast', label: 'Lead Generation' },
        { href: '/digital-marketing-gold-coast', label: 'Digital Marketing' },
        { href: '/book', label: 'Book a Call' },
        { label: 'Contact', onClick: onOpenModal },
      ]}
      contactInfo={{
        email: BUSINESS_INFO.email,
        phone: BUSINESS_INFO.phone,
        location: BUSINESS_INFO.address.full,
      }}
      socialLinks={[
        { href: BUSINESS_INFO.social.facebook, icon: <Facebook size={20} />, label: 'Facebook' },
        { href: BUSINESS_INFO.social.instagram, icon: <Instagram size={20} />, label: 'Instagram' },
        { href: BUSINESS_INFO.social.twitter, icon: <XIcon size={20} />, label: 'X (Twitter)' },
        { href: BUSINESS_INFO.social.linkedin, icon: <Linkedin size={20} />, label: 'LinkedIn' },
      ]}
      areaLinks={footerAreaLinks}
      copyright={{
        text: `\u00A9 ${new Date().getFullYear()} ${BUSINESS_INFO.legalName}`,
        license: 'All rights reserved',
      }}
      bottomTagline="Built for speed & conversion. No agency fluff."
    />
  );
}
