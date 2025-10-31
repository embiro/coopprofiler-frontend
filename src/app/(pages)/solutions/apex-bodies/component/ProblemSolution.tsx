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
                  Are you struggling to get consistent data from member cooperatives? Is it difficult to assess performance across your network and identify which cooperatives need support?
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
                      <IconifyIconClient icon="tabler:users-off" className="size-6 text-black" />
                    </div>
                    <h3 className="text-1.5xl">Inconsistent Data Collection</h3>
                    <p>
                      Different cooperatives use different systems, making it impossible to get a unified view of your network's performance.
                    </p>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center">
                      <IconifyIconClient icon="tabler:chart-bar-off" className="size-6 text-black" />
                    </div>
                    <h3 className="text-1.5xl">Limited Network Visibility</h3>
                    <p>
                      Without comprehensive reporting, you can't identify which cooperatives are thriving or need additional support.
                    </p>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center">
                      <IconifyIconClient icon="tabler:time-management" className="size-6 text-black" />
                    </div>
                    <h3 className="text-1.5xl">Manual Compilation</h3>
                    <p>
                      Aggregating data from multiple cooperatives is time-consuming and prone to errors, delaying critical decisions.
                    </p>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center">
                      <IconifyIconClient icon="tabler:file-alert" className="size-6 text-black" />
                    </div>
                    <h3 className="text-1.5xl">Compliance Tracking</h3>
                    <p>
                      Ensuring all member cooperatives meet regulatory requirements without a unified system is challenging.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-17.5">
            <div className="bg-white rounded-2xl p-7.5">
              <div className="text-center mb-7.5" data-aos="fade-up">
                <h2 className="lg:text-5.5xl md:text-4.6xl text-3.4xl mb-2.5">
                  The CoopProfiler Solution
                </h2>
                <p className="md:w-3/4 mx-auto">
                  CoopProfiler provides a unified platform for your entire network. Get real-time insights across all member cooperatives, identify trends and opportunities, and strengthen your network with data-driven support.
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

