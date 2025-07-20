import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, Target, TrendingUp } from "lucide-react";
import { aurauiMotion } from "@/lib/motion";

export default function Hero37() {
  const aiFeatures = [
    { icon: Brain, title: "Smart AI", value: "99.9%", label: "Accuracy" },
    { icon: Zap, title: "Lightning", value: "< 100ms", label: "Response" },
    { icon: Target, title: "Precision", value: "10x", label: "Faster" },
    { icon: TrendingUp, title: "Growth", value: "+250%", label: "Performance" },
  ];

  return (
    <section className="hero-theme-37 bg-[#0A0A0A] text-white min-h-screen flex flex-col items-center py-20 relative overflow-hidden">
      {/* Navbar */}
      <motion.div
        className="w-full max-w-7xl mx-auto px-6 py-4 mb-12 flex items-center justify-between bg-[#121212]/80 backdrop-blur-md border border-white/10 rounded-2xl z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="text-xl font-bold tracking-tight">
          <a href="#" className="flex items-center space-x-2">
            <img
              className="w-auto h-8"
              src="https://www.auraui.com/logo-dark.png"
              alt="AuraUI Logo"
            />
          </a>
        </div>

        <nav className="hidden md:flex space-x-8 items-center text-sm font-medium">
          {["Solutions", "Technology", "Use Cases", "Company"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-white hover:text-green-400 transition"
            >
              {link}
            </a>
          ))}
        </nav>

        <Button
          size="sm"
          className="bg-green-500 hover:bg-green-400 text-white px-5 py-2 rounded-md shadow-lg"
        >
          Try Demo
        </Button>
      </motion.div>

      {/* Neural pattern background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 10% 90%, #00ff99 1px, transparent 1px),
              radial-gradient(circle at 90% 10%, #00ffcc 1px, transparent 1px),
              radial-gradient(circle at 50% 50%, #00ffaa 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px, 120px 120px, 160px 160px",
            opacity: 0.15,
          }}
          animate={{
            backgroundPosition: [
              "0% 0%",
              "100% 100%",
              "0% 0%", // loop back
            ],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Glowing Badge */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <div className="absolute inset-0 blur-xl rounded-full bg-gradient-to-r from-green-400 to-green-600 opacity-30"></div>
            <Badge
              variant="outline"
              className="relative z-10 bg-[#1A1A1A] text-white px-6 py-3 text-base font-medium border border-white/10 shadow-md flex items-center"
            >
              <Brain className="w-5 h-5 mr-2 animate-pulse" />
              Powered by Advanced AI
            </Badge>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Next-Gen
          <span
            className="block bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #22c55e, #86efac)",
            }}
          >
            AI Platform
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Harness the power of artificial intelligence to transform your
          business. Our cutting-edge AI tools provide unprecedented insights and
          automation.
        </motion.p>

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
              className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 text-lg rounded-xl shadow-xl transition-all duration-300"
            >
              Start AI Journey
            </Button>
          </motion.div>

          <motion.div {...aurauiMotion.buttonHover}>
            <button className="px-6 py-2.5 text-lg border border-white/20 text-white hover:bg-white/10 rounded-xl  transition-all duration-300">
              Watch Demo
            </button>
          </motion.div>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={aurauiMotion.container}
          initial="hidden"
          animate="visible"
        >
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={aurauiMotion.item}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-6 text-center bg-[#121212]/70 border border-white/10 shadow-md rounded-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-green-300 mb-1">
                  {feature.value}
                </div>
                <div className="text-sm text-gray-400">{feature.label}</div>
                <div className="text-xs font-medium text-white mt-1">
                  {feature.title}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
