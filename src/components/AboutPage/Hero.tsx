import React from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import navImage from "../../assets/img/About.png";

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <div className="relative w-full md:max-h-screen lg:h-full ipad-pro:h-[50vh] bg-white rounded-b-lg md:rounded-none z-40">
      <div className="hidden md:flex items-start justify-between w-full h-screen">
        <div className="w-1/2 lg:w-1/2 md:w-3/4 ipad-pro:w-3/4 lg:pl-14 lg:pt-28 md:pl-8 md:pt-52 flex flex-col items-start justify-center pl-14 space-y-6">
          <p className="text-2xl font-extrabold pt-36 max-w-xl">
            {t('about.heroText')}
          </p>
        </div>

        <div className="w-1/2 lg:w-1/2 md:w-1/3 h-full md:max-h-screen lg:h-full ipad-pro:h-1/2 relative">
          <div className="absolute top-0 inset-0 bg-cover bg-center" style={{
            backgroundImage: `url(${navImage})`,
            clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)"
          }}></div>
        </div>
      </div>

      <div className="md:hidden w-full flex flex-col items-center text-center pt-20">
        <p className="text-2xl font-extrabold pt-10 max-w-xl">
          {t('about.heroText')}
        </p>
        <img
          src={navImage}
          alt={t('about.heroImageAlt')}
          className="w-full h-auto pt-6 object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;