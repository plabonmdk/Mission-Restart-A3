import React from "react";
import appsData from "../data/appsData"; 
import ster from "../assets/icon-ratings.png"

const AppCart = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
      {appsData.map((app) => (
        <div
          key={app.id}
          className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
        >
          {/* App Image */}
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-48 object-cover"
          />

          {/* App Info */}
          <div className="p-4">
            <h2 className="font-bold text-lg mb-1">{app.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{app.companyName}</p>
            <p className="text-sm text-gray-600 mb-2">{app.description}</p>

            {/* App Stats */}
            <div className="flex justify-between text-sm text-gray-700 mb-2">
              <span>Size: {app.size} MB</span>
              <span>Downloads: {app.downloads.toLocaleString()}</span>
            </div>

            {/* Rating */}
            <div className="flex items-center">
              <div className="flex mr-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={i < Math.round(app.ratingAvg) ? "text-yellow-500" : "text-gray-300"}>
                    <img src={ster} alt="" />
                  </span>
                ))}
              </div>
              <span className="text-gray-700">{app.ratingAvg.toFixed(1)}</span>
            </div>

            {/* Reviews */}
            <p className="text-sm text-gray-500 mt-1">{app.reviews} reviews</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppCart;