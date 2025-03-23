
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-24">
        <section 
          ref={sectionRef}
          className="py-16 md:py-24"
        >
          <div className="container px-6 md:px-8">
            <div 
              className={cn(
                "transition-all duration-700 max-w-4xl mx-auto",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                About AIHub
              </div>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Your Gateway to AI Automation Excellence
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground mb-8">
                  We're dedicated to providing comprehensive resources, insights, and guidance on the evolving landscape of AI automation platforms.
                </p>
                
                <h2 className="text-2xl font-semibold mt-10 mb-4">Our Mission</h2>
                <p>
                  At AIHub, we believe that AI automation is transforming how businesses operate across industries. Our mission is to demystify complex AI technologies and make them accessible to everyone, from beginners to advanced practitioners.
                </p>
                
                <h2 className="text-2xl font-semibold mt-10 mb-4">What We Offer</h2>
                <ul className="space-y-4 mt-4">
                  <li>
                    <strong>Platform Reviews:</strong> Comprehensive analyses of the leading AI automation platforms, highlighting their strengths, limitations, and ideal use cases.
                  </li>
                  <li>
                    <strong>Industry Insights:</strong> Regular articles and reports on the latest trends, innovations, and best practices in AI automation.
                  </li>
                  <li>
                    <strong>Practical Tutorials:</strong> Step-by-step guides and demonstrations to help you implement AI automation solutions effectively.
                  </li>
                  <li>
                    <strong>Expert Community:</strong> Connect with professionals and enthusiasts who share your passion for AI automation technologies.
                  </li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-10 mb-4">Our Approach</h2>
                <p>
                  We pride ourselves on delivering content that is:
                </p>
                <ul className="space-y-2 mt-4">
                  <li><strong>Accurate:</strong> Thoroughly researched and technically sound.</li>
                  <li><strong>Accessible:</strong> Presented in clear, jargon-free language.</li>
                  <li><strong>Actionable:</strong> Focused on practical applications and solutions.</li>
                  <li><strong>Unbiased:</strong> Providing honest evaluations without vendor influence.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-10 mb-4">Join Our Community</h2>
                <p>
                  Whether you're a business leader exploring AI automation for the first time, a developer integrating AI capabilities into your applications, or a data scientist pushing the boundaries of what's possible, AIHub is your resource for knowledge, inspiration, and growth.
                </p>
                <p className="mt-4">
                  Subscribe to our newsletter to stay updated with the latest insights and join our community of AI automation enthusiasts.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
