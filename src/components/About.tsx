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
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                CentralChat.ai is a powerful multi-channel chat platform that brings together communication from WhatsApp, Facebook, Instagram, and various other messengers in one unified interface.
              </p>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Built on our API-First-Approach, CentralChat.ai integrates seamlessly into existing ecosystems such as CRM, ERP, PMS, or ticketing systems – ensuring maximum efficiency in customer communication.
              </p>

              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                While CentralChat.ai works perfectly on its own, we also offer fully integrated, GDPR-compliant chatbots and next-generation AI agents as an optional add-on. These are custom-trained using your FAQs, previous conversations, and other relevant training data. On request, we also handle full integration into your systems — enabling agents to actively perform tasks such as managing bookings, checking order statuses, or processing customer inquiries in real time.
              </p>

              <p className="text-xl text-gray-700 leading-relaxed">
                With a strong focus on privacy, seamless integration, and usability, CentralChat.ai offers a central, intuitive interface for cross-channel communication – efficient, secure, and future-ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;