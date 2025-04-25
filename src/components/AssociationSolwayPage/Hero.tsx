import React from 'react';
import { PiHandCoinsBold } from "react-icons/pi";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import Associationlogo from "../../assets/img/associationlogo.png";
import containerImage from "../../assets/img/bgassociationsolway.png";

const Hero = () => {
  const isMdOrIpadPro = () => {
    return window.innerWidth >= 768 && window.innerWidth < 1366;
  };

  const isLgOrLarger = () => {
    return window.innerWidth >= 1024;
  };

  return (
    <main className="w-full flex flex-col bg-[#F9FAFB] mb-4 z-40">

      <div className="hidden md:block  pt-24 h-auto w-full">
        <div className="w-full text-center p-20 py-8 ipad-pro:p-8 md:p-5 lg:p-20"
          style={{
            backgroundImage: `url(${
              isMdOrIpadPro() ? containerImage : 
              isLgOrLarger() ? containerImage : 'none'
            })`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full mx-auto">
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-row justify-between items-center ">
              <div className="w-1/2 lg:w-1/2 md:w-1/2 ipad-pro:w-2/3 text-left pl-3">
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
              `url(${containerImage})` : 
              isLgOrLarger() ? 
                `url(${containerImage})` : 
                'none', 
            backgroundRepeat: 'no-repeat', 
            backgroundPosition: 'center', 
            backgroundSize: 'contain', 
          }}
        >
          <div className="flex flex-col lg:flex-row md:flex-row justify-between space-x-0 lg:space-x-6 md:space-x-4 space-y-6 lg:space-y-0 md:space-y-0 w-full max-w-7xl py-8">
            
            <div className="bg-white border border-green-500 shadow-md rounded-lg p-6 flex flex-col items-center text-center flex-1 w-96 max-h-screen sm:w-399 sm:h-287">
              <div className="text-green-500 mb-4">
                <FaHandsHoldingChild size={48} />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-green-500">Perspectives d'Avenir pour les Enfants</h2>
              <p className="text-medium text-[#030712]">
                Offrir des opportunités aux enfants défavorisés.
              </p>
            </div>
            
            <div className="bg-white border border-green-500 shadow-md rounded-lg p-6 flex flex-col items-center text-center flex-1 w-96 max-h-screen sm:w-399 sm:h-287">
              <div className="text-green-500 mb-4">
                <PiHandCoinsBold size={48} />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-green-500">Soutien Financier pour la Dignité</h2>
              <p className="text-medium text-[#030712]">
                Garantir des conditions de vie dignes par un soutien financier.
              </p>
            </div>
            
            <div className="bg-white border border-green-500 shadow-md rounded-lg p-6 flex flex-col items-center text-center flex-1 w-96 max-h-screen sm:w-96 sm:max-h-screen sm:p-4">
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

        <div className="w-full flex justify-center px-12 lg:px-20 md:px-6 ipad-pro:px-8" 
          style={{
            backgroundImage: isMdOrIpadPro() ? 
              `url(${containerImage})` : 
              isLgOrLarger() ? 
                `url(${containerImage})` : 
                'none', 
            backgroundRepeat: 'no-repeat', 
            backgroundPosition: 'center', 
            backgroundSize: 'contain', 
          }}
        >
        <div className="w-full lg:px-0 md:px-0 ipad-pro:px-0 mt-12 mb-12">
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
      </div>
  

      <div className="md:hidden  w-full">
        <div className="w-full flex flex-col items-center  bg-white text-center pb-14">
          <div>
            <h1 className="text-[30px] p-3  pt-24 font-extrabold text-[#030712]">
              ASSOCIATION SOLWAY POUR LA SOLIDARITÉ
            </h1>
            <p className="pl-5 pr-5 text-medium mb-10 text-[#030712] max-w-xl mx-auto">
              SOLWAY INVOICE est un outil de gestion de la facturation conçu pour simplifier et optimiser le processus de facturation. Il offre une gamme de fonctionnalités pour assurer une gestion fluide et efficace des transactions financières.
            </p>
          </div>

          <div className="w-full px-6 sm:px-16 pt-10">
            <img src={Associationlogo} alt="Association Solway Logo" className="max-w-full h-auto mx-auto" />
          </div>
        </div>

        <h1 className="p-4 pr-7 pl-7 text-2xl sm:text-3xl font-extrabold pt-8 text-center mb-6">Engagement Solidaire de SOLWAY pour un Maroc Inclusif</h1>
        
        <div className="p-4 w-full flex flex-col items-center space-y-6 pt-5 bg-[#F9FAFB]">
        
          <div className="bg-white bg-opacity-95 border border-green-500 shadow-lg rounded-lg p-10 flex flex-col items-center text-center w-full max-w-md">
            <div className="text-green-500 mb-4">
              <FaHandsHoldingChild size={36} />
            </div>
            <h2 className="text-xl font-bold mb-3 text-green-500">Perspectives d'Avenir pour les Enfants</h2>
            <p className="text-medium text-[#030712]">
              Offrir des opportunités aux enfants défavorisés.
            </p>
          </div>
         
          <div className="bg-white bg-opacity-95 border border-green-500 shadow-lg rounded-lg flex flex-col p-10 items-center text-center w-full max-w-md">
            <div className="text-green-500 mb-4">
              <PiHandCoinsBold size={36} />
            </div>
            <h2 className="text-xl font-bold mb-3 text-green-500">Soutien Financier pour la Dignité</h2>
            <p className="text-medium text-[#030712]">
              Garantir des conditions de vie dignes par un soutien financier.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-95 border border-green-500 shadow-lg rounded-lg flex flex-col p-10 items-center text-center w-full max-w-md">
            <div className="text-green-500 mb-4">
              <FaGraduationCap size={36} />
            </div>
            <h2 className="text-xl font-bold mb-3 text-green-500">Éducation Accessible pour Tous</h2>
            <p className="text-medium text-[#030712]">
              Simplifiez la création, le suivi et la résolution des tickets avec une interface utilisateur intuitive.
            </p>
          </div>
          
          <div className="bg-[#22C55E] shadow-lg rounded-lg p-6 mt-4 mb-6 text-white w-full">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Engagement Collectif pour un Maroc Solidaire</h2>
            <ul className="list-disc pl-4 space-y-2 text-sm sm:text-base">
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
  );
};

export default  Hero ;