import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "../assets/logo.png"; 

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        
        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-3">
            <img src={Logo} alt="Logo" className="w-10 h-10 object-contain" />
            <span className="text-lg font-semibold">HERO.IO</span>
          </div>
          <p className="text-gray-400 text-sm">
            Your go-to app platform for the best apps and experiences.
          </p>
        </div>

       
        <div className="flex flex-col space-y-2 text-gray-400 text-sm">
          <span>📍 123 App Street, Dhaka, Bangladesh</span>
          <span>✉️ Plabonmdk@gmail.com</span>
          <span>📞 +880 1717448042</span>
        </div>

       
        <div className="flex flex-col space-y-3">
          <span className="font-semibold">Follow Us</span>
          <div className="flex space-x-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-blue-600 transition-colors" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-500 transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-blue-700 transition-colors" />
            </a>
          </div>
        </div>
      </div>

      
      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-gray-500 text-sm">
        © 2026 Plabon Chandro Modak. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;