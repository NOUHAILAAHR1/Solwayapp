import React from 'react';
import Navbar from '../LandingPage/Navbar';
import Footer from '../LandingPage/Footer';
import AssociationSolway from '../AssociationSolwayPage/Hero';

const AssociationLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar alwaysWhite={true} />
      <div className="flex-grow">
        <AssociationSolway />
      </div>
      <Footer theme="green" />
    </div>
  );
};

export default AssociationLayout;