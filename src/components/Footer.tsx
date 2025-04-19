import React from "react";
import { Button } from "@/components/ui/button";
import { FileText, Github, Instagram, Linkedin, Send, X, Youtube } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-beon-black border-t border-beon-gray/30 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex items-center mb-8 md:mb-0">
              <img 
                src="/lovable-uploads/112a7d8d-a461-4b53-a933-28b85febd93e.png" 
                alt="BEON ∞ Logo" 
                className="h-12 w-auto"
              />
              <span className="font-heading font-bold text-2xl ml-2 bg-clip-text text-transparent bg-gradient-to-r from-beon-purple to-beon-pink">
                BEON ∞
              </span>
            </div>

            <div className="w-full md:w-auto">
              <p className="text-sm text-gray-400 mb-3 text-center md:text-right">
                Subscribe for updates on our latest features and releases
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-beon-gray/30 border border-beon-gray/50 rounded-l-md px-4 py-2 text-sm w-full md:w-64 focus:outline-none focus:border-beon-pink"
                />
                <Button className="bg-gradient-to-r from-beon-purple to-beon-pink text-white rounded-l-none">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-lg font-bold mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-400 hover:text-beon-pink transition-colors">How It Works</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-beon-pink transition-colors">Features</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-beon-pink transition-colors">Brands</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-beon-pink transition-colors">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-beon-pink transition-colors flex items-center gap-1">
                    <FileText className="h-4 w-4" />
                    Documentation
                  </a>
                </li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-beon-pink transition-colors">Whitepaper</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-beon-pink transition-colors">API Reference</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-beon-pink transition-colors">Smart Contracts</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-400 hover:text-beon-pink transition-colors">About Us</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-beon-pink transition-colors">Careers</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-beon-pink transition-colors">Press Kit</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-beon-pink transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-400 hover:text-beon-pink transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-beon-pink transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-beon-pink transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-beon-gray/30 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              © 2024 BEON ∞. All rights reserved.
            </p>

            <div className="flex space-x-4">
              <a 
                href="https://x.com/Official_BEON" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-beon-pink transition-colors"
              >
                <X className="h-5 w-5" />
              </a>
              <a 
                href="https://linkr.it/2jpCU7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-beon-pink transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://t.me/BEON001" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-beon-pink transition-colors"
              >
                <Send className="h-5 w-5" />
              </a>
              <a 
                href="https://linkr.it/1lpaKr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-beon-pink transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/beon-infinity" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-beon-pink transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.youtube.com/@beon_infinity" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-beon-pink transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/beon-infinity" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-beon-pink transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
