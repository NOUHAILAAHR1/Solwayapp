import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ArrowLeft } from "lucide-react";
import about from "../../assets/img/About.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  return (
    <nav className="relative w-full md:max-h-screen lg:h-full ipad-pro:h-[50vh] bg-[#FFFFFF] rounded-b-lg md:rounded-none z-50">

      <div className="hidden md:flex items-start justify-between w-full h-screen">
        <div className="w-1/2 lg:w-1/2 md:w-3/4 ipad-pro:w-3/4 lg:pl-14   md:pl-8 flex flex-col items-start justify-center pl-14 space-y-6">
          <div className="flex flex-row items-center space-x-6 mt-6 mb-20 ">
            <div className="md:w-24 h-8">
              <img
                src="./src/assets/img/logo.png"
                alt="Logo"
                className="w-36 h-10"
              />
            </div>
            <div>
              <ul className="flex space-x-6 text-lg font-semibold text-black">
              <li><Link to="/" className="cursor-pointer">Home</Link></li>
              <li><Link to="/features" className="cursor-pointer">Features</Link></li>
              <li><Link to="/clients" className="cursor-pointer">Clients</Link></li>
              <li><Link to="/contact" className="cursor-pointer">Contact</Link></li>
                <li
                  className="cursor-pointer"
                  onClick={() => setIsMoreOpen(!isMoreOpen)}
                >
                  More
                </li>
              </ul>
            </div>
          </div>

          {isMoreOpen && (
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-[600px] bg-white shadow-lg p-6 border rounded-lg z-50">
              <div className="flex flex-row justify-center space-x-8">
                <div>
                  <h3 className="font-bold text-lg mb-6">Nos Solutions</h3>
                  <ul className="space-y-6 w-44">
                    <li><Link to="/verifdsn" className="cursor-pointer">VERIF’DSN</Link></li>
                   <li><Link to="/verifdsnplus" className="cursor-pointer"> VERIF'DSN PLUS</Link></li>
                   <li className="cursor-pointer flex flex-col"><Link to="/SolwaySynchronisationHRPage" >
                    <span>SOLWAY</span><br/>
                    <span>Synchronisation HR</span>
                    </Link>
                  </li>
                  <li><Link to="/soldeskpage" className="cursor-pointer">SOLDESK</Link></li>
                  <li><Link to="/solwayhrpage" className="cursor-pointer">SOLWAY HR</Link></li>
                    <li className="cursor-pointer">SOLWAY INVOICE</li>
                    <li className="cursor-pointer flex flex-col">
                     <span>ASSOCIATION SOLWAY</span>
                      <span>POUR LA SOLIDARITE</span>
                    
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-6">Carrières</h3>
                  <ul className="space-y-6 w-44">
                    <li className="cursor-pointer">Nos Offres D’emploi</li>
                    <li className="cursor-pointer">Candidatures</li>
                    <li className="cursor-pointer">Nos Missions</li>
                    <li className="cursor-pointer">Vos Missions</li>
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
          <p className=" text-2xl font-extrabold pt-36 max-w-xl " >
          SOLWAY Consulting & Services développe des outils spécifiques SAP HR pour améliorer et faciliter votre quotidien
          </p>
            
        </div>
        <div className="w-1/2  h-full md:max-h-screen  lg:h-full ipad-pro:h-1/2  relative">

            <div
              className="absolute top-0 inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${about})`,
                clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            ></div>
          </div>
      </div>

      <div className="md:hidden w-full bg-white p-4 flex justify-between items-center rounded-b-lg">
        <img src="./src/assets/img/logo.png" alt="Logo" className="w-28 h-8" />
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-auto">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-[64px] left-1/2 transform -translate-x-1/2 w-[80%] bg-zinc-50 max-w-[400px] z-50 p-6 flex flex-col items-center space-y-6 rounded-b-lg shadow-lg">
          <ul className="text-lg font-semibold text-black space-y-4 w-full">
           <li className="cursor-pointer pt-4 w-full text-center"><Link to="/" className="cursor-pointer">Home</Link></li>
            <li className="cursor-pointer border-t border-gray-300 pt-4 w-full text-center">Features</li>
            <li className="cursor-pointer border-t border-gray-300 pt-4 w-full text-center">Clients</li>
         <li className="cursor-pointer border-t border-gray-300 pt-4 w-full text-center"><Link to="/contact" className="cursor-pointer">Contact</Link></li>
            <li
              className="cursor-pointer flex items-center justify-center border-t  pt-4 w-full text-center"
              onClick={() => setIsMoreOpen(true)}
            >
              More <ArrowRight size={16} className="ml-1" />
            </li>
          </ul>

          {isMoreOpen && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[600px] bg-white z-50 p-4 flex flex-col items-start space-y-6 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">
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
                     <li ><Link to="/verifdsnplus" className="cursor-pointer">VERIF'DSN PLUS</Link></li>
                    <li className="cursor-pointer">SOLWAY INVOICE</li>
                    <li className="cursor-pointer"><Link to="/SolwaySynchronisationHRPage" className="cursor-pointer">SOLWAY <br/>Synchronisation HR</Link></li>
                    <li className="cursor-pointer">ASSOCIATION SOLWAY POUR LA SOLIDARITE</li>
                    <li><Link to="/soldeskpage" className="cursor-pointer">SOLDESK</Link></li>
                    
                   
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-4">Carrières</h3>
                  <ul className="grid grid-cols-2 gap-4 w-full">
                    <li className="cursor-pointer">Nos Offres D’emploi</li>
                    <li className="cursor-pointer">Nos Missions</li>
                    <li className="cursor-pointer">Candidatures</li>
                    <li className="cursor-pointer">Vos Missions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-4">Formations</h3>
                  <ul className="space-y-2">
                    <li className="cursor-pointer">SOLWAY Executive<br/> Education</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="md:hidden w-full flex flex-col items-center text-center pt-6   space-y-6">
        <p className=" text-2xl font-extrabold flex justify-center p-3 items-center" > SOLWAY Consulting & Services développe des outils spécifiques SAP HR pour améliorer et faciliter votre quotidien
        </p>

        <img
          src={about}
          alt="Navbar Image"
          className="w-full h-auto object-cover"
        />
      </div>
    </nav>
  );
};

export default Navbar;
