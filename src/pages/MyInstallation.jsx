import React, { useEffect, useState } from "react";
import NotFound from "./NotFound";

const MyInstallation = () => {
  const [apps, setApps] = useState([]);
  const [installedIds, setInstalledIds] = useState([]);

  useEffect(() => {
    // get installed ids
    const stored = JSON.parse(localStorage.getItem("apps")) || [];
    setInstalledIds(stored);

    // fetch all apps
    fetch("/app.json")
      .then((res) => res.json())
      .then((data) => {
        const installedApps = data.filter((app) =>
          stored.includes(String(app.id))
        );
        setApps(installedApps);
      });
  }, []);

  const handleRemove = (id) => {
    const updated = installedIds.filter((item) => item !== String(id));
    localStorage.setItem("apps", JSON.stringify(updated));
    setInstalledIds(updated);

    const updatedApps = apps.filter((app) => String(app.id) !== String(id));
    setApps(updatedApps);
  };

  if (apps.length === 0) {
    return (
      <NotFound></NotFound>
    );
  }

  return (
    <div className="max-w-5xl min-h-screen mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Installed Apps</h1>

      <div className="grid md:grid-cols-2 gap-5">
        {apps.map((app) => (
          <div
            key={app.id}
            className="flex items-center gap-4 p-4 bg-white rounded-xl shadow"
          >
            <img
              src={app.image}
              alt={app.title}
              className="w-16 h-16 rounded-lg"
            />

            <div className="flex-1">
              <h2 className="font-bold">{app.title}</h2>
              <p className="text-sm text-gray-500">{app.companyName}</p>
            </div>

            <button
              onClick={() => handleRemove(app.id)}
              className="px-4 py-1 bg-red-500 text-white rounded"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyInstallation;