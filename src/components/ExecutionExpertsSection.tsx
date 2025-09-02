import React from "react";
import { Zap, Database } from "lucide-react";
import slackLogo from "../assets/logos/slack.svg";
import hubspotLogo from "../assets/logos/hubspot.svg";
import googleSheetsLogo from "../assets/logos/googlesheets.svg";
import zapierLogo from "../assets/logos/zapier.svg";
import n8nLogo from "../assets/logos/n8n.svg";
const ExecutionExpertsSection = () => {
  return <section id="development" className="relative py-[75px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h1 className="text-6xl md:text-7xl font-bold text-tech-blue font-['Brockmann']">Bespoke AI Development</h1>
            <h2 className="text-3xl font-bold text-tech-dark font-['Brockmann']">Your Vision, Engineered.</h2>
            <div className="text-xl text-tech-dark font-['Poppins'] leading-relaxed space-y-4">
              <p>A brilliant AI roadmap deserves a world-class development team.</p>
              
              <p>We specialise in translating ambitious strategies into robust, scalable, and high-performance systems that integrate seamlessly with the tools you already use.</p>
              
              <p>Engineered for today's challenges and tomorrow's opportunities, designed to grow with your business.</p>
            </div>
          </div>

          {/* Right Column - Integration Visual */}
          <div className="relative flex items-center justify-center h-96">
            <img src="/lovable-uploads/28a6bf17-56da-4529-ba9f-c348d47d2120.png" alt="AI Integration Diagram showing central AI connected to various business tools" className="w-full max-w-lg h-auto object-contain" />
          </div>
        </div>
      </div>
    </section>;
};
export default ExecutionExpertsSection;