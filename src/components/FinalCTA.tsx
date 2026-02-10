import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeInUp } from '../utils/animations';

export default function FinalCTA() {
  return (
    <section className="relative bg-navy-950 text-slate-50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-serif">
            Ready to stop gambling with your leads?
          </h2>

          <div className="mt-8 space-y-3">
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-sans">
              I'll tell you where your pipeline is leaking, what's stealing your money, and what we can fix in the next 90 days.
            </p>
          </div>

          <div className="mt-12 relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-gold via-gold-light to-gold rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <a
              href="https://app.usemotion.com/meet/mitchell-giles-xsnm/d2h4337"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold bg-gradient-to-r from-gold via-gold-light to-gold text-navy-950 hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 group"
            >
              Book a Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          <div className="mt-8">
            <button
              type="button"
              className="text-sm font-medium text-slate-400 underline underline-offset-4 decoration-slate-600 hover:text-gold hover:decoration-gold transition-colors duration-200"
            >
              Not ready yet? Grab the free guide instead.
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
