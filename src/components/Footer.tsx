
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-border">
      <div className="container px-6 py-12 md:py-16">
        <div className="flex flex-col items-center">
          {/* Logo & Tagline */}
          <div className="text-center mb-8">
            <a href="/" className="inline-block mb-4">
              <span className="text-2xl font-display font-semibold">
                <span className="text-primary">AI</span>Hub
              </span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Your trusted source for in-depth analysis and insights on AI automation platforms and agent-building technologies.
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Automation Intelligence Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
