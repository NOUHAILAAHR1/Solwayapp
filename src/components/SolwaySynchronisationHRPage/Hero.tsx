import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import containerImage from "../../assets/img/background.png";
import containerImagesvg from "../../assets/Svg/Imgcontainer.svg"
import solwayetape1 from "../../assets/img/solwayetape1.png";
import solwayetape2 from "../../assets/img/solwayetap2.png";
import solwayetape3 from "../../assets/img/solwayetape3.png";
import solwayetape4 from "../../assets/img/solwayetape4.png";

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <main className="w-full flex flex-col bg-[#F9FAFB]  z-40">
      
        <div className="hidden md:block h-auto pt-28 w-full">
          <div className="w-full text-center py-8 h-auto lg:h-72 md:h-auto ipad-pro:h-auto"
            style={{
              backgroundImage: `url(${containerImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center 78% ",
             
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
                backgroundImage: `url(${containerImagesvg}), url(${containerImagesvg})`, 
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
                      <h2 className="text-2xl font-extrabold mb-4">Solutions hautement efficaces</h2>
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

        <div className="block md:hidden pt-20 w-full p-4">
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
                  <h2 className="text-2xl font-extrabold mb-6 text-center">Solutions hautement efficaces</h2>
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

export default Hero;