import React from "react";
import { FaStar } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

const logoData = [
  "waverio",
  "logoipsum",
  "alterbone",
  "tinygone",
  "preso",
  "ridoria",
  "carbonia",
  "incanto",
];

const testimonial = {
  text: "“Auraui is revolutionizing the way we interact with web technologies. Their platform provides seamless integration and exceptional support.”",
  name: "Ralph Edwards",
  position: "CEO @ Auraui",
};

function LogoCloud5() {
  return (
    <section className="relative py-12 overflow-hidden bg-black sm:py-16 lg:py-20 xl:py-24">
      <div className="absolute bottom-0 transform -translate-x-1/2 translate-y-96 left-1/2">
        <div className="absolute blur-[64px] w-[643px] h-[408px] bg-gradient-to-r from-cyan-500 to-purple-500 opacity-30"></div>
      </div>

      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full opacity-50"
          src="https://example.com/path/to/noise.png" // Update to an appropriate image URL
          alt="Background Noise"
        />
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-normal text-white sm:mt-8 sm:text-4xl lg:text-5xl xl:text-6xl">
            Trusted by 1000+ popular brands.
          </h2>
        </div>

        <div className="grid grid-cols-1 mt-12 sm:mt-16 lg:mt-20 gap-y-8 sm:gap-y-12 lg:grid-cols-2">
          <div className="lg:pr-16">
            <div className="text-center sm:flex sm:items-start sm:text-left">
              <div className="w-16 h-16 mx-auto rounded-full shrink-0 bg-gray-300 flex items-center justify-center">
                <AiOutlineUser className="text-gray-500 w-12 h-12" />
              </div>
              <div className="mt-5 sm:mt-0 sm:ml-6">
                <blockquote>
                  <p className="text-lg font-normal text-white">
                    {testimonial.text}
                  </p>
                </blockquote>
                <p className="mt-6 text-lg font-bold text-gray-300 sm:mt-8">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-base font-normal text-gray-400">
                  {testimonial.position}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-gray-800 lg:hidden"></div>

          <div className="lg:border-l lg:border-gray-800 lg:pl-16">
            <div className="inline-grid grid-cols-2 gap-8 sm:gap-x-12 sm:gap-y-10 sm:grid-cols-3">
              {logoData.map((logo) => (
                <img
                  key={logo}
                  className="object-contain h-8 max-w-full sm:h-10 w-44 filter grayscale"
                  src={`https://example.com/path/to/${logo}.svg`} // Update to an appropriate image URL
                  alt={logo}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoCloud5;
