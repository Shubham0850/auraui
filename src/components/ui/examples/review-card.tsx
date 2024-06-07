import React from "react";
import { motion } from "framer-motion";
import { RiTwitterXFill } from "react-icons/ri";

const ReviewCard = () => {
  return (
    <motion.div
      className="py-6 px-4 bg-white dark:bg-customDark rounded-lg shadow-md w-[250px]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="flex items-center mb-4">
        <motion.img
          src="/memeimage/akshay1.webp"
          alt="Martin Gray"
          className="w-8 h-8 rounded-full"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <div className="ml-2 flex items-center gap-14">
          <div>
            <p className="font-bold text-xs text-gray-900 dark:text-white">
              @Raju
            </p>
            <p className="text-gray-600 text-xs dark:text-gray-400">
              Lakshmi chit fund
            </p>
          </div>
          <div>
            <RiTwitterXFill className="h-4 w-4 text-gray-900 dark:text-gray-300" />
          </div>
        </div>
      </div>
      <p className="text-xs font-medium text-gray-900 dark:text-white">
        Ekkis din main paise double.
      </p>
    </motion.div>
  );
};

export default ReviewCard;
