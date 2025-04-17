import { useState } from "react";
import { IoLayers } from "react-icons/io5";
import { AiOutlineDatabase } from "react-icons/ai";
import { TbShieldChevron } from "react-icons/tb";
import containerImage from "../../assets/img/background.png";
import etap1 from "../../assets/img/etap1.png";
import etap2 from "../../assets/img/etap2.png";
import etap3 from "../../assets/img/etap3.png";


const PayrollSettings = () => {
  const contentOptions = {
    "Paramétrage des blocs DSN": {
      title: "ETAPE 1 : Paramétrage Blocs DNS",
      text: (
        <>
          Cette étape permet de :
          <ul className="list-disc pl-5 pt-2 text-[#374151] text-justify">
            <li>Sélectionner la source des données : Un fichier texte ou B2A</li>
            <li>Renseigner la période de la paie.</li>
            <li>
              Affiner la sélection en renseignant des matricules, tranches de décompte, sociétés …
            </li>
            <li>Choisir le mode d'exécution du programme</li>
            <li>Préciser la méthode de récupération des fichiers B2A ainsi que les résultats du contrôle (Par mail, fichiers Excel en local/serveur).
            </li>
          </ul>
        </>
      ),
      img: etap1,
    },
    "Sélection des données": {
      title: "ETAPE 2 : Sélection des données",
      text: (
        <>
          Cette étape permet de :
          <ul className="list-disc pl-5 pt-2 text-[#374151] text-justify">
            <li>Sélectionner la source des données : Un fichier texte ou B2A</li>
            <li>Renseigner la période de la paie.</li>
            <li>
              Affiner la sélection en renseignant des matricules, tranches de décompte, sociétés …
            </li>
            <li>Choisir le mode d'exécution du programme</li>
            <li>Préciser la méthode de récupération des fichiers B2A ainsi que les résultats du contrôle (Par mail, fichiers Excel en local/serveur).
            </li>
          </ul>
        </>
      ),
      img: etap2,
    },
    "Exécution du contrôle": {
      title: "ETAPE 3 : Exécution du contrôle",
      text: (
        <>
          Cette étape permet de :
          <ul className="list-disc pl-5 pt-2 text-[#374151] text-justify">
            <li>Sélectionner la source des données : Un fichier texte ou B2A</li>
            <li>Renseigner la période de la paie.</li>
            <li>
              Affiner la sélection en renseignant des matricules, tranches de décompte, sociétés …
            </li>
            <li>Choisir le mode d'exécution du programme</li>
            <li>Préciser la méthode de récupération des fichiers B2A ainsi que les résultats du contrôle (Par mail, fichiers Excel en local/serveur).
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

  return (
    <main className="w-full flex flex-col bg-[#F9FAFB] pt-10  relative z-40">
   
      <div className="hidden lg:block  xl:block xxl:block ipad-pro:hidden w-full text-center py-8 ">
        <h1 className="text-3xl mb-4 font-bold">Contrôler votre DSN qu'en <br/> trois étapes :</h1>
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
              {buttonIcons[key]} <span>{key}</span>
            </button>
          ))}
        </div>
        <div className="w-full flex justify-center bg-[#F9FAFB]">
          <div className="w-full pr-20 pl-20 pt-10 "   
            style={{ 
                backgroundImage: `url(${containerImage})`, 
                backgroundRepeat: "no-repeat", 
                backgroundSize: "contain", 
                backgroundPosition: "center 25% " 
              }}
            >
            <div className="bg-white shadow-lg rounded-lg p-4 pb-10 flex justify-center mx-auto   flex-row justify-between w-full">
              <div className="w-1/2 pr-6 text-left">
                <h1 className="font-bold text-2xl">{selectedContent.title}</h1>
                <p className="mt-4 text-gray-600">{selectedContent.text}</p>
              </div>
              {selectedContent.img && (
                <div className="w-1/2 flex pl-2 justify-center">
                  <img src={selectedContent.img} alt="Illustration" className="max-w-full h-auto rounded-lg" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

     
      <div className="hidden md:block ipad-pro:block lg:hidden  w-full">
        <div className="bg-[#F9FAFB] w-full mx-auto py-8 text-center">
          <h1 className="text-3xl mb-4 font-bold">Contrôler votre DSN qu'en trois étapes :</h1>
          
          <div className="flex space-x-4  md:p-6 justify-center pt-6">
            {Object.keys(contentOptions).map((key) => (
              <button
                key={key}
                className={`w-full  h-12 px-4 py-3 md:px-2 flex items-center justify-center gap-2 rounded-lg shadow-md ${
                  selectedContent.title === contentOptions[key].title
                    ? "bg-[#E0AC00] text-white"
                    : "border border-[#D1D5DB] bg-[#F9FAFB] text-black"
                }`}
                onClick={() => setSelectedContent(contentOptions[key])}
              >
                {buttonIcons[key]} <span className="text-sm">{key}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="w-full flex justify-center  bg-[#F9FAFB]">
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
                  <img src={selectedContent.img} alt="Illustration" className="max-w-full h-auto rounded-lg" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden w-full p-4 text-center py-8">
      <h1 className="text-3xl mb-4  font-bold">Contrôler votre DSN qu'en  trois étapes :</h1>
        
        
        <div className="flex flex-col space-y-4 items-center pt-6">
          {Object.keys(contentOptions).map((key) => (
            <button
              key={key}
              className={`w-full h-12  flex items-center justify-center text-center gap-3 rounded-lg shadow-md ${
                selectedContent.title === contentOptions[key].title 
                ? "bg-[#E0AC00] text-white" 
                : "border border-[#D1D5DB] bg-[#F9FAFB] text-black"
              }`}
              onClick={() => setSelectedContent(contentOptions[key])}
            >
              {buttonIcons[key]} <span>{key}</span>
            </button>
          ))}
        </div>

        <div className="w-full flex justify-center pt-6  bg-[#F9FAFB]">
         
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-wrap justify-center mx-auto max-w-xl">
              <h1 className="font-bold text-2xl w-full text-left mb-4">{selectedContent.title}</h1>
              <p className="text-gray-600 w-full text-justify">{selectedContent.text}</p>
              
              {selectedContent.img && (
                <div className="w-full flex justify-center pt-6">
                  <img src={selectedContent.img} alt="Illustration" className="max-w-full h-auto rounded-lg" />
                </div>
              )}
            </div>
          </div>
        </div>
     
    </main>
  );
};

export default PayrollSettings;