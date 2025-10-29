import React from 'react';
import Image from 'next/image';

// Placeholder for partner logos - you'll need to replace these with actual partner logo images
// For now, using existing client logos as placeholders
import client1 from '@/assets/images/client/1.svg';
import client2 from '@/assets/images/client/2.svg';
import client3 from '@/assets/images/client/3.svg';
import client4 from '@/assets/images/client/4.svg';

const partnerLogos = [
  { src: client1, alt: 'Partner 1' },
  { src: client2, alt: 'Partner 2' },
  { src: client3, alt: 'Partner 3' },
  { src: client4, alt: 'Partner 4' },
];

const SocialProof = () => {
  return (
    <>
      <section className="bg-white py-12.5 lg:py-17.5">
        <div className="container">
          <div className="text-center mb-10">
            <p className="text-base text-neutral-600 mb-5">Trusted by leading cooperatives</p>
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
                    className="h-8 lg:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
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
