import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';
import Link from 'next/link';

const Value = () => {
  return (
    <>
      {/* The Problem Section */}
      <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div
            className="text-center mb-12.5"
            data-aos="fade-up"
            data-aos-duration={600}
            data-aos-easing="ease-in-out"
          >
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
              The Problem
            </h2>
            <p className="max-w-4xl mx-auto text-lg mt-5">
              Globally, there is no standardized tool that enables cooperative data aggregation, performance and resilience measurement based on cooperative fundamentals, values and principles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12.5">
            <div
              className="bg-body-bg p-7.5 rounded-2xl"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={500}
              data-aos-easing="ease-in-out"
            >
              <div className="size-15 bg-dark rounded-full inline-flex items-center justify-center mb-5">
                <IconifyIconClient icon="tabler:chart-bar-off" className="size-7 text-primary" />
              </div>
              <h3 className="text-1.5xl mb-2.5">Lack of Standardization</h3>
              <p>
                No global standard for measuring cooperative resilience based on cooperative fundamentals, values and principles.
              </p>
            </div>

            <div
              className="bg-body-bg p-7.5 rounded-2xl"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={500}
              data-aos-easing="ease-in-out"
            >
              <div className="size-15 bg-dark rounded-full inline-flex items-center justify-center mb-5">
                <IconifyIconClient icon="tabler:tool-off" className="size-7 text-primary" />
              </div>
              <h3 className="text-1.5xl mb-2.5">Limited Scope Tools</h3>
              <p>
                A few innovations exist but only for financial performance of SACCOs and agricultural cooperatives—not holistic cooperative resilience.
              </p>
            </div>

            <div
              className="bg-body-bg p-7.5 rounded-2xl"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={500}
              data-aos-easing="ease-in-out"
            >
              <div className="size-15 bg-dark rounded-full inline-flex items-center justify-center mb-5">
                <IconifyIconClient icon="tabler:chart-bar-off" className="size-7 text-primary" />
              </div>
              <h3 className="text-1.5xl mb-2.5">Missed Opportunities</h3>
              <p>
                Data collected at loan appraisal is never analyzed to understand if cooperative products meet members' needs.
              </p>
            </div>

            <div
              className="bg-body-bg p-7.5 rounded-2xl"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={500}
              data-aos-easing="ease-in-out"
            >
              <div className="size-15 bg-dark rounded-full inline-flex items-center justify-center mb-5">
                <IconifyIconClient icon="tabler:files-off" className="size-7 text-primary" />
              </div>
              <h3 className="text-1.5xl mb-2.5">Data Silos</h3>
              <p>
                Duplicated data aggregation efforts lack collaboration, standardization, and comparability.
              </p>
            </div>
          </div>

          {/* The Solution Section */}
          <div
            className="bg-dark rounded-2xl p-12.5"
            data-aos="fade-up"
            data-aos-delay={250}
            data-aos-duration={600}
            data-aos-easing="ease-in-out"
          >
            <div className="grid lg:grid-cols-2 gap-12.5">
              <div>
                <h2 className="mb-2.5 md:text-4xl text-2.6xl text-white">Our Solution</h2>
                <p className="mb-7.5 text-white text-lg">
                  Coop Profiler is an agile research and decision support tool with inbuilt questionnaires, analytics, reports and the Cooperative Resilience Measurement Index—a multi-dimensional resilience measurement framework built on the backbone of cooperative identity.
                </p>
                <div className="space-y-7.5">
                  <div className="flex gap-5">
                    <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center flex-shrink-0">
                      <IconifyIconClient icon="solar:users-group-rounded-outline" className="size-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white mb-2.5 md:text-1.5xl text-xl">The CRMI Framework</h3>
                      <p className="text-white">
                        The first-of-its-kind framework tracking adherence to cooperative values, principles, and impact on communities.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center flex-shrink-0">
                      <IconifyIconClient icon="solar:chart-square-linear" className="size-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white mb-2.5 md:text-1.5xl text-xl">Multi-Type Support</h3>
                      <p className="text-white">
                        Tailored for all cooperative types: financial, agricultural, industrial, housing, manufacturing, and more.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center flex-shrink-0">
                      <IconifyIconClient icon="solar:shield-check-linear" className="size-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white mb-2.5 md:text-1.5xl text-xl">Data Ownership & Control</h3>
                      <p className="text-white">
                        Cooperatives maintain complete control over their data and decide who has access.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center flex-shrink-0">
                      <IconifyIconClient icon="solar:history-outline" className="size-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white mb-2.5 md:text-1.5xl text-xl">Offline & Online</h3>
                      <p className="text-white">
                        Data collection and synchronization even without internet access, with cloud-powered analysis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-primary rounded-2xl p-10 h-full flex flex-col justify-center">
                  <div>
                    <h2 className="mb-2.5 md:text-4xl text-2.6xl">
                      Ready to transform your cooperative?
                    </h2>
                    <p className="mb-7.5">
                      Take the first step towards data-driven decisions and member empowerment.
                    </p>
                    <Link
                      href="/sign-up"
                      className="py-3.5 md:px-7.5 px-6 inline-flex text-black font-medium rounded-2xl bg-dark transition-all duration-300 hover:text-primary hover:bg-black"
                    >
                      Start Free Trial
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Value;

