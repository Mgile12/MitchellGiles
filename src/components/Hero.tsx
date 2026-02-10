import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { fadeInUp } from '../utils/animations';

export default function Hero() {
  return (
    <section
      className="bg-slate-950 text-slate-50 relative overflow-hidden"
      aria-labelledby="hero-headline"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,54,255,0.08)_0%,_transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="grid gap-12 lg:gap-16 md:grid-cols-2 md:items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0036FF] mb-5"
            >
              For Aussie business owners
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
              id="hero-headline"
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.15]"
            >
              If you've been burned by marketers before, good.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
              className="mt-4 text-lg sm:text-xl text-slate-300 font-normal tracking-wide leading-relaxed"
            >
              You're exactly who I work best with.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
              className="mt-8 space-y-5"
            >
              <p className="text-base sm:text-lg text-slate-400 leading-[1.75] tracking-wide font-normal">
                I help small Aussie businesses take over their industry without the agency crap, the mystery reports, or the disappearing acts.
              </p>

              <p className="text-base sm:text-lg text-slate-400 leading-[1.75] tracking-wide font-normal">
                No buzzwords.<br />
                No "trust the process".<br />
                No "we're optimising".
              </p>

              <p className="text-base sm:text-lg text-slate-400 leading-[1.75] tracking-wide font-normal">
                Just a pipeline that actually works.
              </p>

              <p className="text-base sm:text-lg text-slate-300 leading-[1.75] tracking-wide font-medium">
                And if I can't show you where your leads came from in 90 days, I don't want your money.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.25 }}
              className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 justify-center md:justify-start"
            >
              <a
                href="https://app.usemotion.com/meet/mitchell-giles-xsnm/d2h4337"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold tracking-wide bg-[#0036FF] text-white hover:bg-[#0029CC] hover:shadow-[0_0_30px_rgba(0,54,255,0.3)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0036FF] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Book Your Reality Check Call
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                to="/case-studies/elite-football-agency"
                className="inline-flex items-center justify-center rounded-lg px-7 py-3.5 text-sm font-medium tracking-wide border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                View Case Studies
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
              className="mt-10 pt-8 border-t border-slate-800/60"
            >
              <p className="text-xs uppercase tracking-[0.15em] text-slate-600 mb-3 text-center md:text-left">
                Recent client result
              </p>
              <p className="text-sm text-slate-400 italic text-center md:text-left">
                "This was the first year I actually felt successful."
                <span className="not-italic text-slate-600 ml-2">-- Alan, Elite Football Agency</span>
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="relative w-full max-w-md mx-auto"
          >
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
              <img
                src="https://iili.io/fynfkw7.jpg"
                alt="Mitchell Giles"
                className="w-full h-full object-cover object-top scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10"
                >
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-400 mb-1">Proven Results</p>
                  <p className="text-2xl font-bold text-white">$190,000</p>
                  <p className="text-sm text-slate-300 mt-0.5">Printed from email marketing in 2 years</p>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.55 }}
              className="absolute -top-3 -right-3 rounded-lg bg-[#0036FF] px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-[#0036FF]/30 tracking-wide"
            >
              90-day guarantee
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
