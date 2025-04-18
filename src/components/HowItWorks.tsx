
import React from "react";
import { ArrowRight, CheckCircle, QrCode, Shield, ShieldCheck, Smartphone } from "lucide-react";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Shield className="w-8 h-8 text-beon-pink" />,
      title: "Brand Registration",
      description: "Beauty brands register on our decentralized platform and authenticate their product lineup"
    },
    {
      icon: <QrCode className="w-8 h-8 text-beon-pink" />,
      title: "QR Code Generation",
      description: "Unique QR codes are generated for each product and tied to the blockchain"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-beon-pink" />,
      title: "Consumer Scan",
      description: "Customers scan product QR code with any smartphone to verify authenticity"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-beon-pink" />,
      title: "Verification & NFT",
      description: "Real-time blockchain verification and NFT receipt of authentic products"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-beon-pink" />,
      title: "Ownership Tracking",
      description: "Ownership history and product lifecycle are securely tracked on-chain"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center mx-auto">
            How BEON ∞ Works
          </h2>
          <p className="mt-6 text-center text-gray-300 max-w-2xl mx-auto mb-16">
            Our platform leverages blockchain technology to create a seamless
            verification process for beauty products, ensuring authenticity from
            production to your beauty routine.
          </p>

          <div className="mt-16 relative">
            {/* Process flow line */}
            <div className="hidden md:block absolute top-24 left-0 w-full h-0.5 bg-gradient-to-r from-beon-purple to-beon-pink"></div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
              {steps.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center">
                  {/* Circle with icon */}
                  <div className="relative z-10 bg-gradient-to-r from-beon-purple to-beon-pink p-0.5 rounded-full mb-6 glow-effect">
                    <div className="bg-beon-black rounded-full p-4">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2 text-center">{step.title}</h3>
                  <p className="text-sm text-gray-400 text-center">{step.description}</p>

                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-4">
                      <ArrowRight className="text-beon-pink" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
