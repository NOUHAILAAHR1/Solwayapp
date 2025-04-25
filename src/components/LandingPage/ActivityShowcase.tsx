import { Check } from "lucide-react";
import { useTranslation } from 'react-i18next'; 
import containerImage from "../../assets/img/background.png";

const ActivityShowcase = () => {
  const { t } = useTranslation(); 
  
  const items = [
    {
      title: t('activities.consulting.title'),
      subtitle: t('activities.consulting.description'),
    },
    {
      title: t('activities.integration.title'),
      subtitle: t('activities.integration.description'),
    },
    {
      title: t('activities.sourcing.title'),
      subtitle: t('activities.sourcing.description'),
    },
    {
      title: t('activities.innovation.title'),
      subtitle: t('activities.innovation.description'),
    },
    {
      title: t('activities.training.title'),
      subtitle: t('activities.training.description'),
    },
  ];

  return (
    <main className="w-full flex flex-col lg:flex-row lg:justify-between bg-[#F9FAFB] relative z-40">
      <div
        className="w-full"
        style={{
          backgroundImage: `url(${containerImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <div className="hidden lg:block ipad-pro:hidden w-full">
          <div className="flex flex-col lg:flex-row lg:justify-between space-x-6 w-full px-20 pt-14">
            <div className="bg-[#F9FAFB] lg:w-2/4">
              <h4 className="text-[#E0AC00] font-bold">{t('activities.subtitle')}</h4>
              <h1 className="text-4xl mb-4 font-bold">{t('activities.title')}</h1>
              <p className="w-auto text-[#374151]">
                {t('activities.description')}
              </p>
            </div>

            <div className="lg:w-3/4 lg:mb-6 lg:bg-white lg:shadow-lg lg:rounded-lg lg:pt-4 lg:pl-4 lg:flex lg:flex-wrap">
              <div className="lg:w-1/2 lg:pl-4">
                {items.slice(0, 3).map((item, index) => {
                  return (
                    <div key={index} className="mb-4">
                      <h1 className="text-lg font-bold flex items-center">
                        <Check className="text-[#E0AC00] w-6 h-6 mr-2" />
                        {item.title}
                      </h1>
                      <p 
                        className="text-sm pl-8 max-w-[270px] text-[#374151] mt-1"
                        dangerouslySetInnerHTML={{ __html: item.subtitle }}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="lg:w-1/2 lg:pl-4">
                {items.slice(3).map((item, index) => {
                  return (
                    <div key={index} className="mb-4">
                      <h1 className="text-lg font-bold flex items-center">
                        <Check className="text-[#E0AC00] w-6 h-6 mr-2" />
                        {item.title}
                      </h1>
                      <p 
                        className="text-sm pl-8 max-w-[270px] text-[#374151] mt-1"
                        dangerouslySetInnerHTML={{ __html: item.subtitle }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden ipad-pro:block w-full">
          <div className="bg-[#F9FAFB] w-full mx-auto py-8 text-center">
            <h4 className="text-[#E0AC00] font-bold">{t('activities.subtitle')}</h4>
            <h1 className="text-4xl mb-4 font-bold">{t('activities.title')}</h1>
            <p className="text-[#374151] mx-auto pl-3 pr-3">
              {t('activities.description')}
            </p>
          </div>
          <div className="w-full flex justify-center p-4 pt-7 bg-[#F9FAFB]">
            <div className="bg-white shadow-lg rounded-lg p-7 flex flex-wrap justify-center mx-auto max-w-4xl">
              <div className="w-full md:w-1/2 md:pr-6 md:space-y-6">
                {items.slice(0, 3).map((item, index) => {
                  return (
                    <div key={index} className="mb-4">
                      <h1 className="text-lg font-bold flex items-center">
                        <Check className="text-[#E0AC00] w-6 h-6 mr-2" />
                        {item.title}
                      </h1>
                      <p 
                        className="text-sm pl-8 w-full ipad-pro:max-w-[270px] md:max-w-[270px] lg:max-w-[270px]  text-[#374151] mt-1"
                        dangerouslySetInnerHTML={{ __html: item.subtitle }}
                      />
                    </div>
                  );
                })}
              </div>
                     
              <div className="w-full md:w-1/2 md:pl-6 md:space-y-6">
                {items.slice(3).map((item, index) => {
                  return (
                    <div key={index} className="mb-4">
                      <h1 className="text-lg font-bold flex items-center">
                        <Check className="text-[#E0AC00] w-6 h-6 mr-2" />
                        {item.title}
                      </h1>
                      <p 
                        className="text-sm pl-8 w-full ipad-pro:max-w-[270px] md:max-w-[270px] lg:max-w-[270px]  text-[#374151] text-[#374151] mt-1"
                        dangerouslySetInnerHTML={{ __html: item.subtitle }}
                      />
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