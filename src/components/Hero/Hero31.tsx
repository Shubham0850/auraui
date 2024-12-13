import React from "react";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const MenuIcon = ({ isOpen }: { isOpen: boolean }) => {
  return isOpen ? <FiX className="w-7 h-7" /> : <FiMenu className="w-7 h-7" />;
};

const DownloadIcon = () => <FiDownload className="w-5 h-5 mr-2" />;

function Hero31({}: Props) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const anchorStyles =
    "text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2";

  return (
    <div className="relative bg-gray-50">
      <header className="relative py-4 md:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="">
              <Link href="/" className="shrink-0">
                <Image
                  className="w-auto h-8"
                  src="https://www.auraui.com/logo-light.png"
                  alt="Logo"
                  width={200}
                  height={200}
                />
              </Link>
            </div>

            <div className="flex lg:hidden">
              <button
                type="button"
                className="text-gray-900"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <MenuIcon isOpen={menuOpen} />
              </button>
            </div>

            <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10">
              <div className="flex items-center space-x-12">
                <Link href="#about" className={anchorStyles} passHref>
                  About
                </Link>
                <Link href="#home" className={anchorStyles} passHref>
                  Home
                </Link>
                <Link href="#services" className={anchorStyles} passHref>
                  Services
                </Link>
              </div>

              <div className="w-px h-5 bg-gray-300"></div>

              <Link href="#login" className={anchorStyles} passHref>
                Login
              </Link>

              <Link
                href="#signup"
                className="px-5 py-2 text-base font-semibold leading-7 text-gray-900 transition-all duration-200 bg-transparent border border-gray-900 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white"
                role="button"
                passHref
              >
                Create free account
              </Link>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="px-4 pt-6 pb-4 mx-auto space-y-2 flex flex-col sm:px-6 lg:px-8 lg:hidden">
            <Link href="#about" className={anchorStyles} passHref>
              About
            </Link>
            <Link href="#home" className={anchorStyles} passHref>
              Home
            </Link>
            <Link href="#services" className={anchorStyles} passHref>
              Services
            </Link>
            <Link href="#login" className={anchorStyles} passHref>
              Login
            </Link>
            <Link
              href="#signup"
              className="block px-4 py-2 mt-4 text-base font-semibold text-gray-900 transition-all duration-200 bg-transparent border border-gray-900 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white"
              role="button"
              passHref
            >
              Create free account
            </Link>
          </div>
        )}
      </header>

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
                    <Image
                      className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
                      src="https://www.auraui.com/memeimage/akshay1.webp"
                      alt="Avatar Male"
                      width={56}
                      height={56}
                    />
                    <Image
                      className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
                      src="https://www.auraui.com/memeimage/babubhaiya.jpg"
                      alt="Avatar Female 1"
                      width={56}
                      height={56}
                    />
                    <Image
                      className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
                      src="https://www.auraui.com/memeimage/majnubhai.jpeg"
                      alt="Avatar Female 2"
                      width={56}
                      height={56}
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
                <Link
                  href="#feedback"
                  className="inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-gray-600"
                  role="button"
                  passHref
                >
                  Feedback
                </Link>

                <Link
                  href="#download"
                  className="inline-flex items-center px-4 py-4 mt-4 text-lg font-bold transition-all duration-200 bg-transparent border border-transparent sm:mt-0 font-pj justify-center rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 hover:bg-gray-200 focus:bg-gray-200 text-gray-900"
                  role="button"
                  passHref
                >
                  <DownloadIcon />
                  Download AuraUI
                </Link>
              </div>
            </div>

            <div className="w-[80%] mx-auto scale-110 lg:col-span-3 xl:col-span-3">
              <Image
                className="w-full rounded-sm h-auto"
                src="https://images.unsplash.com/photo-1589568365171-77cdf21d2ed6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Illustration"
                layout="responsive"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero31;
