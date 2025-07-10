import React from 'react';
import { MessageSquare, Users, Bot, Zap, Code, Users2, Globe, Lock, LifeBuoy } from 'lucide-react';
import { getTranslation, translations } from './LanguageSelector';

type TranslationKey = keyof typeof translations['en'];

interface Feature {
  icon: React.ReactNode;
  title: TranslationKey;
  description: TranslationKey;
}

const features: Feature[] = [
  {
    icon: <MessageSquare className="h-8 w-8 text-primary-500" />,
    title: 'unifiedMessaging',
    description: 'unifiedMessagingDesc'
  },
  {
    icon: <Users className="h-8 w-8 text-primary-500" />,
    title: 'roleBasedAccess',
    description: 'roleBasedAccessDesc'
  },
  {
    icon: <Bot className="h-8 w-8 text-primary-500" />,
    title: 'aiResponses',
    description: 'aiResponsesDesc'
  },
  {
    icon: <Zap className="h-8 w-8 text-primary-500" />,
    title: 'aiAgents',
    description: 'aiAgentsDesc'
  },
  {
    icon: <Code className="h-8 w-8 text-primary-500" />,
    title: 'triggerBasedMessaging',
    description: 'triggerBasedMessagingDesc'
  },
  {
    icon: <Code className="h-8 w-8 text-primary-500" />,
    title: 'apiFirstIntegration',
    description: 'apiFirstIntegrationDesc'
  },
  {
    icon: <Users2 className="h-8 w-8 text-primary-500" />,
    title: 'multiAgentCollaboration',
    description: 'multiAgentCollaborationDesc'
  },
  {
    icon: <Globe className="h-8 w-8 text-primary-500" />,
    title: 'responsiveWebApp',
    description: 'responsiveWebAppDesc'
  },
  {
    icon: <Lock className="h-8 w-8 text-primary-500" />,
    title: 'gdprCompliant',
    description: 'gdprCompliantDesc'
  },
  {
    icon: <LifeBuoy className="h-8 w-8 text-primary-500" />,
    title: 'onboardingAccountManager',
    description: 'onboardingAccountManagerDesc'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
            {getTranslation('powerfulFeatures')}
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {getTranslation('featuresDescription')}
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
                  {getTranslation(feature.title)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {getTranslation(feature.description)}
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