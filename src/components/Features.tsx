import React from 'react';
import { MessageSquare, Users, Bot, Zap, Code, Users2, Globe, Lock, LifeBuoy } from 'lucide-react';

const features = [
  {
    icon: <MessageSquare className="h-8 w-8 text-primary-500" />,
    title: 'Unified Multi-Channel Inbox',
    description: 'All customer messages from WhatsApp, Facebook, Instagram, Email, Telegram, and more - gathered in one central workspace.'
  },
  {
    icon: <Users className="h-8 w-8 text-primary-500" />,
    title: 'Role-Based Access & Accountability',
    description: 'Assign conversations to the right team members and track every reply - who responded, what was said, and when it happened.'
  },
  {
    icon: <Bot className="h-8 w-8 text-primary-500" />,
    title: 'AI Chatbots',
    description: 'Respond instantly to common inquiries and FAQs. Each bot is custom-trained to reflect your service logic and brand tone.'
  },
  {
    icon: <Zap className="h-8 w-8 text-primary-500" />,
    title: 'AI Agents',
    description: 'Go beyond responses: Let agents perform tasks such as retrieving booking data, checking order statuses, or even creating transactions directly in your connected systems.'
  },
  {
    icon: <Code className="h-8 w-8 text-primary-500" />,
    title: 'Trigger-Based Messaging',
    description: 'Automatically message customers when events occur—such as new bookings, CRM updates, or WhatsApp opt-ins.'
  },
  {
    icon: <Code className="h-8 w-8 text-primary-500" />,
    title: 'API-First Integration',
    description: 'Connect to your CRM, ERP, PMS, and/or ticketing tools. Easily embed CentralChat in your operational workflows.'
  },
  {
    icon: <Users2 className="h-8 w-8 text-primary-500" />,
    title: 'Multi-Agent Collaboration',
    description: 'Let multiple staff work in the same conversation thread. Maintain clarity through reply history and visible assignments.'
  },
  {
    icon: <Globe className="h-8 w-8 text-primary-500" />,
    title: 'Responsive Web App',
    description: 'Works flawlessly in all modern browsers—on desktop and mobile. No separate app download required.'
  },
  {
    icon: <Lock className="h-8 w-8 text-primary-500" />,
    title: 'GDPR-Ready & Privacy-First',
    description: 'Hosted on servers in Germany with self-hosted LLMs—ensuring maximum privacy and full compliance.'
  },
  {
    icon: <LifeBuoy className="h-8 w-8 text-primary-500" />,
    title: 'Onboarding & Dedicated Account Manager',
    description: 'Every client receives a guided setup and a personal contact for success management.'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
          Key Features
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            CentralChat.ai combines cutting-edge AI with seamless integration to transform your customer communication.
          </p> */}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col transform hover:-translate-y-2 relative overflow-hidden ${
                index === features.length - 1 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="bg-white p-4 rounded-xl inline-block mb-6 w-16 h-16 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;