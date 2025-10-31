'use client';

import React, { useState } from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';

type FaqItem = {
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    question: 'How is pricing calculated?',
    answer:
      'Pricing is based on a monthly base fee plus per-member charges. Use our interactive calculator above to determine your exact pricing based on your tier and number of members.',
  },
  {
    question: 'Are there any setup fees or hidden costs?',
    answer:
      'No. Our pricing is completely transparent - what you see is what you pay. There are no setup fees, hidden costs, or surprise charges.',
  },
  {
    question: 'Can I change my plan later?',
    answer:
      'Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be reflected in your next billing cycle.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept credit cards, bank transfers, and mobile money payments. Contact us for specific payment options available in your region.',
  },
  {
    question: 'Do you offer annual billing with discounts?',
    answer:
      'Yes, we offer annual billing with a 20% discount. This can significantly reduce your monthly costs over the year.',
  },
  {
    question: 'What happens if I exceed my member limit?',
    answer:
      'We automatically adjust your bill based on your actual usage. You\'ll be charged the per-member rate for any additional members.',
  },
  {
    question: 'Is there a trial period?',
    answer:
      'Yes, we offer a 14-day free trial with full access to all features for your selected tier. No credit card required to start.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer:
      'Absolutely. You can cancel your subscription at any time from your account settings. There are no long-term contracts or cancellation fees.',
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<Set<number>>(new Set());

  const toggleAccordion = (index: number) => {
    const updatedSet = new Set(openIndex);
    if (updatedSet.has(index)) {
      updatedSet.delete(index);
    } else {
      updatedSet.add(index);
    }
    setOpenIndex(updatedSet);
  };

  return (
    <section className="bg-white lg:pb-25 md:pb-22.5 pb-17.5">
      <div className="container">
        <div
          className="md:mb-12.5 mb-7.5 text-center"
          data-aos="fade-up"
          data-aos-duration={500}
          data-aos-easing="ease-in-out"
        >
          <h2 className="lg:text-5.5xl md:text-4.6xl text-3.4xl mb-2.5">
            Frequently asked questions
          </h2>
        </div>

        <div data-aos="fade-up" data-aos-duration={500} data-aos-easing="ease-in-out">
          <div className="md:space-y-7.5 space-y-5 lg:w-1/2 mx-auto">
            {faqData.map((faq, index) => {
              const isOpen = openIndex.has(index);

              return (
                <div key={index} className="bg-body-bg p-5 rounded-2xl transition-all duration-300">
                  <button
                    className="w-full flex justify-between items-center gap-2.5 text-start"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                  >
                    <h3 className="md:text-1.5xl text-xl">{faq.question}</h3>
                    <div
                      className={`size-7.5 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen ? 'bg-[var(--color-primary)]' : 'bg-white'
                      }`}
                    >
                      <IconifyIconClient
                        icon={isOpen ? 'tabler:minus' : 'tabler:plus'}
                        className="size-5 text-dark"
                      />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="mt-5">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

