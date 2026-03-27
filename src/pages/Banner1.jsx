import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Banner1 = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 text-center">
     
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
        We Build <br />
        <span className="text-purple-600">Productive Apps</span>
      </h1>

      
      <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
        At <span className="font-semibold">HERO.IO</span>, we craft innovative
        apps designed to make everyday life simpler, smarter, and more exciting.
        Our goal is to turn your ideas into digital experiences that truly make
        an impact.
      </p>

      
      <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
        <a
          href="https://play.google.com/store/apps/details?id=your_app_id"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
         
          <FaGooglePlay className="text-2xl text-[#0BDF74]" />
          <span className="font-medium">Google Play</span>
        </a>
        
        <a
          href="https://apps.apple.com/app/idYOUR_APP_ID"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          <FaApple className="text-2xl text-black" />
          <span className="font-medium">App Store</span>
        </a>
      </div>
    </div>
  );
};

export default Banner1;
