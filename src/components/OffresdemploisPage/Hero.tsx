import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import { FiCalendar } from "react-icons/fi";
import { LuTimer } from "react-icons/lu";
import { PiBriefcaseBold } from "react-icons/pi";
import { MdOutlineLocationOn } from "react-icons/md";
import { PiWalletBold } from "react-icons/pi";

const Hero = () => {
  const { t } = useTranslation();
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  const moreMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const moreButtonRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth >= 768) {
      setIsMenuOpen(false);
    }
  }, [windowWidth]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMoreOpen && 
        moreMenuRef.current && 
        !moreMenuRef.current.contains(event.target) &&
        moreButtonRef.current && 
        !moreButtonRef.current.contains(event.target)
      ) {
        setIsMoreOpen(false);
      }
      
      if (
        isMenuOpen && 
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target) &&
        menuButtonRef.current && 
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMoreOpen, isMenuOpen]);

  return (
    <>
      <div className="w-full pt-32 bg-white xl:bg-[#F9FAFB] flex flex-col items-center py-12 px-4 md:px-8 lg:px-16 "> 
      <h1 className="text-4xl font-extrabold text-center mb-12">{t('jobs.title')}</h1>
        
        <div className="w-full max-w-6xl shadow-lg rounded-lg p-6 md:p-8 bg-white">
          <div className="flex flex-col items-center text-left p-6 md:p-0 md:flex-row md:justify-between md:items-center md:text-left mb-12 space-y-4 md:space-y-0">
            <h1 className="text-2xl font-bold">{t('jobs.jobTitle')}</h1>
            <button className="bg-[#E0AC00] text-white font-medium rounded-lg w-full md:w-28 h-14">
              {t('jobs.apply')}
            </button>
          </div>

          <div className="sm:hidden space-y-8">
            <div className="w-full">
              <div className="border-2 border-[#E7F0FA] rounded-lg bg-white">
                <div className="p-6 ">
                  <h1 className="text-xl font-bold mb-6">{t('jobs.overview')}</h1>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        < FiCalendar size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">{t('jobs.published')}:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">13/06/2022</h3>
                    </div>
                    
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <LuTimer size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">{t('jobs.expires')}:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">13/10/2022</h3>
                    </div>
                    
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <PiBriefcaseBold size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">{t('jobs.type')}:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">{t('jobs.internship')}</h3>
                    </div>
                    
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <PiBriefcaseBold size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">{t('jobs.education')}:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">{t('jobs.masterDegree')}</h3>
                    </div>
                    
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <PiBriefcaseBold size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">{t('jobs.experience')}:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">{t('jobs.experienceYears')}</h3>
                    </div>
                    
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <MdOutlineLocationOn size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">{t('jobs.location')}:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">{t('jobs.city')}</h3>
                    </div>

                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <PiWalletBold size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">{t('jobs.salary')}:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">{t('jobs.salaryRange')}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
            <div className="w-full space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">{t('jobs.description')}</h3>
                <p className="text-[#5E6670]">
                  {t('jobs.descriptionText')}
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">{t('jobs.responsibilities')}</h3>
                <ul className="list-disc text-[#5E6670] pl-6 space-y-2">
                  <li>{t('jobs.responsibility1')}</li>
                  <li>{t('jobs.responsibility2')}</li>
                  <li>{t('jobs.responsibility3')}</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">{t('jobs.profile')}</h3>
                <ul className="list-disc pl-6 text-[#5E6670] space-y-2">
                  <li>{t('jobs.requirement1')}</li>
                  <li>{t('jobs.requirement2')}</li>
                  <li>{t('jobs.requirement3')}</li>
                  <li>{t('jobs.requirement4')}</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">{t('jobs.benefits')}</h3>
                <ul className="list-disc text-[#5E6670] pl-6 space-y-2">
                  <li>{t('jobs.benefit1')}</li>
                  <li>{t('jobs.benefit2')}</li>
                  <li>{t('jobs.benefit3')}</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="hidden sm:flex flex-col md:flex-row space-x-14">
            <div className="w-full md:w-2/3 space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">{t('jobs.description')}</h3>
                <p className="text-[#5E6670]">
                  {t('jobs.descriptionText')}
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">{t('jobs.responsibilities')}</h3>
                <ul className="list-disc pl-6 text-[#5E6670] space-y-2">
                  <li>{t('jobs.responsibility1')}</li>
                  <li>{t('jobs.responsibility2')}</li>
                  <li>{t('jobs.responsibility3')}</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">{t('jobs.profile')}</h3>
                <ul className="list-disc text-[#5E6670] pl-6 space-y-2">
                  <li>{t('jobs.requirement1')}</li>
                  <li>{t('jobs.requirement2')}</li>
                  <li>{t('jobs.requirement3')}</li>
                  <li>{t('jobs.requirement4')}</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">{t('jobs.benefits')}</h3>
                <ul className="list-disc text-[#5E6670] pl-6 space-y-2">
                  <li>{t('jobs.benefit1')}</li>
                  <li>{t('jobs.benefit2')}</li>
                  <li>{t('jobs.benefit3')}</li>
                </ul>
              </div>
            </div>
            
            <div className="w-1/3 lg:w-1/3 ipad-pro:w-2/4 md:w-2/4">
              <div className="border-2 border-[#E7F0FA] rounded-lg bg-white">
                <div className="p-6">
                  <h1 className="text-xl font-bold mb-6">{t('jobs.overview')}</h1>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        < FiCalendar size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">{t('jobs.published')}:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">13/06/2022</h3>
                    </div>
                    
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <LuTimer size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">{t('jobs.expires')}:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">13/10/2022</h3>
                    </div>
                    
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <PiBriefcaseBold size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">{t('jobs.type')}:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">{t('jobs.internship')}</h3>
                    </div>
                    
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <PiBriefcaseBold size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">{t('jobs.education')}:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">{t('jobs.masterDegree')}</h3>
                    </div>
                    
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <PiBriefcaseBold size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">{t('jobs.experience')}:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">{t('jobs.experienceYears')}</h3>
                    </div>
                    
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <MdOutlineLocationOn size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">{t('jobs.location')}:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">{t('jobs.city')}</h3>
                    </div>

                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <PiWalletBold size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">{t('jobs.salary')}:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">{t('jobs.salaryRange')}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;