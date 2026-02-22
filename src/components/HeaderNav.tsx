'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { BUSINESS_INFO } from '../lib/business-info';
import { TOP_5_AREAS } from '../lib/areas';

const serviceLinks = [
  { label: 'SEO Gold Coast', href: '/seo-gold-coast' },
  { label: 'Google Ads Gold Coast', href: '/google-ads-gold-coast' },
  { label: 'Meta Ads Agency', href: '/meta-ads-agency' },
  { label: 'Email Marketing Gold Coast', href: '/email-marketing-gold-coast' },
  { label: 'Lead Generation Gold Coast', href: '/lead-generation-gold-coast' },
  { label: 'Digital Marketing Gold Coast', href: '/digital-marketing-gold-coast' },
  { label: 'Marketing Automation Gold Coast', href: '/marketing-automation-gold-coast' },
];

const areaLinks = TOP_5_AREAS.map((a) => ({
  label: a.name,
  href: `/areas/${a.slug}`,
}));

export default function HeaderNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const areasDropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const areasTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
    setMobileServicesOpen(false);
    setMobileAreasOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (areasDropdownRef.current && !areasDropdownRef.current.contains(e.target as Node)) {
        setAreasOpen(false);
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

  const handleAreasMouseEnter = () => {
    if (areasTimeoutRef.current) clearTimeout(areasTimeoutRef.current);
    setAreasOpen(true);
  };

  const handleAreasMouseLeave = () => {
    areasTimeoutRef.current = setTimeout(() => setAreasOpen(false), 150);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/85 backdrop-blur-md border-b border-white/[0.06] shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className={`relative flex items-center justify-center md:justify-between transition-all duration-300 ${scrolled ? 'h-16 sm:h-[68px]' : 'h-20 sm:h-[88px]'}`}>
          <Link href="/" className="shrink-0">
            <img
              src="https://iili.io/fyI7mAB.png"
              alt="MG Logo"
              className={`object-contain transition-all duration-300 ${scrolled ? 'h-10 w-10 sm:h-11 sm:w-11' : 'h-16 w-16 sm:h-14 sm:w-14'}`}
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
                className="inline-flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-gold transition-colors duration-200"
              >
                Services
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                  servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'
                }`}
              >
                <div className="w-72 rounded-xl border border-white/[0.08] bg-navy-900/95 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-5 py-3.5 text-sm font-medium text-slate-300 hover:text-gold hover:bg-white/[0.04] transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div
              ref={areasDropdownRef}
              className="relative"
              onMouseEnter={handleAreasMouseEnter}
              onMouseLeave={handleAreasMouseLeave}
            >
              <button
                onClick={() => setAreasOpen(!areasOpen)}
                className="inline-flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-gold transition-colors duration-200"
              >
                Areas
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${areasOpen ? 'rotate-180' : ''}`} />
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                  areasOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'
                }`}
              >
                <div className="w-64 rounded-xl border border-white/[0.08] bg-navy-900/95 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden">
                  {areaLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-5 py-3.5 text-sm font-medium text-slate-300 hover:text-gold hover:bg-white/[0.04] transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="border-t border-white/[0.06]">
                    <Link
                      href="/areas"
                      className="block px-5 py-3.5 text-sm font-semibold text-gold hover:text-gold-light hover:bg-white/[0.04] transition-colors duration-150 tracking-wide uppercase text-xs"
                    >
                      View All Areas
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('services')}
              className="text-sm font-medium text-slate-300 hover:text-gold transition-colors duration-200"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('results')}
              className="text-sm font-medium text-slate-300 hover:text-gold transition-colors duration-200"
            >
              Results
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneFormatted}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-gold transition-colors duration-200"
            >
              <Phone className="h-3.5 w-3.5" />
              {BUSINESS_INFO.phone}
            </a>
            <Link
              href="/book"
              className="gold-flat-btn inline-flex items-center justify-center rounded-lg px-5 py-2 text-sm font-semibold tracking-wide"
            >
              Book a Call
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden absolute right-0 p-2 text-white/80 hover:text-white transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-250 ease-in-out bg-navy-950/95 backdrop-blur-lg border-t border-white/[0.06] ${
          mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 py-5 space-y-1">
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between w-full text-left px-3 py-3 text-base font-medium text-slate-200 hover:text-gold hover:bg-white/[0.04] rounded-lg transition-colors duration-200"
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180 text-gold' : 'text-slate-500'}`} />
            </button>
            <div className={`grid transition-all duration-300 ease-out ${mobileServicesOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
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

          <div>
            <button
              onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
              className="flex items-center justify-between w-full text-left px-3 py-3 text-base font-medium text-slate-200 hover:text-gold hover:bg-white/[0.04] rounded-lg transition-colors duration-200"
            >
              Areas
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileAreasOpen ? 'rotate-180 text-gold' : 'text-slate-500'}`} />
            </button>
            <div className={`grid transition-all duration-300 ease-out ${mobileAreasOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <div className="pl-6 pb-1 space-y-0.5">
                  {areaLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2.5 text-sm font-medium text-slate-400 hover:text-gold hover:bg-white/[0.04] rounded-lg transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/areas"
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 text-sm font-semibold text-gold hover:text-gold-light hover:bg-white/[0.04] rounded-lg transition-colors duration-150"
                  >
                    View All Areas
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => scrollToSection('services')}
            className="block w-full text-left px-3 py-3 text-base font-medium text-slate-200 hover:text-gold hover:bg-white/[0.04] rounded-lg transition-colors duration-200"
          >
            Process
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
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
