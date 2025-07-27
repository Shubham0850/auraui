import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Rocket,
  TrendingUp,
  ArrowRight,
  Menu,
  Github,
  Twitter,
} from "lucide-react";
import { aurauiMotion } from "@/lib/motion";
import { useTheme } from "next-themes";
import Image from "next/image";

const Hero3 = () => {
  const { resolvedTheme } = useTheme();

  const logoSrc =
    resolvedTheme === "dark"
      ? "https://www.auraui.com/logo-dark.png"
      : "https://www.auraui.com/logo-light.png";

  return (
    <div className="min-h-screen hero-theme-38 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-background to-accent/20" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />

      {/* Navbar */}
      <motion.nav
        className="relative p-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <a href="#" title="AuraUI">
                <Image
                  className="w-auto h-8"
                  src={logoSrc}
                  alt="AuraUI Logo"
                  width={100}
                  height={32}
                />
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Product
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              Login
            </Button>
            <Button size="sm">Sign Up</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 pt-16 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={aurauiMotion.container}
          >
            <motion.div variants={aurauiMotion.item}>
              <Badge variant="secondary" className="mb-6 px-4 py-2">
                🚀 Now in Public Beta
              </Badge>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Launch Your{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Startup
                </span>{" "}
                in Days
              </h1>
            </motion.div>

            <motion.p
              className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
              variants={aurauiMotion.item}
            >
              Everything you need to build, launch, and scale your startup. From
              idea to IPO, we&apos;ve got the tools and community to help you
              succeed.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              variants={aurauiMotion.item}
            >
              <Button size="lg" className="text-lg px-8 py-6">
                Start Building
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </Button>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-6 pt-12"
              variants={aurauiMotion.container}
            >
              <motion.div variants={aurauiMotion.item}>
                <Card className="p-6 auraui-glass border-primary/20 text-center">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Fast Growth</h3>
                  <p className="text-muted-foreground">
                    Scale from 0 to millions of users, our proven framework
                  </p>
                </Card>
              </motion.div>

              <motion.div variants={aurauiMotion.item}>
                <Card className="p-6 auraui-glass border-accent/20 text-center">
                  <Rocket className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Quick Launch</h3>
                  <p className="text-muted-foreground">
                    Deploy your MVP in days, not months, with our starter kits
                  </p>
                </Card>
              </motion.div>

              <motion.div variants={aurauiMotion.item}>
                <Card className="p-6 auraui-glass border-secondary/20 text-center">
                  <Twitter className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Community</h3>
                  <p className="text-muted-foreground">
                    Join 10k+ founders sharing knowledge and experiences
                  </p>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-8 pt-8 text-sm text-muted-foreground"
              variants={aurauiMotion.item}
            >
              <span>Trusted by 2,000+ startups</span>
              <span>•</span>
              <span>$100M+ raised by our users</span>
              <span>•</span>
              <span>50+ successful exits</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
