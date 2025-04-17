import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [fileName, setFileName] = useState("");

  const menuRef = useRef(null);
  const moreRef = useRef(null);
  const moreButtonRef = useRef(null);
  const menuButtonRef = useRef(null);
  const fileInputRef = useRef(null);
  const mobileFileInputRef = useRef(null);

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
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target) && 
        menuButtonRef.current && 
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
      
      if (
        moreRef.current && 
        !moreRef.current.contains(event.target) && 
        moreButtonRef.current && 
        !moreButtonRef.current.contains(event.target)
      ) {
        setIsMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("");
    }
  };

  const triggerFileInput = (inputRef) => {
    inputRef.current.click();
  };

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
          <div ref={moreRef} className="absolute top-24 left-1/2 transform -translate-x-1/2 w-[600px] bg-white shadow-lg p-6 border rounded-lg z-50">
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
                  <li><Link to="/solwayInvoice" className="cursor-pointer">SOLWAY INVOICE</Link></li>
                  <li className="cursor-pointer flex flex-col"><Link to="/associationsolway" >
                    <span>ASSOCIATION SOLWAY</span><br/>
                    <span>POUR LA SOLIDARITE</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-6">Carrières</h3>
                <ul className="space-y-6 w-44">
                  <li><Link to="/OffresdemploisPage" className="cursor-pointer">Nos Offres D'emploi</Link></li>
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

        <div className="flex flex-col pt-10 flex-grow ">
          <div className="w-full">
            <div className={`w-full ${isTablet ? 'flex flex-col items-center' : 'flex flex-row justify-between items-start'}`}>
              <div className={`${isTablet ? 'max-w-2xl text-center mb-8' : 'max-w-[35rem] text-left pl-14'} space-y-6`}>
                <div>
                  <h1 className="text-3xl font-extrabold  text-[#000000] mb-4">
                  SOLWAY Recrute<br/>
                  Déposez votre candidature</h1>
                  <p className={`text-medium text-[#000000] ${isTablet ? 'mx-auto' : 'max-w-xl'}`}>
                  Train people well enough so they can leave.</p>
                  <p>Treat them well enough so they don't want to. </p>
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
                    <FormLabel>Poste (requis)</FormLabel>
                    <input 
                      type="text" 
                      className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]" 
                      required 
                    />
                  </div>
                  <div className="mb-4">
                    <FormLabel>Niveau d'expérience : (requis)</FormLabel>
                    <select 
                      className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB] text-[#6B7280]" 
                      required
                    >
                      <option value="">Sélectionnez votre niveau</option>
                      <option value="etudiant">Étudiant</option>
                      <option value="stage">Stage</option>
                      <option value="junior">Junior (0-2 ans)</option>
                      <option value="intermediaire">Intermédiaire (3-5 ans)</option>
                      <option value="senior">Senior (5+ ans)</option>
                      <option value="expert">Expert</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <FormLabel>Veuillez joindre votre CV (requis)</FormLabel>
                    <div className="flex items-center">
                      <input 
                        ref={fileInputRef}
                        type="file" 
                        accept=".pdf,.doc,.docx"
                        className="hidden" 
                        onChange={handleFileChange}
                        required
                      />
                      <div className="w-full flex items-center">
                        <div className="flex-grow p-2 border border-[#D1D5DB] rounded-l-md bg-white text-[#6B7280] truncate">
                          {fileName ||" No file selected"}
                        </div>
                        <button 
                          type="button" 
                          onClick={() => triggerFileInput(fileInputRef)}
                          className="bg-[#F9FAFB] text-[#374151]  p-2 rounded-r-md border-t border-r border-b border-[#D1D5DB] hover:bg-gray-300"
                        >
                          Choose file
                        </button>
                      </div>
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
                    <FormLabel>Message</FormLabel>
                    <textarea 
                      className="w-full p-2 border border-[#D1D5DB] rounded-md h-32 focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]" 
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-52 bg-yellow-500 text-white p-2  rounded hover:bg-yellow-600 transition duration-300"
                  >
                   Envoyer ma candidature
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden w-full bg-[#F9FAFB] p-4 flex justify-between items-center rounded-b-lg">
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
        <div ref={menuRef} className="absolute top-[64px] left-1/2 transform -translate-x-1/2 w-[80%] bg-zinc-50 max-w-[400px] z-50 p-6 flex flex-col items-center space-y-6 rounded-b-lg shadow-lg">
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
            <div ref={moreRef} className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[600px] bg-white z-50 p-4 flex flex-col items-start space-y-6 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">
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
                    <li><Link to="/solwayInvoice" className="cursor-pointer">SOLWAY INVOICE</Link></li>
                    <li className="cursor-pointer"><Link to="/SolwaySynchronisationHRPage" className="cursor-pointer">SOLWAY <br/>Synchronisation HR</Link></li>
                    <li className="cursor-pointer"><Link to="/associationsolway" className="cursor-pointer">ASSOCIATION SOLWAY POUR LA SOLIDARITE</Link></li>
                    <li><Link to="/soldeskpage" className="cursor-pointer">SOLDESK</Link></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-4">Carrières</h3>
                  <ul className="grid grid-cols-2 gap-4 w-full">
                    <li><Link to="/OffresdemploisPage" className="cursor-pointer">Nos Offres D'emploi</Link></li>
                   <li><Link to="/NosmissionsPage " className="cursor-pointer">Nos Missions</Link></li>
                  <li><Link to="/CandidaturePage " className="cursor-pointer"> Candidatures</Link></li>
                  <li><Link to="/VosmissionsPage " className="cursor-pointer">Vos Missions</Link></li>
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

    
      <div className="md:hidden w-full flex flex-col items-center text-center pt-6 ">
        <h1 className="text-3xl font-extrabold text-[#000000] p-6">SOLWAY Recrute
        Déposez votre candidature</h1>
        <p className="text-md max-w-xs text-[#000000] ">
        Train people well enough so they can leave.
        Treat them well enough so they don't want to.
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
              <label className="block text-left mb-1">Poste</label>
              <input
                type="text"
                className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-left mb-1">Niveau d'expérience : (requis)</label>
              <select
                className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB] text-[#6B7280]"
                required
              >
                <option value="">Sélectionnez votre niveau</option>
                <option value="etudiant">Étudiant</option>
                <option value="stage">Stage</option>
                <option value="junior">Junior (0-2 ans)</option>
                <option value="intermediaire">Intermédiaire (3-5 ans)</option>
                <option value="senior">Senior (5+ ans)</option>
                <option value="expert">Expert</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-left mb-1">Veuillez joindre votre CV (requis)</label>
              <div className="flex items-center">
                <input 
                  ref={mobileFileInputRef}
                  type="file" 
                  accept=".pdf,.doc,.docx"
                  className="hidden" 
                  onChange={handleFileChange}
                  required
                />
                <div className="w-full flex items-center">
                  <div className="flex-grow p-2 border border-[#D1D5DB] rounded-l-md bg-white text-[#6B7280] text-left truncate">
                    {fileName || " No file selected"}
                  </div>
                  <button 
                    type="button" 
                    onClick={() => triggerFileInput(mobileFileInputRef)}
                    className="bg-[#F9FAFB] text-[#374151] p-2 rounded-r-md border-t border-r border-b border-[#D1D5DB] hover:bg-gray-300"
                  >
                    Choose file
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-left mb-1"> Message</label>
              <textarea
                className="w-full p-2 border border-[#D1D5DB] rounded-md h-32 focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition duration-300"
            >
            Envoyer ma candidature
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;