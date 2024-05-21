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

const PlayIcon = () => (
  <svg
    className="w-5 h-5 mr-2"
    viewBox="0 0 18 18"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function EmailCampaignHero({}: Props) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Common anchor styles
  const anchorStyles = "text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2";

  return (
    <div className="overflow-x-hidden bg-gray-50">
      {/* Header Section */}
      <header className="py-4 md:py-6">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="#"
                title="Home"
                className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                <img
                  className="w-auto h-8"
                  src="/logo-light.png"
                  alt="logo"
                />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button type="button" className="text-gray-900" onClick={() => setMenuOpen(!menuOpen)}>
                <MenuIcon isOpen={menuOpen} />
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
              <a
                href="#"
                title="Features"
                className={anchorStyles}
              >
                Features
              </a>
              <a
                href="#"
                title="Pricing"
                className={anchorStyles}
              >
                Pricing
              </a>
              <a
                href="#"
                title="Automation"
                className={anchorStyles}
              >
                Automation
              </a>
            </div>

            {/* Sign Up and Customer Login */}
            <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
              <a
                href="#"
                title="Customer Login"
                className={anchorStyles}
              >
                Customer Login
              </a>
              <a
                href="#"
                title="Sign up"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Sign up
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <nav>
              <div className="px-1 py-8">
                <div className="grid gap-y-7">
                  <a
                    href="#"
                    title="Features"
                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    title="Pricing"
                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    Pricing
                  </a>
                  <a
                    href="#"
                    title="Automation"
                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    Automation
                  </a>
                  <a
                    href="#"
                    title="Customer Login"
                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    Customer Login
                  </a>
                  <a
                    href="#"
                    title="Sign up"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button"
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-12 bg-gray-50 sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="px-6 text-lg text-gray-600 font-inter">
              Smart email campaign builder, made for Developers
            </h1>
            <p className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
              Turn your visitors to Use 
              <span className="relative inline-flex sm:inline">
                <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                <span className="relative"> auraUI </span>
              </span>
            </p>

            <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
              <a
                href="#"
                title="Get more customers"
                className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Get more auraui
              </a>
              <a
                href="#"
                title="Watch free demo"
                className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
                role="button"
              >
                <PlayIcon />
                Use free AuraUI
              </a>
            </div>

            <p className="mt-8 text-base text-gray-500 font-inter">
             Some are free Components · No credit card required
            </p>
          </div>
        </div>

        <div className="pb-12 bg-white">
          <div className="relative">
            <div className="absolute inset-0 h-2/3 bg-gray-50"></div>
            <div className="relative mx-auto">
              <div className="lg:max-w-6xl lg:mx-auto">
                <img
                  className="transform scale-110"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png"
                  alt="Illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EmailCampaignHero;
