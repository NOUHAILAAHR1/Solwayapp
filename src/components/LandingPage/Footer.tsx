import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import linkedinImg from "../../assets/img/linkdin.png";
import threadsImg from "../../assets/img/threads.png";
import facebookImg from "../../assets/img/facebook.png";

const Footer = ({ bgColor = "#F9FAFB", theme = "yellow" }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {

    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  const buttonText = i18n.language === 'fr' ? 'English' : 'Français';

  const linkClass = theme === "green" 
    ? "text-[#22C55E] underline hover:text-green-300" 
    : "text-[#E0AC00] underline hover:text-yellow-300";
  
  const buttonClass = theme === "green" 
    ? "border border-[#22C55E] text-[#22C55E] px-4 py-2 rounded" 
    : "border border-[#E0AC00] text-[#E0AC00] px-4 py-2 rounded";

  return (
    <footer className={`w-full flex justify-center items-center p-2 ${bgColor}`}>
      <div className="space-x-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="text-center max-w-[55rem] lg:max-w-[55rem] ipad-pro:max-w-[45rem] md:max-w-[30rem] mx-auto">
            <p className="text-lg">
              {t('copyright')} {' '}
              <a href="#" className={linkClass}>
                {t('terms')}
              </a>{' '}
              |{' '}
              <a href="#" className={linkClass}>
                {t('privacy')}
              </a>{' '}
              |{' '}
              <a href="#" className={linkClass}>
                {t('cookies')}
              </a>{' '}
              |{' '}
              <a href="#" className={linkClass}>
                {t('contact')}
              </a>
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="hover:opacity-80">
              <img src={linkedinImg} alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a href="#" className="hover:opacity-80">
              <img src={threadsImg} alt="Threads" className="w-8 h-8" />
            </a>
            <a href="#" className="hover:opacity-80">
              <img src={facebookImg} alt="Facebook" className="w-8 h-8" />
            </a>
          </div>
          
          <div>
            <button 
              onClick={changeLanguage} 
              className={buttonClass}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;