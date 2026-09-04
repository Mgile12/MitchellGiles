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
    question: 'How do you get a business into the top 3 on Google Maps in 14 days?',
    answer:
      'Your Google Business Profile and your website are two magnets. I make both strong at the same time. The exact method stays with me until we work together, but the heatmaps above are what it produces.',
  },
  {
    question: 'Are you an agency or a consultant?',
    answer:
      'A consultant with a small team behind me. You deal with me directly and I do the thinking. The team reviews everything I produce before it reaches you.',
  },
  {
    question: 'Why talk to you before spending more on marketing?',
    answer:
      "Because most businesses don't need more marketing. They need to know what's broken. One call usually shows where leads are being lost, where ad spend is wasted, and what the easy money is.",
  },
  {
    question: 'What do you actually do?',
    answer:
      "Whatever the choke point is. Google Business Profile, ads, landing pages, email follow-up, automation, copy. I don't sell packages. I fix the thing that's stopping growth.",
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
