import React from "react";

type Props = {};

// SVG Components
const MenuIcon = ({ isOpen }: { isOpen: boolean }) => {
  return isOpen ? (
    <svg
      className="w-6 h-6"
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
      className="w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 8h16M4 16h16"
      ></path>
    </svg>
  );
};

const ArrowRightIcon = () => (
  <svg
    className="w-6 h-6 ml-8 -mr-2"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

function CourseHero({ }: Props) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Common anchor styles
  const anchorStyles = "text-base text-black transition-all duration-200 hover:text-opacity-80";

  return (
    <div className="bg-white">
      {/* Header Section */}
      <header className="bg-[#FCF8F1] bg-opacity-30">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" title="Home" className="flex">
                <img
                  className="w-auto h-8"
                  src="https://www.auraui.com/logo-light.png"
                  alt="Logo"
                />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <MenuIcon isOpen={menuOpen} />
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <a
                href="#"
                title="Features"
                className={anchorStyles}
              >
                Features
              </a>

              <a
                href="#"
                title="Solutions"
                className={anchorStyles}
              >
                Solutions
              </a>

              <a
                href="#"
                title="Resources"
                className={anchorStyles}
              >
                Resources
              </a>

              <a
                href="#"
                title="About Us"
                className={anchorStyles}
              >
                About Us
              </a>
            </div>

            {/* Join Now Button */}
            <a
              href="#"
              title="Join Now"
              className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-white transition-all duration-200 bg-black rounded-full hover:bg-yellow-300 hover:text-black focus:bg-yellow-300 focus:text-black"
              role="button"
            >
              Join Now
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="text-base font-semibold tracking-wider text-yellow-600 uppercase">
                Learning Area for learners
              </p>
              <h1 className="mt-4 text-3xl font-bold text-black sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
                Talk & learn from the experts
              </h1>
              <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                Grow your career fast with right mentor.
              </p>

              <a
                href="#"
                title="Sign in"
                className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
                role="button"
              >
                Sign in
                <ArrowRightIcon />
              </a>

              <p className="mt-5 text-gray-600">
                Already joined us?{" "}
                <a
                  href="#"
                  title="Log in"
                  className="text-black transition-all duration-200 hover:underline"
                >
                  Log in
                </a>
              </p>
            </div>

            <div>
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CourseHero;
