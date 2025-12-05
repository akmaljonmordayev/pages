import React from "react";
import IT from "./images/It.jpg";
import IT2 from "./images/It2.avif";
import robot from "./images/roboto.jpg";

function About() {
  return (
    <>
      <main className="max-w-[1350px] m-auto flex flex-col justify-center gap-50px items-center">
        <section className="flex flex-wrap items-center gap-6 p-15 bg-gray-50 rounded-xl shadow-md m-10">
          <img
            src={IT}
            alt="IT News"
            className="w-full max-w-sm h-auto rounded-lg object-cover"
          />
          <div className="flex-1 min-w-[250px]">
            <h1 className="text-3xl text-gray-800 mb-4">
              So'nggi IT |{" "}
              <span className="text-blue-600">AI yangiliklari</span>
            </h1>
            <p className="text-gray-600 text-base leading-relaxed">
              OpenAI Neptune startapini sotib oldi — model-tayyorlashni
              kuchaytiradi. 7AI kiberxavfsizlik startapi $130 mln sarmoya oldi —
              xakerlikni aniqlashda AI ishlatiladi. Flex startapi $60 mln
              mablag‘ jalb qildi — moliyaviy va to‘lov infratuzilmasi. Global
              investorlar AI va startaplarga 39,6 mlrd $ sarmoya qo‘ydi.
            </p>
          </div>
        </section>
        <section className="flex flex-wrap items-center gap-6 p-15 bg-gray-50 rounded-xl shadow-md m-10">
          <div className="flex-1 min-w-[250px]">
            <h1 className="text-3xl text-gray-800 mb-4">
              So'nggi dasturchi |
              <span className="text-blue-600"> Startup ishlanmalari</span>
            </h1>
            <p className="text-gray-600 text-base leading-relaxed">
              Alpamayo‑R1 — Nvidia tomonidan chiqarilgan open-source AI dasturi:
              avtonom transport vositalari uchun “vision-language-action” modeli
              bo‘lib, mashina ko‘rgan ko‘chani “tilga” tarjima qiladi va harakat
              yo‘lini shunga ko‘ra rejalashtiradi.Google Antigravity — Google
              tomonidan 2025-yil noyabrida e’lon qilingan yangi AI-asosli kod
              muhiti (IDE). Dasturchilar “agent-first” paradigmasi bilan, ya’ni
              kod yozishni avtonom AI agentlarga topshirish orqali dastur
              yaratishni soddalashtirishi mumkin.EvoGit — 2025-yilda chiqarilgan
              ochiq kodli loyiha. Bu tizim Git asosida bir nechta “agent” —
              dasturchi agentlar yordamida umumiy kod bazasi ustida hamkorlikda
              ishlashga mo‘ljallangan. Loyiha veb-ilova yaratish yoki
              optimizatsiya muammolarini hal qilishda avtomat agentlar yordamida
              ishlashni ko‘zlaydi.
            </p>
          </div>
          <img
            src={IT2}
            alt="IT News"
            className="w-full max-w-sm h-auto rounded-lg object-cover "
          />
        </section>
        <section className="flex flex-wrap items-center gap-6 p-15 bg-gray-50 rounded-xl shadow-md m-10">
          <img
            src={robot}
            alt="IT News"
            className="w-full max-w-sm h-auto rounded-lg object-cover"
          />
          <div className="flex-1 min-w-[250px]">
            <h1 className="text-3xl text-gray-800 mb-5">
              Robototexnika sohasidagi
              <span className="text-blue-600">
                {" "}
                eng so‘nggi yangiliklar (qisqa)
              </span>
            </h1>
            <p className="text-gray-600 text-base leading-relaxed">
              Hyundai MobED — yangi avtonom mini-robot taqdim qilindi.
              To‘siqlarni chetlab o‘tadi va mustaqil harakatlanadi.Figure 03 —
              yangi avlod “umumiy maqsadli” humanoid robot. Uy, xizmat va
              sanoatda ishlashi mumkin.Laboratoriya robotlari — kimyo va bio-lab
              ishlarini to‘liq avtomatlashtiradigan robotlar joriy
              etilmoqda.Xitoy universitetlari — “Embodied Intelligence” (robot +
              AI) bo‘yicha yangi ta’lim yo‘nalishi ochmoqda.Sanoatda robotlar —
              2024–2025 yillarda dunyo bo‘yicha robotlardan foydalanish rekord
              darajaga yetdi.
            </p>
          </div>
        </section>
        <table className="min-w-[1280] border-collapse border border-gray-300 text-gray-700 m-10">
          <thead>
            <tr className="bg-gray-100 text-gray-800">
              <th className="border border-gray-300 px-6 py-4 text-left">
                Figure 03 (USA)
              </th>
              <th className="border border-gray-300 px-6 py-4 text-left">
                Tesla Optimus Gen-3
              </th>
              <th className="border border-gray-300 px-6 py-4 text-left">
                Hyundai MobED Pro
              </th>
              <th className="border border-gray-300 px-6 py-4 text-left">
                Agility Robotics – Digit 2.0
              </th>
              <th className="border border-gray-300 px-6 py-4 text-left">
                Unitree H1
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white hover:bg-gray-50">
              <td className="border border-gray-300 px-6 py-4">
                Inson shaklidagi umumiy maqsadli robot. Uy va sanoat ishlarini
                mustaqil bajaradi.
              </td>
              <td className="border border-gray-300 px-6 py-4">
                Murakkab motorika, aniq qo‘l harakatlari. Ombor va ishlab
                chiqarish ishlarini o‘zlashtiryapti
              </td>
              <td className="border border-gray-300 px-6 py-4">
                Kichik, mobil to‘rt g‘ildirakli robot platforma. Yetkazib
                berish, patrul, xizmat ko‘rsatish uchun
              </td>
              <td className="border border-gray-300 px-6 py-4">
                Ikki oyoqli logistika roboti. Omborxonada yuk ko‘tarish,
                tashish, saralash ishlarini qiladi
              </td>
              <td className="border border-gray-300 px-6 py-4">
                Juda tez yuradigan va yuguradigan humanoid robot. Sportcha
                harakatlar, sakrash, balans saqlashda kuchli
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  );
}

export default About;
