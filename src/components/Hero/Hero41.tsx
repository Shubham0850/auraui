import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Star, Github } from "lucide-react";
import { aurauiMotion } from "@/lib/motion";

export default function Hero41() {
  const communityStats = [
    {
      icon: Github,
      value: "50k+",
      label: "Contributors",
      color: "text-primary",
    },
    { icon: Star, value: "100k+", label: "Stars", color: "text-accent" },
    {
      icon: MessageCircle,
      value: "25k+",
      label: "Discussions",
      color: "text-secondary",
    },
    { icon: Heart, value: "∞", label: "Support", color: "text-primary" },
  ];

  const contributors = [
    { name: "Alex", avatar: "/placeholder.svg", role: "Maintainer" },
    { name: "Sarah", avatar: "/placeholder.svg", role: "Core Dev" },
    { name: "Mike", avatar: "/placeholder.svg", role: "Designer" },
    { name: "Emma", avatar: "/placeholder.svg", role: "Community" },
    { name: "John", avatar: "/placeholder.svg", role: "Docs" },
    { name: "Lisa", avatar: "/placeholder.svg", role: "Testing" },
  ];

  return (
    <section className="hero-theme-41 min-h-screen flex items-center justify-center py-20 relative overflow-hidden bg-[#f9f9f9] dark:bg-background">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, hsl(var(--primary)) 1px, transparent 1px),
              radial-gradient(circle at 80% 80%, hsl(var(--accent)) 1px, transparent 1px),
              radial-gradient(circle at 40% 60%, hsl(var(--secondary)) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px, 90px 90px, 120px 120px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="auraui-glass px-6 py-3 text-base"
            >
              <Github className="w-5 h-5 mr-2" />
              Open Source & Free Forever
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-5xl md:text-8xl font-bold mb-6 leading-tight text-neutral-900 dark:text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            Built by
            <span className="block auraui-gradient-primary bg-clip-text text-transparent">
              Community
            </span>
            for Everyone
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-lg md:text-xl text-neutral-600 dark:text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join thousands of developers, designers, and creators building the
            future together. Open source, collaborative, and completely free.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            variants={aurauiMotion.container}
            initial="hidden"
            animate="visible"
          >
            {communityStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={aurauiMotion.item}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6 text-center bg-white dark:bg-[#111827] auraui-shadow-elegant border-0 relative overflow-hidden group transition-colors duration-300">
                  <motion.div
                    className="absolute inset-0 auraui-gradient-glow opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative z-10">
                    <motion.div
                      className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-muted/20 flex items-center justify-center ${stat.color}`}
                      animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5,
                      }}
                    >
                      <stat.icon className="w-6 h-6" />
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
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3,
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Contributors */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-muted-foreground">
              Meet our amazing contributors
            </h3>
            <motion.div
              className="flex justify-center items-center gap-4 flex-wrap"
              variants={aurauiMotion.container}
              initial="hidden"
              animate="visible"
            >
              {contributors.map((contributor, index) => (
                <motion.div
                  key={index}
                  className="text-center group cursor-pointer"
                  variants={aurauiMotion.item}
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  >
                    <Avatar className="w-16 h-16 mx-auto mb-2 auraui-shadow-primary group-hover:auraui-shadow-accent transition-all duration-300">
                      <AvatarImage src={contributor.avatar} />
                      <AvatarFallback className="auraui-gradient-primary text-white">
                        {contributor.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-xs font-medium">
                      {contributor.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {contributor.role}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div {...aurauiMotion.buttonHover}>
              <Button
                size="lg"
                className="auraui-gradient-primary auraui-shadow-primary px-8 py-4 text-lg"
              >
                <Github className="mr-2 w-5 h-5" />
                View on GitHub
              </Button>
            </motion.div>

            <motion.div {...aurauiMotion.buttonHover}>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                <Heart className="mr-2 w-5 h-5" />
                Become a Sponsor
              </Button>
            </motion.div>
          </motion.div>

          {/* Footer */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-muted-foreground mb-4">
              "The best projects are built by passionate communities"
            </p>
            <div className="text-sm text-muted-foreground">
              Join our{" "}
              <span className="font-semibold text-primary">Discord</span> •
              Follow us on{" "}
              <span className="font-semibold text-primary">Twitter</span> • Star
              us on <span className="font-semibold text-primary">GitHub</span>
            </div>
          </motion.div>

          {/* Floating elements */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{
                left: `${10 + i * 8}%`,
                top: `${15 + (i % 4) * 20}%`,
              }}
              animate={{
                y: [0, -25, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
