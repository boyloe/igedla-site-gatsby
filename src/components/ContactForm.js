/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik, Field, Form } from 'formik';
import { formatClassNames } from '../functions/formatClassNames';

const ContactForm = () => {
  return (
    <div className="h-screen bg-cover flex justify-center">
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        }}
        onSubmit={(values, { resetForm }) => {
          fetch('https://formspree.io/f/meqpvopg', {
            method: 'POST',
            headers: {
              Accept: 'Application/json'
            },
            body: JSON.stringify(values)
          })
            .then(response => response.json())
            .then(console.log);
          resetForm();
        }}
      >
        <Form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="first-name"
              >
                First Name
              </label>
              <Field
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="first-name"
                name="firstName"
                type="text"
                placeholder="Jane"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="last-name"
              >
                Last Name
              </label>
              <Field
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="last-name"
                name="lastName"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                E-mail
              </label>
              <Field
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                name="email"
                type="email"
                placeholder="janedoe@gmail.com"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <Field
                className={formatClassNames(
                  'no-resize',
                  'appearance-none',
                  'block',
                  'w-full',
                  'bg-gray-200',
                  'text-gray-700',
                  'border',
                  'border-gray-200',
                  'rounded',
                  'py-3',
                  'px-4',
                  'mb-3',
                  'leading-tight',
                  'focus:outline-none',
                  'focus:bg-white',
                  'focus:border-gray-500',
                  'h-48',
                  'resize-none'
                )}
                id="message"
                name="message"
                as="textarea"
                placeholder="What can we do for you today?"
              />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className={formatClassNames(
                  'shadow-lg',
                  'bg-teal-400',
                  'hover:bg-teal-500',
                  'focus:shadow-outline',
                  'focus:outline-none',
                  'text-white',
                  'font-bold',
                  'py-2',
                  'px-4',
                  'rounded'
                )}
                type="submit"
              >
                Send
              </button>
            </div>
            <div className="md:w-2/3" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactForm;
