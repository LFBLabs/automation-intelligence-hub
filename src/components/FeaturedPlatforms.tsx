
import { useRef, useState, useEffect } from 'react';
import PlatformCard from './PlatformCard';
import { cn } from '@/lib/utils';

const platformsData = [
  {
    name: "AutoGPT",
    category: "Autonomous Agent",
    description: "A fully autonomous AI agent that can chain multiple tasks together to achieve complex goals with minimal human input.",
    logo: "https://placehold.co/400x100/f8f9fa/5a6268?text=AutoGPT&font=playfair",
    link: "#"
  },
  {
    name: "LangChain",
    category: "Framework",
    description: "A framework for developing applications powered by language models, enabling complex chains, agents, and tools integration.",
    logo: "https://placehold.co/400x100/f8f9fa/5a6268?text=LangChain&font=playfair",
    link: "#"
  },
  {
    name: "Fixie",
    category: "Agent Platform",
    description: "Build, deploy, and scale AI agents that can understand context, solve problems, and take actions in your systems.",
    logo: "https://placehold.co/400x100/f8f9fa/5a6268?text=Fixie&font=playfair",
    link: "#"
  },
  {
    name: "Zapier AI",
    category: "Workflow Automation",
    description: "AI-powered automation that helps you build workflows between your apps with natural language instructions.",
    logo: "https://placehold.co/400x100/f8f9fa/5a6268?text=Zapier+AI&font=playfair",
    link: "#"
  },
  {
    name: "Mendable AI",
    category: "Document Agent",
    description: "Specialized AI agents that learn from your documentation and help users find answers through natural conversation.",
    logo: "https://placehold.co/400x100/f8f9fa/5a6268?text=Mendable&font=playfair",
    link: "#"
  },
  {
    name: "Synthflow",
    category: "Agent Designer",
    description: "Visual platform for designing, testing, and deploying AI agents without code, with built-in performance analytics.",
    logo: "https://placehold.co/400x100/f8f9fa/5a6268?text=Synthflow&font=playfair",
    link: "#"
  }
];

const FeaturedPlatforms = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px' 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="platforms" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -bottom-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      <div className="container px-6 md:px-8">
        <div 
          className={cn(
            "max-w-xl mx-auto text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            AI Tools & Platforms
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Cutting-Edge AI Automation Platforms
          </h2>
          <p className="text-muted-foreground">
            Discover and explore the most powerful AI agent platforms and automation tools transforming how we work and build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {platformsData.map((platform, index) => (
            <PlatformCard
              key={platform.name}
              name={platform.name}
              category={platform.category}
              description={platform.description}
              logo={platform.logo}
              link={platform.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlatforms;
