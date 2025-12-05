import React from "react";
import { NavLink } from "react-router-dom";

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Loyiha 1",
      desc: "React yordamida qilingan oddiy web loyiha.",
    },
    {
      id: 2,
      title: "Loyiha 2",
      desc: "Tailwind CSS bilan chiroyli UI ishlangan.",
    },
    {
      id: 3,
      title: "Loyiha 3",
      desc: "Backend API bilan bog‘langan mini app.",
    },
    {
      id: 4,
      title: "Loyiha 4",
      desc: "To‘liq responsive landing page.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">

      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Portfolio
      </h1>

      <p className="text-gray-600 text-lg max-w-2xl text-center mb-10">
        Bu sahifada mening qilgan loyihalarim ro‘yxati joylashgan. Har bir karta ustiga bosganda animatsiya ishlaydi.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">

        {projects.map((p) => (
          <div
            key={p.id}
            className="bg-white shadow-md rounded-xl p-6 border hover:shadow-xl transition hover:-translate-y-1"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-3">{p.title}</h2>
            <p className="text-gray-600 mb-4">{p.desc}</p>

            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Ko‘rish
            </button>
          </div>
        ))}

      </div>

      <NavLink
        to="/"
        className="mt-12 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-black transition"
      >
        Bosh sahifaga qaytish
      </NavLink>
    </div>
  );
}

export default Portfolio;