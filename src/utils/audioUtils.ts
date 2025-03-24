
// Simple utility to handle audio playback
export const createAudioPlayer = (audioSrc: string) => {
  // Create audio element
  const audio = new Audio();
  let isLoaded = false;
  let hasError = false;
  
  // Set up loading and error flags
  audio.addEventListener('canplaythrough', () => {
    isLoaded = true;
  });
  
  audio.addEventListener('error', (e) => {
    console.error("Audio failed to load:", e);
    hasError = true;
  });
  
  // Load the audio file with correct relative path
  // Remove any leading slash to ensure proper relative path resolution
  const cleanPath = audioSrc.startsWith('/') ? audioSrc.substring(1) : audioSrc;
  audio.src = cleanPath;
  audio.load();
  
  // Return player controls
  return {
    play: () => {
      if (hasError) {
        return Promise.reject(new Error("Audio file could not be loaded"));
      }
      
      if (!isLoaded) {
        return Promise.reject(new Error("Audio is still loading"));
      }
      
      return audio.play();
    },
    pause: () => audio.pause(),
    isPlaying: () => !audio.paused,
    addEventListener: (event: string, callback: EventListener) => 
      audio.addEventListener(event, callback),
    removeEventListener: (event: string, callback: EventListener) => 
      audio.removeEventListener(event, callback),
    isLoaded: () => isLoaded,
    hasError: () => hasError,
    setVolume: (volume: number) => {
      audio.volume = Math.max(0, Math.min(1, volume));
    },
    reset: () => {
      audio.currentTime = 0;
    }
  };
};
