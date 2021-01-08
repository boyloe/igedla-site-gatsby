import React from 'react';
import Layout from '../components/layout/Layout';

const Privacy = () => {
  return (
    <Layout>
      <div className="container flex flex-wrap pt-4 pb-10 m-auto mt-6 md:mt-15 lg:px-12 xl:px-16">
        <div className="w-full px-0 lg:px-4">
          <h2 className="px-12 py-4 text-base font-bold text-center md:text-4xl text-blue-700">
            Igedla Terms and Conditions
          </h2>
          <h3 className="px-12 py-5 text-base font-bold text-center md:text-2xl text-blue-800">
            Igedla Health Privacy Policy
          </h3>
          <h4 className="px-12 py-5 text-base font-bold text-center md:text-2xl text-black underline">
            Our Commitment to Your Privacy
          </h4>
          <p className="text-sm text-center text-blue-700 mb-10 md:text-2xl">
            Health means having the knowledge to make good decisions. At Igedla, our goal is to
            provide you with the information you need to make your best healthcare decisions. Our
            ability to offer you relevant health information is based on your agreement to share
            with us your specific symptoms, and your information such as your age and gender and
            your contact information so we can keep you up to date on any developments that may
            pertain to you. This information is necessary to compare you to similar people and tell
            you what they were diagnosed with and how they were treated. The more specific
            information you give us about you and your symptoms, the more accurate and relevant
            information we are able to provide you with. We take the security of your personal
            information and your privacy very seriously. We apply high-security standards to our
            operational practices and work in compliance with all applicable privacy laws. We are
            compliant with the European Data Protection Regulations (“GDPR”), and the California
            Consumer Privacy Act (“CCPA”), both of which are progressive laws governing data
            protection, and depending on your geographic location, each law offers you various
            rights in regards to your data (to read more about your rights that stem from our GDPR
            compliance, click here, and for California residents, click here. It is our intent to be
            at the forefront of data privacy and protection. Our commitment to your privacy also
            means that we will use your data only to improve our services and to provide them to
            you. We will never sell your personal information to anyone. If anything in our privacy
            policy is unclear, or if you have any questions, please ask us at xxx@igedla.com
          </p>
        </div>
      </div>
    </Layout>
  );
};
export default Privacy;
