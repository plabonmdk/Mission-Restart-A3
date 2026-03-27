import React from "react";
import { Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./component/navbar";
import Home from "./pages/Home";
import AllApps from "./pages/AllApps";
import AppDetails from "./pages/AppDetails";
import MyInstallation from "./pages/MyInstallation";

import ErrorPage from "./pages/ErrorPage";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Navbar />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<AllApps />} />
        <Route path="/apps/:id" element={<AppDetails />} />
        <Route path="/installation" element={<MyInstallation />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;