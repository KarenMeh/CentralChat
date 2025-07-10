import React from 'react';
import { Check } from 'lucide-react';
import { getTranslation } from './LanguageSelector';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{getTranslation('pricingTitle')}</h2>
          {/* <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {getTranslation('pricingDescription')}
          </p> */}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-primary-500 p-6 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">{getTranslation('businessPlan')}</h3>
              <div className="flex items-center justify-center">
                <span className="text-4xl font-bold">€100</span>
                <span className="ml-2 text-primary-100">{getTranslation('perMonth')}</span>
              </div>
              <p className="mt-2 text-primary-100">{getTranslation('netExclVat')}</p>
            </div>
            
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>{getTranslation('fullChatInbox')}</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>{getTranslation('upTo5Users')}</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>{getTranslation('upTo5Channels')}</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>{getTranslation('roleBasedAccess')}</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>{getTranslation('onboardingAccountManager')}</span>
                </li>
              </ul>
              
              <div className="mt-8 bg-gray-50 p-4 rounded-md">
                <h4 className="font-semibold text-gray-900 mb-2">{getTranslation('addOns')}:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• {getTranslation('additionalUsers')}: +€10{getTranslation('perMonth')} {getTranslation('perUser')}</li>
                  <li>• {getTranslation('additionalChannels')}: +€10{getTranslation('perMonth')} {getTranslation('perChannel')}</li>
                  <li>• {getTranslation('aiChatbot')}: +€100{getTranslation('perMonth')}</li>
                  <li>• {getTranslation('aiAgent')} ({getTranslation('perAction')}): +€200{getTranslation('perMonth')}</li>
                </ul>
              </div>

              <div className="mt-8 bg-gray-50 p-4 rounded-md">
                <h4 className="font-semibold text-gray-900 mb-2">{getTranslation('terms')}:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{getTranslation('monthlySubscription')}</strong> - {getTranslation('monthlySubscriptionDesc')}</li>
                  <li>• <strong>{getTranslation('transparentPricing')}</strong> - {getTranslation('transparentPricingDesc')}</li>
                </ul>
              </div>

              <div className="mt-8 bg-gray-50 p-4 rounded-md">
                {/* <h4 className="font-semibold text-gray-900 mb-2">Integration & AI Capabilities:</h4> */}
                <p className="text-sm text-gray-700 mb-3">
                  {getTranslation('integrationAICapabilities')}
                </p>
              </div>
              
              <div className="mt-8 text-center">
                <a href="#contact" className="inline-block bg-primary-500 text-white px-8 py-3 rounded-md hover:bg-primary-700 transition-colors">
                  {getTranslation('getStarted')}
                </a>
              </div>
            </div>
          </div>
          
          {/* <div className="mt-8 bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{getTranslation('customSolution')}</h3>
            <p className="text-gray-700 mb-4">
              {getTranslation('customSolutionDesc')}
            </p>
            <a href="#contact" className="inline-block border border-primary-500 text-primary-500 px-6 py-2 rounded-md hover:bg-primary-50 transition-colors">
              {getTranslation('contactSales')}
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Pricing;