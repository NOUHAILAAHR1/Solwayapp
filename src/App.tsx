import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import VerifdsnPage from './pages/VerifDsnPage';
import VerifdsnPlusPage from './pages/VerifdsnPlusPage';
import SolwaySynchronisationHRPage from './pages/SolwaySynchronisationHRPage'
import SoldeskPage from './pages/SoldeskPage';
import SolwayhrPage from './pages/SolwayhrPage';




export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/verifdsn" element={<VerifdsnPage />} />
      <Route path="/verifdsnplus" element={<VerifdsnPlusPage />} />
      <Route path="/SolwaySynchronisationHRPage" element={<SolwaySynchronisationHRPage />} />
      <Route path="/soldeskpage" element={<SoldeskPage />} />
      <Route path="/solwayhrpage" element={<SolwayhrPage />} />

      
    </Routes>
  </BrowserRouter>
  );
}
