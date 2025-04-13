import Navbar from '../components/LandingPage/Navbar';
import ActivityShowcase from '../components/LandingPage/ActivityShowcase';
import ClientPartners from '../components/LandingPage/ClientPartners';
import SolutionsShowcase from '../components/LandingPage/SolutionsShowcase';
import SolwayRecruitment from '../components/LandingPage/SolwayRecruitment';
import InnovationOptions from '../components/LandingPage/InnovationOptions';
import Footer from '../components/LandingPage/Footer';
import CookieConsent from 'react-cookie-consent';
import { CookiesProvider } from 'react-cookie';
import { X } from 'lucide-react';
import { useState, useEffect } from 'react';

function LandingPage() {
  const [showCookieBar, setShowCookieBar] = useState(true);
  
  useEffect(() => {
    
    const cookieExists = document.cookie.split(';').some(item => item.trim().startsWith('solway-cookie-consent='));
    if (!cookieExists) {
      setShowCookieBar(true);
    }
  }, []);
  

  const acceptCookies = () => {
   
    const date = new Date();
    date.setTime(date.getTime() + (150 * 24 * 60 * 60 * 1000));
    document.cookie = `solway-cookie-consent=true; expires=${date.toUTCString()}; path=/`;
    console.log("Cookies acceptés!");
    setShowCookieBar(false);
  };

  const declineCookies = () => {
   
    const date = new Date();
    date.setTime(date.getTime() + (150 * 24 * 60 * 60 * 1000));
    document.cookie = `solway-cookie-consent=false; expires=${date.toUTCString()}; path=/`;
    console.log("Cookies refusés!");
    setShowCookieBar(false);
  };
  

  const closeCookieBar = () => {
    setShowCookieBar(false);
  };

  return (
    <CookiesProvider>
      <div>
        <Navbar />
        <ActivityShowcase />
        <InnovationOptions />
        <SolutionsShowcase />
        <ClientPartners />
        <SolwayRecruitment />
        <Footer />
        
        {showCookieBar && (
          <div 
            className="fixed bottom-0 left-0 right-0 bg-black text-white py-4 px-6 lg:px-24 flex flex-col md:flex-row items-center justify-center "
            style={{ zIndex: 9999 }}
          >
            <div className="flex-1 text-center md:text-left mb-3 md:mb-0">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{" "}
              <a href="/politique-de-confidentialite" className="text-yellow-300 hover:underline">
                Learn more
              </a>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={declineCookies}
                className="bg-red-600 text-white px-5 py-2 rounded-lg text-base"
              >
                Decline
              </button>
              
              <button
                onClick={acceptCookies}
                className="bg-white text-black px-5 py-2 rounded-lg text-base"
              >
                Accept
              </button>
              
              <div onClick={closeCookieBar} className="cursor-pointer ml-2 px-3">
                <X size={28} color="#ffffff" />
              </div>
            </div>
          </div>
        )}
      </div>
    </CookiesProvider>
  );
}

export default LandingPage;