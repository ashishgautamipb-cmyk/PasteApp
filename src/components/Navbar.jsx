import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer">
          Gautam's PasteApp
        </h1>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-lg font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-all duration-300 px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-purple-600 text-white shadow-lg"
                  : "text-white hover:text-white hover:bg-slate-800"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/pastes"
            className={({ isActive }) =>
              `transition-all duration-300 px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-purple-600 text-white shadow-lg"
                  : "text-gray-300 hover:text-white hover:bg-slate-800"
              }`
            }
          >
            My Pastes
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;