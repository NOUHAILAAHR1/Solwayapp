import { Check } from "lucide-react";
import containerImage from "../../assets/img/background.png";

const ActivityShowcase = () => {
  const items = [
    {
      title: "Conseil",
      subtitle:
        "SOLWAY accompagne les entreprises dans leur transformation digitale.",
    },
    {
      title: "Intégration",
      subtitle:
        "SOLWAY intervient à la mise en place de vos solutions SAP, spécialement dans le module HR, ainsi sur d’autres périmètres : Linux, Base de données, Réseau …",
    },
    {
      title: "Sourcing",
      subtitle:
        "SOLWAY vous aide à satisfaire vos besoins en recrutement en ayant les bons talents pour votre entreprise.",
    },
    {
      title: "Innovation",
      subtitle:
        "SOLWAY développe ses propres outils pour faciliter et améliorer votre quotidien.",
    },
    {
      title: "Formation",
      subtitle:
        "SOLWAY offre désormais la possibilité de se former sur SAP ainsi sur d’autres langages et frameworks.",
    },
  ];

  return (
    <main className="w-full flex flex-col lg:flex-row lg:justify-between bg-[#F9FAFB]  relative z-40">

      <div
        className="w-full"
        style={{
          backgroundImage: `url(${containerImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
       
        <div className="hidden lg:block ipad-pro:hidden w-full">
          <div className="flex flex-col lg:flex-row lg:justify-between w-full px-20 pt-14">
            <div className="bg-[#F9FAFB] lg:w-2/4">
              <h4 className="text-[#E0AC00]  font-bold">Everything you need</h4>
              <h1 className="text-4xl mb-4 font-bold">Nos activités</h1>
              <p className="w-auto text-gray-500">
                Notre ambition est de vous servir tout en mettant en œuvre les
                meilleures pratiques issues du savoir-faire acquis au cours des
                nombreux projets réalisés pour différents clients.
              </p>
            </div>

            <div className="lg:w-3/4 lg:mb-6 lg:bg-white lg:shadow-lg lg:rounded-lg lg:pt-4 lg:pl-4 lg:flex lg:flex-wrap">
              <div className="lg:w-1/2 lg:pl-4">
                {items.slice(0, 3).map((item, index) => {
                  const firstWord = item.subtitle.split(" ")[0];
                  const rest = item.subtitle.substring(firstWord.length);
                  return (
                    <div key={index} className="mb-4">
                      <h1 className="text-lg font-bold flex items-center">
                        <Check className="text-[#E0AC00] w-6 h-6 mr-2" />
                        {item.title}
                      </h1>
                      <p className="text-sm pl-8 max-w-[270px] text-gray-500 mt-1">
                        <span className="font-bold">{firstWord}</span>
                        {rest}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="lg:w-1/2 lg:pl-4">
                {items.slice(3).map((item, index) => {
                  const firstWord = item.subtitle.split(" ")[0];
                  const rest = item.subtitle.substring(firstWord.length);
                  return (
                    <div key={index} className="mb-4">
                      <h1 className="text-lg font-bold flex items-center">
                        <Check className="text-[#E0AC00]  w-6 h-6 mr-2" />
                        {item.title}
                      </h1>
                      <p className="text-sm pl-8 max-w-[270px] text-gray-500 mt-1">
                        <span className="font-bold">{firstWord}</span>
                        {rest}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        
        <div className="lg:hidden ipad-pro:block w-full">
          <div className="bg-[#F9FAFB] w-full mx-auto py-8 text-center">
            <h4 className="text-[#E0AC00] font-bold">Everything you need</h4>
            <h1 className="text-4xl mb-4 font-bold">Nos activités</h1>
            <p className="text-gray-500 mx-auto">
              Notre ambition est de vous servir tout en mettant en œuvre les meilleures pratiques issues du savoir-faire acquis au cours des nombreux projets réalisés pour différents clients.
            </p>
          </div>
          <div className="w-full flex justify-center p-6 bg-[#F9FAFB]">
              <div className="bg-white shadow-lg rounded-lg p-7 flex flex-wrap justify-center mx-auto max-w-4xl">
                    
                  <div className="w-full md:w-1/2  md:pr-6 md:space-y-6">
                        {items.slice(0, 3).map((item, index) => {
                          const firstWord = item.subtitle.split(" ")[0];
                          const rest = item.subtitle.substring(firstWord.length);
                          return (
                            <div key={index} className="mb-4">
                              <h1 className="text-lg font-bold flex items-center">
                                <Check className="text-[#E0AC00] w-6 h-6 mr-2" />
                                {item.title}
                              </h1>
                              <p className="text-sm pl-8 max-w-[270px] text-gray-500 mt-1">
                                <span className="font-bold">{firstWord}</span>
                                {rest}
                              </p>
                    </div>
                          );
                        })}
                  </div>
        
                     
                  <div className="w-full md:w-1/2 md:pl-6 md:space-y-6">
                        {items.slice(3).map((item, index) => {
                          const firstWord = item.subtitle.split(" ")[0];
                          const rest = item.subtitle.substring(firstWord.length);
                          return (
                    <div key={index} className="mb-4">
                              <h1 className="text-lg font-bold flex items-center">
                                <Check className="text-[#E0AC00]  w-6 h-6 mr-2" />
                                {item.title}
                              </h1>
                              <p className="text-sm pl-8 max-w-[270px] text-gray-500 mt-1">
                                <span className="font-bold">{firstWord}</span>
                                {rest}
                              </p>
                    </div>
                          );
                        })}
                  </div>
            </div>
            </div>


        </div>


      </div>
    </main>
  );
};

export default ActivityShowcase;
