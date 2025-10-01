import React from 'react';
import { Link } from 'react-router-dom';
import { getTranslation } from './LanguageSelector';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center space-x-2 mb-2">
              <img src="/footer1.png" alt="CentralChat Logo" className="h-10 w-30 text-primary-500" />
            </div>
            <p className="text-gray-400 mb-2">
              {getTranslation('footerDescription')}
            </p>
            <p className="text-xs text-gray-500 mt-1">v0.8.1 Beta</p>
          </div>

          <div className="md:col-span-2 text-center">
            <div className="mt-4 text-gray-400 mb-4">
              <p>&copy; 2025 CentralChat.ai. {getTranslation('allRightsReserved')}</p>
              <p className="text-sm mt-2">CentralChat.ai {getTranslation('isProductOf')} <a href="https://d3.net/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400">d3.net</a></p>
              <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Link to="/legal-notice" className="text-sm hover:text-white transition-colors">{getTranslation('legalNotice')}</Link>
                <Link to="/terms" className="text-sm hover:text-white transition-colors">{getTranslation('termsConditions')}</Link>
                <Link to="/privacy" className="text-sm hover:text-white transition-colors">{getTranslation('privacyPolicy')}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
