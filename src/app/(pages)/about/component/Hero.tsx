import React from 'react';
import About from '@/assets/images/about/11.png';
import Image from 'next/image';
import IconifyIconClient from '@/component/IconifyIconClient';

const Hero = () => {
  return (
    <>
      <section className="bg-white lg:pb-25 pt-12.5 md:pb-22.5 py-17.5">
        <div className="container">
          <div className="grid lg:grid-cols-2 lg:gap-25 md:gap-5">
            <div data-aos="fade-right" data-aos-duration={600} data-aos-easing="ease-in-out">
              <div>
                <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
                  Why Coop Profiler
                </div>
                <h2 className="mb-2.5 lg:text-6xl md:text-5.5xl text-4xl">
                  Is Your Co-op Data Working For You, or Against You?
                </h2>
                <p className="lg:mb-10 mb-5">
                  Are you tired of making decisions in the dark? Are you caught off-guard by disruptions because you don't have a holistic view of your members' or your cooperative's health?
                </p>
              </div>
              <div className="lg:pt-10 pt-5 flex gap-5 border-t border-neutral-200">
                <div>
                  <h2 className="md:text-5.5xl">100%</h2>
                </div>
                <div>
                  <div className="flex gap-1.5 mb-1">
                    <IconifyIconClient icon="tabler:star-filled" className="lg:size-5 text-yellow-400" />
                    <IconifyIconClient icon="tabler:star-filled" className="lg:size-5 text-yellow-400" />
                    <IconifyIconClient icon="tabler:star-filled" className="lg:size-5 text-yellow-400" />
                    <IconifyIconClient icon="tabler:star-filled" className="lg:size-5 text-yellow-400" />
                    <IconifyIconClient icon="tabler:star-filled" className="lg:size-5 text-yellow-400" />
                  </div>
                  <p>Cooperative-focused</p>
                </div>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-duration={600} data-aos-easing="ease-in-out">
              <Image src={About} alt="Cooperative data management" className="rounded-2xl" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
