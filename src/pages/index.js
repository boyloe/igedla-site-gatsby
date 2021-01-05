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
import WelcomeScreenShot from '../assets/ScreenShots/igedla_mobile_welcome_screensWelcome-Screen---01.png';
import GetResultsScreenShot from '../assets/ScreenShots/igedla_mobile_welcome_screensWelcome-Screen---03.png'
import TellUsYourSymptomsScreenShot from '../assets/ScreenShots/igedla_mobile_welcome_screensWelcome-Screen---02.png'
import IgedlaLogo from '../assets/cropped-logo-igedla.png';
import CovidTransparent from '../assets/coronavirus_transparent.png';
import DoctorVisits from '../assets/doctor-visits.png';
import GooglePlayBadge from '../assets/google-play-badge.png'

export default () => (
  <Layout>
    <section className="h-screen pt-20 md:pt-24 bg-blue-200">
      <div className="container mx-auto px-2 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <img className="" src={IgedlaLogo} alt="Igedla-logo" />
          <p className="text-xl lg:text-2xl mt-6 font-roboto text-blue-800 font-light">
            Igedla provides quick and easy results—so you know what’s going on right away and how to
            fix it:
          </p>
          <p className="mt-8 md:mt-12 font-roboto">
          <a href='https://play.google.com/store/apps/details?id=com.igedla.health&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
            <Button className="font-roboto" size="lg">Get the App!</Button>
          </a>
          </p>
          <p className="mt-4 text-gray-600 font-roboto">Available on iOS and Android</p>
        </div>
        <div className="lg:w-1/2 relative">
          <img
            className="hidden mx-auto lg:mb-32 lg:ml-64 lg:inline-flex rounded-lg lg:absolute shadow-3xl-blue-wide"
            src={WelcomeScreenShot}
            alt="Welcome screenshot"
          />
          <img

            className="hidden mt-48 ml-32 lg:inline-flex rounded-lg  absolute z-10 shadow-3xl-blue-wide"
            src={GetResultsScreenShot}
            alt="Get results faster"
          />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold font-roboto text-blue-800">
          Let's Get Started
        </h2>

        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8 bg-blue-400">
              <p className="font-semibold  font-roboto text-xl">What's going on:</p>
              <p className="mt-4 font-roboto">
                Igedla/Iggy understands you and helps you make sense of your symptoms.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8 bg-blue-400">
              <p className="font-semibold  font-roboto text-xl">How to fix it:</p>
              <p className="mt-4 font-roboto">
                Whether it's self-care or urgent care, Iggy will always recommend the right next
                steps
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8 bg-blue-400">
              <p className="font-semibold font-roboto text-xl">Iggy Checks Back in:</p>
              <p className="mt-4 font-roboto">
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
          <h3 className="text-2xl font-semibold  font-roboto leading-tight text-blue-800">
            Check your symptoms
          </h3>
          <p className="mt-8 text-xl font-light  font-roboto leading-relaxed text-blue-900">
            Learn more about your symptoms and get results fast! Enter multiple symptoms in free
            text with over 6,000 diseases covered
          </p>
        </div>
      }
      secondarySlot={<img className="lg:ml-16 rounded-lg shadow-3xl-blue" src={TellUsYourSymptomsScreenShot} alt="chatbot-clipart" />}
    />
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-2xl font-semibold font-roboto leading-tight text-blue-800">
            Assess your risk for COVID-19
          </h3>
          <p className="mt-8 text-xl font-light font-roboto leading-relaxed text-blue-900">
            Are you at a higher risk of COVID complications, experiencing symptoms, or recently
            exposed. Igedla can provide guidance on the best treatment options.
          </p>
        </div>
      }
      secondarySlot={<img src={CovidTransparent} alt="covid-logo" />}
    />
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center font-roboto">
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
      <h3 className="text-5xl font-semibold text-blue-800 font-roboto">
        How are you feeling today?
      </h3>
      <p className="mt-8 text-xl font-light text-blue-800 font-roboto">
        Download Igedla and try it out for yourself
      </p>
      <p className="mt-8 flex justify-center">
        <a href='https://play.google.com/store/apps/details?id=com.igedla.health&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
          <img 
            alt='Get it on Google Play' 
            src={GooglePlayBadge}
          />
        </a>
      </p>
    </section>
  </Layout>
);
