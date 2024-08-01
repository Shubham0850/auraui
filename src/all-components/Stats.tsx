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

interface StatsData {
  id: number;
  img: string;
  link: string;
}

const statsdata: StatsData[] = [
  {
    id: 1,
    img: "/all-components/stats/metricshub.png",
    link: "/components/stats#metricshub-stats",
  },
  {
    id: 2,
    img: "/all-components/stats/achievements.png",
    link: "/components/stats#achievements-stats-section",
  },
  {
    id: 3,
    img: "/all-components/stats/growth.png",
    link: "/components/stats#growth-impact-stats-section",
  },
  {
    id: 4,
    img: "/all-components/stats/solutions.png",
    link: "/components/stats#solutions-stats-component",
  },
];

const Stats: React.FC = () => {
  return (
    <div>
      <h2 className="mt-5 text-[26px] font-semibold ">All Stats Components</h2>
      <div className="mt-10   gap-4 md:columns-2 lg:columns-3 space-y-4 ">
        {statsdata.map((category) => (
          <a
            key={category.id}
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
    </div>
  );
};

export default Stats;
