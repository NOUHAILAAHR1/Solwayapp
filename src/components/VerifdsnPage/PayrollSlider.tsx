import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from '../Slider/Slider';
import containerImage from "../../assets/img/background.png";
import etap1 from "../../assets/img/etap1.png";
import etap2 from "../../assets/img/etap2-2.png";
import etap3 from "../../assets/img/etap2-1.png";
import etap4 from "../../assets/img/etap2-3.png";
import etap5 from "../../assets/img/etap3.png";
import etap6 from "../../assets/img/etap3-1.png";

const PayrollSettingsSlider = () => {
  const { t } = useTranslation();

  const slides = [
    {
      id: 1,
      image: etap1,
      alt: "STEP 1: DSN Block Configuration"
    },
    {
      id: 2,
      image: etap2,
      alt:  "STEP 2: Data Selection"
    },
    {
      id: 3,
      image: etap3,
      alt:  "STEP 3: Control Execution"
    },
    {
      id: 4,
      image: etap4,
      alt:  "STEP 4: Control Execution"
    },
    {
      id: 5,
      image: etap5,
      alt:  "STEP 5: Control Execution"
    },
    {
      id: 6,
      image: etap6,
      alt:  "STEP 6: Control Execution"
    }
  ];
  
  const renderCustomControls = ({ currentSlide, nextSlide, prevSlide, goToSlide, isFirstSlide, isLastSlide }) => (
    <div className="flex flex-col items-center">
      <div className="flex justify-center space-x-7 mb-4">
        <button 
          className={`${isFirstSlide ? 'bg-gray-300 hover:bg-gray-300 border-[#D1D5DB]' : 'bg-[#E0AC00] hover:bg-[#c99b00] border-[#E0AC00]'} border text-white rounded-lg p-2 focus:outline-none w-10 h-10 flex items-center justify-center`}
          onClick={prevSlide}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          className={`${isLastSlide ? 'bg-gray-300 hover:bg-gray-300 border-[#D1D5DB]' : 'bg-[#E0AC00] hover:bg-[#c99b00] border-[#E0AC00]'} border text-white rounded-lg p-2 focus:outline-none w-10 h-10 flex items-center justify-center`}
          onClick={nextSlide}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      <div className="flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button 
            key={index}
            className={`h-3 w-3 rounded-full cursor-pointer ${currentSlide === index ? 'bg-[#E0AC00]' : 'bg-[#D1D5DB]'}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
      
      <button className="hidden lg:block md:block ipad-pro:block sm:hidden bg-[#E0AC00] text-white font-bold mt-6 py-3 px-6 transition duration-300 hover:bg-[#c99b00] w-[134px] h-[48px]">
        {t('brochure', "Brochure")}
      </button>
      <button className="bg-[#E0AC00] text-white font-bold mt-6 py-3 px-6 transition duration-300 hover:bg-[#c99b00] md:hidden lg:hidden ipad-pro:hidden sm:block w-[90%]">
        {t('brochure', "Brochure")}
      </button>
    </div>
  );

  return (
    <section className="relative py-12 bg-[#F9FAFB] sm:bg-[#F9FAFB] md:bg-[#F9FAFB] bg-white w-full">
      <div className="">
        <h1 className="text-3xl font-bold text-center">{t('payroll.checkAllSteps')}</h1>
        
        <Slider
          slides={slides}
          autoplayInterval={5000}
          containerClassName="mx-auto"
          backgroundImage={containerImage}
          renderControls={renderCustomControls}
        />
      </div>
    </section>
  );
};

export default PayrollSettingsSlider;