import React, { useEffect, useState, useRef } from 'react';
import { getTranslation } from './LanguageSelector';

const About: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setAnimate(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary-100 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-40 h-40 rounded-full bg-primary-200 opacity-10 blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8 max-w-6xl relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-8 relative">
            <div className="absolute -inset-2 bg-primary-50 rounded-full opacity-30 animate-pulse"></div>
            <div className={`relative transform transition-transform duration-700 ${animate ? 'animate-float' : ''}`}>
              <img 
                src="/cc_logo.svg" 
                alt="CentralChat.ai Logo" 
                className="h-16 w-16 text-primary-500" 
              />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            {getTranslation('about')} <span className="text-primary-500">CentralChat.ai</span>
          </h2>
          
          <div className="w-full max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-gray-100">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                {getTranslation('aboutDescription1')}
              </p>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                {getTranslation('aboutDescription2')}
              </p>

              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                {getTranslation('aboutDescription3')}
              </p>

              <p className="text-xl text-gray-700 leading-relaxed">
                {getTranslation('aboutDescription4')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;