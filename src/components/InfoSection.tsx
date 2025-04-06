
import { useState, useEffect } from 'react';
import { Brain, Bot, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

const InfoSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const infoCards = [
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "AI Agents",
      description: "AI agents are autonomous or semi-autonomous software entities that perceive their environment, make decisions, and take actions to achieve specific goals. Unlike traditional software, AI agents can learn from interactions, adapt to new situations, and operate with varying degrees of autonomy."
    },
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: "Types of AI Agents",
      description: "AI agents range from simple reactive agents that respond to immediate inputs, to advanced goal-based agents that plan ahead. The most sophisticated agents can learn from experience and adapt their behavior over time, making them valuable for complex automation tasks."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "AI Automation",
      description: "AI automation leverages machine learning, natural language processing, and other AI technologies to automate tasks that traditionally required human intelligence. This includes everything from document processing and customer support to complex decision-making and strategic planning."
    }
  ];

  return (
    <section id="info" className="py-16 md:py-24 bg-secondary/30">
      <div className="container px-6 md:px-12">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-4 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Understanding <span className="text-primary">AI Intelligence</span>
          </h2>
          <p className={cn(
            "text-lg text-muted-foreground transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Discover how AI agents and automation technologies are transforming industries and creating new possibilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {infoCards.map((card, index) => (
            <Card key={index} className={cn(
              "border border-border bg-card hover:shadow-md transition-all duration-300",
              "transform transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )} style={{ transitionDelay: `${index * 150 + 200}ms` }}>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-muted-foreground">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={cn(
          "text-center transition-all duration-700 delay-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            AI automation is revolutionizing how businesses operate, enabling unprecedented levels of efficiency, accuracy, and scalability across industries.
          </p>
          <Button className="bg-primary hover:bg-primary/90" size="lg">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
