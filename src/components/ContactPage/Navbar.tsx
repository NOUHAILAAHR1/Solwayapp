import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ArrowLeft } from "lucide-react";
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

  const FormLabel = ({ children }) => (
    <span className="text-sm text-[#374151] block mb-1">{children}</span>
  );

  const isTablet = windowWidth >= 768 && windowWidth <= 1024;

  return (
    <nav className="relative w-full bg-[#F9FAFB] rounded-b-lg z-50">
     
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
        </div>

        
        {isMoreOpen && (
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-[600px] bg-white shadow-lg p-6 border rounded-lg z-50">
            <div className="flex flex-row justify-center space-x-8">
              <div>
                <h3 className="font-bold text-lg mb-6">Nos Solutions</h3>
                <ul className="space-y-6 w-44">
                  <li><Link to="/verifdsn" className="cursor-pointer">VERIF'DSN</Link></li>
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
                  <li className="cursor-pointer">Nos Offres D'emploi</li>
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

      
        <div className="flex flex-col pt-10 flex-grow ">
          <div className="w-full">
    
            <div className={`w-full ${isTablet ? 'flex flex-col items-center' : 'flex flex-row justify-between items-start'}`}>
              
              <div className={`${isTablet ? 'max-w-2xl text-center mb-8' : 'max-w-[35rem] text-left pl-14'} space-y-6`}>
                <div>
                  <h1 className="text-3xl font-extrabold pt-4 text-[#000000] mb-4">
                    N'hésitez pas à nous contacter pour plus d'informations
                  </h1>
                  <p className={`text-medium text-[#000000] ${isTablet ? 'mx-auto' : 'max-w-xl'}`}>
                    Nous sommes à votre disposition pour répondre à vos questions et vous fournir les informations nécessaires à la réussite de vos projets.
                  </p>
                </div>
              </div>
              
             
              <div className={`${isTablet ? 'w-full max-w-md' : 'w-1/2 pl-32'} flex items-center ${isTablet ? 'justify-center' : ''}`}>
                <form className="w-full max-w-md mb-6 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <FormLabel>Nom (requis)</FormLabel>
                      <input 
                        type="text" 
                        className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]" 
                        required 
                      />
                    </div>
                    <div>
                      <FormLabel>Prénom (requis)</FormLabel>
                      <input 
                        type="text" 
                        className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]" 
                        required 
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <FormLabel>Email (requis)</FormLabel>
                    <input 
                      type="email" 
                      className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]" 
                      required 
                    />
                  </div>
                  <div className="mb-4">
                    <FormLabel>Téléphone</FormLabel>
                    <input 
                      type="tel" 
                      className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]" 
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <FormLabel>Fonction</FormLabel>
                      <input 
                        type="text" 
                        className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]" 
                      />
                    </div>
                    <div>
                      <FormLabel>Société</FormLabel>
                      <input 
                        type="text" 
                        className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]" 
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <FormLabel>Objet</FormLabel>
                    <input 
                      type="text" 
                      className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]" 
                    />
                  </div>
                  <div className="mb-4">
                    <FormLabel>Votre Message</FormLabel>
                    <textarea 
                      className="w-full p-2 border border-[#D1D5DB] rounded-md h-32 focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]" 
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-32 bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition duration-300"
                  >
                    Envoyer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
   
      <div className="md:hidden w-full bg-[#F9FAFB] p-4 flex justify-between items-center rounded-b-lg">
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
              className="cursor-pointer flex items-center justify-center border-t pt-4 w-full text-center"
              onClick={() => setIsMoreOpen(true)}
            >
              More <ArrowRight size={16} className="ml-1" />
            </li>
          </ul>
      
         
          {isMoreOpen && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[600px] bg-white z-50 p-4 flex flex-col items-start space-y-6 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">
              <button
                onClick={() => setIsMoreOpen(false)}
                className="flex items-center bg-slate-100 border border-gray-300 p-2 rounded-lg"
              >
                <ArrowLeft size={16} className="mr-2" /> Back
              </button>
              <div className="space-y-6 w-full">
                <div>
                  <h3 className="font-bold text-lg mb-4">Nos Solutions</h3>
                  <ul className="grid grid-cols-2 text-xs gap-4 w-full">
                    <li><Link to="/verifdsn" className="cursor-pointer">VERIF'DSN</Link></li>
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
                    <li className="cursor-pointer">Nos Offres D'emploi</li>
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

 
      <div className="md:hidden w-full flex flex-col items-center text-center pt-6">
        <h1 className="text-3xl font-extrabold text-[#000000] pt-5">N'hésitez pas à nous contacter pour plus d'informations</h1>
        <p className="text-md max-w-xs text-[#000000] p-4">
          Nous sommes à votre disposition pour répondre à vos questions et vous fournir les informations nécessaires à la réussite de vos projets.
        </p>

        <div className="w-full px-4 pt-6">
          <form className="w-full bg-white p-4 rounded-lg shadow-lg">
            <div className="mb-4">
              <div className="mb-2">
                <label className="block text-left mb-1">Nom (requis)</label>
                <input
                  type="text"
                  className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block text-left mb-1">Prénom (requis)</label>
                <input
                  type="text"
                  className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-left mb-1">Email (requis)</label>
              <input
                type="email"
                className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-left mb-1">Téléphone</label>
              <input
                type="tel"
                className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]"
              />
            </div>
            <div className="mb-4">
              <div className="mb-2">
                <label className="block text-left mb-1">Fonction</label>
                <input
                  type="text"
                  className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]"
                />
              </div>
              <div className="mb-2">
                <label className="block text-left mb-1">Société</label>
                <input
                  type="text"
                  className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-left mb-1">Objet</label>
              <input
                type="text"
                className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-left mb-1">Votre Message</label>
              <textarea
                className="w-full p-2 border border-[#D1D5DB] rounded-md h-32 focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition duration-300"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;