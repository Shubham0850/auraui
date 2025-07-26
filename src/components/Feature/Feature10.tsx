import React from "react";
import { FaVideo, FaSlack, FaFilePdf } from "react-icons/fa";
import Image from "next/image";

const Feature10: React.FC = () => {
  return (
    <section className="lg:relative bg-black">
      <div className="w-full pt-16 mx-auto sm:pb-12 max-w-7xl lg:py-32 xl:py-44">
        <div className="px-6 sm:px-8 lg:px-12 lg:w-1/2">
          {/* Heading */}
          <h2 className="tracking-tighter text-white">
            <span className="font-sans text-4xl md:text-6xl block">
              The easiest way to
            </span>
            <span className="font-serif text-5xl italic md:text-7xl block mt-1">
              optimize your workflow
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-base leading-7 text-white text-opacity-60 font-sans lg:mt-8 max-w-xl">
            auraui empowers your team with professional video lessons, a
            supportive Slack community, and comprehensive PDF guides. Streamline
            your projects and elevate your team’s efficiency with practical,
            expert-backed resources.
          </p>

          {/* Feature List */}
          <ul className="mt-12 space-y-6 text-white font-serif text-xl tracking-tight lg:mt-16">
            <li className="flex items-center space-x-5">
              <span className="flex items-center justify-center w-12 h-12 bg-white text-black rounded-full shadow-md">
                <FaVideo className="w-5 h-5" />
              </span>
              <span className="italic">Video lessons from professionals</span>
            </li>
            <li className="flex items-center space-x-5">
              <span className="flex items-center justify-center w-12 h-12 bg-white text-black rounded-full shadow-md">
                <FaSlack className="w-5 h-5" />
              </span>
              <span className="italic">Slack community</span>
            </li>
            <li className="flex items-center space-x-5">
              <span className="flex items-center justify-center w-12 h-12 bg-white text-black rounded-full shadow-md">
                <FaFilePdf className="w-5 h-5" />
              </span>
              <span className="italic">PDF lessons</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative w-full h-64 sm:h-80 md:h-[500px] lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <Image
          src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Professional video lesson"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default Feature10;
