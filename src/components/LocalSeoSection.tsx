import Link from 'next/link';
import { BUSINESS_INFO } from '../lib/business-info';
import AnimateOnScroll from './AnimateOnScroll';

export default function LocalSeoSection() {
  return (
    <section className="bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(12,134,234,0.04),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-14">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
            Local Expertise
          </span>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
            Gold Coast Marketing Agency Gold Coast
          </h3>
          <div className="max-w-2xl mx-auto">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              Based in {BUSINESS_INFO.address.locality}, I work with businesses across the Gold Coast, Brisbane
              and South East Queensland. Whether you need email marketing, paid ads, or a complete digital
              strategy -- you get a local marketing agency gold coast who understands the Australian market.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll className="mb-14 text-center">
          <Link
            href="/areas"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/20 bg-gold/5 text-sm text-gold hover:bg-gold/10 hover:border-gold/35 transition-all duration-200 font-sans font-semibold"
          >
            View areas we serve →
          </Link>
        </AnimateOnScroll>

        <div className="rounded-xl overflow-hidden border border-white/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.9848382683535!2d153.41107557547642!3d-27.963750576036485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b910fb8fc9eb923%3A0xa7a2f66f2a98e68a!2sMRG%20Marketing%20Agency%20Gold%20Coast!5e0!3m2!1sen!2sau!4v1773915739820!5m2!1sen!2sau"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
