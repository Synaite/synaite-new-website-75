import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Clock, TrendingUp, UserCheck, TrendingDown, Brain, Rocket } from "lucide-react";
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}
const FeatureCard = ({
  icon,
  title,
  description,
  index
}: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  return <div ref={cardRef} className={cn("feature-card glass-card opacity-0 p-4 sm:p-6", "lg:hover:bg-gradient-to-br lg:hover:from-white lg:hover:to-pulse-50", "transition-all duration-300")} style={{
    animationDelay: `${0.1 * index}s`
  }}>
      <div className="rounded-full bg-pulse-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-pulse-500 mb-4 sm:mb-5">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>;
};
const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll(".fade-in-element");
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add("animate-fade-in");
            }, index * 100);
          });
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return <section id="features" ref={sectionRef} className="py-12 sm:py-16 md:py-20 pb-0 relative">
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="section-title text-tech-blue mb-3 sm:mb-4 opacity-0 fade-in-element">
            Operate with a New Level of Intelligence
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element">
            The gap between AI-native companies and the rest is widening daily. We build the systems that put you on the right side of that divide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <FeatureCard icon={<Clock className="w-5 h-5 sm:w-6 sm:h-6" />} title="Operate 24/7" description="Our intelligent systems work tirelessly to handle tasks and engage leads around the clock, giving your business a permanent operational advantage." index={0} />
          <FeatureCard icon={<TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />} title="Scale Without Headcount" description="We engineer systems that handle exponential growth without a proportional increase in overhead, turning scalability from a challenge into your greatest strength." index={1} />
          <FeatureCard icon={<UserCheck className="w-5 h-5 sm:w-6 sm:h-6" />} title="Better Customer Experience" description="We build systems that anticipate customer needs to deliver instant, intelligent, and personalised experiences at scale, creating a zero-friction journey." index={2} />
          <FeatureCard icon={<TrendingDown className="w-5 h-5 sm:w-6 sm:h-6" />} title="Radical Cost Reduction" description="AI eradicates the hidden tax of manual tasks. We automate the operational drag that consumes your budget, freeing up capital for high-growth initiatives." index={3} />
          <FeatureCard icon={<Brain className="w-5 h-5 sm:w-6 sm:h-6" />} title="Data-Driven Innovation" description="Our AI engines turn your raw data into predictive insights, empowering you to make smarter, faster decisions with a new level of certainty." index={4} />
          <FeatureCard icon={<Rocket className="w-5 h-5 sm:w-6 sm:h-6" />} title="Outpace Your Competition" description="Operate with a level of speed and intelligence your competition can't match. AI allows you to move beyond simply competing and start redefining the market." index={5} />
        </div>
      </div>
    </section>;
};
export default Features;