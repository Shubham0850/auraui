import React from "react";
import { motion } from "framer-motion";

const ReviewCard = () => {
  return (
    <motion.div
      className="py-6 px-4 bg-white dark:bg-customDark rounded-lg shadow-md w-[250px]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <p className="text-xs font-medium text-gray-900 dark:text-white">
        “One of the best resource sharing site for Developers. Loved the
        community too. Very helpful.”
      </p>
      <div className="flex items-center mt-4">
        <motion.img
          src="/memeimage/akshay1.webp"
          alt="Martin Gray"
          className="w-8 h-8 rounded-full"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <div className="ml-4">
          <p className="font-bold text-xs text-gray-900 dark:text-white">
            Babu Rao
          </p>
          <p className="text-gray-600 text-xs dark:text-gray-400">
            React Developer
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
