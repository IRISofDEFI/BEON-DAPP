
import React from "react";
import { Button } from "@/components/ui/button";
import { QrCode, Sparkles } from "lucide-react";

const CtaSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-beon-purple/30 to-transparent -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto glass-panel p-12 relative">
          {/* Glow effects */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-beon-pink/20 rounded-full filter blur-[80px] -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-beon-purple/20 rounded-full filter blur-[80px] -z-10"></div>

          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to experience the future of beauty authentication?
              </h2>
              <p className="text-gray-300 mb-8">
                Try our demo dApp and see how BEON ∞ transforms beauty product verification
                through blockchain technology. Scan, verify, and own with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="bg-gradient-to-r from-beon-purple to-beon-pink text-white hover:shadow-[0_0_20px_rgba(249,28,180,0.4)] flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  Try Demo dApp
                </Button>
                <Button size="lg" variant="outline" className="border-beon-pink text-white flex items-center gap-2">
                  <QrCode className="h-5 w-5" />
                  Scan Sample QR
                </Button>
              </div>
            </div>

            <div className="flex-1 flex justify-center md:justify-end">
              <div className="relative">
                <div className="w-72 h-72 rounded-full bg-gradient-to-r from-beon-purple to-beon-pink p-0.5 animate-glow">
                  <div className="w-full h-full rounded-full bg-beon-black flex items-center justify-center overflow-hidden">
                    <img 
                      src="/lovable-uploads/ddba4ab8-98da-4cc0-801e-649b3196a833.png" 
                      alt="BEON Demo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-beon-purple to-beon-pink rounded-full filter blur-[30px] -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
