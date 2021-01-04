import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'gatsby';
import SquareLogo from '../../assets/logo-square.png';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl text-blue-800">
        <div className="w-12 mr-3">
          <img src={SquareLogo} alt="Igedla Logo" />
        </div>
        Igedla
      </div>
      <div className="flex md:justify-end mt-4 sm:mt-0 ">
        <AnchorLink className="px-6" href="#features">
          Home
        </AnchorLink>
        <AnchorLink className="px-6" href="#services">
          About
        </AnchorLink>
        <Link className="px-6" to="/employers">
          For Employers{' '}
        </Link>
        <AnchorLink className="px-6" href="#stats">
          FAQ
        </AnchorLink>
        <AnchorLink className="px-6" href="#testimonials">
          Contact
        </AnchorLink>
      </div>
      <div className="hidden md:block" />
    </div>
  </header>
);

export default Header;
