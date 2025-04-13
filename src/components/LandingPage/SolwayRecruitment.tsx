import React from "react";
import containerImage from "../../assets/img/background.png";

const SolwayRecruitment = () => {
  return (
    <main className="w-full flex flex-col bg-[#F9FAFB] relative z-40">
     
      <div className="hidden ipad-pro:hidden lg:block w-full text-center py-12">
        <div
          className="w-full flex justify-center"
          style={{
            backgroundImage: `url(${containerImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "top",
            
          }}
        >
          <div className="bg-[#E0AC00] shadow-xl rounded-lg p-16 mx-auto w-[75rem] text-center">
            <h1 className="font-bold text-4xl text-white mb-6">
              SOLWAY Recrute<br/> vous êtes Consultant SAP HR ?
            </h1>
            <p className="mt-4 text-white text-lg mb-8 max-w-xl mx-auto">
              Rejoignez-nous pour découvrir nos opportunités uniques et évoluez avec nous, 
              du stage au CDI débutant, jusqu'au CDI expérimenté. Votre avenir commence ici !
            </p>
            <button className="bg-white text-[#E0AC00]  px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300 flex items-center mx-auto">
              Rejoignez-nous 
            </button>
          </div>
        </div>
      </div>

     
      <div className="hidden md:block lg:hidden ipad-pro:block w-full p-10 text-center py-10">
        
          <div className="bg-[#E0AC00] shadow-xl rounded-lg mx-auto w-full p-12 text-center">
            <h1 className="font-bold text-2xl text-white mb-4">
              SOLWAY Recrute <br/> vous êtes Consultant SAP HR ?
            </h1>
            <p className="mt-3 text-white text-base mb-6 max-w-2l mx-auto">
              Rejoignez-nous pour découvrir nos opportunités uniques et évoluez avec nous, 
              du stage au CDI débutant, jusqu'au CDI expérimenté. Votre avenir commence ici !
            </p>
            <button className="bg-white text-[#E0AC00]  px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300 flex items-center mx-auto">
              Rejoignez-nous
            </button>
          </div>
      </div>

    
      <div className="block md:hidden w-full  text-center py-8">
       
          <div className="bg-[#E0AC00]  shadow-xl rounded-lg p-5  pt-10 pb-8 mx-4 text-center">
            <h1 className="font-bold text-xl text-white mb-4">
              SOLWAY Recrute<br/> vous êtes Consultant SAP HR ?
            </h1>
            <p className="mt-2 text-white text-sm mb-6">
              Rejoignez-nous pour découvrir nos opportunités uniques et évoluez avec nous, 
              du stage au CDI débutant, jusqu'au CDI expérimenté. Votre avenir commence ici !
            </p>
            <button className="bg-white mb-6 text-[#E0AC00] w-full py-3 rounded-lg hover:bg-gray-100 transition duration-300 flex items-center justify-center">
              Rejoignez-nous 
            </button>
          </div>
        </div>
    
    </main>
  );
};

export default SolwayRecruitment;