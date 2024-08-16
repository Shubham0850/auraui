import React from "react";
import Image from "next/image";

const Article1 = () => {
  return (
    <div>
      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto xl:max-w-4xl">
            <p className="text-sm font-bold tracking-widest text-gray-400 uppercase">
              Blog
            </p>
            <h1 className="text-3xl font-bold text-gray-900 mt-7 sm:text-4xl xl:text-5xl">
              Enhance Your Web Projects with AuroraUI
            </h1>
            <p className="text-sm font-normal text-gray-600 mt-7">
              May 24, 2024
            </p>

            <div className="mt-10">
              <p className="text-base font-normal leading-7 text-gray-700">
                Aura UI is a versatile UI library designed to streamline your
                web development process. It includes a wide range of components
                such as Hero, Navbar, Footer, Article, Blog, SignIn, SignUp,
                Testimonial, and many more. With support for AI and Web3
                components, AuroraUI is perfect for modern web applications. The
                library also features various animation components to bring your
                web pages to life.
              </p>
              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                Comprehensive Component Collection
              </h2>
              <p className="mt-6 text-base font-normal leading-7 text-gray-700">
                AuraUI offers everything from basic to advanced components to
                help you build responsive and visually appealing websites. Each
                component is optimized for performance and designed to be easily
                customizable.
              </p>
              <ul className="pl-5 mt-6 space-y-1 text-base font-normal leading-7 text-gray-700 list-disc">
                <li>Optimized and responsive components.</li>
                <li>A wide variety of UI elements.</li>
                <li>Built-in animations for enhanced user experience.</li>
              </ul>
              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                Easy to Get Started
              </h2>
              <p className="mt-6 text-base font-normal leading-7 text-gray-700">
                Whether you are building a landing page or a complex web
                application, AuroraUI provides a solid foundation with its
                pre-built UI blocks. Get started quickly and efficiently with
                our comprehensive documentation and examples.
              </p>
              <blockquote className="pl-5 mt-8 border-l-2 border-gray-900">
                <p className="text-lg italic font-medium text-gray-900">
                  “AuroraUI has transformed our web development process, making
                  it faster and more efficient. The variety of components
                  available is outstanding.”
                </p>
              </blockquote>
              <div className="relative mt-16">
                <div className="absolute -inset-2">
                  <div
                    className="w-full h-full mx-auto opacity-30 blur-lg filter"
                    style={{
                      background:
                        "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                    }}
                  ></div>
                </div>

                <div className="relative rounded-xl">
                  <Image
                    src="https://www.auraui.com/aiimage/boystudy.png"
                    alt="AuroraUI components"
                    layout="responsive"
                    width={1100}
                    height={800}
                    className="rounded-md"
                  />
                </div>
              </div>
              <h2 className="mt-16 text-3xl font-bold text-gray-900">
                Start Building Today
              </h2>
              <p className="mt-6 text-base font-normal leading-7 text-gray-700">
                Join the growing community of developers who trust AuroraUI for
                their projects. Explore our extensive library of components and
                start building your next project with ease.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Article1;
