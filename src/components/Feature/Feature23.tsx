import React from "react";

const features = [
  {
    id: 1,
    tag: "Unlimited Resources",
    title: "Design Things Fast",
    description:
      "Auraui's components are designed to help you build sleek, responsive layouts effortlessly, allowing you to focus on creativity.",
    image: "https://www.auraui.com/images/design.avif",
    alt: "Unlimited Resources",
  },
  {
    id: 2,
    tag: "Connect Easily",
    title: "Grow Your Audience",
    description:
      "Auraui's integrations enable seamless connectivity, making it easy to scale and grow your audience with minimal effort.",
    image: "https://www.auraui.com/images/audience.avif",
    alt: "Connect Easily",
  },
  {
    id: 3,
    tag: "Use Anywhere",
    title: "Support All Devices",
    description:
      "Auraui is fully responsive, ensuring your applications look perfect on any device, from desktop to mobile.",
    image: "https://www.auraui.com/images/devices.avif",
    alt: "Support All Devices",
  },
];

const Feature23 = () => {
  return (
    <section className="bg-black py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Empower Your Development Workflow with Auraui
          </h2>
          <p className="mt-6 text-lg text-gray-400">
            Auraui equips developers with powerful, flexible tools to build
            faster, collaborate effortlessly, and create stunning user
            experiences.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-10 mt-16 lg:grid-cols-3 sm:gap-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-zinc-900 rounded-2xl overflow-hidden flex flex-col items-center text-center p-8 shadow-xl hover:shadow-2xl transition duration-300"
            >
              <p className="text-sm uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500 font-medium">
                {feature.tag}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-4 text-base text-gray-400 leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-8 w-full rounded-xl overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.alt}
                  className="object-cover w-full h-52 rounded-xl shadow-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature23;
