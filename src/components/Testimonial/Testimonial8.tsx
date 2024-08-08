import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    text: "“AuraUI's components have significantly streamlined our development process. The performance optimizations are top-notch.”",
    name: "Arjun Patel",
    title: "Lead Developer at Tech Innovations",
  },
  {
    text: "“The design and functionality of AuraUI's library make it a breeze to integrate with our Next.js projects.”",
    name: "Ananya Sharma",
    title: "UX/UI Designer at Creative Studio",
  },
  {
    text: "“AuraUI provides a beautiful and high-performance set of components that have enhanced our user experience.”",
    name: "Ravi Kumar",
    title: "Product Manager at Web Solutions",
  },
  {
    text: "“With AuraUI, we’ve been able to deliver stunning websites faster than ever. Highly recommend!”",
    name: "Maya Gupta",
    title: "Front-End Engineer at StartUp Hub",
  },
  {
    text: "“The level of customization and ease of use with AuraUI is impressive. It’s become an essential tool for our team.”",
    name: "Siddharth Rao",
    title: "Full Stack Developer at DevWorks",
  },
  {
    text: "“AuraUI's components are not only visually appealing but also incredibly performant. Great for rapid development.”",
    name: "Nisha Desai",
    title: "Senior Developer at AppCraft",
  },
];

function Testimonial8() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-black">
      <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div className="text-center">
          <h2 className="tracking-tighter text-white">
            <span className="font-sans text-4xl font-normal sm:text-5xl md:text-6xl">
              Recommended
            </span>
            <span className="block font-serif text-5xl italic sm:text-6xl md:text-7xl">
              by our members
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-2 xl:grid-cols-3 lg:mt-16">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="overflow-hidden transition-all duration-200 border rounded-lg border-neutral hover:bg-dark-gray"
            >
              <div className="p-6 md:px-12 md:py-10">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`w-6 h-6 ${
                        i < 4 ? "text-white" : "text-gray-500"
                      }`}
                    />
                  ))}
                </div>
                <blockquote className="mt-4">
                  <p className="font-sans text-xl font-normal text-white">
                    {review.text}
                  </p>
                </blockquote>
                <p className="mt-5 font-sans text-2xl font-normal text-opacity-50 text-white">
                  {review.name}
                </p>
                <p className="mt-2 font-sans text-sm font-normal text-opacity-50 text-white">
                  {review.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial8;
