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

interface TestimonialData {
  id: number;
  img: string;
  link: string;
  name: string;
}

const testimonialdata: TestimonialData[] = [
  {
    id: 1,
    img: "/all-components/testimonial/designers.png",
    link: "/components/testimonial#testimonial-for-designers",
    name: "Testimonial for Designers",
  },
  {
    id: 2,
    img: "/all-components/testimonial/developers.png",
    link: "/components/testimonial#testimonial-for-devlopers",
    name: "Testimonial for Devlopers",
  },
];

const Testimonial: React.FC = () => {
  return (
    <div>
      <h2 className="mt-5 text-[26px] font-semibold ">
        All Testimonial Components
      </h2>
      <div className="mt-10 grid  gap-8 grid-cols-1 lg:grid-cols-3 ">
        {testimonialdata.map((category) => (
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

export default Testimonial;
