import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Users, Zap, TrendingUp } from "lucide-react";
import { aurauiMotion } from "@/lib/motion";

export default function Hero39() {
  const launchMetrics = [
    { icon: Users, value: "10k+", label: "Early Users", color: "text-primary" },
    { icon: Zap, value: "99.9%", label: "Uptime", color: "text-accent" },
    {
      icon: TrendingUp,
      value: "+340%",
      label: "Growth",
      color: "text-secondary",
    },
    { icon: Rocket, value: "24h", label: "Launch", color: "text-primary" },
  ];

  return (
    <section className="hero-theme-39 bg-[#FFF6F6] min-h-screen flex flex-col items-center justify-start py-6 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Navbar */}
      <nav className="w-full max-w-7xl mx-auto flex items-center justify-between py-4 md:py-10">
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

      {/* Dynamic background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 auraui-gradient-primary rounded-full blur-3xl" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Countdown badge */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="auraui-glass px-6 py-3 text-lg auraui-shadow-primary"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-3 h-3 bg-primary rounded-full mr-3"
              />
              Launching in 24 Hours
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            The Future
            <motion.span
              className="block auraui-gradient-primary bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Starts Now
            </motion.span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join thousands of early adopters experiencing the next generation of
            innovation. Be part of something extraordinary from day one.
          </motion.p>

          {/* Metrics grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            variants={aurauiMotion.container}
            initial="hidden"
            animate="visible"
          >
            {launchMetrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={aurauiMotion.item}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6 text-center auraui-glass auraui-shadow-elegant border-0 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 auraui-gradient-glow opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative z-10">
                    <motion.div
                      className={`w-12 h-12 mx-auto mb-4 rounded-xl auraui-gradient-primary flex items-center justify-center ${metric.color}`}
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <metric.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <motion.div
                      className="text-2xl font-bold mb-1 auraui-gradient-accent bg-clip-text text-transparent"
                      animate={{
                        filter: [
                          "brightness(1)",
                          "brightness(1.2)",
                          "brightness(1)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                    >
                      {metric.value}
                    </motion.div>
                    <div className="text-sm text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              {...aurauiMotion.buttonHover}
              whileHover={{
                boxShadow: "0 0 30px hsl(var(--primary) / 0.5)",
                scale: 1.05,
              }}
            >
              <Button
                size="lg"
                className="auraui-gradient-primary auraui-shadow-primary px-8 py-4 text-lg relative overflow-hidden"
              >
                <motion.span className="relative z-10 flex items-center">
                  <Rocket className="mr-2 w-5 h-5" />
                  Get Early Access
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </Button>
            </motion.div>

            <motion.div {...aurauiMotion.buttonHover}>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Launch countdown timer */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-sm text-muted-foreground mb-4">
              Time until launch
            </div>
            <div className="flex justify-center gap-4">
              {["23", "14", "27", "45"].map((time, index) => (
                <motion.div
                  key={index}
                  className="auraui-glass rounded-lg p-3 min-w-[60px]"
                  animate={{
                    scale: [1, 1.05, 1],
                    filter: [
                      "brightness(1)",
                      "brightness(1.1)",
                      "brightness(1)",
                    ],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.1,
                  }}
                >
                  <div className="text-2xl font-bold auraui-gradient-primary bg-clip-text text-transparent">
                    {time}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {["HRS", "MIN", "SEC", "MS"][index]}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Animated launch particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/50 rounded-full"
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
