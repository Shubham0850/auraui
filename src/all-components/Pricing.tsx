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

interface PricingData {
  id: number;
  img: string;
  link: string;

}

const pricingdata: PricingData[] = [
  {
    id: 1,
    img: "/all-components/pricing/toggle.png",
    link: "/components/pricing#toggle-design",
 
  },
  {
    id: 2,
    img: "/all-components/pricing/card.png",
    link: "/components/pricing#card-design",
   
  },
];

const Pricing: React.FC = () => {
  return (
    <div>
      <h2 className="mt-5 text-[26px] font-semibold ">
        All Pricing Components
      </h2>
      <div className="mt-10   gap-4 md:columns-2 lg:columns-3 space-y-4 ">
        {pricingdata.map((category) => (
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
                  width={2000} // Adjust width as needed
                  height={200} // Adjust height as needed
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

export default Pricing;
