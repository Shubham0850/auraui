import { Inter } from "next/font/google";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import UiSamples from "@/components/home/UiSamples";
import UiComponents from "@/components/home/UiComponents";
import Testimonials from "@/components/home/Testimonials";
import FAQs from "@/components/home/FAQs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <UiSamples />
      <UiComponents />
      <Testimonials />
      <FAQs />
    </>
  );
}
