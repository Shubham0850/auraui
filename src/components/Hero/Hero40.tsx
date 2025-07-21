import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Monitor, Tablet, Watch } from "lucide-react";
import { aurauiMotion } from "@/lib/motion";

export default function Hero40() {
  const devices = [
    {
      icon: Smartphone,
      name: "Mobile",
      desc: "iOS & Android",
      color: "text-primary",
    },
    {
      icon: Monitor,
      name: "Desktop",
      desc: "Windows & Mac",
      color: "text-accent",
    },
    {
      icon: Tablet,
      name: "Tablet",
      desc: "iPad & Android",
      color: "text-secondary",
    },
    {
      icon: Watch,
      name: "Wearables",
      desc: "Smart Watches",
      color: "text-primary",
    },
  ];

  const features = [
    "Cross-platform compatibility",
    "Real-time synchronization",
    "Offline functionality",
    "Cloud integration",
  ];

  return (
    <section className="hero-theme-40 min-h-screen flex flex-col items-center justify-start py-6 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <nav className="w-full max-w-6xl mx-auto flex items-center justify-between py-4 md:py-10">
        {/* Logo */}
        <div className="text-xl font-bold tracking-tight">
          <a href="#" className="flex items-center space-x-2">
            <img
              className="w-auto h-8"
              src="https://www.auraui.com/logo-light.png"
              alt="AuraUI Logo"
            />
          </a>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-neutral-500">
          <a href="#" className="hover:text-primary transition">
            Solutions
          </a>
          <a href="#" className="hover:text-primary transition">
            Tech
          </a>
          <a href="#" className="hover:text-primary transition">
            Launch
          </a>
          <a href="#" className="hover:text-primary transition">
            Team
          </a>
        </div>

        {/* CTA */}
        <Button className="bg-gradient-to-r from-primary to-secondary text-white rounded-full px-5 py-2 text-sm shadow-md">
          Try Demo
        </Button>
      </nav>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <Badge variant="outline" className="mb-6 px-4 py-2">
              📱 Universal App
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              One App
              <span className="block auraui-gradient-primary bg-clip-text text-transparent">
                Every Device
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Seamlessly experience our product across all your devices. Your
              data, preferences, and progress sync instantly everywhere.
            </p>

            {/* Feature list */}
            <motion.div
              className="space-y-3 mb-8"
              variants={aurauiMotion.container}
              initial="hidden"
              animate="visible"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  variants={aurauiMotion.item}
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex flex-wrap gap-4 mb-8">
              <motion.div {...aurauiMotion.buttonHover}>
                <Button
                  size="lg"
                  className="auraui-gradient-primary auraui-shadow-primary"
                >
                  Download Now
                </Button>
              </motion.div>

              <motion.div {...aurauiMotion.buttonHover}>
                <Button size="lg" variant="outline">
                  View Demo
                </Button>
              </motion.div>
            </div>

            {/* Download stats */}
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div>
                <span className="font-semibold text-foreground">1M+</span>{" "}
                Downloads
              </div>
              <div>
                <span className="font-semibold text-foreground">4.8★</span>{" "}
                Rating
              </div>
              <div>
                <span className="font-semibold text-foreground">Free</span>{" "}
                Forever
              </div>
            </div>
          </motion.div>

          {/* Right content - Device showcase */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Device grid */}
            <motion.div
              className="grid grid-cols-2 gap-6 relative z-10"
              variants={aurauiMotion.container}
              initial="hidden"
              animate="visible"
            >
              {devices.map((device, index) => (
                <motion.div
                  key={index}
                  variants={aurauiMotion.item}
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6 text-center auraui-glass auraui-shadow-elegant border-0 relative overflow-hidden group">
                    <motion.div
                      className="absolute inset-0 auraui-gradient-glow opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="relative z-10">
                      <motion.div
                        className={`w-16 h-16 mx-auto mb-4 rounded-2xl auraui-gradient-primary flex items-center justify-center ${device.color}`}
                        animate={{
                          y: [0, -5, 0],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2,
                        }}
                      >
                        <device.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-lg font-semibold mb-2">
                        {device.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {device.desc}
                      </p>

                      {/* Download indicator */}
                      <motion.div
                        className="mt-4 text-xs text-primary font-medium opacity-0 group-hover:opacity-100"
                        initial={{ y: 10 }}
                        whileHover={{ y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        Available Now
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Sync visualization */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full">
                <motion.path
                  d="M 120 120 Q 200 50 280 120"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  opacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.path
                  d="M 120 280 Q 200 350 280 280"
                  stroke="hsl(var(--accent))"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  opacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
                <motion.path
                  d="M 120 120 Q 50 200 120 280"
                  stroke="hsl(var(--secondary))"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  opacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </svg>

              {/* Central sync indicator */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-4 h-4 bg-primary rounded-full auraui-shadow-glow" />
              </motion.div>
            </motion.div>

            {/* Floating sync icons */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-6 h-6 auraui-gradient-primary rounded-full opacity-20"
                style={{
                  left: `${30 + i * 15}%`,
                  top: `${20 + (i % 3) * 30}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 3 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
