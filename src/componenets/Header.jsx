import { NavLink } from "react-router-dom";
import React from "react";
function Header() {
  const links = [
    { to: "/home", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/settings", label: "Settings" },
    { to: "/users", label: "Users" },
  ];

  return (
    <header className="w-full bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-gray-800">
          AkmalDev
        </h1>

        <nav>
          <ul className="flex items-center gap-6">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `text-base font-semibold transition duration-300 px-3 py-2 rounded-xl ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-gray-600 hover:text-blue-600 hover:bg-gray-100"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
