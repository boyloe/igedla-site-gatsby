/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
// import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
// eslint-disable-next-line import/no-unresolved
import ChatScreenShot from '../assets/IgedlaChatScreenShot.png';
import IgedlaLogo from '../assets/cropped-logo-igedla.png';
import CovidTransparent from '../assets/coronavirus_transparent.png';
import DoctorVisits from '../assets/doctor-visits.png';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40 bg-blue-300">
      <div className="container mx-auto px-8 lg:flex ">
        <div className="text-center lg:text-left lg:w-1/2">
          <img src={IgedlaLogo} alt="Igedla-logo" />
          <p className="text-xl lg:text-2xl mt-6 font-roboto text-blue-800 font-light">
            Igedla provides quick and easy results—so you know what’s going on right away and how to
            fix it:
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Get the App!</Button>
          </p>
          <p className="mt-4 text-gray-600">Available on iOS and Android</p>
        </div>
        <div className="lg:w-1/2">
          <img
            className="mb-8 ml-48 hidden lg:inline-flex rounded-lg shadow-xl"
            src={ChatScreenShot}
            alt="chat bot screenshot"
          />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold text-blue-800">Let's Get Started</h2>

        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">What's going on:</p>
              <p className="mt-4">
                Igedla/Iggy understands you and helps you make sense of your symptoms.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">How to fix it:</p>
              <p className="mt-4">
                Whether it's self-care or urgent care, Iggy will always recommend the right next
                steps
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Iggy Checks Back in:</p>
              <p className="mt-4">
                If you give us permission, we'll follow up on your progress via text
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-2xl font-semibold leading-tight text-blue-800">
            Check your symptoms
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed text-blue-900">
            Learn more about your symptoms and get results fast! Enter multiple symptoms in free text
            with over 6,000 diseases covered
          </p>
        </div>
      }
      secondarySlot={<img src={DoctorVisits} alt="chatbot-clipart" />}
    />
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-2xl font-semibold leading-tight text-blue-800">
            Assess your risk for COVID-19
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed text-blue-900">
            Are you at a higher risk of COVID complications, experiencing symptoms, or recently
            exposed. Igedla can provide guidance on the best treatment options.
          </p>
        </div>
      }
      secondarySlot={<img src={CovidTransparent} alt="covid-logo" />}
    />
    {/* <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Search For Performance Optimization
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            With all the information in place you will be presented with an action plan that your
            company needs to follow
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    /> */}
    {/* <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Igedla gets results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section> */}
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">
          See why our customers love us
        </LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-blue-300 rounded-lg text-center">
      <h3 className="text-5xl font-semibold text-blue-800">How are you feeling today?</h3>
      <p className="mt-8 text-xl font-light text-blue-800">
        Download Igedla and try it out for yourself
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section>
  </Layout>
);
