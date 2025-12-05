import React from "react";
function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-xl w-full bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-600">
          Contact Us
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
          />

          <textarea
            rows="4"
            placeholder="Message"
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-xl font-medium transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
export default Contact;
