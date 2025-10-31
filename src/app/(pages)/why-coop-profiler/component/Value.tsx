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
              For Decades, The Cooperative Sector Has Faced Critical Challenges
            </h2>
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
                <IconifyIconClient icon="tabler:files-off" className="size-7 text-primary" />
              </div>
              <h3 className="text-1.5xl mb-2.5">Data Silos</h3>
              <p>
                Duplicated efforts in data collection lead to fragmented, unreliable information and prevent uniformity.
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
              <h3 className="text-1.5xl mb-2.5">Generic Tools</h3>
              <p>
                Most software only measures financial performance, completely ignoring the core cooperative principles and values.
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
              <h3 className="text-1.5xl mb-2.5">Data for Nothing</h3>
              <p>
                Data is often collected for a single purpose but never used to understand if your services meet member needs.
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
                <IconifyIconClient icon="tabler:lock-off" className="size-7 text-primary" />
              </div>
              <h3 className="text-1.5xl mb-2.5">Loss of Power</h3>
              <p>
                Many platforms redirect power away from data owners—the members and the cooperative itself.
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
                <h2 className="mb-2.5 md:text-4xl text-2.6xl text-white">The Solution</h2>
                <p className="mb-7.5 text-white text-lg">
                  CoopProfiler was born from these exact challenges. We understand because we lived them.
                </p>
                <div className="space-y-7.5">
                  <div className="flex gap-5">
                    <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center flex-shrink-0">
                      <IconifyIconClient icon="solar:users-group-rounded-outline" className="size-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white mb-2.5 md:text-1.5xl text-xl">Member Empowerment</h3>
                      <p className="text-white">
                        Give members control over their own data, building trust and transparency.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center flex-shrink-0">
                      <IconifyIconClient icon="solar:chart-square-linear" className="size-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white mb-2.5 md:text-1.5xl text-xl">Holistic Insights</h3>
                      <p className="text-white">
                        Go beyond financial metrics to measure true cooperative resilience and member well-being.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center flex-shrink-0">
                      <IconifyIconClient icon="solar:shield-check-linear" className="size-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white mb-2.5 md:text-1.5xl text-xl">Data Ownership</h3>
                      <p className="text-white">
                        Your data stays yours. No redirecting power away from cooperatives and their members.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center flex-shrink-0">
                      <IconifyIconClient icon="solar:history-outline" className="size-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white mb-2.5 md:text-1.5xl text-xl">Reusable Data</h3>
                      <p className="text-white">
                        Collect once, use forever. Transform single-purpose data into strategic intelligence.
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

