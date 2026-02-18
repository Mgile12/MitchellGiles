'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.06] overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className={`text-base sm:text-lg font-semibold transition-colors duration-200 font-sans ${
          isOpen ? 'text-gold' : 'text-white group-hover:text-gold/80'
        }`}>
          {question}
        </span>
        <div className={`transition-transform duration-300 ease-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <ChevronDown
            className={`w-5 h-5 flex-shrink-0 transition-colors duration-200 ${
              isOpen ? 'text-gold' : 'text-slate-500 group-hover:text-gold/60'
            }`}
          />
        </div>
      </button>

      <div className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="pb-6">
            <div className="border-l-2 border-gold/30 pl-4">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                {answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const faqs: FAQItemProps[] = [
  {
    question: 'Is Meta advertising still worth investing in?',
    answer: "Yes — if structured correctly with strong creative and accurate signal tracking. Meta's machine learning is extremely powerful when fed quality data. The issue for most businesses is not the platform — it's poor signal integrity, creative fatigue and agencies that don't understand how the underlying systems work.",
  },
  {
    question: 'Why are my Meta ads getting more expensive?',
    answer: 'Rising CPAs on Meta are usually caused by one or more of these: degraded signal quality post-iOS changes, creative fatigue where audiences have seen the same ads too many times, audience saturation in over-constrained targeting, or budget scaling without stabilising conversion data first. Each requires a different fix.',
  },
  {
    question: 'What is Conversion API and why does it matter?',
    answer: "Conversion API (CAPI) sends server-side conversion data directly to Meta, bypassing browser-based tracking limitations introduced by iOS privacy changes. Without CAPI, Meta's Lattice system receives incomplete or delayed signals — which degrades optimisation. With CAPI properly configured, attribution accuracy improves and the algorithm has better data to work with.",
  },
  {
    question: 'How do Andromeda, GEM and Lattice affect my campaigns?',
    answer: 'Andromeda determines how your ads are ranked and priced in every auction — strong creative and clean conversion data improves your position. GEM influences how Meta distributes your campaigns geographically and across behavioural clusters — over-constraining targeting can prevent it from finding your best audiences. Lattice interprets your conversion signals to model future performance — if tracking is broken, the entire optimisation loop breaks down.',
  },
  {
    question: 'How long before Meta ads become profitable?',
    answer: 'The testing and learning phase typically takes 4–8 weeks depending on budget level and conversion volume. Campaigns need at least 50 conversion events per week at the ad set level for the algorithm to exit the learning phase. Businesses with strong offers, clean tracking and adequate budget tend to reach profitability faster.',
  },
  {
    question: 'Should I run broad targeting or detailed interest targeting?',
    answer: "Often broad targeting outperforms detailed interest stacking in 2025. Meta's AI performs significantly better when given fewer restrictions and more conversion data to learn from. However, this only holds true when signal quality is strong. Without clean CAPI data and consistent conversion volume, broad targeting simply wastes budget faster.",
  },
  {
    question: 'Do you work with businesses outside the Gold Coast and Brisbane?',
    answer: 'Yes. While we have particular expertise in the Gold Coast and Brisbane market dynamics, we work with service businesses and eCommerce brands across Australia. The Meta Ads fundamentals — signal integrity, creative systems and algorithmic structure — apply regardless of geography.',
  },
  {
    question: 'What budget do I need to run Meta ads effectively?',
    answer: 'We work best with businesses spending $3,000 to $50,000+ per month on Meta. Below $3,000 per month, it is difficult to generate the conversion volume needed for Lattice to model effectively and exit the learning phase consistently. That said, the strategy and structure matter more than raw spend at any level.',
  },
];

export default function MetaAdsFAQ() {
  return (
    <section className="bg-navy-900 text-slate-50" aria-labelledby="meta-faq-heading">
      <AnimateOnScroll className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="mb-12">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
            Common Questions
          </span>
          <h2 id="meta-faq-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-serif">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06] text-center">
          <p className="text-base text-slate-400 font-sans">
            Ready to move fast?{' '}
            <a
              href="tel:0474870535"
              className="font-semibold text-gold hover:text-gold/80 underline underline-offset-2 transition-colors duration-150"
            >
              Jump on a call
            </a>
          </p>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
