import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  ShoppingBag,
  Star,
  ArrowRight,
  Menu,
  Search,
  Heart,
  User,
} from "lucide-react";
import { aurauiMotion } from "@/lib/motion";

import { useTheme } from "next-themes";
import Image from "next/image";

const Hero5 = () => {
  const { resolvedTheme } = useTheme();

  const logoSrc =
    resolvedTheme === "dark"
      ? "https://www.auraui.com/logo-dark.png"
      : "https://www.auraui.com/logo-light.png";

  return (
    <div className="hero-theme-40 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-accent/10" />

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
              Collections
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Sale
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              New Arrivals
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Brands
            </a>
          </div>

          <div className="flex items-center gap-4 ">
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex bg-gray-100/20 hover:bg-gray-100/30"
            >
              <Search className="w-4 h-4 " />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex bg-gray-100/20 hover:bg-gray-100/30"
            >
              <Heart className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex bg-gray-100/20 hover:bg-gray-100/30"
            >
              <User className="w-4 h-4" />
            </Button>
            <Button size="sm">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Cart (2)
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
                New Collection 2024
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Discover <span className="text-primary">Premium</span> Fashion
              </h1>
            </motion.div>

            <motion.p
              className="text-xl text-muted-foreground leading-relaxed"
              variants={aurauiMotion.item}
            >
              Curated collections from top designers. Express your unique style
              with our exclusive pieces and trending fashion essentials.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={aurauiMotion.item}
            >
              <Button size="lg" className="text-lg px-8">
                Shop Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-gray-100/20 hover:bg-gray-100/30"
              >
                View Lookbook
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-6 pt-4"
              variants={aurauiMotion.item}
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  4.9/5 from 2.5k+ reviews
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Product showcase */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="p-4 auraui-glass border-primary/20">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
                    <ShoppingBag className="w-16 h-16 text-primary/60" />
                  </div>
                  <h3 className="font-semibold mb-1">Summer Dress</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Elegant & Comfortable
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">$89</span>
                    <Badge variant="secondary" className="text-xs">
                      Trending
                    </Badge>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="pt-8"
              >
                <Card className="p-4 auraui-glass border-accent/20">
                  <div className="aspect-square bg-gradient-to-br from-accent/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                    <Heart className="w-16 h-16 text-accent/60" />
                  </div>
                  <h3 className="font-semibold mb-1">Designer Bag</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Limited Edition
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-accent">$199</span>
                    <Badge
                      variant="secondary"
                      className="text-xs bg-accent/10 text-accent"
                    >
                      New
                    </Badge>
                  </div>
                </Card>
              </motion.div>
            </div>

            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card className="p-4 auraui-glass border-secondary/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Free Shipping
                    </p>
                    <p className="font-semibold">On orders over $75</p>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-secondary/10 text-secondary border-secondary/20"
                  >
                    Limited Time
                  </Badge>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero5;
