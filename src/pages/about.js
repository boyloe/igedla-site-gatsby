/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import Layout from '../components/layout/Layout';
import IgedlaVideo from '../assets/Igedla-final.mp4';
import AboutBanner from '../assets/banner1.png';

const About = () => {
  return (
    <Layout>
      <section>
        <div className="px-8 py-0">
          <img className="mt-6 rounded-lg shadow-xl" src={AboutBanner} alt="igedla-banner" />
          <h1 className="mt-8 text-2xl text-center font-bold text-blue-800">What is igedla? (pronounced eye-ged-la)</h1>
          <p className="mt-2 px-8 py-2 text-gray-700 font-semibold">Igedla is a personalized health information company and offers a free, HIPAA-compliant app that is available nationwide on <span className="text-blue-500">iOS</span> and <span className="text-blue-500">Android</span>, and is intended for use by adults aged 18 to 65 years.</p>
          <p className="mt-4 px-8 py-2 text-gray-700 font-semibold"> The app’s AI references a history of diagnoses and treatments to deliver users an insight about how their condition would likely be treated. Our ‘Possible Causes’ engine is unique in being able to handle large and complex medical presentations using multiple AI and enhanced machine learning algorithms while remaining quick and easy to use.</p>
          <div className="mt-4 px-8 py-2">
            <a className="inline-block bg-blue-500 text-white px-5 py-3 rounded-lg shadow-lg uppercase" href="#">Learn more</a>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 lg:py-40">
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-2xl text-center font-semibold text-blue-800">Let's Get Started</h2>
          
        </div>
      </section>
    </Layout>
  );
};
export default About;
