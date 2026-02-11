import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { BUSINESS_INFO } from '../lib/business-info';

const serviceAreas = [
  {
    area: 'Gold Coast',
    description: 'Southport, Surfers Paradise, Broadbeach, Burleigh Heads, Robina, Nerang & surrounds',
  },
  {
    area: 'Brisbane',
    description: 'CBD, South Bank, Fortitude Valley, West End, Paddington & surrounds',
  },
  {
    area: 'South East Queensland',
    description: 'Ipswich, Logan, Redlands, Moreton Bay & the wider SEQ corridor',
  },
];

export default function LocalSeoSection() {
  return (
    <section className="bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(200,161,78,0.04),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center mb-14"
        >
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
            Local Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
            Gold Coast Marketing Consultant
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              Based in {BUSINESS_INFO.address.locality}, I work with businesses across the Gold Coast, Brisbane
              and South East Queensland. Whether you need email marketing, paid ads, or a complete digital
              strategy -- you get a local consultant who understands the Australian market.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14"
        >
          {serviceAreas.map((item) => (
            <motion.div
              key={item.area}
              variants={fadeInUp}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-gold/20 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-white font-serif">{item.area}</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed font-sans">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="mt-14 max-w-3xl mx-auto"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center font-serif">
            Why Local Businesses Choose Mitchell Giles
          </h3>
          <div className="text-slate-400 leading-relaxed space-y-4 font-sans text-center">
            <p>
              Finding a reliable marketing consultant on the Gold Coast can be frustrating. Most agencies
              lock you into long contracts, overcharge for basic deliverables, and treat your business like
              another number on a spreadsheet.
            </p>
            <p>
              I take a different approach. As a solo consultant based right here in{' '}
              {BUSINESS_INFO.address.locality}, I work with a select number of businesses at any one time.
              That means you get direct access to the person doing the work -- not a junior account manager
              reading from a script.
            </p>
            <p>
              Whether you are searching for{' '}
              <strong className="text-slate-200">email marketing near me</strong>,{' '}
              <strong className="text-slate-200">paid advertising on the Gold Coast</strong>, or a{' '}
              <strong className="text-slate-200">digital marketing consultant in South East Queensland</strong>
              , I can help you build a pipeline that actually delivers.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
