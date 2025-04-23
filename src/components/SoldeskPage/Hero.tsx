import React from "react";
import containerImage from "../../assets/img/background.png";
import containerImage1 from "../../assets/img/imgbg.png";
import containerImagesvg from "../../assets/Svg/Imgcontainer.svg";
import soldesklogo from "../../assets/img/Soldesklogo.png";
import soldesketap1 from "../../assets/img/soldesketap1.png";
import soldesketap2 from "../../assets/img/soldesketap2.png";
import soldesketap3 from "../../assets/img/soldesketap3.png";


const Hero = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMdOrIpadPro = () => {
    return windowWidth >= 768 && windowWidth < 1366;
  };

  const isLgOrLarger = () => {
    return windowWidth >= 1024;
  };

  return (
    <>
    
      <div className="md:hidden w-full flex flex-col items-center text-center pb-14 bg-white">
        <div>
          <h1 className="text-[48px] pt-24 font-extrabold text-[#030712]">
            SOLDESK
          </h1>
          <p className="pl-4 pr-4 text-medium mb-10 text-[#030712] max-w-xl mx-auto">
            SOLDESK est une plateforme de gestion de tickets qui offre une gamme complète de fonctionnalités pour optimiser le processus de traitement des tickets et améliorer la collaboration au sein de votre équipe.
          </p>
        </div>

        <div className="w-full px-16 pt-6">
          <img src={soldesklogo} alt="soldesk" className="max-w-full h-auto" />
        </div>
      </div>

      <main className="w-full flex flex-col bg-[#F9FAFB] mb-4 z-40 ">
        <div className="hidden md:block h-auto pt-20 w-full">
          <div className="w-full text-center p-20 py-8 ipad-pro:p-8 md:p-7 lg:p-20"
            style={{
              backgroundImage: `url(${
                isMdOrIpadPro() ? containerImage1 : 
                isLgOrLarger() ? containerImage : 'none'
              })`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center ",
            }}
          >
            <div className="w-full mx-auto  ">
              <div className="bg-white shadow-lg pt-24rounded-lg p-6 flex flex-row justify-between items-center">
                <div className="w-1/2 text-center">
                  <h1 className="text-5xl mb-4 font-extrabold text-[#030712]">SOLDESK</h1>
                  <p className="text-medium text-[#030712]">
                    SOLDESK est une plateforme de gestion de tickets qui offre une
                    gamme complète de fonctionnalités pour optimiser le processus de
                    traitement des tickets et améliorer la collaboration au sein de votre
                    équipe.
                  </p>
                </div>
                <div className="w-1/2 flex justify-end">
                  <img 
                    src={soldesklogo} alt="Soldesk Logo" 
                    className="w-1/2 h-auto object-contain" 
                  />
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-4xl pt-0 lg:pt-0 ipad-pro:pt-8 md:pt-9  font-extrabold text-center mb-3">Fonctionnalités de SOLDESK</h1>

          <div className="w-full flex justify-center"
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
            <div className="w-full px-12 pt-12 lg:px-20 md:px-6 ipad-pro:px-8">
              <div className="bg-white shadow-lg rounded-lg p-7 mx-auto">
                
                <div className="flex flex-col lg:flex-row md:flex-row justify-between  mb-12">
                  <div className="w-full lg:w-1/2 pr-0 lg:pr-6 mb-6 lg:mb-0 md:w-1/2 md:pr-4 md:mb-0 text-center lg:text-left md:text-left">
                    <h2 className="text-3xl font-extrabold mb-4 pt-4">SUIVI EN TEMPS RÉEL</h2>
                    <p className="text-medium text-[#030712] mb-3">
                      Suivez l'évolution des tickets en temps réel avec une transparence totale à chaque étape du processus.
                    </p>
                    <p className="text-medium text-[#030712] mb-3">
                      SOLDESK vous permet de vérifier l'état de vos demandes à tout moment, assurant une communication claire et immédiate.
                    </p>
                    <p className="text-medium text-[#030712]">
                      Grâce à ce suivi détaillé, les utilisateurs peuvent voir précisément où en est leur demande et recevoir des mises à jour instantanées à chaque changement d'état.
                    </p>
                  </div>
                  <div className="w-full lg:w-1/2 md:w-1/2  pt-4 flex justify-center">
                    <img src={soldesketap1} alt="Etape 1" className="max-w-full h-auto rounded-lg" />
                  </div>
                </div>
                
                <div className="flex flex-col mb-12">
                  <div className="flex flex-col  lg:flex-row md:flex-row justify-between ">
                    <div className="w-full pt-10 lg:w-1/2 md:w-1/2 flex justify-center">
                      <img src={soldesketap2} alt="Etape 2" className="max-w-full h-auto rounded-lg" />
                    </div>
                    <div className="w-full lg:w-1/2 md:w-1/2 pl-0 lg:pl-6 md:pl-4 mb-6 lg:mb-0 md:mb-0 text-center lg:text-left md:text-left">
                      <h2 className="text-3xl font-extrabold mb-4">COMMUNICATION EFFICACE</h2>
                      <p className="text-medium text-[#030712] mb-3">
                        Facilitez les échanges entre les utilisateurs et les responsables de la gestion des tickets grâce à SOLDESK.
                      </p>
                      <p className="text-medium text-[#030712] mb-3">
                        Notre plateforme permet aux clients de communiquer directement avec l'équipe en charge de leurs tickets en cas de besoin, assurant ainsi une réponse rapide et personnalisée. De plus, les managers et les membres de l'équipe de traitement des tickets peuvent également échanger des messages entre eux et avec l'ensemble de l'équipe.
                      </p>
                      <p className="text-medium text-[#030712]">
                        Cette communication bidirectionnelle et transparente garantit que toutes les parties concernées restent informées et peuvent collaborer efficacement pour résoudre les demandes.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col lg:flex-row md:flex-row justify-between  ">
                  <div className="w-full lg:w-1/2 md:w-1/2 pr-0 lg:pr-4 md:pr-6 mb-4 lg:mb-0 md:mb-0 text-center lg:text-left md:text-left">
                    <h1 className="text-3xl font-extrabold mb-4">GESTION FLUIDE ET EFFICACE</h1>
                    <p className="text-medium text-[#030712] mb-3">
                      Avec SOLDESK, la gestion des tickets est simplifiée et efficace. En un seul clic, vous pouvez facilement créer un ticket en remplissant les champs nécessaires.
                    </p>
                    <p className="text-medium text-[#030712] mb-3">
                      Vous avez également la possibilité de joindre des fichiers pertinents directement au ticket.
                    </p>
                    <p className="text-medium text-[#030712]">
                      Cette simplicité d'utilisation permet de gagner du temps et d'assurer que toutes les informations nécessaires sont immédiatement disponibles, ce qui facilite une gestion rapide et précise des demandes.
                    </p>
                  </div>
                  <div className="w-full   lg:w-1/2 md:w-1/2 flex  justify-center">
                    <img src={soldesketap3} alt="Etape 3" className="max-w-full h-auto  rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <div className="md:hidden w-full">
          <h1 className="p-4 text-3xl font-extrabold  text-center mb-2">Fonctionnalités de SOLDESK</h1>
          
          <div className="p-4 w-full flex justify-center pt-5 bg-[#F9FAFB]">
            <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-10 w-full">

              <div>
                <h2 className="text-2xl font-bold mb-4 text-center">SUIVI EN TEMPS RÉEL</h2>
                <p className="text-medium text-[#030712] text-left mb-3">
                  Suivez l'évolution des tickets en temps réel avec une transparence totale à chaque étape du processus.
                </p>
                <p className="text-medium text-[#030712] text-left mb-3">
                  SOLDESK vous permet de vérifier l'état de vos demandes à tout moment, assurant une communication claire et immédiate.
                </p>
                <p className="text-medium text-[#030712] text-left mb-6">
                  Grâce à ce suivi détaillé, les utilisateurs peuvent voir précisément où en est leur demande et recevoir des mises à jour instantanées à chaque changement d'état.
                </p>
                <div className="flex justify-center pt-4">
                  <img src={soldesketap1} alt="Etape 1" className="max-w-full h-auto rounded-lg" />
                </div>
              </div>

              <div className="space-y-4 pt-10">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-center">COMMUNICATION EFFICACE</h2>
                  <p className="text-medium text-[#030712] text-left mb-3">
                    Facilitez les échanges entre les utilisateurs et les responsables de la gestion des tickets grâce à SOLDESK.
                  </p>
                  <p className="text-medium text-[#030712] text-left mb-3">
                    Notre plateforme permet aux clients de communiquer directement avec l'équipe en charge de leurs tickets en cas de besoin, assurant ainsi une réponse rapide et personnalisée. De plus, les managers et les membres de l'équipe de traitement des tickets peuvent également échanger des messages entre eux et avec l'ensemble de l'équipe.
                  </p>
                  <p className="text-medium text-[#030712] text-left mb-6">
                    Cette communication bidirectionnelle et transparente garantit que toutes les parties concernées restent informées et peuvent collaborer efficacement pour résoudre les demandes.
                  </p>
                  
                  <div className="flex justify-center mt-4">
                    <img src={soldesketap2} alt="Etape 2" className="max-w-full h-auto pt-4 rounded-lg" />
                  </div>
                </div>
              </div>

              <div>
                <h1 className="text-2xl font-bold mb-4 text-center">GESTION FLUIDE ET EFFICACE</h1>
                <p className="text-medium text-[#030712] text-left mb-3">
                  Avec SOLDESK, la gestion des tickets est simplifiée et efficace. En un seul clic, vous pouvez facilement créer un ticket en remplissant les champs nécessaires.
                </p>
                <p className="text-medium text-[#030712] text-left mb-3">
                  Vous avez également la possibilité de joindre des fichiers pertinents directement au ticket.
                </p>
                <p className="text-medium text-[#030712] text-left mb-6">
                  Cette simplicité d'utilisation permet de gagner du temps et d'assurer que toutes les informations nécessaires sont immédiatement disponibles, ce qui facilite une gestion rapide et précise des demandes.
                </p>
                <div className="flex justify-center">
                  <img src={soldesketap3} alt="Etape 3" className="max-w-full h-auto rounded-lg" />
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