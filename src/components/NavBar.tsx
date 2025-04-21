
import React, { useState, useEffect } from "react";
import { Menu, X, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { toast } = useToast();

  // Check if we're on the homepage
  const isHomePage = location.pathname === "/";

  // Function to create the correct links
  const getSectionLink = (sectionId: string) => {
    return isHomePage ? `#${sectionId}` : `/#${sectionId}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleComingSoon = () => {
    toast({
      title: "Coming soon",
      description: "This feature will be available soon!",
    });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "py-3 bg-beon-black/90 backdrop-blur-md shadow-lg"
        : "py-6 bg-transparent"
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-beon-purple to-beon-pink p-0.5">
            <div className="h-full w-full rounded-full bg-beon-black flex items-center justify-center">
              <img 
                src="/lovable-uploads/112a7d8d-a461-4b53-a933-28b85febd93e.png" 
                alt="BEON ∞ Logo" 
                className="h-8 w-8"
              />
            </div>
          </div>
          <span className="font-heading font-bold text-2xl ml-2 bg-clip-text text-transparent bg-gradient-to-r from-beon-purple to-beon-pink">
            BEON ∞
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href={getSectionLink("how-it-works")} className="text-sm font-medium hover:text-beon-pink transition-colors">
            How It Works
          </a>
          <a href={getSectionLink("features")} className="text-sm font-medium hover:text-beon-pink transition-colors">
            Features
          </a>
          <a href={getSectionLink("roadmap")} className="text-sm font-medium hover:text-beon-pink transition-colors">
            Roadmap
          </a>
          <a href={getSectionLink("faq")} className="text-sm font-medium hover:text-beon-pink transition-colors">
            FAQ
          </a>
          <Link to="/whitepaper" className="text-sm font-medium hover:text-beon-pink transition-colors">
            Whitepaper
          </Link>
          <Button className="bg-gradient-to-r from-beon-purple to-beon-pink text-white hover:shadow-[0_0_15px_rgba(249,28,180,0.5)] flex items-center gap-2"
            onClick={handleComingSoon}
          >
            <Wallet size={16} />
            <span>Connect Wallet</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button
            variant="outline"
            size="icon"
            className="border-beon-pink text-beon-pink"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-beon-black/95 backdrop-blur-md py-4 border-y border-beon-gray animate-accordion-down">
          <div className="container mx-auto flex flex-col space-y-4">
            <a 
              href={getSectionLink("how-it-works")}
              className="text-sm font-medium hover:text-beon-pink transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href={getSectionLink("features")}
              className="text-sm font-medium hover:text-beon-pink transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href={getSectionLink("roadmap")}
              className="text-sm font-medium hover:text-beon-pink transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Roadmap
            </a>
            <a 
              href={getSectionLink("faq")}
              className="text-sm font-medium hover:text-beon-pink transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <Link
              to="/whitepaper"
              className="text-sm font-medium hover:text-beon-pink transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Whitepaper
            </Link>
            <Button className="bg-gradient-to-r from-beon-purple to-beon-pink text-white flex items-center gap-2 w-full justify-center"
              onClick={handleComingSoon}
            >
              <Wallet size={16} />
              <span>Connect Wallet</span>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

