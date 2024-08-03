import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const commonTextClasses = "text-gray-900 font-pj";
const commonImageClasses = "w-full max-w-lg mx-auto";

function Testimonial12() {
  return (
    <section className="overflow-hidden">
      <div className="relative pt-12 bg-gray-50 sm:pt-16 lg:pt-24 xl:pt-40">
        <div className="flex flex-col">
          <div className="block lg:hidden">
            <Image
              className={commonImageClasses}
              src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/2/man.png"
              alt="Testimonial Image"
              layout="responsive"
              width={600}
              height={400}
            />
          </div>

          <div className="py-8 bg-gray-700 lg:order-2 sm:py-12">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="flex flex-col items-center sm:justify-center sm:flex-row lg:justify-start">
                <Image
                  className="w-auto h-8"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/2/cameron-logo.svg"
                  alt="Auraui Logo"
                  layout="intrinsic"
                  width={100}
                  height={50}
                />
                <div className="mt-5 sm:ml-12 sm:mt-0">
                  <p className="text-xl font-bold text-white font-pj">
                    Auraui User
                  </p>
                  <p className="text-sm font-normal font-pj text-white mt-1.5">
                    Director of Technology, Auraui Inc.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex items-end lg:order-1">
              <div className="py-12 lg:pt-0 lg:pb-24 lg:w-1/2">
                <blockquote className="text-center lg:text-left">
                  <p
                    className={`text-3xl font-normal leading-relaxed ${commonTextClasses}`}
                  >
                    Auraui made it incredibly easy. Our new site is more
                    beautiful and user-friendly than ever. I simply select the
                    page, make the changes, and it’s done!
                  </p>
                  <FaQuoteLeft className="text-gray-500 mt-4" />
                </blockquote>
              </div>

              <div className="absolute bottom-0 right-0 hidden w-1/2 lg:block">
                <Image
                  className="w-full max-w-lg ml-10 mr-auto"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/2/man.png"
                  alt="Testimonial Image"
                  layout="responsive"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial12;
