import React from 'react';
import Link from 'next/link';

const TermsOfUse = () => {
  return (
    <>
      <section
        className="bg-white lg:py-25 md:py-12.5 py-7.5"
        data-aos="fade-up"
        data-aos-delay={150}
        data-aos-duration={500}
        data-aos-easing="ease-in-out"
      >
        <div className="container">
          <div className="lg:w-7/10 mx-auto space-y-10">
            {/* Introduction */}
            <div>
              <p className="text-base leading-relaxed">
                This page provides an explanation of the terms governing the use of our service for data collection, management, and analysis purposes for using the site and mobile app that is{' '}
                <Link href="https://app.coopprofiler.com" className="text-primary underline" target="_blank">
                  https://app.coopprofiler.com/
                </Link>.
              </p>
            </div>

            <div>
              <p className="text-base leading-relaxed">
                By accessing and using the Site or any services offered on the Site (collectively referred to as the "Services"), you indicate that you have read, understood, and agree to be bound by the following terms of service and any future amendments to this agreement (collectively referred to as the "Terms"). These Terms apply to all visitors, authorised users, and others who access the Service ("Users"). Your use of the service indicates your acceptance of these Terms and consent to the collection and use of your information as outlined in our{' '}
                <Link href="/privacy-policy" className="text-primary underline">
                  Privacy Policy
                </Link>. If you do not accept these Terms, please refrain from using the service.
              </p>
            </div>

            {/* Section 1: Using CoopProfiler */}
            <div>
              <h2 className="mb-2.5 md:text-2.5xl text-1.5xl">1. Using CoopProfiler</h2>
              <p className="text-base leading-relaxed">
                To access the CoopProfiler service, you are required to register a user account. Your account grants you permission to use the site and services, subject to adherence to all policies posted within the site. By using the site, you guarantee to CoopProfiler that you won't engage in any illegal or forbidden activities as stated in these terms, conditions, or notices. You are prohibited from using the Services in any manner that could damage, disable, overburden, or impair the Services or interfere with the use and enjoyment of the Services by any other party.
              </p>
            </div>

            {/* Section 2: System Access and Use */}
            <div>
              <h2 className="mb-2.5 md:text-2.5xl text-1.5xl">2. System Access and Use</h2>

              <div className="ml-5 mt-5 space-y-5">
                <div>
                  <h3 className="mb-2.5 text-xl">2.1 Eligibility</h3>
                  <p className="text-base leading-relaxed">
                    By using the site, you represent that you are of legal age and have the authority to enter into these Terms on behalf of a cooperative or as an authorised representative.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2.5 text-xl">2.2 License</h3>
                  <p className="text-base leading-relaxed">
                    We grant you a limited, non-exclusive, non-transferable, revocable licence to access and use the site for the purposes of data collection, management, and analysis as set forth in these Terms, subject to your compliance with these Terms.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2.5 text-xl">2.3 Prohibited Activities</h3>
                  <p className="text-base leading-relaxed mb-2.5">You agree not to engage in any of the following prohibited activities while using the site:</p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>violating any applicable laws, regulations, or third-party rights;</li>
                    <li>attempting to gain unauthorised access to the site or interfering with its operation;</li>
                    <li>reverse engineering, modifying, or creating derivative works of the site;</li>
                    <li>engaging in any activity that may disrupt or impair the site's functionality or security.</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Section 3: Your Account */}
            <div>
              <h2 className="mb-2.5 md:text-2.5xl text-1.5xl">3. Your Account</h2>

              <div className="ml-5 mt-5 space-y-5">
                <div>
                  <h3 className="mb-2.5 text-xl">3.1 Data Ownership</h3>
                  <p className="text-base leading-relaxed">
                    You are responsible for any data or content uploaded to the service, and you retain full ownership of it. By using this service, you agree that it allows you to share your data with others and that CoopProfiler won't be liable for how others use it if they do so. If you decide to discontinue using this service, we will make all reasonable efforts to remove your data.
                  </p>
                  <p className="text-base leading-relaxed mt-2.5">
                    We take the privacy and security of your data seriously and will make all reasonable efforts to ensure its protection as defined in our Privacy Policy. We will never share your data with third parties. Our team will not directly access your data unless granted permission by you and only for the purpose of providing technical assistance. To enhance your use of the service, we may copy, cache, or modify your data to improve system performance.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2.5 text-xl">3.2 Data Confidentiality</h3>
                  <p className="text-base leading-relaxed">
                    We will take reasonable measures to protect the confidentiality and security of the data collected through the site. However, we cannot guarantee absolute security, and you acknowledge that data transmission and storage may have inherent security risks.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2.5 text-xl">3.3 Data Use and Analysis</h3>
                  <p className="text-base leading-relaxed">
                    By using the site, you grant us permission to collect, store, process, and analyse the data for the purpose of providing the site's functionalities, improving our services, and conducting aggregated and anonymized data analysis. We will not disclose individual data without your explicit consent, except as required by law or as outlined in our Privacy Policy.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: API Usage */}
            <div>
              <h2 className="mb-2.5 md:text-2.5xl text-1.5xl">4. API Usage</h2>
              <p className="text-base leading-relaxed">
                When using the API, it is essential to include your account's unique token (API key). Unauthorised use or transfer of your access token to other users is strictly prohibited. Employing the API in a manner that could harm, overload, overburden, or impair CoopProfiler's ability to provide services to other users is strictly forbidden. In such circumstances, CoopProfiler reserves the right to suspend or restrict your account's API access.
              </p>
              <p className="text-base leading-relaxed mt-2.5">
                A distinct access token (API key) will be automatically generated for each user upon successful API authentication. This access token will only be accessible to users with partner-level access privileges. The access token remains valid for 24 hours from the time of generation and can be regenerated upon expiration. Users also have the option to revoke and delete their access token by invoking the /logout endpoint.
              </p>
              <p className="text-base leading-relaxed mt-2.5">
                Please note that the access token (API key) is considered confidential information and should be securely stored and transmitted. CoopProfiler disclaims any responsibility for unauthorised use or disclosure of the access token.
              </p>
              <p className="text-base leading-relaxed mt-2.5">
                By using the API, you agree to comply with the aforementioned terms and conditions. Failure to adhere to these terms may result in the suspension or restriction of your account's API access.
              </p>
            </div>

            {/* Section 5: Disclaimers and Limitation of Liability */}
            <div>
              <h2 className="mb-2.5 md:text-2.5xl text-1.5xl">5. Disclaimers and Limitation of Liability</h2>
              <p className="text-base leading-relaxed">
                We disclaim all responsibility and liability for the availability, timeliness, security, or reliability of the services or site, or any software provided through the site. The site and the services are provided on an "as is" and "as available" basis, without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, non-infringement, or any other warranty.
              </p>
              <p className="text-base leading-relaxed mt-2.5">
                Without limitation, we disclaim any and all warranties regarding the accuracy, security, reliability, timeliness, and performance of all services associated with the use of the site and the services. We make no warranty, express or implied, that your use of the site and the services will be uninterrupted, timely, or error-free. We will not be held responsible for any harm to your computer, loss of data, or any other harm resulting from your use of the services.
              </p>
              <p className="text-base leading-relaxed mt-2.5">
                To the extent not prohibited by applicable law, we will not be liable for any damages of any kind arising from the use of or inability to use the site or the services. You expressly agree that your use of the site and the services is solely at your own risk. Under no circumstances will we be responsible for direct, indirect, special, or consequential damages, including but not limited to loss of profits, income, business opportunities, or any other harm, regardless of the nature of the claim or the form of action, arising out of or connected with the site (including but not limited to its operation, its contents, the information or materials it contains, or the use or inability to use the services or any other site).
              </p>
            </div>

            {/* Section 6: Governing Law and Dispute Resolution */}
            <div>
              <h2 className="mb-2.5 md:text-2.5xl text-1.5xl">6. Governing Law and Dispute Resolution</h2>

              <div className="ml-5 mt-5 space-y-5">
                <div>
                  <h3 className="mb-2.5 text-xl">6.1 Governing Law</h3>
                  <p className="text-base leading-relaxed">
                    These Terms shall be governed by and construed in accordance with the laws of Uganda, without regard to its conflict of laws principles.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2.5 text-xl">6.2 Dispute Resolution</h3>
                  <p className="text-base leading-relaxed">
                    Any disputes arising out of or in connection with these Terms shall be resolved amicably through good-faith negotiations. If a resolution cannot be reached, the disputes shall be subject to the exclusive jurisdiction of the courts of Uganda.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 7: Termination */}
            <div>
              <h2 className="mb-2.5 md:text-2.5xl text-1.5xl">7. Termination</h2>

              <div className="ml-5 mt-5 space-y-5">
                <div>
                  <h3 className="mb-2.5 text-xl">7.1 Termination by You</h3>
                  <p className="text-base leading-relaxed">
                    You may terminate your use of the site at any time by ceasing all access to and use of the site.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2.5 text-xl">7.2 Termination by Us</h3>
                  <p className="text-base leading-relaxed">
                    We reserve the right to suspend, restrict, or terminate your access to the Site, in whole or in part, without prior notice if we determine that you have violated these Terms or if such action is necessary to protect the security or integrity of the Site or our users' data.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 8: Changes to the Terms */}
            <div>
              <h2 className="mb-2.5 md:text-2.5xl text-1.5xl">8. Changes to the Terms</h2>

              <div className="ml-5 mt-5">
                <div>
                  <h3 className="mb-2.5 text-xl">8.1 Modification</h3>
                  <p className="text-base leading-relaxed">
                    We reserve the right to modify or update these Terms at any time. The revised Terms will be effective upon posting on our website or notifying you through other appropriate means. Your continued use of the site after the effective date of the revised Terms constitutes your acceptance of the changes.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 9: Contact Us */}
            <div>
              <h2 className="mb-2.5 md:text-2.5xl text-1.5xl">9. Contact Us</h2>
              <p className="text-base leading-relaxed">
                If you have any questions, concerns, or requests regarding these Terms or the use of CoopProfiler, please contact us at{' '}
                <Link href="mailto:info@email.coopprofiler.com" className="text-primary underline">
                  info@email.coopprofiler.com
                </Link>.
              </p>
            </div>

            {/* Note */}
            <div className="bg-body-bg p-5 rounded-2xl mt-10">
              <p className="text-base leading-relaxed font-medium">
                <strong>Note:</strong> These Terms of Service apply to CoopProfiler, and it is important to review and comply with any additional terms and policies specific to the cooperatives using the site.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfUse;

