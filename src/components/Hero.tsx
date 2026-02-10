import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeInUp } from '../utils/animations';

export default function Hero() {
  return (
    <section
      className="bg-navy-950 text-slate-50 relative overflow-hidden hero-grain"
      aria-labelledby="hero-headline"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 lg:pb-36">
        <div className="grid gap-12 lg:gap-20 md:grid-cols-2 md:items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="h-px w-8 bg-gold" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold font-sans">
                For Aussie business owners
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
              id="hero-headline"
              className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold tracking-tight text-white leading-[1.1] font-serif"
            >
              I work with{' '}
              <span className="border-b-2 border-gold/50 pb-1">select businesses</span>{' '}
              who are ready for{' '}
              <span className="text-gold italic">real results.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
              className="mt-8 space-y-5"
            >
              <p className="text-base sm:text-lg text-slate-300 leading-[1.9] tracking-wide font-normal font-sans">
                Email Marketing, Meta Ads, SEO, Google Ads, Automations, AI, Event Tickets, CRMs, Websites.
              </p>

              <p className="text-base sm:text-lg text-slate-300 leading-[1.9] tracking-wide font-normal font-sans">
                No mystery dashboards. No disappearing acts. No excuses.
              </p>

              <p className="text-base sm:text-lg text-slate-300 leading-[1.9] tracking-wide font-normal font-sans">
                No buzzwords.<br />
                No "trust the process".<br />
                No waiting for results.
              </p>

              <p className="text-base sm:text-lg text-slate-300 leading-[1.9] tracking-wide font-normal font-sans">
                A pipeline that delivers.
              </p>

              <p className="text-base sm:text-lg text-white leading-[1.9] tracking-wide font-semibold font-sans">
                If I cannot prove where your leads came from within 90 days, you do not pay.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.25 }}
              className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <a
                href="https://app.usemotion.com/meet/mitchell-giles-xsnm/d2h4337"
                target="_blank"
                rel="noopener noreferrer"
                className="gold-flat-btn inline-flex items-center justify-center rounded-lg px-8 py-4 text-sm font-semibold tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
              >
                Book Your Strategy Call
              </a>

              <Link
                to="/case-studies/elite-football-agency"
                className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-sm font-semibold tracking-wide border border-white/50 text-white hover:bg-white/5 hover:border-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
              >
                View Case Studies
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="relative w-full max-w-md mx-auto"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden border-l-2 border-l-gold shadow-2xl shadow-black/60">
              <img
                src="https://iili.io/fynfkw7.jpg"
                alt="Mitchell Giles"
                className="w-full h-full object-cover object-top scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950/30 to-transparent" />

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="absolute bottom-4 right-4 left-auto max-w-[220px] bg-navy-950/70 backdrop-blur-xl rounded-lg p-4 border border-gold/25"
              >
                <p className="text-xs uppercase tracking-[0.15em] text-gold mb-1.5 font-sans">Proven Results</p>
                <p className="text-2xl font-bold text-white font-serif">$190,000</p>
                <p className="text-xs text-slate-300 mt-1 font-sans">Generated through email marketing in 2 years</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
