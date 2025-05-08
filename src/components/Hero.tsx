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
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateViewportHeight = () => {
      setViewportHeight(window.innerHeight);
    };
    updateViewportHeight();
    window.addEventListener('resize', updateViewportHeight);
    return () => {
      window.removeEventListener('resize', updateViewportHeight);
    };
  }, []);

  // We're now just scrolling to content on all devices


  const scrollToContent = () => {
    const heroHeight = sectionRef.current?.offsetHeight || 0;
    window.scrollTo({
      top: heroHeight,
      behavior: 'smooth',
    });
  };

  const toggleVideo = (isMobile = false) => {
    const currentRef = isMobile ? mobileVideoRef : videoRef;
    
    if (currentRef.current) {
      if (isPlaying) {
        currentRef.current.pause();
        setIsPlaying(false);
      } else {
        const playPromise = currentRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsPlaying(true))
            .catch((error: Error) => {
              console.error("Video play was prevented:", error);
              setIsPlaying(false);
            });
        }
      }
    }
  };

  return (
    <>
      {/* Main hero section */}
      <section
        ref={sectionRef}
        className="bg-gradient-to-b from-white to-primary-50 py-20 md:py-40 relative overflow-hidden"
        style={{
          minHeight: viewportHeight ? `${viewportHeight}px` : '100vh', // Full height on mobile for first section
        }}
        aria-label="Hero Section"
      >
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-primary-300"></div>
          <div className="absolute top-1/4 -right-20 w-60 h-60 rounded-full bg-primary-400"></div>
          <div className="absolute -bottom-20 left-1/4 w-40 h-40 rounded-full bg-primary-200"></div>
        </div>

        <div className="container mx-auto px-4 h-full flex flex-col">
          {/* Content for the first view (both mobile and desktop) */}
          <div className="flex flex-col md:flex-row items-center justify-between relative z-10 h-full">
            
            {/* Text content - always visible in first view */}
            <div className="w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
              <div className="flex flex-wrap gap-4 md:gap-6 mb-8 justify-center md:justify-start" role="list" aria-label="Supported Platforms">
                {integrations.map((integration, index) => (
                  <div key={index} className="flex items-center justify-center" role="listitem">
                    <div className="h-12 w-12 md:h-10 md:w-10 flex items-center justify-center">
                      <img 
                        src={integration.logo}
                        alt={`${integration.name} logo`}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                        width="40"
                        height="40"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <h1 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                {getTranslation('unifyMessaging')}
                <span className="text-primary-600" aria-hidden="true">.</span>
              </h1>

              <p className="text-lg text-gray-700 mb-10">
                {getTranslation('heroDescription')}
              </p>

              {/* Action buttons */}
              <div className="flex flex-col space-y-4 mb-8 justify-center md:justify-start sm:flex-row sm:space-y-0 sm:space-x-4">
                <a 
                  href="#demo"
                  className="bg-primary-500 text-white px-6 py-4 rounded-md hover:bg-primary-700 transition-colors flex items-center justify-center font-medium"
                  role="button"
                >
                  {getTranslation('requestDemo')}
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </a>
                <a 
                  href="#features"
                  className="border border-primary-500 text-primary-500 px-6 py-4 rounded-md hover:bg-primary-50 transition-colors flex items-center justify-center font-medium"
                  role="button"
                >
                  {getTranslation('exploreFeatures')}
                </a>
              </div>
            </div>

            {/* Video section - visible on desktop, hidden on mobile */}
            <div className="hidden md:block w-full md:w-1/2 flex justify-center">
              <div className="w-full max-w-md md:max-w-none">
                <div
                  className="relative rounded-xl shadow-xl overflow-hidden bg-gray-900 mx-auto md:ml-5"
                  onClick={() => toggleVideo(false)}
                >
                  <video
                    ref={videoRef}
                    className="w-full h-auto max-w-full max-h-full"
                    poster="/central.png"
                    playsInline
                    muted
                    onEnded={() => setIsPlaying(false)}
                    aria-label={getTranslation('watchDemo')}
                    preload="metadata"
                  >
                    <source src="/chatcentral.mp4" type="video/mp4" />
                    <track 
                      kind="captions" 
                      src="/captions-en.vtt" 
                      srcLang="en" 
                      label="English" 
                      default 
                    />
                    <track 
                      kind="captions" 
                      src="/captions-de.vtt" 
                      srcLang="de" 
                      label="Deutsch" 
                    />
                    <p>Your browser does not support the video tag. You can <a href="/chatcentral.mp4">download the video</a> instead.</p>
                  </video>

                  {/* Play button overlay - desktop */}
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleVideo(false);
                        }}
                        className="bg-primary-600/90 hover:bg-primary-500 text-white rounded-full p-4 transform transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                        style={{ WebkitTapHighlightColor: "transparent" }}
                        aria-label={isPlaying ? 'Pause video' : 'Play video'}
                      >
                        <Play className="h-8 w-8" aria-hidden="true" />
                      </button>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" aria-hidden="true" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-medium text-lg">{getTranslation('watchDemo')}</p>
                    <p className="text-gray-200 text-sm mt-2">{getTranslation('demoFeatures')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Video - Separate from main content to appear below - only visible on mobile */}
          <div className="md:hidden w-full mt-12 mb-6">
            <h3 className="text-xl font-semibold text-center mb-6 ">{getTranslation('watchDemo')}</h3>
            <div
              className="relative rounded-xl shadow-xl overflow-hidden bg-gray-900 mx-auto"
              onClick={() => toggleVideo(true)}
            >
              <video
                ref={mobileVideoRef}
                className="w-full h-auto max-w-full max-h-full"
                poster="/central.png"
                playsInline
                muted
                onEnded={() => setIsPlaying(false)}
                aria-label={getTranslation('watchDemo')}
                preload="metadata"
              >
                <source src="/chatcentral.mp4" type="video/mp4" />
                <track 
                  kind="captions" 
                  src="/captions-en.vtt" 
                  srcLang="en" 
                  label="English" 
                  default 
                />
                <track 
                  kind="captions" 
                  src="/captions-de.vtt" 
                  srcLang="de" 
                  label="Deutsch" 
                />
                <p>Your browser does not support the video tag. You can <a href="/chatcentral.mp4">download the video</a> instead.</p>
              </video>

              {/* Play button overlay - mobile */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleVideo(true);
                    }}
                    className="bg-primary-600/90 hover:bg-primary-500 text-white rounded-full p-4 transform transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                    style={{ WebkitTapHighlightColor: "transparent" }}
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  >
                    <Play className="h-8 w-8" aria-hidden="true" />
                  </button>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-gray-200 text-sm mt-2">{getTranslation('demoFeatures')}</p>
              </div>
            </div>
            
            {/* Mobile Scroll indicator - below the video */}
            <div className="flex justify-center mt-8">
              <button
                onClick={() => {
                  const heroHeight = sectionRef.current?.offsetHeight || 0;
                  window.scrollTo({
                    top: heroHeight,
                    behavior: 'smooth',
                  });
                }}
                className="animate-bounce bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                aria-label="Scroll to content"
              >
                <ChevronDown className="h-6 w-6 text-primary-600" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Desktop Scroll indicator */}
          <div className="hidden md:flex absolute bottom-9 left-0 right-0 justify-center">
            <button
              onClick={scrollToContent}
              className="animate-bounce bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              aria-label="Scroll to content"
            >
              <ChevronDown className="h-6 w-6 text-primary-600" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>


    </>
  );
};

export default Hero;