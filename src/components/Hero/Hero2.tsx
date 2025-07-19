import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const commonStyles =
  "text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0";
const commonButtonStyles =
  "inline-flex items-center justify-center px-6 py-2 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-lg";

const images = {
  logo: "https://www.auraui.com/logo-light.png",
  hero: "https://www.auraui.com/memeimage/no-bg-woman.png",
};

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
};

const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
};

const Hero2: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div initial="initial" animate="animate" variants={staggerChildren}>
      <motion.header
        className="py-4 bg-gradient-to-r from-white via-blue-50/50 to-white backdrop-blur-sm border-b border-gray-100/50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <motion.div
              className="flex shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href="#" title="Auraui" className="flex">
                <img className="w-24" src={images.logo} alt="Auraui Logo" />
              </a>
            </motion.div>

            <motion.div className="flex md:hidden" whileTap={{ scale: 0.95 }}>
              <button
                type="button"
                className="text-gray-900"
                onClick={() => setExpanded(!expanded)}
              >
                <AnimatePresence mode="wait">
                  {expanded ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiX className="w-7 h-7" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiMenu className="w-7 h-7" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>

            <motion.div
              className="hidden md:flex md:space-x-10 md:items-center md:justify-center"
              variants={staggerChildren}
            >
              <motion.a
                href="#"
                className={`text-xs font-bold tracking-widest text-gray-900 uppercase ${commonStyles} hover:text-indigo-600`}
                whileHover={{ scale: 1.05, color: "#4f46e5" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              >
                Services
              </motion.a>
              <motion.a
                href="#"
                className={`text-xs font-bold tracking-widest text-gray-900 uppercase ${commonStyles} hover:text-indigo-600`}
                whileHover={{ scale: 1.05, color: "#4f46e5" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                Latest Collections
              </motion.a>
              <motion.a
                href="#"
                className={`text-xs font-bold tracking-widest text-gray-900 uppercase ${commonStyles} hover:text-indigo-600`}
                whileHover={{ scale: 1.05, color: "#4f46e5" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              >
                Blog
              </motion.a>
            </motion.div>

            <motion.div
              className="hidden md:flex"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              <motion.a
                href="#"
                className={`${commonButtonStyles} bg-gray-900 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900`}
                role="button"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Join Email List
              </motion.a>
            </motion.div>
          </nav>

          <AnimatePresence>
            {expanded && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <motion.div
                  className="px-1 pt-8 pb-4"
                  variants={staggerChildren}
                  initial="initial"
                  animate="animate"
                >
                  <div className="grid gap-y-6">
                    <motion.a
                      href="#"
                      className={commonStyles}
                      variants={fadeInUp}
                      whileHover={{ x: 10 }}
                    >
                      Services
                    </motion.a>
                    <motion.a
                      href="#"
                      className={commonStyles}
                      variants={fadeInUp}
                      whileHover={{ x: 10 }}
                    >
                      Latest Collections
                    </motion.a>
                    <motion.a
                      href="#"
                      className={commonStyles}
                      variants={fadeInUp}
                      whileHover={{ x: 10 }}
                    >
                      Blog
                    </motion.a>
                    <motion.a
                      href="#"
                      className={`${commonButtonStyles} bg-gray-900 hover:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900`}
                      role="button"
                      variants={fadeInUp}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Join Email List
                    </motion.a>
                  </div>
                </motion.div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      <motion.section
        className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-cyan-400/20 rounded-full blur-xl"
            animate={{
              x: [0, -25, 0],
              y: [0, 15, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full blur-xl"
            animate={{
              x: [0, 20, 0],
              y: [0, -30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl z-10">
          <div className="flex flex-col lg:flex-row justify-center max-w-md mx-auto gap-6 lg:max-w-none">
            <motion.div
              className="self-center w-full lg:w-[70%]"
              {...slideInLeft}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <motion.h1
                className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              >
                Welcome to AuraUI
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                >
                  your gateway to modern UI components.
                </motion.p>
              </motion.h1>
              <motion.p
                className="mt-5 text-base font-normal leading-7 text-gray-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
              >
                Discover the latest in web design, NFT integration, and more
                with Auraui. Your one-stop solution for sleek and functional UI.
              </motion.p>
              <motion.div
                className="relative inline-flex mt-8 group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 transition-all duration-1000 opacity-70 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="#"
                  className="relative inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                  role="button"
                >
                  Explore Auraui Blog
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="self-end w-full lg:w-1/2"
              {...slideInRight}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  className="rounded-sm"
                  src={images.hero}
                  alt="Auraui Hero"
                  width={600}
                  height={400}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Hero2;
