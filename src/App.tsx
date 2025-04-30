import React from 'react';
import './i18n';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/LandingPage/Navbar';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import VerifdsnPage from './pages/VerifDsnPage';
import VerifdsnPlusPage from './pages/VerifdsnPlusPage';
import SolwaySynchronisationHRPage from './pages/SolwaySynchronisationHRPage';
import SoldeskPage from './pages/SoldeskPage';
import SolwayhrPage from './pages/SolwayhrPage';
import SolwayInvoicePage from './pages/SolwayInovoicePage';
import AssociationSolwayPage from './pages/AssociationSolwayPage';
import OffresdemploisPage from './pages/OffresdemploisPage';
import CandidaturePage from './pages/CandidaturePage';
import NosmissionsPage from './pages/NosmissionsPage';
import VosmissionsPage from './pages/VosmissionsPage';
import DefaultLayout from './components/Layout/DefaultLayout';
import WhiteFooterLayout from './components/Layout/WhiteFooterLayout';
import LandingLayout from './components/Layout/LandingLayout';
import AssociationLayout from './components/Layout/AssociationLayout';


const OffreEmploiLayout = ({ children, theme }) => {
  return (
    <div className="min-h-screen bg-gray-50 ipad-pro:bg-white">
      <Navbar alwaysWhite={true} />
      <WhiteFooterLayout theme={theme}>
        {children}
      </WhiteFooterLayout>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={
          <LandingLayout theme="yellow">
            <LandingPage />
          </LandingLayout>
        } />
       
        <Route path="/association-solway" element={
          <AssociationLayout>
            <AssociationSolwayPage />
          </AssociationLayout>
        } />
       
       
        <Route path="/about" element={
           <LandingLayout theme="yellow">
            <AboutPage />
          </LandingLayout>
        } />
        <Route path="/verifdsn" element={
          <DefaultLayout theme="yellow">
            <VerifdsnPage />
          </DefaultLayout>
        } />
        <Route path="/solway-hr-page" element={
          <DefaultLayout theme="yellow">
            <SolwayhrPage />
          </DefaultLayout>
        } />
        <Route path="/contact" element={
          <DefaultLayout theme="yellow" alwaysWhiteNavbar={false}>
            <ContactPage />
          </DefaultLayout>
        } />
        <Route path="/verifdsn-plus" element={
          <DefaultLayout theme="yellow">
            <VerifdsnPlusPage />
          </DefaultLayout>
        } />
        <Route path="/Solway-Synchronisation-HR-Page" element={
          <DefaultLayout theme="yellow">
            <SolwaySynchronisationHRPage />
          </DefaultLayout>
        } />
        <Route path="/soldesk-page" element={
          <DefaultLayout theme="yellow">
            <SoldeskPage />
          </DefaultLayout>
        } />
        <Route path="/solway-Invoice" element={
          <DefaultLayout theme="yellow">
            <SolwayInvoicePage />
          </DefaultLayout>
        } />
        <Route path="/Offres-demplois-Page" element={
          <OffreEmploiLayout theme="yellow">
            <OffresdemploisPage />
          </OffreEmploiLayout>
        } />
        <Route path="/Candidature-Page" element={
          <DefaultLayout theme="yellow" alwaysWhiteNavbar={false}>
            <CandidaturePage />
          </DefaultLayout>
        } />
         <Route path="/Nosmissions-Page" element={
        <DefaultLayout theme="yellow" alwaysWhiteNavbar={false}>
            <NosmissionsPage />
          </DefaultLayout>
        } />
        
         <Route path="/Vosmissions-Page" element={
          <DefaultLayout theme="yellow" alwaysWhiteNavbar={false}>
            <VosmissionsPage/>
          </DefaultLayout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;