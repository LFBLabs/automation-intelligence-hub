import { useRef, useState, useEffect } from 'react';
import PlatformCard from './PlatformCard';
import { cn } from '@/lib/utils';

const platformsData = [
  {
    name: "Make.com",
    category: "Automation Platform",
    description: "A visual platform letting you design, build, and automate anything from simple tasks to complex workflows in minutes.",
    logo: "https://placehold.co/400x100/f8f9fa/5a6268?text=Make.com&font=playfair",
    audioSrc: "make-audio.mp3",
    link: "https://www.make.com/en/register?pc=lfblabs",
    isComingSoon: false
  },
  {
    name: "n8n",
    category: "Workflow Automation",
    description: "Open-source workflow automation tool with a fair-code license that helps you to connect different services and build automated workflows.",
    logo: "https://placehold.co/400x100/f8f9fa/5a6268?text=n8n&font=playfair",
    audioSrc: "n8n-audio.mp3",
    link: "https://n8n.partnerlinks.io/5xaabr8yr33m",
    isComingSoon: false
  },
  {
    name: "Relevance AI",
    category: "AI Platform",
    description: "Build, deploy, and scale AI applications with a platform that simplifies data integration and AI capability development.",
    logo: "https://placehold.co/400x100/f8f9fa/5a6268?text=Relevance+AI&font=playfair",
    audioSrc: "relevance-audio.mp3",
    link: "https://relevance.ai",
    isComingSoon: false
  },
  {
    name: "Synthflow AI",
    category: "AI Automation",
    description: "Create custom AI phone call agents effortlessly with Synthflow. No coding or tech skills needed—just your data and ideas for powerful automation.",
    logo: "https://placehold.co/400x100/f8f9fa/5a6268?text=Synthflow+AI&font=playfair",
    audioSrc: "synthflow-audio.mp3",
    link: "https://example.com/synthflow",
    isComingSoon: false
  },
  {
    name: "Vellum Agents",
    category: "AI Agent Platform",
    description: "Build, deploy, and monitor sophisticated AI agents for complex tasks. Vellum's platform provides the infrastructure for enterprise-grade LLM applications.",
    logo: "https://placehold.co/400x100/f8f9fa/5a6268?text=Vellum+Agents&font=playfair",
    audioSrc: "vellum-audio.mp3",
    link: "https://vellum.ai",
    isComingSoon: false
  },
  {
    name: "Future Platform 3",
    category: "Coming Soon",
    logo: "https://placehold.co/400x100/f8f9fa/5a6268?text=Coming+Soon&font=playfair",
    isComingSoon: true
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
              audioSrc={platform.audioSrc}
              isComingSoon={platform.isComingSoon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlatforms;
