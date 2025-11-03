import Image from 'next/image';
import React from 'react';
import buildPartnerships from '@/assets/images/solutions/build_partnerships.png';
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
              <div className="w-full h-full">
                <Image
                  src={buildPartnerships}
                  alt="Trusted Relationships diagram"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
            </div>
            <div
              className="flex gap-2.5 justify-center flex-col"
              data-aos="fade-up"
              data-aos-duration={500}
              data-aos-easing="ease-in-out"
            >
              <h3 className="text-white lg:text-4.4xl md:text-4xl text-3xl mb-2.5">
                Build Stronger, More Effective Partnerships
              </h3>
              <p className="md:mb-7.5 mb-2.5 text-white">
                Access standardized, verified data from your partner cooperatives. Measure impact in
                real-time, make data-driven funding decisions, and strengthen relationships built on
                trust and transparency.
              </p>
              <div className="grid md:grid-cols-2 gap-5 my-2.5">
                <div className="flex gap-2.5 flex-col">
                  <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center">
                    <IconifyIconClient icon="tabler:shield-check" className="size-6 text-black" />
                  </div>
                  <h3 className="mb-2.5 lg:text-1.5xl text-xl text-white">Verified Impact Data</h3>
                  <p className="text-white">
                    Access transparent, auditable data that verifies the real impact of your
                    partnerships.
                  </p>
                </div>
                <div className="flex gap-2.5 flex-col">
                  <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center">
                    <IconifyIconClient icon="tabler:chart-line" className="size-6 text-black" />
                  </div>
                  <h3 className="mb-2.5 lg:text-1.5xl text-xl text-white">Real-Time Insights</h3>
                  <p className="text-white">
                    Monitor partnership performance continuously to optimize resources and maximize
                    impact.
                  </p>
                </div>
                <div className="flex gap-2.5 flex-col">
                  <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center">
                    <IconifyIconClient
                      icon="solar:dollar-minimalistic-linear"
                      className="size-6 text-black"
                    />
                  </div>
                  <h3 className="mb-2.5 lg:text-1.5xl text-xl text-white">ROI Clarity</h3>
                  <p className="text-white">
                    Measure return on investment clearly with comprehensive metrics and reporting.
                  </p>
                </div>
                <div className="flex gap-2.5 flex-col">
                  <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center">
                    <IconifyIconClient icon="tabler:users" className="size-6 text-black" />
                  </div>
                  <h3 className="mb-2.5 lg:text-1.5xl text-xl text-white">Trusted Relationships</h3>
                  <p className="text-white">
                    Build stronger partnerships through transparency, accountability, and shared
                    success.
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
