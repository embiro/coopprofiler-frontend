"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import IconifyIconClient from '@/component/IconifyIconClient';
import faqImage from '@/assets/images/team/4.png';

type FaqItem = {
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    question: 'How do we get our partner cooperatives to use this system?',
    answer: 'CoopProfiler makes it easy for cooperatives to adopt with intuitive design and comprehensive support. We offer onboarding assistance to help your partner cooperatives get up and running quickly.',
  },
  {
    question: 'Can we customize the data we see from partners?',
    answer: 'Yes! Create custom views and dashboards tailored to your specific information needs, with role-based access controls for your team.',
  },
  {
    question: 'How do we measure partnership ROI?',
    answer: 'The platform provides comprehensive analytics and reporting tools that track key performance indicators, allowing you to measure and compare ROI across all your partnerships.',
  },
  {
    question: 'Is our data kept separate from other partners?',
    answer: 'Absolutely. Each cooperative manages their own data with full privacy controls. You only see data they explicitly share with you, ensuring confidentiality.',
  },
];

const Faq = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndexes(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
      <div className="container">
        <div
          className="md:mb-12.5 text-center"
          data-aos="fade-up"
          data-aos-duration={600}
          data-aos-easing="ease-in-out"
        >
          <h2 className="lg:text-5.5xl md:text-4.6xl text-3.4xl mb-2.5">
            Frequently asked questions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 items-center gap-7.5">
          <div
            className="flex justify-center items-center"
            data-aos="fade-right"
            data-aos-delay={200}
          >
            <Image
              src={faqImage}
              alt="FAQ Illustration"
              className="rounded-2xl md:size-full h-auto w-auto"
            />
          </div>

          <div data-aos="fade-left" data-aos-delay={200}>
            <div className="md:space-y-7.5 space-y-5">
              {faqData.map((faq, index) => {
                const isOpen = openIndexes.includes(index);
                return (
                  <div
                    key={index}
                    className="bg-body-bg p-5 rounded-2xl transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex justify-between items-center gap-2.5 text-start"
                    >
                      <h3 className="text-start md:text-1.5xl text-xl">{faq.question}</h3>
                      <div>
                        <div
                          className={`size-7.5 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isOpen ? 'bg-[var(--color-primary)]' : 'bg-white'
                          }`}
                        >
                          <IconifyIconClient
                            icon={isOpen ? 'tabler:minus' : 'tabler:plus'}
                            className={`size-5 ${isOpen ? 'text-black' : 'text-black'}`}
                          />
                        </div>
                      </div>
                    </button>
                    {isOpen && (
                      <div className="w-full overflow-hidden transition-[height] duration-300">
                        <p className="mt-5">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

