import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from 'react-router-dom';
import logo from "../../assets/img/logo.png";

const Navbar = ({ alwaysWhite = false }) => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrolled, setScrolled] = useState(false);

  const menuRef = useRef(null);
  const moreRef = useRef(null);
  const mobileMoreRef = useRef(null);
  const moreButtonRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (windowWidth >= 768) {
      setIsMenuOpen(false);
      setMobileMoreOpen(false);
    }
  }, [windowWidth]);

  useEffect(() => {
    const handleClickOutside = (e) => {

      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }

      if (mobileMoreRef.current && !mobileMoreRef.current.contains(e.target)) {
        setMobileMoreOpen(false);
      }

      if (moreRef.current && !moreRef.current.contains(e.target) && 
          moreButtonRef.current && !moreButtonRef.current.contains(e.target)) {
        setIsMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavLinkClick = () => {
    setIsMoreOpen(false);
    setIsMenuOpen(false);
    setMobileMoreOpen(false);
  };

  const navBgClass = alwaysWhite ? 'bg-white' : (scrolled ? 'bg-white' : 'bg-transparent');

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full transition-all duration-300 z-50 ${navBgClass}`}>

      <div className="hidden md:flex items-center w-full px-7 lg:px-14 py-6">
        <div className="flex items-center">
          <div className="mr-8">
          <Link to="/" className="cursor-pointer" onClick={handleNavLinkClick}><img src={logo} alt="Logo" className="w-24" /></Link>
          </div>
          <div>
            <ul className="flex space-x-5 text-lg font-semibold text-black">
              <li><Link to="/" className="cursor-pointer" onClick={handleNavLinkClick}>Accueil</Link></li>
              <li><Link to="/features" className="cursor-pointer" onClick={handleNavLinkClick}>Fonctionnalités</Link></li>
              <li><Link to="/clients" className="cursor-pointer" onClick={handleNavLinkClick}>Clients</Link></li>
              <li><Link to="/contact" className="cursor-pointer" onClick={handleNavLinkClick}>Contact</Link></li>
              <li ref={moreButtonRef} className="cursor-pointer" onClick={() => setIsMoreOpen(!isMoreOpen)}>Plus</li>
            </ul>
          </div>
        </div>
      </div>

      {isMoreOpen && windowWidth >= 768 && (
        <div ref={moreRef} className="fixed top-20 left-0 md:left-40 w-full md:w-[600px] bg-white shadow-lg p-6 border rounded-lg z-50">
          <div className="flex flex-row justify-start space-x-8">
            <div>
              <h3 className="font-bold text-lg mb-6">Nos Solutions</h3>
              <ul className="space-y-6 w-44">
                <li><Link to="/verifdsn" className="cursor-pointer" onClick={handleNavLinkClick}>VERIF'DSN</Link></li>
                <li><Link to="/verifdsnplus" className="cursor-pointer" onClick={handleNavLinkClick}>VERIF'DSN PLUS</Link></li>
                <li className="cursor-pointer flex flex-col"><Link to="/SolwaySynchronisationHRPage" onClick={handleNavLinkClick}>
                  <span>SOLWAY</span><br />
                  <span>Synchronisation HR</span>
                </Link></li>
                <li><Link to="/soldeskpage" className="cursor-pointer" onClick={handleNavLinkClick}>SOLDESK</Link></li>
                <li><Link to="/solwayhrpage" className="cursor-pointer" onClick={handleNavLinkClick}>SOLWAY HR</Link></li>
                <li><Link to="/solwayInvoice" className="cursor-pointer" onClick={handleNavLinkClick}>SOLWAY INVOICE</Link></li>
                <li className="cursor-pointer flex flex-col"><Link to="/associationsolway" onClick={handleNavLinkClick}>
                  <span>ASSOCIATION SOLWAY</span><br />
                  <span>POUR LA SOLIDARITE</span>
                </Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6">Carrières</h3>
              <ul className="space-y-6 w-44">
                <li><Link to="/OffresdemploisPage" className="cursor-pointer" onClick={handleNavLinkClick}>Nos Offres D'emploi</Link></li>
                <li><Link to="/CandidaturePage" className="cursor-pointer" onClick={handleNavLinkClick}>Candidatures</Link></li>
                <li><Link to="/NosmissionsPage" className="cursor-pointer" onClick={handleNavLinkClick}>Nos Missions</Link></li>
                <li><Link to="/VosmissionsPage" className="cursor-pointer" onClick={handleNavLinkClick}>Vos Missions</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6">Formations</h3>
              <ul className="space-y-2">
                <li><Link to="/executive-education" className="cursor-pointer" onClick={handleNavLinkClick}>SOLWAY Executive Education</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className={`md:hidden w-full p-4 flex justify-between items-center ${alwaysWhite ? 'bg-white' : (scrolled ? 'bg-white' : 'bg-transparent')}`}>
      <Link to="/" className="cursor-pointer" onClick={handleNavLinkClick}><img src={logo} alt="Logo" className="w-28 h-8" /></Link>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-auto">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && windowWidth < 768 && (
        <div ref={menuRef} className="absolute top-[64px] left-1/2 transform -translate-x-1/2 w-[80%] bg-zinc-50 max-w-[400px] z-50 p-6 flex flex-col items-center space-y-6 shadow-lg">
          {!mobileMoreOpen ? (
            <ul className="text-lg font-semibold text-black space-y-4 w-full">
              <li className="cursor-pointer pt-4 w-full text-center"><Link to="/" onClick={handleNavLinkClick}>Accueil</Link></li>
              <li className="cursor-pointer border-t pt-4 w-full text-center"><Link to="/features" onClick={handleNavLinkClick}>Fonctionnalités</Link></li>
              <li className="cursor-pointer border-t pt-4 w-full text-center"><Link to="/clients" onClick={handleNavLinkClick}>Clients</Link></li>
              <li className="cursor-pointer border-t pt-4 w-full text-center"><Link to="/contact" onClick={handleNavLinkClick}>Contact</Link></li>
              <li className="cursor-pointer flex items-center justify-center border-t pt-4 w-full text-center" onClick={() => setMobileMoreOpen(true)}>
              Plus <ArrowRight size={16} className="ml-1" />
              </li>
            </ul>
          ) : (
            <div ref={mobileMoreRef} className="w-full bg-white p-4 flex flex-col items-start space-y-6 rounded-lg max-h-[80vh] overflow-y-auto">
              <button
                onClick={() => setMobileMoreOpen(false)}
                className="flex items-center bg-slate-100 border border-gray-300 p-2 rounded-lg"
              >
                <ArrowLeft size={16} className="mr-2" /> Retour
              </button>
              <div className="space-y-6 w-full">
                <div>
                  <h3 className="font-bold text-lg mb-4">Nos Solutions</h3>
                  <ul className="grid grid-cols-2 text-xs gap-4 w-full">
                    <li><Link to="/verifdsn" className="cursor-pointer" onClick={handleNavLinkClick}>VERIF'DSN</Link></li>
                    <li><Link to="/solwayhrpage" className="cursor-pointer" onClick={handleNavLinkClick}>SOLWAY HR</Link></li>
                    <li><Link to="/verifdsnplus" className="cursor-pointer" onClick={handleNavLinkClick}>VERIF'DSN PLUS</Link></li>
                    <li><Link to="/solwayInvoice" className="cursor-pointer" onClick={handleNavLinkClick}>SOLWAY INVOICE</Link></li>
                    <li className="cursor-pointer"><Link to="/SolwaySynchronisationHRPage" onClick={handleNavLinkClick}>SOLWAY <br />Synchronisation HR</Link></li>
                    <li className="cursor-pointer"><Link to="/associationsolway" onClick={handleNavLinkClick}>ASSOCIATION SOLWAY POUR LA SOLIDARITE</Link></li>
                    <li><Link to="/soldeskpage" className="cursor-pointer" onClick={handleNavLinkClick}>SOLDESK</Link></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-4">Carrières</h3>
                  <ul className="grid grid-cols-2 gap-4 w-full">
                    <li><Link to="/OffresdemploisPage" className="cursor-pointer" onClick={handleNavLinkClick}>Nos Offres D'emploi</Link></li>
                    <li><Link to="/NosmissionsPage" className="cursor-pointer" onClick={handleNavLinkClick}>Nos Missions</Link></li>
                    <li><Link to="/CandidaturePage" className="cursor-pointer" onClick={handleNavLinkClick}>Candidatures</Link></li>
                    <li><Link to="/VosmissionsPage" className="cursor-pointer" onClick={handleNavLinkClick}>Vos Missions</Link></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-4">Formations</h3>
                  <ul className="space-y-2">
                    <li><Link to="/executive-education" className="cursor-pointer" onClick={handleNavLinkClick}>SOLWAY Executive<br /> Education</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;