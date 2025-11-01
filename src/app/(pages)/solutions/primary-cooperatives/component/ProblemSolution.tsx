'use client';
import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';
import Link from 'next/link';

const ProblemSolution = () => {
  return (
    <>
      <section className="bg-body-bg lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div
            className="grid lg:grid-cols-5 lg:gap-17.5 gap-7.5 mb-7.5"
            data-aos="fade-up"
            data-aos-duration={600}
            data-aos-easing="ease-in-out"
          >
            <div className="lg:col-span-2">
              <div className="flex justify-center md:gap-5 gap-2.5 flex-col">
                <h2 className="lg:text-5.5xl md:text-4.6xl text-3.4xl mb-2.5">
                  The Challenges You Face
                </h2>
                <p className="lg:mb-12.5 md:mb-5">
                  Do you lack holistic data on your cooperative's status and members? Are you making
                  decisions based on guesswork? Do you struggle to measure adherence to cooperative
                  principles and values?
                </p>
                <div>
                  <Link
                    href="/contact"
                    className="py-3.5 md:px-7.5 px-6.5 inline-flex items-center text-center bg-primary font-medium rounded-2xl text-black transition-all duration-300 hover:text-primary hover:bg-black"
                  >
                    Get started
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-7.5">
                <div className="grid md:grid-cols-2 gap-7.5">
                  <div className="flex flex-col gap-5">
                    <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center">
                      <IconifyIconClient
                        icon="tabler:chart-bar-off"
                        className="size-6 text-black"
                      />
                    </div>
                    <h3 className="text-1.5xl">No Resilience Measurement</h3>
                    <p>
                      Globally, there's no standardized tool to measure cooperative performance
                      based on cooperative fundamentals, values and principles.
                    </p>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center">
                      <IconifyIconClient
                        icon="tabler:calculator-off"
                        className="size-6 text-black"
                      />
                    </div>
                    <h3 className="text-1.5xl">Generic Financial Tools</h3>
                    <p>
                      Existing tools only measure financial performance, ignoring cooperative values
                      and holistic member well-being.
                    </p>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center">
                      <IconifyIconClient icon="tabler:alert-circle" className="size-6 text-black" />
                    </div>
                    <h3 className="text-1.5xl">Data for Nothing</h3>
                    <p>
                      Data collected at loan appraisal is never analyzed to understand if
                      cooperative products meet members' needs.
                    </p>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center">
                      <IconifyIconClient icon="tabler:database-off" className="size-6 text-black" />
                    </div>
                    <h3 className="text-1.5xl">Loss of Data Ownership</h3>
                    <p>
                      Many platforms redirect power away from cooperatives—the actual owners of
                      their data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-17.5">
            <div className="bg-white rounded-2xl p-7.5">
              <div className="text-center mb-7.5" data-aos="fade-up">
                <div className="flex justify-center mb-5">
                  <div className="size-16 bg-primary rounded-full inline-flex items-center justify-center">
                    <IconifyIconClient
                      icon="solar:shield-check-bold"
                      className="size-8 text-black"
                    />
                  </div>
                </div>
                <h2 className="lg:text-5.5xl md:text-4.6xl text-3.4xl mb-2.5">
                  The Coop Profiler Solution
                </h2>
                <p className="md:w-3/4 mx-auto">
                  An agile research and decision support tool with the Cooperative Resilience
                  Measurement Index (CRMI)—the world's first framework tracking adherence to
                  cooperative values, principles, and impact. Your data stays yours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProblemSolution;
