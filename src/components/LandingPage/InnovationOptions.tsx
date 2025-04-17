import { useState } from "react";
import { Link } from "react-router-dom";
import containerImage from "../../assets/img/background.png";
import youtubeImage from "../../assets/img/youtube.png";

import { ArrowRight } from "lucide-react";

const InnovationOptions = () => {

  const contentOptions = {
    "VERIF'DSN": {
      title: "VERIF'DSN",
      text: (
        <>
          VERIF'DSN est un outil <span className="underline">SAP</span> qui permet de contrôler vos blocs <span className="underline">DNS</span> avant de les envoyer aux organismes de protection sociale et administrations. C'est un outil facile, intuitif et très apprécié par les gestionnaires de paie. 
          N'hésitez pas à nous contacter pour avoir plus d'informations ou pour demander un essai gratuit.
        </>
      ),
      img: youtubeImage,
      link: "/verifdsn"
    },
    "VERIF'DSN PLUS": {
      title: "VERIF'DSN PLUS",
      text: "VERIF'DSN PLUS est un outil complémentaire de VERIF'DSN qui permet de contrôler votre DSN sur plusieurs périodes de paie. Cela vous permettra de réaliser facilement et rapidement des contrôles trimestrielle, semestrielle ou annuelle de vos cotisations. Pour plus d'informations, veuillez nous contacter, nous serons ravis à répondre à vos interrogations.",
      img: youtubeImage,
      link: "/verifdsnplus"
    },
    "SOLWAY Synchronisation HR": {
      title: "SOLWAY Synchronisation HR",
      text: (
        <>
          SOLWAY SYNCHRONISATION HR est un outil SAP qui permet de copier rapidement et facilement les données des salariés d'un système à un&nbsp;
          autre <br/> N'hésitez pas à nous contacter pour avoir plus d'informations ou pour demander un essai gratuit.
        </>
      ),
      link: "/SolwaySynchronisationHRPage"
    },
  };


  const [selectedContent, setSelectedContent] = useState(contentOptions["VERIF'DSN"]);

  return (
    <main className="w-full flex flex-col bg-[#F9FAFB] relative z-40">
     
      <div className="hidden lg:block w-full ipad-pro:hidden text-center py-8">
        <h1 className="text-3xl mb-4 font-bold">Nos innovations</h1>
        <p className="text-gray-500 mx-auto mb-6 max-w-md">
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.
        </p>
        
      
        <div className="flex space-x-6 justify-center pt-6">
          {Object.keys(contentOptions).map((key) => (
            <button
              key={key}
              className={`w-96 h-12 px-6 py-3 rounded-lg shadow-md ${
                selectedContent.title === key ? "bg-[#E0AC00] text-white" : "border border-[#D1D5DB] bg-[#F9FAFB] text-black"
              }`}
              onClick={() => setSelectedContent(contentOptions[key])}
            >
              {key}
            </button>
          ))}
        </div>
        
       
        <div className="w-full flex justify-center bg-[#F9FAFB]">
          <div
            className="w-full pt-10"
            style={{
              backgroundImage: `url(${containerImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPositionY: selectedContent.img ? "bottom" : "top",
            }}
          >
         
            <div
              className={`bg-white shadow-lg rounded-lg p-4 flex justify-center mx-auto max-w-[75rem] ${
                selectedContent.img ? "flex-row justify-between w-full" : "flex justify-center max-w-md"
              }`}
            >
           
              <div className={`${selectedContent.img ? "w-[500px] pr-6" : "w-full max-w-lg"} text-left`}>
                <h1 className="font-bold text-2xl">{selectedContent.title}</h1>
                <p className="mt-4 text-gray-600">{selectedContent.text}</p>
                <Link to={selectedContent.link} className="text-[#E0AC00] font-bold pt-2 cursor-pointer flex items-center">
                  Discover <ArrowRight className="ml-2 mt-1" size={18} />
                </Link>
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


      <div className="hidden md:block ipad-pro:block lg:hidden w-full">
        <div className="bg-[#F9FAFB] w-full mx-auto py-8 text-center">
          <h1 className="text-3xl mb-4 font-bold">Nos innovations</h1>
          <p className="text-gray-500 mx-auto max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.
          </p>
       
          <div className="flex space-x-4 md:p-6 justify-center pt-6">
            {Object.keys(contentOptions).map((key) => (
              <button
                key={key}
                className={`w-64 h-12 px-6 py-3 md:px-2 rounded-lg shadow-md ${
                  selectedContent.title === key
                    ? "bg-[#E0AC00] text-white"
                    : "border border-[#D1D5DB] bg-[#F9FAFB] text-black"
                }`}
                onClick={() => setSelectedContent(contentOptions[key])}
              >
                {key}
              </button>
            ))}
          </div>
        </div>

       
        <div className="w-full flex justify-center p-6 bg-[#F9FAFB]">
          <div className={`bg-white shadow-lg rounded-lg p-7 flex flex-wrap justify-center mx-auto max-w-4xl ${
            selectedContent.img ? "flex-row justify-between w-full" : "flex justify-center max-w-3xl"
          }`}>
         
            <div className="w-full md:w-1/2 mb-6 md:pr-6 md:space-y-6">
              <h1 className="font-bold text-2xl text-left">{selectedContent.title}</h1>
              <p className="mt-4 text-gray-600 text-left">{selectedContent.text}</p>
              <Link to={selectedContent.link} className="text-[#E0AC00] font-bold pt-2 cursor-pointer flex items-center">
                Discover <ArrowRight className="ml-2 mt-1" size={18} />
              </Link>
            </div>
            
         
            {selectedContent.img && (
              <div className="w-full md:w-1/2 md:pl-6 md:space-y-6">
                <img src={selectedContent.img} alt="Illustration" className="max-w-full h-auto rounded-lg" />
              </div>
            )}
          </div>
        </div>
      </div>

  
      <div className="block md:hidden w-full p-2 text-center py-8">
        <h1 className="text-3xl mb-4 font-bold">Nos innovations</h1>
        <p className="text-gray-500 mx-auto max-w-xl">
          Lorem ipsum dolor sit amet consectetur adipiscing elit, mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.
        </p>
        
    
        <div className="flex flex-col space-y-4 items-center pt-6">
          {Object.keys(contentOptions).map((key) => (
            <button
              key={key}
              className={`w-full h-12 px-6 py-3 rounded-lg shadow-md ${
                selectedContent.title === key ? "bg-[#E0AC00] text-white" : "border border-[#D1D5DB] bg-[#F9FAFB] text-black"
              }`}
              onClick={() => setSelectedContent(contentOptions[key])}
            >
              {key}
            </button>
          ))}
        </div>

        <div className="w-full flex justify-center p-6 bg-[#F9FAFB]">
          <div className="bg-white shadow-lg rounded-lg p-7 flex flex-wrap justify-center mx-auto max-w-xl">
            <h1 className="font-bold text-2xl w-full text-center">{selectedContent.title}</h1>
            <p className="mt-4 text-gray-600 w-full text-center">{selectedContent.text}</p>
            <div className="w-full flex justify-start mt-4">
              <Link to={selectedContent.link} className="text-black font-bold cursor-pointer flex items-center">
                Discover <ArrowRight className="ml-2 mt-1" size={18} />
              </Link>
            </div>
          
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

export default InnovationOptions;