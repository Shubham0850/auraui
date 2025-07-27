import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  CreditCard,
  Shield,
  TrendingUp,
  ArrowRight,
  Menu,
  Phone,
  Lock,
} from "lucide-react";
import { aurauiMotion } from "@/lib/motion";
import { useTheme } from "nextra-theme-docs";
import Image from "next/image";

const Hero28 = () => {
  const { resolvedTheme } = useTheme();

  const logoSrc =
    resolvedTheme === "dark"
      ? "https://www.auraui.com/logo-dark.png"
      : "https://www.auraui.com/logo-light.png";

  return (
    <div className="hero-theme-42 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-background to-accent/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      {/* Navbar */}
      <motion.nav
        className="relative z-50 p-6"
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
              Personal
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Business
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Investing
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Support
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Phone className="w-4 h-4 mr-2" />
              Contact
            </Button>
            <Button size="sm">Open Account</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={aurauiMotion.container}
          >
            <motion.div variants={aurauiMotion.item}>
              <Badge
                variant="secondary"
                className="mb-6 bg-primary/10 text-primary"
              >
                <Shield className="w-3 h-3 mr-2" />
                Bank-Grade Security
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Modern <span className="text-primary">Banking</span> for Digital
                Life
              </h1>
            </motion.div>

            <motion.p
              className="text-xl text-muted-foreground leading-relaxed"
              variants={aurauiMotion.item}
            >
              Experience seamless financial management with our cutting-edge
              platform. Send, receive, invest, and grow your wealth with
              confidence.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={aurauiMotion.item}
            >
              <Button size="lg" className="text-lg px-8">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Lock className="w-5 h-5 mr-2" />
                Security Details
              </Button>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-6 pt-6"
              variants={aurauiMotion.item}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">256-bit</div>
                <div className="text-sm text-muted-foreground">Encryption</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">$5M</div>
                <div className="text-sm text-muted-foreground">
                  FDIC Insured
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoring</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Financial dashboard */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-6 auraui-glass border-primary/20">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Account Overview</h3>
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary"
                  >
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +12.5%
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">
                        Total Balance
                      </span>
                      <CreditCard className="w-4 h-4 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary">
                      $24,830.50
                    </div>
                    <div className="text-sm text-primary/70">
                      +$1,250 this month
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-accent/5 rounded-xl">
                      <div className="text-sm text-muted-foreground mb-1">
                        Savings
                      </div>
                      <div className="text-xl font-semibold text-accent">
                        $18,200
                      </div>
                    </div>
                    <div className="p-4 bg-secondary/5 rounded-xl">
                      <div className="text-sm text-muted-foreground mb-1">
                        Investments
                      </div>
                      <div className="text-xl font-semibold text-secondary">
                        $6,630
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Monthly Growth</span>
                    <span className="text-primary font-medium">+12.5%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      className="bg-primary h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    Transfer
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    Invest
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero28;
