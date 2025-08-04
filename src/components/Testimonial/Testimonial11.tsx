import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    title: "The best UI Kit for developers. So easy to implement and publish.",
    quote:
      "“You made it so simple. AuraUI makes my site much faster and easier to work with. I just choose the page, make the change.”",
    name: "Theresa Webb",
    role: "UI/UX Designer",
    image: "https://www.auraui.com/memeimage/girl2.jpeg",
  },
  {
    title: "AuraUI helps you optimize for engagement.",
    quote:
      "“Must-have tools for developers who want to elevate their designs and user experience. It provides a wide range of components.”",
    name: "Dianne Russell",
    role: "Marketing Coordinator",
    image: "https://www.auraui.com/memeimage/boy1.jpeg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

function Testimonial11() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-black via-[#111827] to-black overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl" />

      <div className="px-6 mx-auto max-w-7xl sm:px-8 lg:px-12 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl xl:text-6xl">
            What our <span className="text-purple-400">members</span> are saying
            💬
          </h2>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="grid max-w-4xl grid-cols-1 gap-10 mx-auto mt-16 md:grid-cols-2 md:gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="relative bg-white/10 border border-white/20 rounded-2xl backdrop-blur-lg shadow-xl p-8 hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2"
            >
              <p className="text-lg font-semibold text-white">{t.title}</p>
              <blockquote className="mt-4">
                <p className="text-base leading-relaxed text-gray-300">
                  {t.quote}
                </p>
              </blockquote>
              <div className="flex items-center mt-6">
                <img
                  className="flex-shrink-0 object-cover rounded-full w-12 h-12 ring-2 ring-purple-500/50"
                  src={t.image}
                  alt={t.name}
                />
                <div className="ml-4">
                  <p className="text-base font-bold text-white">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial11;
