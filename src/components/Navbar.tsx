import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };
  return <header className={cn("fixed top-0 left-0 right-0 z-50 py-1.5 sm:py-2.5 md:py-2.5 transition-all duration-500", isScrolled ? "bg-white/85 backdrop-blur-xl shadow-glass border-b border-white/20" : "bg-transparent")}>
      <div className="container flex items-center justify-between sm:px-6 lg:px-8 px-0 py-0">
        <a href="#" className="flex items-center space-x-2 focus-premium transition-all duration-300 hover:scale-105" onClick={e => {
        e.preventDefault();
        scrollToTop();
      }} aria-label="Pulse Robot">
          <img src="/lovable-uploads/476a22df-2601-4d9f-baba-e170d7c7b51c.png" alt="Synaite Logo" className="h-12 sm:h-10 object-contain my-0 transition-all duration-300" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="nav-link font-sans focus-premium" onClick={e => {
          e.preventDefault();
          scrollToTop();
        }}>
            Home
          </a>
          <a href="#framework" className="nav-link font-sans focus-premium">Consultancy</a>
          <a href="#development" className="nav-link font-sans focus-premium">Development</a>
          <a href="#faq" className="nav-link font-sans focus-premium">FAQ</a>
          <a href="#contact" className="nav-link font-sans focus-premium">Contact</a>
        </nav>

        {/* Mobile menu button with enhanced animations */}
        <button 
          className="md:hidden text-gray-700 p-3 focus-premium transition-all duration-300 hover:bg-gray-100/20 hover:scale-110 rounded-xl backdrop-blur-sm" 
          onClick={toggleMenu} 
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative w-6 h-6">
            <Menu 
              size={24} 
              className={cn("absolute inset-0 transition-all duration-300", isMenuOpen ? "opacity-0 rotate-180 scale-75" : "opacity-100 rotate-0 scale-100")} 
            />
            <X 
              size={24} 
              className={cn("absolute inset-0 transition-all duration-300", isMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-180 scale-75")} 
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation - Premium glass morphism design */}
      <div className={cn("fixed inset-0 z-40 backdrop-blur-2xl bg-white/90 flex flex-col pt-20 px-6 md:hidden transition-all duration-500 ease-out", isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none")}>
        <div className="absolute inset-0 bg-gradient-to-br from-pulse-500/10 via-white/80 to-pulse-300/10"></div>
        <nav className="relative flex flex-col space-y-6 items-center mt-8">
          {[
            { href: "#", label: "Home", onClick: (e: React.MouseEvent) => { e.preventDefault(); scrollToTop(); setIsMenuOpen(false); document.body.style.overflow = ''; } },
            { href: "#framework", label: "Consultancy", onClick: () => { setIsMenuOpen(false); document.body.style.overflow = ''; } },
            { href: "#development", label: "Development", onClick: () => { setIsMenuOpen(false); document.body.style.overflow = ''; } },
            { href: "#faq", label: "FAQ", onClick: () => { setIsMenuOpen(false); document.body.style.overflow = ''; } },
            { href: "#contact", label: "Contact", onClick: () => { setIsMenuOpen(false); document.body.style.overflow = ''; } }
          ].map((item, index) => (
            <a 
              key={item.label}
              href={item.href} 
              className="text-xl font-sans font-medium py-4 px-8 w-full max-w-xs text-center rounded-2xl backdrop-blur-sm bg-white/20 border border-white/30 hover:bg-white/40 hover:border-white/50 transition-all duration-300 hover:scale-105 hover:shadow-elegant focus-premium opacity-0 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={item.onClick}
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        {/* Decorative elements */}
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-pulse-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-pulse-300/30 rounded-full blur-2xl animate-float-gentle"></div>
      </div>
    </header>;
};
export default Navbar;