"use client";

import React from "react";
import Link from "next/link";
import IosToggleExample from "../animation/toggles/IosToggleExample";
import TwitterCardExample from "../animation/cards/twitter/TwitterCardExample";
import OrbitCircleExample from "../animation/orbital/OrbitCircleExample";
import AnimatedTabExample from "../animation/tabs/AnimatedTabExample";
import HoverBox from "../background/HoverBox";
import AnimatedLoadingExample from "../animation/loading/AnimatedLoadingExample";
import RetroGrid from "../background/RetroGrid";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { MacDock } from "./Doc";
import Image from "next/image";
import Particles from "../background/Particles";
import Earth from "../animation/Earth";

function AnimateNumber({ number }: { number: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, number, { duration: 10 });

    return animation.stop;
  }, []);

  return <motion.h1 className="text-4xl font-bold">{rounded}</motion.h1>;
}

const CounterExample = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="bg-gray-100 h-[120px] w-[115px] dark:bg-customDark rounded-xl p-4 cursor-pointer"
    >
      <AnimateNumber number={1000} />
      <h3 className="text-sm mt-5 text-gray-800 dark:text-white leading-none">
        free <br />
        resources
      </h3>
    </motion.div>
  );
};

const Hero = () => {
  const imageDetails = [
    { src: "/components/next.svg", alt: "nextjs" },
    { src: "/components/react.svg", alt: "react js" },
    { src: "/components/tailwind.svg", alt: "tailwind" },
    { src: "/components/css-icon.svg", alt: "css" },
    { src: "/components/framer.svg", alt: "framer" },
  ];
  return (
    <div>
      <div className="absolute inset-0 w-full h-[1670px] sm:h-[1200px] lg:h-[950px]">
        <RetroGrid className="w-full h-full" />
      </div>
      <section className="relative py-12 sm:py-16 lg:pt-20 xl:pb-10">
        <div className="relative  mx-auto sm:px-6 lg:px-8 max-w-7xl mb-[100px]">
          <a href="https://peerlist.io/projects/2024/month/Aug" target="_blank">
            <img
              src="/memeimage/peerlist-2.svg"
              alt="peerlist rank 1"
              className="right-4 fixed z-[10] bottom-4 h-10 w-10"
            />
          </a>
          <div className="max-w-3xl mx-auto text-center">
            <span className="border p-2 px-6 rounded-full text-xs">
              100x your development speed
            </span>
            <h1 className="mt-5 text-[34px] font-bold leading-tight dark:text-gray-100  text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
              Copy. Paste. Ship.
            </h1>
            <h3 className="max-w-2xl mx-auto px-4 mt-6 text-base  dark:text-gray-300  leading-7 text-gray-600 font-inter">
              Ship stunning React websites in hours, not months, with Aura UI’s
              sleek, animated components. Optimized for speed and SEO, just
              copy, paste, and customize for a flawless, high-performance site.
              🚀
            </h3>

            <div className="flex items-center justify-center space-x-5 mt-5">
              {/* className="w-7 h-7 text-gray-900 dark:text-gray-300"  */}
              {imageDetails.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  width={20} // 5 * 4
                  height={20} // 5 * 4
                  className="text-gray-900 dark:text-gray-300"
                />
              ))}
            </div>

            <div className="relative inline-flex mt-10 group">
              <Link
                href="/components"
                title=""
                className="relative inline-flex items-center justify-center px-6 py-3 text-md font-bold text-white transition-all duration-200 bg-[#282829] font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-[#282829]"
                role="button"
              >
                Browse Components
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center space-y-6 sm:space-y-6 sm:space-x-6">
          <div className=" flex items-center flex-col md:mt-6 w-[300px] md:-mr-5  ">
            <TwitterCardExample />
            <MacDock />
          </div>
          <div>
            <OrbitCircleExample />
            {/* <Earth /> */}
          </div>
          <div className="flex flex-col space-y-4">
            <div className="h-[45px] overflow-y-hidden">
              <AnimatedTabExample />
            </div>
            <HoverBox />
            {/* <Particles /> */}
          </div>
          <div className="flex md:flex-col justify-center items-center gap-4 md:gap-0 space-y-4 ">
            <IosToggleExample />
            <CounterExample />
            <AnimatedLoadingExample />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
