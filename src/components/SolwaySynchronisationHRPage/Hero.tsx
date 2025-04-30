import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { FaCheckCircle } from "react-icons/fa";
import containerImage from "../../assets/img/background.png";
import containerImagesvg from "../../assets/Svg/Imgcontainer.svg"
import solwayetape1 from "../../assets/img/solwayetape1.png";
import solwayetape2 from "../../assets/img/solwayetap2.png";
import solwayetape3 from "../../assets/img/solwayetape3.png";
import solwayetape4 from "../../assets/img/solwayetape4.png";

const Hero = () => {
  const { t } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <main className="w-full flex flex-col bg-gray-50 z-40">
      
        <div className="hidden md:block h-auto pt-28 w-full">
          <div className="w-full text-center py-8 h-auto lg:h-72 md:h-auto ipad-pro:h-auto"
            style={{
              backgroundImage: `url(${containerImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center 78% ",
            }}
          >
            <h1 className="text-5xl mb-4 font-extrabold text-gray-900">
              {t('solway_sync.title')} <br/> {t('solway_sync.subtitle')}
            </h1>
            <p className="text-medium text-gray-900 max-w-xl mx-auto">
              {t('solway_sync.description')}
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
                    <h2 className="text-2xl font-bold mb-4">{t('solway_sync.welcome_screen.title')}</h2>
                    <p className="text-medium text-gray-900 mb-3">
                      {t('solway_sync.welcome_screen.description1')}
                    </p>
                    <p className="text-medium text-gray-900">
                      {t('solway_sync.welcome_screen.description2')}
                    </p>
                  </div>
                  <div className="w-full lg:w-1/2 md:w-1/2 flex justify-center">
                    <img src={solwayetape1} alt={t('solway_sync.steps.step1_alt')} className="max-w-full h-auto rounded-lg" />
                  </div>
                </div>
                
                <div className="flex flex-col mb-12">
                  <div className="flex flex-col lg:flex-row md:flex-row justify-between items-center">
                    <div className="w-full lg:w-1/2 md:w-1/2 flex flex-col space-y-4 justify-center">
                      <img src={solwayetape2} alt={t('solway_sync.steps.step2_alt')} className="max-w-full h-auto rounded-lg" />
                      <img src={solwayetape3} alt={t('solway_sync.steps.step3_alt')} className="max-w-full h-auto rounded-lg" />
                    </div>
                    <div className="w-full lg:w-1/2 md:w-1/2 pl-0 lg:pl-6 md:pl-4 mb-6 lg:mb-0 md:mb-0 text-center lg:text-left md:text-left">
                      <h2 className="text-2xl font-extrabold mb-4">{t('solway_sync.solutions.title')}</h2>
                      <h4 className="text-lg font-normal mb-3">{t('solway_sync.solutions.description')}</h4>
                      <ul className="list-disc pl-5 text-medium text-gray-900 font-normal">
                        <li>{t('solway_sync.solutions.selection_options.option1')}</li>
                        <li>{t('solway_sync.solutions.selection_options.option2')}</li>
                        <ul className="list-disc pl-5">
                          <li>{t('solway_sync.solutions.criteria.criteria1')}</li>
                          <li>{t('solway_sync.solutions.criteria.criteria2')}</li>
                          <li>{t('solway_sync.solutions.criteria.criteria3')}</li>
                          <li>{t('solway_sync.solutions.criteria.criteria4')}</li>
                          <li>{t('solway_sync.solutions.criteria.criteria5')}</li>
                        </ul>
                      </ul>
                      <h4 className="text-medium text-gray-900 font-normal">{t('solway_sync.solutions.additional_options')}</h4>
                      <p className="font-normal mt-4 mb-2">{t('solway_sync.modules.title')}</p>
                      <ul className="space-y-2">
                        {t('solway_sync.modules.list', { returnObjects: true }).map((module, index) => (
                          <li key={index} className="flex items-center">
                            <FaCheckCircle className="mr-2 text-black" /> <span className="font-semibold">{module}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col lg:flex-row md:flex-row justify-between items-center">
                  <div className="w-full lg:w-1/2 md:w-1/2 pr-0 lg:pr-4 md:pr-6 mb-4 lg:mb-0 md:mb-0 text-center lg:text-left md:text-left">
                    <h1 className="text-3xl font-extrabold mb-4">{t('solway_sync.results.title')}</h1>
                    <p className="text-medium text-gray-900">
                      {t('solway_sync.results.description')}
                    </p>
                  </div>
                  <div className="w-full lg:w-1/2 md:w-1/2 flex justify-center">
                    <img src={solwayetape4} alt={t('solway_sync.steps.step4_alt')} className="max-w-full h-auto rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="block md:hidden pt-20 w-full p-4">
          <div className="text-center py-8">
            <h1 className="text-3xl mb-4 font-extrabold text-gray-900">
              {t('solway_sync.title')} <br/>{t('solway_sync.subtitle')}
            </h1>
            <p className="text-medium text-gray-900">
              {t('solway_sync.description')}
            </p>
          </div>
          
          <div className="w-full flex justify-center pt-14 bg-gray-50">
            <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-10 w-full">

              <div>
                <h2 className="text-2xl font-bold mb-4 text-center">{t('solway_sync.welcome_screen.title')}</h2>
                <p className="text-medium text-gray-900 text-center mb-6">
                  {t('solway_sync.welcome_screen.description1')}
                </p>
                <p className="text-medium text-gray-900 text-center mb-8">
                  {t('solway_sync.welcome_screen.description2')}
                </p>
                <div className="flex justify-center pt-4">
                  <img src={solwayetape1} alt={t('solway_sync.steps.step1_alt')} className="max-w-full h-auto rounded-lg" />
                </div>
              </div>

              <div className="space-y-4 pt-10">
                <div>
                  <h2 className="text-2xl font-extrabold mb-6 text-center">{t('solway_sync.solutions.title')}</h2>
                  <h4 className="text-lg font-normal mb-3 text-left">{t('solway_sync.solutions.description')}</h4>
                  <ul className="list-disc pl-5 mb-4 pt-6 text-medium text-gray-900 font-normal">
                    <li>{t('solway_sync.solutions.selection_options.option1')}</li>
                    <li>{t('solway_sync.solutions.selection_options.option2')}</li>
                    <ul className="list-disc pl-5 mb-2">
                      <li>{t('solway_sync.solutions.criteria.criteria1')}</li>
                      <li>{t('solway_sync.solutions.criteria.criteria2')}</li>
                      <li>{t('solway_sync.solutions.criteria.criteria3')}</li>
                      <li>{t('solway_sync.solutions.criteria.criteria4')}</li>
                      <li>{t('solway_sync.solutions.criteria.criteria5')}</li>
                    </ul>
                  </ul>
                  <h4 className="text-medium text-gray-900 font-normal mb-3 text-left">{t('solway_sync.solutions.additional_options')}</h4>
                  <p className="mt-4 mb-2 pt-4 text-left">{t('solway_sync.modules.title')}</p>
                  <ul className="space-y-2 pt-4">
                    {t('solway_sync.modules.list', { returnObjects: true }).map((module, index) => (
                      <li key={index} className="flex items-center">
                        <FaCheckCircle className="mr-2 text-black" /> <span className="font-semibold">{module}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex justify-center mt-4">
                    <img src={solwayetape2} alt={t('solway_sync.steps.step2_alt')} className="max-w-full h-auto pt-10 rounded-lg" />
                  </div>
                  
                  <div className="flex justify-center mb-6 mt-4">
                    <img src={solwayetape3} alt={t('solway_sync.steps.step3_alt')} className="max-w-full h-auto pt-14 rounded-lg" />
                  </div>
                </div>
              </div>
              
              <div>
                <h1 className="text-3xl font-extrabold mb-10 pt-4 text-center">{t('solway_sync.results.title')}</h1>
                <p className="text-medium text-gray-900 text-center mb-12">
                  {t('solway_sync.results.description')}
                </p>
                <div className="flex justify-center">
                  <img src={solwayetape4} alt={t('solway_sync.steps.step4_alt')} className="max-w-full h-auto rounded-lg" />
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