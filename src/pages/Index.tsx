
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ThreePillarFramework from "@/components/ThreePillarFramework";
import ExecutionExpertsSection from "@/components/ExecutionExpertsSection";
import HumanoidSection from "@/components/HumanoidSection";
import SpecsSection from "@/components/SpecsSection";
import DetailsSection from "@/components/DetailsSection";
import ImageShowcaseSection from "@/components/ImageShowcaseSection";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  // Enhanced intersection observer with staggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
              entry.target.classList.remove("section-enter");
            }, index * 100); // Stagger animations
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );
    
    // Enhanced selectors for premium animations
    const elements = document.querySelectorAll(".animate-on-scroll, .section-enter");
    elements.forEach((el) => {
      el.classList.add("section-enter");
      observer.observe(el);
    });
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    // This helps ensure smooth scrolling for the anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        // Increased offset to account for mobile nav
        const offset = window.innerWidth < 768 ? 100 : 80;
        
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main className="relative"> 
        <Hero />
        <div className="relative bg-aura-fade-in overflow-hidden">
          {/* Premium background effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pulse-50/10 to-transparent"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pulse-500/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-pulse-300/8 rounded-full blur-2xl animate-float-gentle"></div>
          
          <div className="section-enter">
            <ThreePillarFramework />
          </div>
          <div className="section-enter">
            <ExecutionExpertsSection />
          </div>
          <div className="section-enter">
            <HumanoidSection />
          </div>
          <div className="section-enter">
            <SpecsSection />
          </div>
          <div className="section-enter">
            <DetailsSection />
          </div>
          <div className="section-enter">
            <ImageShowcaseSection />
          </div>
          <div className="section-enter">
            <Features />
          </div>
          <div className="section-enter">
            <FAQ />
          </div>
          <div className="section-enter">
            <FinalCTA />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
