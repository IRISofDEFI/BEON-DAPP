
import React from "react";
import { 
  Shield, QrCode, FileCheck, Building2, History, ClockCountdown, Wallet, FileCode
} from "lucide-react";

const Features: React.FC = () => {
  const features = [
    {
      icon: <Shield />,
      title: "Blockchain-Based Authentication",
      description: "Verify product authenticity using secure blockchain technology that cannot be tampered with"
    },
    {
      icon: <QrCode />,
      title: "QR Code & NFT Receipts",
      description: "Each authentic product includes a unique QR code and generates an NFT receipt upon verification"
    },
    {
      icon: <Building2 />,
      title: "Decentralized Brand Registration",
      description: "Brands can securely register and manage their product authenticity in a decentralized system"
    },
    {
      icon: <History />,
      title: "Transparent Product History",
      description: "View the complete history of a product on-chain, from manufacturing to current ownership"
    },
    {
      icon: <ClockCountdown />,
      title: "Expiration Verification",
      description: "Check if beauty products are expired or still safe to use with blockchain-verified dates"
    },
    {
      icon: <Wallet />,
      title: "Web3 Wallet Integration",
      description: "Connect your Web3 wallet to manage your authenticated beauty products collection"
    },
    {
      icon: <FileCheck />,
      title: "Certificate of Authenticity",
      description: "Receive digital certificates proving ownership and authenticity of premium beauty items"
    },
    {
      icon: <FileCode />,
      title: "Smart Contract Interaction",
      description: "Secure and transparent interactions with product verification smart contracts"
    }
  ];

  return (
    <section id="features" className="py-20 relative bg-beon-gray/30">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-beon-purple/10 rounded-full filter blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-beon-pink/10 rounded-full filter blur-[100px] -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center mx-auto">
            Platform Features
          </h2>
          <p className="mt-6 text-center text-gray-300 max-w-2xl mx-auto mb-16">
            BEON ∞ combines cutting-edge blockchain technology with the beauty industry
            to create a secure, transparent ecosystem for authentic products.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
