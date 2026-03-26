import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllApps = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("/app.json")
      .then((res) => res.json())
      .then((data) => setApps(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-5 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">All Apps</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {apps.map((app) => (
          <div
            key={app.id}
            className="p-4 rounded-2xl shadow-md hover:shadow-xl transition duration-300 bg-white"
          >
            {/* Image */}
            <img
              src={app.image}
              alt={app.title}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />

            {/* Title & Company */}
            <h2 className="text-lg font-semibold">{app.title}</h2>
            <p className="text-gray-500 text-sm mb-2">{app.companyName}</p>

            {/* Rating & Downloads */}
            <div className="flex justify-between items-center mt-3">
              <span className="text-yellow-500 font-medium">
                ⭐ {app.ratingAvg}
              </span>
              <span className="text-sm text-gray-600">
                {app.downloads.toLocaleString()} downloads
              </span>
            </div>

            {/* View Details Button */}
            <Link to={`/apps/${app.id}`}>
              <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllApps;