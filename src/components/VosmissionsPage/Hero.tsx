import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [fileName, setFileName] = useState(t('missions.form.noFileSelected', "Aucun fichier sélectionné"));
  const isTablet = windowWidth >= 768 && windowWidth <= 1024;
  const fileInputRef = useRef(null);
  const mobileFileInputRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setFileName(t('missions.form.noFileSelected', "Aucun fichier sélectionné"));
  }, [t]);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName(t('missions.form.noFileSelected', "Aucun fichier sélectionné"));
    }
  };

  const triggerFileInput = (inputRef) => {
    inputRef.current.click();
  };

  const inputClass = "w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB] text-[#030712]";
  const selectClass = "w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB] text-[#030712]";

  const FormLabel = ({ children }) => (
    <span className="text-sm text-[#374151] block mb-1 text-left">{children}</span>
  );

  return (
    <>
     <div className="flex flex-col space-y-9 pt-12 mb-6">
        <div className="md:hidden px-4  w-full flex flex-col items-center text-center pt-6">
          <h1 className="text-3xl font-extrabold text-[#000000] mb-4 pt-5">
            SOLWAY <br/>{t('missions.title', "Vos Missions")}
          </h1>
          <p className="text-md max-w-xs text-[#000000] mb-4">
            {t('missions.description', "Déposez vos propositions de missions Nous nous occupons du reste")}
          </p>

          <div className="w-full  pt-6">
            <form className="w-full bg-white p-4 rounded-lg shadow-lg">
              <div className="mb-4">
                <label className="block text-left mb-1">{t('missions.form.lastName', "Nom (requis)")}</label>
                <input
                  type="text"
                  className={inputClass}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">{t('missions.form.firstName', "Prénom (requis)")}</label>
                <input
                  type="text"
                  className={inputClass}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">{t('missions.form.company', "Société (requis)")}</label>
                <input
                  type="text"
                  className={inputClass}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">{t('missions.form.email', "Email (requis)")}</label>
                <input
                  type="email"
                  className={inputClass}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">{t('missions.form.mission', "Votre mission")}</label>
                <input
                  type="text"
                  className={inputClass}
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">{t('missions.form.experienceLevel', "Niveau d'expérience :")}</label>
                <select
                  className={selectClass}
                >
                  <option value="">{t('missions.form.chooseOption', "—Veuillez choisir une option—")}</option>
                  <option value="etudiant">{t('missions.form.experience.student', "Étudiant")}</option>
                  <option value="stage">{t('missions.form.experience.internship', "Stage")}</option>
                  <option value="junior">{t('missions.form.experience.junior', "Junior (0-2 ans)")}</option>
                  <option value="intermediaire">{t('missions.form.experience.intermediate', "Intermédiaire (3-5 ans)")}</option>
                  <option value="senior">{t('missions.form.experience.senior', "Senior (5+ ans)")}</option>
                  <option value="expert">{t('missions.form.experience.expert', "Expert")}</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">{t('missions.form.dailyRate', "TJM (requis)")}</label>
                <input
                  type="text"
                  className={inputClass}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">{t('missions.form.startDate', "À pourvoir à partir de")}</label>
                <input
                  type="date"
                  className={inputClass}
                  placeholder="mm/dd/yyyy"
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">{t('missions.form.duration', "Durée de la mission en mois")}</label>
                <input
                  type="number"
                  className={inputClass}
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">{t('missions.form.location', "Localisation")}</label>
                <input
                  type="text"
                  className={inputClass}
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">{t('missions.form.workMode', "Mode de travail")}</label>
                <select
                  className={selectClass}
                >
                  <option value="">{t('missions.form.chooseOption', "—Veuillez choisir une option—")}</option>
                  <option value="presentiel">{t('missions.form.workModes.onSite', "Présentiel")}</option>
                  <option value="remote">{t('missions.form.workModes.remote', "Remote")}</option>
                  <option value="hybride">{t('missions.form.workModes.hybrid', "Hybride")}</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">{t('missions.form.jobDescription', "Fiche de poste")}</label>
                <div className="flex text-left">
                  <input 
                    ref={mobileFileInputRef}
                    type="file" 
                    accept=".pdf,.doc,.docx"
                    className="hidden" 
                    onChange={handleFileChange}
                  />
                  <div className="w-full flex">
                    <div className="flex-grow p-2 border border-r-0 border-gray-300 rounded-l-md bg-white text-gray-500 truncate text-sm h-9">
                      {fileName}
                    </div>
                    <button 
                      type="button" 
                      onClick={() => triggerFileInput(mobileFileInputRef)}
                      className="bg-white text-[#374151] p-2 rounded-r-md border border-gray-300 hover:bg-gray-300 transition duration-200 text-sm h-9"
                    >
                     {t('missions.form.chooseFile', "Choisir un fichier")}
                    </button>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">{t('missions.form.message', "Message")}</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md h-24 text-gray-800 text-sm hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition duration-300"
              >
                {t('missions.form.submit', "Envoyer ma candidature")}
              </button>
            </form>
          </div>
        </div>

        <div className="hidden md:flex flex-col pt-10 flex-grow">
          <div className="w-full">
            <div className={`w-full ${isTablet ? 'flex flex-col items-center' : 'flex flex-row justify-between items-start '}`}>
              <div className={`${isTablet ? 'max-w-2xl text-center mb-8' : 'max-w-[35rem] text-left pl-14'} space-y-6`}>
                <div>
                  <h1 className="text-3xl font-extrabold pt-4 text-[#000000] mb-4">
                    SOLWAY <br/>{t('missions.title', "Vos Missions")}
                  </h1>
                  <p className={`text-medium text-[#000000] ${isTablet ? 'mx-auto' : 'max-w-xl'}`}>
                    {t('missions.description', "Déposez vos propositions de missions,")}<br/>
                    {t('missions.description2', "Nous nous occupons du reste")}
                  </p>
                </div>
              </div>
              <div className={`${isTablet ? 'w-full max-w-lg' : 'w-1/2 pl-[4rem]'} flex items-center ${isTablet ? 'justify-center' : ''}`}>
                <form className="w-full max-w-lg mb-6 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <FormLabel>{t('missions.form.lastName', "Nom (requis)")}</FormLabel>
                      <input 
                        type="text" 
                        className={inputClass}
                        required 
                      />
                    </div>
                    <div>
                      <FormLabel>{t('missions.form.firstName', "Prénom (requis)")}</FormLabel>
                      <input 
                        type="text" 
                        className={inputClass}
                        required 
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <FormLabel>{t('missions.form.company', "Société (requis)")}</FormLabel>
                      <input 
                        type="text" 
                        className={inputClass}
                        required 
                      />
                    </div>
                    <div>
                      <FormLabel>{t('missions.form.email', "Email (requis)")}</FormLabel>
                      <input 
                        type="email" 
                        className={inputClass}
                        required 
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <FormLabel>{t('missions.form.mission', "Votre mission")}</FormLabel>
                    <input 
                      type="text" 
                      className={inputClass}
                    />
                  </div>
                  <div className="mb-4">
                    <FormLabel>{t('missions.form.experienceLevel', "Niveau d'expérience :")}</FormLabel>
                    <select 
                      className={selectClass}
                    >
                      <option value="">{t('missions.form.chooseOption', "—Veuillez choisir une option—")}</option>
                      <option value="etudiant">{t('missions.form.experience.student', "Étudiant")}</option>
                      <option value="stage">{t('missions.form.experience.internship', "Stage")}</option>
                      <option value="junior">{t('missions.form.experience.junior', "Junior (0-2 ans)")}</option>
                      <option value="intermediaire">{t('missions.form.experience.intermediate', "Intermédiaire (3-5 ans)")}</option>
                      <option value="senior">{t('missions.form.experience.senior', "Senior (5+ ans)")}</option>
                      <option value="expert">{t('missions.form.experience.expert', "Expert")}</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <FormLabel>{t('missions.form.dailyRate', "TJM (requis)")}</FormLabel>
                    <input
                      type="text"
                      className={inputClass}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <FormLabel>{t('missions.form.startDate', "À pourvoir à partir de")}</FormLabel>
                    <input
                      type="date"
                      className={inputClass}
                      placeholder="mm/dd/yyyy"
                    />
                  </div>
                  <div className="mb-4">
                    <FormLabel>{t('missions.form.duration', "Durée de la mission en mois")}</FormLabel>
                    <input 
                      type="number" 
                      className={inputClass}
                    />
                  </div>
                  <div className="mb-4">
                    <FormLabel>{t('missions.form.location', "Localisation")}</FormLabel>
                    <input 
                      type="text" 
                      className={inputClass}
                    />
                  </div>
                  <div className="mb-4">
                    <FormLabel>{t('missions.form.workMode', "Mode de travail")}</FormLabel>
                    <select 
                      className={selectClass}
                    >
                      <option value="">{t('missions.form.chooseOption', "—Veuillez choisir une option—")}</option>
                      <option value="presentiel">{t('missions.form.workModes.onSite', "Présentiel")}</option>
                      <option value="remote">{t('missions.form.workModes.remote', "Remote")}</option>
                      <option value="hybride">{t('missions.form.workModes.hybrid', "Hybride")}</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <FormLabel>{t('missions.form.jobDescription', "Fiche de poste")}</FormLabel>
                    <div className="flex">
                      <input 
                        ref={fileInputRef}
                        type="file" 
                        accept=".pdf,.doc,.docx"
                        className="hidden" 
                        onChange={handleFileChange}
                      />
                      <div className="w-full flex">
                        <div className="flex-grow p-2 border border-r-0 border-gray-300 rounded-l-md bg-white text-gray-500 truncate text-sm h-9">
                          {fileName}
                        </div>
                        <button 
                          type="button" 
                          onClick={() => triggerFileInput(fileInputRef)}
                          className="bg-white text-gray-700 p-2 rounded-r-md border border-gray-300 hover:bg-gray-300 transition duration-200 text-sm h-9"
                        >
                          {t('missions.form.chooseFile', "Choisir un fichier")}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <FormLabel>{t('missions.form.message', "Message")}</FormLabel>
                    <textarea 
                      className="w-full p-2 border border-gray-300 rounded-md h-24 text-gray-800 text-sm hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-400" 
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-52 bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition duration-300 text-sm h-9"
                  >
                    {t('missions.form.submit', "Envoyer ma candidature")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;