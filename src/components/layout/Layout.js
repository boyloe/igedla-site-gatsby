import React from 'react';
import Helmet from 'react-helmet';
import Footer from './Footer';
import Header from './Header';
import favicon from '../../assets/logo-square.png';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet title="Igedla - Check symptoms, get fast results!" defer={false}>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
