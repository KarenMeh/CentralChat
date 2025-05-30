import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing</h2>
          {/* <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Get started with CentralChat.ai and transform your customer communication experience.
          </p> */}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-primary-500 p-6 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">Base Plan</h3>
              <div className="flex items-center justify-center">
                <span className="text-4xl font-bold">€100</span>
                <span className="ml-2 text-primary-100">/month</span>
              </div>
              <p className="mt-2 text-primary-100">net, excl. VAT</p>
            </div>
            
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Full chat inbox across all channels</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Up to 5 users</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Up to 5 channels</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Role-based access, tracking, and full message history</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Onboarding & dedicated account manager</span>
                </li>
              </ul>
              
              <div className="mt-8 bg-gray-50 p-4 rounded-md">
                <h4 className="font-semibold text-gray-900 mb-2">Add-ons:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Additional Users: +€10/month per user</li>
                  <li>• Additional Channels: +€10/month per channel</li>
                  <li>• AI Chatbot: +€100/month</li>
                  <li>• AI Agent (per action): +€200/month</li>
                </ul>
              </div>

              <div className="mt-8 bg-gray-50 p-4 rounded-md">
                <h4 className="font-semibold text-gray-900 mb-2">Terms:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Monthly Subscription - Cancel anytime at the end of each billing cycle</li>
                  <li>• Transparent Pricing - No setup fees, no hidden costs</li>
                  <li>• All prices are net (VAT will be added where applicable)</li>
                </ul>
              </div>
              
              <div className="mt-8 text-center">
                <a href="#contact" className="inline-block bg-primary-500 text-white px-8 py-3 rounded-md hover:bg-primary-700 transition-colors">
                  Get Started
                </a>
              </div>
            </div>
          </div>
          
          {/* <div className="mt-8 bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Need a Custom Solution?</h3>
            <p className="text-gray-700 mb-4">
              Contact us for custom integrations, enterprise pricing, or specific requirements.
            </p>
            <a href="#contact" className="inline-block border border-primary-500 text-primary-500 px-6 py-2 rounded-md hover:bg-primary-50 transition-colors">
              Contact Sales
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Pricing;