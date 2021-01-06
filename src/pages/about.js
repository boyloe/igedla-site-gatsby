/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import Layout from '../components/layout/Layout';
import IgedlaVideo from '../assets/Igedla-final.mp4';
import AboutBanner from '../assets/banner1.jpg';
import aboutData from '../data/about-data';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';


const About = () => {
  return (
    <Layout>
      <section>
        <div className="w-screen flex flex-col">
          <img className="rounded shadow-xl flex-grow" src={AboutBanner} alt="igedla-banner" />
          
        </div>
      </section>

      <section>
        <div>
          <h1 className="mt-12 text-4xl text-center font-bold text-blue-800">What is igedla? (pronounced eye-ged-la)</h1>
          <p className="mt-2 px-8 py-10 text-2xl text-gray-700 font-semibold">Igedla is a personalized health information company and offers a free, HIPAA-compliant app that is available nationwide on <span className="text-blue-500">iOS</span> and <span className="text-blue-500">Android</span>, and is intended for use by adults aged 18 to 65 years. The app’s AI references a history of diagnoses and treatments to deliver users an insight about how their condition would likely be treated. Our ‘Possible Causes’ engine is unique in being able to handle large and complex medical presentations using multiple AI and enhanced machine learning algorithms while remaining quick and easy to use.</p>
          <p className="mt-4 px-8 py-2 text-gray-700 font-semibold"> </p>
        </div>
      </section>

      <section id="services" className="py-20 lg:py-10">
        <div className="container mx-auto">
          <LabelText className="mb-8 text-gray-600 text-center font-roboto leading-8 font-extrabold">
            See why our customers love us
          </LabelText>
          <div className="flex flex-col md:flex-row md:-mx-3">
            {aboutData.map(customer => (
              <div key={customer.customerName} className="flex-1 px-3">
                <CustomerCard customer={customer} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-2 lg:py-4">
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                A better way to send money
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
              </p>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};
export default About;
