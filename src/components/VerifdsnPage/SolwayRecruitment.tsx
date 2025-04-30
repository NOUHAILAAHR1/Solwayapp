import React from "react";
import { useTranslation } from 'react-i18next';
import containerImage from "../../assets/img/youtub1.png";

const SolwayRecruitment = () => {
  const { t } = useTranslation();

  return (
    <main className="w-full flex flex-col bg-[#F9FAFB] relative z-40">

      <div className="hidden xl:flex w-full bg-[#E0AC00] items-center justify-between px-8 py-16">
        <div className="w-1/2 space-y-6 px-6">
          <h1 className="text-4xl 2xl:text-5xl font-extrabold text-white">
            {t('solwayRecruit.title', "Happy to work together on your next project")}
          </h1>
          <p className="text-white text-lg">
            {t('solwayRecruit.description', "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor mattis sit phasellus mollis sit aliquam sit nullam neques.")}
          </p>
          <button className="bg-white text-black font-semibold px-8 py-3 rounded border border-gray-300 hover:bg-gray-200 transition duration-300">
            {t('solwayRecruit.buttonText', "See More")}
          </button>
        </div>
        <div className="w-1/2 flex justify-center">
          <img
            src={containerImage}
            alt="container"
            className="w-full max-w-2xl 2xl:max-w-3xl"
          />
        </div>
      </div>

      <div className="hidden lg:flex xl:hidden w-full bg-[#E0AC00] px-4 lg:p-16 ipad-pro:p-6 mx-auto items-center">
        <div className="lg:w-1/2 ipad-pro:w-[50rem] py-4 ipad-pro:px-2 lg:px-10">
          <h1 className="font-extrabold text-4xl text-white mb-3">
            {t('solwayRecruit.title', "Happy to work together on your next project")}
          </h1>
          <p className="mt-4 text-white text-lg mb-4">
            {t('solwayRecruit.description', "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor mattis sit phasellus mollis sit aliquam sit nullam neques.")}
          </p>
          <button className="bg-[#F9FAFB] border border-[#D1D5DB] text-black px-8 py-3 hover:bg-gray-300 transition duration-300">
            {t('solwayRecruit.buttonText', "See More")}
          </button>
        </div>
        <div className="lg:w-1/2 lg:p-4 ipad-pro:w-[50rem] ipad-pro:h-[21rem] lg:mx-auto flex justify-center items-center">
          <img src={containerImage} alt="containerImage" className="w-full" />
        </div>
      </div>

      <div className="hidden lg:hidden md:flex w-full bg-[#E0AC00] p-6 mx-auto items-center">
        <div className="w-4/6 pt-6 px-4">
          <h1 className="font-extrabold text-3xl text-white mb-3">
            {t('solwayRecruit.title', "Happy to work together on your next project")}
          </h1>
          <p className="mt-3 text-white text-base mb-3">
            {t('solwayRecruit.description', "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor mattis sit phasellus mollis sit aliquam sit nullam neques.")}
          </p>
          <button className="bg-[#F9FAFB] border border-[#D1D5DB] mb-3 text-black px-6 py-3 hover:bg-gray-300 transition duration-300">
            {t('solwayRecruit.buttonText', "See More")}
          </button>
        </div>
        <div className="w-3/6 pt-4 h-[14rem] flex justify-center items-center">
          <img src={containerImage} alt="containerImage" className="w-full h-[15rem]" />
        </div>
      </div>

      <div className="flex md:hidden w-full mb-4 bg-[#E0AC00] shadow-xl p-2 flex-col items-center text-center">
        <div className="w-full px-2 py-7">
          <h1 className="font-extrabold text-3xl text-white mb-3">
            {t('solwayRecruit.title', "Happy to work together on your next project")}
          </h1>
          <p className="mt-2 text-white text-sm mb-6">
            {t('solwayRecruit.description', "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor mattis sit phasellus mollis sit aliquam sit nullam neques.")}
          </p>
          <button className="bg-[#F9FAFB] border border-[#D1D5DB] text-black w-full py-3 hover:bg-gray-300 transition duration-300">
            {t('solwayRecruit.buttonText', "See More")}
          </button>
        </div>
        <div className="w-full mb-6">
          <img
            src={containerImage}
            alt="containerImage"
            className="w-full p-2 mx-auto"
          />
        </div>
      </div>
    </main>
  );
};

export default SolwayRecruitment;