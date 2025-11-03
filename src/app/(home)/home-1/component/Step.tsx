import Image from 'next/image';
import React from 'react';
import handUsingTech from '@/assets/images/landing_page/hand_using_tech.png';
import IconifyIconClient from '@/component/IconifyIconClient';

type StepType = {
  number: string;
  title: string;
  des: string;
  icon: string;
};

const stepData: StepType[] = [
  {
    number: '01',
    title: 'Collect Data',
    des: 'Gather comprehensive member information, compliance data, and operational metrics through intuitive forms and mobile interfaces.',
    icon: 'solar:smartphone-2-bold',
  },
  {
    number: '02',
    title: 'Analyze & Report',
    des: 'Transform raw data into actionable insights with advanced analytics, automated reporting, and real-time dashboards.',
    icon: 'solar:chart-2-bold',
  },
  {
    number: '03',
    title: 'Build Resilience',
    des: 'Strengthen your cooperative through data-driven decision-making, compliance management, and sustainable growth strategies.',
    icon: 'solar:shield-check-bold',
  },
];

const Step = () => {
  return (
    <>
      <section id="how-it-works" className="bg-white lg:py-25 md:py-22.5 py-17.5 ">
        <div className="container">
          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
              How It Works{' '}
            </div>
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
              Simple, Powerful, Effective
            </h2>
            <p className="text-base mb-2.5 max-w-2xl mx-auto">
              Three simple steps to transform your cooperative operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 md:gap-12.5 my-12.5 gap-7.5">
            {stepData.map((item, idx) => (
              <div
                key={idx}
                className="text-center"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay={idx * 150}
                data-aos-easing="ease-in-out"
              >
                <div className="mb-5 flex justify-center">
                  <div className="lg:size-20 size-16 bg-primary/10 rounded-full inline-flex items-center justify-center">
                    <IconifyIconClient icon={item.icon} className="lg:size-10 size-8 text-dark" />
                  </div>
                </div>
                <div className="mb-2.5">
                  <span className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm text-dark">
                    {item.number}
                  </span>
                </div>
                <h3 className="lg:text-2.5xl text-1.5xl mb-2.5">{item.title}</h3>
                <p className="text-base mb-2.5 text-neutral-600">{item.des}</p>
              </div>
            ))}
          </div>

          <div className="w-full">
            <Image
              src={handUsingTech}
              className="rounded-2xl w-full max-h-[350px] object-cover"
              alt="Hand using tablet with CoopProfiler"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Step;
