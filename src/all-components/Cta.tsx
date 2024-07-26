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

interface CtaData {
  id: number;
  img: string;
  link: string;
  name: string;
}

const ctadata: CtaData[] = [
  {
    id: 1,
    img: "/all-components/cta/simple.png",
    link: "/components/cta#simple-cta",
    name: "Simple CTA",
  },
  {
    id: 2,
    img: "/all-components/cta/rounded.png",
    link: "/components/cta#rounded-design",
    name: "Rounded Design CTA",
  },
  {
    id: 3,
    img: "/all-components/cta/small.png",
    link: "/components/cta#small-cta",
    name: "Small CTA",
  },
  {
    id: 4,
    img: "/all-components/cta/mini.png",
    link: "/components/cta#mini-cta",
    name: "Mini CTA",
  },
  {
    id: 5,
    img: "/all-components/cta/connection.png",
    link: "/components/cta#connection-cta",
    name: "Connection CTA",
  },
  {
    id: 6,
    img: "/all-components/cta/explore.png",
    link: "/components/cta#explore-data-cta",
    name: "Explore Data CTA",
  },

  {
    id: 7,
    img: "/all-components/cta/connection2.png",
    link: "/components/cta#connection-cta-secondary",
    name: "Connection CTA Secondary",
  },
  {
    id: 8,
    img: "/all-components/cta/oneliner.png",
    link: "/components/cta#one-liner-cta",
    name: "One Liner CTA",
  },
  {
    id: 9,
    img: "/all-components/cta/download.png",
    link: "/components/cta#download-option-cta",
    name: "Download Option CTA",
  },
];

const Cta: React.FC = () => {
  return (
    <div>
      <h2 className="mt-5 text-[26px] font-semibold ">All CTA Components</h2>
      <div className="mt-10 grid  gap-8 grid-cols-1 lg:grid-cols-3 ">
        {ctadata.map((category) => (
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
                  width={2000} // Adjust width as needed
                  height={200} // Adjust height as needed
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

export default Cta;
