import React, { useState, useRef } from 'react';
import { ArrowRight, Play, Pause } from 'lucide-react';
import { getTranslation } from './LanguageSelector';

const integrations = [
  { name: 'WhatsApp', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' },
  { name: 'Facebook', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' },
  { name: 'Instagram', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg' },
  { name: 'LinkedIn', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' },
  { name: 'Email', logo: 'https://cdn-icons-png.flaticon.com/512/561/561127.png' },
  { name: 'Line', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg' }
];

const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="bg-gradient-to-b from-white to-primary-50 py-16 md:py-40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Side - Text and Buttons */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="flex flex-wrap gap-4 md:gap-6 mb-6">
              {integrations.map((integration, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className="h-6 w-6 md:h-8 md:w-8 flex items-center justify-center">
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
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              {getTranslation('heroDescription')}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#demo" className="bg-primary-500 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors flex items-center justify-center">
                {getTranslation('requestDemo')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#features" className="border border-primary-500 text-primary-500 px-6 py-3 rounded-md hover:bg-primary-50 transition-colors flex items-center justify-center">
                {getTranslation('exploreFeatures')}
              </a>
            </div>
          </div>

          {/* Right Side - Video */}
          <div className="md:w-1/2">
            <div className="relative rounded-lg shadow-xl overflow-hidden bg-gray-900 ml-5">
              <video
                ref={videoRef} // Use ref instead of getElementById
                className="w-auto h-auto max-w-full max-h-full"
                poster="/central.png"
                playsInline
                muted
                onEnded={() => setIsPlaying(false)}
              >
                <source src="/chatcentral.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play/Pause Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={toggleVideo}
                  className="bg-primary-600/90 hover:bg-primary-500 text-white rounded-full p-4 transform transition-transform hover:scale-110 focus:outline-none"
                >
                  {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
                </button>
              </div>

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
    </section>
  );
};

export default Hero;
