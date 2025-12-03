import React from "react";
function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 mt-16 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold text-white">AkmalDev</h2>
          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
            Professional React frontend developer pages — clean, modern, and
            powerful.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Navigation</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white transition">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-white transition">
              <a href="/about">About</a>
            </li>
            <li className="hover:text-white transition">
              <a href="/contact">Contact</a>
            </li>
            <li className="hover:text-white transition">
              <a href="/portfolio">Portfolio</a>
            </li>
            <li className="hover:text-white transition">
              <a href="/register">Register</a>
            </li>
            <li className="hover:text-white transition">
              <a href="/settings">Settings</a>
            </li>
            <li className="hover:text-white transition">
              <a href="/users">Users</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Me</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white transition">
              <a href="#">Instagram</a>
            </li>
            <li className="hover:text-white transition">
              <a href="#">YouTube</a>
            </li>
            <li className="hover:text-white transition">
              <a href="#">Telegram</a>
            </li>
            <li className="hover:text-white transition">
              <a href="#">GitHub</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} AkmalDev. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
