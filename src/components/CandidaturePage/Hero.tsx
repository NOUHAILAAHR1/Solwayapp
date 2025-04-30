import React from "react";
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const isTablet = windowWidth >= 768 && windowWidth <= 1024;

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [fileName, setFileName] = React.useState("");
  const fileInputRef = React.useRef(null);
  const mobileFileInputRef = React.useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("");
    }
  };

  const triggerFileInput = (inputRef) => {
    inputRef.current.click();
  };

  const FormLabel = ({ children }) => (
    <span className="text-sm text-[#374151] block mb-1">{children}</span>
  );

  return (
    <>
      <div className="flex flex-col space-y-9 pt-12">
        <div className="md:hidden w-full flex flex-col items-center text-center pt-6 mb-8">
          <h1 className="text-3xl font-extrabold text-[#000000] p-6">
            {t('recruitment.title', "SOLWAY Recrute")}<br/>
            {t('recruitment.subtitle', "Déposez votre candidature")}
          </h1>
          <p className="text-md max-w-xs text-[#000000]">
            {t('recruitment.quote1', "Formez suffisamment bien les gens pour qu'ils puissent partir. Traitez-les suffisamment bien pour qu'ils ne veuillent pas partir.")}
          </p>

          <div className="w-full px-4 pt-6">
            <form className="w-full bg-white p-4 rounded-lg shadow-lg">
              <div className="mb-4">
                <div className="mb-2">
                  <label className="block text-left mb-1">{t('recruitment.form.lastName', "Nom (requis)")}</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-left mb-1">{t('recruitment.form.firstName', "Prénom (requis)")}</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">{t('recruitment.form.email', "Email (requis)")}</label>
                <input
                  type="email"
                  className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">{t('recruitment.form.position', "Poste")}</label>
                <input
                  type="text"
                  className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">{t('recruitment.form.experienceLevel', "Niveau d'expérience : (requis)")}</label>
                <select
                  className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB] text-[#6B7280]"
                  required
                >
                  <option value="">{t('recruitment.form.selectLevel', "Sélectionnez votre niveau")}</option>
                  <option value="etudiant">{t('recruitment.form.student', "Étudiant")}</option>
                  <option value="stage">{t('recruitment.form.internship', "Stage")}</option>
                  <option value="junior">{t('recruitment.form.junior', "Junior (0-2 ans)")}</option>
                  <option value="intermediaire">{t('recruitment.form.intermediate', "Intermédiaire (3-5 ans)")}</option>
                  <option value="senior">{t('recruitment.form.senior', "Senior (5+ ans)")}</option>
                  <option value="expert">{t('recruitment.form.expert', "Expert")}</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">{t('recruitment.form.resume', "Veuillez joindre votre CV (requis)")}</label>
                <div className="flex items-center">
                  <input 
                    ref={mobileFileInputRef}
                    type="file" 
                    accept=".pdf,.doc,.docx"
                    className="hidden" 
                    onChange={handleFileChange}
                    required
                  />
                  <div className="w-full flex items-center">
                    <div className="flex-grow p-2 border border-[#D1D5DB] rounded-l-md bg-white text-[#6B7280] text-left truncate">
                      {fileName || t('recruitment.form.noFileSelected', " Aucun fichier sélectionné")}
                    </div>
                    <button 
                      type="button" 
                      onClick={() => triggerFileInput(mobileFileInputRef)}
                      className="bg-[#F9FAFB] text-[#374151] p-2 rounded-r-md border-t border-r border-b border-[#D1D5DB] hover:bg-gray-300"
                    >
                      {t('recruitment.form.chooseFile', "Choisir un fichier")}
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-left mb-1">{t('recruitment.form.message', "Message")}</label>
                <textarea
                  className="w-full p-2 border border-[#D1D5DB] rounded-md h-32 focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition duration-300"
              >
                {t('recruitment.form.submit', "Envoyer ma candidature")}
              </button>
            </form>
          </div>
        </div>

        <div className="hidden md:flex flex-col pt-10 flex-grow">
          <div className="w-full">
            <div className={`w-full ${isTablet ? 'flex flex-col items-center' : 'flex flex-row justify-between items-start'}`}>
              <div className={`${isTablet ? 'max-w-2xl text-center mb-8' : 'max-w-[35rem] text-left pl-14'} space-y-6`}>
                <div>
                  <h1 className="text-3xl font-extrabold text-[#000000] mb-4">
                    {t('recruitment.title', "SOLWAY Recrute")}<br/>
                    {t('recruitment.subtitle', "Déposez votre candidature")}
                  </h1>
                  <p className={`text-medium text-[#000000] ${isTablet ? 'mx-auto' : 'max-w-xl'}`}>
                    {t('recruitment.quote1Part1', "Formez suffisamment bien les gens pour qu'ils puissent partir")}
                  </p>
                  <p>{t('recruitment.quote1Part2', "Traitez-les suffisamment bien pour qu'ils ne veuillent pas partir.")}</p>
                </div>
              </div>
              <div className={`${isTablet ? 'w-full max-w-lg' : 'w-1/2 pl-[4rem]'} flex items-center ${isTablet ? 'justify-center' : ''}`}>
                <form className="w-full max-w-lg mb-6 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <FormLabel>{t('recruitment.form.lastName', "Nom (requis)")}</FormLabel>
                      <input 
                        type="text" 
                        className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]" 
                        required 
                      />
                    </div>
                    <div>
                      <FormLabel>{t('recruitment.form.firstName', "Prénom (requis)")}</FormLabel>
                      <input 
                        type="text" 
                        className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]" 
                        required 
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <FormLabel>{t('recruitment.form.email', "Email (requis)")}</FormLabel>
                    <input 
                      type="email" 
                      className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]" 
                      required 
                    />
                  </div>
                  <div className="mb-4">
                    <FormLabel>{t('recruitment.form.position', "Poste (requis)")}</FormLabel>
                    <input 
                      type="text" 
                      className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]" 
                      required 
                    />
                  </div>
                  <div className="mb-4">
                    <FormLabel>{t('recruitment.form.experienceLevel', "Niveau d'expérience : (requis)")}</FormLabel>
                    <select 
                      className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB] text-[#6B7280]" 
                      required
                    >
                      <option value="">{t('recruitment.form.selectLevel', "Sélectionnez votre niveau")}</option>
                      <option value="etudiant">{t('recruitment.form.student', "Étudiant")}</option>
                      <option value="stage">{t('recruitment.form.internship', "Stage")}</option>
                      <option value="junior">{t('recruitment.form.junior', "Junior (0-2 ans)")}</option>
                      <option value="intermediaire">{t('recruitment.form.intermediate', "Intermédiaire (3-5 ans)")}</option>
                      <option value="senior">{t('recruitment.form.senior', "Senior (5+ ans)")}</option>
                      <option value="expert">{t('recruitment.form.expert', "Expert")}</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <FormLabel>{t('recruitment.form.resume', "Veuillez joindre votre CV (requis)")}</FormLabel>
                    <div className="flex items-center">
                      <input 
                        ref={fileInputRef}
                        type="file" 
                        accept=".pdf,.doc,.docx"
                        className="hidden" 
                        onChange={handleFileChange}
                        required
                      />
                      <div className="w-full flex items-center">
                        <div className="flex-grow p-2 border border-[#D1D5DB] rounded-l-md bg-white text-[#6B7280] truncate">
                          {fileName || t('recruitment.form.noFileSelected', " Aucun fichier sélectionné")}
                        </div>
                        <button 
                          type="button" 
                          onClick={() => triggerFileInput(fileInputRef)}
                          className="bg-[#F9FAFB] text-[#374151] p-2 rounded-r-md border-t border-r border-b border-[#D1D5DB] hover:bg-gray-300"
                        >
                          {t('recruitment.form.chooseFile', "Choisir un fichier")}
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <FormLabel>{t('recruitment.form.message', "Message")}</FormLabel>
                    <textarea 
                      className="w-full p-2 border border-[#D1D5DB] rounded-md h-32 focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]" 
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-52 bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition duration-300"
                  >
                    {t('recruitment.form.submit', "Envoyer ma candidature")}
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