
import React, { useState } from "react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const FaqSection: React.FC = () => {
  const faqItems = [
    {
      question: "How does BEON ∞ verify product authenticity?",
      answer: "BEON ∞ uses blockchain technology to create a unique digital fingerprint for each registered beauty product. Brands register their products on our platform, which generates secure QR codes linked to blockchain records. When customers scan these codes, the system verifies the product against the blockchain record to confirm authenticity."
    },
    {
      question: "What is an NFT receipt and how does it work?",
      answer: "An NFT (Non-Fungible Token) receipt is a unique digital certificate of ownership and authenticity stored on the blockchain. When you verify a product through BEON ∞, an NFT receipt is minted to your connected wallet, proving you own an authentic product and providing a record of its provenance."
    },
    {
      question: "Do I need cryptocurrency to use BEON ∞?",
      answer: "For basic product verification, no cryptocurrency is required. However, to receive and store NFT receipts of your verified products, you'll need a Web3 wallet. Our platform covers the gas fees for NFT minting to ensure a seamless user experience."
    },
    {
      question: "How can brands join the BEON ∞ platform?",
      answer: "Beauty brands can apply through our Brand Portal. After a verification process to confirm the brand's identity and legitimacy, they gain access to our dashboard where they can register products, generate authentication codes, and track analytics on verified products."
    },
    {
      question: "What information is stored on the blockchain?",
      answer: "The blockchain stores encrypted product information including manufacturing details, batch numbers, ingredients list, expiration dates, and ownership transfers. Personal customer data is never stored on-chain, ensuring privacy while maintaining product transparency."
    },
    {
      question: "Can BEON ∞ detect sophisticated counterfeit products?",
      answer: "BEON ∞ creates a verification system that's extremely difficult to replicate. While no system is 100% foolproof, our combination of unique QR codes, blockchain verification, and NFT receipts creates multiple layers of security that sophisticated counterfeiters cannot easily bypass."
    },
    {
      question: "Which blockchains does BEON ∞ support?",
      answer: "BEON ∞ currently operates on Ethereum and Polygon blockchains, with plans to expand to additional EVM-compatible networks to ensure scalability, sustainability, and wide wallet compatibility."
    }
  ];

  return (
    <section id="faq" className="py-20 relative">
      {/* Background effect */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-beon-purple/10 rounded-full filter blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-center mx-auto">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-center text-gray-300 mb-16">
            Find answers to common questions about the BEON ∞ platform
            and how our blockchain authentication works.
          </p>

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`}
                className="border-b border-beon-gray mb-4 last:mb-0"
              >
                <AccordionTrigger className="text-lg font-medium hover:text-beon-pink">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
