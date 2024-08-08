import React from "react";
import { FaArrowRight } from "react-icons/fa";

const commonClasses = {
  container: "py-12 bg-white sm:py-16 lg:py-20 xl:py-24",
  wrapper: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl",
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 xl:gap-x-24",
  imgContainer:
    "relative overflow-hidden group lg:order-2 rounded-2xl lg:rounded-3xl",
  img: "object-cover w-full h-full transition-all duration-200 group-hover:scale-110",
  gradientOverlay:
    "absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-900 via-transparent to-transparent",
  textContainer: "absolute bottom-0 left-0 px-8 py-6",
  name: "text-lg font-semibold text-white",
  position: "text-sm font-normal text-gray-400",
  icon: "w-auto text-gray-300 h-9",
  quoteText:
    "text-2xl font-medium leading-snug tracking-tight text-gray-900 sm:text-3xl",
  quoteDescription:
    "mt-8 text-lg font-normal leading-8 text-gray-600 sm:text-xl sm:leading-9",
  link: "inline-flex items-center text-sm font-semibold text-blue-600 transition-all duration-200 group hover:text-blue-800 hover:underline",
  arrowIcon:
    "w-5 h-5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200",
};

function Testimonial5() {
  return (
    <section className={commonClasses.container}>
      <div className={commonClasses.wrapper}>
        <div className={commonClasses.grid}>
          <div className={commonClasses.imgContainer}>
            <img
              className={commonClasses.img}
              src="https://www.auraui.com/memeimage/woman5.jpg"
              alt="Testimonial"
            />
            <div className={commonClasses.gradientOverlay}></div>
            <div className={commonClasses.textContainer}>
              <p className={commonClasses.name}>Albert Flores</p>
              <p className={commonClasses.position}>
                Product Manager at AuraUI
              </p>
            </div>
          </div>

          <div>
            <FaArrowRight className={commonClasses.icon} />
            <blockquote className="mt-8">
              <p className={commonClasses.quoteText}>
                &quot;AuraUI has transformed our design process. The tools are
                intuitive, and the results speak for themselves.&quot;
              </p>
              <p className={commonClasses.quoteDescription}>
                &quot;With AuraUI, our design team can now streamline their
                workflow and achieve design goals with greater efficiency.&quot;
              </p>
            </blockquote>

            <div className="mt-8 sm:mt-12">
              <a
                href="#"
                title="Read Success Story"
                className={commonClasses.link}
              >
                Read Success Story
                <FaArrowRight className={commonClasses.arrowIcon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial5;
