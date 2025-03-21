
import { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setEmail('');
      
      toast({
        title: "Subscription Successful",
        description: "Thank you for subscribing to our newsletter!",
      });
    }, 1000);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[30%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-3xl"></div>
      </div>
      
      <div className="container px-6 md:px-8">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 border border-border shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Stay Updated on AI Automation Intelligence
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive insights, platform reviews, and early access to our in-depth analysis.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className={cn(
                  "pr-36 h-14 text-base border-2 transition-all duration-300",
                  submitStatus === 'success' ? "border-green-500" : 
                  submitStatus === 'error' ? "border-red-500" : ""
                )}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting || submitStatus === 'success'}
              />
              
              <Button 
                type="submit" 
                className={cn(
                  "absolute right-1 top-1 h-12 transition-all duration-300",
                  isSubmitting ? "opacity-70" : ""
                )}
                disabled={isSubmitting || submitStatus === 'success'}
              >
                {isSubmitting ? (
                  "Subscribing..."
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle2 className="mr-1 h-4 w-4" />
                    <span>Subscribed</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-3 text-center">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
