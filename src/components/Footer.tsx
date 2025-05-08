import React from 'react';
import { Hexagon } from 'lucide-react';
import { getTranslation } from './LanguageSelector';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/ccentral.png" alt="CentralChat Logo" className="h-10 w-30 text-primary-500" />
            </div>
            <p className="text-gray-400 mb-4">
              {getTranslation('heroDescription')}
            </p>
          
          </div>

          {/* Product Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">{getTranslation('product')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                  {getTranslation('features')}
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                  {getTranslation('pricing')}
                </a>
              </li>
              <li>
                <a href="#integrations" className="text-gray-400 hover:text-white transition-colors">
                  {getTranslation('integrations')}
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">{getTranslation('company')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  {getTranslation('about')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  {getTranslation('contactUs')}
                </a>
              </li>
              <li>
                <a href="https://d3.net" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  D3.NET
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">{getTranslation('legal')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  {getTranslation('privacyPolicy')}
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  {getTranslation('termsOfService')}
                </a>
              </li>
              <li>
                <a href="/gdpr" className="text-gray-400 hover:text-white transition-colors">
                  {getTranslation('gdprCompliance')}
                </a>
              </li>
              <li>
                <a href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                  {getTranslation('cookiePolicy')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} CentralChat.ai. {getTranslation('allRightsReserved')}
          </p>
          <p className="text-xs text-gray-500 mt-2">v0.8.1 Beta</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
