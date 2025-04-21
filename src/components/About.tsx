import React, { useEffect, useState, useRef } from 'react';

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
            About <span className="text-primary-500">CentralChat.ai</span>
          </h2>
          
          <div className="w-full max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-gray-100">
              <p className="text-xl text-gray-700 leading-relaxed">
                CentralChat.ai is a powerful multi-channel chatbot platform that allows 
                users to manage conversations from various messaging apps like Instagram, 
                WhatsApp, and Facebook in a single interface.
              </p>
              
              <div className="my-6 flex justify-center">
                <div className="h-px w-24 bg-primary-100"></div>
              </div>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                It provides automation options, AI training capabilities, and role-based access 
                control for efficient communication management. What sets us apart is our commitment 
                to seamless integration, privacy-first approach, and the ability to handle communication 
                across WhatsApp, Facebook, and Instagram-all from a single, 
                intuitive interface.
              </p>
              
              <div className="mt-8 bg-primary-50 p-6 rounded-xl border-l-4 border-primary-400">
                <p className="text-lg text-primary-700 italic">
                  "Our AI-powered responses learn and adapt while maintaining the human touch that customers value."
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="text-primary-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
            <p className="text-gray-600">Connect all your messaging platforms in one intuitive interface.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="text-primary-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
            <p className="text-gray-600">Smart responses that adapt to your communication style.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="text-primary-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Privacy-First</h3>
            <p className="text-gray-600">Your conversations and data remain secure and protected.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;