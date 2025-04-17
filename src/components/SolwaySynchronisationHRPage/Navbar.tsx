import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from 'react-router-dom';
import { FaCheckCircle } from "react-icons/fa";
import logoImage from "../../assets/img/logo.png";
import containerImage from "../../assets/img/background.png";
import containerImagesvg from "../../assets/Svg/Imgcontainer.svg"
import solwayetape1 from "../../assets/img/solwayetape1.png";
import solwayetape2 from "../../assets/img/solwayetap2.png";
import solwayetape3 from "../../assets/img/solwayetape3.png";
import solwayetape4 from "../../assets/img/solwayetape4.png";

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

  
  const handleNavLinkClick = () => {
    setIsMoreOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="relative w-full z-50">
        <div className="hidden md:flex bg-white flex-col w-full">
          <div className="w-full flex flex-row items-center justify-between px-14 py-6">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-8">
                <img src={logoImage} alt="Logo" className="w-36 h-10" />
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
                        <span>SOLWAY</span><br />
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
                    <li className="cursor-pointer" onClick={handleNavLinkClick}>SOLWAY Executive Education</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="md:hidden w-full bg-white p-4 flex justify-between items-center">
          <img src={logoImage} alt="Logo" className="w-28 h-8" />
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
            className="absolute top-[64px] left-1/2 transform -translate-x-1/2 w-[80%] bg-white max-w-[400px] z-50 p-6 flex flex-col items-center space-y-6 rounded-b-lg shadow-lg md:hidden"
          >
            <ul className="text-lg font-semibold text-black space-y-4 w-full">
              <li className="cursor-pointer pt-4 w-full text-center">
                <Link to="/" className="cursor-pointer" onClick={handleNavLinkClick}>Home</Link>
              </li>
              <li className="cursor-pointer border-t border-gray-300 pt-4 w-full text-center" onClick={handleNavLinkClick}>
                <Link to="/features" onClick={handleNavLinkClick}>Features</Link>
              </li>
              <li className="cursor-pointer border-t border-gray-300 pt-4 w-full text-center" onClick={handleNavLinkClick}>
                <Link to="/clients" onClick={handleNavLinkClick}>Clients</Link>
              </li>
              <li className="cursor-pointer border-t border-gray-300 pt-4 w-full text-center">
                <Link to="/contact" className="cursor-pointer" onClick={handleNavLinkClick}>Contact</Link>
              </li>
              <li
                className="cursor-pointer flex items-center justify-center border-t pt-4 w-full text-center"
                onClick={() => setIsMoreOpen(true)}
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
      </nav>

      <main className="w-full flex flex-col bg-[#F9FAFB] pt-8 z-40">
      
        <div className="hidden md:block  h-auto w-full">
          <div className="w-full text-center py-8 h-auto lg:h-72 md:h-auto ipad-pro:h-auto"
            style={{
              backgroundImage: `url(${containerImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "bottom ",
             
            }}
          >
            
            <h1 className="text-5xl mb-4 font-extrabold text-[#030712]">SOLWAY <br/> Synchronisation HR</h1>
            <p className="text-medium text-[#030712] max-w-xl mx-auto">
              Un programme SAP intuitif et facile à utiliser, entièrement paramétrable, qui permet de synchroniser rapidement
              et de manière fiable les matricules entre deux systèmes, optimisant ainsi l'efficacité et la précision des processus.
            </p>
          </div>
          

          <div className="w-full flex justify-center py-6"
              style={{
                backgroundImage: `url(${containerImagesvg }), url(${containerImagesvg })`, 
                backgroundRepeat: 'no-repeat', 
                backgroundPosition: 'center 23%, center 65%', 
                backgroundSize: 'contain', 
              }}
            >
                      
            <div className="w-full px-12 pt-12 lg:px-20 md:px-5 ipad-pro:px-6">
              <div className="bg-white shadow-lg rounded-lg p-4 mx-auto">
                
                <div className="flex flex-col lg:flex-row md:flex-row justify-between items-center mb-12">
                  <div className="w-full lg:w-1/2 pr-0 lg:pr-6 mb-6 lg:mb-0 md:w-1/2 md:pr-4 md:mb-0 text-center lg:text-left md:text-left">
                    <h2 className="text-2xl font-bold mb-4">Ecran d'accueil</h2>
                    <p className="text-medium text-[#030712] mb-3">
                      Il est doté d'une interface utilisateur simple et ergonomique.
                    </p>
                    <p className="text-medium text-[#030712]">
                      Vous avez la possibilité de paramétrer les infotypes à
                      synchroniser et les liens RFC.
                    </p>
                  </div>
                  <div className="w-full lg:w-1/2 md:w-1/2 flex justify-center">
                    <img src={solwayetape1} alt="Etape 1" className="max-w-full h-auto rounded-lg" />
                  </div>
                </div>
                
                <div className="flex flex-col mb-12">
                  <div className="flex flex-col lg:flex-row md:flex-row justify-between items-center">
                    <div className="w-full lg:w-1/2 md:w-1/2 flex flex-col space-y-4 justify-center">
                      <img src={solwayetape2} alt="Etape 2" className="max-w-full h-auto rounded-lg" />
                      <img src={solwayetape3} alt="Etape 3" className="max-w-full h-auto rounded-lg" />
                    </div>
                    <div className="w-full lg:w-1/2 md:w-1/2 pl-0 lg:pl-6 md:pl-4 mb-6 lg:mb-0 md:mb-0 text-center lg:text-left md:text-left">
                      <h2 className="text-2xl font-extrabold mb-4">Highly effective solutions</h2>
                      <h4 className="text-lg font-normal mb-3">Cet écran vous permet de sélectionner les matricules à synchroniser.</h4>
                      <ul className="list-disc pl-5  text-medium text-[#030712] font-normal">
                        <li>Soit en sélectionnant directement les matricules concernées.</li>
                        <li>Soit en sélectionnant la population en se basant sur les :</li>
                        <ul className="list-disc pl-5 ">
                          <li>Statuts d'activités</li>
                          <li>Tranches de décomptes</li>
                          <li>Sociétés</li>
                          <li>Domaines de personnel</li>
                          <li>Sous-domaines de personnel</li>
                        </ul>
                      </ul>
                      <h4 className=" text-medium text-[#030712] font-normal">Vous avez aussi la possibilité de choisir le mode test et l'anonymisation des salariés à synchroniser.</h4>
                      <p className="font-normal mt-4 mb-2">Les modules concernés sont :</p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <FaCheckCircle className="mr-2 text-black" /> <span className="font-semibold">Administration du personnel (PA)</span>
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="mr-2 text-black" /> <span className="font-semibold">Gestion organisationnelle</span>
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="mr-2 text-black" /> <span className="font-semibold">Tables DSN</span>
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="mr-2 text-black" /> <span className="font-semibold">Gestion du temps</span>
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="mr-2 text-black" /> <span className="font-semibold">Paie</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col lg:flex-row md:flex-row justify-between items-center">
                  <div className="w-full lg:w-1/2 md:w-1/2 pr-0 lg:pr-4 md:pr-6 mb-4 lg:mb-0 md:mb-0 text-center lg:text-left md:text-left">
                    <h1 className="text-3xl font-extrabold mb-4">Résultats</h1>
                    <p className="text-medium text-[#030712]">
                      Il est sous forme d'une table ALV qui permet l'affichage des résultats de la synchronisation par
                      matricule et par module.
                    </p>
                  </div>
                  <div className="w-full lg:w-1/2 md:w-1/2 flex justify-center">
                    <img src={solwayetape4} alt="Etape 4" className="max-w-full h-auto rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="block md:hidden w-full p-4">
          <div className="text-center py-8">
            <h1 className="text-3xl mb-4 font-extrabold text-[#030712]">SOLWAY <br/>Synchronisation HR</h1>
            <p className="text-medium text-[#030712]">
              Un programme SAP intuitif et facile à utiliser, entièrement paramétrable, qui permet de synchroniser rapidement
              et de manière fiable les matricules entre deux systèmes, optimisant ainsi l'efficacité et la précision des processus.
            </p>
          </div>
          
          <div className="w-full flex justify-center pt-14 bg-[#F9FAFB]">
            <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-10 w-full">

              <div>
                <h2 className="text-2xl font-bold mb-4 text-center">Ecran d'accueil</h2>
                <p className="text-medium text-[#030712] text-center mb-6">
                  Il est doté d'une interface utilisateur simple et ergonomique.</p>
                <p  className="text-medium text-[#030712] text-center mb-8"> Vous avez la possibilité de paramétrer les infotypes à
                  synchroniser et les liens RFC.
                </p>
                <div className="flex justify-center pt-4">
                  <img src={solwayetape1} alt="Etape 1" className="max-w-full h-auto rounded-lg" />
                </div>
              </div>


              <div className="space-y-4 pt-10 ">
                <div>
                  <h2 className="text-2xl font-extrabold mb-6 text-center">Highly effective solutions</h2>
                  <h4 className="text-lg font-normal mb-3 text-left">Cet écran vous permet de sélectionner les matricules à synchroniser.</h4>
                  <ul className="list-disc pl-5 mb-4 pt-6 text-medium text-[#030712] font-normal">
                    <li>Soit en sélectionnant directement les matricules concernées.</li>
                    <li>Soit en sélectionnant la population en se basant sur les :</li>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Statuts d'activités</li>
                      <li>Tranches de décomptes</li>
                      <li>Sociétés</li>
                      <li>Domaines de personnel</li>
                      <li>Sous-domaines de personnel</li>
                    </ul>
                  </ul>
                  <h4 className=" text-medium text-[#030712] font-normal  mb-3 text-left">Vous avez aussi la possibilité de choisir le mode test et l'anonymisation des salariés à synchroniser.</h4>
                  <p className="mt-4 mb-2 pt-4 text-left">Les modules concernés sont :</p>
                  <ul className="space-y-2 pt-4">
                    <li className="flex items-center">
                      <FaCheckCircle className="mr-2 text-black" /> <span className="font-semibold">Administration du personnel (PA)</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="mr-2 text-black" /> <span className="font-semibold">Gestion organisationnelle</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="mr-2 text-black" /> <span className="font-semibold">Tables DSN</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="mr-2 text-black" /> <span className="font-semibold">Gestion du temps</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="mr-2 text-black" /> <span className="font-semibold">Paie</span>
                    </li>
                  </ul>
                  
                  <div className="flex justify-center mt-4">
                    <img src={solwayetape2} alt="Etape 2" className="max-w-full h-auto pt-10 rounded-lg" />
                  </div>
                  
                  <div className="flex justify-center mb-6 mt-4">
                    <img src={solwayetape3} alt="Etape 3" className="max-w-full h-auto pt-14 rounded-lg" />
                  </div>
                </div>
              </div>
              

              <div>
                <h1 className="text-3xl font-extrabold mb-10 pt-4 text-center">Résultats</h1>
                <p className="text-medium text-[#030712] text-center mb-12">
                  Il est sous forme d'une table ALV qui permet l'affichage des résultats de la synchronisation par
                  matricule et par module.</p>
                <div className="flex justify-center ">
                  <img src={solwayetape4} alt="Etape 4" className="max-w-full h-auto rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Navbar;