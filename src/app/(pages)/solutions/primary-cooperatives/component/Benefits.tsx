import Image from 'next/image';
import React from 'react';
import three from '@/assets/images/element/3.svg';
import six from '@/assets/images/element/6.svg';
import one from '@/assets/images/element/1.svg';
import IconifyIconClient from '@/component/IconifyIconClient';

const Benefits = () => {
  return (
    <>
      <section className="bg-dark lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="grid lg:grid-cols-2 lg:gap-20 md:gap-20 gap-5">
            <div
              className="bg-white rounded-2xl p-5"
              data-aos="fade-up"
              data-aos-duration={600}
              data-aos-easing="ease-in-out"
            >
              <div className="grid grid-cols-2 gap-5 items-center">
                <div className="flex flex-col gap-5">
                  <Image src={three} alt="" className="border border-neutral-200 rounded-2xl" />
                  <Image src={six} alt="" className="border border-neutral-200 rounded-2xl" />
                </div>
                <div>
                  <Image src={one} alt="" className="size-full" />
                </div>
              </div>
            </div>
            <div
              className="flex gap-2.5 justify-center flex-col"
              data-aos="fade-up"
              data-aos-duration={500}
              data-aos-easing="ease-in-out"
            >
              <h3 className="text-white lg:text-4.4xl md:text-4xl text-3xl mb-2.5">
                Transform Your Cooperative Operations
              </h3>
              <p className="md:mb-7.5 mb-2.5 text-white">
                Gain a single source of truth for your entire cooperative. Make confident, data-backed decisions, collaborate with your partners using professional reports, and prove your value to stakeholders.
              </p>
              <div className="grid md:grid-cols-2 gap-5 my-2.5">
                <div className="flex gap-2.5 flex-col">
                  <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center">
                    <IconifyIconClient icon="tabler:check" className="size-6 text-black" />
                  </div>
                  <h3 className="mb-2.5 lg:text-1.5xl text-xl text-white">Single Source of Truth</h3>
                  <p className="text-white">
                    All your member data in one secure, organized system accessible from anywhere.
                  </p>
                </div>
                <div className="flex gap-2.5 flex-col">
                  <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center">
                    <IconifyIconClient icon="solar:chart-square-linear" className="size-6 text-black" />
                  </div>
                  <h3 className="mb-2.5 lg:text-1.5xl text-xl text-white">Data-Driven Decisions</h3>
                  <p className="text-white">
                    Make confident choices backed by real insights and comprehensive analytics.
                  </p>
                </div>
                <div className="flex gap-2.5 flex-col">
                  <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center">
                    <IconifyIconClient icon="solar:document-linear" className="size-6 text-black" />
                  </div>
                  <h3 className="mb-2.5 lg:text-1.5xl text-xl text-white">Professional Reports</h3>
                  <p className="text-white">
                    Impress funders and stakeholders with comprehensive, professional reports.
                  </p>
                </div>
                <div className="flex gap-2.5 flex-col">
                  <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center">
                    <IconifyIconClient icon="solar:handshake-linear" className="size-6 text-black" />
                  </div>
                  <h3 className="mb-2.5 lg:text-1.5xl text-xl text-white">Prove Your Impact</h3>
                  <p className="text-white">
                    Demonstrate your cooperative's value and impact with clear, compelling data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;

