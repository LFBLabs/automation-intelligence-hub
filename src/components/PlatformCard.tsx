import { useState, useEffect, useRef } from 'react';
import { Play, Pause, ExternalLink, Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { createAudioPlayer } from '@/utils/audioUtils';

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
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [isLoadingAudio, setIsLoadingAudio] = useState(true);
  const audioPlayerRef = useRef<ReturnType<typeof createAudioPlayer> | null>(null);

  useEffect(() => {
    // Initialize audio player when component mounts
    if (audioSrc) {
      console.log(`Setting up audio player for ${name} with source: ${audioSrc}`);
      const player = createAudioPlayer(audioSrc);
      audioPlayerRef.current = player;
      
      // Set up event listeners
      const handleAudioEnd = () => setIsPlaying(false);
      const handleCanPlayThrough = () => {
        console.log(`Audio for ${name} is ready to play`);
        setAudioLoaded(true);
        setIsLoadingAudio(false);
      };
      
      player.addEventListener('ended', handleAudioEnd);
      player.addEventListener('canplaythrough', handleCanPlayThrough);
      
      // Check for loading status periodically
      const checkInterval = setInterval(() => {
        if (player.isLoaded()) {
          console.log(`Audio for ${name} loaded successfully`);
          setAudioLoaded(true);
          setIsLoadingAudio(false);
          clearInterval(checkInterval);
        }
        
        if (player.hasError()) {
          console.log(`Failed to load audio for ${name}: ${audioSrc}`);
          setAudioError(true);
          setAudioLoaded(false);
          setIsLoadingAudio(false);
          clearInterval(checkInterval);
        }
      }, 500);
      
      // Set a timeout to stop checking after 10 seconds
      setTimeout(() => {
        if (isLoadingAudio) {
          console.log(`Audio loading timeout for ${name}`);
          clearInterval(checkInterval);
          // If still loading after 10 seconds, attempt to play anyway
          setAudioLoaded(true);
          setIsLoadingAudio(false);
        }
      }, 10000);
      
      // Clean up event listeners when component unmounts
      return () => {
        player.removeEventListener('ended', handleAudioEnd);
        player.removeEventListener('canplaythrough', handleCanPlayThrough);
        clearInterval(checkInterval);
      };
    }
  }, [audioSrc, name, isLoadingAudio]);

  const toggleAudio = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (!audioPlayerRef.current) {
      toast.error("Audio player not initialized");
      return;
    }
    
    if (audioError) {
      toast.error(`Could not play audio for ${name}. Please try visiting the platform website for more information.`);
      return;
    }
    
    if (isPlaying) {
      audioPlayerRef.current.pause();
      setIsPlaying(false);
      toast.info(`Paused audio for ${name}`);
    } else {
      // Try to play the audio
      console.log(`Attempting to play audio for ${name}`);
      
      audioPlayerRef.current.play()
        .then(() => {
          console.log(`Successfully playing audio for ${name}`);
          setIsPlaying(true);
          toast.success(`Playing audio for ${name}`);
        })
        .catch(err => {
          console.error(`Error playing audio for ${name}:`, err);
          
          // Provide more specific error messages based on the error
          if (err.message.includes("loading")) {
            toast.error("Audio is still loading. Please try again in a moment.");
          } else if (err.name === "NotSupportedError") {
            toast.error("Your browser doesn't support this audio format");
            setAudioError(true);
          } else if (err.name === "NotAllowedError") {
            toast.error("Playback was prevented. Try interacting with the page first.");
          } else {
            toast.error(`Could not play audio for ${name}. Please try again later.`);
            // Mark as error after failed play attempt
            setAudioError(true);
          }
          
          setIsPlaying(false);
        });
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

          {/* Audio Player or Learn More button */}
          {!isComingSoon && (
            <div className="mt-auto">
              {audioSrc ? (
                <Button
                  onClick={toggleAudio}
                  variant={audioError ? "destructive" : "default"}
                  className={cn(
                    "w-full justify-center",
                    isLoadingAudio ? "opacity-70 cursor-wait" : ""
                  )}
                  disabled={isLoadingAudio}
                  aria-label={isPlaying ? "Pause audio" : "Play audio"}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="h-5 w-5 mr-2" />
                      <span>Pause Audio</span>
                    </>
                  ) : (
                    <>
                      {audioError ? <VolumeX className="h-5 w-5 mr-2" /> : <Volume2 className="h-5 w-5 mr-2" />}
                      <span>
                        {audioError 
                          ? "Audio Unavailable" 
                          : (isLoadingAudio 
                            ? "Loading Audio..." 
                            : "Play Audio")}
                      </span>
                    </>
                  )}
                </Button>
              ) : (
                <Button
                  asChild
                  variant="outline"
                  className="w-full"
                >
                  <a
                    href={link || "#"}
                    className="inline-flex items-center justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Learn More
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlatformCard;
