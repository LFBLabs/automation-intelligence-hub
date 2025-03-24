
// Audio utility to handle audio playback from Supabase storage
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
  
  // Determine if the audio source is from Supabase storage
  const isSupabaseStorage = audioSrc.includes('platform-audio-files/');
  
  // If it's from Supabase storage, use the full public URL
  if (isSupabaseStorage) {
    // Construct the Supabase storage URL
    const supabaseUrl = "https://fdygqdfvzbrxzoroeper.supabase.co";
    const bucketName = "platform-audio-files";
    
    // Extract just the filename if the full path is given
    const fileName = audioSrc.includes('/') 
      ? audioSrc.split('/').pop() 
      : audioSrc;
      
    // Build the complete URL
    const fullUrl = `${supabaseUrl}/storage/v1/object/public/${bucketName}/${fileName}`;
    console.log("Loading audio from:", fullUrl);
    audio.src = fullUrl;
  } else {
    // For local files, keep the existing behavior
    const cleanPath = audioSrc.startsWith('/') ? audioSrc.substring(1) : audioSrc;
    console.log("Loading local audio from:", cleanPath);
    audio.src = cleanPath;
  }
  
  audio.load();
  
  // Return player controls
  return {
    play: () => {
      if (hasError) {
        console.error("Cannot play: Audio file could not be loaded");
        return Promise.reject(new Error("Audio file could not be loaded"));
      }
      
      if (!isLoaded) {
        console.log("Audio is still loading, attempting to play anyway...");
        // Try to play even if not fully loaded - some browsers work this way
        return audio.play().catch(err => {
          console.error("Play failed:", err);
          throw err;
        });
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
