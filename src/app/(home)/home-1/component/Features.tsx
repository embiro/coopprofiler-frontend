import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';

type BenefitType = {
  title: string;
  description: string;
  icon: string;
  features: string[];
};

const benefitsData: BenefitType[] = [
  {
    title: 'Cooperative Statistics and Compliance',
    description:
      'Automate compliance tracking and regulatory reporting to stay ahead of requirements and reduce administrative burden.',
    icon: 'solar:shield-check-bold',
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
    icon: 'solar:database-bold',
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
    icon: 'solar:users-group-two-rounded-bold',
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
      <section className="lg:py-25 md:py-22.5 py-17.5 bg-white">
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

          <div className="grid md:grid-cols-3 lg:gap-10 gap-7.5">
            {benefitsData.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl lg:p-10 p-7.5 border border-neutral-200 hover:border-primary hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 150}
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
              >
                <div className="md:size-15 size-12.5 mb-5 bg-primary/10 rounded-full flex items-center justify-center">
                  <IconifyIconClient
                    icon={benefit.icon}
                    className="lg:size-7.5 size-6.5 text-dark"
                  />
                </div>
                <h3 className="lg:text-2.5xl text-1.5xl mb-2.5">{benefit.title}</h3>
                <p className="text-base mb-5 text-neutral-600">{benefit.description}</p>
                <div className="gap-3.5 flex flex-col">
                  {benefit.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-2.5">
                      <IconifyIconClient
                        icon="tabler:circle-check"
                        className="size-6 text-primary flex-shrink-0"
                      />
                      <div className="text-base">{feature}</div>
                    </div>
                  ))}
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
