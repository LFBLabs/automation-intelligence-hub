
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    // Simulate loading completion for animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32 pb-20">
      {/* Abstract background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[80%] h-[80%] rounded-full bg-primary/5 blur-3xl animate-float"></div>
        <div className="absolute top-[60%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-3xl animate-float animation-delay-300"></div>
      </div>
      
      <div className="container px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tag */}
          <div className={cn("inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium", "transform transition-all duration-700", isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
            The Future of AI Automation
          </div>
          
          {/* Headline */}
          <h1 className={cn("text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6", "transform transition-all duration-700 delay-100", isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
            Discover the Cutting Edge of
            <span className="block text-primary">AI Intelegent Automation</span>
          </h1>
          
          {/* Subheadline */}
          <p className={cn("text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto", "transform transition-all duration-700 delay-200", isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
            In-depth analysis and insights on the most powerful AI agent platforms and automation tools shaping the future of work
          </p>
          
          {/* CTA Buttons - Updated with proper anchor links */}
          <div className={cn("flex flex-col sm:flex-row items-center justify-center gap-4", "transform transition-all duration-700 delay-300", isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
            <a href="#info">
              <Button className="bg-primary hover:bg-primary/90 px-6 py-6 text-lg transition-all duration-300 w-full sm:w-auto">
                Learn About AI
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            
            <a href="#platforms">
              <Button variant="outline" className="border-2 px-6 py-6 text-lg transition-all duration-300 w-full sm:w-auto">
                Explore Platforms
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
