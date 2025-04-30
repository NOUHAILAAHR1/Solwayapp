import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from '../Slider/Slider';
import solwayhretap1 from "../../assets/img/slowayslidhr1.png";
import solwayhretap2 from "../../assets/img/slowayslidhr2.png";
import solwayhretap3 from "../../assets/img/slowayslidhr3.png";
import solwayhretap4 from "../../assets/img/slowayslidhr4.png";
import solwayhretap5 from "../../assets/img/slowayslidhr5.png";
import solwayhretap6 from "../../assets/img/slowayslidhr6.png";

const PayrollSliders = () => {
  const { t } = useTranslation();
 
  const mesSlides = [
    {
      id: 1,
      image: solwayhretap1,
      alt: "solwayhretap1"
    },
    {
      id: 2,
      image: solwayhretap2,
      alt: "solwayhretap2"
    },
    {
      id: 3,
      image: solwayhretap3,
      alt: "solwayhretap3"
    },
    {
      id: 4,
      image: solwayhretap4,
      alt: "solwayhretap4"
    },
    {
      id: 5,
      image: solwayhretap5,
      alt: "solwayhretap5"
    },
    {
      id: 6,
      image: solwayhretap6,
      alt: "solwayhretap6"
    },
  ];
  
  return (
    <div className="container mx-auto py-10">
       <h1 className="text-3xl font-bold text-center">{t('payroll.checkAllSteps')}</h1>
      
     
      <Slider 
        slides={mesSlides}
        autoplayInterval={3000} 
        containerClassName=" mx-auto"
         />
    </div>
  );
};

export default PayrollSliders;