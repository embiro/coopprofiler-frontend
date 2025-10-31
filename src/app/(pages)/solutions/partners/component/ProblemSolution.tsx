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
                  Are your partner cooperatives using different systems or no systems at all? Is it difficult to verify the actual impact of your partnerships and funding?
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
                      <IconifyIconClient icon="tabler:files-off" className="size-6 text-black" />
                    </div>
                    <h3 className="text-1.5xl">Inconsistent Data</h3>
                    <p>
                      Partner cooperatives use different formats and systems, making it hard to get comparable insights.
                    </p>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center">
                      <IconifyIconClient icon="tabler:eye-off" className="size-6 text-black" />
                    </div>
                    <h3 className="text-1.5xl">Limited Visibility</h3>
                    <p>
                      Without proper reporting, you can't verify if your partnerships and investments are achieving the intended impact.
                    </p>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center">
                      <IconifyIconClient icon="tabler:file-time" className="size-6 text-black" />
                    </div>
                    <h3 className="text-1.5xl">Delayed Reporting</h3>
                    <p>
                      Manual data collection and compilation leads to delayed reports and missed opportunities to optimize partnerships.
                    </p>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center">
                      <IconifyIconClient icon="tabler:question-mark" className="size-6 text-black" />
                    </div>
                    <h3 className="text-1.5xl">Uncertain ROI</h3>
                    <p>
                      Difficulty measuring return on investment for partnerships makes it challenging to make informed funding decisions.
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
                  CoopProfiler standardizes data across your partner network. Access consistent, verified information, measure partnership impact in real-time, and build stronger, more effective relationships.
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

