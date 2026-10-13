'use client';

import { Footer as UIFooter } from '@/components/ui/footer';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../lib/business-info';

const footerAreaLinks = [{ href: '/areas/ormeau', label: 'Ormeau' }, { href: '/areas', label: 'Ormeau Hills' }, { href: '/areas/pimpama', label: 'Pimpama' }, { href: '/areas/coomera', label: 'Coomera' }, { href: '/areas/upper-coomera', label: 'Upper Coomera' }, { href: '/areas/yatala', label: 'Yatala' }, { href: '/areas/stapylton', label: 'Stapylton' }, { href: '/areas', label: 'Jacobs Well' }, { href: '/areas', label: 'Alberton' }, { href: '/areas', label: 'Willow Vale' }, { href: '/areas', label: 'Gilberton' }, { href: '/areas', label: 'Norwell' }, { href: '/areas', label: 'Woongoolba' }, { href: '/areas/beenleigh', label: 'Beenleigh' }, { href: '/areas', label: 'Eagleby' }, { href: '/areas', label: 'Bahrs Scrub' }, { href: '/areas', label: 'Waterford' }, { href: '/areas', label: 'Oxenford' }, { href: '/areas', label: 'Helensvale' }, { href: '/areas', label: 'Hope Island' }, { href: '/areas', label: 'View All Areas' }];

export default function Footer() {
  return (
    <UIFooter
      logo={<img src="/logos/mrg-wordmark.png" alt="MRG Marketing" width={240} height={63} className="h-7 w-auto object-contain" style={{ filter: 'brightness(0)' }} />}
      brandName={BUSINESS_INFO.legalName}
      tagline="Internet marketing service, Ormeau. Local SEO, Google Business Profile optimisation and AI search for the Gold Coast and Brisbane."
      mainLinks={[
        { href: '/google-business-profile-gold-coast', label: 'Google Business Profile' },
        { href: '/best-local-seo-expert-in-gold-coast', label: 'Local SEO' },
        { href: '/ai-search-geo-gold-coast', label: 'AI Search (GEO)' },
        { href: '/case-studies', label: 'Case studies' },
        { href: '/email-marketing-gold-coast', label: 'Email marketing' },
        { href: '/contact', label: 'Contact' },
        { href: 'https://calendar.notion.com/meet/mitchellgiles134/tovi31rm', label: 'Book a call' },
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
