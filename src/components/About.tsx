import React, { useEffect, useState } from 'react';

const About: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section id="about" className="py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block animate-float mb-6">
            <img src="/cc_logo.svg" alt="My Custom Logo" className="h-16 w-16 text-primary-500" />
          </div>
             <h2 className="text-4xl font-bold text-gray-900 mb-6">
             About <span className="text-primary-500">CentralChat.ai</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed">
            CentralChat.ai is a powerful multi-channel chatbot platform that allows 
            users to manage conversations from various messaging apps like Instagram,
             WhatsApp, and Facebook in a single interface. It provides automation options,
              AI training capabilities, and role-based access control for efficient communication
               management. What sets us apart is our commitment to seamless integration, 
               privacy-first approach, and the ability to handle communication across WhatsApp,
                Facebook, Instagram, Line, LinkedIn, and Email—all from a single, intuitive interface.
                 Our AI-powered responses learn and adapt while maintaining the human touch that customers value.
             </p>
       
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;