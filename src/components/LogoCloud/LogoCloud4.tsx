import React from "react";
import { FaCloud, FaRegSmile } from "react-icons/fa";

const commonStyles = {
  section: "py-12 bg-gray-50 sm:py-16 lg:py-20 xl:py-24",
  heading: "px-8 text-base font-medium text-gray-600 sm:px-0",
  logoContainer:
    "flex flex-wrap items-center justify-center max-w-5xl gap-8 mx-auto mt-12 sm:mt-16 sm:gap-y-12 md:gap-16",
  logoImage: "object-contain w-32 max-w-full sm:h-8 md:h-10 sm:w-44",
};

const logos = [
  "https://via.placeholder.com/150x50?text=Logo1",
  "https://via.placeholder.com/150x50?text=Logo2",
  "https://via.placeholder.com/150x50?text=Logo3",
  "https://via.placeholder.com/150x50?text=Logo4",
  "https://via.placeholder.com/150x50?text=Logo5",
  "https://via.placeholder.com/150x50?text=Logo6",
  "https://via.placeholder.com/150x50?text=Logo7",
  "https://via.placeholder.com/150x50?text=Logo8",
];

const LogoCloud4 = () => {
  return (
    <section className={commonStyles.section}>
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <h2 className={commonStyles.heading}>
            Join over 200+ tech companies already using Auraui
          </h2>
        </div>

        <div className={commonStyles.logoContainer}>
          {logos.map((logo, index) => (
            <img
              key={index}
              className={commonStyles.logoImage}
              src={logo}
              alt={`Logo ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud4;
