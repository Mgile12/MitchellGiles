'use client';

import { Footer as UIFooter } from '@/components/ui/footer';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../lib/business-info';

interface FooterProps {
  onOpenModal: () => void;
}

const footerAreaLinks = [{ href: '/areas', label: 'View All Areas' }];

export default function Footer({ onOpenModal }: FooterProps) {
  return (
    <UIFooter
      logo={<img src="/logos/mrg-wordmark.png" alt="MRG Marketing" width={240} height={63} className="h-7 w-auto object-contain" />}
      brandName={BUSINESS_INFO.legalName}
      tagline="Marketing consultant, Ormeau. Working across the Gold Coast and Brisbane."
      mainLinks={[
        { href: '/services', label: 'All Services' },
        { href: '/google-business-profile-gold-coast', label: 'Google Business Profile' },
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
        { href: BUSINESS_INFO.social.linkedin, icon: <Linkedin size={20} />, label: 'LinkedIn' },
      ]}
      areaLinks={footerAreaLinks}
      copyright={{
        text: `\u00A9 ${new Date().getFullYear()} ${BUSINESS_INFO.legalName}`,
        license: 'All rights reserved',
      }}
      bottomTagline="Ormeau, Gold Coast, Queensland."
    />
  );
}
