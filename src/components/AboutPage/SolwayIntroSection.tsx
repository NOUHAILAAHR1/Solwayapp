import React from "react";
import { useTranslation } from 'react-i18next';
import fondateur from "../../assets/img/Fondateur.png";
import spa from "../../assets/img/SPA.png";

const SolwayIntroSection = () => {
  const { t } = useTranslation();
  
  return (
    <main className="w-full flex flex-col pt-4 bg-[#F9FAFB] relative z-40 ">
      <div className=" w-full  text-center p-5  ">
        <h4 className="text-[#E0AC00] font-bold">{t('solwayIntro.presentation')}</h4>
        <h1 className="text-4xl mb-4 text-[#111827] font-bold">{t('solwayIntro.companyName')}</h1>
      </div>
      
      <div className="container mx-auto ipad-pro:p-8  px-4  flex justify-center ">
        <div className="bg-[#FFFFFF] shadow-lg rounded-xl overflow-hidden lg:max-w-7xl   ">
          <div className="w-full  p-3 pt-6 pb-6  lg:p-6  lg:pb-6 relative bg-[#FFFFFF]">
            <h1 className="text-3xl font-bold   text-[#111827] mb-6 pl-4 ">
              {t('solwayIntro.aboutTitle')}
            </h1>
            
            <div className="space-y-4 pl-4">
              <p className="text-xl text-[#374151]">
                {t('solwayIntro.aboutP1')}
              </p>
              
              <p className="text-xl text-[#374151]">
                {t('solwayIntro.aboutP2')}
              </p>
              
              <p className="text-xl text-[#374151]">
                {t('solwayIntro.aboutP3')}
              </p>
              
              <p className="text-xl text-[#374151]">
                {t('solwayIntro.aboutP4')}
              </p>
            </div>
            
            <div className="mt-6 ml-4 mr-4 flex items-center bg-[#F9FAFB]">
              <div className="w-2  lg:w-1 bg-[#E0AC00] mr-3 h-32 lg:h-24"></div>
              <div>
                <h2 className="text-xl italic mb-2 font-bold">
                  {t('solwayIntro.quote')}
                </h2>
                <p className="text-xl text-left">{t('solwayIntro.quoteAuthor')}</p>
              </div>
            </div>
            
            <div className="mt-12 flex flex-col ">
              <h1 className="text-3xl font-bold text-[#111827] mb-4 pl-4">
                {t('solwayIntro.founderTitle')}
              </h1>
              <div className="w-full mb-6 pt-8 px-4">
                <img 
                  src={fondateur} 
                  alt={t('solwayIntro.founderImageAlt')} 
                  className="w-full h-auto object-cover "
                />
              </div>
              <div className="w-full">
                <h1 className="text-3xl font-bold text-[#111827] mb-4 pl-4">
                  {t('solwayIntro.founderName')}
                </h1>
                <div className="space-y-4 pl-4">
                  <p className="text-xl text-[#374151]">
                    {t('solwayIntro.founderP1')}
                  </p>
                  <p className="text-xl text-[#374151]">
                    {t('solwayIntro.founderP2')}
                  </p>
                  <p className="text-xl text-[#374151]">
                    {t('solwayIntro.founderP3')}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col ">
              <h1 className="text-3xl font-bold text-[#111827] mb-4 pl-4">
                {t('solwayIntro.partnershipTitle')}
              </h1>
              <div className="w-full mb-6 px-4 flex justify-center">
                <img 
                  src={spa} 
                  alt={t('solwayIntro.partnershipImageAlt')} 
                  className="lg:w-1/2  sm:w-full pt-8 h-auto object-contain"
                />
              </div>
              <div className="space-y-4  pt-4 pl-4">
                <p className="text-xl text-[#374151]">
                  {t('solwayIntro.partnershipP1')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SolwayIntroSection;