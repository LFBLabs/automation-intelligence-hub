import { useState } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
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

  // Function to render formatted excerpt content with markdown-like formatting
  const renderExcerpt = (text: string) => {
    if (!text.includes('\n') && !text.includes('**')) {
      return <p className="line-clamp-3 text-xs md:text-sm">
        {text}
      </p>;
    }
    return text.split('\n\n').map((paragraph, i) => {
      // Check if paragraph is a heading (surrounded by **)
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return <h4 key={i} className="font-semibold text-xs md:text-sm mt-2 mb-1">
          {paragraph.slice(2, -2)}
        </h4>;
      }
      return <p key={i} className="mb-2 text-xs md:text-sm">{paragraph}</p>;
    });
  };
  return <article className={cn("group overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-border", "hover:shadow-lg transition-all duration-300", "animate-fade-in", "h-full flex flex-col")} style={{
    animationDelay: `${index * 150}ms`
  }}>
      {/* Image */}
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
        <div className="" />
        <img src={coverImage} alt={title} onLoad={() => setIsImageLoaded(true)} className="w-full h-full object-contain" />
        {/* Category tag */}
        <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <Link to={link}>
          <h3 className="text-base md:text-lg font-display font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
        </Link>
        
        <div className="text-muted-foreground mb-3 overflow-hidden flex-grow">
          {renderExcerpt(excerpt)}
        </div>
        
        {/* Meta */}
        <div className="flex items-center text-xs text-muted-foreground mb-4 mt-auto">
          <div className="flex items-center">
            <Calendar className="h-3.5 w-3.5 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center ml-4">
            <Clock className="h-3.5 w-3.5 mr-1" />
            <span>{readTime}</span>
          </div>
        </div>
        
        <Link to={link}>
          <Button variant="outline" className="w-full group-hover:border-primary transition-colors duration-300">
            <span>Read Article</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </article>;
};
export default InsightCard;