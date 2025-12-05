import React from "react";
import laptop from "../pablic/laptop.png";
import frontend from "../pablic/frontend.png"
import BeKind from "../pablic/BeKind.png"
import Design from "../pablic/Design.png"

export default function Home() {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a1a3c] via-[#0f2d63] to-[#0a1a3c] px-6 py-10">
      <div className="max-w-6xl w-full bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-10 p-10 border border-white/20">
  
        <div className="flex flex-col justify-center text-white space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Welcome to <span className="text-blue-300">AkmalDev</span>
          </h1>

          <p className="text-lg md:text-xl text-blue-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ut
            cumque doloribus, quo sunt odio necessitatibus dolores dolorum
            corporis consequatur corrupti fugiat nam, ipsa minima commodi
            officia tempora enim. Sequi!
          </p>

          <button className="mt-4 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 w-fit">
            Back
          </button>
        </div>

        <div className="flex items-center justify-center">
          <img
            src={laptop}
            alt="Laptop"
            className="w-[450px] md:w-[550px] lg:w-[650px] drop-shadow-2xl transition-transform duration-300 hover:scale-105"
          />
        </div>


      </div>
    </div>
    
    <div className="section2 bg-[#0f2d63] py-20 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

    <div className="box bg-white/10 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center text-center text-white shadow-lg transform transition duration-500 hover:scale-105 hover:-translate-y-2">
      <img src={frontend} alt="Front End" className="w-32 h-32 mb-4 rounded-full shadow-md" />
      <h2 className="text-2xl font-bold mb-2">Front End</h2>
      <p className="text-blue-200 mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, doloribus.</p>
      <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-xl font-semibold shadow-md transition duration-300">
        Sign up for a course
      </button>
    </div>

    <div className="box bg-white/10 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center text-center text-white shadow-lg transform transition duration-500 hover:scale-105 hover:-translate-y-2">
      <img src={BeKind} alt="BeKind" className="w-32 h-32 mb-4 rounded-full shadow-md" />
      <h2 className="text-2xl font-bold mb-2">BeKind</h2>
      <p className="text-blue-200 mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, doloribus.</p>
      <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-xl font-semibold shadow-md transition duration-300">
        Sign up for a course
      </button>
    </div>

    <div className="box bg-white/10 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center text-center text-white shadow-lg transform transition duration-500 hover:scale-105 hover:-translate-y-2">
      <img src={Design} alt="Design" className="w-32 h-32 mb-4 rounded-full shadow-md" />
      <h2 className="text-2xl font-bold mb-2">Design</h2>
      <p className="text-blue-200 mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, doloribus.</p>
      <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-xl font-semibold shadow-md transition duration-300">
        Sign up for a course
      </button>
    </div>

  </div>
</div>

    </>
  );
}
