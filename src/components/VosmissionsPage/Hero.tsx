import React, { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [fileName, setFileName] = useState("No file selected");
  const isTablet = windowWidth >= 768 && windowWidth <= 1024;
  const fileInputRef = useRef(null);
  const mobileFileInputRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("No file selected");
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
     <div className="flex flex-col space-y-9 pt-12">
        <div className="md:hidden w-full flex flex-col items-center text-center pt-6">
          <h1 className="text-3xl font-extrabold text-[#000000] pt-5">SOLWAY <br/>Vos Missions</h1>
          <p className="text-md max-w-xs text-[#000000] p-4">
            Déposez vos propositions de missions,<br/>Nous nous occupons du reste
          </p>

          <div className="w-full px-4 pt-6">
            <form className="w-full bg-white p-4 rounded-lg shadow-lg">
              <div className="mb-4">
                <label className="block text-left mb-1">Nom (requis)</label>
                <input
                  type="text"
                  className={inputClass}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">Prénom (requis)</label>
                <input
                  type="text"
                  className={inputClass}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">Société (requis)</label>
                <input
                  type="text"
                  className={inputClass}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">Email (requis)</label>
                <input
                  type="email"
                  className={inputClass}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">Votre mission</label>
                <input
                  type="text"
                  className={inputClass}
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">Niveau d'expérience :</label>
                <select
                  className={selectClass}
                >
                  <option value="">—Please choose an option—</option>
                  <option value="etudiant">Étudiant</option>
                  <option value="stage">Stage</option>
                  <option value="junior">Junior (0-2 ans)</option>
                  <option value="intermediaire">Intermédiaire (3-5 ans)</option>
                  <option value="senior">Senior (5+ ans)</option>
                  <option value="expert">Expert</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">TJM (requis)</label>
                <input
                  type="text"
                  className={inputClass}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">À pourvoir à partir de</label>
                <input
                  type="date"
                  className={inputClass}
                  placeholder="mm/dd/yyyy"
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">Durée de la mission en mois</label>
                <input
                  type="number"
                  className={inputClass}
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">Localisation</label>
                <input
                  type="text"
                  className={inputClass}
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">Mode de travail</label>
                <select
                  className={selectClass}
                >
                  <option value="">—Please choose an option—</option>
                  <option value="presentiel">Présentiel</option>
                  <option value="remote">Remote</option>
                  <option value="hybride">Hybride</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">Fiche de poste</label>
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
                      className="bg-white text-gray-700 p-2 rounded-r-md border border-gray-300 hover:bg-gray-300 transition duration-200 text-sm h-9"
                    >
                      Choose file
                    </button>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">Message</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md h-24 text-gray-800 text-sm hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition duration-300"
              >
                Envoyer ma candidature
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
                    SOLWAY <br/>Vos Missions
                  </h1>
                  <p className={`text-medium text-[#000000] ${isTablet ? 'mx-auto' : 'max-w-xl'}`}>
                    Déposez vos propositions de missions,<br/>Nous nous occupons du reste
                  </p>
                </div>
              </div>
              <div className={`${isTablet ? 'w-full max-w-lg' : 'w-1/2 pl-24'} flex items-center ${isTablet ? 'justify-center' : ''}`}>
                <form className="w-full max-w-lg mb-6 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <FormLabel>Nom (requis)</FormLabel>
                      <input 
                        type="text" 
                        className={inputClass}
                        required 
                      />
                    </div>
                    <div>
                      <FormLabel>Prénom (requis)</FormLabel>
                      <input 
                        type="text" 
                        className={inputClass}
                        required 
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <FormLabel>Société (requis)</FormLabel>
                      <input 
                        type="text" 
                        className={inputClass}
                        required 
                      />
                    </div>
                    <div>
                      <FormLabel>Email (requis)</FormLabel>
                      <input 
                        type="email" 
                        className={inputClass}
                        required 
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <FormLabel>Votre mission</FormLabel>
                    <input 
                      type="text" 
                      className={inputClass}
                    />
                  </div>
                  <div className="mb-4">
                    <FormLabel>Niveau d'expérience :</FormLabel>
                    <select 
                      className={selectClass}
                    >
                      <option value="">—Please choose an option—</option>
                      <option value="etudiant">Étudiant</option>
                      <option value="stage">Stage</option>
                      <option value="junior">Junior (0-2 ans)</option>
                      <option value="intermediaire">Intermédiaire (3-5 ans)</option>
                      <option value="senior">Senior (5+ ans)</option>
                      <option value="expert">Expert</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <FormLabel>TJM (requis)</FormLabel>
                    <input
                      type="text"
                      className={inputClass}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <FormLabel>À pourvoir à partir de</FormLabel>
                    <input
                      type="date"
                      className={inputClass}
                      placeholder="mm/dd/yyyy"
                    />
                  </div>
                  <div className="mb-4">
                    <FormLabel>Durée de la mission en mois</FormLabel>
                    <input 
                      type="number" 
                      className={inputClass}
                    />
                  </div>
                  <div className="mb-4">
                    <FormLabel>Localisation</FormLabel>
                    <input 
                      type="text" 
                      className={inputClass}
                    />
                  </div>
                  <div className="mb-4">
                    <FormLabel>Mode de travail</FormLabel>
                    <select 
                      className={selectClass}
                    >
                      <option value="">—Please choose an option—</option>
                      <option value="presentiel">Présentiel</option>
                      <option value="remote">Remote</option>
                      <option value="hybride">Hybride</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <FormLabel>Fiche de poste</FormLabel>
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
                          Choose file
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <FormLabel>Message</FormLabel>
                    <textarea 
                      className="w-full p-2 border border-gray-300 rounded-md h-24 text-gray-800 text-sm hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-400" 
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-52 bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition duration-300 text-sm h-9"
                  >
                    Envoyer ma candidature
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