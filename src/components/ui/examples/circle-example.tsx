import { SiNextra } from "react-icons/si";
import OrbitingCircles from "../circle";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";
import { CgVercel } from "react-icons/cg";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex w-[250px] max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border border-gray-100 dark:border-customDark bg-white dark:bg-customDark md:shadow-md h-[250px]">
      <div>
        <img src="/ico.png" alt="auraui" className="h-8 w-8" />
      </div>

      {/* Inner Circles */}
      <OrbitingCircles
        className="h-[20px] w-[20px] border-none "
        duration={20}
        delay={20}
        radius={50}
      >
        <Icons.tailwind />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[20px] w-[20px] border-none "
        duration={20}
        delay={10}
        radius={50}
      >
        <Icons.nextra />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none "
        reverse
        radius={100}
        duration={20}
      >
        <Icons.reactjs />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none"
        reverse
        radius={100}
        duration={20}
        delay={20}
      >
        <Icons.nextjs />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none"
        reverse
        radius={150}
        duration={20}
        delay={5}
      >
        <Icons.reactjs />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none"
        reverse
        radius={150}
        duration={20}
        delay={50}
      >
        <Icons.nextjs />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  nextjs: (props: any) => (
    <RiNextjsFill className=" text-gray-900 dark:text-gray-300" />
  ),
  nextra: (props: any) => (
    <SiNextra className="text-gray-900 dark:text-gray-300" />
  ),
  openai: (props: any) => (
    <CgVercel className="text-gray-900 dark:text-gray-300" />
  ),
  reactjs: (props: any) => (
    <GrReactjs className=" text-gray-900 dark:text-gray-300" />
  ),
  tailwind: (props: any) => (
    <RiTailwindCssFill className=" text-gray-900 dark:text-gray-300" />
  ),
};
