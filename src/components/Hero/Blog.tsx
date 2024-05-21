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

const ArrowRightIcon = () => (
  <svg
    className="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path
      stroke="none"
      d="M0 0h24v24H0z"
      fill="none"
    ></path>
    <line x1="17" y1="7" x2="7" y2="17"></line>
    <polyline points="8 7 17 7 17 16"></polyline>
  </svg>
);

function BlogComponent({}: Props) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Common anchor styles
  const anchorStyles = "text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600";

  return (
    <div className="">
      {/* Header Section */}
      <header className="py-4 bg-white sm:py-5">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex shrink-0">
              <a href="#" title="Home" className="flex">
                <img
                  className="w-auto h-8"
                  src="https://auraui.com/logo-light.png"
                  alt="logo"
                />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button type="button" className="text-gray-900" onClick={() => setMenuOpen(!menuOpen)}>
                <MenuIcon isOpen={menuOpen} />
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:items-center md:justify-start md:ml-16 md:mr-auto md:space-x-10 md:flex">
              <a
                href="#"
                title="Features"
                className={anchorStyles}
              >
                Features
              </a>
              <a
                href="#"
                title="About Us"
                className={anchorStyles}
              >
                About Us
              </a>
              <a
                href="#"
                title="Support"
                className={anchorStyles}
              >
                Support
              </a>
            </div>

            {/* Join Email List Button */}
            <div className="hidden md:block">
              <a
                href="#"
                title="Join Email List"
                className="inline-flex items-center justify-center px-6 py-2 sm:py-2.5 text-base font-semibold text-white transition-all duration-200 bg-gray-900 rounded-lg sm:text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Join Email List
              </a>
            </div>
          </nav>

          {/* Mobile Menu */}
          {menuOpen && (
            <nav>
              <div className="px-1 pt-8 pb-4">
                <div className="grid gap-y-6">
                  <a
                    href="#"
                    title="Features"
                    className="flex items-center text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    title="About Us"
                    className="flex items-center text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0"
                  >
                    About Us
                  </a>
                  <a
                    href="#"
                    title="Support"
                    className="flex items-center text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0"
                  >
                    Support
                  </a>
                  <a
                    href="#"
                    title="Join Email List"
                    className="inline-flex items-center justify-center px-6 py-2 text-base font-semibold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button"
                  >
                    Join Email List
                  </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-50">
        <div className="relative z-10 px-4 py-12 sm:py-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-20 xl:py-28 lg:grid lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            AuraUI Community of Developer{" "}
             
                made by Mangra Langra  
          
              </h1>
              <p className="mt-6 text-base font-normal leading-7 text-gray-900">
              AuraUI is made for all type of Designers and Developer....
              </p>
              <svg
                className="w-auto h-4 mt-8 text-gray-300"
                viewBox="0 0 172 16"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)"
                ></line>
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)"
                ></line>
              </svg>
              <p className="mt-8 text-base font-bold text-gray-900">
                Join to get free updates every week
              </p>
              <form action="#" method="post" className="relative mt-4">
                <div className="absolute transitiona-all duration-1000 opacity-30 inset-0 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                <div className="relative space-y-4 sm:flex sm:space-y-0 sm:items-end">
                  <div className="flex-1">
                    <label htmlFor="" className="sr-only">
                      Email address
                    </label>
                    <div>
                      <input
                        type="email"
                        name=""
                        id=""
                        className="block w-[70%] px-4 py-3 sm:py-3.5 text-base font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg sm:rounded-l-lg  sm:text-sm focus:ring-gray-900 focus:border-gray-900"
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>
             
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="pb-8 lg:absolute lg:inset-0 lg:pb-0">
          <div className="flex flex-col items-center justify-center overflow-hidden lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="flex justify-start w-full gap-6 pb-8 overflow-x-auto snap-x">
              <div className="relative snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
                <div className="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow w-60 md:w-80 group rounded-xl hover:shadow-lg hover:-translate-y-1">
                  <a
                    href="#"
                    title="How to write content about your photographs"
                    className="flex shrink-0 aspect-w-4 aspect-h-3"
                  >
                    <img
                      className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                      src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/thumbnail-1.png"
                      alt="thumbnail-1"
                    />
                  </a>
                  <div className="flex-1 px-4 py-5 sm:p-6">
                    <a href="#" title="How to write content about your photographs">
                      <p className="text-lg font-bold text-gray-900">
                        How to write content about your photographs
                      </p>
                      <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quis auctor odio arcu et dolor.
                      </p>
                    </a>
                  </div>
                  <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <p className="text-sm font-medium text-gray-900">
                          <a href="#" title="Growth">Growth</a>
                        </p>
                        <span className="text-sm font-medium text-gray-900">•</span>
                        <p className="text-sm font-medium text-gray-900">7 Mins Read</p>
                      </div>
                      <a href="#" title="Read more" role="button">
                        <ArrowRightIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
                <div className="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow w-60 md:w-80 group rounded-xl hover:shadow-lg hover:-translate-y-1">
                  <a
                    href="#"
                    title="How to write content about your photographs"
                    className="flex shrink-0 aspect-w-4 aspect-h-3"
                  >
                    <img
                      className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                      src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/thumbnail-2.png"
                      alt="thumbnail-2"
                    />
                  </a>
                  <div className="flex-1 px-4 py-5 sm:p-6">
                    <a href="#" title="How to write content about your photographs">
                      <p className="text-lg font-bold text-gray-900">
                        How to write content about your photographs
                      </p>
                      <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quis auctor odio arcu et dolor.
                      </p>
                    </a>
                  </div>
                  <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <p className="text-sm font-medium text-gray-900">
                          <a href="#" title="Growth">Growth</a>
                        </p>
                        <span className="text-sm font-medium text-gray-900">•</span>
                        <p className="text-sm font-medium text-gray-900">7 Mins Read</p>
                      </div>
                      <a href="#" title="Read more" role="button">
                        <ArrowRightIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
                <div className="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow w-60 md:w-80 group rounded-xl hover:shadow-lg hover:-translate-y-1">
                  <a
                    href="#"
                    title="How to write content about your photographs"
                    className="flex shrink-0 aspect-w-4 aspect-h-3"
                  >
                    <img
                      className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                      src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/thumbnail-3.png"
                      alt="thumbnail-3"
                    />
                  </a>
                  <div className="flex-1 px-4 py-5 sm:p-6">
                    <a href="#" title="How to write content about your photographs">
                      <p className="text-lg font-bold text-gray-900">
                        How to write content about your photographs
                      </p>
                      <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quis auctor odio arcu et dolor.
                      </p>
                    </a>
                  </div>
                  <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <p className="text-sm font-medium text-gray-900">
                          <a href="#" title="Growth">Growth</a>
                        </p>
                        <span className="text-sm font-medium text-gray-900">•</span>
                        <p className="text-sm font-medium text-gray-900">7 Mins Read</p>
                      </div>
                      <a href="#" title="Read more" role="button">
                        <ArrowRightIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end mt-2 space-x-5">
              <div className="w-16 h-[3px] rounded-full bg-gray-900"></div>
              <div className="w-16 h-[3px] rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogComponent;
