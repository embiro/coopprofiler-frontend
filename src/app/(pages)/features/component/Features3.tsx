import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';

type FeatureItem = {
  icon: string;
  title: string;
  description: string;
};

const featuresData: FeatureItem[] = [
  {
    icon: 'solar:users-group-rounded-outline',
    title: 'Member Management',
    description:
      'Go beyond simple lists. Gain a 360-degree view of your membership, track engagement, and manage profiles to build stronger, more connected community ties from one central dashboard.',
  },
  {
    icon: 'solar:history-outline',
    title: 'Historical Data Capture',
    description:
      'Secure your legacy and learn from your past. Digitize and access decades of records to understand long-term trends, preserve institutional memory, and build a resilient future.',
  },
  {
    icon: 'solar:document-text-outline',
    title: 'Customizable Forms',
    description:
      'Collect the exact data you need, your way. Build custom questionnaires and reports to capture unique insights for member feedback, compliance, or specific project monitoring.',
  },
  {
    icon: 'solar:code-2-outline',
    title: 'API Access',
    description:
      'Unlock limitless potential. Integrate CoopProfiler with your existing tools and build custom solutions with robust, secure API access, creating a seamless data ecosystem.',
  },
  {
    icon: 'solar:diploma-verified-outline',
    title: 'Share Certificate Issuance',
    description:
      'Streamline equity management with automated certificate generation. Issue, track, and manage share certificates digitally, ensuring compliance and providing members with secure proof of ownership.',
  },
];

const Feature3 = () => {
  return (
    <>
      <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
        <div className="container-small">
          <div
            className="lg:mb-12.5 text-center mb-7.5"
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
              Core Platform Features{' '}
            </h2>
            <p className="text-base mb-2.5">
              Explore the essential tools that drive cooperative resilience and growth.{' '}
            </p>
          </div>
          <div className="grid md:grid-cols-2 md:gap-7.5 gap-5">
            {featuresData.map((item, index) => (
              <div
                key={index}
                className="flex md:gap-4 md:flex-row gap-5 flex-col lg:p-10 p-5 bg-body-bg rounded-2xl"
                data-aos="fade-up"
                data-aos-delay={200 + index * 50}
                data-aos-duration={500}
                data-aos-easing="ease-in-out"
              >
                <div>
                  <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center">
                    <IconifyIconClient icon={item.icon} className="size-7 text-black" />
                  </div>
                </div>
                <div>
                  <h2 className="mb-2.5 md:text-1.5xl text-xl">{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature3;
