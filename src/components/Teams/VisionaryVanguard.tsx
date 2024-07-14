import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const VisionaryVanguard = (props: Props) => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            People who made UI library
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-600">
            Chamaila Babu Bhaiya Se Direct Babu? Lagta Hain Tera Bhaada Double
            Karna Padega.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-3 md:mt-16 lg:gap-8">
          {[
            "/memeimage/akshay1.webp",
            "/memeimage/babubhaiya.jpg",
            "/memeimage/sunil1.jpg",
          ].map((src, index) => (
            <div key={index}>
              <Image
                className="w-full rounded-md h-full object-cover"
                src={src}
                width={400}
                height={400}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:mt-16">
          <Link
            className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700"
            href="#"
          >
            Join Our Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VisionaryVanguard;
