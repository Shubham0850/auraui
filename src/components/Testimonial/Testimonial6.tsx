import React from "react";

const commonClasses = {
  textWhite: "text-white",
  blockQuoteText: "text-xl font-normal",
  link: "text-base font-normal text-white",
  gradientLine: "w-full h-px mt-1 bg-gradient-to-r from-cyan-500 to-purple-500",
  imgSize: "w-auto h-8",
};

function Testimonial6() {
  return (
    <section className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-normal tracking-widest text-white uppercase">
            In the media
          </p>
        </div>

        <div className="grid max-w-6xl grid-cols-1 mx-auto mt-12 md:grid-cols-2 gap-x-24 sm:mt-16 lg:mt-20 gap-y-16">
          <div>
            <img
              className={commonClasses.imgSize}
              src="https://www.auraui.com/logo-dark.png"
              alt="TechCrunch Logo"
            />
            <blockquote>
              <p
                className={`mt-10 ${commonClasses.blockQuoteText} ${commonClasses.textWhite}`}
              >
                “AuraUI has been spotlighted for its innovative design and ease
                of use, making it a top choice for modern developers.”
              </p>
            </blockquote>
            <div className="inline-flex flex-col mt-6 md:mt-10">
              <a href="#" className={commonClasses.link}>
                Read the article
              </a>
              <div className={commonClasses.gradientLine}></div>
            </div>
          </div>

          <div>
            <img
              className={commonClasses.imgSize}
              src="https://www.auraui.com/logo-dark.png"
              alt="auraui logo"
            />
            <blockquote>
              <p
                className={`mt-10 ${commonClasses.blockQuoteText} ${commonClasses.textWhite}`}
              >
                “The clean and versatile components of AuraUI make it an
                essential tool for rapid and efficient development.”
              </p>
            </blockquote>
            <div className="inline-flex flex-col mt-6 md:mt-10">
              <a href="#" className={commonClasses.link}>
                Read the article
              </a>
              <div className={commonClasses.gradientLine}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial6;
