import React from 'react';

const Hero = () => {
  return (
    <>
      <section className="bg-body-bg lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <h1
            className="lg:text-6xl md:text-5.5xl text-4xl mb-2.5 text-center"
            data-aos="fade-up"
            data-aos-delay={150}
            data-aos-duration={600}
            data-aos-easing="ease-in-out"
          >
            Unrivalled Features
          </h1>
          <p
            className="text-center md:w-3/4 mx-auto text-base"
            data-aos="fade-up"
            data-aos-delay={200}
            data-aos-duration={600}
            data-aos-easing="ease-in-out"
          >
            Explore our diverse tools tailored to drive your growth and resilience
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
