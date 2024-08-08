import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiMessageCircle } from "react-icons/fi";

const BusinessFeatureSecondary = () => {
  const sectionStyles = "py-10 bg-gray-50 sm:py-16 lg:py-24";
  const containerStyles = "max-w-5xl px-4 mx-auto sm:px-6 lg:px-8";
  const gridStyles = "grid items-center md:grid-cols-2 md:gap-x-20 gap-y-10";
  const headingStyles =
    "text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl";
  const paragraphStyles = "mt-4 text-base leading-relaxed text-gray-600";
  const buttonStyles =
    "inline-flex items-center justify-center px-8 py-3 mt-8 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700";

  return (
    <section className={sectionStyles}>
      <div className={containerStyles}>
        <div className={gridStyles}>
          <div className="relative pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2">
          
            <div className="relative max-w-lg ml-auto">
              <div className="overflow-hidden aspect-w-4 aspect-h-4">
                <Image
                  className="object-cover rounded-lg w-full h-full scale-400"
                  src="https://www.auraui.com/aiimage/unkown.jpeg"
                  alt=""
                  width={600}
                  height={600}
                />
              </div>
              <div className="absolute bottom-0 -left-16">
                <div className="bg-violet-400 rounded-lg ">
                  <div className="py-4 pl-4 pr-10 sm:py-6 sm:pl-8 sm:pr-16">
                    <FiMessageCircle className="w-12 h-12 bg-transparent text-white fill-white" />
                    <span className="block mt-3 text-xl font-bold text-black sm:mt-6 sm:text-4xl lg:text-5xl">
                      69,69
                    </span>
                    <span className="block mt-2 text-sm font-medium leading-snug text-amber-900 sm:text-base">
                      Customer chat
                      <br />
                      served on July
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:order-1">
            <h2 className={headingStyles}>Grow your business with AuraUI</h2>
            <p className={paragraphStyles}>
              AuraUI is designed to help you create stunning, high-performance
              websites quickly and efficiently. With our library of over 100
              handcrafted coded blocks, you can focus on your business while we
              handle the design and functionality.
            </p>
            <p className={paragraphStyles}>
              Join thousands of developers who have transformed their web
              development process with AuraUI. Our components are optimized for
              both light and dark themes, ensuring your site looks great no
              matter the user&apos;s preference.
            </p>
            <Link href="#" className={buttonStyles} role="button">
              Start exploring
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessFeatureSecondary;
