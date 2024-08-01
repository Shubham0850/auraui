import React, { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import Image from "next/image";

interface AnimatedDivProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
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

interface RoadmapData {
  id: number;
  img: string;
  link: string;

}

const roadmapdata: RoadmapData[] = [
  {
    id: 1,
    img: "/all-components/roadmap/roadmap.png",
    link: "/components/roadmap#projectroadmap",
 
  },
  {
    id: 2,
    img: "/all-components/roadmap/growth.png",
    link: "/components/roadmap#growth-roadmap",

  },
  {
    id: 3,
    img: "/all-components/roadmap/complete.png",
    link: "/components/roadmap#complete-project-roadmap",
   
  },
  {
    id: 4,
    img: "/all-components/roadmap/comprehensive.png",
    link: "/components/roadmap#comprehensive-roadmap-section",

  },
];

const Roadmap: React.FC = () => {
  return (
    <div>
      <h2 className="mt-5 text-[26px] font-semibold ">
        All Roadmap Components
      </h2>
      <div className="mt-10   gap-4 md:columns-2 lg:columns-3 space-y-4 ">
        {roadmapdata.map((category) => (
          <a
            key={category.id}
            href={category.link}
            className="flex flex-col items-left cursor-pointer"
          >
            <AnimatedDiv>
              <div className="w-[100%] p-2 bg-gray-100 dark:bg-[#282829] rounded-2xl ">
                <Image
                  src={category.img}
                  alt='Image'
                  width={2000}
                  height={500}
                  className="w-full rounded-xl"
                />
              </div>
            </AnimatedDiv>
       
          </a>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
