import React from 'react';
import Navbar from '../LandingPage/Navbar';
import Footer from '../LandingPage/Footer';

export const DefaultLayout = ({
  children,
  theme = "yellow",
  alwaysWhiteNavbar = true
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar alwaysWhite={alwaysWhiteNavbar} />
      <div className="flex-grow">
        {children}
      </div>
      <Footer theme={theme} />
    </div>
  );
};

export default DefaultLayout;