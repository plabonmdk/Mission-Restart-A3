import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import {
  FaHome,
  FaMobileAlt,
  FaDownload,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "flex items-center gap-1 font-semibold border-b-2 border-[#632EE3] text-[#632EE3]"
      : "flex items-center gap-1 text-gray-600 hover:text-[#632EE3]";

  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"
        >
          <img src={Logo} alt="logo" className="w-8 h-8" />
          HERO.IO
        </Link>

        
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={navLinkClass}>
            <FaHome /> Home
          </NavLink>

          <NavLink to="/apps" className={navLinkClass}>
            <FaMobileAlt /> Apps
          </NavLink>

          <NavLink to="/installation" className={navLinkClass}>
            <FaDownload /> Installation
          </NavLink>
        </div>

        
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
        >
          <BsGithub /> Contribution
        </a>

        
        <div
          className="md:hidden text-2xl cursor-pointer text-[#632EE3]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      
      <div
        className={`md:hidden px-4 pb-4 flex flex-col gap-4 transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <NavLink to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-gray-600 hover:text-[#632EE3]">
          <FaHome /> Home
        </NavLink>

        <NavLink to="/apps" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-gray-600 hover:text-[#632EE3]">
          <FaMobileAlt /> Apps
        </NavLink>

        <NavLink to="/installation" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-gray-600 hover:text-[#632EE3]">
          <FaDownload /> Installation
        </NavLink>

        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-lg"
        >
          <BsGithub /> Contribution
        </a>
      </div>
    </div>
  );
};

export default Navbar;