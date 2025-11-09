import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { USP } from "@/components/USP";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#030303]">
      <Hero />
      <Features />
      <HowItWorks />
      <USP />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
