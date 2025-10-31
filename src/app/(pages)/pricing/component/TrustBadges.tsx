import React from 'react';
import Image from 'next/image';
import nitaLogo from '@/assets/images/partners/nita.svg';
import pdpoLogo from '@/assets/images/partners/PDPO.png';

const TrustBadges = () => {
  return (
    <section className="bg-body-bg lg:py-25 md:py-22.5 py-17.5">
      <div className="container">
        <div
          className="lg:mb-12.5 text-center mb-7.5"
          data-aos="fade-up"
          data-aos-duration={500}
          data-aos-easing="ease-in-out"
        >
          <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
            Licensed & Compliant
          </h2>
          <p className="text-base mb-2.5">
            Fully licensed and compliant with Ugandan regulations
          </p>
        </div>

        <div
          className="flex flex-wrap justify-center items-center gap-10 md:gap-20"
          data-aos="fade-up"
          data-aos-delay={100}
          data-aos-duration={500}
          data-aos-easing="ease-in-out"
        >
          <div className="bg-white rounded-2xl p-8 flex items-center justify-center min-w-40">
            <Image
              src={nitaLogo}
              alt="National Information Technology Authority - Uganda"
              className="max-w-48 h-auto"
            />
          </div>
          <div className="bg-white rounded-2xl p-8 flex items-center justify-center min-w-40">
            <Image
              src={pdpoLogo}
              alt="Personal Data Protection Office"
              className="max-w-48 h-auto"
            />
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-dark text-sm">
            CoopProfiler is fully licensed by the National Information Technology Authority and
            compliant with the Personal Data Protection Office regulations
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;

