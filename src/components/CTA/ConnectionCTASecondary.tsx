import React from "react";

const ConnectionCTASecondary = () => {
  const containerStyles = "py-10 bg-gray-100 sm:py-16 lg:py-24";
  const innerContainerStyles = "max-w-5xl px-4 mx-auto sm:px-6 lg:px-8";
  const gridStyles =
    "grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 gap-y-10";
  const avatarStyles = "object-cover w-16 h-16 rounded-full";
  const blockquoteStyles = "mt-6 text-xl leading-relaxed text-black";
  const nameStyles = "mt-6 text-base font-semibold text-black";
  const titleStyles = "mt-1 text-base text-gray-600";
  const cardContainerStyles = "overflow-hidden bg-white";
  const cardContentStyles = "p-8 lg:px-12 lg:py-10";
  const headingStyles = "text-2xl font-semibold text-black";
  const descriptionStyles = "mt-4 text-base text-gray-600";
  const primaryButtonStyles =
    "flex items-center justify-center w-full px-4 py-4 mt-8 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border-2 border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700";
  const secondaryButtonStyles =
    "flex items-center justify-center w-full px-4 py-4 mt-4 text-base font-semibold text-black transition-all duration-200 bg-transparent border-2 border-black rounded-md hover:bg-black focus:bg-black hover:text-white focus:text-white";

  return (
    <section className={containerStyles}>
      <div className={innerContainerStyles}>
        <div className={gridStyles}>
          <div>
            <img
              className={avatarStyles}
              src="/memeimage/girl2.jpeg"
              alt="Jenny Wilson"
            />
            <blockquote>
              <p className={blockquoteStyles}>
                “AuraUI provides the best components I&apos;ve ever used. The
                designs are sleek and the integration is seamless. Highly
                recommend for any developer.”
              </p>
            </blockquote>
            <p className={nameStyles}>Jenny Wilson</p>
            <p className={titleStyles}>Project Manager at Microsoft</p>
          </div>

          <div>
            <div className={cardContainerStyles}>
              <div className={cardContentStyles}>
                <h3 className={headingStyles}>Join 5,482 other developers</h3>
                <p className={descriptionStyles}>
                  AuraUI offers a rich library of over 100+ handcrafted
                  components. Elevate your project with high-quality UI
                  elements.
                </p>

                <a href="#" className={primaryButtonStyles} role="button">
                  Create your first website
                </a>

                <a href="#" className={secondaryButtonStyles} role="button">
                  Talk to sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectionCTASecondary;
