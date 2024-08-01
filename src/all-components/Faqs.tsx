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

interface FaqsData {
  id: number;
  img: string;
  link: string;

}

const faqsdata: FaqsData[] = [
  {
    id: 1,
    img: "/all-components/faqs/question.png",
    link: "/components/faqs#question-box-faq-component",

  },
  {
    id: 2,
    img: "/all-components/faqs/open.png",
    link: "/components/faqs#open-faq-section-component",
  
  },
  {
    id: 3,
    img: "/all-components/faqs/section.png",
    link: "/components/faqs#faq-section-with-background-component",
   
  },
  {
    id: 4,
    img: "/all-components/faqs/accordion.png",
    link: "/components/faqs#faq-accordion-component",
  
  },
  {
    id: 5,
    img: "/all-components/faqs/banner.png",
    link: "/components/faqs#faq-with-banner-component",
 
  },
];

const Faqs: React.FC = () => {
  return (
    <div>
      <h2 className="mt-5 text-[26px] font-semibold ">All Faqs Components</h2>
      <div className="mt-10   gap-4 md:columns-2 lg:columns-3 space-y-4 ">
        {faqsdata.map((category) => (
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

export default Faqs;
