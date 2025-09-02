import React, { useState } from "react";
import { Search, Map, Settings, Handshake } from "lucide-react";

const FourPillarFramework = () => {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      number: "1",
      shortTitle: "Discovery",
      heading: "Pillar 1: Deep Operational Discovery",
      description: [
        "We go beyond the surface, embedding ourselves in your business to understand the challenges and workflows that define your daily operations from the inside out.",
        "The outcome isn't just a list of problems; it's a profound clarity on the hidden inefficiencies that are costing you growth and the precise points where AI can unlock a new level of performance."
      ],
      buttons: ["In-depth Stakeholder Interviews", "Core Process Mapping", "Preliminary Pain-Point Inventory"],
      icon: Search
    },
    {
      number: "2",
      shortTitle: "Roadmap",
      heading: "Pillar 2: The Strategic AI Roadmap",
      description: [
        "We convert deep operational insight into a clear, actionable, and financially-sound strategy. You receive a comprehensive guide that moves beyond ideas and provides a tangible path to execution.",
        "The outcome is a data-backed business case for change, detailing your highest-impact opportunities, a 90-day implementation plan, and the precise ROI you can expect."
      ],
      buttons: ["Impact vs. Effort Matrix", "Clear ROI Projections", "90-Day Implementation Plan"],
      icon: Map
    },
    {
      number: "3",
      shortTitle: "Execution",
      heading: "Pillar 3: Seamless Execution & Team Enablement",
      description: [
        "This is where your action plan becomes a tangible competitive advantage. Our expert team builds and integrates the bespoke AI solutions and automations defined in your roadmap.",
        "The outcome is a modernized operation where your systems are smarter, your processes are faster, and your team is fully empowered to leverage these new capabilities from day one."
      ],
      buttons: ["Bespoke AI Solution Development", "SaaS Platform Integration", "Full Team Enablement"],
      icon: Settings
    },
    {
      number: "4",
      shortTitle: "Partnership",
      heading: "Pillar 4: Continuous Evolution Partnership",
      description: [
        "This isn't a project handover; it's a long-term alliance designed to keep you at the cutting edge. We ensure your business is not only optimized for today but is perpetually evolving to lead tomorrow.",
        "The outcome is a sustained competitive advantage, driven by ongoing optimization and a strategic partner who keeps you ahead of the next wave of innovation."
      ],
      buttons: ["Ongoing Support & Optimisation", "Quarterly Strategy Reviews", "Access to New AI Advancements"],
      icon: Handshake
    }
  ];

  return (
    <section className="w-full" id="framework">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-16 sm:pb-24">
        {/* Main Headline */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-tech-blue mb-4" style={{ fontFamily: 'Brockmann, sans-serif' }}>
            AI Consultancy
          </h1>
          <p className="text-xl text-tech-dark-grey font-inter">
            Our proven path to AI transformation
          </p>
        </div>

        {/* Modern Pill Navigation */}
        <div className="flex justify-center mb-16">
          <div className="flex bg-gray-100/80 backdrop-blur-sm rounded-full p-2 shadow-lg">
            {pillars.map((pillar, index) => (
              <button
                key={index}
                onClick={() => setActivePillar(index)}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 whitespace-nowrap transform hover:scale-[1.02] active:scale-[0.98] ${
                  activePillar === index
                    ? 'bg-gradient-to-r from-tech-blue to-pulse-500 text-white shadow-lg shadow-tech-blue/25 hover:shadow-xl hover:shadow-tech-blue/30'
                    : 'text-tech-dark-grey hover:text-tech-blue hover:bg-white/50 hover:shadow-md'
                }`}
              >
                {pillar.number}. {pillar.shortTitle}
              </button>
            ))}
          </div>
        </div>

        {/* Active Pillar Content */}
        <div className="transition-all duration-500 ease-in-out">
          <div className="max-w-4xl mx-auto text-center">
            {/* Icon */}
            <div className="mb-8 flex justify-center">
              {React.createElement(pillars[activePillar].icon, {
                size: 80,
                className: "text-tech-blue"
              })}
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-tech-blue mb-8 leading-tight" style={{ fontFamily: 'Brockmann, sans-serif' }}>
              {pillars[activePillar].heading}
            </h2>

            {/* Description */}
            <div className="mb-12 max-w-3xl mx-auto">
              <p className="text-lg sm:text-xl text-tech-dark-grey leading-relaxed mb-6 font-poppins">
                {pillars[activePillar].description[0]}
              </p>
              <p className="text-lg sm:text-xl text-tech-dark-grey leading-relaxed font-poppins">
                {pillars[activePillar].description[1]}
              </p>
            </div>

            {/* Deliverable Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {pillars[activePillar].buttons.map((button, index) => (
                <button
                  key={index}
                  className="bg-gradient-to-r from-pulse-500 to-pulse-600 hover:from-pulse-600 hover:to-pulse-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-[1.05] active:scale-[0.95] shadow-xl shadow-pulse-500/30 hover:shadow-2xl hover:shadow-pulse-500/40 flex items-center justify-center gap-3 relative overflow-hidden group"
                >
                  <span className="relative z-10">{button}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-16 space-x-3">
          {pillars.map((_, index) => (
            <button
              key={index}
              onClick={() => setActivePillar(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-110 ${
                activePillar === index ? 'bg-gradient-to-r from-tech-blue to-pulse-500 shadow-lg shadow-tech-blue/30' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourPillarFramework;