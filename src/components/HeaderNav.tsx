'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { BUSINESS_INFO } from '../lib/business-info';

const serviceLinks = [
  { label: 'Google Business Profile', href: '/google-business-profile-gold-coast' },
  { label: 'SEO Gold Coast', href: '/seo-gold-coast' },
  { label: 'Google Ads Gold Coast', href: '/google-ads-gold-coast' },
  { label: 'Meta Ads Agency', href: '/meta-ads-agency' },
  { label: 'Email Marketing Gold Coast', href: '/email-marketing-gold-coast' },
  { label: 'Lead Generation Gold Coast', href: '/lead-generation-gold-coast' },
  { label: 'Digital Marketing Gold Coast', href: '/digital-marketing-gold-coast' },
  { label: 'Marketing Automation Gold Coast', href: '/marketing-automation-gold-coast' },
];

export default function HeaderNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    if (pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`header-in fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-200 ${
        scrolled
          ? 'bg-navy-950/85 backdrop-blur-md border-b border-white/[0.06] shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className={`relative flex items-center justify-center md:justify-between ${scrolled ? 'h-16 sm:h-[68px]' : 'h-20 sm:h-[88px]'}`}>
          <Link href="/" className="shrink-0">
            <img
              src="/logos/mrg-wordmark.png"
              alt="MRG Marketing"
              width={240}
              height={63}
              className={`h-6 sm:h-7 w-auto object-contain origin-left transition-transform duration-200 ease-[var(--ease-out)] ${scrolled ? 'scale-[0.86]' : 'scale-100'}`}
            />
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                onKeyDown={(e) => { if (e.key === 'Escape') setServicesOpen(false); }}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                aria-controls="services-menu"
                className="inline-flex items-center gap-1 py-2 text-sm font-medium text-slate-300 hover:text-gold transition-colors duration-200"
              >
                Services
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-[opacity,transform] duration-200 ease-[var(--ease-out)] ${
                  servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'
                }`}
              >
                <div
                  id="services-menu"
                  className="w-72 rounded-xl border border-white/[0.08] bg-navy-900/95 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden"
                  onKeyDown={(e) => { if (e.key === 'Escape') setServicesOpen(false); }}
                >
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      tabIndex={servicesOpen ? 0 : -1}
                      className="block px-5 py-3.5 text-sm font-medium text-slate-300 hover:text-gold hover:bg-white/[0.04] transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/areas"
              className="py-2 text-sm font-medium text-slate-300 hover:text-gold transition-colors duration-200"
            >
              Areas
            </Link>

            <button
              onClick={() => scrollToSection('about')}
              className="py-2 text-sm font-medium text-slate-300 hover:text-gold transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('results')}
              className="py-2 text-sm font-medium text-slate-300 hover:text-gold transition-colors duration-200"
            >
              Results
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneFormatted}`}
              className="inline-flex items-center gap-1.5 py-2 text-sm font-medium text-slate-300 hover:text-gold transition-colors duration-200"
            >
              <Phone className="h-3.5 w-3.5" />
              {BUSINESS_INFO.phone}
            </a>
            <Link
              href="/book"
              className="gold-flat-btn inline-flex items-center justify-center rounded-lg px-5 py-2 text-sm font-semibold tracking-wide"
            >
              Book a call
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden absolute right-0 p-2 text-white/80 hover:text-white transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden grid transition-[grid-template-rows,opacity] duration-200 ease-[var(--ease-out)] bg-navy-950/95 backdrop-blur-lg border-t border-white/[0.06] ${
          mobileOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
        id="mobile-menu"
        aria-hidden={!mobileOpen}
        {...(mobileOpen ? {} : ({ inert: '' } as Record<string, string>))}
      >
        <div className="overflow-hidden">
        <div className="px-5 py-5 space-y-1">
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between w-full text-left px-3 py-3 text-base font-medium text-slate-200 hover:text-gold hover:bg-white/[0.04] rounded-lg transition-colors duration-200"
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180 text-gold' : 'text-slate-500'}`} />
            </button>
            <div className={`grid transition-[grid-template-rows,opacity] duration-200 ease-[var(--ease-out)] ${mobileServicesOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <div className="pl-6 pb-1 space-y-0.5">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2.5 text-sm font-medium text-slate-400 hover:text-gold hover:bg-white/[0.04] rounded-lg transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/areas"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-left px-3 py-3 text-base font-medium text-slate-200 hover:text-gold hover:bg-white/[0.04] rounded-lg transition-colors duration-200"
          >
            Areas
          </Link>

          <button
            onClick={() => scrollToSection('about')}
            className="block w-full text-left px-3 py-3 text-base font-medium text-slate-200 hover:text-gold hover:bg-white/[0.04] rounded-lg transition-colors duration-200"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('results')}
            className="block w-full text-left px-3 py-3 text-base font-medium text-slate-200 hover:text-gold hover:bg-white/[0.04] rounded-lg transition-colors duration-200"
          >
            Results
          </button>
          <a
            href={`tel:${BUSINESS_INFO.phoneFormatted}`}
            className="flex items-center gap-2 px-3 py-3 text-base font-medium text-slate-200 hover:text-gold hover:bg-white/[0.04] rounded-lg transition-colors duration-200"
          >
            <Phone className="h-4 w-4" />
            {BUSINESS_INFO.phone}
          </a>
          <div className="pt-3">
            <Link
              href="/book"
              className="gold-flat-btn block text-center rounded-lg px-5 py-3.5 text-sm font-semibold tracking-wide"
            >
              Book a call
            </Link>
          </div>
        </div>
        </div>
      </div>
      <div className="scroll-progress" aria-hidden="true" />
    </header>
  );
}
