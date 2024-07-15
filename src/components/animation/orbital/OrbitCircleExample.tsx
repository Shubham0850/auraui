import { SiNextra } from "react-icons/si";
import { cn } from "@/lib/utils";
import Image from "next/image";

function OrbitCircle({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true,
}: {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
}) {
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <circle
            className="stroke-black/10 stroke-1 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            strokeDasharray={"4 4"}
          />
        </svg>
      )}

      <div
        style={
          {
            "--duration": duration,
            "--radius": radius,
            "--delay": -delay,
          } as React.CSSProperties
        }
        className={cn(
          "absolute flex h-full w-full transform-gpu animate-orbit items-center justify-center rounded-full border bg-black/10 [animation-delay:calc(var(--delay)*1000ms)] dark:bg-white/10",
          { "[animation-direction:reverse]": reverse },
          className,
        )}
      >
        {children}
      </div>
    </>
  );
}

export default function OrbitCircleExample() {
  return (
    <div className="relative flex w-[250px] max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border border-gray-100 dark:border-customDark bg-white dark:bg-customDark md:shadow-md h-[250px]">
      <div>
        <Image
          src="/ico.png"
          alt="auraui"
          className="h-8 w-8"
          height={40}
          width={40}
        />
      </div>

      {/* Inner Circles */}
      <OrbitCircle
        className="h-[20px] w-[20px] border-none "
        reverse
        duration={20}
        delay={33}
        radius={50}
      >
        <Icons.tailwind />
      </OrbitCircle>
      <OrbitCircle
        className="h-[20px] w-[20px] border-none "
        reverse
        duration={20}
        delay={66}
        radius={50}
      >
        <Icons.html />
      </OrbitCircle>
      <OrbitCircle
        className="h-[25px] w-[25px] border-none "
        reverse
        duration={20}
        delay={99}
        radius={50}
      >
        <Icons.framer />
      </OrbitCircle>

      {/* Outer Circles (reverse) */}
      <OrbitCircle
        className="h-[30px] w-[30px] border-none "
        radius={100}
        duration={20}
        delay={33}
      >
        <Icons.reactjs />
      </OrbitCircle>
      <OrbitCircle
        className="h-[30px] w-[30px] border-none "
        radius={100}
        duration={20}
        delay={66}
      >
        <Icons.reactnative />
      </OrbitCircle>
      <OrbitCircle
        className="h-[30px] w-[30px] border-none"
        radius={100}
        duration={20}
        delay={99}
      >
        <Icons.nextjs />
      </OrbitCircle>

      {/* Outer Circles (reverse) */}
      <OrbitCircle
        className="h-[30px] w-[30px] border-none"
        reverse
        radius={150}
        duration={20}
        delay={33}
      >
        <Icons.nextra />
      </OrbitCircle>
      <OrbitCircle
        className="h-[40px] w-[40px] border-none"
        reverse
        radius={150}
        duration={20}
        delay={66}
      >
        <Icons.tailwind />
      </OrbitCircle>
      <OrbitCircle
        className="h-[40px] w-[40px] border-none"
        reverse
        radius={150}
        duration={20}
        delay={99}
      >
        <Icons.css />
      </OrbitCircle>
    </div>
  );
}

const Icons = {
  nextjs: (props: any) => (
    <Image
      src="/components/next.svg"
      alt="nextjs"
      width={16}
      height={16}
      className="inline-block"
    />
  ),
  framer: (props: any) => (
    <Image
      src="/components/framer.svg"
      alt="framer motion"
      width={16}
      height={16}
      className="inline-block"
    />
  ),
  reactjs: (props: any) => (
    <Image
      src="/components/react.svg"
      alt="react"
      width={24}
      height={24}
      className="inline-block"
    />
  ),
  nextra: (props: any) => <SiNextra size={16} className="inline-block" />,
  css: (props: any) => (
    <Image
      src="/components/css-icon.svg"
      alt="css"
      width={24}
      height={24}
      className="inline-block"
    />
  ),
  tailwind: (props: any) => (
    <Image
      src="/components/tailwind.svg"
      alt="tailwind"
      width={24}
      height={24}
      className="inline-block"
    />
  ),
  html: (props: any) => (
    <Image
      src="/components/html-1.svg"
      alt="html"
      width={24}
      height={24}
      className="inline-block"
    />
  ),
  reactnative: (props: any) => (
    <Image
      src="/components/react-native-1.svg"
      alt="react native"
      className="h-6 w-6"
      height={40}
      width={40}
    />
  ),
};
