import React from "react";
import { FaArrowRight } from "react-icons/fa";

const logoImages = [
  "https://www.auraui.com/logos/logo.webp",
  "https://www.auraui.com/logos/logo15.png",
  "https://www.auraui.com/logos/logo1.webp",
  "https://www.auraui.com/logos/microsoft.png",
];

const imageClasses = "w-auto h-14 mx-auto object-contain opacity-70";

function LogoCloud13() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-black relative">
      <div className="absolute inset-0">
        <img
          className="w-full h-full  object-cover"
          src="https://www.auraui.com/images/squarebg.png"
          alt=""
        />
      </div>

      <div className="px-6 relative sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4 gap-x-16">
            {logoImages.map((src, index) => (
              <div key={index}>
                <img
                  className={imageClasses}
                  src={src}
                  alt={`Logo ${index + 1}`}
                />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-lg font-normal font-sans text-white text-opacity-70 leading-8">
              Auraui is an innovative open-source UI library tailored for modern
              web development, empowering developers with a rich collection of
              pre-designed, responsive components. Built with React and designed
              to be fully customizable, Auraui provides tools that adapt
              seamlessly to any project, helping developers craft sleek,
              professional interfaces without sacrificing performance or
              aesthetics. Each component is optimized for speed, accessibility,
              and ease of use, allowing teams to focus more on their unique
              vision. Whether it&apos;s for creating a stylish footer, a dynamic hero
              section, or interactive cards, Auraui streamlines the development
              process, promoting faster, more efficient web application
              building.
            </p>
            <div className="mt-16">
              <a
                href="#"
                title=""
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-5
                  py-2
                  font-semibold
                  border-2 border-transparent
                  rounded-full
                  sm:leading-8
                  bg-white
                  sm:text-lg
                  text-black
                  hover:bg-opacity-90
                "
                role="button"
              >
                Get Started <FaArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoCloud13;
