import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { IoLayers } from "react-icons/io5";
import { AiOutlineDatabase } from "react-icons/ai";
import { TbShieldChevron } from "react-icons/tb";
import containerImage from "../../assets/img/background.png";
import etap1 from "../../assets/img/etap1.png";
import etap2 from "../../assets/img/etap2.png";
import etap3 from "../../assets/img/etap3.png";

const PayrollSettings = () => {
  const { t } = useTranslation();

  const contentOptions = {
    "Paramétrage des blocs DSN": {
      title: t('payrollSettings.step1.title', "ETAPE 1 : Paramétrage Blocs DNS"),
      text: (
        <>
          {t('payrollSettings.step1.intro', "Cette étape permet de :")}
          <ul className="list-disc pl-5 pt-2 text-[#374151] text-justify">
            <li>{t('payrollSettings.step1.item1', "Sélectionner la source des données : Un fichier texte ou B2A")}</li>
            <li>{t('payrollSettings.step1.item2', "Renseigner la période de la paie.")}</li>
            <li>
              {t('payrollSettings.step1.item3', "Affiner la sélection en renseignant des matricules, tranches de décompte, sociétés …")}
            </li>
            <li>{t('payrollSettings.step1.item4', "Choisir le mode d'exécution du programme")}</li>
            <li>{t('payrollSettings.step1.item5', "Préciser la méthode de récupération des fichiers B2A ainsi que les résultats du contrôle (Par mail, fichiers Excel en local/serveur).")}
            </li>
          </ul>
        </>
      ),
      img: etap1,
    },
    "Sélection des données": {
      title: t('payrollSettings.step2.title', "ETAPE 2 : Sélection des données"),
      text: (
        <>
          {t('payrollSettings.step2.intro', "Cette étape permet de :")}
          <ul className="list-disc pl-5 pt-2 text-[#374151] text-justify">
            <li>{t('payrollSettings.step2.item1', "Sélectionner la source des données : Un fichier texte ou B2A")}</li>
            <li>{t('payrollSettings.step2.item2', "Renseigner la période de la paie.")}</li>
            <li>
              {t('payrollSettings.step2.item3', "Affiner la sélection en renseignant des matricules, tranches de décompte, sociétés …")}
            </li>
            <li>{t('payrollSettings.step2.item4', "Choisir le mode d'exécution du programme")}</li>
            <li>{t('payrollSettings.step2.item5', "Préciser la méthode de récupération des fichiers B2A ainsi que les résultats du contrôle (Par mail, fichiers Excel en local/serveur).")}
            </li>
          </ul>
        </>
      ),
      img: etap2,
    },
    "Exécution du contrôle": {
      title: t('payrollSettings.step3.title', "ETAPE 3 : Exécution du contrôle"),
      text: (
        <>
          {t('payrollSettings.step3.intro', "Cette étape permet de :")}
          <ul className="list-disc pl-5 pt-2 text-[#374151] text-justify">
            <li>{t('payrollSettings.step3.item1', "Sélectionner la source des données : Un fichier texte ou B2A")}</li>
            <li>{t('payrollSettings.step3.item2', "Renseigner la période de la paie.")}</li>
            <li>
              {t('payrollSettings.step3.item3', "Affiner la sélection en renseignant des matricules, tranches de décompte, sociétés …")}
            </li>
            <li>{t('payrollSettings.step3.item4', "Choisir le mode d'exécution du programme")}</li>
            <li>{t('payrollSettings.step3.item5', "Préciser la méthode de récupération des fichiers B2A ainsi que les résultats du contrôle (Par mail, fichiers Excel en local/serveur).")}
            </li>
          </ul>
        </>
      ),
      img: etap3,
    },
  };

  const [selectedContent, setSelectedContent] = useState(contentOptions["Paramétrage des blocs DSN"]);

  const buttonIcons = {
    "Paramétrage des blocs DSN": <IoLayers size={24} />, 
    "Sélection des données": <AiOutlineDatabase size={24} />, 
    "Exécution du contrôle": <TbShieldChevron size={24} />,
  };

  const getTranslatedButtonText = (key) => {
    const translations = {
      "Paramétrage des blocs DSN": t('payrollSettings.buttons.dsnConfig', "Paramétrage des blocs DSN"),
      "Sélection des données": t('payrollSettings.buttons.dataSelection', "Sélection des données"),
      "Exécution du contrôle": t('payrollSettings.buttons.controlExecution', "Exécution du contrôle"),
    };
    return translations[key] || key;
  };

  return (
    <main className="w-full flex flex-col bg-[#F9FAFB] pt-10 relative z-40">

      <div className="hidden lg:block xl:block xxl:block ipad-pro:hidden w-full text-center py-8">
        <h1 className="text-3xl mb-4 font-bold">
          {t('payrollSettings.mainTitle', "Contrôler votre DSN qu'en")} <br/>
          {t('payrollSettings.mainTitlePart2', "trois étapes :")}
        </h1>
        <div className="flex space-x-6 justify-center pt-6">
          {Object.keys(contentOptions).map((key) => (
            <button
              key={key}
              className={`w-96 h-12 px-6 py-3 flex items-center justify-center gap-2 rounded-lg shadow-md ${
                selectedContent.title === contentOptions[key].title
                  ? "bg-[#E0AC00] text-white"
                  : "border border-[#D1D5DB] bg-[#F9FAFB] text-black"
              }`}
              onClick={() => setSelectedContent(contentOptions[key])}
            >
              {buttonIcons[key]} <span>{getTranslatedButtonText(key)}</span>
            </button>
          ))}
        </div>
        <div className="w-full flex justify-center bg-[#F9FAFB]">
          <div className="w-full pr-20 pl-20 pt-10"   
            style={{ 
                backgroundImage: `url(${containerImage})`, 
                backgroundRepeat: "no-repeat", 
                backgroundSize: "contain", 
                backgroundPosition: "center 25% " 
              }}
            >
            <div className="bg-white shadow-lg rounded-lg p-4 pb-10 flex justify-center mx-auto flex-row justify-between w-full">
              <div className="w-1/2 pr-6 text-left">
                <h1 className="font-bold text-2xl">{selectedContent.title}</h1>
                <p className="mt-4 text-gray-600">{selectedContent.text}</p>
              </div>
              {selectedContent.img && (
                <div className="w-1/2 flex pl-2 justify-center">
                  <img 
                    src={selectedContent.img} 
                    alt={t('payrollSettings.imageAlt', "Illustration")} 
                    className="max-w-full h-auto rounded-lg" 
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>


      <div className="hidden md:block ipad-pro:block lg:hidden w-full">
        <div className="bg-[#F9FAFB] w-full mx-auto py-8 text-center">
          <h1 className="text-3xl mb-4 font-bold">
            {t('payrollSettings.mainTitle', "Contrôler votre DSN qu'en")} {t('payrollSettings.mainTitlePart2', "trois étapes :")}
          </h1>
          
          <div className="flex space-x-4 md:p-6 justify-center pt-6">
            {Object.keys(contentOptions).map((key) => (
              <button
                key={key}
                className={`w-full h-12 px-4 py-3 md:px-2 flex items-center justify-center gap-2 rounded-lg shadow-md ${
                  selectedContent.title === contentOptions[key].title
                    ? "bg-[#E0AC00] text-white"
                    : "border border-[#D1D5DB] bg-[#F9FAFB] text-black"
                }`}
                onClick={() => setSelectedContent(contentOptions[key])}
              >
                {buttonIcons[key]} <span className="text-sm">{getTranslatedButtonText(key)}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="w-full flex justify-center bg-[#F9FAFB]">
          <div 
            className="w-full"
            style={{ 
              backgroundImage: `url(${containerImage})`, 
              backgroundRepeat: "no-repeat", 
              backgroundSize: "contain",
              backgroundPositionY: "center"
            }}
          >
            <div className="bg-white shadow-lg rounded-lg p-7 flex flex-wrap justify-center items-center mx-auto max-w-[95%]">
              <div className="w-full md:w-1/2 mb-6 md:pr-6 md:space-y-6">
                <h1 className="font-bold text-2xl text-left">{selectedContent.title}</h1>
                <p className="mt-4 text-gray-600 text-left">{selectedContent.text}</p>
              </div>
              
              {selectedContent.img && (
                <div className="w-full md:w-1/2 md:pl-6 md:space-y-6">
                  <img 
                    src={selectedContent.img} 
                    alt={t('payrollSettings.imageAlt', "Illustration")} 
                    className="max-w-full h-auto rounded-lg" 
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden w-full p-4 text-center py-8">
        <h1 className="text-3xl mb-4 font-bold">
          {t('payrollSettings.mainTitle', "Contrôler votre DSN qu'en")} {t('payrollSettings.mainTitlePart2', "trois étapes :")}
        </h1>
        
        <div className="flex flex-col space-y-4 items-center pt-6">
          {Object.keys(contentOptions).map((key) => (
            <button
              key={key}
              className="w-full h-12 flex items-center justify-center text-center gap-3 rounded-lg shadow-md"
              style={{
                backgroundColor: selectedContent.title === contentOptions[key].title ? "#E0AC00" : "#F9FAFB",
                color: selectedContent.title === contentOptions[key].title ? "white" : "black",
                border: selectedContent.title === contentOptions[key].title ? "none" : "1px solid #D1D5DB"
              }}
              onClick={() => setSelectedContent(contentOptions[key])}
            >
              {buttonIcons[key]} <span>{getTranslatedButtonText(key)}</span>
            </button>
          ))}
        </div>

        <div className="w-full flex justify-center pt-6 bg-[#F9FAFB]">
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between w-full">
            <div>
              <h1 className="font-bold text-2xl w-full text-left mb-4">{selectedContent.title}</h1>
              <p className="text-gray-600 w-full text-justify">{selectedContent.text}</p>
            </div>
            
            {selectedContent.img && (
              <div className="w-full flex justify-center pt-6">
                <img 
                  src={selectedContent.img} 
                  alt={t('payrollSettings.imageAlt', "Illustration")} 
                  className="max-w-full h-auto rounded-lg" 
                />
              </div>
            )}
          </div>
        </div>
      </div>
     
    </main>
  );
};

export default PayrollSettings;