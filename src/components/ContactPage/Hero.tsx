import React from "react";

const Hero = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const isTablet = windowWidth >= 768 && windowWidth <= 1024;

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const FormLabel = ({ children }) => (
    <span className="text-sm text-[#374151] block mb-1">{children}</span>
  );

  return (
    <>
      <div className="flex flex-col space-y-9 pt-12">

        <div className="md:hidden w-full flex flex-col items-center text-center pt-6">
          <div className="w-full">
            <h1 className="text-3xl font-extrabold text-[#000000] pt-5">N'hésitez pas à nous contacter pour plus d'informations</h1>
            <p className="text-md text-[#000000] p-4">
              Nous sommes à votre disposition pour répondre à vos questions et vous fournir les informations nécessaires à la réussite de vos projets.
            </p>
          </div>

          <div className="w-full px-4 pt-6">
            <form className="w-full bg-white p-4 rounded-lg shadow-lg">
              <div className="mb-4">
                <div className="mb-2">
                  <label className="block text-left mb-1">Nom (requis)</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-left mb-1">Prénom (requis)</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">Email (requis)</label>
                <input
                  type="email"
                  className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">Téléphone</label>
                <input
                  type="tel"
                  className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">Fonction</label>
                <input
                  type="text"
                  className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">Société</label>
                <input
                  type="text"
                  className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">Objet</label>
                <input
                  type="text"
                  className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">Votre Message</label>
                <textarea
                  className="w-full p-2 border border-[#D1D5DB] rounded-md h-32 focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition duration-300"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>


        <div className="hidden md:flex flex-col pt-10 flex-grow">
          <div className="w-full">
            <div className={`w-full ${isTablet ? 'flex flex-col items-center' : 'flex flex-row justify-between items-start'}`}>
             
              <div className={`
                ${isTablet ? 'max-w-lg text-center mb-8' : 'max-w-lg text-left pl-14'} 
                space-y-6
              `}>
                <div>
                  <h1 className="text-3xl font-extrabold pt-4 text-[#000000] mb-4">
                    N'hésitez pas à nous contacter pour plus d'informations
                  </h1>
                  <p className="text-medium text-[#000000]">
                    Nous sommes à votre disposition pour répondre à vos questions et vous fournir les informations nécessaires à la réussite de vos projets.
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
                        className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]" 
                        required 
                      />
                    </div>
                    <div>
                      <FormLabel>Prénom (requis)</FormLabel>
                      <input 
                        type="text" 
                        className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]" 
                        required 
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <FormLabel>Email (requis)</FormLabel>
                    <input 
                      type="email" 
                      className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]" 
                      required 
                    />
                  </div>
                  <div className="mb-4">
                    <FormLabel>Téléphone</FormLabel>
                    <input 
                      type="tel" 
                      className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]" 
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <FormLabel>Fonction</FormLabel>
                      <input 
                        type="text" 
                        className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]" 
                      />
                    </div>
                    <div>
                      <FormLabel>Société</FormLabel>
                      <input 
                        type="text" 
                        className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]" 
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <FormLabel>Objet</FormLabel>
                    <input 
                      type="text" 
                      className="w-full p-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]" 
                    />
                  </div>
                  <div className="mb-4">
                    <FormLabel>Votre Message</FormLabel>
                    <textarea 
                      className="w-full p-2 border border-[#D1D5DB] rounded-md h-32 focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]" 
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-32 bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition duration-300"
                  >
                    Envoyer
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