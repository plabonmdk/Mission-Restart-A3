import React from "react";
import { BiErrorCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import notFount from "../assets/App-Error.png"

const NotFound = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] space-y-5 text-center px-4">
      <img src={notFount} alt="" />
      <h2 className="text-3xl font-bold text-gray-800">
        {message || "No App Found"}
      </h2>
      <p className="opacity-70 max-w-md">
        The app you are looking for does not exist or has been removed.
      </p>
      <Link
        to="/"
        className="mt-3 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;