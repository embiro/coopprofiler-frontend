import Image from 'next/image';
import React from 'react';
import coopOperationsImage from '@/assets/images/primary_cooperatives/coop_operations.png';
import IconifyIconClient from '@/component/IconifyIconClient';

const Benefits = () => {
  return (
    <>
      <section className="bg-dark lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="grid lg:grid-cols-2 lg:gap-20 md:gap-20 gap-5">
            <div
              className="bg-white rounded-2xl  flex items-center justify-center"
              data-aos="fade-up"
              data-aos-duration={600}
              data-aos-easing="ease-in-out"
            >
              <Image
                src={coopOperationsImage}
                alt="Cooperative values and principles illustration showing personalized services, equitable distribution, evidence-based advocacy, and collective bargaining"
                className="rounded-2xl w-full"
              />
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
                From personalized member services to evidence-based advocacy, Coop Profiler helps
                your cooperative thrive while upholding cooperative values and principles.
              </p>
              <div className="grid md:grid-cols-2 gap-5 my-2.5">
                <div className="flex gap-2.5 flex-col">
                  <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center">
                    <IconifyIconClient
                      icon="solar:user-rounded-duotone"
                      className="size-6 text-black"
                    />
                  </div>
                  <h3 className="mb-2.5 lg:text-1.5xl text-xl text-white">Personalized Services</h3>
                  <p className="text-white">
                    Gain insights into individual member needs to offer tailored products and
                    services.
                  </p>
                </div>
                <div className="flex gap-2.5 flex-col">
                  <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center">
                    <IconifyIconClient
                      icon="solar:scale-broken-duotone"
                      className="size-6 text-black"
                    />
                  </div>
                  <h3 className="mb-2.5 lg:text-1.5xl text-xl text-white">
                    Equitable Distribution
                  </h3>
                  <p className="text-white">
                    Allocate resources more fairly and transparently based on member contributions.
                  </p>
                </div>
                <div className="flex gap-2.5 flex-col">
                  <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center">
                    <IconifyIconClient
                      icon="solar:presentation-graph-duotone"
                      className="size-6 text-black"
                    />
                  </div>
                  <h3 className="mb-2.5 lg:text-1.5xl text-xl text-white">
                    Evidence-Based Advocacy
                  </h3>
                  <p className="text-white">
                    Advocate to policy makers using real-time, accurate data from your cooperative.
                  </p>
                </div>
                <div className="flex gap-2.5 flex-col">
                  <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center">
                    <IconifyIconClient
                      icon="solar:users-group-two-rounded-duotone"
                      className="size-6 text-black"
                    />
                  </div>
                  <h3 className="mb-2.5 lg:text-1.5xl text-xl text-white">Collective Bargaining</h3>
                  <p className="text-white">
                    Aggregate data to negotiate better deals and services on behalf of all members.
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
