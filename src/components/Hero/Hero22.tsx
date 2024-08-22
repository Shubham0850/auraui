import React from "react";
import { FaDownload } from "react-icons/fa";
import { HiOutlineBars3 } from "react-icons/hi2";

const commonStyles = {
  header: "relative py-4 md:py-6",
  container: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
  logo: "flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2",
  menuIcon: "w-7 h-7",
  navLink:
    "text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2",
  button:
    "inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 font-pj",
  primaryButton: "bg-gray-900 hover:bg-gray-600",
  secondaryButton:
    "bg-transparent border-gray-900 hover:bg-gray-900 hover:text-white",
  sectionTitle:
    "text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj",
  textAccent: "relative inline-flex sm:inline",
  textHighlight:
    "bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0",
  profilePic: "inline-block rounded-full w-14 h-14 ring-2 ring-white",
  gridImg: "w-full mx-auto scale-110",
};

function Hero22() {
  return (
    <div className="relative bg-gray-50">
      <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
        <img
          className="w-auto h-full"
          src="https://www.auraui.com/memeimage/background-pattern.png"
          alt="Background Pattern"
        />
      </div>

      <header className={commonStyles.header}>
        <div className={commonStyles.container}>
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <a href="#" title="AuraUI Home" className={commonStyles.logo}>
                <img
                  className="w-auto h-8"
                  src="https://www.auraui.com/logo-light.png"
                  alt="AuraUI Logo"
                />
              </a>
            </div>

            <div className="flex lg:hidden">
              <button type="button" className="text-gray-900">
                <HiOutlineBars3 className={commonStyles.menuIcon} />
              </button>
            </div>

            <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10">
              <div className="flex items-center space-x-12">
                <a href="#" title="Features" className={commonStyles.navLink}>
                  Features
                </a>
                <a href="#" title="Pricing" className={commonStyles.navLink}>
                  Pricing
                </a>
                <a href="#" title="Automation" className={commonStyles.navLink}>
                  Automation
                </a>
              </div>

              <div className="w-px h-5 bg-gray-300"></div>

              <a href="#" title="Login" className={commonStyles.navLink}>
                Login
              </a>

              <a
                href="#"
                title="Create Free Account"
                className={`${commonStyles.button} ${commonStyles.primaryButton}`}
                role="button"
              >
                Create free account
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="relative py-12 sm:py-16 lg:pt-20 lg:pb-36">
        <div className={commonStyles.container}>
          <div className="grid grid-cols-1 gap-y-8 lg:items-center lg:grid-cols-2 sm:gap-y-20 xl:grid-cols-5">
            <div className="text-center xl:col-span-2 lg:text-left md:px-16 lg:px-0">
              <div className="max-w-sm mx-auto sm:max-w-md md:max-w-full">
                <h1 className={commonStyles.sectionTitle}>
                  Get meaningful feedback on your code
                </h1>

                <div className="mt-8 lg:mt-12 lg:flex lg:items-center">
                  <div className="flex justify-center flex-shrink-0 -space-x-4 overflow-hidden lg:justify-start">
                    <img
                      className={commonStyles.profilePic}
                      src="https://www.auraui.com/memeimage/woman1.jpg"
                      alt="Profile"
                    />
                    <img
                      className={commonStyles.profilePic}
                      src="https://www.auraui.com/memeimage/man2.jpg"
                      alt="Profile"
                    />
                    <img
                      className={commonStyles.profilePic}
                      src="https://www.auraui.com/memeimage/woman3.jpg"
                      alt="Profile"
                    />
                  </div>

                  <p className="mt-4 text-lg text-gray-900 lg:mt-0 lg:ml-4 font-pj">
                    Join with{" "}
                    <span className="font-bold">4600+ Developers</span> and
                    start getting feedback now
                  </p>
                </div>
              </div>

              <div className="mt-8 sm:flex sm:items-center sm:justify-center lg:justify-start sm:space-x-5 lg:mt-12">
                <a
                  href="#"
                  title="Get Feedback"
                  className={`${commonStyles.button} ${commonStyles.primaryButton}`}
                  role="button"
                >
                  Get feedback
                </a>

                <a
                  href="#"
                  title="Download iOS App"
                  className={`${commonStyles.button} ${commonStyles.secondaryButton}`}
                  role="button"
                >
                  <FaDownload className="w-5 h-5 text-gray-900 mr-2" />
                  Download iOS App
                </a>
              </div>
            </div>

            <div className="xl:col-span-3">
              <img
                className={commonStyles.gridImg}
                src="https://www.auraui.com/memeimage/hero22.png"
                alt="Hero Illustration"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero22;
