
import React from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import CtaSection from "@/components/CtaSection";
import Roadmap from "@/components/Roadmap";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-beon-black text-white overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <HowItWorks />
      <Features />
      <CtaSection />
      <Roadmap />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Index;
