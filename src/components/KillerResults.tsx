import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, BarChart3, Zap, Mail, ShoppingCart, Tag } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const results = [
  {
    image: '/image.png',
    title: 'Multi-Campaign Performance',
    description: 'Managed 3 high-performing ad sets with 67 website purchases and $30K+ in value.',
    metric: '6.88x',
    metricLabel: 'ROAS',
    icon: BarChart3,
  },
  {
    image: '/Screenshot 2025-11-20 200216.png',
    title: 'Automation That Actually Works',
    description: 'Complete order fulfillment automation from Shopify to delivery',
    metric: '100%',
    metricLabel: 'Automated',
    icon: Zap,
  },
  {
    image: '/Screenshot 2025-08-04 132125.png',
    title: 'ROAS That Makes Sense',
    description: '6.88 ROAS across multiple campaigns with $4.4K spend. This result was in 3hrs.',
    metric: '$82K',
    metricLabel: 'in 3hrs',
    icon: TrendingUp,
  },
  {
    image: '/files_7126411-1763632304045-Screenshot 2025-07-24 143236.png',
    title: 'Email Marketing That Converts',
    description: '72% open rate, 10.3% click rate. Email performance that actually drives action.',
    metric: '72%',
    metricLabel: 'Open Rate',
    icon: Mail,
  },
  {
    image: '/files_7126411-1763632208203-Before and After Image Youtube Thumbnail (3).png',
    title: 'Yearly Revenue Growth',
    description: '$425K total sales with 436% growth. 1,801 orders, 1,425 bookings.',
    metric: '$425K',
    metricLabel: 'Annual Sales',
    icon: ShoppingCart,
  },
  {
    image: '/files_7126411-1763632208151-Before and After Image Youtube Thumbnail (4).png',
    title: '7-Day Sales Surge',
    description: '$100.3K in weekly sales with 49 orders and 87 form submissions.',
    metric: '$100K',
    metricLabel: 'Weekly Sales',
    icon: TrendingUp,
  },
  {
    image: '/files_7126411-1763632208250-Before and After Image Youtube Thumbnail (5).png',
    title: 'Before & After Transformation',
    description: 'From 49 tickets to 88 and $25K+ in packed Melbourne Draft events. Real transformation.',
    metric: '$25K+',
    metricLabel: 'Event Revenue',
    icon: Tag,
  }
];

export default function KillerResults() {
  return (
    <section className="bg-navy-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 text-gold rounded-full mb-6 font-semibold text-sm"
          >
            <BarChart3 className="w-4 h-4" />
            Real Results
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 font-serif">
            Killer Results That Matter
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto font-sans">
            Not vanity metrics. Real revenue, real automation, real ROI. This is what happens when you stop messing around.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="space-y-12 sm:space-y-16"
        >
          {results.map((result, index) => (
            <ResultCard key={index} result={result} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16 sm:mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gold text-navy-950 font-bold rounded-xl hover:bg-gold-light transition-colors duration-200 shadow-lg hover:shadow-gold/20 text-lg font-sans"
          >
            Get Results Like These
          </motion.button>
          <p className="mt-4 text-sm text-slate-500 font-sans">
            Your numbers could be here. Let's talk.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

interface ResultCardProps {
  result: typeof results[number];
  index: number;
}

function ResultCard({ result, index }: ResultCardProps) {
  const Icon = result.icon;

  return (
    <motion.div
      variants={fadeInUp}
      className={`flex flex-col ${
        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } gap-8 lg:gap-12 items-center`}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="w-full lg:w-1/2"
      >
        <motion.div
          className="relative group cursor-pointer"
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-gold/30 to-gold-dark/30 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
          />
          <motion.div
            className="relative rounded-xl overflow-hidden shadow-xl border border-white/10"
            whileHover={{ boxShadow: '0 20px 40px rgba(200,161,78,0.15)' }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            />
            <img
              src={result.image}
              alt={result.title}
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="w-full lg:w-1/2 space-y-6">
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gold/10 border border-gold/30 text-gold mb-4"
          >
            <Icon className="w-7 h-7" />
          </motion.div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-serif">
            {result.title}
          </h3>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-sans">
            {result.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          className="inline-block px-6 py-4 rounded-xl bg-gold/10 border-2 border-gold/30"
        >
          <div className="flex items-baseline gap-2">
            <span className="text-4xl sm:text-5xl font-bold text-gold font-serif">
              {result.metric}
            </span>
          </div>
          <p className="text-sm font-semibold mt-1 text-gold/70 font-sans">
            {result.metricLabel}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-4 border-t border-white/10"
        >
          <p className="text-sm text-slate-500 italic font-sans">
            Real data. Real clients. Real impact.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
