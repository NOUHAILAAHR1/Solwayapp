import React from "react";
import { useTranslation } from 'react-i18next';
import Renault from "../../assets/img/GroupeRenault.png";
import Etam from "../../assets/img/Etam.png";
import Happn from "../../assets/img/happn.png";
import Domusvi from "../../assets/img/Domusvi.png";
import Vinci from "../../assets/img/vinci.png";
import Assemblee from "../../assets/img/Assemblee.png";

const ClientPartners = () => {
  const { t } = useTranslation();

  const partners = [
    { id: 1, name: "Groupe Renault", image: Renault },
    { id: 2, name: "Etam", image: Etam },
    { id: 3, name: "Happn", image: Happn },
    { id: 4, name: "Domusvi", image: Domusvi },
    { id: 5, name: "Vinci", image: Vinci },
    { id: 6, name: "Assemblée Nationale", image: Assemblee },
  ];

  const firstRow = partners.slice(0, 3);
  const secondRow = partners.slice(3);

  const PartnerLogo = ({ partner, maxHeight }) => (
    <div className="px-3 flex justify-center">
      <img
        src={partner.image}
        alt={partner.name}
        className={`max-h-${maxHeight} w-auto`}
      />
    </div>
  );

  const PartnerRow = ({ partners, maxHeight }) => (
    <div className="flex justify-between items-center">
      {partners.map((partner) => (
        <div key={partner.id} className="w-1/3">
          <PartnerLogo partner={partner} maxHeight={maxHeight} />
        </div>
      ))}
    </div>
  );

  const Divider = () => (
    <div className="w-full h-px bg-gray-200 my-4"></div>
  );

  const PartnerGrid = ({ firstRow, secondRow, maxHeight, containerClass }) => (
    <div className={`bg-white shadow-lg rounded-lg p-6 ${containerClass}`}>
      <PartnerRow partners={firstRow} maxHeight={maxHeight} />
      <Divider />
      <PartnerRow partners={secondRow} maxHeight={maxHeight} />
    </div>
  );

  return (
    <main className="w-full bg-slate-50 py-12 px-4">
      
      <div className="hidden lg:block ipad-pro:hidden ">
        <div className="flex flex-row justify-between items-center max-w-[75rem] mx-auto gap-10">
          <div className="">
            <h1 className="text-3xl font-bold mb-4">{t('clients.title')}</h1>
          </div>
          <div className="">
            <PartnerGrid
              firstRow={firstRow}
              secondRow={secondRow}
              maxHeight="14"
              containerClass=""
            />
          </div>
        </div>
      </div>

      <div className="hidden md:block lg:hidden ipad-pro:block">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">{t('clients.title')}</h1>
        </div>
        <PartnerGrid
          firstRow={firstRow}
          secondRow={secondRow}
          maxHeight="12"
          containerClass="max-w-2xl mx-auto"
        />
      </div>

      <div className="block md:hidden">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold mb-3">{t('clients.title')}</h1>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-5 mx-auto">
          <div className="flex flex-wrap justify-center items-center mb-4">
            {firstRow.map((partner) => (
              <div key={partner.id} className="w-1/3 p-2 flex justify-center">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="max-h-10 w-auto"
                />
              </div>
            ))}
          </div>
          <Divider />
          <div className="flex flex-wrap justify-center items-center">
            {secondRow.map((partner) => (
              <div key={partner.id} className="w-1/3 p-2 flex justify-center">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="max-h-10 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ClientPartners;