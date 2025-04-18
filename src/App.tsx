import React from 'react';
import './App.css'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={
          <LandingLayout theme="yellow">
            <LandingPage />
          </LandingLayout>
        } />
        
        <Route path="/associationsolway" element={
          <AssociationLayout>
            <AssociationSolwayPage />
          </AssociationLayout>
        } />
        
        
        <Route path="/about" element={
          <DefaultLayout theme="yellow">
            <AboutPage />
          </DefaultLayout>
        } />

        <Route path="/verifdsn" element={
          <DefaultLayout theme="yellow">
            <VerifdsnPage />
          </DefaultLayout>
        } />

        <Route path="/solwayhrpage" element={
          <DefaultLayout theme="yellow">
            <SolwayhrPage />
          </DefaultLayout>
        } />

        <Route path="/contact" element={
          <DefaultLayout theme="yellow">
            <ContactPage />
          </DefaultLayout>
        } />

        <Route path="/verifdsnplus" element={
          <DefaultLayout theme="yellow">
            <VerifdsnPlusPage />
          </DefaultLayout>
        } />

        <Route path="/SolwaySynchronisationHRPage" element={
          <DefaultLayout theme="yellow">
            <SolwaySynchronisationHRPage />
          </DefaultLayout>
        } />

        <Route path="/soldeskpage" element={
          <DefaultLayout theme="yellow">
            <SoldeskPage />
          </DefaultLayout>
        } />

        <Route path="/solwayInvoice" element={
          <DefaultLayout theme="yellow">
            <SolwayInvoicePage />
          </DefaultLayout>
        } />

        <Route path="/OffresdemploisPage" element={
          <WhiteFooterLayout theme="yellow">
            <OffresdemploisPage />
          </WhiteFooterLayout>
        } />

        <Route path="/CandidaturePage" element={
          <DefaultLayout theme="yellow">
            <CandidaturePage />
          </DefaultLayout>
        } />

         <Route path="/NosmissionsPage" element={
          <DefaultLayout theme="yellow">
            <NosmissionsPage />
          </DefaultLayout>
        } />


         <Route path="/VosmissionsPage" element={
          <DefaultLayout theme="yellow">
            <VosmissionsPage/>
          </DefaultLayout>
        } />


      </Routes>
    </BrowserRouter>
  );
}

export default App;