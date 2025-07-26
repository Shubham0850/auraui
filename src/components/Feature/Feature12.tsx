import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiMessageCircle } from "react-icons/fi";

const Feature12 = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl px-6 mx-auto sm:px-8 lg:px-12">
        <div className="grid items-center gap-y-14 md:grid-cols-2 md:gap-x-20">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Power up your business <br />
              with <span className="text-blue-700">auraUI</span>
            </h2>

            <p className="text-lg text-gray-600">
              Build high-performance websites at lightning speed with
              AuraUI&apos;s 100+ responsive components. Enjoy beautiful layouts,
              seamless customizations, and time-saving blocks to launch faster.
            </p>

            <ul className="space-y-3 text-base text-gray-700 list-disc list-inside">
              <li>Responsive & Accessible components</li>
              <li>Dark mode ready, out of the box</li>
              <li>Optimized for performance and SEO</li>
              <li>Made for startups, agencies & SaaS</li>
            </ul>

            <Link
              href="#"
              className="inline-block mt-6 px-6 py-3 text-white bg-blue-500 rounded-md text-base font-medium shadow hover:bg-blue-600 transition"
              role="button"
            >
              Explore AuraUI
            </Link>
          </div>

          {/* Right Image + Stat */}
          <div className="relative pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0">
            <div className="relative max-w-lg ml-auto">
              <div className="overflow-hidden aspect-w-4 aspect-h-4 rounded-lg shadow-md">
                <Image
                  className="object-cover w-full h-full rounded-lg"
                  src="https://images.unsplash.com/photo-1692035072849-93a511f35b2c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Working with AuraUI"
                  width={600}
                  height={600}
                />
              </div>

              <div className="absolute -bottom-10 -left-16">
                <div className="bg-blue-700 rounded-lg shadow-lg">
                  <div className="py-4 pl-4 pr-10 sm:py-6 sm:pl-8 sm:pr-16">
                    <FiMessageCircle className="w-10 h-10 text-gray-300" />
                    <span className="block mt-3 text-3xl font-bold text-black sm:mt-4 sm:text-4xl">
                      76,43
                    </span>
                    <span className="block mt-1 text-sm font-medium text-gray-300 sm:text-base">
                      Customer chats <br />
                      served in July
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature12;
