import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        
        <Link to="/" className="text-2xl font-bold text-blue-600">
          AppStore
        </Link>

        
        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/apps"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }
          >
            Apps
          </NavLink>

          <NavLink
            to="/installation"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }
          >
            Installation
          </NavLink>
        </div>

        
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Contribution
        </a>
      </div>
    </div>
  );
};

export default Navbar;