import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);

  useEffect(() => {
    fetch("/app.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === Number(id));
        setApp(found);
      });
  }, [id]);

  if (!app) return <div className="text-center mt-10">Loading...</div>;

  const maxRating = Math.max(...app.ratings.map((r) => r.count));

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex gap-6 items-center">
        <img
          src={app.image}
          alt={app.title}
          className="w-32 h-32 rounded-xl bg-white p-2 shadow"
        />

        <div className="flex-1">
          <h1 className="text-2xl font-bold">{app.title}</h1>
          <p className="text-blue-600 text-sm">Developed by {app.companyName}</p>

          {/* Stats */}
          <div className="flex gap-10 mt-4">
            <div>
              <p className="text-green-600 text-xl font-bold">⬇</p>
              <p className="font-bold">{app.downloads}</p>
              <p className="text-xs text-gray-500">Downloads</p>
            </div>

            <div>
              <p className="text-orange-500 text-xl">★</p>
              <p className="font-bold">{app.ratingAvg}</p>
              <p className="text-xs text-gray-500">Average Ratings</p>
            </div>

            <div>
              <p className="text-purple-500 text-xl">💬</p>
              <p className="font-bold">{app.reviews}</p>
              <p className="text-xs text-gray-500">Total Reviews</p>
            </div>
          </div>

          <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-md shadow">
            Install Now ({app.size} MB)
          </button>
        </div>
      </div>

      {/* Ratings */}
      <div className="mt-10">
        <h2 className="font-semibold mb-3">Ratings</h2>

        {app.ratings
          .slice()
          .reverse()
          .map((r, index) => (
            <div key={index} className="flex items-center gap-3 mb-3">
              <span className="w-12 text-sm text-gray-600">{r.name}</span>

              <div className="flex-1 bg-gray-200 h-3 rounded">
                <div
                  className="bg-orange-500 h-3 rounded"
                  style={{ width: `${(r.count / maxRating) * 100}%` }}
                ></div>
              </div>

              <span className="text-xs text-gray-600">{r.count}</span>
            </div>
          ))}
      </div>

      {/* Description */}
      <div className="mt-10">
        <h2 className="font-semibold mb-3">Description</h2>
        <p className="text-gray-600 text-sm leading-6">{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;