import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gem, Crown, Check } from "lucide-react";
import { aurauiMotion } from "@/lib/motion";

export default function Hero6() {
  const luxuryFeatures = [
    "Premium Materials",
    "Handcrafted Excellence",
    "Limited Edition",
    "Lifetime Warranty",
  ];

  return (
    <section className="hero-theme-38 min-h-screen flex flex-col items-center justify-start py-16 relative overflow-hidden bg-background text-white">
      {/* Background dots and gradient */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-black" />
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #ffa500 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, #ff7b00 1px, transparent 1px)
            `,
            backgroundSize: "120px 120px, 180px 180px",
          }}
        />
      </div>

      {/* Navbar */}
      <nav className="w-full z-10 px-6 md:px-12 lg:px-24 flex justify-between items-center mb-16">
        <div className="text-2xl font-bold tracking-tight text-white">
          <a href="#" className="flex items-center space-x-2">
            <img
              className="w-auto h-8"
              src="https://www.auraui.com/logo-dark.png"
              alt="AuraUI Logo"
            />
          </a>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#" className="hover:text-accent transition-colors">
            Collections
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            Gallery
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            Brands
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            About
          </a>
        </div>
        <Button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-full px-6 py-2 text-sm shadow-lg">
          Try Demo
        </Button>
      </nav>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            className="mb-8 inline-flex items-center justify-center px-6 py-3 border border-orange-500 text-white rounded-full font-semibold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Crown className="w-5 h-5 mr-2 text-orange-500" />
            Luxury Collection
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.span
              className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent"
              animate={{
                backgroundSize: ["100% 100%", "200% 200%", "100% 100%"],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              Exquisite
            </motion.span>
            <span className="block">Craftsmanship</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Where timeless elegance meets modern sophistication. Each piece is
            meticulously crafted to perfection.
          </motion.p>

          {/* Features */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            variants={aurauiMotion.container}
            initial="hidden"
            animate="visible"
          >
            {luxuryFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={aurauiMotion.item}
                whileHover={{ y: -5 }}
              >
                <Card className="p-4 text-center bg-black border border-orange-500 text-white rounded-xl auraui-shadow-elegant">
                  <Check className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                  <p className="text-sm font-medium">{feature}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div {...aurauiMotion.buttonHover}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-8 py-4 text-lg rounded-xl auraui-shadow-accent flex items-center"
              >
                <Gem className="mr-2 w-5 h-5" />
                Explore Collection
              </Button>
            </motion.div>

            <motion.div {...aurauiMotion.buttonHover}>
              <Button
                size="lg"
                className="bg-black text-white border border-orange-500 px-8 py-4 text-lg rounded-xl hover:bg-orange-500 transition-colors"
              >
                Book Appointment
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { value: "1892", label: "Since" },
              { value: "50+", label: "Countries" },
              { value: "100%", label: "Satisfaction" },
            ].map((stat, index) => (
              <div key={index}>
                <motion.div
                  className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Floating particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-500/40 rounded-full"
              style={{
                left: `${15 + i * 20}%`,
                top: `${20 + (i % 2) * 60}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
