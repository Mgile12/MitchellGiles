import Link from 'next/link';
import { MapPin, BarChart3 } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const connections = [
  {
    icon: MapPin,
    title: 'Local SEO + Google Business Profile',
    description:
      'Your Maps listing and your organic rankings feed each other. Service and suburb pages give the profile something to rank for, and the profile sends the calls.',
    href: '/google-business-profile-gold-coast',
    linkLabel: 'Google Business Profile Gold Coast',
  },
  {
    icon: BarChart3,
    title: 'Local SEO + proof',
    description:
      'Two clients went from page two to the top 3 on Google Maps in days once the website and the profile said the same thing. The scans, dates and limits are written up.',
    href: '/case-studies',
    linkLabel: 'Case studies',
  },
];

export default function SEOIntegration() {
  return (
    <section className="bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.45),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-14 sm:mb-20">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
            Full-Stack Approach
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink mb-5 font-serif">
            How SEO Integrates With Your Broader Strategy
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-ink/80 leading-relaxed font-sans">
              SEO does not exist in isolation. The biggest returns come when organic search works alongside
              your Google Business Profile and the proof behind the work.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {connections.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimateOnScroll
                key={index}
                stagger={index + 1}
                className="rounded-2xl border border-ink/[0.06] bg-white/55 p-6 sm:p-7 hover:border-gold/20 hover:bg-white/85 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-ink mb-3 font-serif">{item.title}</h3>
                <p className="text-sm text-ink/65 leading-relaxed mb-4 font-sans">{item.description}</p>
                <Link
                  href={item.href}
                  className="text-sm font-semibold text-gold hover:text-gold-light transition-colors duration-200 font-sans"
                >
                  {item.linkLabel} &rarr;
                </Link>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
