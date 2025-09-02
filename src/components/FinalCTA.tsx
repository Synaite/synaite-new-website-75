import React from "react";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

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

const FinalCTA = () => {
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

  const handleDanLinkedIn = () => {
    window.open("https://www.linkedin.com/in/dan-wills-2a4b00287/", "_blank");
  };

  const handleTomosLinkedIn = () => {
    window.open("https://www.linkedin.com/in/tomos-ormsby-63592134b/", "_blank");
  };

  // Load Calendly widget script
  React.useEffect(() => {
    if (!document.querySelector('script[src*="calendly"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.type = 'text/javascript';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Headline */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-tech-blue font-brockmann">
              Experience the Future Today
            </h2>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative">
            {/* Vertical Divider Line - Hidden on mobile */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2"></div>

            {/* Left Column - Book a Call */}
            <div className="text-center lg:text-left lg:pr-8">
              <h3 className="text-3xl font-bold text-tech-blue font-brockmann mb-6">
                Start Your Project
              </h3>
              <p className="text-lg text-tech-dark-grey font-sans mb-8 leading-relaxed">
                A brief, no-obligation call to discuss your vision and see how our expert team can bring it to life.
              </p>
              <button
                onClick={handleBookCall}
                className="bg-gradient-to-r from-pulse-500 to-pulse-600 hover:from-pulse-600 hover:to-pulse-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-[1.05] active:scale-[0.95] shadow-xl shadow-pulse-500/30 hover:shadow-2xl hover:shadow-pulse-500/40 flex items-center justify-center gap-3 relative overflow-hidden group"
              >
                <span className="relative z-10">Book a Discovery Call</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Right Column - Follow Us */}
            <div className="text-center lg:text-left lg:pl-8">
              <h3 className="text-3xl font-bold text-tech-blue font-brockmann mb-6">
                Want Daily AI Insights?
              </h3>
              <p className="text-lg text-tech-dark-grey font-sans mb-8 leading-relaxed">
                Follow us on LinkedIn for daily strategies and tips on leveraging AI for business growth.
              </p>
              
              {/* Profile Section */}
              <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
                {/* Dan Profile */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full mb-4 shadow-sm overflow-hidden">
                    <img 
                      src="/lovable-uploads/b06a0c85-66f6-45c8-a3fa-3d18dab37b93.png" 
                      alt="Dan profile photo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    onClick={handleDanLinkedIn}
                    className="bg-gradient-to-r from-pulse-500 to-pulse-600 hover:from-pulse-600 hover:to-pulse-700 text-white px-6 py-3 rounded-full font-bold text-base transition-all duration-300 transform hover:scale-[1.05] active:scale-[0.95] shadow-xl shadow-pulse-500/30 hover:shadow-2xl hover:shadow-pulse-500/40 flex items-center justify-center gap-2 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Follow Dan on LinkedIn</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>

                {/* Tomos Profile */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full mb-4 shadow-sm overflow-hidden">
                    <img 
                      src="/lovable-uploads/d0492dfe-01c3-4161-b645-76abd4a00b04.png" 
                      alt="Tomos profile photo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    onClick={handleTomosLinkedIn}
                    className="bg-gradient-to-r from-pulse-500 to-pulse-600 hover:from-pulse-600 hover:to-pulse-700 text-white px-6 py-3 rounded-full font-bold text-base transition-all duration-300 transform hover:scale-[1.05] active:scale-[0.95] shadow-xl shadow-pulse-500/30 hover:shadow-2xl hover:shadow-pulse-500/40 flex items-center justify-center gap-2 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Follow Tomos on LinkedIn</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;