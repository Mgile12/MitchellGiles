import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeInUp } from '../utils/animations';

export default function Hero() {
  return (
    <section
      className="bg-slate-950 text-slate-50"
      aria-labelledby="hero-headline"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            {/* Eyebrow Label */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
              className="text-xs font-semibold uppercase tracking-wide text-orange-400 mb-3"
            >
              For Aussie business owners
            </motion.p>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
              id="hero-headline"
              className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-50"
            >
              If you've been burned by marketers before, good.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
              className="mt-3 text-lg text-slate-200"
            >
              You're exactly who I work best with.
            </motion.p>

            {/* Supporting Body Copy */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
              className="mt-6 space-y-4"
            >
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                I help small Aussie businesses take over their industry without the agency crap, the mystery reports, or the disappearing acts.
              </p>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                No buzzwords.<br />
                No "trust the process".<br />
                No "we're optimising".
              </p>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Just a pipeline that actually works.
              </p>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                And if I can't show you where your leads came from in 90 days, I don't want your money.
              </p>
            </motion.div>

            {/* CTA Row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.25 }}
              className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 justify-center md:justify-start"
            >
              <a
                href="https://app.usemotion.com/meet/mitchell-giles-xsnm/d2h4337"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold bg-orange-500 text-white hover:bg-orange-600 hover:scale-105 hover:shadow-lg transition-transform transition-shadow duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Book Your Reality Check Call
              </a>

              <Link
                to="/case-studies/elite-football-agency"
                className="inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold border border-slate-600 text-slate-50 hover:bg-slate-900/60 hover:scale-105 hover:shadow-lg transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                View Case Studies
              </Link>
            </motion.div>

          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
            className="relative w-full max-w-sm mx-auto"
          >
            <div className="aspect-[4/5] w-full rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl overflow-hidden">
              <img
                src="/Mitchell Giles Marketing  copy.jpg"
                alt="Mitchell Giles"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Corner Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.5 }}
              className="absolute -top-3 -right-3 rounded-md bg-orange-500 px-3 py-1 text-xs font-semibold text-white shadow"
            >
              90-day guarantee
            </motion.div>

            {/* Mini Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
              className="mt-4 text-center text-sm text-slate-400"
            >
              <p>Recently generated $124K in email marketing</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
