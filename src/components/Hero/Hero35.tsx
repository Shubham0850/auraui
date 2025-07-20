import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, Shield, Rocket } from "lucide-react";
import { aurauiMotion } from "@/lib/motion";

export default function Hero35() {
  const features = [
    { icon: Zap, title: "Lightning Fast", desc: "Optimized performance" },
    { icon: Shield, title: "Secure", desc: "Enterprise-grade security" },
    { icon: Rocket, title: "Scalable", desc: "Grows with your needs" },
  ];

  return (
    <section className="relative min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      {/* Embedded Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-12 px-6 md:px-12 py-4 flex items-center justify-between bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 rounded-xl"
      >
        <div className="text-xl font-bold text-white tracking-tight">
          <a href="#">
            <img
              className="w-auto h-8"
              src="https://www.auraui.com/logo-dark.png"
              alt="AuraUI Logo"
            />
          </a>
        </div>
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-white/80">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Docs</a>
          <a href="#">Blog</a>
        </nav>
        <a
          href="#"
          className="hidden md:inline-block px-5 py-2 text-sm font-medium text-white rounded-md"
          style={{
            background: "linear-gradient(135deg, #4FD1FF, #60A5FA)",
            boxShadow: "0 8px 32px rgba(79, 209, 255, 0.3)",
          }}
        >
          Get Started
        </a>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 pt-36 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="inline-block bg-white/5 text-white text-sm px-3 py-1 rounded-full border border-white/10 mb-4">
              🚀 New Release
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              The Future of
              <span
                className="block bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #4FD1FF, #60A5FA)",
                }}
              >
                SaaS Development
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-8 max-w-lg">
              Build, deploy, and scale your applications with our cutting-edge
              platform. Experience the next generation of development tools.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <motion.div {...aurauiMotion.buttonHover}>
                <Button
                  size="lg"
                  className="text-white border-0 px-6 py-3 font-medium rounded-md"
                  style={{
                    background: "linear-gradient(135deg, #4FD1FF, #60A5FA)",
                    boxShadow: "0 8px 32px rgba(79, 209, 255, 0.3)",
                  }}
                >
                  Start Free Trial
                </Button>
              </motion.div>

              <motion.div {...aurauiMotion.buttonHover}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-black text-white border border-white/20 px-6 py-3 font-medium rounded-md"
                >
                  View Pricing
                </Button>
              </motion.div>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
              variants={aurauiMotion.container}
              initial="hidden"
              animate="visible"
            >
              {features.map((feature, index) => (
                <motion.div key={index} variants={aurauiMotion.item}>
                  <Card className="bg-[#111] text-white p-4 border border-white/10 backdrop-blur-md">
                    <feature.icon className="w-8 h-8 text-cyan-400 mb-2" />
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="relative">
              <motion.div
                className="bg-[#1A1A1A] text-white rounded-2xl p-8"
                style={{
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
                }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Dashboard</h3>
                    <span className="bg-white/10 text-white px-3 py-1 text-xs rounded-md">
                      Live
                    </span>
                  </div>

                  <div className="space-y-3">
                    {[60, 80, 45, 90].map((width, index) => (
                      <motion.div
                        key={index}
                        className="h-3 bg-gray-700 rounded-full overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            background:
                              "linear-gradient(135deg, #4FD1FF, #60A5FA)",
                            width: `${width}%`,
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: `${width}%` }}
                          transition={{
                            duration: 1,
                            delay: 0.7 + index * 0.1,
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-[#111] rounded-xl p-4 text-white text-center"
                style={{
                  boxShadow: "0 8px 32px rgba(79, 209, 255, 0.3)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="text-2xl font-bold text-cyan-300">99.9%</div>
                <div className="text-xs text-gray-400">Uptime</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-[#111] rounded-xl p-4 text-white text-center"
                style={{
                  boxShadow: "0 8px 32px rgba(192, 132, 252, 0.3)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <div className="text-2xl font-bold text-cyan-300">24/7</div>
                <div className="text-xs text-gray-400">Support</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
