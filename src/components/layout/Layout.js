import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Header from './Header';
import favicon from '../../assets/logo-square.png';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Igedla - Check symptoms, get fast results</title>
        <link rel="icon" href={favicon} />
        <meta
          name="google-site-verification"
          content="1V8-wr0sqaFly9Uu158yzQnd5EX8Vb11YdYsRhNruyQ"
        />
      </Helmet>
      <Header />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
