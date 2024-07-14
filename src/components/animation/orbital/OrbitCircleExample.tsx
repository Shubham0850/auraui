import { SiNextra } from "react-icons/si";
import { cn } from "@/lib/utils";

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
        <img src="/ico.png" alt="auraui" className="h-8 w-8" />
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
  html: (props: any) => (
    <img src="/components/html-1.svg" alt="html" className="h-6 w-6" />
  ),
  reactnative: (props: any) => (
    <img
      src="/components/react-native-1.svg"
      alt="react native"
      className="h-6 w-6"
    />
  ),
};
