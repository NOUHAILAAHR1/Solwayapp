import containerImage from "../../assets/img/background.png";
import soldesk from "../../assets/img/soldesk.png";
import solway from "../../assets/img/solway-invoice.png";
import soldeskhr from "../../assets/img/soldeskhr.png";

const SolutionsShowcase = () => {
  const solutionsData = [
    {
      img: soldesk,
      alt: "Soldesk",
      title: "SOLDESK",
      description: "SOLDESK est un outil interne de gestion de tickets permettant de traiter efficacement les demandes clients (anomalies, évolutions, etc.) via une interface simple et rapide."
    },
    {
      img: soldeskhr,
      alt: "Soldesk HR",
      title: "SOLWAY HR",
      description: "SOLWAY HR est une solution complète pour optimiser la gestion des ressources humaines, couvrant l'embauche, le recrutement, la paie, et plus encore."
    },
    {
      img: solway,
      alt: "Solway Invoice",
      title: "SOLWAY INVOICE",
      description: "SOLWAY INVOICE est un outil interne qui simplifie la facturation en permettant la saisie facile des comptes rendus d'activité et la génération automatique de factures pour les clients finaux."
    }
  ];

  const SolutionCard = ({ solution }) => (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full lg:w-[23rem] md:w-80 h-[25rem] ">
      <div className="h-52 p-4 flex items-center justify-center">
        <img src={solution.img} alt={solution.alt} className="max-h-full max-w-full object-contain" />
      </div>
      <div className="p-4 h-44 text-center ">
        <h2 className="text-xl font-semibold">{solution.title}</h2>
        <p className="text-gray-600 mt-2 ">{solution.description}</p>
      </div>
    </div>
  );

  return (
    <main className="w-full flex flex-col  bg-slate-50 relative z-40">
      <div className="w-full text-center py-8">
        <h1 className="text-3xl mb-4 font-bold">Nos Solutions</h1>
        <p className="text-gray-500 mx-auto mb-6 max-w-md px-4">
          Découvrez nos outils pour la gestion des demandes, des ressources humaines et de la facturation.
        </p>
      </div>
      
    
      <div 
        className="hidden ipad-pro:hidden lg:block w-full pb-16"
        style={{
          backgroundImage: `url(${containerImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPositionY: "center",
        }}
      >
        <div className="flex justify-center gap-8  px-8">
          {solutionsData.map((solution, index) => (
            <SolutionCard key={index} solution={solution} />
          ))}
        </div>
      </div>
      
   
      <div className="hidden md:block lg:hidden ipad-pro:block w-full pb-16">
        <div className="flex flex-row justify-between px-8">
          {solutionsData.map((solution, index) => (
            <SolutionCard key={index} solution={solution} />
          ))}
        </div>
      </div>
      
    
      <div className="block sm:block md:hidden lg:hidden ipad-pro:hidden w-full pb-16">
        <div className="flex flex-col items-center gap-8 px-4">
          {solutionsData.map((solution, index) => (
            <SolutionCard key={index} solution={solution} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default SolutionsShowcase;