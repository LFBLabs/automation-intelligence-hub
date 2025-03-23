
import { useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PlatformCardProps {
  name: string;
  category: string;
  description?: string;
  logo: string;
  link?: string;
  index: number;
  audioSrc?: string;
  isComingSoon?: boolean;
}

const PlatformCard = ({ 
  name, 
  category, 
  description, 
  logo, 
  link, 
  index, 
  audioSrc,
  isComingSoon 
}: PlatformCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(audioSrc ? new Audio(audioSrc) : null);

  const toggleAudio = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!audio) return;
    
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(err => console.error("Error playing audio:", err));
      setIsPlaying(true);
      
      audio.onended = () => {
        setIsPlaying(false);
      };
    }
  };

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
      <div className="block p-6 h-full">
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

          {/* Description or Coming Soon */}
          {isComingSoon ? (
            <p className="text-muted-foreground text-sm mb-4 flex-grow font-medium">
              Coming soon
            </p>
          ) : (
            <p className="text-muted-foreground text-sm mb-4 flex-grow">
              {description}
            </p>
          )}

          {/* Audio Player (only for non-coming soon cards) */}
          {!isComingSoon && audioSrc && (
            <div className="mt-auto">
              <button
                onClick={toggleAudio}
                className="flex items-center justify-center w-full p-2 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-colors"
              >
                {isPlaying ? (
                  <>
                    <Pause className="h-5 w-5 mr-2" />
                    <span>Pause Audio</span>
                  </>
                ) : (
                  <>
                    <Play className="h-5 w-5 mr-2" />
                    <span>Play Audio</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlatformCard;
