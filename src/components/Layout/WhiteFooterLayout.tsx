import React from 'react';
import Footer from '../LandingPage/Footer';

export const WhiteFooterLayout = ({ children, theme = "yellow" }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        {children}
      </div>
      <div className="bg-bg-white ipad-pro:bg-bg-white md:bg-white sm:bg-white lg:bg-[#F9FAFB]">
        <Footer bgColor="white" theme={theme} />
      </div>
    </div>
  );
};

export default WhiteFooterLayout;