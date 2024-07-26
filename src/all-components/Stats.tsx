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
  name: string;
}

const statsdata: StatsData[] = [
  {
    id: 1,
    img: "/all-components/stats/metricshub.png",
    link: "/components/stats#metricshub-stats",
    name: "Metricshub Stats",
  },
  {
    id: 2,
    img: "/all-components/stats/achievements.png",
    link: "/components/stats#achievements-stats-section",
    name: "Achievements Stats Section",
  },
  {
    id: 3,
    img: "/all-components/stats/growth.png",
    link: "/components/stats#growth-impact-stats-section",
    name: "Growth Impact Stats Section",
  },
  {
    id: 4,
    img: "/all-components/stats/solutions.png",
    link: "/components/stats#solutions-stats-component",
    name: "Solutions Stats Component",
  },
];

const Stats: React.FC = () => {
  return (
    <div>
      <h2 className="mt-5 text-[26px] font-semibold ">All Stats Components</h2>
      <div className="mt-10 grid  gap-8 grid-cols-1 lg:grid-cols-2 ">
        {statsdata.map((category) => (
          <a
            key={category.id}
            href={category.link}
            className="flex flex-col items-left cursor-pointer"
          >
            <AnimatedDiv>
              <div className="w-[100%] p-2 bg-gray-100 dark:bg-[#282829] rounded-2xl mb-6">
                <Image
                  src={category.img}
                  alt={category.name}
                  width={2000}
                  height={500}
                  className="w-full rounded-xl"
                />
              </div>
            </AnimatedDiv>
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              {category.name}
            </h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Stats;
