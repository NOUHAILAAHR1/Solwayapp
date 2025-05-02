import React from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 
import navImage from "../../assets/img/nav.jpeg";

const Hero = () => {
  const { t } = useTranslation(); 

  return (
    <div className="relative w-full md:max-h-screen lg:h-full ipad-pro:h-[50vh] bg-white rounded-b-lg md:rounded-none">
      <div className="hidden md:flex items-start justify-between w-full h-screen">
        <div className="w-1/2 lg:w-1/2 md:w-3/4 ipad-pro:w-3/4 lg:pl-14 lg:pt-36 md:pl-8 md:pt-52 flex flex-col items-start justify-center pl-14 space-y-6">
          <h1 className="text-3xl font-bold">
            {t('hero.welcome')} <span className="md:text-[#E0AC00] ipad-pro:text-[#E0AC00] lg:text-black">{t('hero.company')} </span>
            <span className="lg:text-[#E0AC00] ipad-pro:text-black">{t('hero.slogan')}</span>
          </h1>
          <p className="max-w-lg text-lg">
            {t('hero.description')}
          </p>
          <div className="flex space-x-4">
            <Link to="/about">
              <button className="px-6 py-3 bg-[#E0AC00] text-white rounded-lg font-semibold shadow-md">{t('hero.aboutButton')}</button>
            </Link>
            <Link to="/offres-demplois">
              <button className="px-6 py-3 border border-[#D1D5DB] bg-[#F9FAFB] text-black font-semibold rounded-lg">{t('hero.jobsButton')}</button>
            </Link>
          </div>
        </div>

        <div className="w-1/2 lg:w-1/2 md:w-1/3 h-full md:max-h-screen lg:h-full ipad-pro:h-1/2 relative">
          <div
            className="absolute top-0 right-0 bottom-0 left-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${navImage})`,
              clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          ></div>
        </div>
      </div>

      <div className="md:hidden w-full flex flex-col items-center text-center pt-20">
        <h1 className="text-3xl p-6 font-bold">
          {t('hero.welcome')}{" "}
          <span className="text-[#E0AC00]"> {t('hero.company')} </span>
          {t('hero.slogan')}
        </h1>
        <p className="max-w-lg text-lg px-4">
          {t('hero.description')}
        </p>
        <div className="flex flex-col p-4 w-full space-y-4">
          <Link to="/about">
            <button className="w-full px-6 py-3 bg-[#E0AC00] text-white rounded-lg font-semibold shadow-md">
              {t('hero.aboutButton')}
            </button>
          </Link>
          <Link to="/OffresdemploisPage">
            <button className="w-full px-6 py-3 border border-[#D1D5DB] bg-[#F9FAFB] text-black font-semibold rounded-lg">
              {t('hero.jobsButton')}
            </button>
          </Link>
        </div>

        <img
          src={navImage}
          alt={t('hero.imageAlt')}
          className="w-full h-auto pt-4 object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;