import { cn } from "@/lib/utils";
import { CSSProperties, FC, ReactNode, useEffect, useState } from "react";
import { useTheme } from "nextra-theme-docs";

interface AnimatedShinyTextProps {
  children: ReactNode;
  className?: string;
  shimmerWidth?: number;
}

const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
}) => {
  return (
    <p
      style={
        {
          "--shimmer-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        "mx-auto max-w-md text-neutral-600/90  dark:text-neutral-400/90 ",

        // Shimmer effect
        "animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",

        // Shimmer gradient
        "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent  dark:via-white/80",

        className,
      )}
    >
      {children}
    </p>
  );
};

const ShinyTextExample = () => {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState("");
  useEffect(() => {
    if (theme) {
      setCurrentTheme(theme);
    }
  }, [theme]);

  if (!currentTheme) {
    return null; // or a loading spinner or placeholder
  }
  return (
    <div className="z-10 flex items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-[14px] text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-5 py-3 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 gap-3">
          {currentTheme === "light" ? (
            <div className="bg-[#282829] glowing-dot-dark"></div>
          ) : (
            <div className="glowing-dot bg-white"></div>
          )}

          <div>
            <span className="text-sm font-semibold dark:text-white text-[#111111]">
              Private Beta is{" "}
              <span className="dark:text-gray-500 text-[#111111]">live</span>
            </span>
          </div>
        </AnimatedShinyText>
      </div>
    </div>
  );
};

export { ShinyTextExample, AnimatedShinyText };
