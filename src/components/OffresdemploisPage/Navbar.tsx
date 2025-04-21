import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, ArrowLeft } from "lucide-react";
import logoImage from "../../assets/img/logo.png";
import { Link } from 'react-router-dom';
import { CiCalendar } from "react-icons/ci";
import { LuTimer } from "react-icons/lu";
import { PiBriefcaseBold } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import { IoWalletOutline } from "react-icons/io5";

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

      if (
        isMoreOpen && 
        moreMenuRef.current && 
        !moreMenuRef.current.contains(event.target) &&
        moreButtonRef.current && 
        !moreButtonRef.current.contains(event.target)
      ) {
        setIsMoreOpen(false);
      }

    
      if (
        isMenuOpen && 
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target) &&
        menuButtonRef.current && 
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMoreOpen, isMenuOpen]);

  return (
    <>
      <nav className="relative w-full z-50">
        <div className="hidden md:flex bg-white flex-col w-full">
          <div className="w-full flex flex-row items-center justify-between px-14 py-6">
            <div className="flex items-center space-x-6">
              <div className="w-24">
                <img src={logoImage} alt="Logo" className="w-36 " />
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
            <div 
              ref={moreMenuRef}
              className="absolute top-24 left-1/2 transform -translate-x-1/2 w-[600px] bg-white shadow-lg p-6 border rounded-lg z-50"
            >
              <div className="flex flex-row justify-center space-x-8">
                <div>
                  <h3 className="font-bold text-lg mb-6">Nos Solutions</h3>
                  <ul className="space-y-6 w-44">
                    <li><Link to="/verifdsn" className="cursor-pointer" onClick={() => setIsMoreOpen(false)}>VERIF'DSN</Link></li>
                    <li><Link to="/verifdsnplus" className="cursor-pointer" onClick={() => setIsMoreOpen(false)}>VERIF'DSN PLUS</Link></li>
                    <li className="cursor-pointer flex flex-col">
                      <Link to="/SolwaySynchronisationHRPage" onClick={() => setIsMoreOpen(false)}>
                        <span>SOLWAY</span><br/>
                        <span>Synchronisation HR</span>
                      </Link>
                    </li>
                    <li><Link to="/soldeskpage" className="cursor-pointer" onClick={() => setIsMoreOpen(false)}>SOLDESK</Link></li>
                    <li><Link to="/solwayhrpage" className="cursor-pointer" onClick={() => setIsMoreOpen(false)}>SOLWAY HR</Link></li>
                    <li><Link to="/solwayInvoice" className="cursor-pointer" onClick={() => setIsMoreOpen(false)}>SOLWAY INVOICE</Link></li>
                    <li className="cursor-pointer flex flex-col">
                      <Link to="/associationsolway" onClick={() => setIsMoreOpen(false)}>
                        <span>ASSOCIATION SOLWAY</span><br/>
                        <span>POUR LA SOLIDARITE</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-6">Carrières</h3>
                  <ul className="space-y-6 w-44">
                    <li><Link to="/OffresdemploisPage" className="cursor-pointer" onClick={() => setIsMoreOpen(false)}>Nos Offres D'emploi</Link></li>
                    <li><Link to="/CandidaturePage " className="cursor-pointer" onClick={() => setIsMoreOpen(false)}> Candidatures</Link></li>
                    <li><Link to="/NosmissionsPage " className="cursor-pointer" onClick={() => setIsMoreOpen(false)}>Nos Missions</Link></li>
                    <li><Link to="/VosmissionsPage " className="cursor-pointer" onClick={() => setIsMoreOpen(false)}>Vos Missions</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-6">Formations</h3>
                  <ul className="space-y-2">
                    <li className="cursor-pointer" onClick={() => setIsMoreOpen(false)}>SOLWAY Executive Education</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        
        <div className="md:hidden w-full bg-white p-4 flex justify-between items-center">
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
              <li className="cursor-pointer pt-4 w-full text-center"><Link to="/" className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li className="cursor-pointer border-t border-gray-300 pt-4 w-full text-center" onClick={() => setIsMenuOpen(false)}>Features</li>
              <li className="cursor-pointer border-t border-gray-300 pt-4 w-full text-center" onClick={() => setIsMenuOpen(false)}>Clients</li>
              <li className="cursor-pointer border-t border-gray-300 pt-4 w-full text-center"><Link to="/contact" className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
              <li
                className="cursor-pointer flex items-center justify-center border-t pt-4 w-full text-center"
                onClick={() => setIsMoreOpen(true)}
              >
                More <ArrowRight size={16} className="ml-1" />
              </li>
            </ul>

            {isMoreOpen && (
              <div 
                ref={moreMenuRef}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[600px] bg-white z-50 p-4 flex flex-col items-start space-y-6 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto"
              >
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
                      <li><Link to="/verifdsn" className="cursor-pointer" onClick={() => { setIsMoreOpen(false); setIsMenuOpen(false); }}>VERIF'DSN</Link></li>
                      <li><Link to="/solwayhrpage" className="cursor-pointer" onClick={() => { setIsMoreOpen(false); setIsMenuOpen(false); }}>SOLWAY HR</Link></li>
                      <li><Link to="/verifdsnplus" className="cursor-pointer" onClick={() => { setIsMoreOpen(false); setIsMenuOpen(false); }}>VERIF'DSN PLUS</Link></li>
                      <li><Link to="/solwayInvoice" className="cursor-pointer" onClick={() => { setIsMoreOpen(false); setIsMenuOpen(false); }}>SOLWAY INVOICE</Link></li>
                      <li className="cursor-pointer"><Link to="/SolwaySynchronisationHRPage" className="cursor-pointer" onClick={() => { setIsMoreOpen(false); setIsMenuOpen(false); }}>SOLWAY <br/>Synchronisation HR</Link></li>
                      <li className="cursor-pointer"><Link to="/associationsolway" className="cursor-pointer" onClick={() => { setIsMoreOpen(false); setIsMenuOpen(false); }}>ASSOCIATION SOLWAY POUR LA SOLIDARITE</Link></li>
                      <li><Link to="/soldeskpage" className="cursor-pointer" onClick={() => { setIsMoreOpen(false); setIsMenuOpen(false); }}>SOLDESK</Link></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-4">Carrières</h3>
                    <ul className="grid grid-cols-2 gap-4 w-full">
                      <li><Link to="/OffresdemploisPage" className="cursor-pointer" onClick={() => { setIsMoreOpen(false); setIsMenuOpen(false); }}>Nos Offres D'emploi</Link></li>
                      <li><Link to="/NosmissionsPage " className="cursor-pointer" onClick={() => { setIsMoreOpen(false); setIsMenuOpen(false); }}>Nos Missions</Link></li>
                      <li><Link to="/CandidaturePage " className="cursor-pointer" onClick={() => { setIsMoreOpen(false); setIsMenuOpen(false); }}> Candidatures</Link></li>
                      <li><Link to="/VosmissionsPage " className="cursor-pointer" onClick={() => { setIsMoreOpen(false); setIsMenuOpen(false); }}>Vos Missions</Link></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-4">Formations</h3>
                    <ul className="space-y-2">
                      <li className="cursor-pointer" onClick={() => { setIsMoreOpen(false); setIsMenuOpen(false); }}>SOLWAY Executive Education</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </nav>

     
      <div className="w-full bg-white xl:bg-[#F9FAFB] flex flex-col items-center py-12 px-4 md:px-8 lg:px-16"> <h1 className="text-4xl font-extrabold mb-12">Nos offres d'emploi</h1>
        
        <div className="w-full max-w-6xl shadow-lg rounded-lg p-6 md:p-8 bg-white">
          <div className="flex flex-col items-center text-left p-6 md:p-0 md:flex-row md:justify-between md:items-center md:text-left mb-12 space-y-4 md:space-y-0">
            <h1 className="text-2xl font-bold">ERP SAP Ressource humaine (H/F)</h1>
            <button className="bg-[#E0AC00] text-white font-medium rounded-lg w-full md:w-28 h-14">
              Postulez
            </button>
          </div>

        
          <div className="sm:hidden space-y-8">
        
            <div className="w-full">
              <div className="border-2 border-[#E7F0FA] rounded-lg bg-white">
                <div className="p-6">
                  <h1 className="text-xl font-bold mb-6">Job Overview</h1>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <CiCalendar size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">EMPLOI POSTED:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">13/06/2022</h3>
                    </div>
                    
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <LuTimer size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">EMPLOI EXPIRE IN:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">13/10/2022</h3>
                    </div>
                    
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <PiBriefcaseBold size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">JOB TYPE:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">Stage</h3>
                    </div>
                    
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <PiBriefcaseBold size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">EDUCATION:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">Bac+5</h3>
                    </div>
                    
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <PiBriefcaseBold size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">EXPERIENCE:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">1-5 Years</h3>
                    </div>
                    
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <SlLocationPin size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">LOCATION:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">Rabat</h3>
                    </div>

                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <IoWalletOutline size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">SALARY:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">$100-300/month</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
            <div className="w-full space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Description du poste</h3>
                <p className="text-[#5E6670] ">
                  Dans le cadre du développement de notre activité interne, nous recherchons un(e) stagiaire motivé(e) par le monde des ERP. Ce poste va permettre d'acquérir des compétences technique et fonctionnelle autour du module SAP HR.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold  text-lg mb-2">Vous allez participer :</h3>
                <ul className="list-disc text-[#5E6670]  pl-6 space-y-2">
                  <li>Au développement de nos solutions spécifiques SAP HR.</li>
                  <li>À la prise en charge de nos activités de TMA (Tierce Maintenance Applicative) afin d'analyser et répondre aux besoins de nos clients.</li>
                  <li>À nos prospections commerciales</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Profil</h3>
                <ul className="list-disc pl-6 text-[#5E6670] space-y-2">
                  <li>De formation au moins Bac+5.</li>
                  <li>Vous parlez couramment le français.</li>
                  <li>Idéalement des connaissances en développement informatique.</li>
                  <li>Idéalement des connaissances sur l'architecture SAP.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Avantage</h3>
                <ul className="list-disc text-[#5E6670]  pl-6 space-y-2">
                  <li>Formation technique (ABAP) et fonctionnelle tout au long du stage avec des objectifs à court et à long terme.</li>
                  <li>Prise en charge de 100% du titre de transport.</li>
                  <li>Rémunération selon profil.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="hidden sm:flex flex-col md:flex-row space-x-14">
            <div className="w-full md:w-2/3 space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Description du poste</h3>
                <p className="text-[#5E6670] ">
                  Dans le cadre du développement de notre activité interne, nous recherchons un(e) stagiaire motivé(e) par le monde des ERP. Ce poste va permettre d'acquérir des compétences technique et fonctionnelle autour du module SAP HR.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold  text-lg mb-2">Vous allez participer :</h3>
                <ul className="list-disc pl-6 text-[#5E6670]  space-y-2">
                  <li>Au développement de nos solutions spécifiques SAP HR.</li>
                  <li>À la prise en charge de nos activités de TMA (Tierce Maintenance Applicative) afin d'analyser et répondre aux besoins de nos clients.</li>
                  <li>À nos prospections commerciales</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold  text-lg mb-2">Profil</h3>
                <ul className="list-disc text-[#5E6670]  pl-6 space-y-2">
                  <li>De formation au moins Bac+5.</li>
                  <li>Vous parlez couramment le français.</li>
                  <li>Idéalement des connaissances en développement informatique.</li>
                  <li>Idéalement des connaissances sur l'architecture SAP.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Avantage</h3>
                <ul className="list-disc text-[#5E6670]  pl-6 space-y-2">
                  <li>Formation technique (ABAP) et fonctionnelle tout au long du stage avec des objectifs à court et à long terme.</li>
                  <li>Prise en charge de 100% du titre de transport.</li>
                  <li>Rémunération selon profil.</li>
                </ul>
              </div>
            </div>
            
           
            <div className="w-full md:w-1/3">
              <div className="border-2 border-[#E7F0FA] rounded-lg bg-white">
                <div className="p-6">
                  <h1 className="text-xl font-bold mb-6">Job Overview</h1>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <CiCalendar size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">EMPLOI POSTED:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">13/06/2022</h3>
                    </div>
                    
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <LuTimer size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">EMPLOI EXPIRE IN:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">13/10/2022</h3>
                    </div>
                    
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <PiBriefcaseBold size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">JOB TYPE:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">Stage</h3>
                    </div>
                    
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <PiBriefcaseBold size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">EDUCATION:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">Bac+5</h3>
                    </div>
                    
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <PiBriefcaseBold size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">EXPERIENCE:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">1-5 Years</h3>
                    </div>
                    
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <SlLocationPin size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">LOCATION:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">Rabat</h3>
                    </div>

                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <IoWalletOutline size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">SALARY:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">$100-300/month</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;