import React from 'react';
import Layout from '../components/layout/Layout';
import AboutBanner from '../assets/crownBanner.jpg';

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
            <h1 className="mt-12 text-3xl text-center font-bold text-blue-800">What is igedla? (pronounced eye-ged-la)</h1>
            <p className="mt-2 px-8 py-2 text-3x1 text-gray-700 font-semibold">
                Igedla is a personalized health information company and offers a free, 
                HIPAA-compliant app that is available nationwide on  
                <span className="text-blue-500"> iOS </span> 
                    and  
                <a href="https://play.google.com/store/apps/details?id=com.igedla.health" className="text-blue-500 inline">
                    <span> Android </span>
                </a>
                , and is intended for use by adults aged 18 to 65 years.
            </p>
            <p className="mt-4 px-8 py-2 text-gray-700 font-semibold"> The app’s AI references a history of diagnoses and treatments to deliver users an insight about how their condition would likely be treated. Our ‘Possible Causes’ engine is unique in being able to handle large and complex medical presentations using multiple AI and enhanced machine learning algorithms while remaining quick and easy to use.</p>
        </div>
      </section>

        

        <section>
            <div className="container flex flex-wrap pt-4 pb-10 m-auto mt-6 md:mt-15 lg:px-12 xl:px-16">
            <div className="w-full px-0 lg:px-4">
            <h2 className="px-12 text-base font-bold text-center md:text-3xl text-blue-700">
                Discover What We Do
            </h2>
            <p className="py-1 text-sm text-center text-blue-700 mb-10 md:text-2xl italic">
              We're improving access to the type of health care we would want for ourselves
            </p>
            <div className="flex flex-wrap items-center justify-center py-4 pt-0">
                <div className="w-full p-4 md:w-1/2 lg:w-1/4 plan-card">
                <label className="flex flex-col rounded-lg shadow-lg group relative cursor-pointer hover:shadow-2xl-blue">
                    <div className="w-full px-4 py-6 rounded-t-lg card-section-1">
                    <h3 className="mx-auto text-xl font-semibold font-roboto text-center underline text-blue-700 group-hover:text-white">
                        COVID-19 Screening
                    </h3>
                    <p className="text-md font-bold font-roboto text-center group-hover:text-white text-blue-500">
                      Understand your symptoms and risks of COVID-19 with Igedla's free Coronavirus assessment tool
                    </p>
                    <p className="text-xs text-center uppercase group-hover:text-white text-blue-500">
                    </p>
                    </div>
                    <div
                    className="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-blue-500"
                    >
                    <p className="text-xl text-white">
                    </p>
                    <button className="w-5/6 py-2 mt-2 font-semibold text-center uppercase bg-white border border-transparent rounded text-blue-500">
                        Get Started
                    </button>
                    </div>
                </label>
                </div>

                <div className="w-full p-4 md:w-1/2 lg:w-1/4">
                <label className="flex flex-col rounded-lg shadow-lg relative cursor-pointer hover:shadow-2xl-blue">
                    <div className="w-full px-4 py-8 rounded-t-lg bg-blue-500">
                    <h3 className="mx-auto text-xl font-semibold font-roboto text-center underline text-white group-hover:text-white">
                        Symptoms Checker
                    </h3>
                    <p className="text-md font-bold font-roboto text-center text-white">
                        Igedla asks simple, relevant questions to help you understand 
                        symptoms concerning you or your kids and gives you immediate 
                        answers you can trust.
                    </p>
                    <p className="text-xs text-center uppercase text-white">
                    </p>
                    </div>
                    <div
                    className="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-blue-700"
                    >
                    <p className="text-xl text-white">
                    </p>
                    <button className="w-5/6 py-2 mt-2 font-semibold font-roboto text-center uppercase bg-white border border-transparent rounded text-blue-500">
                        Get Started
                    </button>
                    </div>
                </label>
                </div>

                <div className="w-full p-4 md:w-1/2 lg:w-1/4 plan-card">
                <label className="flex flex-col rounded-lg shadow-lg group card-group relative hover:bg-jblue-secondary cursor-pointer hover:shadow-2xl-blue">
                    <div className="w-full px-4 py-6 rounded-t-lg card-section-1">
                    <h3 className="mx-auto text-xl font-semibold font-roboto text-center underline text-blue-500 group-hover:text-white">
                        Medication Delivery
                    </h3>
                    <p className="text-md font-bold text-center font-roboto group-hover:text-white text-blue-500">
                        Get the medication you need quickly without having to leave the your home. 
                    </p>
                    <p className="text-xs text-center uppercase group-hover:text-white text-blue-500">
                    </p>
                    </div>
                    <div
                    className="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-blue-500"
                    >
                    <p className="text-xl text-white">
                    </p>
                    <button className="w-5/6 py-2 mt-2 font-semibold font-roboto text-center uppercase bg-white border border-transparent rounded text-blue-500">
                        Get Started
                    </button>
                    </div>
                </label>
                </div>

            </div>
            </div>
        </div>
        </section>

    </Layout>
  );
};
export default About;