import React from 'react';

import linkedinImg from "../../assets/img/linkdin.png";
import threadsImg from "../../assets/img/threads.png";
import facebookImg from "../../assets/img/facebook.png";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center bg-[#F9FAFB] items-center p-2">
      <div className="sapce-x-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="text-center max-w-[55rem] ipad-pro:max-w-[45rem] mx-auto">
            <p className="text-lg">
              Copyright © 2024 Solway | All Rights Reserved{' '}
              <a href="#" className="text-[#E0AC00]  underline hover:text-yellow-300">
                Terms of Service
              </a>{' '}
              |{' '}
              <a href="#" className="text-[#E0AC00]  underline hover:text-yellow-300">
                Privacy Policy
              </a>{' '}
              |{' '}
              <a href="#" className="text-[#E0AC00]  underline hover:text-yellow-300">
                Cookies Policy
              </a>{' '}
              |{' '}
              <a href="#" className="text-[#E0AC00]  underline hover:text-yellow-300">
                Contact Support
              </a>
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="hover:opacity-80">
              <img src={linkedinImg} alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a href="#" className="hover:opacity-80">
              <img src={threadsImg} alt="Threads" className="w-8 h-8" />
            </a>
            <a href="#" className="hover:opacity-80">
              <img src={facebookImg} alt="Facebook" className="w-8 h-8" />
            </a>
          </div>
          
          <div>
            <button className="border border-[#E0AC00]  text-[#E0AC00] px-4 py-2 rounded">
              English
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;