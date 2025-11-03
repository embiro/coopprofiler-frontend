import React from 'react';
import Image from 'next/image';

// @ts-ignore - .jfif files are not in TypeScript's default image types
import uncst from '@/assets/images/partners/UNCST.jpg';
import ACISA from '@/assets/images/partners/ACISA.jpg';
import burasa from '@/assets/images/partners/burasa.png';

const partnerLogos = [
  { src: uncst, alt: 'UNCST' },
  { src: ACISA, alt: 'ACISA' },
  { src: burasa, alt: 'Burasa' },
];

const SocialProof = () => {
  return (
    <>
      <section className="bg-white py-12.5 lg:py-17.5">
        <div className="container">
          <div className="text-center mb-10">
            <p className="text-base text-neutral-600 mb-5">Our trusted partners</p>
            <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-15 opacity-60">
              {partnerLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-duration="500"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    className="h-16 lg:h-20 w-auto object-contain transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialProof;
