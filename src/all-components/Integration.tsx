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

interface IntegrationData {
  id: number;
  img: string;
  link: string;
  name: string;
}

const integrationdata: IntegrationData[] = [
  {
    id: 1,
    img: "/all-components/integration/seamless.png",
    link: "/components/integration#seamless-integration",
    name: "Seamless Integration",
  },
];

const Integration: React.FC = () => {
  return (
    <div>
      <h2 className="mt-5 text-[26px] font-semibold ">
        All Integration Components
      </h2>
      <div className="mt-10 grid  gap-8 grid-cols-1 lg:grid-cols-2">
        {integrationdata.map((category) => (
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

export default Integration;
