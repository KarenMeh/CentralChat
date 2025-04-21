import React from 'react';
import { MessageSquare, Bot, Globe, Lock, Users, Zap } from 'lucide-react';

const features = [
  {
    icon: <MessageSquare className="h-8 w-8 text-primary-500" />,
    title: 'Unified Messaging',
    description: 'Consolidate WhatsApp, Facebook, and Instagram into a single platform.'
  },
  {
    icon: <Bot className="h-8 w-8 text-primary-500" />,
    title: 'AI-Powered Responses',
    description: 'Integrated chatbot using Meta\'s Llama via IONOS AI Model Hub for GDPR compliance.'
  },
  {
    icon: <Globe className="h-8 w-8 text-primary-500" />,
    title: 'Multi-Language Support',
    description: 'Automatic language detection and response in multiple languages.'
  },
  {
    icon: <Lock className="h-8 w-8 text-primary-500" />,
    title: 'GDPR Compliant',
    description: 'All data processing follows strict European data protection regulations.'
  },
  {
    icon: <Users className="h-8 w-8 text-primary-500" />,
    title: 'Team Escalation',
    description: 'Seamless escalation to human support via TEAMSTAR when needed.'
  },
  {
    icon: <Zap className="h-8 w-8 text-primary-500" />,
    title: 'Continuous Learning',
    description: 'The chatbot learns from each interaction to improve future responses.'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            CentralChat.ai combines cutting-edge AI with seamless integration to transform your customer communication.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col transform hover:-translate-y-1"
            >
              <div className="bg-primary-50 p-3 rounded-lg inline-block mb-6 w-16 h-16 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-700 flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;