import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import DotPattern from "./DotBg";

const Card = ({ title, icon }: { title: string; icon: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white dark:bg-[#373737] rounded-lg shadow-lg dark:shadow-2xl border dark:border-none min-w-[100px]">
      <motion.div
        className="flex items-center justify-center h-8 w-8 mb-2 bg-purple-300 rounded-full"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="h-5 w-5 flex items-center justify-center">{icon}</div>
      </motion.div>
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-gray-700 dark:text-white font-semibold text-xs">
          {title}
        </p>
      </motion.div>
      <div className="mt-4 w-full space-y-1">
        <motion.div
          className="h-1 bg-gray-200 rounded-full"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        ></motion.div>
        <motion.div
          className="h-1 bg-gray-200 rounded-full"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        ></motion.div>
        <motion.div
          className="flex space-x-2"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="h-1 bg-gray-200 rounded-full w-1/2"></div>
          <div className="h-1 bg-gray-200 rounded-full w-1/2"></div>
        </motion.div>
      </div>
    </div>
  );
};

const HoverBox = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
      scale: 0.9,
    },
    hover: {
      x: 0,
      rotate: 0,
      scale: 1,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
      scale: 0.9,
    },
    hover: {
      x: 0,
      rotate: 0,
      scale: 1,
    },
  };
  return (
    <div className="relative flex h-full w-full max-w-sm items-center justify-center overflow-hidden rounded-lg px-3 py-8 md:shadow-md bg-white dark:bg-[#282829] dark:border-darkBorder">
      <motion.div
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="flex w-full flex-row space-x-4 justify-center z-[11]"
      >
        <motion.div
          variants={first}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Card
            title="0xgulzari"
            icon={<div className="bg-blue-500 h-full w-full rounded-full " />}
          />
        </motion.div>

        <motion.div
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="z-10"
        >
          <Card
            title="0xkunal"
            icon={<div className="bg-purple-500 h-full w-full rounded-full" />}
          />
        </motion.div>

        <motion.div
          variants={second}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Card
            title="0xjay"
            icon={<div className="bg-gray-800 h-full w-full rounded-full" />}
          />
        </motion.div>
      </motion.div>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)] z-10",
        )}
      />
    </div>
  );
};

export default HoverBox;
