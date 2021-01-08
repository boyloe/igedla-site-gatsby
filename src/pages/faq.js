import React from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'gatsby';

const Faq = () => {
  return (
    <Layout>
      <section>
        <div className="container flex flex-wrap pt-4 pb-10 m-auto mt-6 md:mt-15 lg:px-12 xl:px-16">
          <div className="w-full px-0 lg:px-4">
            <h2 className="px-12 py-4 text-base font-bold text-center md:text-4xl text-blue-700">
              FAQs (Frequently Asked Questions) 
            </h2>
            <h3 className="px-12 py-5 text-base font-bold text-center md:text-2xl text-blue-700">
              How does the Igedla Chatbot, “Iggy”, work?
            </h3>
            <p className="text-sm text-center text-blue-700 mb-10 md:text-2xl">
              Igedla uses artificial intelligence (AI) and patient population data that has been collected for over 20 years to ask the correct questions and provide possible diagnoses.
            </p>

            <h3 className="px-12 py-5 text-base font-bold text-center md:text-2xl text-blue-700">
              Is Iggy accurate?
            </h3>
            <p className="text-sm text-center text-blue-700 mb-10 md:text-2xl">
              Iggy is not a doctor, it does not provide an absolute diagnosis, but instead a summary of possible diagnoses. With AI the accuracy of the Igedla’s assessment tool, Iggy, is constantly being refined based on new data.
            </p>

            <h3 className="px-12 py-5 text-base font-bold text-center md:text-2xl text-blue-700">
              Is Iggy safe to use?
            </h3>
            <p className="text-sm text-center text-blue-700 mb-10 md:text-2xl">
              The Igedla chatbot is not meant to replace a doctor but to instead provide you with useful information as to what your symptoms could mean. Providing you with information and intelligent questions to safely discuss with your doctor.
            </p>

            <h3 className="px-12 py-5 text-base font-bold text-center md:text-2xl text-blue-700">
              Can Iggy diagnose my condition?
            </h3>
            <p className="text-sm text-center text-blue-700 mb-10 md:text-2xl">
              Iggy cannot diagnose you, but can help you narrow down your symptoms so you can take the next step in achieving better health, which may mean speaking with a physician.
            </p>

            <h3 className="px-12 py-5 text-base font-bold text-center md:text-2xl text-blue-700">
              Will Igedla sell my information?
            </h3>
            <p className="text-sm text-center text-blue-700 mb-10 md:text-2xl">
              No, Igedla takes your privacy seriously and complies with all healthcare laws.  View the Igedla Privacy policy <a href="/src/pages/privacy.js">here</a>.
            </p>

            <h3 className="px-12 py-5 text-base font-bold text-center md:text-2xl text-blue-700">
              How much does Igedla cost?
            </h3>
            <p className="text-sm text-center text-blue-700 mb-10 md:text-2xl">
              Iggy is Igedla’s symptom checker and is free for you to use anytime.
            </p>
            
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Faq;
