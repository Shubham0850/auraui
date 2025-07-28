import { FaApple, FaWindows, FaLinux } from "react-icons/fa";
import { MdCloudDownload } from "react-icons/md";
import { motion } from "framer-motion";

const CTA3 = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-white sm:py-28 lg:py-32">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-radial from-indigo-100 via-white to-transparent" />

      {/* Grid Overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 z-0"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="smallGrid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#000"
              strokeWidth="0.3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#smallGrid)" />
      </svg>

      {/* Main Content */}
      <div className="relative z-10 px-6 mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <MdCloudDownload className="mx-auto w-14 h-14 text-blue-700" />
        </motion.div>

        <motion.h2
          className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Download AuraUI
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto mt-4 text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Unlock your creative journey with beautifully crafted UI systems for
          every platform.
        </motion.p>

        {/* Download Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a
            href="#"
            className="flex items-center gap-2 px-6 py-3 text-white bg-black rounded-xl shadow-md hover:shadow-xl hover:bg-gray-900 transition"
          >
            <FaApple className="w-5 h-5" /> Download for MacOS
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-6 py-3 text-black border-2 border-black rounded-xl hover:bg-black hover:text-white transition"
          >
            <FaWindows className="w-5 h-5" /> Download for Windows
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-6 py-3 text-black border-2 border-black rounded-xl hover:bg-black hover:text-white transition"
          >
            <FaLinux className="w-5 h-5" /> Download for Linux
          </a>
        </motion.div>

        {/* Bonus Features */}
        <motion.div
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="p-6 bg-white shadow-lg rounded-xl">
            <h4 className="text-lg font-semibold text-gray-900">
              Cross-Platform Ready
            </h4>
            <p className="mt-2 text-sm text-gray-600">
              Build and test UI across macOS, Windows, and Linux effortlessly.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-xl">
            <h4 className="text-lg font-semibold text-gray-900">
              Lightweight & Fast
            </h4>
            <p className="mt-2 text-sm text-gray-600">
              Optimized build size with blazing-fast performance out-of-the-box.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-xl">
            <h4 className="text-lg font-semibold text-gray-900">
              Lifetime Free Updates
            </h4>
            <p className="mt-2 text-sm text-gray-600">
              Download once and receive updates forever — no recurring cost.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA3;
