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
                  Is your member data scattered across insecure spreadsheets and paper records? Are you struggling to demonstrate your impact to funders and stakeholders?
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
                      <IconifyIconClient icon="tabler:alert-circle" className="size-6 text-black" />
                    </div>
                    <h3 className="text-1.5xl">Data Scattered Everywhere</h3>
                    <p>
                      Member information spread across multiple spreadsheets and paper files makes it nearly impossible to get a complete picture of your cooperative.
                    </p>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center">
                      <IconifyIconClient icon="tabler:shield-alert" className="size-6 text-black" />
                    </div>
                    <h3 className="text-1.5xl">Security Risks</h3>
                    <p>
                      Unsecured files and paper records put sensitive member data at risk of loss, theft, or unauthorized access.
                    </p>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center">
                      <IconifyIconClient icon="tabler:chart-bar-off" className="size-6 text-black" />
                    </div>
                    <h3 className="text-1.5xl">Limited Visibility</h3>
                    <p>
                      Without proper analytics, you're making decisions in the dark instead of using real data insights.
                    </p>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center">
                      <IconifyIconClient icon="tabler:file-report" className="size-6 text-black" />
                    </div>
                    <h3 className="text-1.5xl">Reporting Challenges</h3>
                    <p>
                      Creating professional reports for funders and stakeholders is time-consuming and error-prone.
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
                  CoopProfiler gives you a single source of truth for your entire cooperative. Make confident, data-backed decisions, collaborate with partners using professional reports, and prove your value to stakeholders.
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

