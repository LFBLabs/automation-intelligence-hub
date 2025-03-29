import { useRef, useState, useEffect } from 'react';
import InsightCard from './InsightCard';
import { cn } from '@/lib/utils';

const insightsData = [
  {
    title: "How AutoGPT is Redefining Autonomous AI Agents",
    excerpt: "**AutoGPT Analysis**\n\nAn in-depth exploration of how AutoGPT enables AI agents to execute complex tasks with minimal human supervision and what this means for the future of work.",
    category: "AI Agents",
    coverImage: "https://placehold.co/800x400/f0f5ff/3b82f6?text=AutoGPT+Analysis",
    date: "January 2025",
    readTime: "12 min read",
    link: "/article/autogpt"
  },
  {
    title: "LangChain vs LlamaIndex: Choosing the Right Framework for Your AI Application",
    excerpt: "**Framework Comparison**\n\nA detailed comparison of two leading frameworks for building applications with language models, with practical examples and performance benchmarks.",
    category: "Frameworks",
    coverImage: "https://placehold.co/800x400/f0f5ff/3b82f6?text=Framework+Comparison",
    date: "February 2025",
    readTime: "15 min read",
    link: "/article/langchain-vs-llamaindex"
  },
  {
    title: "Building Conversational AI Agents That Connect To Your Tools and Data",
    excerpt: "**Conversational Agents**\n\nStep-by-step guide on creating AI agents that understand context and leverage your internal knowledge.\n\n**Key Integration Points**\n\nLearn how to connect your AI agents with your existing tools and databases for maximum efficiency.\n\n**Best Practices**\n\nDiscover proven techniques for designing natural, effective conversational interfaces.",
    category: "Tutorial",
    coverImage: "https://placehold.co/800x400/f0f5ff/3b82f6?text=Conversational+Agents",
    date: "March 2025",
    readTime: "20 min read",
    link: "/article/conversational-agents"
  }
];

const LatestInsights = () => {
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
    <section id="insights" className="py-20 bg-secondary/50" ref={sectionRef}>
      <div className="container px-6 md:px-8">
        <div 
          className={cn(
            "mb-12",
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="max-w-xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Latest Insights
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Deep Dives on AI Automation
            </h2>
            <p className="text-muted-foreground">
              In-depth analysis, tutorials, and case studies on the leading AI automation platforms and how they're transforming industries.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insightsData.map((insight, index) => (
            <InsightCard
              key={insight.title}
              title={insight.title}
              excerpt={insight.excerpt}
              category={insight.category}
              coverImage={insight.coverImage}
              date={insight.date}
              readTime={insight.readTime}
              link={insight.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;
