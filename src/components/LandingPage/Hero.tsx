import React from "react";
import { Link } from 'react-router-dom';
import navImage from "../../assets/img/nav.jpeg";

const Hero = () => {
  return (
    <div className="relative  w-full md:max-h-screen lg:h-full ipad-pro:h-[50vh] bg-white rounded-b-lg md:rounded-none ">
 
      <div className="hidden md:flex items-start justify-between w-full h-screen">
        <div className="w-1/2 lg:w-1/2 md:w-3/4 ipad-pro:w-3/4 lg:pl-14  lg:pt-36 md:pl-8  md:pt-52 flex flex-col items-start justify-center pl-14 space-y-6">
          <h1 className="text-3xl font-bold">
          Bienvenue chez <span className="md:text-[#E0AC00] ipad-pro:text-[#E0AC00] lg:text-black">SOLWAY Consulting & Services </span>
            <span className="lg:text-[#E0AC00] ipad-pro:text-black">Croisez notre chemin, trouvez votre solution.</span>
          </h1>
          <p className="max-w-lg text-lg">
            Libérez le potentiel de votre entreprise avec des solutions sur
            mesure et des conseils d'experts. Ensemble, relevons vos défis et
            propulsons votre succès.
          </p>
          <div className="flex space-x-4">
            <Link to="/about">
              <button className="px-6 py-3 bg-[#E0AC00] text-white rounded-lg font-semibold shadow-md">Qui sommes-nous ?</button>
            </Link>
            <Link to="/OffresdemploisPage">
              <button className="px-6 py-3 border border-[#D1D5DB] bg-[#F9FAFB] text-black font-semibold rounded-lg">Nos offres d'emploi</button>
            </Link>
          </div>
        </div>

        <div className="w-1/2 lg:w-1/2  md:w-1/3 h-full md:max-h-screen lg:h-full ipad-pro:h-1/2 relative">
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
        Bienvenue chez{" "}
          <span className="text-[#E0AC00] "> SOLWAY Consulting & Services </span>
          Croisez notre chemin, trouvez votre solution.
        </h1>
        <p className="max-w-lg text-lg px-4">
          Libérez le potentiel de votre entreprise avec des solutions sur
          mesure et des conseils d'experts. Ensemble, relevons vos défis et
          propulsons votre succès.
        </p>
        <div className="flex flex-col p-4 w-full space-y-4">
          <Link to="/about">
            <button className="w-full px-6 py-3 bg-[#E0AC00] text-white rounded-lg font-semibold shadow-md">
              Qui sommes-nous ?
            </button>
          </Link>
          <Link to="/OffresdemploisPage">
            <button className="w-full px-6 py-3 border border-[#D1D5DB] bg-[#F9FAFB] text-black font-semibold rounded-lg">
              Nos offres d'emploi
            </button>
          </Link>
        </div>

        <img
          src={navImage}
          alt="Navbar Image"
          className="w-full h-auto pt-4 object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;