import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { aurauiMotion } from "@/lib/motion";

export default function Hero24() {
  return (
    <section className="hero-theme-24 relative min-h-screen overflow-hidden text-white flex flex-col justify-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 auraui-gradient-primary z-0" />

      {/* Blurred Motion Elements */}
      <motion.div
        className="absolute inset-0 opacity-20 z-0"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/10 rounded-full blur-xl" />
      </motion.div>

      {/* Embedded Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="z-20 px-6 md:px-12 py-4 absolute top-0 left-0 right-0 flex items-center justify-between bg-white/5 backdrop-blur-md border-b border-white/10"
      >
        <div className="text-xl font-bold text-white tracking-tight">
          <a href="#" title="AuraUI Home">
            <img
              className="w-auto h-8"
              src="https://www.auraui.com/logo-dark.png"
              alt="AuraUI Logo"
            />
          </a>
        </div>
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-white/80">
          <a href="#">Components</a>
          <a href="#">Docs</a>
          <a href="#">Pricing</a>
          <a href="#">Showcase</a>
        </nav>
        <Button
          size="sm"
          className="text-sm bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-md"
        >
          Launch App
        </Button>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 pt-40 pb-20">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={aurauiMotion.container}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div className="mb-6" variants={aurauiMotion.item}>
            <Badge
              variant="secondary"
              className="auraui-glass px-4 py-2 text-sm font-medium"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Introducing Auraui v2.0
            </Badge>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-[2.75rem] sm:text-[3.5rem] md:text-[4.5rem] font-bold leading-tight mb-6"
            variants={aurauiMotion.item}
          >
            Build Beautiful{" "}
            <span className="block auraui-gradient-accent bg-clip-text text-transparent">
              User Interfaces
            </span>{" "}
            with Auraui
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
            variants={aurauiMotion.item}
          >
            A modern component library built with React, Tailwind CSS, and
            Framer Motion. Create stunning interfaces with minimal effort.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={aurauiMotion.item}
          >
            <motion.div {...aurauiMotion.buttonHover}>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/80 px-8 py-3 text-base sm:text-lg rounded-xl"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div {...aurauiMotion.buttonHover}>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-base sm:text-lg rounded-xl"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 mt-16 max-w-md mx-auto"
            variants={aurauiMotion.item}
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">
                50+
              </div>
              <div className="text-white/60 text-sm">Components</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">
                10k+
              </div>
              <div className="text-white/60 text-sm">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">
                99%
              </div>
              <div className="text-white/60 text-sm">Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
