import React from "react";
import Image from "next/image";
import { AiOutlineUser } from "react-icons/ai";

const logos = [
  {
    src: "https://www.auraui.com/logo-dark.png",
    alt: "AurauiLogo",
  },
  {
    src: "https://www.auraui.com/logo-dark.png",
    alt: "AurauiLogo",
  },
  {
    src: "https://www.auraui.com/logo-dark.png",
    alt: "AurauiLogo",
  },
  {
    src: "https://www.auraui.com/logo-dark.png",
    alt: "AurauiLogo",
  },
  {
    src: "https://www.auraui.com/logo-dark.png",
    alt: "AurauiLogo",
  },
  {
    src: "https://www.auraui.com/logo-dark.png",
    alt: "AurauiLogo",
  },
  {
    src: "https://www.auraui.com/logo-dark.png",
    alt: "AurauiLogo",
  },
  {
    src: "https://www.auraui.com/logo-dark.png",
    alt: "AurauiLogo",
  },
];

const testimonial = {
  text: "“Auraui is revolutionizing the way we interact with web technologies. Their platform provides seamless integration and exceptional support.”",
  name: "Ralph Edwards",
  position: "CEO @ Auraui",
};

const commonStyles = {
  section: "relative py-12 overflow-hidden bg-black sm:py-16 lg:py-20 xl:py-24",
  gradientOverlay:
    "absolute bottom-0 transform -translate-x-1/2 translate-y-96 left-1/2",
  gradientBackground:
    "absolute blur-[64px] w-[643px] h-[408px] bg-gradient-to-r from-cyan-500 to-purple-500 opacity-30",
  backgroundImage: "absolute inset-0",
  image: "object-cover w-full h-full opacity-50",
  container: "relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
  heading:
    "text-center text-3xl font-normal text-white sm:mt-8 sm:text-4xl lg:text-5xl xl:text-6xl",
  grid: "grid grid-cols-1 mt-12 sm:mt-16 lg:mt-20 gap-y-8 sm:gap-y-12 lg:grid-cols-2",
  testimonialContainer:
    "lg:pr-16 text-center sm:flex sm:items-start sm:text-left",
  avatarContainer:
    "w-16 h-16 mx-auto rounded-full shrink-0 bg-gray-300 flex items-center justify-center",
  avatarIcon: "text-gray-500 w-12 h-12",
  testimonialText: "mt-5 sm:mt-0 sm:ml-6",
  testimonialQuote: "text-lg font-normal text-white",
  testimonialAuthor: "mt-6 text-lg font-bold text-gray-300 sm:mt-8",
  testimonialPosition: "mt-1 text-base font-normal text-gray-200",
  divider: "w-full h-px bg-gray-800 lg:hidden",
  logoGrid:
    "lg:border-l lg:border-gray-800 lg:pl-16 inline-grid grid-cols-2 gap-8 sm:gap-x-12 sm:gap-y-10 sm:grid-cols-3",
  logoImage: "object-contain h-8 max-w-full sm:h-10 w-44 filter grayscale",
};

const LogoCloud5: React.FC = () => {
  return (
    <section className={commonStyles.section}>
      <div className={commonStyles.gradientOverlay}>
        <div className={commonStyles.gradientBackground}></div>
      </div>

      <div className={commonStyles.backgroundImage}>
        <Image
          className={commonStyles.image}
          src="https://images.pexels.com/photos/268415/pexels-photo-268415.jpeg?auto=compress&cs=tinysrgb&w=600" 
          alt="Background Noise"
          layout="fill"
        />
      </div>

      <div className={commonStyles.container}>
        <h2 className={commonStyles.heading}>
          Trusted by 1000+ popular brands.
        </h2>

        <div className={commonStyles.grid}>
          <div className={commonStyles.testimonialContainer}>
            <div className={commonStyles.avatarContainer}>
              <AiOutlineUser className={commonStyles.avatarIcon} />
            </div>
            <div className={commonStyles.testimonialText}>
              <blockquote>
                <p className={commonStyles.testimonialQuote}>
                  {testimonial.text}
                </p>
              </blockquote>
              <p className={commonStyles.testimonialAuthor}>
                {testimonial.name}
              </p>
              <p className={commonStyles.testimonialPosition}>
                {testimonial.position}
              </p>
            </div>
          </div>

          <div className={commonStyles.divider}></div>

          <div className={commonStyles.logoGrid}>
            {logos.map((logo) => (
              <Image
                key={logo.src}
                className={commonStyles.logoImage}
                src={logo.src}
                alt={logo.alt}
                width={176} // setting a fixed width based on sm:w-44
                height={40} // setting a fixed height based on sm:h-8
                objectFit="contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud5;
