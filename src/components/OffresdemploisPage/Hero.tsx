import React, { useState, useEffect, useRef } from "react";
import { CiCalendar } from "react-icons/ci";
import { LuTimer } from "react-icons/lu";
import { PiBriefcaseBold } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import { IoWalletOutline } from "react-icons/io5";

const Hero = () => {
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
      <h1 className="text-4xl font-extrabold text-center mb-12">Nos offres d'emploi</h1>
        
        
        <div className="w-full max-w-6xl shadow-lg rounded-lg p-6 md:p-8 bg-white">
          <div className="flex flex-col items-center text-left p-6 md:p-0 md:flex-row md:justify-between md:items-center md:text-left mb-12 space-y-4 md:space-y-0">
            <h1 className="text-2xl font-bold">ERP SAP Ressource humaine (H/F)</h1>
            <button className="bg-[#E0AC00] text-white font-medium rounded-lg w-full md:w-28 h-14">
              Postulez
            </button>
          </div>

        
          <div className="sm:hidden space-y-8">
        
            <div className="w-full">
              <div className="border-2 border-[#E7F0FA] rounded-lg bg-white">
                <div className="p-6 ">
                  <h1 className="text-xl font-bold mb-6">Aperçu du poste</h1>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <CiCalendar size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">EMPLOI PUBLIÉ:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">13/06/2022</h3>
                    </div>
                    
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <LuTimer size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">EMPLOI EXPIRE LE:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">13/10/2022</h3>
                    </div>
                    
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <PiBriefcaseBold size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">TYPE D'EMPLOI:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">Stage</h3>
                    </div>
                    
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <PiBriefcaseBold size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">EDUCATION:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">Bac+5</h3>
                    </div>
                    
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <PiBriefcaseBold size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">EXPÉRIENCE:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">1-5 Ans</h3>
                    </div>
                    
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <SlLocationPin size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">LOCALISATION:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">Rabat</h3>
                    </div>

                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <IoWalletOutline size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">SALAIRE:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">$100-300/mois</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
            <div className="w-full space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Description du poste</h3>
                <p className="text-[#5E6670] ">
                  Dans le cadre du développement de notre activité interne, nous recherchons un(e) stagiaire motivé(e) par le monde des ERP. Ce poste va permettre d'acquérir des compétences technique et fonctionnelle autour du module SAP HR.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold  text-lg mb-2">Vous allez participer :</h3>
                <ul className="list-disc text-[#5E6670]  pl-6 space-y-2">
                  <li>Au développement de nos solutions spécifiques SAP HR.</li>
                  <li>À la prise en charge de nos activités de TMA (Tierce Maintenance Applicative) afin d'analyser et répondre aux besoins de nos clients.</li>
                  <li>À nos prospections commerciales</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Profil</h3>
                <ul className="list-disc pl-6 text-[#5E6670] space-y-2">
                  <li>De formation au moins Bac+5.</li>
                  <li>Vous parlez couramment le français.</li>
                  <li>Idéalement des connaissances en développement informatique.</li>
                  <li>Idéalement des connaissances sur l'architecture SAP.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Avantage</h3>
                <ul className="list-disc text-[#5E6670]  pl-6 space-y-2">
                  <li>Formation technique (ABAP) et fonctionnelle tout au long du stage avec des objectifs à court et à long terme.</li>
                  <li>Prise en charge de 100% du titre de transport.</li>
                  <li>Rémunération selon profil.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="hidden sm:flex flex-col md:flex-row space-x-14">
            <div className="w-full md:w-2/3 space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Description du poste</h3>
                <p className="text-[#5E6670] ">
                  Dans le cadre du développement de notre activité interne, nous recherchons un(e) stagiaire motivé(e) par le monde des ERP. Ce poste va permettre d'acquérir des compétences technique et fonctionnelle autour du module SAP HR.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold  text-lg mb-2">Vous allez participer :</h3>
                <ul className="list-disc pl-6 text-[#5E6670]  space-y-2">
                  <li>Au développement de nos solutions spécifiques SAP HR.</li>
                  <li>À la prise en charge de nos activités de TMA (Tierce Maintenance Applicative) afin d'analyser et répondre aux besoins de nos clients.</li>
                  <li>À nos prospections commerciales</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold  text-lg mb-2">Profil</h3>
                <ul className="list-disc text-[#5E6670]  pl-6 space-y-2">
                  <li>De formation au moins Bac+5.</li>
                  <li>Vous parlez couramment le français.</li>
                  <li>Idéalement des connaissances en développement informatique.</li>
                  <li>Idéalement des connaissances sur l'architecture SAP.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Avantage</h3>
                <ul className="list-disc text-[#5E6670]  pl-6 space-y-2">
                  <li>Formation technique (ABAP) et fonctionnelle tout au long du stage avec des objectifs à court et à long terme.</li>
                  <li>Prise en charge de 100% du titre de transport.</li>
                  <li>Rémunération selon profil.</li>
                </ul>
              </div>
            </div>
            
           
            <div className="w-1/3 lg:w-1/3 ipad-pro:w-2/4 md:w-2/4">
              <div className="border-2 border-[#E7F0FA] rounded-lg bg-white">
                <div className="p-6">
                  <h1 className="text-xl font-bold mb-6">Aperçu du poste</h1>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <CiCalendar size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">EMPLOI PUBLIÉ:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">13/06/2022</h3>
                    </div>
                    
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <LuTimer size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">EMPLOI EXPIRE LE:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">13/10/2022</h3>
                    </div>
                    
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <PiBriefcaseBold size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">TYPE D'EMPLOI:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">Stage</h3>
                    </div>
                    
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <PiBriefcaseBold size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">EDUCATION:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">Bac+5</h3>
                    </div>
                    
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <PiBriefcaseBold size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">EXPÉRIENCE:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">1-5 Ans</h3>
                    </div>
                    
                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <SlLocationPin size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">LOCALISATION:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">Rabat</h3>
                    </div>

                    <div className="flex flex-col items-start">
                      <div className="text-[#E0AC00] mb-2">
                        <IoWalletOutline size={28} />
                      </div>
                      <h4 className="text-sm uppercase text-[#767F8C] mb-1">SALAIRE:</h4>
                      <h3 className="text-sm font-medium text-[#18191C]">$100-300/mois</h3>
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