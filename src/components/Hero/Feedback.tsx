import React from "react";

type Props = {};

// SVG Components
const MenuIcon = ({ isOpen }: { isOpen: boolean }) => {
  return isOpen ? (
    <svg
      className="w-7 h-7"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  ) : (
    <svg
      className="w-7 h-7"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    </svg>
  );
};

const DownloadIcon = () => (
  <svg
    className="w-5 h-5 mr-2"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    ></path>
  </svg>
);

function FeedbackHero({}: Props) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Common anchor styles
  const anchorStyles =
    "text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2";

  return (
    <div className="relative bg-gray-50">
      {/* Header Section */}
      <header className="relative py-4 md:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="#"
                title="Home"
                className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                <img className="w-auto h-8" src="/logo-light.png" alt="Logo" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="text-gray-900"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <MenuIcon isOpen={menuOpen} />
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10">
              <div className="flex items-center space-x-12">
                <a href="#" title="Features" className={anchorStyles}>
                  About
                </a>
                <a href="#" title="Pricing" className={anchorStyles}>
                  Home
                </a>
                <a href="#" title="Automation" className={anchorStyles}>
                  Services
                </a>
              </div>

              <div className="w-px h-5 bg-gray-300"></div>

              <a href="#" title="Login" className={anchorStyles}>
                Login
              </a>

              <a
                href="#"
                title="Create free account"
                className="px-5 py-2 text-base font-semibold leading-7 text-gray-900 transition-all duration-200 bg-transparent border border-gray-900 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white"
                role="button"
              >
                Create free account
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:pt-20 lg:pb-36">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 gap-y-8 lg:items-center lg:grid-cols-2 sm:gap-y-20 xl:grid-cols-5">
            <div className="text-center xl:col-span-2 lg:text-left md:px-16 lg:px-0">
              <div className="max-w-sm mx-auto sm:max-w-md md:max-w-full">
                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
                  Give AuraUI feedback by using Code
                </h1>

                <div className="mt-8 lg:mt-12 lg:flex lg:items-center">
                  <div className="flex justify-center flex-shrink-0 -space-x-4 overflow-hidden lg:justify-start">
                    <img
                      className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
                      src="https://www.auraui.com/memeimage/akshay1.webp"
                      alt="Avatar Male"
                    />
                    <img
                      className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
                      src="https://www.auraui.com/memeimage/babubhaiya.jpg"
                      alt="Avatar Female 1"
                    />
                    <img
                      className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
                      src="https://www.auraui.com/memeimage/majnubhai.jpeg"
                      alt="Avatar Female 2"
                    />
                  </div>

                  <p className="mt-4 text-lg text-gray-900 lg:mt-0 lg:ml-4 font-pj">
                    Join with{" "}
                    <span className="font-bold">6969+ Developers</span> and
                    start to give feedback at AuraUI
                  </p>
                </div>
              </div>

              <div className="mt-8 sm:flex sm:items-center sm:justify-center lg:justify-start sm:space-x-5 lg:mt-12">
                <a
                  href="#"
                  title="Get feedback"
                  className="inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-gray-600"
                  role="button"
                >
                  Feedback
                </a>

                <a
                  href="#"
                  title="Download iOS App"
                  className="inline-flex items-center px-4 py-4 mt-4 text-lg font-bold transition-all duration-200 bg-transparent border border-transparent sm:mt-0 font-pj justif-center rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 hover:bg-gray-200 focus:bg-gray-200 text-gray-900"
                  role="button"
                >
                  <DownloadIcon />
                  Download AuraUI
                </a>
              </div>
            </div>

            <div className="xl:col-span-3 px-4 sm:px-6 lg:px-0">
              <img
                className="w-full max-w-sm lg:max-w-md xl:max-w-lg rounded-lg mx-auto"
                src="https://www.auraui.com/aiimage/block2.jpeg"
                alt="image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeedbackHero;
