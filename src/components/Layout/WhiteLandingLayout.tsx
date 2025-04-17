import React from 'react';
import LandingLayout from './LandingLayout';

const WhiteLandingLayout = ({ children }) => {
  return <LandingLayout footerBgColor="white">{children}</LandingLayout>;
};

export default WhiteLandingLayout;