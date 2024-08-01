import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import Image from "next/image";

interface AnimatedDivProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

// Custom component to generate motion.div with desired animation
const AnimatedDiv: React.FC<AnimatedDivProps> = ({ children, ...rest }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

interface PageWrapperProps {
  items?: { img: string; link: string }[];
  img?: string;
  link?: string;
  
}

const PageWrapper: React.FC<PageWrapperProps> = ({ items = [], img, link }) => {
  return (
    <div className="mt-10   gap-4 md:columns-2 lg:columns-3 space-y-4 ">
      {items.map((category,index) => (
        <a
          key={index}
          href={category.link}
          className="flex flex-col items-left cursor-pointer"
        >
          <AnimatedDiv>
            <div className="w-[100%] p-2 bg-gray-100 dark:bg-[#282829] rounded-2xl ">
              <Image
                src={category.img}
                alt="Image"
                width={2000}
                height={500}
                className="w-full rounded-xl"
              />
            </div>
          </AnimatedDiv>
        </a>
      ))}
    </div>
  );
};

export default PageWrapper;
