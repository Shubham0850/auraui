import React from "react";
import { FiArrowRight } from "react-icons/fi";

function Button8() {
  return (
    <button
      type="button"
      className="flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-700 dark:text-white shadow-md hover:scale-105 transition"
    >
      Button8 <FiArrowRight />
    </button>
  );
}

export default Button8;
