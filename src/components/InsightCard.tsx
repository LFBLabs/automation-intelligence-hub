
import { useState } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface InsightCardProps {
  title: string;
  excerpt: string;
  category: string;
  coverImage: string;
  date: string;
  readTime: string;
  link: string;
  index: number;
}

const InsightCard = ({ 
  title, 
  excerpt, 
  category, 
  coverImage, 
  date, 
  readTime, 
  link,
  index 
}: InsightCardProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <article 
      className={cn(
        "group overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-border",
        "hover:shadow-lg transition-all duration-300",
        "animate-fade-in"
      )}
      style={{
        animationDelay: `${index * 150}ms`
      }}
    >
      {/* Image */}
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
        <div className={cn(
          "absolute inset-0 bg-gray-200 animate-pulse",
          isImageLoaded ? "opacity-0" : "opacity-100"
        )} />
        <img
          src={coverImage}
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-all duration-500",
            "group-hover:scale-105",
            isImageLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setIsImageLoaded(true)}
        />
        {/* Category tag */}
        <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-display font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        {/* Meta */}
        <div className="flex items-center text-xs text-muted-foreground mb-5">
          <div className="flex items-center">
            <Calendar className="h-3.5 w-3.5 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center ml-4">
            <Clock className="h-3.5 w-3.5 mr-1" />
            <span>{readTime}</span>
          </div>
        </div>
        
        <a href={link}>
          <Button 
            variant="outline" 
            className="w-full group-hover:border-primary group-hover:text-primary transition-colors duration-300"
          >
            <span>Read Article</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </a>
      </div>
    </article>
  );
};

export default InsightCard;
