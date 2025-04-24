import React from "react";
import fondateur from "../../assets/img/Fondateur.png";
import spa from "../../assets/img/SPA.png";

const SolwayIntroSection = () => {
  return (
    <main className="w-full flex flex-col pt-4 bg-[#F9FAFB] relative z-40 ">
      <div className=" w-full  text-center p-5  ">
        <h4 className="text-[#E0AC00] font-bold">Présentation</h4>
        <h1 className="text-4xl mb-4 text-[#111827] font-bold">SOLWAY Consulting & Services</h1>
      </div>
      
      <div className="container mx-auto ipad-pro:p-8  px-4  flex justify-center ">
        <div className="bg-[#FFFFFF] shadow-lg rounded-xl overflow-hidden lg:max-w-7xl   ">
          <div className="w-full  p-3 pt-6 pb-6  lg:p-6  lg:pb-6 relative bg-[#FFFFFF]">
            <h1 className="text-3xl font-bold   text-[#111827] mb-6 pl-4 ">
            À propos de SOLWAY Consulting & Services
            </h1>
            
            <div className="space-y-4 pl-4">
              <p className="text-xl text-[#374151]">
                Fondée en octobre 2019, SOLWAY Consulting & Services a pour vocation de vous accompagner en mettant à votre disposition son expertise pointue dans la gestion des ressources humaines via les solutions SAP HR (HCM). Grâce à notre équipe de consultants expérimentés, nous vous offrons un conseil personnalisé pour optimiser la gestion de votre capital humain et la performance de vos processus RH.
              </p>
              
              <p className="text-xl text-[#374151]">
                Notre engagement envers l'excellence, la rigueur et l'innovation nous permet de vous proposer des solutions adaptées à vos besoins spécifiques, tout en prenant en compte les défis uniques de votre organisation. Nous plaçons la satisfaction de nos clients au cœur de notre approche, en établissant une relation de partenariat durable et en garantissant la mise en œuvre efficace de vos projets SAP HR.
              </p>
              
              <p className="text-xl text-[#374151]">
                Avec SOLWAY Consulting & Services, vous bénéficiez d'un accompagnement sur mesure et d'une expertise reconnue pour réussir la transformation de vos processus RH et atteindre vos objectifs d'efficacité et de performance.
              </p>
              
              <p className="text-xl text-[#374151]">
                Nous sommes présents en France, à Colombes, et également au Maroc, à Rabat, ce qui nous permet d'offrir une couverture géographique étendue et de répondre aux besoins de nos clients, quel que soit leur emplacement.
              </p>
            </div>
            
            <div className="mt-6 ml-4 mr-4 flex items-center bg-[#F9FAFB]">
              <div className="w-2  lg:w-1 bg-[#E0AC00] mr-3 h-32 lg:h-24"></div>
              <div>
                <h2 className="text-xl italic mb-2 font-bold">
                  "La vie se rétrécit et s'élargit proportionnellement à votre volonté de prendre des risques et d'essayer de nouvelles choses."
                </h2>
                <p className="text-xl text-left">- Gary Vaynerchuk</p>
              </div>
            </div>
            
            <div className="mt-12 flex flex-col ">
              <h1 className="text-3xl font-bold text-[#111827] mb-4 pl-4">
                Fondateur de SOLWAY Consulting & Services
              </h1>
              <div className="w-full mb-6 pt-8 px-4">
                <img 
                  src={fondateur} 
                  alt="Fondateur de SOLWAY Consulting & Services" 
                  className="w-full h-auto object-cover "
                />
              </div>
              <div className="w-full">
                <h1 className="text-3xl font-bold text-[#111827] mb-4 pl-4">
                  Amine HBIBIY
                </h1>
                <div className="space-y-4 pl-4">
                  <p className="text-xl text-[#374151]">
                    Avec plus de 10 ans d'expertise, il a contribué à de nombreux projets RH ayant permis de développer une expertise solide et polyvalente dans la gestion des ressources humaines.
                  </p>
                  <p className="text-xl text-[#374151]">
                    Aujourd'hui, il participe à la mise en place de solution SIRH chez nos différents clients.
                  </p>
                  <p className="text-xl text-[#374151]">
                    Au titre de ses responsabilités, il développe nos différentes branches : consulting, innovation et formation.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col ">
              <h1 className="text-3xl font-bold text-[#111827] mb-4 pl-4">
                Notre partenariat avec l'éditeur SAP
              </h1>
              <div className="w-full mb-6 px-4 flex justify-center">
                <img 
                  src={spa} 
                  alt="Partenariat SAP" 
                  className="lg:w-1/2  sm:w-full pt-8 h-auto object-contain"
                />
              </div>
              <div className="space-y-4  pt-4 pl-4">
                <p className="text-xl text-[#374151]">
                  Notre connaissance approfondie du progiciel SAP et le développement des outils reconnu par SAP, a permit à SOLWAY de devenir un partenaire Silver SAP.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SolwayIntroSection;