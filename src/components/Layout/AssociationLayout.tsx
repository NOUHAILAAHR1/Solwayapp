import React from 'react';
import Footer from '../LandingPage/Footer';

export const AssociationLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        {children}
      </div>
      <Footer theme="green" />
    </div>
  );
};

export default AssociationLayout;