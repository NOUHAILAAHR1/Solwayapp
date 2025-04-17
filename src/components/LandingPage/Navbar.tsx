import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, ArrowLeft } from "lucide-react";
import nav from "../../assets/img/nav.jpeg";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const menuRef = useRef(null);
  const moreRef = useRef(null);

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
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setIsMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="relative w-full md:max-h-screen lg:h-full ipad-pro:h-[50vh] bg-white rounded-b-lg md:rounded-none z-50">
      
    
      <div className="hidden md:flex items-start justify-between w-full h-screen">
        <div className="w-1/2 lg:w-1/2 md:w-3/4 ipad-pro:w-3/4 lg:pl-14 md:pl-8 flex flex-col items-start justify-center pl-14 space-y-6">
          <div className="flex flex-row items-center space-x-6 mt-6 mb-20">
            <div className="md:w-24 h-8">
              <img src="./src/assets/img/logo.png" alt="Logo" className="w-36 h-10" />
            </div>
            <div>
              <ul className="flex space-x-6 text-lg font-semibold text-black">
                <li><Link to="/" className="cursor-pointer">Home</Link></li>
                <li><Link to="/features" className="cursor-pointer">Features</Link></li>
                <li><Link to="/clients" className="cursor-pointer">Clients</Link></li>
                <li><Link to="/contact" className="cursor-pointer">Contact</Link></li>
                <li className="cursor-pointer" onClick={() => setIsMoreOpen(!isMoreOpen)}>More</li>
              </ul>
            </div>
          </div>

          {isMoreOpen && (
            <div ref={moreRef} className="absolute top-16 left-1/2 transform -translate-x-1/2 w-[600px] bg-white shadow-lg p-6 border rounded-lg z-50">
              <div className="flex flex-row justify-center space-x-8">
                <div>
                  <h3 className="font-bold text-lg mb-6">Nos Solutions</h3>
                  <ul className="space-y-6 w-44">
                    <li><Link to="/verifdsn" className="cursor-pointer">VERIF’DSN</Link></li>
                    <li><Link to="/verifdsnplus" className="cursor-pointer">VERIF'DSN PLUS</Link></li>
                    <li className="cursor-pointer flex flex-col"><Link to="/SolwaySynchronisationHRPage">
                      <span>SOLWAY</span><br />
                      <span>Synchronisation HR</span>
                    </Link></li>
                    <li><Link to="/soldeskpage" className="cursor-pointer">SOLDESK</Link></li>
                    <li><Link to="/solwayhrpage" className="cursor-pointer">SOLWAY HR</Link></li>
                    <li><Link to="/solwayInvoice" className="cursor-pointer">SOLWAY INVOICE</Link></li>
                    <li className="cursor-pointer flex flex-col"><Link to="/associationsolway">
                      <span>ASSOCIATION SOLWAY</span><br />
                      <span>POUR LA SOLIDARITE</span>
                    </Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-6">Carrières</h3>
                  <ul className="space-y-6 w-44">
                    <li><Link to="/OffresdemploisPage" className="cursor-pointer">Nos Offres D’emploi</Link></li>
                    <li><Link to="/CandidaturePage " className="cursor-pointer"> Candidatures</Link></li>
                    <li><Link to="/NosmissionsPage " className="cursor-pointer">Nos Missions</Link></li>
                 <li><Link to="/VosmissionsPage " className="cursor-pointer">Vos Missions</Link></li>
                
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-6">Formations</h3>
                  <ul className="space-y-2">
                    <li className="cursor-pointer">SOLWAY Executive Education</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          <h1 className="text-3xl font-bold">
            Welcome to <span className="md:text-[#E0AC00] ipad-pro:text-[#E0AC00] lg:text-black">SOLWAY Consulting & Services </span>
            <span className="lg:text-[#E0AC00] ipad-pro:text-black">Cross our way, Find your solution.</span>
          </h1>
          <p className="max-w-lg text-lg">
          Libérez le potentiel de votre entreprise avec des solutions sur
            mesure et des conseils d'experts. Ensemble, relevons vos défis et
            propulsons votre succès.</p>
          <div className="flex space-x-4">
            <Link to="/about">
              <button className="px-6 py-3 bg-[#E0AC00] text-white rounded-lg font-semibold shadow-md">Qui sommes-nous ?</button>
            </Link>
            <Link to="/OffresdemploisPage">
              <button className="px-6 py-3 border border-[#D1D5DB] bg-[#F9FAFB] text-black font-semibold rounded-lg">Nos offres d'emploi</button>
            </Link>
          </div>
        </div>

        <div className="w-1/2 h-full md:max-h-screen lg:h-full ipad-pro:h-1/2 relative">
          <div className="absolute top-0 inset-0 bg-cover bg-center" style={{
            backgroundImage: `url(${nav})`,
            clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)"
          }}></div>
        </div>
      </div>

      <div className="md:hidden w-full bg-white p-4 flex justify-between items-center rounded-b-lg">
        <img src="./src/assets/img/logo.png" alt="Logo" className="w-28 h-8" />
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-auto">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div ref={menuRef} className="absolute top-[64px] left-1/2 transform -translate-x-1/2 w-[80%] bg-zinc-50 max-w-[400px] z-50 p-6 flex flex-col items-center space-y-6 rounded-b-lg shadow-lg">
          <ul className="text-lg font-semibold text-black space-y-4 w-full">
            <li className="cursor-pointer pt-4 w-full text-center"><Link to="/">Home</Link></li>
            <li className="cursor-pointer border-t pt-4 w-full text-center"><Link to="/features">Features</Link></li>
            <li className="cursor-pointer border-t pt-4 w-full text-center"><Link to="/clients">Clients</Link></li>
            <li className="cursor-pointer border-t pt-4 w-full text-center"><Link to="/contact">Contact</Link></li>
            <li className="cursor-pointer flex items-center justify-center border-t pt-4 w-full text-center" onClick={() => setIsMoreOpen(true)}>
              More <ArrowRight size={16} className="ml-1" />
            </li>
          </ul>

          {isMoreOpen && (
            <div ref={moreRef} className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[600px] bg-white z-50 p-4 flex flex-col items-start space-y-6 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">
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


      <div className="md:hidden w-full flex flex-col items-center text-center pt-10 ">
        <h1 className="text-3xl p-6 font-bold">
          Welcome to{" "}
          <span className="text-[#E0AC00]"> SOLWAY Consulting & Services </span>
          Cross our way, Find your solution.
        </h1>
        <p className="max-w-lg text-lg ">
           Libérez le potentiel de votre entreprise avec des solutions sur
            mesure et des conseils d'experts. Ensemble, relevons vos défis et
            propulsons votre succès.</p>
        <div className="flex flex-col p-4 w-full space-y-4">
          <Link to="/about">
            <button className="w-full px-6 py-3 bg-[#E0AC00] text-white rounded-lg font-semibold shadow-md">
              Qui sommes-nous ?
            </button>
          </Link>
          <Link to="/OffresdemploisPage">
            <button className="w-full px-6 py-3 border border-[#D1D5DB] bg-[#F9FAFB] text-black font-semibold rounded-lg">
              Nos offres d'emploi
            </button>
          </Link>
        </div>

        <img
          src={nav}
          alt="Navbar Image"
          className="w-full h-auto pt-4 object-cover"
        />
      </div>
    </nav>
  );
};

export default Navbar;
