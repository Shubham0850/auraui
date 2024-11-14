import React from "react";
import { FaCloud, FaStar } from "react-icons/fa";

const commonStyles = {
  container:
    "relative py-12 overflow-hidden bg-black sm:py-16 lg:py-20 xl:py-24",
  backgroundImage: "absolute inset-0",
  overlay:
    "absolute transform -translate-x-1/2 translate-y-full bottom-2/3 left-1/2 opacity-30 blur-3xl filter",
  logoWrapper:
    "flex flex-wrap items-center justify-center gap-8 md:gap-x-16 md:gap-y-12",
  logo: "object-contain w-20 max-w-full sm:h-8 md:h-10 sm:w-44",
  starIcon: "w-8 h-8 text-blue-400",
  reviewText: "mt-1 text-base font-normal text-gray-50",
  reviewDetail: "ml-1 text-gray-400",
};

function LogoCloud15() {
  return (
    <section className={commonStyles.container}>
      <div className={commonStyles.overlay}>
        <FaCloud size={643} style={{ filter: "blur(64px)" }} />
      </div>

      <div className={commonStyles.backgroundImage}>
        <img
          className="object-cover w-full h-full opacity-50"
          src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
          alt="Background Noise"
        />
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-normal text-gray-500">
            Trusted by Leading Brands at Auraui
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mt-8 sm:mt-12">
          <div className={commonStyles.logoWrapper}>
            <img
              src="https://www.auraui.com/logos/logo15.svg"
              alt="Brand Logo 1"
            />
            <img
              src="https://www.auraui.com/logos/logo5.svg"
              alt="Brand Logo 2"
            />
            <img
              src="https://www.auraui.com/logos/logo6.svg"
              alt="Brand Logo 3"
            />
            {/* Add more logos as needed */}
          </div>

          <div className="max-w-md mx-auto mt-12 lg:mt-20 sm:mt-16">
            <hr className="border-white opacity-10" />

            <div className="flex items-start justify-center mt-8 gap-x-10 sm:gap-x-14">
              <img
                className="rounded-full w-auto h-14"
                src="https://www.auraui.com/memeimage/boy1.jpeg"
                alt="Review Logo"
              />
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
}

export default LogoCloud15;
