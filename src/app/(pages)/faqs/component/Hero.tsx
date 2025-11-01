import React from 'react';

const Hero = () => {
  return (
    <>
      <section className="bg-body-bg lg:py-25 md:py-12.5 py-7.5">
        <div className="container">
          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-delay={150}
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <h1 className="lg:text-6xl md:text-5.5xl text-4xl mb-2.5">
              Frequently asked questions{' '}
            </h1>
            <p className="mb-2.5">
              Find answers to common questions about CoopProfiler. Get the information you need to
              make the most of our platform.{' '}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
