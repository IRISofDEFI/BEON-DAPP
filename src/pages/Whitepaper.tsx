
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Whitepaper: React.FC = () => {
  return (
    <div className="min-h-screen bg-beon-black text-white">
      <NavBar />
      
      <main className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Beauty Onchain Whitepaper</h1>
        <h2 className="text-xl md:text-2xl text-gray-400 mb-12">Revolutionizing Beauty With Blockchain</h2>
        
        <div className="space-y-16">
          {/* Introduction */}
          <section>
            <h2 className="text-3xl font-bold mb-6">1. Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              Beauty Onchain is the first Web3 integrated beauty brand and blockchain authentication agency that 
              merges real world beauty products with blockchain technology, NFTs, Fashion and the metaverse. Our 
              ecosystem solves the $5 billion counterfeit beauty industry problem, rewards consumers through 
              tokenized incentives, and creates a seamless connection between physical and digital beauty.
            </p>
          </section>

          {/* Mission & Vision */}
          <section className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Mission Statement</h3>
              <p className="text-gray-300 leading-relaxed">
                To redefine trust, transparency, and ownership in the beauty industry using blockchain, NFTs, and Web3 commerce.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To become the leading blockchain authentication provider and Web3 driven beauty e-commerce platform, 
                where brands and consumers interact through secure, verified, and tokenized transactions.
              </p>
            </div>
          </section>

          {/* Problem and Solution */}
          <section>
            <h2 className="text-3xl font-bold mb-6">2. The Problem and Our Solution</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Current Industry Challenges</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Counterfeit products: Fake beauty products cause health hazards and brand reputation damage.</li>
                  <li>Lack of Transparency: Customers cannot verify ingredients, ethical sourcing, or authenticity.</li>
                  <li>Limited Customer Ownership: Traditional loyalty programs don't offer real ownership or meaningful rewards.</li>
                  <li>Missing Web3 Opportunity: Beauty brands haven't fully embraced blockchain and NFT potential.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Beauty Onchain's Blockchain Powered Solution</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Product Authentication & Anti-Counterfeiting: Each beauty product is tokenized as an NFT, allowing customers to verify authenticity by scanning a blockchain-powered QR code.</li>
                  <li>NFT-Based Ownership & Rewards: Customers earn and trade GlowPoints tokens and NFTs from purchases.</li>
                  <li>Web3 E-commerce Store: Accepts crypto payments and supports NFT-based beauty assets worldwide.</li>
                  <li>Metaverse Beauty Hub: Users can try virtual cosmetics, join beauty experiences, and own digital beauty assets.</li>
                  <li>Agency for Blockchain Authentication: Helping beauty brands implement blockchain powered verification.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Ecosystem */}
          <section>
            <h2 className="text-3xl font-bold mb-6">3. Beauty Onchain Ecosystem</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Core Components</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Web3 E-commerce Platform
                    <ul className="list-disc pl-6 mt-2">
                      <li>Customers buy blockchain-verified beauty products using crypto or fiat</li>
                      <li>Smart contract-based loyalty rewards with tradeable NFTs</li>
                      <li>Marketplace for NFT beauty assets (virtual cosmetics, memberships, and collectibles)</li>
                    </ul>
                  </li>
                  <li>Blockchain Authentication Agency
                    <ul className="list-disc pl-6 mt-2">
                      <li>Offering "Blockchain Verified" anti-counterfeit solutions to luxury beauty brands</li>
                      <li>QR code-based product authentication</li>
                      <li>White-label services for beauty and skincare companies</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Roadmap */}
          <section>
            <h2 className="text-3xl font-bold mb-6">4. Roadmap</h2>
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">2025</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Q1: Project Socials launch & team formation | Smart contract & product authentication development</li>
                  <li>Q2: Pilot partnership with 10-20 beauty brands | NFT collection release</li>
                  <li>Q3/Q4: Web3 e-commerce platform MVP release | Beauty Onchain Beauty Store</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">2026</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Q1: Full-scale e-commerce launch with crypto payments | Beauty DAO governance model implementation</li>
                  <li>Q2: Partnerships with major crypto projects & beauty influencers</li>
                  <li>Q3/Q4: Metaverse beauty experience launch | Global brand collaborations & scaling</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-3xl font-bold mb-6">5. Conclusion</h2>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Beauty Meets Blockchain</h3>
              <p className="text-gray-300 leading-relaxed">
                Beauty onchain is not just a beauty brand, it's a Web3 revolution in beauty authentication, 
                ownership, and engagement. Through blockchain, NFTs, and crypto incentives, we are creating 
                a future-proof beauty ecosystem where consumers and brands interact seamlessly in both the 
                physical and digital worlds.
              </p>
              <p className="text-beon-pink font-semibold mt-8">
                Join Us: Investors, Partners, and Early Adopters Welcome!
              </p>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Whitepaper;
