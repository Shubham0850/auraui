import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const commonStyles = {
  container:
    "relative py-12  bg-red-900 overflow-hidden bg-black sm:py-16 lg:py-20 xl:py-24",
  logoWrapper:
    "flex flex-wrap items-center justify-center gap-8 md:gap-x-16 md:gap-y-12",
  logo: "object-contain w-20 max-w-full sm:h-8 md:h-10 sm:w-44",
  starIcon: "w-8 h-8 text-blue-400",
  reviewText: "mt-1 text-base font-normal text-gray-50",
  reviewDetail: "ml-1 text-gray-300",
};

const logos = [
  { src: "https://www.auraui.com/logos/logo2.svg", alt: "Brand Logo 1" },
  { src: "https://www.auraui.com/logo-dark.png", alt: "Brand Logo 2" },
  { src: "https://www.auraui.com/logos/logo4.svg", alt: "Brand Logo 3" },
];

const LogoCloud3 = () => (
  <section className={commonStyles.container}>
    <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-2xl font-normal text-gray-200">
          Leading brands trust Auraui
        </h2>
      </div>

      <div className="max-w-3xl mx-auto mt-8 sm:mt-12">
        <div className={commonStyles.logoWrapper}>
          {logos.map((logo) => (
            <Image
              key={logo.src}
              className={commonStyles.logo}
              src={logo.src}
              alt={logo.alt}
              width={176}
              height={40}
              objectFit="contain"
            />
          ))}
        </div>

        <div className="max-w-md mx-auto mt-12 lg:mt-20 sm:mt-16">
          <hr className="border-white opacity-10" />

          <div className="flex items-start justify-center mt-8 gap-x-10 sm:gap-x-14">
            <div>
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className={commonStyles.starIcon} />
                ))}
              </div>
              <p className={commonStyles.reviewText}>
                4.4/5{" "}
                <span className={commonStyles.reviewDetail}>
                  (14,590 Reviews)
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LogoCloud3;
