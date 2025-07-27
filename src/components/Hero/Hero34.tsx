import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Heart,
  Activity,
  Shield,
  ArrowRight,
  Menu,
  Phone,
  Calendar,
} from "lucide-react";
import { aurauiMotion } from "@/lib/motion";
import { useTheme } from "next-themes";
import Image from "next/image";

const Hero34 = () => {
  const { resolvedTheme } = useTheme();

  const logoSrc =
    resolvedTheme === "dark"
      ? "https://www.auraui.com/logo-dark.png"
      : "https://www.auraui.com/logo-light.png";

  return (
    <div className="hero-theme-38 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />

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
              Services
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Doctors
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Wellness
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
              <Phone className="w-4 h-4 mr-2" />
              Emergency
            </Button>
            <Button size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Book Now
            </Button>
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
              <Badge
                variant="secondary"
                className="mb-6 bg-primary/10 text-primary"
              >
                <Shield className="w-3 h-3 mr-2" />
                HIPAA Compliant
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Your Health, <span className="text-primary">Reimagined</span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl text-muted-foreground leading-relaxed"
              variants={aurauiMotion.item}
            >
              Connect with top healthcare professionals, monitor your vitals in
              real-time, and take control of your wellness journey with our
              AI-powered platform.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={aurauiMotion.item}
            >
              <Button size="lg" className="text-lg px-8">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation
              </Button>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-6 pt-6"
              variants={aurauiMotion.item}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Care Access</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Specialists</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">
                  Satisfaction
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Health dashboard */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-6 auraui-glass border-primary/20">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Health Dashboard</h3>
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary"
                  >
                    <Activity className="w-3 h-3 mr-1" />
                    Live
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-primary/10 rounded-xl">
                    <Heart className="w-8 h-8 text-primary mb-2" />
                    <div className="text-2xl font-bold">72</div>
                    <div className="text-sm text-muted-foreground">
                      Heart Rate
                    </div>
                  </div>
                  <div className="p-4 bg-accent/10 rounded-xl">
                    <Activity className="w-8 h-8 text-accent mb-2" />
                    <div className="text-2xl font-bold">8,543</div>
                    <div className="text-sm text-muted-foreground">
                      Steps Today
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Weekly Fitness Goal</span>
                    <span className="text-primary">85%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      className="bg-primary h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="p-3 bg-accent/5 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        Next Appointment
                      </span>
                      <Badge variant="outline" className="text-xs">
                        Tomorrow
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Dr. Smith - Cardiology
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Doctor
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    View Records
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

export default Hero34;
