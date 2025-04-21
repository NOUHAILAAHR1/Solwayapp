import React, { useState, useEffect } from 'react';
import Navbar from '../LandingPage/Navbar';
import Footer from '../LandingPage/Footer';
import { CookiesProvider } from 'react-cookie';
import { X } from 'lucide-react';

const LandingLayout = ({ children, footerBgColor = "#F9FAFB", theme = "yellow" }) => {
  const [showCookieBar, setShowCookieBar] = useState(false);
  
  useEffect(() => {
    const cookieDecisionExists = document.cookie.split(';').some(item => 
      item.trim().startsWith('solway-cookie-consent=')
    );

    if (!cookieDecisionExists) {
      setShowCookieBar(true);
    }
  }, []);
  
  const acceptCookies = () => {
    const date = new Date();
    date.setTime(date.getTime() + (150 * 24 * 60 * 60 * 1000));
    document.cookie = `solway-cookie-consent=true; expires=${date.toUTCString()}; path=/`;
    setShowCookieBar(false);
  };
  
  const declineCookies = () => {
    const date = new Date();
    date.setTime(date.getTime() + (150 * 24 * 60 * 60 * 1000));
    document.cookie = `solway-cookie-consent=false; expires=${date.toUTCString()}; path=/`;
    setShowCookieBar(false);
  };
  
  // Cette fonction ne fait que cacher temporairement la bannière
  const closeCookieBar = () => {
    setShowCookieBar(false);
  };

  return (
    <CookiesProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer bgColor={footerBgColor} theme={theme} />
        
        {showCookieBar && (
          <div
            className="fixed bottom-0 left-0 right-0 bg-black text-white py-4 px-6 lg:px-24 flex flex-col md:flex-row items-center justify-center"
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
};

export default LandingLayout;