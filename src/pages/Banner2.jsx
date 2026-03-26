import React from "react";
import BannerImage from "../assets/banner.png";

const Banner2 = () => {
  return (
    <div className="px-5 py-10 text-center min-h-screen bg-gray-50 flex flex-col items-center justify-start">

      {/* Banner Image */}
      <img
        src={BannerImage}
        alt="Banner"
        className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl rounded-2xl mb-8 sm:mb-12"
      />

      {/* Gradient Stats Section */}
      <div className="w-full max-w-6xl p-6 sm:p-8 md:p-12 rounded-3xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white shadow-xl -mt-10">

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 sm:mb-10 md:mb-12">
          Trusted by Millions, Built for You
        </h2>

        {/* Statistics */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-12">

          {/* Card 1 */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg w-full sm:w-56 md:w-60 bg-white/20 backdrop-blur-md hover:scale-105 transform transition duration-300">
            <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold">29.6M</p>
            <p className="mt-2 text-lg sm:text-xl md:text-2xl font-semibold">Total Downloads</p>
            <p className="mt-1 text-green-200 text-sm md:text-base">21% more than last month</p>
          </div>

          {/* Card 2 */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg w-full sm:w-56 md:w-60 bg-white/20 backdrop-blur-md hover:scale-105 transform transition duration-300">
            <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold">906K</p>
            <p className="mt-2 text-lg sm:text-xl md:text-2xl font-semibold">Total Reviews</p>
            <p className="mt-1 text-green-200 text-sm md:text-base">46% more than last month</p>
          </div>

          {/* Card 3 */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg w-full sm:w-56 md:w-60 bg-white/20 backdrop-blur-md hover:scale-105 transform transition duration-300">
            <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold">132+</p>
            <p className="mt-2 text-lg sm:text-xl md:text-2xl font-semibold">Active Apps</p>
            <p className="mt-1 text-green-200 text-sm md:text-base">31 more will launch</p>
          </div>

        </div>
      </div>
      
    </div>
  );
};

export default Banner2;