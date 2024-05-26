import { useState } from "react";
import { motion, Variants } from "framer-motion";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: {
    opacity: 0,
    scale: 0.3,
    filter: "blur(20px)",
    transition: { duration: 0.2 }
  }
};

export default function MenuExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="relative z-50 w-64 mx-auto my-6"
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-full p-2 text-white bg-gradient-to-r from-black to-gray-800 rounded-xl focus:outline-none"
      >
        <span className="mr-2">Menu</span>
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
          className="flex items-center justify-center"
        >
          <svg width="15" height="15" viewBox="0 0 20 20" className="fill-current">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.5,
              delayChildren: 0.3,
              staggerChildren: 0.1
            }
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
              when: "afterChildren",
              staggerDirection: -1,
              staggerChildren: 0.06
            }
          }
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
        className="absolute top-12 left-0 right-0 w-full p-4 mt-2 space-y-2 bg-white shadow-lg rounded-lg"
      >
        <motion.li variants={itemVariants} className="p-2 text-center text-gray-800 bg-gray-100 rounded-lg">Item 1</motion.li>
        <motion.li variants={itemVariants} className="p-2 text-center text-gray-800 bg-gray-100 rounded-lg">Item 2</motion.li>
        <motion.li variants={itemVariants} className="p-2 text-center text-gray-800 bg-gray-100 rounded-lg">Item 3</motion.li>
        <motion.li variants={itemVariants} className="p-2 text-center text-gray-800 bg-gray-100 rounded-lg">Item 4</motion.li>
        <motion.li variants={itemVariants} className="p-2 text-center text-gray-800 bg-gray-100 rounded-lg">Item 5</motion.li>
      </motion.ul>
    </motion.nav>
  );
}
