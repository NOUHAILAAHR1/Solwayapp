
import React from 'react';
import Slider from '../Slider/Slider'; 
import containerImage from "../../assets/img/background.png";
import etap1 from "../../assets/img/etap1.png";
import etap2 from "../../assets/img/etap2-2.png";
import etap3 from "../../assets/img/etap2-1.png";
import etap4 from "../../assets/img/etap2-3.png";
import etap5 from "../../assets/img/etap3.png";
import etap6 from "../../assets/img/etap3-1.png";

const PayrollSettingsSlider = () => {
  const slides = [
    {
      id: 1,
      image: etap1,
      alt: "ETAPE 1 : Paramétrage Blocs DNS"
    },
    {
      id: 2,
      image: etap2,
      alt: "ETAPE 2 : Sélection des données"
    },
    {
      id: 3,
      image: etap3,
      alt: "ETAPE 3 : Exécution du contrôle"
    },
    {
      id: 4,
      image: etap4,
      alt: "ETAPE 3 : Exécution du contrôle"
    },
    {
      id: 5,
      image: etap5,
      alt: "ETAPE 3 : Exécution du contrôle"
    },
    {
      id: 6,
      image: etap6,
      alt: "ETAPE 3 : Exécution du contrôle"
    }
  ];


  const renderCustomControls = ({ currentSlide, nextSlide, prevSlide, goToSlide }) => (
    <div className="flex flex-col items-center">
      <div className="flex justify-center space-x-7 mb-4">
        <button 
          className="bg-gray-300 hover:bg-gray-300 border text-white border-[#D1D5DB] rounded-lg p-2 focus:outline-none w-10 h-10 flex items-center justify-center"
          onClick={prevSlide}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          className="bg-[#E0AC00] hover:bg-[#c99b00] text-white rounded-lg p-2 focus:outline-none w-10 h-10 flex items-center justify-center"
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
        Brochure
      </button>
      <button className="bg-[#E0AC00] text-white font-bold mt-6 py-3 px-6 transition duration-300 hover:bg-[#c99b00] md:hidden lg:hidden ipad-pro:hidden sm:block w-[90%]">
        Brochure
      </button>
    </div>
  );

  return (
    <section className="relative py-12 bg-[#F9FAFB] w-full">
      <div className="">
        <h1 className="text-3xl font-bold text-center">Check all steps</h1>
        
        <Slider 
          slides={slides}
          autoplayInterval={5000}
          backgroundImage={containerImage}
          renderControls={renderCustomControls}
        />
      </div>
    </section>
  );
};

export default PayrollSettingsSlider;