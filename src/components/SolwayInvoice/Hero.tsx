import React from "react";
import { useTranslation } from 'react-i18next';
import invoicelogo from "../../assets/img/inovoicelogopng.png";
import soldesketap1 from "../../assets/img/invoiceetap1.png";
import soldesketap2 from "../../assets/img/invoiceetap2.png";
import soldesketap3 from "../../assets/img/invoiceetap3.png";
import containerImage1 from "../../assets/img/background.png";

const Hero = () => {
  const { t } = useTranslation();
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMdOrIpadPro = () => {
    return windowWidth >= 768 && windowWidth < 1366;
  };

  const isLgOrLarger = () => {
    return windowWidth >= 1024;
  };

  return (
    <>
      <div className="md:hidden w-full flex flex-col items-center text-center pb-14 bg-white">
        <div>
          <h1 className="text-[36px] pt-24 font-extrabold text-[#030712]">
            {t('solwayInvoice.title')}
          </h1>
          <p className="pl-4 pr-4 text-medium mb-10 text-[#030712] max-w-xl mx-auto">
            {t('solwayInvoice.heroDescription')}
          </p>
        </div>

        <div className="w-full px-16 pt-6">
          <img src={invoicelogo} alt={t('solwayInvoice.heroImageAlt')} className="max-w-full h-auto" />
        </div>
      </div>

      <main className="w-full flex flex-col bg-[#F9FAFB] mb-4 z-40">
        <div className="hidden md:block h-auto pt-20 w-full">
          <div className="w-full text-center p-20 py-8 ipad-pro:p-8 md:p-6 lg:p-20"
            style={{
              backgroundImage: `url(${
                isMdOrIpadPro() ? containerImage1 : 
                isLgOrLarger() ? containerImage1 : 'none'
              })`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full mx-auto">
              <div className="bg-white shadow-lg rounded-lg p-6 flex flex-row justify-between items-center">
                <div className="w-1/2 text-center">
                  <h1 className="text-5xl mb-4 font-extrabold text-[#030712]">{t('solwayInvoice.title')}</h1>
                  <p className="text-medium text-[#030712]">
                    {t('solwayInvoice.heroDescription')}
                  </p>
                </div>
                <div className="w-1/2 flex justify-end">
                  <img 
                    src={invoicelogo} 
                    alt={t('solwayInvoice.heroImageAlt')} 
                    className="w-1/2 h-auto object-contain" 
                  />
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-4xl pt-0 lg:pt-0 ipad-pro:pt-8 md:pt-9 font-extrabold text-center mb-3">
            {t('solwayInvoice.featuresTitle')}
          </h1>

          <div className="w-full flex justify-center"
            style={{
              backgroundImage: isMdOrIpadPro() ? 
              `url(${containerImage1}), url(${containerImage1})` : 
              isLgOrLarger() ? 
                `url(${containerImage1}), url(${containerImage1})` : 
                'none', 
              backgroundRepeat: 'no-repeat', 
              backgroundPosition: 'center 9%, center 65%', 
              backgroundSize: 'contain', 
            }}
          >
            <div className="w-full px-12 pt-12 lg:px-20 md:px-6 ipad-pro:px-8">
              <div className="bg-white shadow-lg rounded-lg p-7 mx-auto">
                
                <div className="flex flex-col lg:flex-row md:flex-row justify-between items-center mb-12">
                  <div className="w-full lg:w-1/2 pr-0 lg:pr-6 mb-12 lg:mb-0 md:w-1/2 md:pr-4 md:mb-0 text-center lg:text-left md:text-left">
                    <h2 className="text-3xl font-extrabold mb-4 pt-4">{t('solwayInvoice.feature1.title')}</h2>
                    <p className="text-medium text-[#030712] mb-3">
                      {t('solwayInvoice.feature1.description')}
                    </p>
                  </div>
                  <div className="w-full lg:w-1/2 md:w-1/2 pt-4 flex justify-center">
                    <img src={soldesketap1} alt={t('solwayInvoice.steps.step1_alt')} className="max-w-full h-auto rounded-lg" />
                  </div>
                </div>
                
                <div className="flex flex-col mb-12">
                  <div className="flex flex-col mb-12 lg:flex-row md:flex-row justify-between items-center">
                    <div className="w-full pt-10 lg:w-1/2 md:w-1/2 flex justify-center">
                      <img src={soldesketap2} alt={t('solwayInvoice.steps.step2_alt')} className="max-w-full h-auto rounded-lg" />
                    </div>
                    <div className="w-full lg:w-1/2 md:w-1/2 pl-0 lg:pl-6 md:pl-4 mb-6 lg:mb-0 md:mb-0 text-center lg:text-left md:text-left">
                      <h2 className="text-3xl pt-10 font-extrabold mb-4">{t('solwayInvoice.feature2.title')}</h2>
                      <p className="text-medium text-[#030712] mb-3">
                        {t('solwayInvoice.feature2.description')}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col lg:flex-row md:flex-row justify-between items-center">
                  <div className="w-full lg:w-1/2 md:w-1/2 pr-0 lg:pr-4 md:pr-6 mb-4 lg:mb-0 md:mb-0 text-center lg:text-left md:text-left">
                    <h1 className="text-3xl font-extrabold mb-4">{t('solwayInvoice.feature3.title')}</h1>
                    <p className="text-medium text-[#030712] mb-3">
                      {t('solwayInvoice.feature3.description')}
                    </p>
                  </div>
                  <div className="w-full lg:w-1/2 md:w-1/2 flex justify-center">
                    <img src={soldesketap3} alt={t('solwayInvoice.steps.step3_alt')} className="max-w-full h-auto rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:hidden w-full">
          <h1 className="p-4 text-3xl font-extrabold pt-8 text-center mb-2">{t('solwayInvoice.featuresTitle')}</h1>
          
          <div className="p-4 w-full flex justify-center pt-5 bg-[#F9FAFB]">
            <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-10 w-full">

              <div>
                <h2 className="text-2xl font-bold mb-4 text-center">{t('solwayInvoice.feature1.title')}</h2>
                <p className="text-medium text-[#030712] text-left mb-3">
                  {t('solwayInvoice.feature1.description')}
                </p>
                <div className="flex justify-center pt-4">
                  <img src={soldesketap1} alt={t('solwayInvoice.steps.step1_alt')} className="max-w-full h-auto rounded-lg" />
                </div>
              </div>

              <div className="space-y-4 pt-10">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-center">{t('solwayInvoice.feature2.title')}</h2>
                  <p className="text-medium text-[#030712] text-left mb-3">
                    {t('solwayInvoice.feature2.description')}
                  </p>
                  <div className="flex justify-center mt-4">
                    <img src={soldesketap2} alt={t('solwayInvoice.steps.step2_alt')} className="max-w-full h-auto pt-4 rounded-lg" />
                  </div>
                </div>
              </div>

              <div>
                <h1 className="text-2xl font-bold mb-4 text-center">{t('solwayInvoice.feature3.title')}</h1>
                <p className="text-medium text-[#030712] text-left mb-3">
                  {t('solwayInvoice.feature3.description')}
                </p>
                <div className="flex justify-center">
                  <img src={soldesketap3} alt={t('solwayInvoice.steps.step3_alt')} className="max-w-full h-auto rounded-lg" />
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