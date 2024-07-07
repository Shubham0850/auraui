import React, { useRef } from "react";
import { LuChevronRight, LuChevronLeft } from "react-icons/lu";

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, title }) => (
  <div className="relative snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
    <img
      className="h-[350px] sm:h-[450px] w-full sm:w-[280px]  lg:w-[332px]"
      src={src}
      alt={alt}
    />
    <p className="mt-5 text-base font-bold text-gray-600">{title}</p>
  </div>
);

interface NavigationButtonProps {
  direction: "left" | "right";
  onClick: () => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  direction,
  onClick,
}) => (
  <button
    type="button"
    onClick={onClick}
    className="p-1.5 -m-1.5 text-gray-300 transition-all duration-200 rounded-full hover:text-gray-600 hover:bg-gray-100"
  >
    {direction === "left" ? (
      <LuChevronLeft className="w-6 h-6" />
    ) : (
      <LuChevronRight className="w-6 h-6" />
    )}
  </button>
);

const Showcase = () => {
  const images = [
    {
      src: "https://images.unsplash.com/flagged/photo-1558963675-94dc9c4a66a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2plY3RzfGVufDB8fDB8fHww",
      alt: "Image 1",
      title: "AuraUI Project 1",
    },
    {
      src: "https://images.unsplash.com/photo-1605898011598-c5bbcf126cc5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Image 2",
      title: "AuraUI Project 2",
    },
    {
      src: "https://images.unsplash.com/photo-1579389083175-247ef703006f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHByb2plY3RzfGVufDB8fDB8fHww",
      alt: "Image 3",
      title: "AuraUI Project 3",
    },
    {
      src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Image 4",
      title: "AuraUI Project 4",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1661284852147-c2454d4c1ec7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2plY3RzfGVufDB8fDB8fHww",
      alt: "Image 5",
      title: "AuraUI Project 5",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div>
      <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-end lg:justify-between">
            <div className="max-w-md mx-auto text-center lg:text-left lg:mx-0">
              <h2 className="text-3xl font-bold text-gray-900">
                AuraUI Showcase
              </h2>
              <p className="mt-6 text-base font-medium text-gray-500">
                Discover the latest projects and designs created by AuraUI. We
                bring your ideas to life with our innovative approach.
              </p>
            </div>

            <div className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-3">
              <NavigationButton direction="left" onClick={scrollLeft} />
              <NavigationButton direction="right" onClick={scrollRight} />
            </div>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex w-full gap-6 pb-8 mt-12 overflow-x-auto sm:mt-16 snap-x"
        >
          {images.map((image, index) => (
            <ImageCard key={index} {...image} />
          ))}
        </div>

        <div className="flex items-center justify-center mt-4 space-x-3 lg:hidden">
          <NavigationButton direction="left" onClick={scrollLeft} />
          <NavigationButton direction="right" onClick={scrollRight} />
        </div>
      </section>
    </div>
  );
};

export default Showcase;
