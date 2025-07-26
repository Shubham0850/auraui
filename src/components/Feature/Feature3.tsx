import React from "react";
import Image from "next/image";
import Link from "next/link";

function Feature3() {
  const features = [
    {
      title: "Unlimited Resources",
      text: "Auraui provides a vast array of resources for modern web development.",
      linkText: "Download Free Resources",
      linkHref: "#",
    },
    {
      title: "Figma Included",
      text: "Access the Figma file for seamless design collaboration.",
      linkText: "Access Figma File",
      linkHref: "#",
    },
  ];

  return (
    <section className="py-16 bg-white lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-x-20 gap-y-12 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
              Simplify your web development with Auraui.
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Build websites, landing pages, and admin panels faster with a
              library of components designed for professionals.
            </p>

            <a
              href="#"
              className="inline-block rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200"
            >
              🚀 Start using Auraui
            </a>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 pt-8 border-t border-gray-200">
              {features.map((feature, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{feature.text}</p>
                  <Link
                    href={feature.linkHref}
                    className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    {feature.linkText}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://plus.unsplash.com/premium_photo-1679082305850-63541e846a4a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Focused woman working on laptop"
                width={400}
                height={600}
                className="rounded-3xl w-full h-auto object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature3;
