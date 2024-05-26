import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { FaGoogle } from "react-icons/fa";

const TheBusiness = () => {
  return (
    <div>
      <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl font-pj">
              Supercharge Your Business Today
            </h1>
            <p className="mt-4 text-lg text-gray-600 font-pj">
              Join us for free. No credit card needed.
            </p>
            <div className="max-w-sm mx-auto mt-14">
              <div className="relative">
                <div className="absolute -inset-4">
                  <div
                    className="w-full h-full mx-auto rounded-3xl opacity-30 blur-lg filter"
                    style={{
                      background:
                        "linear-gradient(90deg, #ff7e5f 0%, #feb47b 100%)",
                    }}
                  ></div>
                </div>
                <div className="relative space-y-6">
                  <a
                    href="#"
                    title="Sign up with Google"
                    className="flex items-center justify-center w-full px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-blue-600 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 hover:bg-blue-500"
                    role="button"
                  >
                    <FaGoogle className="w-5 h-5 mr-4" />
                    Sign up with Google
                  </a>
                  <a
                    href="#"
                    title="Sign up with Facebook"
                    className="flex items-center justify-center w-full px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-blue-800 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 hover:bg-blue-700"
                    role="button"
                  >
                    <GrFacebookOption className="w-5 h-5 mr-4" />
                    Sign up with Facebook
                  </a>
                </div>
              </div>
              <div className="relative mt-9">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-2 text-base font-normal text-gray-400 font-pj bg-gray-50">
                    Or
                  </span>
                </div>
              </div>
              <a
                href="#"
                title="Sign up with Email"
                className="flex items-center justify-center w-full px-8 py-4 text-base font-bold text-gray-900 transition-all duration-200 border border-gray-300 mt-9 font-pj rounded-xl hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 focus:bg-gray-300"
                role="button"
              >
                Sign up with Email
              </a>
              <p className="mt-8 text-base font-normal leading-relaxed text-gray-600 font-pj">
                By signing up, you agree to our{" "}
                <a
                  href="#"
                  title="Privacy Policy"
                  className="font-bold text-gray-900 rounded font-pj hover:underline focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  title="Terms & Conditions"
                  className="font-bold text-gray-900 rounded font-pj hover:underline focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  https://cdn.pixabay.com/video/2024/05/25/213606_tiny.mp4 Terms
                  & Conditions
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TheBusiness;
