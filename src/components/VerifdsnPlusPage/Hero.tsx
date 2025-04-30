import React from "react";
import { useTranslation } from 'react-i18next';
import youtubeImage from "../../assets/img/youtube.png";
import youtube2Image from "../../assets/img/youtube2.png";

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <div className="w-full bg-white">
        <div className="hidden md:flex flex-row flex-grow lg:px-14 ipad-pro:px-0 md:px-0 pt-16 justify-center">
          <div className="w-full max-w-6xl flex items-center">
            <div className="w-full grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-8 lg:gap-16 xl:gap-24 2xl:gap-32 md:p-8">
              <div className="md:w-full lg:w-full xl:w-full 2xl:w-full space-y-6 text-center md:text-center lg:text-center">
                <div>
                  <h1 className="text-3xl font-extrabold text-gray-900 pt-12 mb-4">
                    {t('Slwayhero.title')}
                  </h1>
                  <p className="text-medium text-gray-900 max-w-xl mx-auto" dangerouslySetInnerHTML={{ __html: t('Slwayhero.description') }}>
                  </p>
                </div>
              </div>
              <div className="md:w-full lg:w-full xl:w-full 2xl:w-full h-full flex items-center justify-center">
                <img src={youtubeImage} alt={t('Slwayhero.imageAlt')} className="max-w-full h-auto" />
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden w-full flex flex-col items-center text-center pt-24">
          <div className="p-4">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
              {t('Slwayhero.title')}
            </h1>
            <p className="text-medium text-gray-900 max-w-xl mx-auto" dangerouslySetInnerHTML={{ __html: t('Slwayhero.description') }}>
            </p>
          </div>
          <div className="w-full px-4 pt-12">
            <img src={youtube2Image} alt={t('Slwayhero.imageAlt')} className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;