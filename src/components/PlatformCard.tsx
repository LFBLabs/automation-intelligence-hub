
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PlatformCardProps {
  name: string;
  category: string;
  description: string;
  logo: string;
  link: string;
  index: number;
}

const PlatformCard = ({ name, category, description, logo, link, index }: PlatformCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-2xl transition-all duration-300",
        "bg-white dark:bg-gray-900 border border-border",
        "hover:shadow-lg hover:-translate-y-1",
        "animate-fade-in",
      )}
      style={{
        animationDelay: `${index * 100}ms`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a 
        href={link} 
        className="block p-6 h-full"
        target="_blank" 
        rel="noreferrer"
      >
        <div className="flex flex-col h-full">
          {/* Image Container */}
          <div className="mb-5 h-12 relative flex items-center">
            <img
              src={logo}
              alt={`${name} logo`}
              className={cn(
                "h-12 object-contain transition-all duration-700 relative z-10",
                isImageLoaded ? "opacity-100" : "opacity-0",
              )}
              onLoad={() => setIsImageLoaded(true)}
            />
            <div className={cn(
              "absolute inset-0 bg-gray-200 animate-pulse rounded",
              isImageLoaded ? "opacity-0" : "opacity-100"
            )} />
          </div>

          {/* Category */}
          <div className="text-xs font-medium text-primary uppercase tracking-wider mb-2">
            {category}
          </div>

          {/* Title */}
          <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm mb-4 flex-grow">
            {description}
          </p>

          {/* Link */}
          <div className="flex items-center text-sm font-medium mt-auto">
            <span className="text-primary">Learn more</span>
            <ArrowUpRight 
              className={cn(
                "ml-1 h-4 w-4 text-primary transition-transform duration-300",
                isHovered ? "translate-x-1 -translate-y-1" : ""
              )} 
            />
          </div>
        </div>
      </a>
    </div>
  );
};

export default PlatformCard;
