import React from 'react';
import Link from 'next/link';

const PrivacyPolicy = () => {
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
                This data privacy policy applies to the CoopProfiler hosted instance available through{' '}
                <Link href="https://app.coopprofiler.com" className="text-primary underline" target="_blank">
                  https://app.coopprofiler.com/
                </Link>, also known as "sites" or "services" throughout this document.
              </p>
            </div>

            {/* Section 1: Types of Data Collected */}
            <div>
              <h2 className="mb-2.5 md:text-2.5xl text-1.5xl">
                1. Types of Data Collected, Controlled and Processed
              </h2>
              <p className="text-base leading-relaxed">
                This data privacy policy distinguishes between data controlled by CoopProfiler and data processed by CoopProfiler.
              </p>

              <div className="ml-5 mt-5 space-y-5">
                <div>
                  <h3 className="mb-2.5 text-xl">1.1 CoopProfiler as a Data Controller</h3>
                  <p className="text-base leading-relaxed">
                    CoopProfiler acts as a data controller for very limited data about site visitors and account holders. As data controllers, we determine the purposes, conditions, and means of processing personal, cooperative, and partner data. CoopProfiler collects web page analytics from both unregistered and registered users of its webpage using Google Analytics. This includes information such as pages visited, clicks, browser used, language choice, country of origin, and more. For registered users, CoopProfiler collects email and basic information as part of the registration process and stores users' preferences in their profile, such as language.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2.5 text-xl">1.2 CoopProfiler as a Data Processor</h3>
                  <p className="text-base leading-relaxed">
                    CoopProfiler serves as a data processor for data collected by account holders. As a data processor, we process data on behalf of a data controller. Once a registered user starts profiling, CoopProfiler stores the information related to the survey (e.g., form) and the data collected by the account holder, which may include personal information. This data consists of information that participants filled out on forms made by registered users but does not include their personal information.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2.5 text-xl">1.3 CoopProfiler as a Data Collector</h3>
                  <p className="text-base leading-relaxed">
                    CoopProfiler collects personal data from web users who register for an account on the CoopProfiler system. This includes information such as names, email addresses, phone numbers, and images. Additionally, CoopProfiler collects personal data from users who use the platform through profiling of both members and cooperatives. This includes information such as financial records, operational metrics, demographic data, and other personal information.
                  </p>
                  <p className="text-base leading-relaxed mt-2.5">
                    The personal data collected during registration is used to create and manage user accounts, provide access to the platform's features, and communicate with users about CoopProfiler services. The profiling data collected from users is used to generate insights, reports, and analytics to assist cooperatives in their decision-making processes. By registering for an account and using CoopProfiler's profiling features, users provide explicit consent for the collection, processing, and use of their personal data as described in this privacy policy.
                  </p>
                  <p className="text-base leading-relaxed mt-2.5">
                    CoopProfiler places utmost importance on the security and protection of the personal data it collects. The platform employs industry-standard technical and organizational measures to safeguard this data and comply with applicable data protection laws and regulations. Users have the right to request the deletion of their personal data stored within CoopProfiler's platform. To make such requests, please contact us using the information provided in Section 5 of this privacy policy.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Use of Data */}
            <div>
              <h2 className="mb-2.5 md:text-2.5xl text-1.5xl">2. Use of Data</h2>
              <p className="text-base leading-relaxed">
                CoopProfiler places great importance on the privacy, confidentiality, and security of personal information and any data collected or stored.
              </p>

              <div className="ml-5 mt-5 space-y-5">
                <div>
                  <h3 className="mb-2.5 text-xl">2.1 Data Controlled by CoopProfiler</h3>
                  <p className="text-base leading-relaxed">
                    Data under our control, including site visitors' data (website analytics) and registration data (username, password, and profile), is used in aggregated ways to monitor the usage and growth of CoopProfiler. This enables us to improve CoopProfiler in subsequent updates. Personal information from registered users is used to provide services and communicate with them about our services. Registered users have the ability to view, edit, and delete their personal information stored in their profile, unsubscribe from communication emails, or delete their accounts. CoopProfiler never shares or sells personal information to third parties.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2.5 text-xl">2.2 Data Processed by CoopProfiler</h3>
                  <p className="text-base leading-relaxed">
                    CoopProfiler processes data on behalf of registered users who have created accounts and collected data. Registered users, including cooperatives and partners, have different roles and permissions within the CoopProfiler platform.
                  </p>
                  <p className="text-base leading-relaxed mt-2.5">
                    Cooperatives, as registered users, fully own their application data, and CoopProfiler does not use, share, or sell that information. Cooperatives have the capability to collect data not only from their members but also from themselves as an entity. They can gather relevant information from their cooperative members, such as demographic data, preferences, and feedback, as well as input data specific to the cooperative itself, such as financial records, operational metrics, and cooperative performance indicators. CoopProfiler ensures that the personal information of participants is kept confidential and handles it in accordance with the applicable data protection laws, including the Data Protection and Privacy Act, 2019 (PDPO Uganda) and the General Data Protection Regulation (GDPR) for users in the European Union.
                  </p>
                  <p className="text-base leading-relaxed mt-2.5">
                    In some cases, CoopProfiler may analyse metadata about the profiled data in an aggregated and anonymized way. This metadata does not include personal information and is used to derive insights and improve the functionality of CoopProfiler.
                  </p>
                  <p className="text-base leading-relaxed mt-2.5">
                    CoopProfiler values the protection of your personal data and implements appropriate technical and organisational measures to safeguard the data processed through its platform. However, registered users, including cooperatives and partners, are responsible for safe management and compliance with data protection regulations for the personal information collected using CoopProfiler.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2.5 text-xl">2.3 Role of Partners</h3>
                  <p className="text-base leading-relaxed">
                    CoopProfiler assigns a different user role to partners, they can create a list of cooperatives and request data access from specific cooperatives after logging in. The cooperative users or administrators have the authority to grant or deny these partners access to their data. CoopProfiler streamlines the access request procedure while adhering to the above-specified data privacy laws.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Data Protection Measures */}
            <div>
              <h2 className="mb-2.5 md:text-2.5xl text-1.5xl">3. Data Protection Measures</h2>
              <p className="text-base leading-relaxed">
                CoopProfiler is committed to protecting the data you share with us. To prevent unauthorised access to your data, we employ a comprehensive set of industry-standard technical and administrative best practices. Despite the fact that we employ extensive security measures, we cannot guarantee complete security due to the inherent risks associated with data storage and transfer.
              </p>
              <p className="text-base leading-relaxed mt-2.5">
                We have developed a comprehensive backup system to reduce the possibility of data loss and perform regular incremental and system backups of your data, which are encrypted and stored securely in multiple locations. This ensures that your data is secure and recoverable in the event of an unforeseen incident.
              </p>
              <p className="text-base leading-relaxed mt-2.5">
                CoopProfiler emphasises the safety of your login credentials. When you create an account with CoopProfiler, we hash your passwords prior to storing them in our databases. By doing this, you can be sure that unauthorised third parties cannot access your credentials in their original format. To ensure the highest level of account security, we strongly advise you to never share your login information with anyone and to frequently change your passwords.
              </p>
              <p className="text-base leading-relaxed mt-2.5">
                Additionally, CoopProfiler is hosted on cloud infrastructure, which offers sophisticated security protocols and features. The platform is accessible via HTTPS, ensuring that your device and our servers can communicate securely. On our servers, we have installed an application firewall for additional security, which helps prevent unauthorised access and defend against potential security hazards.
              </p>
              <p className="text-base leading-relaxed mt-2.5">
                We continually evaluate and improve our security procedures in response to new threats and industry requirements. However, it is essential that you remain vigilant and employ appropriate security measures. If you have any questions about our security or backup procedures, please contact us.
              </p>
              <p className="text-base leading-relaxed mt-2.5">
                We cannot ensure absolute safety, but to reduce the likelihood of data loss, we perform frequent system and incremental backups, which are encrypted and stored in multiple locations.
              </p>
            </div>

            {/* Section 4: Changes to Privacy Policy */}
            <div>
              <h2 className="mb-2.5 md:text-2.5xl text-1.5xl">4. Changes to the Privacy Policy</h2>
              <p className="text-base leading-relaxed">
                We may need to modify this privacy statement from time to time, especially in response to changing norms and legislation. Therefore, we encourage you to review it frequently. In the event of material changes to this policy, we will notify you here or by means of a notice on our homepage. This will ensure that you are aware of any changes regarding the information we collect, how we use it, and under what circumstances, if any, we disclose it.
              </p>
            </div>

            {/* Section 5: Contact Us */}
            <div>
              <h2 className="mb-2.5 md:text-2.5xl text-1.5xl">5. Contact Us</h2>
              <p className="text-base leading-relaxed">
                If you have any uncertainties about our data privacy policy or any requests related to general compliance, including Data Protection and Privacy rights, please do not hesitate to contact us at{' '}
                <Link href="mailto:info@email.coopprofiler.com" className="text-primary underline">
                  info@email.coopprofiler.com
                </Link>.
              </p>
              <p className="text-base leading-relaxed mt-2.5">
                We aim to respond to all requests within 30 days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
