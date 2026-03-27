import React, { useEffect, useState, useRef } from "react";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import { Link, Outlet } from "react-router-dom";


const Home = () => {
  const [apps, setApps] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const appsRef = useRef(null);

  useEffect(() => {
    fetch("/app.json")
      .then((res) => res.json())
      .then((data) => setApps(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Banner Section */}
      <Banner1 />
      <Banner2 />

      {/* Heading */}
      <div className="text-center my-6 px-4">
        <h1 className="text-3xl font-bold">Trending Apps</h1>
        <p className="text-gray-500 mt-2">
          Explore all trending apps on the market developed by us
        </p>
      </div>

      {/* Apps Grid */}
      <div
        ref={appsRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-6"
      >
        {apps.slice(0, visibleCount).map((app) => (
          <div
            key={app.id}
            className="p-4 rounded-2xl shadow-md hover:shadow-xl transition duration-300 bg-white"
          >
            {/* App Image */}
            <img
              src={app.image}
              alt={app.title}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />

            {/* Title */}
            <h2 className="text-lg font-semibold">{app.title}</h2>

            {/* Company */}
            <p className="text-gray-500 text-sm mb-2">
              {app.companyName}
            </p>

            {/* Rating & Downloads */}
            <div className="flex justify-between items-center mt-3">
              <span className="text-yellow-500 font-medium">
                ⭐ {app.ratingAvg}
              </span>

              <span className="text-sm text-gray-600">
                {typeof app.downloads === "number"
                  ? app.downloads.toLocaleString()
                  : app.downloads}{" "}
                downloads
              </span>
            </div>

            {/* Button */}
            <Link to={`/apps/${app.id}`}>
              <button className="mt-4 w-full bg-purple-600 hover:bg-purple-800 text-white py-2 rounded-lg font-semibold transition">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Show All Button */}
      {visibleCount < apps.length && (
        <div className="text-center mb-8">
          <Link
            to="/apps"
            className="px-6 py-2 bg-purple-600 hover:bg-purple-800 text-white rounded-lg transition"
          >
            Show All
          </Link>
        </div>
      )}

      {/* Nested Routes */}
      <Outlet />

      {/* Footer */}
      
    </div>
  );
};

export default Home;