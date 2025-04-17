import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, ArrowLeft } from "lucide-react";
import youtubeImage from "../../assets/img/youtube.png";
import youtube2Image from "../../assets/img/youtube2.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const moreMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const moreButtonRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth >= 768) {
      setIsMenuOpen(false);
    }
  }, [windowWidth]);

  useEffect(() => {
    const handleClickOutside = (event) => {
     
      if (isMoreOpen && 
          moreMenuRef.current && 
          !moreMenuRef.current.contains(event.target) &&
          moreButtonRef.current && 
          !moreButtonRef.current.contains(event.target)) {
        setIsMoreOpen(false);
      }
      
     
      if (isMenuOpen && 
          mobileMenuRef.current && 
          !mobileMenuRef.current.contains(event.target) &&
          menuButtonRef.current && 
          !menuButtonRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMoreOpen, isMenuOpen]);

  const handleNavLinkClick = (e) => {
    setTimeout(() => {
      setIsMoreOpen(false);
      setIsMenuOpen(false);
    }, 100);
  };

  return (
    <nav className="relative w-full bg-[#FFFFFF] shadow-lg pb-8 z-50">
      <div className="hidden md:flex flex-col w-full">
        <div className="w-full flex flex-row items-center justify-between px-14 py-6">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-8">
              <img
                src="./src/assets/img/logo.png"
                alt="Logo"
                className="w-36 h-10"
              />
            </div>
            <div>
              <ul className="flex space-x-6 text-lg font-semibold text-black">
                <li><Link to="/" className="cursor-pointer" onClick={handleNavLinkClick}>Home</Link></li>
                <li><Link to="/features" className="cursor-pointer" onClick={handleNavLinkClick}>Features</Link></li>
                <li><Link to="/clients" className="cursor-pointer" onClick={handleNavLinkClick}>Clients</Link></li>
                <li><Link to="/contact" className="cursor-pointer" onClick={handleNavLinkClick}>Contact</Link></li>
                <li
                  ref={moreButtonRef}
                  className="cursor-pointer"
                  onClick={() => setIsMoreOpen(!isMoreOpen)}
                >
                  More
                </li>
              </ul>
            </div>
          </div>
        </div>

        {isMoreOpen && (
          <div 
            ref={moreMenuRef}
            className="absolute top-24 left-1/2 transform -translate-x-1/2 w-[600px] bg-white shadow-lg p-6 border rounded-lg z-50"
          >
            <div className="flex flex-row justify-center space-x-8">
              <div>
                <h3 className="font-bold text-lg mb-6">Nos Solutions</h3>
                <ul className="space-y-6 w-44">
                  <li><Link to="/verifdsn" className="cursor-pointer" onClick={handleNavLinkClick}>VERIF'DSN</Link></li>
                  <li><Link to="/verifdsnplus" className="cursor-pointer" onClick={handleNavLinkClick}> VERIF'DSN PLUS</Link></li>
                  <li className="cursor-pointer flex flex-col">
                    <Link to="/SolwaySynchronisationHRPage" onClick={handleNavLinkClick}>
                      <span>SOLWAY</span><br/>
                      <span>Synchronisation HR</span>
                    </Link>
                  </li>
                  <li><Link to="/soldeskpage" className="cursor-pointer" onClick={handleNavLinkClick}>SOLDESK</Link></li>
                  <li><Link to="/solwayhrpage" className="cursor-pointer" onClick={handleNavLinkClick}>SOLWAY HR</Link></li>
                  <li><Link to="/solwayInvoice" className="cursor-pointer" onClick={handleNavLinkClick}>SOLWAY INVOICE</Link></li>
                  <li className="cursor-pointer flex flex-col">
                    <Link to="/associationsolway" onClick={handleNavLinkClick}>
                      <span>ASSOCIATION SOLWAY</span><br/>
                      <span>POUR LA SOLIDARITE</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-6">Carrières</h3>
                <ul className="space-y-6 w-44">
                  <li><Link to="/OffresdemploisPage" className="cursor-pointer" onClick={handleNavLinkClick}>Nos Offres D'emploi</Link></li>
                  <li ><Link to="/CandidaturePage" className="cursor-pointer" onClick={() => setIsMoreOpen(false)}> Candidatures</Link></li>
                  <li><Link to="/NosmissionsPage" className="cursor-pointer" onClick={() => setIsMoreOpen(false)}>Nos Missions </Link> </li>
                    <li><Link to="/VosmissionsPage" className="cursor-pointer" onClick={() => setIsMoreOpen(false)}>Vos Missions</Link></li>
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

        <div className="flex flex-row flex-grow lg:px-14 ipad-pro:px-0 md:px-0 justify-center">
          <div className="w-full max-w-6xl flex items-center">
          
            <div className="w-full grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-8 lg:gap-16 xl:gap-24 2xl:gap-32 md:p-8">
        
              <div className="md:w-full lg:w-full xl:w-full 2xl:w-full space-y-6 text-center md:text-center lg:text-center">
                <div>
                  <h1 className="text-3xl font-extrabold text-[#030712]  pt-12 mb-4">
                    VERIF'DSN 
                  </h1>
                  <p className="text-medium text-[#030712] max-w-xl mx-auto">
                  Optimisez la gestion de vos DSN comme jamais auparavant ! Détectez les erreurs en un instant, facilitez le travail de vos gestionnaires de paie avec des contrôles rapides et efficaces, et libérez un temps précieux pour vous consacrer à des tâches stratégiques. Avec Verif'DSN, dites adieu aux complications et bonjour à la simplicité et à la performance !
                  </p>
                </div>
              </div>

      
              <div className="md:w-full lg:w-full xl:w-full 2xl:w-full h-full flex items-center justify-center">
                <img src={youtubeImage} alt="YouTube" className="max-w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden w-full bg-[#FFFFFF] p-4 flex justify-between items-center">
        <img src="./src/assets/img/logo.png" alt="Logo" className="w-28 h-8" />
        <button 
          ref={menuButtonRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="ml-auto"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="absolute top-[64px] left-1/2 transform -translate-x-1/2 w-[80%] bg-white max-w-[400px] z-50 p-6 flex flex-col items-center space-y-6 rounded-b-lg shadow-lg"
        >
          <ul className="text-lg font-semibold text-black space-y-4 w-full">
            <li className="cursor-pointer pt-4 w-full text-center">
              <Link to="/" onClick={handleNavLinkClick}>Home</Link>
            </li>
            <li className="cursor-pointer border-t border-gray-300 pt-4 w-full text-center">
              <Link to="/features" onClick={handleNavLinkClick}>Features</Link>
            </li>
            <li className="cursor-pointer border-t border-gray-300 pt-4 w-full text-center">
              <Link to="/clients" onClick={handleNavLinkClick}>Clients</Link>
            </li>
            <li className="cursor-pointer border-t border-gray-300 pt-4 w-full text-center">
              <Link to="/contact" onClick={handleNavLinkClick}>Contact</Link>
            </li>
            <li
              className="cursor-pointer flex items-center justify-center border-t pt-4 w-full text-center"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsMoreOpen(true);
              }}
            >
              More <ArrowRight size={16} className="ml-1" />
            </li>
          </ul>

          {isMoreOpen && (
             <div ref={moreMenuRef} className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[600px] bg-white z-50 p-4 flex flex-col items-start space-y-6 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">
             <button
               onClick={() => setIsMoreOpen(false)}
               className="flex items-center bg-slate-100 border border-gray-300 p-2 rounded-lg "
             >
               <ArrowLeft size={16} className="mr-2" /> Back
             </button>
             <div className="space-y-6 w-full">
               <div>
                 <h3 className="font-bold text-lg mb-4">Nos Solutions</h3>
                 <ul className="grid grid-cols-2 text-xs gap-4 w-full">
                   <li><Link to="/verifdsn" className="cursor-pointer">VERIF’DSN</Link></li>
                   <li><Link to="/solwayhrpage" className="cursor-pointer">SOLWAY HR</Link></li>
                   <li><Link to="/verifdsnplus" className="cursor-pointer">VERIF'DSN PLUS</Link></li>
                   <li><Link to="/solwayInvoice" className="cursor-pointer">SOLWAY INVOICE</Link></li>
                   <li className="cursor-pointer"><Link to="/SolwaySynchronisationHRPage" className="cursor-pointer">SOLWAY <br />Synchronisation HR</Link></li>
                   <li className="cursor-pointer"><Link to="/associationsolway" className="cursor-pointer">ASSOCIATION SOLWAY POUR LA SOLIDARITE</Link></li>
                   <li><Link to="/soldeskpage" className="cursor-pointer">SOLDESK</Link></li>
                 </ul>
               </div>

               <div>
                 <h3 className="font-bold text-lg mb-4">Carrières</h3>
                 <ul className="grid grid-cols-2 gap-4 w-full">
                   <li><Link to="/OffresdemploisPage" className="cursor-pointer">Nos Offres D’emploi</Link></li>
                   <li><Link to="/NosmissionsPage " className="cursor-pointer">Nos Missions</Link></li>
                   <li><Link to="/CandidaturePage " className="cursor-pointer"> Candidatures</Link></li>
                   <li><Link to="/VosmissionsPage " className="cursor-pointer">Vos Missions</Link></li>
                 </ul>
               </div>

               <div>
                 <h3 className="font-bold text-lg mb-4">Formations</h3>
                 <ul className="space-y-2">
                   <li className="cursor-pointer">SOLWAY Executive<br /> Education</li>
                 </ul>
               </div>
             </div>
           </div>
         )}
                    
        </div>
      )}

      <div className="md:hidden w-full flex flex-col items-center text-center pt-10">
        <div className="p-4">
          <h1 className="text-3xl font-extrabold text-[#030712] mb-4">
            VERIF'DSN 
          </h1>
          <p className="text-medium text-[#030712] max-w-xl mx-auto">
          Optimisez la gestion de vos DSN comme jamais auparavant ! Détectez les erreurs en un instant, facilitez le travail de vos gestionnaires de paie avec des contrôles rapides et efficaces, et libérez un temps précieux pour vous consacrer à des tâches stratégiques. Avec Verif'DSN, dites adieu aux complications et bonjour à la simplicité et à la performance !
          </p>
        </div>

        <div className="w-full px-4 pt-12">
          <img src={youtube2Image} alt="YouTube" className="max-w-full h-auto" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;