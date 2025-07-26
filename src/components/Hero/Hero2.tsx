import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Building2, Users, ArrowRight, Menu, Phone, Mail } from "lucide-react";
import { aurauiMotion } from "@/lib/motion";
import Image from "next/image";
import { useTheme } from "next-themes";

const Hero2 = () => {
  const { resolvedTheme } = useTheme();

  const logoSrc =
    resolvedTheme === "dark"
      ? "https://www.auraui.com/logo-dark.png"
      : "https://www.auraui.com/logo-light.png";

  return (
    <div className="min-h-screen hero-theme-36 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />

      {/* Navbar */}
      <motion.nav
        className="relative  p-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto flex items-center justify-between">
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

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Solutions
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Industries
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Resources
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Company
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:flex bg-gray-100/30 hover:bg-gray-100/50 "
            >
              <Phone className="w-4 h-4 mr-2" />
              Contact
            </Button>
            <Button size="sm">Get Started</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 pt-12 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={aurauiMotion.container}
          >
            <motion.div variants={aurauiMotion.item}>
              <Badge variant="secondary" className="mb-4">
                Trusted by 500+ enterprises
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your <span className="text-primary">Business</span>{" "}
                Operations
              </h1>
            </motion.div>

            <motion.p
              className="text-xl text-muted-foreground leading-relaxed"
              variants={aurauiMotion.item}
            >
              Streamline workflows, boost productivity, and drive growth with
              our enterprise-grade platform. Join thousands of companies already
              transforming their operations.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={aurauiMotion.item}
            >
              <Button size="lg" className="text-lg px-8">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 hover:bg-gray-100/30"
              >
                <Mail className="w-5 h-5 mr-2 " />
                Schedule Demo
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-6 pt-4"
              variants={aurauiMotion.item}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Enterprises</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8 auraui-glass border-primary/20">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Dashboard Overview</h3>
                  <Badge variant="secondary">Live</Badge>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <Users className="w-8 h-8 text-primary mb-2" />
                    <div className="text-2xl font-bold">2.4K</div>
                    <div className="text-sm text-muted-foreground">
                      Active Users
                    </div>
                  </div>
                  <div className="p-4 bg-accent/10 rounded-lg">
                    <Building2 className="w-8 h-8 text-accent mb-2" />
                    <div className="text-2xl font-bold">156</div>
                    <div className="text-sm text-muted-foreground">
                      Projects
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>System Performance</span>
                    <span className="text-primary">98%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      className="bg-primary h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "98%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
