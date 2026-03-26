import React from "react";
import error from "../assets/error-404.png"
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      
     
      <img
        src={error}
        alt="Error"
        className="w-full max-w-md rounded-xl mb-6 shadow-lg"
      />

     
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold text-gray-800">Oops! Something went wrong.</h1>
        <p className="text-gray-600">
          The page you are looking for might be removed, had its name changed, or is temporarily unavailable.
        </p>
        <p className="text-gray-500">Please try again or go back to the home page.</p>

       
        <a
          href="/"
          className="mt-4 inline-block px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;