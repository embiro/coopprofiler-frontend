import React from 'react';
import about12 from '@/assets/images/about/12.png';
import about13 from '@/assets/images/about/13.png';
import Image from 'next/image';

const Vision = () => {
  return (
    <>
      <section className="bg-body-bg lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <h2
            className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl text-center"
            data-aos="fade-up"
            data-aos-delay={150}
            data-aos-duration={600}
            data-aos-easing="ease-in-out"
          >
            The Universal Path to Resilience
          </h2>
          <p
            className="text-center mb-12.5 max-w-3xl mx-auto text-lg"
            data-aos="fade-up"
            data-aos-delay={150}
            data-aos-duration={600}
            data-aos-easing="ease-in-out"
          >
            CoopProfiler is helping cooperatives across diverse sectors transform their data into strategic advantage. See how real cooperatives are using our platform to make better decisions.
          </p>

          <div
            className="grid md:grid-cols-2 gap-7.5 mb-12.5"
            data-aos="fade-up"
            data-aos-delay={150}
            data-aos-duration={600}
            data-aos-easing="ease-in-out"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="p-5 bg-dark text-white text-center">
                <h3 className="text-xl font-bold">Agricultural Cooperative Dashboard</h3>
                <p className="text-sm opacity-90">Real-time member insights and impact metrics</p>
              </div>
              <div className="p-5">
                <Image src={about12} alt="Agricultural Cooperative Dashboard" className="rounded-2xl w-full" />
              </div>
              <div className="px-5 pb-5">
                <p className="text-sm text-dark">
                  See how agricultural cooperatives track member engagement, crop yields, and financial health in one unified view.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="p-5 bg-dark text-white text-center">
                <h3 className="text-xl font-bold">Analytics & Impact Reports</h3>
                <p className="text-sm opacity-90">Comprehensive data insights for stakeholders</p>
              </div>
              <div className="p-5">
                <Image src={about13} alt="Analytics Dashboard" className="rounded-2xl w-full" />
              </div>
              <div className="px-5 pb-5">
                <p className="text-sm text-dark">
                  Generate professional reports that demonstrate your cooperative's impact to funders, members, and partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vision;
