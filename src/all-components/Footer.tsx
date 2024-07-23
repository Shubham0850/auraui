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
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

interface HeroData {
  id: number;
  img: string;
  link: string;
  name: string;
}

const Footerdata: HeroData[] = [
  {
    id: 1,
    img: "/all-components/footer/aura.png",
    link: "/components/footer#aura-footer-component",
    name: "Aura Footer Component",
  },
  {
    id: 2,
    img: "/all-components/footer/small.png",
    link: "/components/footer#small-footer-component",
    name: "Small Footer Component",
  },
  {
    id: 3,
    img: "/all-components/footer/light.png",
    link: "/components/footer#light-footer-component",
    name: "Light Footer Component",
  },
  {
    id: 4,
    img: "/all-components/footer/blue.png",
    link: "/components/footer#blue-footer-component",
    name: "blue Footer Component",
  },
  {
    id: 5,
    img: "/all-components/footer/lightfooter.png",
    link: "/components/footer#light-footer-secondary-component",
    name: "Light Footer Secondary Component",
  },
];

const Footer: React.FC = () => {
  return (
    <div>
      <div className="mt-10 grid  gap-8 grid-cols-1 lg:grid-cols-2 ">
        {Footerdata.map((category) => (
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
                  width={700} // Adjust width as needed
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

export default Footer;
