import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  function submitReg(e) {
    e.preventDefault();

    if (name === "reacted" && pass === "2953") {
      const token = Math.random().toString(36).substring(2);
      localStorage.setItem("token", token);
      alert("Siz saytga muvaffaqiyatli kirdingiz");
      navigate("/home");
    } else {
      alert("Ism yoki parol xato");
    }
    setName("");
    setPass("");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-4">
      <form
        onSubmit={submitReg}
        className="w-full max-w-sm bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/30"
      >
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Ismingiz!"
          required
          type="text"
          value={name}
          className="w-full p-3 mb-4 rounded-xl bg-white/80 text-gray-800 placeholder-gray-500 outline-none shadow-md focus:bg-white focus:shadow-lg transition"
        />

        <input
          onChange={(e) => setPass(e.target.value)}
          placeholder="Parolingiz!"
          required
          type="password"
          value={pass}
          className="w-full p-3 mb-6 rounded-xl bg-white/80 text-gray-800 placeholder-gray-500 outline-none shadow-md focus:bg-white focus:shadow-lg transition"
        />

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-purple-600 text-white font-semibold shadow-lg hover:bg-purple-700 hover:shadow-xl transition active:scale-95"
        >
          Kirish
        </button>
      </form>
    </div>
  );
}

export default Register;
