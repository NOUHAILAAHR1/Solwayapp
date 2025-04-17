import React, { useState, useEffect, useRef  } from "react";
import { Menu, X, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from 'react-router-dom';
import logoImage from "../../assets/img/logo.png";
import containerImage from "../../assets/img/background.png";
import containerImage1 from "../../assets/img/imgbg.png";
import containerImagesvg from "../../assets/Svg/Imgcontainer.svg";
import solwayhr from "../../assets/img/Solwayhr.png";
import solwayhretap1 from "../../assets/img/solwayhretap1.png";
import solwayhretap2 from "../../assets/img/solwayhretap2.png";
import solwayhretap3 from "../../assets/img/solwayhretap3.png";
import solwayhretap4 from "../../assets/img/solwayhretap4.png";

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
        <div className="hidden md:flex bg-white flex-col w-full">
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
              <h1 className="text-[48px] font-extrabold text-[#030712]">
                SOLWAY HR
              </h1>
              <p className="pl-4 pr-4 text-medium mb-10 text-[#030712] max-w-xl mx-auto">
                SOLWAY HR est une solution intuitive et complète conçue pour optimiser les différents processus des ressources humaines. Notre plateforme offre une gamme étendue de fonctionnalités, couvrant tous les aspects nécessaires et suffisants pour une gestion efficace des ressources humaines.
              </p>
            </div>

            <div className="w-full px-16 pt-10">
              <img src={solwayhr} alt="solwayhr" className="max-w-full h-auto" />
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
              <div className="w-1/2 text-center">
                <h1 className="text-5xl mb-4 font-extrabold text-[#030712]">SOLWAY HR</h1>
                <p className="text-medium text-[#030712]">
                  SOLWAY HR est une solution intuitive et complète conçue pour optimiser les différents processus des ressources humaines. Notre plateforme offre une gamme étendue de fonctionnalités, couvrant tous les aspects nécessaires et suffisants pour une gestion efficace des ressources humaines.
                </p>
              </div>
              <div className="w-1/2 flex justify-end">
                <img 
                  src={solwayhr} alt="Solway HR Logo" 
                  className="w-1/2 h-auto object-contain" 
                />
              </div>
            </div>
          </div>
          </div>

          <h1 className="text-4xl pt-0 lg:pt-0 ipad-pro:pt-8 md:pt-9 font-extrabold text-center mb-3">Fonctionnalités de SOLWAY HR</h1>

          <div className="w-full flex justify-center"
            style={{
              backgroundImage: isMdOrIpadPro() ? 
                `url(${containerImage1}), url(${containerImage1}), url(${containerImage1})` : 
                isLgOrLarger() ? 
                  `url(${containerImagesvg}), url(${containerImagesvg}), url(${containerImagesvg})` : 
                  'none', 
              backgroundRepeat: 'no-repeat', 
              backgroundPosition: 'center 11%, center 63%, bottom', 
              backgroundSize: 'contain', 
            }}
          >
            <div className="w-full px-12 pt-12 lg:px-20 md:px-6 ipad-pro:px-8">
              <div className="bg-white shadow-lg rounded-lg p-7 mx-auto">
                
                <div className="flex flex-col lg:flex-row md:flex-row justify-between mb-12">
                  <div className="w-full lg:w-1/2 pr-0 lg:pr-6 mb-12 lg:mb-0 md:w-1/2 md:pr-4 md:mb-0 text-center lg:text-left md:text-left">
                    <h2 className="text-3xl font-extrabold mb-4 pt-4">Administration du personnel</h2>
                    <p className="text-medium text-[#030712] mb-3">
                      Avec SOLWAY HR, gérez efficacement toutes les phases du cycle de vie des employés de votre entreprise grâce à une solution complète qui centralise et simplifie la gestion du personnel. Vous pouvez :
                    </p>
                    <ul className="list-disc pl-6 text-medium text-[#030712]">
                      <li>Embauche</li>
                      <li>Réembauche</li>
                      <li>Mutation</li>
                      <li>Sortie</li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-1/2 md:w-1/2 pt-4 flex justify-center">
                    <img src={solwayhretap1} alt="Etape 1" className="max-w-full h-auto rounded-lg" />
                  </div>
                </div>
                
                <div className="flex flex-col mb-12">
                  <div className="flex flex-col mb-12 lg:flex-row md:flex-row justify-between items-center">
                    <div className="w-full pt-10 lg:w-1/2 md:w-1/2 flex justify-center">
                      <img src={solwayhretap2} alt="Etape 2" className="max-w-full h-auto rounded-lg" />
                    </div>
                    <div className="w-full lg:w-1/2 md:w-1/2 pl-0 lg:pl-6 md:pl-4 mb-6 lg:mb-0 md:mb-0 text-center lg:text-left md:text-left">
                      <h2 className="text-3xl font-extrabold mb-4">Gestion des absences</h2>
                      <p className="text-medium text-[#030712] mb-3">
                        Avec SOLWAY HR, la gestion des absences devient simple et efficace. Notre plateforme vous permet de :
                      </p>
                      <ul className="list-disc pl-6 text-medium text-[#030712]">
                        <li>Gestion des Compteurs de Congé</li>
                        <li>Diversité des Types d'Absences</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col lg:flex-row md:flex-row justify-between items-center mb-12">
                  <div className="w-full lg:w-1/2 md:w-1/2 pr-0 lg:pr-4 md:pr-6 mb-4 lg:mb-0 md:mb-0 text-center lg:text-left md:text-left">
                    <h1 className="text-3xl font-extrabold mb-4">Gestion du temps</h1>
                    <p className="text-medium text-[#030712] mb-3">
                      Avec SOLWAY HR, optimisez la gestion du temps de travail grâce à des outils avancés et intuitifs. Notre plateforme vous permet de :
                    </p>
                    <ul className="list-disc pl-6 text-medium text-[#030712]">
                      <li>Suivi des Heures de Travail</li>
                      <li>Planification et Gestion des Horaires</li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-1/2 md:w-1/2 flex justify-center">
                    <img src={solwayhretap3} alt="Etape 3" className="max-w-full h-auto rounded-lg" />
                  </div>
                </div>
                
                <div className="flex flex-col lg:flex-row md:flex-row justify-between items-center">
                  <div className="w-full pt-10 lg:w-1/2 md:w-1/2 flex justify-center">
                    <img src={solwayhretap4} alt="Etape 4" className="max-w-full h-auto rounded-lg" />
                  </div>
                  <div className="w-full lg:w-1/2 md:w-1/2 pl-0 lg:pl-6 md:pl-4 mb-6 lg:mb-0 md:mb-0 text-center lg:text-left md:text-left">
                    <h2 className="text-3xl font-extrabold mb-4">Gestion de la paie</h2>
                    <p className="text-medium text-[#030712] mb-3">
                      Avec SOLWAY HR, simplifiez et optimisez la gestion de la paie grâce à des outils complets et intuitifs. Notre plateforme vous permet de :
                    </p>
                    <ul className="list-disc pl-6 text-medium text-[#030712]">
                      <li>Gestion des Primes</li>
                      <li>Gestion des Cotisations</li>
                      <li>Intégration des Absences</li>
                      <li>Génération de Bulletins de Paie</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:hidden w-full">
          <h1 className="p-4 text-3xl font-extrabold pt-8 text-center mb-2">Fonctionnalités de SOLWAY HR</h1>
          
          <div className="p-4 w-full flex justify-center pt-5 bg-[#F9FAFB]">
            <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-10 w-full">

              <div>
                <h2 className="text-2xl font-bold mb-4 text-center">Administration du personnel</h2>
                <p className="text-medium text-[#030712] text-left mb-3">
                  Avec SOLWAY HR, gérez efficacement toutes les phases du cycle de vie des employés de votre entreprise grâce à une solution complète qui centralise et simplifie la gestion du personnel. Vous pouvez :
                </p>
                <ul className="list-disc pl-6 text-medium text-[#030712] mb-6">
                  <li>Embauche</li>
                  <li>Réembauche</li>
                  <li>Mutation</li>
                  <li>Sortie</li>
                </ul>
                <div className="flex justify-center pt-4">
                  <img src={solwayhretap1} alt="Etape 1" className="max-w-full h-auto rounded-lg" />
                </div>
              </div>

              <div className="space-y-4 pt-10">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-center">Gestion des absences</h2>
                  <p className="text-medium text-[#030712] text-left mb-3">
                    Avec SOLWAY HR, la gestion des absences devient simple et efficace. Notre plateforme vous permet de :
                  </p>
                  <ul className="list-disc pl-6 text-medium text-[#030712] mb-6">
                    <li>Gestion des Compteurs de Congé</li>
                    <li>Diversité des Types d'Absences</li>
                  </ul>
                  <div className="flex justify-center mt-4">
                    <img src={solwayhretap2} alt="Etape 2" className="max-w-full h-auto pt-4 rounded-lg" />
                  </div>
                </div>
              </div>

              <div>
                <h1 className="text-2xl font-bold mb-4 text-center">Gestion du temps</h1>
                <p className="text-medium text-[#030712] text-left mb-3">
                  Avec SOLWAY HR, optimisez la gestion du temps de travail grâce à des outils avancés et intuitifs. Notre plateforme vous permet de :
                </p>
                <ul className="list-disc pl-6 text-medium text-[#030712] mb-6">
                  <li>Suivi des Heures de Travail</li>
                  <li>Planification et Gestion des Horaires</li>
                </ul>
                <div className="flex justify-center">
                  <img src={solwayhretap3} alt="Etape 3" className="max-w-full h-auto rounded-lg" />
                </div>
              </div>
              
              <div>
                <h1 className="text-2xl font-bold mb-4 text-center">Gestion de la paie</h1>
                <p className="text-medium text-[#030712] text-left mb-3">
                  Avec SOLWAY HR, simplifiez et optimisez la gestion de la paie grâce à des outils complets et intuitifs. Notre plateforme vous permet de :
                </p>
                <ul className="list-disc pl-6 text-medium text-[#030712] mb-6">
                  <li>Gestion des Primes</li>
                  <li>Gestion des Cotisations</li>
                  <li>Intégration des Absences</li>
                  <li>Génération de Bulletins de Paie</li>
                </ul>
                <div className="flex justify-center">
                  <img src={solwayhretap4} alt="Etape 4" className="max-w-full h-auto rounded-lg" />
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