import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Play, Pause, ChevronDown } from 'lucide-react';
import { getTranslation } from './LanguageSelector';

const integrations = [
  { name: 'WhatsApp', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' },
  { name: 'Facebook', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' },
  { name: 'Instagram', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg' },
];

const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Effect to set and update viewport height
  useEffect(() => {
    const updateViewportHeight = () => {
      setViewportHeight(window.innerHeight);
    };
    
    // Set initial height
    updateViewportHeight();
    
    // Update on resize
    window.addEventListener('resize', updateViewportHeight);
    
    return () => {
      window.removeEventListener('resize', updateViewportHeight);
    };
  }, []);

  // Scroll to content below hero
  const scrollToContent = () => {
    const heroHeight = sectionRef.current?.offsetHeight || 0;
    window.scrollTo({
      top: heroHeight,
      behavior: 'smooth'
    });
  };

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        // Create a promise to handle mobile autoplay restrictions
        const playPromise = videoRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch(error => {
              console.error("Video play was prevented:", error);
              setIsPlaying(false);
            });
        }
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-primary-50 py-16 md:py-40 relative overflow-hidden"
      style={{ 
        minHeight: viewportHeight ? `${viewportHeight * 0.9}px` : '90vh',
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-primary-300"></div>
        <div className="absolute top-1/4 -right-20 w-60 h-60 rounded-full bg-primary-400"></div>
        <div className="absolute -bottom-20 left-1/4 w-40 h-40 rounded-full bg-primary-200"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
          {/* Left Side - Text and Buttons */}
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            {/* Integration logos with consistent size */}
            <div className="flex flex-wrap gap-4 md:gap-6 mb-6 justify-center md:justify-start">
              {integrations.map((integration, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className="h-10 w-10 flex items-center justify-center">
                    <img 
                      src={integration.logo} 
                      alt={`${integration.name} logo`} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
              {getTranslation('unifyMessaging')}
              <span className="text-primary-600">.</span>
            </h1>
            
            <p className="text-lg text-gray-700 mb-8">
              {getTranslation('heroDescription')}
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a 
                href="#demo" 
                className="bg-primary-500 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors flex items-center justify-center font-medium"
              >
                {getTranslation('requestDemo')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#features" 
                className="border border-primary-500 text-primary-500 px-6 py-3 rounded-md hover:bg-primary-50 transition-colors flex items-center justify-center font-medium"
              >
                {getTranslation('exploreFeatures')}
              </a>
            </div>
          </div>

          {/* Right Side - Video */}
          <div className="md:w-1/2 w-full flex justify-center">
            <div className="w-full">
              <div 
                className="relative rounded-lg shadow-xl overflow-hidden bg-gray-900 ml-0 md:ml-5"
                onClick={toggleVideo}
                >
                <video
                  ref={videoRef}
                  className="w-auto h-auto max-w-full max-h-full"
                  poster="/central.png"
                  playsInline
                  muted
                  onEnded={() => setIsPlaying(false)}
                >
                  <source src="/chatcentral.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Play/Pause Button - Only shown when video is not playing */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={toggleVideo}
                      className="bg-primary-600/90 hover:bg-primary-500 text-white rounded-full p-4 transform transition-transform hover:scale-110 focus:outline-none"
                      style={{ WebkitTapHighlightColor: "transparent" }}
                      aria-label="Play video"
                    >
                      <Play className="h-8 w-8" />
                    </button>
                  </div>
                )}

                {/* Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-medium text-lg">{getTranslation('watchDemo')}</p>
                  <p className="text-gray-200 text-sm mt-2">{getTranslation('demoFeatures')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-2 sm:bottom-6 left-0 right-0 flex justify-center">
        <button
          onClick={scrollToContent}
          className="animate-bounce bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all"
          aria-label="Scroll to content">
          <ChevronDown className="h-5 w-5 text-primary-600" />
        </button>
      </div>
    </section>
  );
};

export default Hero;