import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

const testimonials = [
  {
    quote: "Finally someone who speaks human. Not marketing-ese.",
    name: "Jarryd, Carpenter",
  },
  {
    quote: "He treated my money like it was his. Rare these days.",
    name: "Chris, Landscaper",
  },
  {
    quote: "I've hired 4 agencies. Mitchell is the only one who showed me where the leads came from.",
    name: "Toby, Gym Owner",
  },
  {
    quote: "3 weeks in and I've already hired another guy.",
    name: "Rhys, Plumber",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white text-slate-900">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      >
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-serif">
            What other owners say (so you don't just take my word for it).
          </h2>
          <div className="mt-4 space-y-2">
            <p className="text-base sm:text-lg text-slate-600 font-sans">
              I can talk strategy all day.
            </p>
            <p className="text-base sm:text-lg text-slate-600 font-sans">
              This is what it looks like on the other side of the screen.
            </p>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="h-full rounded-xl border border-slate-200 bg-slate-50 p-6 flex flex-col shadow-sm hover:shadow-md hover:border-gold/30 transition-all duration-150"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, si) => (
                  <span key={si} className="text-gold text-sm">&#9733;</span>
                ))}
              </div>
              <p className="text-base sm:text-lg font-semibold text-slate-900 mb-4 font-sans">
                "{t.quote}"
              </p>
              <div className="mt-auto pt-4 border-t border-gold/20 flex flex-col">
                <span className="text-sm font-semibold text-slate-900 font-sans">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
