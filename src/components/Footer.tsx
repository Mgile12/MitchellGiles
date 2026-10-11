'use client';

import { Footer as UIFooter } from '@/components/ui/footer';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../lib/business-info';

const footerAreaLinks = [{ href: '/areas', label: 'View All Areas' }];

export default function Footer() {
  return (
    <UIFooter
      logo={<img src="/logos/mrg-wordmark.png" alt="MRG Marketing" width={240} height={63} className="h-7 w-auto object-contain" style={{ filter: 'brightness(0)' }} />}
      brandName={BUSINESS_INFO.legalName}
      tagline="Internet marketing service, Ormeau. Local SEO, Google Business Profile optimisation and AI search for the Gold Coast and Brisbane."
      mainLinks={[
        { href: '/google-business-profile-gold-coast', label: 'Google Business Profile' },
        { href: '/Best-local-seo-expert-in-Gold-Coast', label: 'Local SEO' },
        { href: '/case-studies', label: 'Case studies' },
        { href: '/book', label: 'Book a call' },
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
