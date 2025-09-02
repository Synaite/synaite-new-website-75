import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      id: "item-1",
      question: "What types of AI solutions do you offer?",
      answer: "We specialize in creating customized AI solutions that include automated customer service bots, data analysis tools, process automation, and predictive analytics. Our solutions are tailored to address your specific business challenges."
    },
    {
      id: "item-2", 
      question: "How do you ensure AI solutions integrate with our existing systems?",
      answer: "Our team conducts thorough assessments of your current infrastructure. We design solutions with compatibility in mind, utilizing APIs and custom connectors to ensure smooth integration with minimal disruption to your workflow."
    },
    {
      id: "item-3",
      question: "What ROI can we expect from implementing your AI solutions?",
      answer: "ROI varies, but our clients typically see significant benefits in operational efficiency, cost reduction, and new revenue opportunities. We establish clear metrics at the project outset and provide regular reports to track performance."
    },
    {
      id: "item-4",
      question: "How long does implementation typically take?",
      answer: "Simple automations can be operational within weeks, while comprehensive enterprise solutions may take several months. We provide detailed, transparent timelines during the consultation phase."
    },
    {
      id: "item-5",
      question: "What ongoing support do you provide after implementation?",
      answer: "We offer various support packages including regular maintenance, performance monitoring, and system updates. Our team remains available to ensure your AI solution continues to deliver value as your business evolves."
    },
    {
      id: "item-6",
      question: "How do you handle data security and privacy?",
      answer: "We prioritize data security at every stage. Our solutions comply with relevant regulations like GDPR, and we implement robust encryption, access controls, and regular security audits to ensure your data is always protected."
    }
  ];

  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Headlines */}
          <div className="text-center mb-20">
            <div className="relative inline-block">
              <h2 className="text-5xl md:text-6xl font-bold text-tech-blue font-brockmann mb-6">
                Your Questions, Answered
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary/60 to-primary rounded-full"></div>
            </div>
            <p className="text-xl text-tech-dark-grey/80 font-sans max-w-3xl mx-auto mt-8">
              Key information about our process, technology, and partnership model.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50 hover:border-gray-200/80 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-left font-brockmann font-bold text-lg px-8 py-6 hover:no-underline hover:text-primary transition-colors duration-300 [&>svg]:hidden group-hover:bg-gray-50/50">
                  <div className="flex items-center justify-between w-full">
                    <span className="pr-4">{faq.question}</span>
                    <div className="flex-shrink-0 ml-4">
                      <div className="relative w-6 h-6 flex items-center justify-center">
                        <Plus className="w-5 h-5 text-primary transition-all duration-300 group-data-[state=open]:rotate-45 group-data-[state=open]:opacity-0" />
                        <Minus className="w-5 h-5 text-primary absolute transition-all duration-300 group-data-[state=closed]:rotate-45 group-data-[state=closed]:opacity-0" />
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-tech-dark-grey/90 font-sans px-8 pb-8 text-base leading-relaxed transition-all duration-500 ease-in-out">
                  <div className="pt-2 border-t border-gray-100/60">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;