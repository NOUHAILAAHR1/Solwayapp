import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from 'react-router-dom';
import { PiHandCoinsBold } from "react-icons/pi";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import logoImage from "../../assets/img/logo.png";
import containerImage from "../../assets/img/bgassociationsolway.png";
import containerImage1 from "../../assets/img/imgbg.png";
import containerImagesvg from "../../assets/Svg/Imgcontainer.svg"; 
import Associationlogo from "../../assets/img/associationlogo.png";

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

  const isMdOrIpadPro = () => {
    return windowWidth >= 768 && windowWidth < 1366;
  };

  const isLgOrLarger = () => {
    return windowWidth >= 1024;
  };

  return (
    <>
      <nav className="relative w-full z-50">
        <div className="hidden md:flex flex-col bg-white w-full">
          <div className="w-full flex flex-row items-center justify-between px-14 py-6">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-8">
                <img src={logoImage} alt="Logo" className="w-36 h-10" />
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
                    <li><Link to="/verifdsnplus" className="cursor-pointer" onClick={() => setIsMoreOpen(false)}> VERIF'DSN PLUS</Link></li>
                    <li className="cursor-pointer flex flex-col">
                      <Link to="/SolwaySynchronisationHRPage" onClick={() => setIsMoreOpen(false)}>
                        <span>SOLWAY</span><br />
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
                    <li ><Link to="/CandidaturePage" className="cursor-pointer" onClick={() => setIsMoreOpen(false)}> Candidatures</Link></li>
                    <li><Link to="/NosmissionsPage" className="cursor-pointer" onClick={() => setIsMoreOpen(false)}>Nos Missions </Link> </li>
                    <li><Link to="/VosmissionsPage" className="cursor-pointer" onClick={() => setIsMoreOpen(false)}>Vos Missions</Link></li>
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

        <div className="md:hidden w-full bg-white">
          <div className="p-4 flex justify-between items-center">
            <img src={logoImage} alt="Logo" className="w-28 h-8" />
            <button 
              ref={menuButtonRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="ml-auto"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          <div className="w-full flex flex-col items-center pt-8 text-center pb-14">
            <div>
              <h1 className="text-[30px] font-extrabold text-[#030712]">
                ASSOCIATION SOLWAY POUR LA SOLIDARITÉ
              </h1>
              <p className="pl-4 pt-4 pr-4 text-medium mb-10 text-[#030712] max-w-xl mx-auto">
                Conscients de leur responsabilité envers les actions caritatives, les salariés de SOLWAY ont créé l'Association SOLWAY Pour la Solidarité.
              </p>
            </div>
  
            <div className="w-full px-16 pt-10">
              <img src={Associationlogo} alt="Association Solway Logo" className="max-w-full h-auto" />
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div 
            ref={mobileMenuRef}
            className="absolute top-[64px] left-1/2 transform -translate-x-1/2 w-[80%] bg-white max-w-[400px] z-50 p-6 flex flex-col items-center space-y-6 rounded-b-lg shadow-lg md:hidden"
          >
            <ul className="text-lg font-semibold text-black space-y-4 w-full">
              <li className="cursor-pointer pt-4 w-full text-center">
                <Link to="/" className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>Home</Link>
              </li>
              <li className="cursor-pointer border-t border-gray-300 pt-4 w-full text-center" onClick={() => setIsMenuOpen(false)}>Features</li>
              <li className="cursor-pointer border-t border-gray-300 pt-4 w-full text-center" onClick={() => setIsMenuOpen(false)}>Clients</li>
              <li className="cursor-pointer border-t border-gray-300 pt-4 w-full text-center">
                <Link to="/contact" className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>Contact</Link>
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

      <main className="w-full flex flex-col bg-[#F9FAFB] mb-4 z-40">
        <div className="hidden md:block h-auto w-full">
          <div className="w-full text-center p-20 py-8 ipad-pro:p-8 md:p-8 lg:p-20"
            style={{
              backgroundImage: `url(${
                isMdOrIpadPro() ? containerImage1 : 
                isLgOrLarger() ? containerImage : 'none'
              })`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full mx-auto">
              <div className="bg-white shadow-lg rounded-lg p-6 flex flex-row justify-between items-center">
                <div className="w-1/2 text-left pl-3">
                  <h1 className="text-5xl lg:text-5xl ipad-pro:text-[36px] md:text-[36px] mb-4 font-extrabold text-[#030712]">ASSOCIATION SOLWAY POUR LA SOLIDARITÉ</h1>
                  <p className="text-medium text-[#030712] mb-4">
                    Conscients de leur responsabilité envers les actions caritatives, les salariés de SOLWAY ont créé l'Association SOLWAY Pour la Solidarité.
                  </p>
                  <p className="text-medium text-[#030712]">
                    Nous priorisons l'accès à une éducation de qualité pour les enfants défavorisés et soutenons financièrement les plus démunis pour assurer leur dignité. Ensemble, nous incarnons la solidarité et l'engagement pour un Maroc plus solidaire.
                  </p>
                </div>
                <div className="w-1/2 flex justify-end">
                  <img 
                    src={Associationlogo} alt="Association Solway Logo" 
                    className="w-[296px] h-[258px] object-contain" 
                  />
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-4xl lg:text-4xl ipad-pro:text-[30px] md:text-[30px] pt-0 lg:pt-0 ipad-pro:pt-8 md:pt-9 font-extrabold text-center mb-10">Engagement Solidaire de SOLWAY pour un Maroc Inclusif</h1>

          <div className="w-full flex justify-center px-12 lg:px-20 md:px-6 ipad-pro:px-8" 
            style={{
              backgroundImage: isMdOrIpadPro() ? 
                `url(${containerImage1}), url(${containerImage1})` : 
                isLgOrLarger() ? 
                  `url(${containerImagesvg}), url(${containerImagesvg})` : 
                  'none', 
              backgroundRepeat: 'no-repeat', 
              backgroundPosition: ' center 23%, center 65%', 
              backgroundSize: 'contain', 
            }}
          >
            <div className="flex flex-col lg:flex-row md:flex-row justify-between space-x-0 lg:space-x-6 md:space-x-4 space-y-6 lg:space-y-0 md:space-y-0 w-full max-w-7xl py-8">
              
              <div className="bg-white border border-green-500 shadow-md rounded-lg p-6 flex flex-col items-center text-center flex-1 w-96 h-72 sm:w-399 sm:h-287">
                <div className="text-green-500 mb-4">
                  <FaHandsHoldingChild size={48} />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-green-500">Perspectives d'Avenir pour les Enfants</h2>
                <p className="text-medium text-[#030712]">
                  Offrir des opportunités aux enfants défavorisés.
                </p>
              </div>
              
              <div className="bg-white border border-green-500 shadow-md rounded-lg p-6 flex flex-col items-center text-center flex-1 w-96 h-72 sm:w-399 sm:h-287">
                <div className="text-green-500 mb-4">
                  <PiHandCoinsBold size={48} />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-green-500">Soutien Financier pour la Dignité</h2>
                <p className="text-medium text-[#030712]">
                  Garantir des conditions de vie dignes par un soutien financier.
                </p>
              </div>
              
              <div className="bg-white border border-green-500 shadow-md rounded-lg p-6 flex flex-col items-center text-center flex-1 w-96 h-72 sm:w-399 sm:h-287">
                <div className="text-green-500 mb-4">
                  <FaGraduationCap size={48} />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-green-500">Éducation Accessible pour Tous</h2>
                <p className="text-medium text-[#030712]">
                  Simplifiez la création, le suivi et la résolution des tickets avec une interface utilisateur intuitive.
                </p>
              </div>
            </div>
          </div>
       
          <div className="w-full px-12 lg:px-20 md:px-6 ipad-pro:px-8 mt-12 mb-12">
            <div className="bg-[#22C55E] shadow-lg rounded-lg p-8 text-white my-8">
              <h2 className="text-3xl font-extrabold mb-6">Engagement Collectif pour un Maroc Solidaire</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Nos actions visent à accompagner et à soutenir la population locale dans son développement, avec pour ambition de favoriser leur autonomie progressive.
                </li>
                <li>
                  Notre principal objectif est d'apporter un soutien significatif aux enfants vivant dans des conditions difficiles afin de les aider à construire un avenir meilleur.
                </li>
                <li>
                  Nous nous engageons aussi à soutenir financièrement les personnes les plus démunies pour leur permettre de répondre aux conditions minimales d'une vie digne.
                </li>
                <li>
                  Nous nous investissons fermement pour que chaque enfant en situation précaire ait l'opportunité d'accéder à l'éducation en construisant ou en rénovant des écoles dans les villages reculés. En unissant nos efforts, nous croyons fermement en la capacité de chacun à contribuer positivement au développement et au bien-être de notre société. Ensemble, nous incarnons les valeurs de solidarité et d'engagement pour un Maroc solidaire.
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="md:hidden w-full">
          <h1 className="p-4 text-3xl font-extrabold pt-8 text-center mb-6">Engagement Solidaire de SOLWAY pour un Maroc Inclusif</h1>
          
          <div className="p-4 w-full flex flex-col space-y-6 pt-5 bg-[#F9FAFB]">
          
            <div className="bg-white bg-opacity-95 border border-green-500 shadow-lg rounded-lg p-14 flex flex-col items-center text-center w-[399px] h-[287px]">
              <div className="text-green-500 mb-4">
                <FaHandsHoldingChild size={36} />
              </div>
              <h2 className="text-xl font-bold mb-3 text-green-500">Perspectives d'Avenir pour les Enfants</h2>
              <p className="text-medium text-[#030712]">
                Offrir des opportunités aux enfants défavorisés.
              </p>
            </div>
           
            <div className="bg-white bg-opacity-95 border border-green-500 shadow-lg rounded-lg flex flex-col p-14 items-center text-center w-[399px] h-[287px]">
              <div className="text-green-500 mb-4">
                <PiHandCoinsBold size={36} />
              </div>
              <h2 className="text-xl font-bold mb-3 text-green-500">Soutien Financier pour la Dignité</h2>
              <p className="text-medium text-[#030712]">
                Garantir des conditions de vie dignes par un soutien financier.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-95 border border-green-500 shadow-lg rounded-lg flex flex-col p-14 items-center text-center w-[399px] h-[287px]">
              <div className="text-green-500 mb-4">
                <FaGraduationCap size={36} />
              </div>
              <h2 className="text-xl font-bold mb-3 text-green-500">Éducation Accessible pour Tous</h2>
              <p className="text-medium text-[#030712]">
                Simplifiez la création, le suivi et la résolution des tickets avec une interface utilisateur intuitive.
              </p>
            </div>
            
            <div className="bg-[#22C55E] shadow-lg rounded-lg p-6 mt-4 mb-6 text-white">
              <h2 className="text-2xl font-bold mb-4 text-center">Engagement Collectif pour un Maroc Solidaire</h2>
              <ul className="list-disc pl-4 space-y-2">
                <li>
                  Nos actions visent à accompagner et à soutenir la population locale dans son développement, avec pour ambition de favoriser leur autonomie progressive.
                </li>
                <li>
                  Notre principal objectif est d'apporter un soutien significatif aux enfants vivant dans des conditions difficiles afin de les aider à construire un avenir meilleur.
                </li>
                <li>
                  Nous nous engageons aussi à soutenir financièrement les personnes les plus démunies pour leur permettre de répondre aux conditions minimales d'une vie digne.
                </li>
                <li>
                  Nous nous investissons fermement pour que chaque enfant en situation précaire ait l'opportunité d'accéder à l'éducation en construisant ou en rénovant des écoles dans les villages reculés. En unissant nos efforts, nous croyons fermement en la capacité de chacun à contribuer positivement au développement et au bien-être de notre société. Ensemble, nous incarnons les valeurs de solidarité et d'engagement pour un Maroc solidaire.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Navbar;