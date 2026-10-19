'use client';

import { Footer as UIFooter } from '@/components/ui/footer';
import { Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

// lucide has no TikTok or X marks; these match its 20px, currentColor sizing.
function TikTokIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-1.8-2.47V9.79a5.68 5.68 0 1 0 4.89 5.61V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.3 4.3 0 0 1-3.24-1.48Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.78L17.75 3Zm-1.08 16.18h1.7L7.4 4.73H5.58l11.09 14.45Z" />
    </svg>
  );
}
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
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' },
        { href: 'https://calendar.notion.com/meet/mitchellgiles134/tovi31rm', label: 'Book a call' },
      ]}
      contactInfo={{
        email: BUSINESS_INFO.email,
        phone: BUSINESS_INFO.phone,
        location: BUSINESS_INFO.address.full,
      }}
      socialLinks={[
        { href: BUSINESS_INFO.social.instagram, icon: <Instagram size={20} />, label: 'Instagram' },
        { href: BUSINESS_INFO.social.linkedin, icon: <Linkedin size={20} />, label: 'LinkedIn' },
        { href: BUSINESS_INFO.social.tiktok, icon: <TikTokIcon />, label: 'TikTok' },
        { href: BUSINESS_INFO.social.x, icon: <XIcon />, label: 'X (Twitter)' },
        { href: BUSINESS_INFO.social.youtube, icon: <Youtube size={20} />, label: 'YouTube' },
        { href: BUSINESS_INFO.social.facebook, icon: <Facebook size={20} />, label: 'Facebook' },
      ]}
      areaLinks={footerAreaLinks}
      copyright={{
        text: `\u00A9 ${new Date().getFullYear()} ${BUSINESS_INFO.legalName}`,
        license: 'All rights reserved',
      }}
      bottomTagline="Ormeau, Gold Coast, Queensland."
      badges={
        // My Gold Coast directory badge (Featured listing, from Oct 2026). Embed code as supplied by the directory.
        <a href="https://mygoldcoast.directory/business/mrg-marketing" title="MRG Marketing on My Gold Coast">
          <img src="https://mygoldcoast.directory/images/badge-featured.png" alt="Featured on My Gold Coast" width={220} height={64} loading="lazy" style={{ border: 0 }} />
        </a>
      }
    />
  );
}
