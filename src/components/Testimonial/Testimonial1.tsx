import React from "react";

const testimonials = [
  {
    quote:
      "AuraUI has significantly streamlined our development process. The components are intuitive and easy to use, saving us countless hours.",
    name: "Devon Lane",
    role: "President of Sales",
    imgSrc: "https://www.auraui.com/memeimage/boy1.jpeg",
  },
  {
    quote:
      "The best UI library I've ever used. AuraUI is a must-have for any serious developer.",
    name: "Ronald Richards",
    role: "Marketing Coordinator",
    imgSrc: "https://www.auraui.com/memeimage/boy2.avif",
  },
  {
    quote:
      "AuraUI's components are top-notch. They integrate perfectly with our Next.js projects.",
    name: "Jane Cooper",
    role: "Product Designer",
    imgSrc: "https://www.auraui.com/memeimage/girl2.jpeg",
  },
  {
    quote:
      "Launching our website was a breeze with AuraUI. We were live in days, not months.",
    name: "Theresa Webb",
    role: "Web Designer",
    imgSrc: "https://www.auraui.com/memeimage/woman1.jpg",
  },
  {
    quote:
      "AuraUI makes managing our site so simple and efficient. It's a game-changer.",
    name: "Darlene Robertson",
    role: "Medical Assistant",
    imgSrc: "https://www.auraui.com/memeimage/man2.jpg",
  },
  {
    quote:
      "With AuraUI, our development workflow has become faster and smoother. Highly recommended!",
    name: "Floyd Miles",
    role: "Nursing Assistant",
    imgSrc: "https://www.auraui.com/memeimage/man1.jpg",
  },
];

function Testimonial1() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="px-6 mx-auto max-w-7xl sm:px-8 lg:px-12 relative z-10">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-900 mb-14">
          Loved by{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
            developers
          </span>{" "}
          worldwide
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative group rounded-2xl bg-white/60 backdrop-blur-md border border-gray-200 shadow-sm hover:shadow-lg hover:shadow-fuchsia-200/50 transition-all duration-300 p-8 flex flex-col justify-between min-h-[300px]"
            >
              {/* Top - Quote */}
              <div>
                <span className="text-fuchsia-500/30 text-4xl font-serif">
                  “
                </span>
                <blockquote className="relative z-10 text-gray-800 text-lg leading-relaxed">
                  {t.quote}
                </blockquote>
              </div>

              {/* Bottom - Profile */}
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={t.imgSrc}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-transparent group-hover:ring-fuchsia-500 transition duration-300"
                />
                <div>
                  <p className="text-base font-semibold text-gray-900">
                    {t.name}
                  </p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial1;
