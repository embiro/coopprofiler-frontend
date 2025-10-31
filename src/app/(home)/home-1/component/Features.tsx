import React from 'react';
import Image, { type StaticImageData } from 'next/image';
import IconifyIconClient from '@/component/IconifyIconClient';
import statsAndCompliance from '@/assets/images/landing_page/stats_and_compliance.png';
import unifyData from '@/assets/images/landing_page/unify_data.png';
import profiling from '@/assets/images/landing_page/profiling.png';

type BenefitType = {
  title: string;
  description: string;
  image: StaticImageData;
  features: string[];
};

const benefitsData: BenefitType[] = [
  {
    title: 'Cooperative Statistics and Compliance',
    description:
      'Automate compliance tracking and regulatory reporting to stay ahead of requirements and reduce administrative burden.',
    image: statsAndCompliance,
    features: [
      'Automated compliance tracking',
      'Regulatory report generation',
      'Audit trail management',
      'Real-time compliance monitoring',
    ],
  },
  {
    title: 'Unify Your Data, Unlock Your Insights',
    description:
      'A centralized cloud-based database that serves as a single source of truth for all member data, operational metrics, and organizational information across your cooperative network.',
    image: unifyData,
    features: [
      'Unified member profiles',
      'Cross-cooperative data sharing',
      'Secure cloud storage',
      'Real-time data synchronization',
    ],
  },
  {
    title: 'Resilience Profiling',
    description:
      'Build stronger, more sustainable cooperatives through comprehensive member profiling and analytics that inform strategic decision-making and growth planning.',
    image: profiling,
    features: [
      'Detailed member analytics',
      'Engagement tracking',
      'Demographic insights',
      'Custom reporting tools',
    ],
  },
];

const Features = () => {
  return (
    <>
      <section className="lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="lg:mb-12.5 text-center mb-7.5">
            <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
              Key Benefits{' '}
            </div>
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
              Everything you need to succeed
            </h2>
            <p className="text-base mb-2.5 max-w-2xl mx-auto">
              Powerful tools designed specifically for cooperative management and growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 lg:gap-12.5 items-start">
            {benefitsData.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-neutral-200 hover:border-primary hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-out lg:p-12.5 md:p-10 p-7.5"
                style={{ willChange: 'transform' }}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
              >
                {/* Title - Full Width at Top */}
                <h3 className="lg:text-2.5xl text-1.5xl mb-6 md:mb-8">{benefit.title}</h3>

                {/* Card Content - Vertical Hover Behavior */}
                <div className="group relative overflow-hidden rounded-xl flex flex-col">
                  {/* Description and Features Panel - Top, Expands on Hover */}
                  <div className="max-h-none md:max-h-0 md:group-hover:max-h-[600px] transition-all duration-1000 ease-in-out overflow-hidden bg-white/95 backdrop-blur-sm rounded-b-xl md:rounded-t-xl order-2 md:order-1">
                    <div className="p-6 w-full">
                      <p className="text-base mb-6 text-neutral-600 whitespace-normal max-w-full break-words">
                        {benefit.description}
                      </p>
                      <div className="gap-3.5 flex flex-col max-w-full">
                        {benefit.features.map((feature, idx) => (
                          <div key={idx} className="flex gap-2.5 max-w-full">
                            <IconifyIconClient
                              icon="tabler:circle-check"
                              className="size-6 text-primary flex-shrink-0"
                            />
                            <div className="text-base break-words">{feature}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Image - Moves Down on Hover */}
                  <div className="w-full relative overflow-hidden flex-shrink-0 order-1 md:order-2">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-auto rounded-t-xl md:rounded-xl md:rounded-t-none"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
