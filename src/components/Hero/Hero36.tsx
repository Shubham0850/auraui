import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Code, Palette } from "lucide-react";
import { aurauiMotion } from "@/lib/motion";

export default function Hero36() {
  const testimonials = [
    {
      name: "Alex Chen",
      role: "Frontend Developer",
      avatar: "/placeholder.svg",
    },
    { name: "Sarah Kim", role: "UI Designer", avatar: "/placeholder.svg" },
    {
      name: "Mike Johnson",
      role: "Product Manager",
      avatar: "/placeholder.svg",
    },
  ];

  return (
    <section className="hero-theme-36 min-h-screen bg-[#0A0A0A] text-white relative overflow-hidden flex flex-col items-center">
      {/* Local Nav */}
      <motion.div
        className="w-full max-w-6xl mx-auto mt-10 mb-16 px-6 py-4 flex items-center justify-between border border-white/10 rounded-2xl bg-[#121212]/90 backdrop-blur-md shadow-lg z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="text-xl font-bold tracking-tight flex items-center space-x-2">
          <img
            className="w-auto h-7"
            src="https://www.auraui.com/logo-dark.png"
            alt="AuraUI Logo"
          />
        </div>
        <nav className="hidden md:flex space-x-8 items-center text-sm font-medium">
          {["Showcase", "Templates", "Reviews", "About"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-white hover:text-pink-400 transition"
            >
              {link}
            </a>
          ))}
        </nav>
        <button className="bg-pink-500 hover:bg-pink-400 text-white text-sm font-semibold px-5 py-2 rounded-md shadow-md">
          Try Demo
        </button>
      </motion.div>

      {/* Background Dots */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10 pb-24">
        <div className="text-center max-w-5xl mx-auto">
          {/* Tags */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-8"
            variants={aurauiMotion.container}
            initial="hidden"
            animate="visible"
          >
            {[
              { icon: Code, text: "Developer Friendly" },
              { icon: Palette, text: "Design System" },
              { icon: Users, text: "Community Driven" },
            ].map((item, index) => (
              <motion.div key={index} variants={aurauiMotion.item}>
                <Badge
                  variant="outline"
                  className="px-4 py-2 border-white/10 bg-white/5 text-white"
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.text}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Creative
            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #ec4899, #f472b6)",
              }}
            >
              Portfolio
            </span>
            Showcase
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Display your work in style with our premium portfolio templates.
            Built for creatives, designers, and developers who demand
            excellence.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Custom Gradient Button */}
            <motion.div {...aurauiMotion.buttonHover}>
              <button
                className="px-8 py-4 text-lg font-semibold text-white rounded-xl shadow-xl"
                style={{
                  background: "linear-gradient(to right, #fb7185, #ec4899)",
                  boxShadow: "0 8px 24px rgba(236, 72, 153, 0.3)",
                }}
              >
                Explore Templates
              </button>
            </motion.div>

            {/* Secondary Button */}
            <motion.div {...aurauiMotion.buttonHover}>
              <button className="px-8 py-4 text-lg border border-white/20 text-white hover:bg-white/10 rounded-xl">
                View Examples
              </button>
            </motion.div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <span>Trusted by creative professionals</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span>4.9/5 rating</span>
            </div>

            <motion.div
              className="flex justify-center items-center gap-6"
              variants={aurauiMotion.container}
              initial="hidden"
              animate="visible"
            >
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  variants={aurauiMotion.item}
                  whileHover={{ scale: 1.1 }}
                >
                  <Avatar className="w-14 h-14 mx-auto mb-2 border border-white/10 shadow-lg">
                    <AvatarImage src={t.avatar} />
                    <AvatarFallback>
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-sm text-white">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Blobs */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-pink-500 rounded-full opacity-20 blur-xl z-0"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 bg-purple-400 rounded-full opacity-20 blur-xl z-0"
        animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
