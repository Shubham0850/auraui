import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Cta10 = () => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #DDF2F4, #E6EEFE)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* Logo */}
      <div style={{ marginBottom: "1.5rem" }}></div>

      {/* Heading */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-center">
          Join the waitlist for
        </h1>
        <h1>
          <span className="text-green-600 text-5xl font-bold">AuraUI</span>
        </h1>
      </div>
      <p className="text-gray-600 text-center mb-6">
        Stay informed about our latest updates
      </p>

      {/* Form */}
      <form className="w-full max-w-md text-center">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full p-3 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-all"
        >
          Join the waitlist
        </button>
      </form>

      {/* Social Media Icons */}
      <div className="flex justify-center mt-6 space-x-4 text-gray-500">
        <FaXTwitter size={24} className="cursor-pointer hover:scale-110" />
        <FaFacebookF size={24} className="cursor-pointer hover:scale-110" />
        <FaInstagram size={24} className="cursor-pointer hover:scale-110" />
        <FaYoutube size={24} className="cursor-pointer hover:scale-110" />
      </div>
    </div>
  );
};

export default Cta10;
