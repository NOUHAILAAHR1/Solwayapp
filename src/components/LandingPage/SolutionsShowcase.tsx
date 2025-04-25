import { useTranslation } from 'react-i18next';
import containerImage from "../../assets/img/background.png";
import soldesk from "../../assets/img/soldesk.png";
import solway from "../../assets/img/solway-invoice.png";
import soldeskhr from "../../assets/img/soldeskhr.png";

const SolutionsShowcase = () => {
  const { t } = useTranslation();

  const solutionsData = [
    {
      img: soldesk,
      alt: t('solutions.soldesk.alt'),
      title: t('solutions.soldesk.title'),
      description: t('solutions.soldesk.description')
    },
    {
      img: soldeskhr,
      alt: t('solutions.soldeskhr.alt'),
      title: t('solutions.soldeskhr.title'),
      description: t('solutions.soldeskhr.description')
    },
    {
      img: solway,
      alt: t('solutions.solwayInvoice.alt'),
      title: t('solutions.solwayInvoice.title'),
      description: t('solutions.solwayInvoice.description')
    }
  ];

  const SolutionCard = ({ solution }) => (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full lg:w-[24rem] md:w-80 max-h-screen ">
      <div className="h-52 p-4 flex items-center justify-center">
        <img src={solution.img} alt={solution.alt} className="max-h-full max-w-full object-contain" />
      </div>
      <div className="p-6 text-center ">
        <h2 className="text-xl font-semibold">{solution.title}</h2>
        <p className="text-gray-600 mt-2  ">{solution.description}</p>
      </div>
    </div>
  );

  return (
    <main className="w-full flex flex-col bg-slate-50 relative z-40">
      <div className="w-full text-center py-8">
        <h1 className="text-3xl mb-4 font-bold">{t('solutions.title')}</h1>
        <p className="text-gray-500 mx-auto mb-6 max-w-md px-4">
          {t('solutions.description')}
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
        <div className="flex justify-center gap-5 px-8">
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