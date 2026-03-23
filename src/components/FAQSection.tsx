'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';

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
        <div
          className={`transition-transform duration-300 ease-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        >
          <ChevronDown
            className={`w-5 h-5 flex-shrink-0 transition-colors duration-200 ${
              isOpen ? 'text-gold' : 'text-slate-500 group-hover:text-gold/60'
            }`}
          />
        </div>
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
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

const faqs = [
  {
    question: "How do you rank businesses in the top 3 on GMB in 14 days?",
    answer: "Think of your GMB profile and website as two magnets. I make both extremely powerful. The exact method is proprietary — you'll find out exactly what that means when we work together."
  },
  {
    question: "What do we do?",
    answer: "We help businesses stop leaking revenue through weak ads, flat copy, slow websites, and broken follow-up. Then we fix the pipeline so more of your traffic turns into leads, calls, and sales."
  },
  {
    question: "Why is it a good idea to get in touch with us?",
    answer: "Because most businesses do not need more random marketing. They need to know what is actually broken. One conversation can show you where you are losing leads, wasting ad spend, or leaving easy money on the table."
  },
  {
    question: "How do we help companies?",
    answer: "First, we find the choke point. Then we fix it. That might mean better ads, sharper messaging, stronger landing pages, local SEO, email follow-up, or automation. Whatever is stopping growth gets addressed, so revenue becomes more predictable."
  },
];

export default function FAQSection() {
  return (
    <section className="bg-navy-900 text-slate-50" aria-labelledby="faq-heading">
      <AnimateOnScroll className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="mb-12">
          <h3 id="faq-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-serif">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
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
