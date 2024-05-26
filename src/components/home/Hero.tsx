"use client";

import React from "react";
import { MacDock } from "@/components/ui/examples/dock";
import RetroGrid from "@/components/ui/examples/retro-grid";
import AnimateNumber from "../ui/examples/number";
import EncryptButton from "../ui/examples/encrypt-button";
import HoverBox from "../ui/examples/hover-box";
import ExampleTab from "../ui/examples/tab";
import { ShinyTextExample } from "../ui/examples/shiny-text";
import {
  motion,
} from "framer-motion";
import ToggleExample from "../ui/examples/toggle";
import LoadingExample from "../ui/examples/loading";
import MenuExample from "../ui/examples/menu";
import Link from "next/link";

const CounterExample = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="bg-gray-100 rounded-xl p-5 cursor-pointer"
    >
      <AnimateNumber number={4958} />
      <h3 className="text-xl mt-5 font-bold text-gray-800 leading-none">free <br />resources</h3>
    </motion.div>
  )
}

const GridExample = () => {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-xl border border-neutral-200 dark:border-darkBorder p-20">
      <RetroGrid />
    </div>
  )
}

const Hero = () => {
  return (
    <div className="overflow-x-hidden ">

      <section className="relative py-12 sm:py-16 lg:pt-20 xl:pb-0">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl mb-[100px]">
          <div className="max-w-3xl mx-auto text-center">
            <ShinyTextExample />
            <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
              Copy. Paste. Ship.
            </h1>
            <p className="max-w-md mx-auto mt-6 text-base leading-7 text-gray-600 font-inter">
              Stop Coding from Scratch: A UI Library for Every Skill Level. Quickly Copy and paste components and ship your website 🏎️ fasterrrrrr than ever!
            </p>

            <div className="relative inline-flex mt-10 group">
              <div className="absolute transitiona-all duration-1000 opacity-40 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

              <Link href="/components" title="" className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                Browse Components
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-around">
          <div className="w-full">
            <MacDock />
            <EncryptButton />
            <MenuExample />
          </div>

          <div className="w-full">
            <GridExample />
          </div>

          <div className="w-full">
            <LoadingExample />
            <CounterExample />
          </div>

          <div className="w-full">
            <HoverBox />
            <ExampleTab />
            <ToggleExample />
          </div>

        </div>


        <div className="mt-16 md:mt-20">
          <img className="object-cover object-top w-full h-auto mx-auto scale-150 2xl:max-w-screen-2xl xl:scale-100" src="https://d33wubrfki0l68.cloudfront.net/54780decfb9574945bc873b582cdc6156144a2ba/d9fa1/images/hero/4/illustration.png" alt="" />
        </div>

      </section>
    </div>

  );
};

export default Hero;
