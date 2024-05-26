import React from "react";
import { LuChevronRight, LuChevronLeft } from "react-icons/lu";

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, title }) => (
  <div className="relative snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
    <img className="h-auto w-[332px]" src={src} alt={alt} />
    <p className="mt-5 text-base font-bold text-gray-600">{title}</p>
  </div>
);

interface NavigationButtonProps {
  direction: "left" | "right";
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ direction }) => (
  <button
    type="button"
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
      src: "https://landingfoliocom.imgix.net/store/collection/niftyui/images/gallery/2/image-1.png",
      alt: "Image 1",
      title: "AuraUI Project 1",
    },
    {
      src: "https://landingfoliocom.imgix.net/store/collection/niftyui/images/gallery/2/image-2.png",
      alt: "Image 2",
      title: "AuraUI Project 2",
    },
    {
      src: "https://landingfoliocom.imgix.net/store/collection/niftyui/images/gallery/2/image-3.png",
      alt: "Image 3",
      title: "AuraUI Project 3",
    },
    {
      src: "https://landingfoliocom.imgix.net/store/collection/niftyui/images/gallery/2/image-4.png",
      alt: "Image 4",
      title: "AuraUI Project 4",
    },
    {
      src: "https://landingfoliocom.imgix.net/store/collection/niftyui/images/gallery/2/image-5.png",
      alt: "Image 5",
      title: "AuraUI Project 5",
    },
  ];

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
              <NavigationButton direction="left" />
              <NavigationButton direction="right" />
            </div>
          </div>
        </div>

        <div className="flex w-full gap-6 pb-8 mt-12 overflow-x-auto sm:mt-16 snap-x">
          {images.map((image, index) => (
            <ImageCard key={index} {...image} />
          ))}
        </div>

        <div className="flex items-center justify-center mt-4 space-x-3 lg:hidden">
          <NavigationButton direction="left" />
          <NavigationButton direction="right" />
        </div>
      </section>
    </div>
  );
};

export default Showcase;
