import React from 'react';
import Layout from '../components/layout/Layout';
import ContactForm from '../components/ContactForm';
import IgedlaLogo from '../assets/cropped-logo-igedla.png';

const Contact = () => {
  return (
    <Layout>
      <section className="h-screen pt-20 md:pt-24 bg-blue-300">
        <div className="container mx-auto px-2 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2 md:pt-24">
            <img src={IgedlaLogo} alt="Igedla-logo" />
            <p className="mt-4 text-gray-600 italic">
              Do you have a question or an issue, let us know.
            </p>
          </div>
          <div className="pb-4">
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Contact;
