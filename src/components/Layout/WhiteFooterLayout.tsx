import React from 'react';
import Footer from '../LandingPage/Footer';

export const WhiteFooterLayout = ({ children, theme = "yellow" }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        {children}
      </div>
      <div>
        <Footer bgColor="bg-white ipad-pro:bg-white lg:bg-[#F9FAFB]" theme={theme} />
      </div>
    </div>
  );
};

export default WhiteFooterLayout;