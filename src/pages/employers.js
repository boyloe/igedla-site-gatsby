/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import IgedlaLogo from '../assets/cropped-logo-igedla.png';
import EmployeeScreener from '../assets/EmployeeScreener.png';
import AtRiskScreen from '../assets/AtRiskScreen.png';

export default () => (
  <Layout>
    <section className="h-screen pt-20 md:pt-40 bg-blue-300">
      <div className="container mx-auto px-8 lg:flex ">
        <div className="text-center lg:text-left lg:w-1/2">
          <img src={IgedlaLogo} alt="Igedla-logo" />
          <p className="mt-4 text-gray-600 italic">Bring your employees back to work safely</p>
          <p className="text-xl lg:text-2xl mt-6 font-roboto text-blue-800 font-light">
            Wherever your employess are located, Igedla can help you quickly screen for COVID-19
            symptoms and make data-driven decisions.
          </p>
        </div>
      </div>
    </section>
    <section>
      <SplitSection
        id="employee-screen"
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-2xl font-semibold leading-tight text-blue-800">
              Screen Your Employees
            </h3>
            <ul className="list-disc mt-8 text-xl font-light leading-relaxed text-blue-900">
              <li className="italic">Employees self-report in under a minute</li>
              <li className="italic">
                Save time with simple, customizable questions, no paper forms
              </li>
              <li className="italic">Avoid costly shutdowns through early detection</li>
              <li className="italic">Keep your employees' health data secure</li>
            </ul>
          </div>
        }
        secondarySlot={<img src={EmployeeScreener} alt="employee screener" />}
      />
      <SplitSection
        id="employee-screen"
        primarySlot={<img src={AtRiskScreen} alt="At risk screen" />}
        secondarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-2xl font-semibold leading-tight text-blue-800">
              Verify responses and plan accordingly
            </h3>
            <ul className="list-disc mt-8 text-xl font-light leading-relaxed text-blue-900">
              <li className="italic">Dynamic and easily customizable instructions</li>
              <li className="italic">Know quickly who is safe, at risk, or has no responded</li>
              <li className="italic">Make informed mitigation decisions</li>
              <li className="italic">Clearly communicate your COVID-19 protocol</li>
              <li className="italic">Quickly check responses at the door with Green/Red Pass</li>
            </ul>
          </div>
        }
      />
    </section>
  </Layout>
);
