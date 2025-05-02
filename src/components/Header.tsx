import React, { useState, useEffect } from 'react';
import { MessageSquare, Menu, X } from 'lucide-react';
import { getTranslation, getCurrentLanguage } from './LanguageSelector';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState(getCurrentLanguage());

  // Keep state in sync with localStorage
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(storedLanguage);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'de' : 'en';
    localStorage.setItem('language', newLanguage);
    setLanguage(newLanguage);
    window.location.reload(); // Reload to apply language changes throughout the app
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/ccentral.png" alt="CentralChat Logo" className="h-10 w-30 text-primary-500" />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <a href="#about" className="text-gray-500 hover:text-primary-600 ">{getTranslation('about')}</a>
            <a href="#features" className="text-gray-500 hover:text-gray-600 ">{getTranslation('features')}</a>
            <a href="#pricing" className="text-gray-500 hover:text-primary-600 ">{getTranslation('pricing')}</a>
            <a href="#integrations" className="text-gray-500 hover:text-primary-600 ">{getTranslation('integrations')}</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            {/* Language Flag Button */}
            <button 
              onClick={toggleLanguage}
              className="h-6 w-8 overflow-hidden rounded shadow hover:shadow-md"
              aria-label="Change language"
            >
              {language === 'en' ? (
                // Simplified American Flag
                <div className="w-full h-full relative">
                  {/* Stripes - simplified to 7 stripes */}
                  <div className="absolute inset-0 flex flex-col">
                    <div className="h-1/6 bg-red-600"></div>
                    <div className="h-1/6 bg-white"></div>
                    <div className="h-1/6 bg-red-600"></div>
                    <div className="h-1/6 bg-white"></div>
                    <div className="h-1/6 bg-red-600"></div>
                    <div className="h-1/6 bg-white"></div>
                  </div>
                  {/* Blue canton */}
                  <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-800"></div>
                </div>
              ) : (
                // German Flag
                <div className="w-full h-full flex flex-col">
                  <div className="h-1/3 bg-black"></div>
                  <div className="h-1/3 bg-red-600"></div>
                  <div className="h-1/3 bg-yellow-400"></div>
                </div>
              )}
            </button>
            
            <a href="#contact" className="bg-primary-500 text-white px-5 py-2 rounded-md hover:bg-primary-700 transition-colors">
              {getTranslation('contactUs')}
            </a>

            <a href="https://app.centralchat.me/" className="border border-primary-600 text-primary-600 px-5 py-2 rounded-md hover:bg-primary-50 transition-colors">
              {getTranslation('logIn') || 'Log In'}
            </a>
          </div>
        </div>
        
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-4 py-2">
            <a href="#features" className="py-2 text-gray-500 hover:text-primary-600 font-medium">{getTranslation('features')}</a>
            <a href="#pricing" className="py-2 text-gray-500 hover:text-primary-600 font-medium">{getTranslation('pricing')}</a>
            <a href="#integrations" className="py-2 text-gray-500 hover:text-primary-600 font-medium">{getTranslation('integrations')}</a>
            <a href="#about" className="py-2 text-gray-500 hover:text-primary-600 font-medium">{getTranslation('about')}</a>
            
            {/* Mobile Language Flag Button */}
            <div className="py-2 flex items-center">
              <button 
                onClick={toggleLanguage}
                className="h-6 w-8 overflow-hidden rounded shadow hover:shadow-md"
                aria-label="Change language"
              >
                {language === 'en' ? (
                  // Simplified American Flag
                  <div className="w-full h-full relative">
                    {/* Stripes - simplified to 7 stripes */}
                    <div className="absolute inset-0 flex flex-col">
                      <div className="h-1/6 bg-red-600"></div>
                      <div className="h-1/6 bg-white"></div>
                      <div className="h-1/6 bg-red-600"></div>
                      <div className="h-1/6 bg-white"></div>
                      <div className="h-1/6 bg-red-600"></div>
                      <div className="h-1/6 bg-white"></div>
                    </div>
                    {/* Blue canton */}
                    <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-800"></div>
                  </div>
                ) : (
                  // German Flag
                  <div className="w-full h-full flex flex-col">
                    <div className="h-1/3 bg-black"></div>
                    <div className="h-1/3 bg-red-600"></div>
                    <div className="h-1/3 bg-yellow-400"></div>
                  </div>
                )}
              </button>
              <span className="ml-2 text-gray-500">{language === 'en' ? 'English' : 'Deutsch'}</span>
            </div>
           
            <a href="#contact" className="mt-2 bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors text-center">
              {getTranslation('contactUs')}
            </a>
            <a href="https://app.centralchat.me/" className="mt-2 border border-primary-600 text-primary-600 px-4 py-2 rounded-md hover:bg-primary-50 transition-colors text-center">
              {getTranslation('logIn') || 'Log In'}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;