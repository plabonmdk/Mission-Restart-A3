import React, { useEffect, useState, useRef } from "react";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import { Link, Outlet } from "react-router-dom";
import LoadingPage from "./LoadingPage";

const Home = () => {
  const [apps, setApps] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [loading, setLoading] = useState(true); 
  const appsRef = useRef(null);

  useEffect(() => {
    fetch("/app.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
        setLoading(false); 
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <Banner1 />
      <Banner2 />

      <div className="text-center my-6 px-4">
        <h1 className="text-3xl font-bold">Trending Apps</h1>
        <p className="text-gray-500 mt-2">
          Explore all trending apps on the market developed by us
        </p>
      </div>

      
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <LoadingPage></LoadingPage>
        </div>
      ) : (
        <>
          
          <div
            ref={appsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-6"
          >
            {apps.slice(0, visibleCount).map((app) => (
              <div
                key={app.id}
                className="p-4 rounded-2xl shadow-md hover:shadow-xl transition duration-300 bg-white"
              >
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />

                <h2 className="text-lg font-semibold">{app.title}</h2>

                <p className="text-gray-500 text-sm mb-2">
                  {app.companyName}
                </p>

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

                <Link to={`/apps/${app.id}`}>
                  <button className="mt-4 w-full bg-purple-600 hover:bg-purple-800 text-white py-2 rounded-lg font-semibold transition">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>

          
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
        </>
      )}

      <Outlet />
    </div>
  );
};

export default Home;