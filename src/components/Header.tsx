import React, { useState, useEffect } from 'react';
import { MessageSquare, Menu, X } from 'lucide-react';
import { getTranslation, getCurrentLanguage } from './LanguageSelector';
import { Helmet } from 'react-helmet'; // Add this to your dependencies if not already installed

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState(getCurrentLanguage());
  
  // Keep state in sync with localStorage
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(storedLanguage);
    // Set HTML lang attribute for accessibility and SEO
    document.documentElement.lang = storedLanguage;
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'de' : 'en';
    localStorage.setItem('language', newLanguage);
    setLanguage(newLanguage);
    window.location.reload(); // Reload to apply language changes throughout the app
  };

  // Get current URL path to construct language alternates
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const baseUrl = 'https://centralchat.me'; // Replace with your actual domain
  
  return (
    <>
      {/* SEO enhancements with Helmet */}
      <Helmet>
        {/* Set language attribute */}
        <html lang={language} />
        
        {/* Add hreflang annotations for search engines */}
        <link rel="alternate" hreflang="en" href={`${baseUrl}${currentPath}`} />
        <link rel="alternate" hreflang="de" href={`${baseUrl}/de${currentPath}`} />
        <link rel="alternate" hreflang="x-default" href={`${baseUrl}${currentPath}`} />
        
        {/* Update title and meta description based on language */}
        <title>{language === 'en' ? 'CentralChat.ai - Unified Messaging Platform' : 'CentralChat.ai - Einheitliche Messaging-Plattform'}</title>
        <meta 
          name="description" 
          content={
            language === 'en' 
              ? 'Advanced AI chatbot platform providing seamless communication and smart automation solutions for businesses.' 
              : 'Fortschrittliche KI-Chatbot-Plattform für nahtlose Kommunikation und intelligente Automatisierungslösungen für Unternehmen.'
          } 
        />
      </Helmet>
      
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* Use absolute URL for logo with proper dimensions */}
            <img 
              src="https://centralchat.me/ccentral.png" 
              alt="CentralChat Logo" 
              className="h-10 w-auto" 
              width="120" 
              height="40"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <a href={`/${language === 'de' ? 'de/' : ''}#about`} className="text-gray-500 hover:text-primary-600 ">{getTranslation('about')}</a>
              <a href={`/${language === 'de' ? 'de/' : ''}#features`} className="text-gray-500 hover:text-gray-600 ">{getTranslation('features')}</a>
              <a href={`/${language === 'de' ? 'de/' : ''}#pricing`} className="text-gray-500 hover:text-primary-600 ">{getTranslation('pricing')}</a>
              <a href={`/${language === 'de' ? 'de/' : ''}#integrations`} className="text-gray-500 hover:text-primary-600 ">{getTranslation('integrations')}</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              {/* Language Flag Button with improved accessibility */}
              <button 
                onClick={toggleLanguage}
                className="h-6 w-8 overflow-hidden rounded shadow hover:shadow-md"
                aria-label={language === 'en' ? 'Switch to German' : 'Switch to English'}
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
              
              <a href={`/${language === 'de' ? 'de/' : ''}#contact`} className="bg-primary-500 text-white px-5 py-2 rounded-md hover:bg-primary-700 transition-colors">
                {getTranslation('contactUs')}
              </a>

              <a 
                href={`https://app.centralchat.me/${language === 'de' ? 'de/' : ''}`} 
                className="border border-primary-600 text-primary-600 px-5 py-2 rounded-md hover:bg-primary-50 transition-colors"
                hrefLang={language}
              >
                {getTranslation('logIn') || 'Log In'}
              </a>
            </div>
          </div>
          
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col px-4 py-2">
              <a href={`/${language === 'de' ? 'de/' : ''}#features`} className="py-2 text-gray-500 hover:text-primary-600 font-medium">{getTranslation('features')}</a>
              <a href={`/${language === 'de' ? 'de/' : ''}#pricing`} className="py-2 text-gray-500 hover:text-primary-600 font-medium">{getTranslation('pricing')}</a>
              <a href={`/${language === 'de' ? 'de/' : ''}#integrations`} className="py-2 text-gray-500 hover:text-primary-600 font-medium">{getTranslation('integrations')}</a>
              <a href={`/${language === 'de' ? 'de/' : ''}#about`} className="py-2 text-gray-500 hover:text-primary-600 font-medium">{getTranslation('about')}</a>
              
              {/* Mobile Language Flag Button */}
              <div className="py-2 flex items-center">
                <button 
                  onClick={toggleLanguage}
                  className="h-6 w-8 overflow-hidden rounded shadow hover:shadow-md"
                  aria-label={language === 'en' ? 'Switch to German' : 'Switch to English'}
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
             
              <a href={`/${language === 'de' ? 'de/' : ''}#contact`} className="mt-2 bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors text-center">
                {getTranslation('contactUs')}
              </a>
              <a 
                href={`https://app.centralchat.me/${language === 'de' ? 'de/' : ''}`} 
                className="mt-2 border border-primary-600 text-primary-600 px-4 py-2 rounded-md hover:bg-primary-50 transition-colors text-center"
                hrefLang={language}
              >
                {getTranslation('logIn') || 'Log In'}
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;