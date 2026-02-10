import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeaderNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Case Studies', href: '/case-studies/elite-football-agency' },
    { label: 'Process', action: () => scrollToSection('services') },
    { label: 'Results', action: () => scrollToSection('results') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/85 backdrop-blur-md border-b border-white/[0.06] shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[72px]">
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <img
              src="https://iili.io/fyI7mAB.png"
              alt="MG Logo"
              className="h-9 w-9 sm:h-10 sm:w-10 object-contain"
            />
            <span className="font-bold text-lg sm:text-xl text-white tracking-tight group-hover:text-gold transition-colors duration-200">
              Mitchell Giles
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) =>
              link.href ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={link.action}
                  className="text-sm font-medium text-slate-300 hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </button>
              )
            )}
            <a
              href="https://app.usemotion.com/meet/mitchell-giles-xsnm/d2h4337"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-flat-btn inline-flex items-center justify-center rounded px-5 py-2 text-sm font-semibold tracking-wide"
            >
              Book a Call
            </a>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 -mr-2 text-white/80 hover:text-white transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-navy-950/95 backdrop-blur-lg border-t border-white/[0.06]"
          >
            <div className="px-5 py-5 space-y-1">
              {navLinks.map((link) =>
                link.href ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="block px-3 py-3 text-base font-medium text-slate-200 hover:text-gold hover:bg-white/[0.04] rounded-lg transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    onClick={link.action}
                    className="block w-full text-left px-3 py-3 text-base font-medium text-slate-200 hover:text-gold hover:bg-white/[0.04] rounded-lg transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                )
              )}
              <div className="pt-3">
                <a
                  href="https://app.usemotion.com/meet/mitchell-giles-xsnm/d2h4337"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-flat-btn block text-center rounded px-5 py-3.5 text-sm font-semibold tracking-wide"
                >
                  Book a Call
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
