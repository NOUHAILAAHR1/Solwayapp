import React, { useState, useEffect, useRef } from "react";

const Hero  = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);
  const mobileFileInputRef = useRef(null);
  
  const isTablet = windowWidth >= 768 && windowWidth <= 1024;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        <div className="md:hidden w-full flex flex-col items-center text-center pt-6">
          <h1 className="text-3xl font-extrabold text-[#000000] p-6">SOLWAY <br/> Nos Missions <br/> Déposez votre candidature</h1>
          <p className="text-md max-w-xs text-[#000000]">
            Pour les missions à pourvoir chez nos clients
          </p>

          <div className="w-full px-4 pt-6">
            <form className="w-full bg-white p-4 rounded-lg shadow-lg mb-8">
              <div className="mb-4">
                <div className="mb-2">
                  <label className="block text-left mb-1">Nom (requis)</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB] text-[#030712]"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-left mb-1">Prénom (requis)</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB] text-[#030712]"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">Email (requis)</label>
                <input
                  type="email"
                  className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB] text-[#030712]"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">Mission – Voir notre page LinkedIn (requis)</label>
                <select
                  className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB] text-[#030712]"
                  required
                >
                  <option value="">—Veuillez choisir une option—</option>
                  <option value="developpeur-fullstack">Développeur Full Stack</option>
                  <option value="developpeur-frontend">Développeur Frontend</option>
                  <option value="developpeur-backend">Développeur Backend</option>
                  <option value="admin-systeme">Administrateur Système</option>
                  <option value="admin-reseaux">Administrateur Réseaux</option>
                  <option value="data-analyst">Data Analyst</option>
                  <option value="data-scientist">Data Scientist</option>
                  <option value="chef-projet">Chef de Projet</option>
                  <option value="scrum-master">Scrum Master</option>
                  <option value="product-owner">Product Owner</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">Niveau d'expérience : (requis)</label>
                <select
                  className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB] text-[#030712]"
                  required
                >
                  <option value="">—Veuillez choisir une option—</option>
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
                  className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB] text-[#030712]"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">Disponible à partir de (requis)</label>
                <input
                  type="date"
                  className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB] text-[#030712]"
                  placeholder="mm/dd/yyyy"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">Veuillez joindre votre CV (requis)</label>
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
                      {fileName || " Aucun fichier sélectionné"}
                    </div>
                    <button 
                      type="button" 
                      onClick={() => triggerFileInput(mobileFileInputRef)}
                      className="bg-[#F9FAFB] text-[#374151] p-2 rounded-r-md border-t border-r border-b border-[#D1D5DB] hover:bg-gray-300"
                    >
                      Choisir un fichier
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-left mb-1">Message</label>
                <textarea
                  className="w-full p-2 border border-[#D1D5DB] rounded-md h-32 focus:outline-none focus:ring-1 focus:ring-[#D1D5DB] text-[#030712]"
                />
              </div>
              <div className="flex justify-start">
                <button
                  type="submit"
                  className="w-52 bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition duration-300"
                >
                  Envoyer ma candidature
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="hidden md:flex flex-col pt-10 flex-grow">
          <div className="w-full">
            <div className={`w-full ${isTablet ? 'flex flex-col items-center' : 'flex flex-row justify-between items-start'}`}>
              <div className={`${isTablet ? 'max-w-2xl text-center mb-8' : 'max-w-[35rem] text-left pl-14'} space-y-6`}>
                <div>
                  <h1 className="text-3xl font-extrabold text-[#000000] mb-4">
                    SOLWAY <br/> Nos Missions <br/> Déposez votre candidature
                  </h1>
                  <p className={`text-medium text-[#000000] ${isTablet ? 'mx-auto' : 'max-w-xl'}`}>
                    Pour les missions à pourvoir chez nos clients
                  </p>
                </div>
              </div>
              <div className={`${isTablet ? 'w-full max-w-lg' : 'w-1/2 pl-[4rem]'} flex items-center ${isTablet ? 'justify-center' : ''}`}>
                <form className="w-full max-w-lg mb-6 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <FormLabel>Nom (requis)</FormLabel>
                      <input 
                        type="text" 
                        className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB] text-[#030712]" 
                        required 
                      />
                    </div>
                    <div>
                      <FormLabel>Prénom (requis)</FormLabel>
                      <input 
                        type="text" 
                        className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB] text-[#030712]" 
                        required 
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <FormLabel>Email(requis)</FormLabel>
                    <input 
                      type="text" 
                      className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB] text-[#030712]" 
                      required 
                    />
                  </div>
                  <div className="mb-4">
                    <FormLabel>Mission – Voir notre page LinkedIn (requis)</FormLabel>
                    <select 
                      className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB] text-[#030712]" 
                      required
                    >
                      <option value="">—Veuillez choisir une option—</option>
                      <option value="developpeur-fullstack">Développeur Full Stack</option>
                      <option value="developpeur-frontend">Développeur Frontend</option>
                      <option value="developpeur-backend">Développeur Backend</option>
                      <option value="admin-systeme">Administrateur Système</option>
                      <option value="admin-reseaux">Administrateur Réseaux</option>
                      <option value="data-analyst">Data Analyst</option>
                      <option value="data-scientist">Data Scientist</option>
                      <option value="chef-projet">Chef de Projet</option>
                      <option value="scrum-master">Scrum Master</option>
                      <option value="product-owner">Product Owner</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <FormLabel>Niveau d'expérience : (requis)</FormLabel>
                    <select 
                      className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB] text-[#030712]" 
                      required
                    >
                      <option value="">—Veuillez choisir une option—</option>
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
                      className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB] text-[#030712]"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <FormLabel>Disponible à partir de (requis)</FormLabel>
                    <input
                      type="date"
                      className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB] text-[#030712]"
                      placeholder="mm/dd/yyyy"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <FormLabel>Veuillez joindre votre CV (requis)</FormLabel>
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
                          {fileName || " Aucun fichier sélectionné"}
                        </div>
                        <button 
                          type="button" 
                          onClick={() => triggerFileInput(fileInputRef)}
                          className="bg-[#F9FAFB] text-[#374151] p-2 rounded-r-md border-t border-r border-b border-[#D1D5DB] hover:bg-gray-300"
                        >
                          Choisir un fichier
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <FormLabel>Message</FormLabel>
                    <textarea 
                      className="w-full p-2 border border-[#D1D5DB] rounded-md h-32 focus:outline-none focus:ring-1 focus:ring-[#D1D5DB] text-[#030712]" 
                    />
                  </div>
                  <div className="flex">
                    <button 
                      type="submit" 
                      className="w-52 bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition duration-300"
                    >
                      Envoyer ma candidature
                    </button>
                  </div>
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