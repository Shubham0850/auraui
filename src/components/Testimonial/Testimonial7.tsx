import React from "react";

const commonClasses = {
  textWhite: "text-white",
  blockQuoteText: "font-serif text-2xl italic leading-tight xl:text-4xl",
  textOpacity: "text-opacity-50",
  textBase: "text-base font-normal",
  gradientBg: "bg-gradient-to-t from-secondary to-transparent",

  border: "border rounded-lg border-neutral",
  container: "relative overflow-hidden h-[400px] w-[300px]",
  sectionHeading: "text-4xl font-normal sm:text-5xl md:text-6xl",
  sectionSubHeading: "text-5xl italic sm:text-6xl md:text-7xl",
};

function Testimonial7() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-black">
      <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 text-center gap-y-8 lg:text-left lg:grid-cols-6">
          <div className="lg:col-span-4">
            <h2 className={`tracking-tighter ${commonClasses.textWhite}`}>
              <span className={`font-sans ${commonClasses.sectionHeading}`}>
                Recommended
              </span>
              <span
                className={`block font-serif ${commonClasses.sectionSubHeading}`}
              >
                by our members
              </span>
            </h2>
          </div>

          <div className="lg:col-span-2">
            <p
              className={`font-sans text-lg font-normal leading-8 ${commonClasses.textOpacity} ${commonClasses.textWhite}`}
            >
              AuraUI provides an exceptional experience, enhancing design
              workflows and achieving greater efficiency in development.
            </p>
          </div>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-5 mx-auto mt-12 lg:grid-cols-3 lg:mt-16 lg:max-w-none">
          {[
            {
              name: "Cymone Magdalina",
              image: "https://www.auraui.com/memeimage/woman-potrait.webp",
              quote:
                "“AuraUI’s design tools have significantly improved our project turnaround time, making our workflow more efficient.”",
            },
            {
              name: "Sophia Ella",
              image: "https://www.auraui.com/memeimage/woman-potrait-3.jpeg",
              quote:
                "“With AuraUI, our design team can quickly prototype and deploy high-quality components with ease.”",
            },
            {
              name: "Hyeon Vivek",
              image: "https://www.auraui.com/memeimage/man-potrait.jpg",
              quote:
                "“The versatility of AuraUI’s components has revolutionized our development process and enhanced our end products.”",
            },
          ].map(({ name, image, quote }, index) => (
            <div
              key={index}
              className={`${commonClasses.container} ${commonClasses.border}`}
            >
              <div className="aspect-w-3 aspect-h-4">
                <img
                  className="object-fill h-full w-full"
                  src={image}
                  alt={`Testimonial from ${name}`}
                />
              </div>
              <div
                className={`${commonClasses.gradientBg} absolute inset-0`}
              ></div>
              <div className="absolute inset-x-0 bottom-0">
                <div className="px-8 pb-6">
                  <blockquote>
                    <p
                      className={`${commonClasses.blockQuoteText} ${commonClasses.textWhite}`}
                    >
                      {quote}
                    </p>
                  </blockquote>
                  <p
                    className={`mt-6 ${commonClasses.textBase} xl:mt-8 ${commonClasses.textWhite}`}
                  >
                    {name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial7;
