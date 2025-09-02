import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import LottieAnimation from "./LottieAnimation";

// Declare Calendly global type
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { 
        url: string;
        parentElement?: HTMLElement;
        onEventScheduled?: () => void;
      }) => boolean;
    };
  }
}
const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [lottieData, setLottieData] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  const handleBookCall = () => {
    if (window.Calendly) {
      // Reset scroll position and ensure proper positioning
      document.body.style.overflow = 'hidden';
      window.Calendly.initPopupWidget({ 
        url: 'https://calendly.com/tom-synaite/30min',
        parentElement: document.body,
        onEventScheduled: () => {
          document.body.style.overflow = 'auto';
        }
      });
      
      // Reset overflow when popup closes
      setTimeout(() => {
        const calendlyCloseBtn = document.querySelector('[data-calendly-close]');
        if (calendlyCloseBtn) {
          calendlyCloseBtn.addEventListener('click', () => {
            document.body.style.overflow = 'auto';
          });
        }
      }, 1000);
    }
    return false;
  };
  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  useEffect(() => {
    fetch('/loop-header.lottie').then(response => response.json()).then(data => setLottieData(data)).catch(error => console.error("Error loading Lottie animation:", error));
  }, []);

  // Load Calendly widget script
  useEffect(() => {
    if (!document.querySelector('script[src*="calendly"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.type = 'text/javascript';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);
  useEffect(() => {
    // Skip effect on mobile
    if (isMobile) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !imageRef.current) return;
      const {
        left,
        top,
        width,
        height
      } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 2.5}deg) rotateX(${-y * 2.5}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile]);
  useEffect(() => {
    // Skip parallax on mobile
    if (isMobile) return;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);
  return <section className="overflow-hidden relative bg-cover" id="hero" style={{
    backgroundImage: 'url("/lovable-uploads/01146a4b-834f-4572-95d3-1862c8e111d0.png")',
    backgroundPosition: 'center center',
    backgroundSize: '130%',
    padding: isMobile ? '100px 12px 40px' : '120px 20px 60px'
  }}>
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-pulse-gradient opacity-20 blur-3xl rounded-full"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2">
            
            
            <h1 className="section-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight opacity-0 animate-slide-up" style={{
            animationDelay: "0.2s"
          }}>
              AI Infrastructure<br />Engineered for<br />Your Future
            </h1>
            
            <p style={{
            animationDelay: "0.4s"
          }} className="section-subtitle mt-3 sm:mt-6 mb-4 sm:mb-8 leading-relaxed opacity-0 animate-fade-in-up text-gray-950 font-normal text-base sm:text-lg text-left">Elite AI Consultancy and Bespoke Development that Scale with your Business</p>
            
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-bounce-in" style={{
            animationDelay: "0.6s"
          }}>
              <button
                onClick={handleBookCall}
                className="bg-gradient-to-r from-pulse-500 to-pulse-600 hover:from-pulse-600 hover:to-pulse-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-[1.05] active:scale-[0.95] shadow-xl shadow-pulse-500/30 hover:shadow-2xl hover:shadow-pulse-500/40 flex items-center justify-center gap-3 relative overflow-hidden group"
              >
                <span className="relative z-10">Request Access</span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
            {lottieData ? <div className="relative z-10 opacity-0 animate-scale-in" style={{
            animationDelay: "0.8s"
          }}>
                <div className="relative">
                  <LottieAnimation animationPath={lottieData} className="w-full h-auto max-w-lg mx-auto animate-float-gentle" loop={true} autoplay={true} />
                  <div className="absolute inset-0 bg-gradient-to-r from-pulse-500/20 to-pulse-600/20 rounded-3xl blur-3xl animate-pulse-glow"></div>
                </div>
              </div> : <>
              <div className="absolute inset-0 bg-gradient-to-br from-dark-900 to-dark-800 rounded-2xl sm:rounded-3xl -z-10 shadow-premium"></div>
              <div className="relative card-3d overflow-hidden rounded-2xl sm:rounded-3xl shadow-premium hover:shadow-glow-lg group">
                <img 
                  ref={imageRef} 
                  src="/lovable-uploads/e0154d0b-dcbe-452b-aa8a-fdf7f4b9f4e3.png" 
                  alt="Modern Humanoid Robot" 
                  className="w-full h-auto object-cover transition-all duration-700 ease-out group-hover:scale-105" 
                  style={{
                    transformStyle: 'preserve-3d'
                  }} 
                />
                <div className="absolute inset-0" style={{
                  backgroundImage: 'url("/hero-image.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  mixBlendMode: 'overlay',
                  opacity: 0.4
                }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-pulse-900/30 via-transparent to-pulse-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-pulse-500/50 to-pulse-600/50 rounded-3xl blur opacity-0 group-hover:opacity-70 transition-all duration-300 animate-glow-pulse -z-10"></div>
              </div>
              </>}
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-pulse-100/30 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>
      
      {/* Seamless gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background/80 pointer-events-none"></div>
    </section>;
};
export default Hero;