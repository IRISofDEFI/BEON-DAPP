
import React from "react";
import { CheckCircle, Circle } from "lucide-react";

const Roadmap: React.FC = () => {
  const phases = [
    {
      title: "Phase 1: Foundation",
      quarter: "Q1 2025",
      completed: true,
      milestones: [
        "Platform architecture development",
        "Smart contract design and audit",
        "Brand partnership outreach",
        "Core team formation"
      ]
    },
    {
      title: "Phase 2: Beta Launch",
      quarter: "Q2-Q3 2025",
      completed: true,
      milestones: [
        "Closed beta testing with select brands",
        "QR code generation system",
        "NFT receipt implementation",
        "User testing and feedback"
      ]
    },
    {
      title: "Phase 3: Market Entry",
      quarter: "Q4 2025 - Q1 2026",
      completed: false,
      milestones: [
        "Public platform launch",
        "Brand onboarding system",
        "Mobile app development",
        "Marketing campaign"
      ]
    },
    {
      title: "Phase 4: Ecosystem Expansion",
      quarter: "Q2-Q4 2026",
      completed: false,
      milestones: [
        "Advanced analytics for brands",
        "Secondary market for authenticated products",
        "Global expansion partnerships",
        "Loyalty program implementation"
      ]
    },
    {
      title: "Phase 5: Industry Integration",
      quarter: "2027 and beyond",
      completed: false,
      milestones: [
        "Industry standard certification",
        "Integration with major e-commerce platforms",
        "Advanced AI for counterfeit detection",
        "Expansion to additional luxury sectors"
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center mx-auto">
            Product Roadmap
          </h2>
          <p className="mt-6 text-center text-gray-300 max-w-2xl mx-auto mb-16">
            Our vision for revolutionizing beauty product authentication through
            blockchain technology is being realized through these key phases.
          </p>

          <div className="relative mt-20">
            {/* Vertical line for timeline (desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-beon-purple to-beon-pink"></div>

            {/* Timeline items */}
            {phases.map((phase, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row md:gap-8 mb-16 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 z-10">
                  {phase.completed ? (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-beon-purple to-beon-pink flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full border-2 border-beon-pink bg-beon-black flex items-center justify-center">
                      <Circle className="w-6 h-6 text-beon-pink" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="glass-panel p-6">
                    <div className="flex items-center mb-2">
                      {phase.completed && (
                        <CheckCircle className="w-5 h-5 text-beon-pink md:hidden mr-2" />
                      )}
                      <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-beon-purple to-beon-pink">
                        {phase.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-400 mb-4">{phase.quarter}</p>
                    <ul className={`text-sm space-y-2 ${index % 2 === 0 ? "md:list-inside" : ""}`}>
                      {phase.milestones.map((milestone, i) => (
                        <li key={i} className="flex md:flex-row items-start gap-2">
                          <div className={`w-1 h-1 bg-beon-pink rounded-full mt-2 ${index % 2 === 0 ? "md:order-last" : ""}`}></div>
                          <span>{milestone}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

