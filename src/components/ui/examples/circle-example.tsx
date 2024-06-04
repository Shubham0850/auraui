import { SiNextra } from "react-icons/si";
import OrbitingCircles from "../circle";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex w-[250px] max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border border-gray-100 dark:border-customDark bg-white dark:bg-customDark md:shadow-md h-[250px]">
      <div>
        <img src="/ico.png" alt="auraui" className="h-8 w-8" />
      </div>

      {/* Inner Circles */}
      <OrbitingCircles
        className="h-[20px] w-[20px] border-none "
        reverse
        duration={20}
        delay={20}
        radius={50}
      >
        <Icons.tailwind />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[25px] w-[25px] border-none "
        reverse
        duration={20}
        delay={10}
        radius={50}
      >
        <Icons.framer />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none "
        radius={100}
        duration={20}
      >
        <Icons.reactjs />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none"
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
        delay={100}
      >
        <Icons.nextra />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[40px] w-[40px] border-none"
        reverse
        radius={150}
        duration={20}
        delay={50}
      >
        <Icons.css />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  nextjs: (props: any) => (
    <img src="/components/next.svg " alt="nextjs" className="h-4 w-4" />
  ),
  framer: (props: any) => (
    <img src="/components/framer.svg" alt="framer motion" className="h-4 w-4" />
  ),
  reactjs: (props: any) => (
    <img src="/components/react.svg" alt="react" className="h-6 w-6" />
  ),
  nextra: (props: any) => <SiNextra className="h-4 w-4" />,
  css: (props: any) => (
    <img src="/components/css-icon.svg" alt="css" className="h-6 w-6" />
  ),
  tailwind: (props: any) => (
    <img src="/components/tailwind.svg" alt="tailwind" />
  ),
};
