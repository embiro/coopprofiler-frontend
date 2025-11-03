import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CTA = () => {
  return (
    <>
      <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="relative rounded-2xl overflow-hidden">
            {/* Background Image - Placeholder: Replace with your chosen image */}
            <div className="absolute inset-0">
              <Image
                src="/images/people_using_tech.png"
                alt="CTA Background"
                fill
                className="object-cover"
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-dark/70" />
            </div>

            {/* Content */}
            <div
              className="relative z-10 text-center max-w-3xl mx-auto lg:p-20 md:p-15 p-10"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            >
              <h2 className="text-white lg:text-5.5xl md:text-4.6xl text-3.4xl mb-5">
                Ready to Build a More Resilient Cooperative?
              </h2>
              <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
                Start your journey today with CoopProfiler to know and plan btter for your members
                and cooperative
              </p>
              <Link
                href="/pricing-1"
                className="inline-flex items-center gap-2 py-4 md:px-10 px-8 bg-primary text-dark font-semibold rounded-2xl text-lg transition-all duration-300 hover:bg-primary/90 hover:scale-105 shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
