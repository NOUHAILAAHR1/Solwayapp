import React from "react";
import containerImage1 from "../../assets/img/background.png";
import containerImagesvg from "../../assets/Svg/Imgcontainer.svg";
import invoicelogo from "../../assets/img/inovoicelogopng.png";
import soldesketap1 from "../../assets/img/invoiceetap1.png";
import soldesketap2 from "../../assets/img/invoiceetap2.png";
import soldesketap3 from "../../assets/img/invoiceetap3.png";

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
          <h1 className="text-[36px] pt-24  font-extrabold text-[#030712]">
            SOLWAY INVOICE
          </h1>
          <p className="pl-4 pr-4 text-medium mb-10 text-[#030712] max-w-xl mx-auto">
            SOLWAY INVOICE est un outil de gestion de la facturation conçu pour simplifier et optimiser le processus de facturation. Il offre une gamme de fonctionnalités pour assurer une gestion fluide et efficace des transactions financières.
          </p>
        </div>

        <div className="w-full px-16 pt-6">
          <img src={invoicelogo} alt="soldesk" className="max-w-full h-auto" />
        </div>
      </div>

      <main className="w-full flex flex-col bg-[#F9FAFB] mb-4 z-40">
        <div className="hidden md:block h-auto pt-20 w-full">
          <div className="w-full text-center p-20 py-8 ipad-pro:p-8 md:p-6 lg:p-20"
            style={{
              backgroundImage: `url(${
                isMdOrIpadPro() ? containerImage1 : 
                isLgOrLarger() ? containerImage1 : 'none'
              })`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full mx-auto">
              <div className="bg-white shadow-lg rounded-lg p-6 flex flex-row justify-between items-center">
                <div className="w-1/2 text-center">
                  <h1 className="text-5xl mb-4 font-extrabold text-[#030712]">SOLWAY INVOICE</h1>
                  <p className="text-medium text-[#030712]">
                    SOLWAY INVOICE est un outil de gestion de la facturation conçu pour simplifier et optimiser le processus de facturation. Il offre une gamme de fonctionnalités pour assurer une gestion fluide et efficace des transactions financières.
                  </p>
                </div>
                <div className="w-1/2 flex justify-end">
                  <img 
                    src={invoicelogo} alt="Invoice Logo" 
                    className="w-1/2 h-auto object-contain" 
                  />
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-4xl pt-0 lg:pt-0 ipad-pro:pt-8 md:pt-9 font-extrabold text-center mb-3">Fonctionnalités de SOLWAY INVOICE</h1>

          <div className="w-full flex justify-center"
            style={{
              backgroundImage: isMdOrIpadPro() ? 
                `url(${containerImagesvg}), url(${containerImagesvg}),url(${containerImagesvg})` : 
                isLgOrLarger() ? 
                  `url(${containerImagesvg}), url(${containerImagesvg})` : 
                  'none', 
              backgroundRepeat: 'no-repeat', 
              backgroundPosition: 'center 10%, center 60%, bottom', 
              backgroundSize: 'contain', 
            }}
          >
            <div className="w-full px-12 pt-12 lg:px-20 md:px-6 ipad-pro:px-8">
              <div className="bg-white shadow-lg rounded-lg p-7 mx-auto">
                
                <div className="flex flex-col lg:flex-row md:flex-row justify-between items-center mb-12">
                  <div className="w-full lg:w-1/2 pr-0 lg:pr-6 mb-12 lg:mb-0 md:w-1/2 md:pr-4 md:mb-0 text-center lg:text-left md:text-left">
                    <h2 className="text-3xl font-extrabold mb-4 pt-4">Génération Facile du Compte Rendu d'Activité pour Chaque Utilisateur</h2>
                    <p className="text-medium text-[#030712] mb-3">
                      Créez facilement des comptes rendus d'activité pour chaque utilisateur, offrant une vue d'ensemble claire et détaillée des transactions et des performances financières.
                    </p>
                  </div>
                  <div className="w-full lg:w-1/2 md:w-1/2 pt-4 flex justify-center">
                    <img src={soldesketap1} alt="Etape 1" className="max-w-full h-auto rounded-lg" />
                  </div>
                </div>
                
                <div className="flex flex-col  mb-12">
                  <div className="flex flex-col mb-12 lg:flex-row md:flex-row justify-between items-center ">
                    <div className="w-full pt-10 lg:w-1/2 md:w-1/2 flex justify-center ">
                      <img src={soldesketap2} alt="Etape 2" className="max-w-full h-auto rounded-lg" />
                    </div>
                    <div className="w-full lg:w-1/2 md:w-1/2 pl-0 lg:pl-6 md:pl-4 mb-6 lg:mb-0 md:mb-0 text-center lg:text-left md:text-left">
                      <h2 className="text-3xl pt-10 font-extrabold mb-4">Génération Automatique des Factures</h2>
                      <p className="text-medium text-[#030712] mb-3">
                        Générez automatiquement des factures professionnelles et personnalisées. Configurez des modèles de factures et des paramètres pour automatiser la création et l'envoi des factures.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col lg:flex-row md:flex-row justify-between items-center">
                  <div className="w-full lg:w-1/2 md:w-1/2 pr-0 lg:pr-4 md:pr-6 mb-4 lg:mb-0 md:mb-0 text-center lg:text-left md:text-left">
                    <h1 className="text-3xl font-extrabold mb-4">Suivi Facile du Paiement des Factures</h1>
                    <p className="text-medium text-[#030712] mb-3">
                      Suivez facilement le paiement des factures avec des outils de suivi en temps réel. Recevez des notifications et des rappels automatiques pour les factures en attente et les paiements à venir.
                    </p>
                  </div>
                  <div className="w-full lg:w-1/2 md:w-1/2 flex justify-center">
                    <img src={soldesketap3} alt="Etape 3" className="max-w-full h-auto rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:hidden w-full">
          <h1 className="p-4 text-3xl font-extrabold pt-8 text-center mb-2">Fonctionnalités de SOLWAY INVOICE</h1>
          
          <div className="p-4 w-full flex justify-center pt-5 bg-[#F9FAFB]">
            <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-10 w-full">

              <div>
                <h2 className="text-2xl font-bold mb-4 text-center">Génération Facile du Compte Rendu d'Activité pour Chaque Utilisateur</h2>
                <p className="text-medium text-[#030712] text-left mb-3">
                  Créez facilement des comptes rendus d'activité pour chaque utilisateur, offrant une vue d'ensemble claire et détaillée des transactions et des performances financières.
                </p>
                <div className="flex justify-center pt-4">
                  <img src={soldesketap1} alt="Etape 1" className="max-w-full h-auto rounded-lg" />
                </div>
              </div>

              <div className="space-y-4 pt-10">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-center">Génération Automatique des Factures</h2>
                  <p className="text-medium text-[#030712] text-left mb-3">
                    Générez automatiquement des factures professionnelles et personnalisées. Configurez des modèles de factures et des paramètres pour automatiser la création et l'envoi des factures.
                  </p>
                  <div className="flex justify-center mt-4">
                    <img src={soldesketap2} alt="Etape 2" className="max-w-full h-auto pt-4 rounded-lg" />
                  </div>
                </div>
              </div>

              <div>
                <h1 className="text-2xl font-bold mb-4 text-center">Suivi Facile du Paiement des Factures</h1>
                <p className="text-medium text-[#030712] text-left mb-3">
                  Suivez facilement le paiement des factures avec des outils de suivi en temps réel. Recevez des notifications et des rappels automatiques pour les factures en attente et les paiements à venir.
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