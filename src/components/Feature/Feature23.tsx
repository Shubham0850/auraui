import React from "react";

const commonHeadingStyle = "text-sm font-normal tracking-widest uppercase";
const commonTextStyle = "mt-4 text-base font-normal text-gray-400";
const commonImageContainerStyle =
  "absolute inset-x-0 bottom-0 flex items-center justify-center";

const commonCardStyles = `relative overflow-hidden bg-base-900 rounded-2xl 
  px-6 pt-8 pb-56 sm:pb-80 lg:pb-52 xl:pb-64 sm:px-12 lg:px-8 xl:px-12 sm:pt-14`;

const gradientTextStyle =
  "text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500";

function Feature23() {
  return (
    <section className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-xl mx-auto text-center lg:max-w-4xl">
          <h2 className="text-3xl font-normal text-white sm:mt-8 sm:text-4xl lg:text-5xl xl:text-6xl">
            Empower Your Development Workflow with Auraui
          </h2>
          <p className="mt-6 text-lg font-normal max-w-2xl mx-auto text-gray-400">
            Auraui equips developers with powerful, flexible tools to build
            faster, collaborate effortlessly, and create stunning user
            experiences.
          </p>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-12 text-center lg:max-w-none lg:grid-cols-3 sm:mt-16 lg:mt-20">
          {/* Feature 1 */}
          <div className={commonCardStyles}>
            <h3 className={commonHeadingStyle}>
              <span className={gradientTextStyle}>Unlimited Resources</span>
            </h3>
            <p className="mt-3 text-2xl font-normal text-white xl:text-3xl">
              Design Things Fast
            </p>
            <p className={commonTextStyle}>
              Auraui&apos;s components are designed to help you build sleek,
              responsive layouts effortlessly, allowing you to focus on
              creativity.
            </p>
            <div className={commonImageContainerStyle}>
              <img
                className="object-contain w-full"
                src="https://www.auraui.com/images/design.avif"
                alt="Unlimited Resources"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className={commonCardStyles}>
            <h3 className={commonHeadingStyle}>
              <span className={gradientTextStyle}>Connect Easily</span>
            </h3>
            <p className="mt-3 text-2xl font-normal text-white xl:text-3xl">
              Grow Your Audience
            </p>
            <p className={commonTextStyle}>
              Auraui&apos;s integrations enable seamless connectivity, making it easy
              to scale and grow your audience with minimal effort.
            </p>
            <div className={`${commonImageContainerStyle} `}>
              <img
                className="object-contain w-full"
                src="https://www.auraui.com/images/audience.avif"
                alt="Connect Easily"
              />
            </div>
          </div>

          {/* Feature 3 */}
          <div className={commonCardStyles}>
            <h3 className={commonHeadingStyle}>
              <span className={gradientTextStyle}>Use Anywhere</span>
            </h3>
            <p className="mt-3 text-2xl font-normal text-white xl:text-3xl">
              Support All Devices
            </p>
            <p className={commonTextStyle}>
              Auraui is fully responsive, ensuring your applications look
              perfect on any device, from desktop to mobile.
            </p>
            <div
              className={`${commonImageContainerStyle}`}
            >
              <img
                className="object-contain w-full"
                src="https://www.auraui.com/images/devices.avif"
                alt="Support All Devices"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature23;
