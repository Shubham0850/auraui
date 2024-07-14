import React from "react";

const testimonies = [
  {
    name: "Uday Shetty",
    position: "Frontend Developer at Tech Solutions",
    image: "/memeimage/udayshetty.jpg",
    quote:
      "AURA UI is the best component library I've ever used. It's incredibly easy to integrate with Next.js and has a plethora of features. Highly recommended!",
  },
  {
    name: "Priya Sharma",
    position: "UI/UX Designer at Creative Minds",
    image: "/memeimage/girl2.jpeg",
    quote:
      "The ease of use and the variety of components in AURA UI is simply amazing. It made our development process much smoother.",
  },
  {
    name: "Majnu Bhai",
    position: "Software Engineer at Innovatech",
    image: "/memeimage/majnubhai.jpeg",
    quote:
      "AURA UI has become an essential part of our toolkit. The components are top-notch and the integration with Next.js is seamless.",
  },
];

const Designers = () => {
  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
            Trusted by <span className="text-blue-600">30k+</span> companies &
            design teams worldwide
          </h2>
        </div>

        <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
          {testimonies.map((testimony, index) => (
            <div
              key={index}
              className="overflow-hidden bg-white rounded-md shadow"
            >
              <div className="px-8 py-12">
                <div className="relative w-24 h-24 mx-auto">
                  <img
                    className="relative object-cover w-24 h-24 mx-auto rounded-full"
                    src={testimony.image}
                    alt="Avatar"
                  />
                </div>
                <blockquote className="mt-7">
                  <p className="text-lg text-black">{testimony.quote}</p>
                </blockquote>
                <p className="text-base font-semibold text-black mt-9">
                  {testimony.name}
                </p>
                <p className="mt-1 text-base text-gray-600">
                  {testimony.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Designers;
