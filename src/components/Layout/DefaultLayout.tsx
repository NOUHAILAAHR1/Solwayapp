import React from 'react';
import Footer from '../LandingPage/Footer';

export const DefaultLayout = ({ children, theme = "yellow" }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        {children}
      </div>
      <Footer theme={theme} />
    </div>
  );
};

export default DefaultLayout;