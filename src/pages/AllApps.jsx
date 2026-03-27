import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";
import LoadingPage from "./LoadingPage";

const AllApps = () => {
  const [apps, setApps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true); 

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

  const filteredApps = apps.filter(
    (app) =>
      app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.companyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-5 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">All Apps</h1>

      
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search apps..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <LoadingPage></LoadingPage>
        </div>
      ) : filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredApps.map((app) => (
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
              <p className="text-gray-500 text-sm mb-2">{app.companyName}</p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-yellow-500 font-medium">
                  ⭐ {app.ratingAvg}
                </span>
                <span className="text-sm text-gray-600">
                  {app.downloads.toLocaleString()} downloads
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
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default AllApps;