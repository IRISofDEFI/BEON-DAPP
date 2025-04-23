
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Infinity, ShieldCheck, UserCheck, Sparkles } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-beon-purple/20 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-beon-pink/20 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Main content */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Left text content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-beon-purple to-beon-pink">
                Web3
              </span>{" "}
              <span className="relative inline-block">
                Beauty Trust
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-beon-purple to-beon-pink"></div>
              </span>{" "}
              <br />
              <span className="flex items-center justify-center md:justify-start gap-2">
                for
                <Infinity className="text-beon-pink animate-pulse-gentle" size={48} />
              </span>
            </h1>

            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-xl">
              The global standard for beauty product authenticity, empowering customers, brands, and regulators with blockchain-verified trust and transparency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-beon-purple to-beon-pink text-white hover:shadow-[0_0_20px_rgba(249,28,180,0.4)]">
                <ShieldCheck className="mr-2 h-5 w-5" />
                Verify Product
              </Button>
              <Button size="lg" variant="outline" className="border-beon-pink text-white group">
                <UserCheck className="mr-2 h-5 w-5" />
                Register Brand
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* User roles */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="glass-panel p-4">
                <h3 className="font-bold text-beon-pink mb-2 flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" /> For Customers
                </h3>
                <p className="text-gray-300">Scan QR codes to verify authenticity and earn rewards</p>
              </div>
              <div className="glass-panel p-4">
                <h3 className="font-bold text-beon-pink mb-2 flex items-center gap-2">
                  <UserCheck className="h-4 w-4" /> For Brands
                </h3>
                <p className="text-gray-300">Register products on-chain and build customer trust</p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="flex-1 relative">
            <div className="relative glass-panel p-4 rounded-2xl animate-float shadow-2xl">
              <img
                src="/lovable-uploads/4b04746f-7885-413a-b1cf-66d271f4d5bf.png"
                alt="BEON Categories"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-shimmer-gradient animate-shimmer"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-beon-purple to-beon-pink rounded-full filter blur-[40px] -z-10"></div>
          </div>
        </div>

        {/* Stats cards */}
        <div className="w-full max-w-5xl mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Global Brands Protected", value: "Coming Soon" },
            { label: "Products Verified", value: "🧪 Pilot Phase" },
            { label: "Counterfeits Prevented", value: "🔒 In Progress" }
          ].map((stat, index) => (
            <div key={index} className="glass-panel p-6 text-center">
              <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-beon-purple to-beon-pink mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
