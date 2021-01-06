import React from 'react';
import Layout from '../components/layout/Layout';
import ContactForm from '../components/ContactForm';
import IgedlaLogo from '../assets/cropped-logo-igedla.png';

const Contact = () => {
  return (
    <Layout>
      <section className="h-screen pt-10 md:pt-24 bg-blue-300">
        <div className="container mx-auto px-2 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2 md:pt-10">
            <img className="hidden md:block" src={IgedlaLogo} alt="Igedla-logo" />
            <p className="hidden md:block md:text-gray-600 md:italic">
              Do you have a question or an issue, let us know.
            </p>
          </div>
          <div className="lg:pb-4">
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Contact;
