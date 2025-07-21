import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Layers, Palette, Code2 } from "lucide-react";
import { aurauiMotion } from "@/lib/motion";
import clsx from "clsx";

export default function Hero42() {
  const features = [
    {
      icon: Sparkles,
      title: "Premium Quality",
      desc: "Handcrafted components",
    },
    { icon: Layers, title: "Layered Design", desc: "Depth and dimension" },
    { icon: Palette, title: "Color Harmony", desc: "Perfect combinations" },
    { icon: Code2, title: "Clean Code", desc: "Well-structured & readable" },
  ];

  return (
    <section className="hero-theme-42 min-h-screen flex flex-col items-center justify-start pt-20 relative overflow-hidden text-foreground">
      {/* ✅ Nav */}

      <nav className="w-full bg-transparent px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">
            <a href="#" className="flex items-center space-x-2">
              <img
                className="w-auto h-8"
                src="https://www.auraui.com/logo-light.png"
                alt="AuraUI Logo"
              />
            </a>
          </div>
          <nav className="space-x-6 text-sm font-medium hidden sm:flex">
            <a href="#" className="hover:text-primary transition">
              Templates
            </a>
            <a href="#" className="hover:text-primary transition">
              Docs
            </a>
            <a href="#" className="hover:text-primary transition">
              Components
            </a>
          </nav>
        </div>
      </nav>

      {/* ✅ Glassy BG in dark; neutral in light */}
      <div className="absolute inset-0 -z-10">
        <div className="hidden dark:block">
          <motion.div
            className="absolute inset-0 auraui-gradient-subtle"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 auraui-gradient-primary rounded-full opacity-20 blur-3xl"
            animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-80 h-80 auraui-gradient-accent rounded-full opacity-20 blur-3xl"
            animate={{ x: [0, -80, 0], y: [0, 60, 0], scale: [1, 1.3, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="block dark:hidden bg-[#f1f1f1]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-12">
        <div className="text-center max-w-5xl mx-auto">
          {/* ✅ Badge */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="auraui-glass-strong px-6 py-3 text-base border-white/20 dark:border-white/20 backdrop-blur-xl"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Glassmorphism Design
            </Badge>
          </motion.div>

          {/* ✅ Heading */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            Glass &{" "}
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Brilliance
            </span>
          </motion.h1>

          {/* ✅ Subheading */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the future of UI design with stunning glassmorphism
            effects, transparency, and depth.
          </motion.p>

          {/* ✅ Features */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            variants={aurauiMotion.container}
            initial="hidden"
            animate="visible"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={aurauiMotion.item}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className={clsx(
                    "p-6 text-center border",
                    "bg-white/80 dark:auraui-glass-strong",
                    "border-black/10 dark:border-white/10",
                    "shadow-md dark:auraui-shadow-elegant backdrop-blur-sm rounded-xl",
                  )}
                >
                  <div className="relative z-10">
                    <div
                      className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(236,72,153,0.15))",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(0,0,0,0.1)",
                      }}
                    >
                      <feature.icon className="w-8 h-8 text-blue-600 dark:text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-muted-foreground">
                      {feature.desc}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* ✅ CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="px-8 py-4 text-lg auraui-glass-strong backdrop-blur-xl border border-white/20 dark:border-white/20 bg-gradient-to-r from-primary to-accent text-white shadow-md"
            >
              Experience Magic
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg border border-border bg-background"
            >
              View Gallery
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
