/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'gatsby';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
// import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import GetResultsScreenShot from '../assets/ScreenShots/igedla_mobile_welcome_screensWelcome-Screen---03.png';
import TellUsYourSymptomsScreenShot from '../assets/ScreenShots/igedla_mobile_welcome_screensWelcome-Screen---02.png';
import IgedlaLogo from '../assets/cropped-logo-igedla.png';
import CovidTransparent from '../assets/coronavirus_transparent.png';
import GooglePlayBadge from '../assets/google-play-badge.png';
import AppStoreBlackBadge from '../assets/appStoreBadges/black.svg';

export default () => (
  <Layout>
    <section className="h-fit pt-10 md:py-12 bg-blue-200">
      <div className="container mx-auto px-2 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <img className="" src={IgedlaLogo} alt="Igedla-logo" />
          <p className="text-xl lg:text-2xl mt-6 font-roboto text-blue-800 font-light">
            Our symptom checker provides a quick assessment of possible causes---so you know what's
            going on right away and how to fix it.
          </p>
          <p className="text-xl lg:text-2xl mt-6 font-roboto text-blue-800 font-light">
            If something doesn't feel quite right ask Iggy!
          </p>
          <p className="mt-8 md:mt-12 font-roboto">
            <Link to="#download">
              <Button className="font-roboto mt-12 " size="lg">
                Get the App!
              </Button>
            </Link>
          </p>
          <p className="mt-4 text-gray-600 font-roboto pb-10 font-bold">
            Available on iOS and Android
          </p>
        </div>
        <div className="ml-24 lg:w-1/2 relative">
          <img
            className="hidden mx-auto lg:mb-32 lg:ml-20 lg:inline-flex rounded-lg lg:absolute shadow-3xl-blue-wide z-10"
            src={TellUsYourSymptomsScreenShot}
            alt="Welcome screenshot"
          />
          <img
            className="hidden mt-32 ml-64 lg:inline-flex rounded-lg  absolute shadow-3xl-blue-wide"
            src={GetResultsScreenShot}
            alt="Get results faster"
          />
        </div>
      </div>
    </section>
    <h2 className="text-center pt-4 text-3xl lg:text-5xl md:pt-8 font-semibold font-roboto text-blue-800">
      Let's Get Started!
    </h2>
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-xl mx-auto lg:text-2xl font-semibold  font-roboto leading-tight text-blue-800">
            Check your symptoms
          </h3>
          <p className="mt-8 text-xl font-light  font-roboto leading-relaxed text-blue-900">
            Learn more about your symptoms and get results fast! Enter multiple symptoms in free
            text with over 6,000 diseases covered
          </p>
        </div>
      }
      secondarySlot={
        <img
          className="mx-auto lg:ml-40 rounded-lg shadow-3xl-blue"
          src={TellUsYourSymptomsScreenShot}
          alt="chatbot-clipart"
        />
      }
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
      secondarySlot={<img className="" src={CovidTransparent} alt="covid-logo" />}
    />
    <section id="features" className="py-0 lg:pb-32 lg:pt-32">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold font-roboto text-blue-800">
          How Iggy Can Help You
        </h2>

        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8 bg-blue-400 text-white">
              <p className="font-semibold  font-roboto text-xl">What's going on:</p>
              <p className="mt-4 font-roboto">
                Iggy understands you and helps you make sense of your symptoms.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8 bg-blue-400 text-white">
              <p className="font-semibold  font-roboto text-xl">How to fix it:</p>
              <p className="mt-4 font-roboto">
                Whether it's self-care or urgent care, Iggy will always recommend the right next
                steps
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="bg-blue-400 text-white">
              <p className="font-semibold font-roboto text-xl">Iggy checks back in:</p>
              <p className="mt-4 font-roboto">
                If you give us permission, we'll follow up on your progress via text
              </p>
            </Card>
          </div>
        </div>
      </div>
      <section id="testimonials" className="py-10 lg:py-20" />
      <div className="container mx-auto">
        <LabelText className="mb-8 text-blue-800 text-xl mx-4 text-center font-bold font-roboto">
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
    <section
      id="download"
      className="container mx-auto my-10 py-12 bg-blue-300 rounded-lg text-center"
    >
      <h3 className="text-5xl font-semibold text-blue-800 font-roboto">
        How are you feeling today?
      </h3>
      <p className="mt-8 text-2xl font-light text-blue-800 font-roboto">
        Download Igedla and try it out for yourself
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <p className="mt-8">
          <a href="https://play.google.com/store/apps/details?id=com.igedla.health&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
            <img alt="Get it on Google Play" src={GooglePlayBadge} />
          </a>
        </p>
        <p className="mt-8">
          <a href="https://apps.apple.com/us/app/igedla/id1534336584?itsct=apps_box&amp;itscg=30200">
            <img src={AppStoreBlackBadge} alt="Download on the App Store" />
          </a>
        </p>
      </div>
    </section>
  </Layout>
);
