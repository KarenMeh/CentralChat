import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { getTranslation, getCurrentLanguage } from './LanguageSelector';
import { Helmet } from 'react-helmet';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState(getCurrentLanguage());
  
  // Keep state in sync with localStorage and browser language
  useEffect(() => {
    const browserLang = navigator.language.split('-')[0];
    const storedLanguage = localStorage.getItem('language') || browserLang || 'en';
    // Only use 'de' if explicitly set to German, otherwise default to 'en'
    const finalLanguage = storedLanguage === 'de' ? 'de' : 'en';
    setLanguage(finalLanguage);
    document.documentElement.lang = finalLanguage;
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'de' : 'en';
    localStorage.setItem('language', newLanguage);
    setLanguage(newLanguage);
    document.documentElement.lang = newLanguage;
    // Reload the page to ensure all components re-render with the new language
    window.location.reload();
  };

  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const baseUrl = 'https://centralchat.me';
  
  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      const newUrl = `${window.location.pathname}#${sectionId}`;
      window.history.pushState({ path: newUrl }, '', newUrl);
    }
  };
  
  return (
    <>
      <Helmet>
        <html lang={language} />
        <link rel="alternate" hrefLang="en" href={`${baseUrl}${currentPath}`} />
        <link rel="alternate" hrefLang="de" href={`${baseUrl}/de${currentPath}`} />
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${currentPath}`} />
        
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img 
              src="/c.png" 
              alt="CentralChat Logo" 
              className="h-5 sm:h-7 w-auto" 
              width="80" 
              height="30"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <nav className="flex items-center space-x-4 lg:space-x-6">
              <a 
                href="/"
                className="text-gray-500 hover:text-primary-600 cursor-pointer px-2 py-1 text-sm lg:text-base transition-colors duration-200"
              >
                {getTranslation('home')}
              </a>
              <a 
                href="#features" 
                onClick={scrollToSection('features')} 
                className="text-gray-500 hover:text-primary-600 cursor-pointer px-2 py-1 text-sm lg:text-base transition-colors duration-200"
              >
                {getTranslation('features')}
              </a>
              <a 
                href="#use-cases" 
                onClick={scrollToSection('use-cases')} 
                className="text-gray-500 hover:text-primary-600 cursor-pointer px-2 py-1 text-sm lg:text-base transition-colors duration-200"
              >
                {getTranslation('useCases')}
              </a>
              <a 
                href="#pricing" 
                onClick={scrollToSection('pricing')} 
                className="text-gray-500 hover:text-primary-600 cursor-pointer px-2 py-1 text-sm lg:text-base transition-colors duration-200"
              >
                {getTranslation('pricing')}
              </a>
              <a 
                href="https://developer.centralchat.me" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-600 cursor-pointer px-2 py-1 text-sm lg:text-base transition-colors duration-200"
              >
                {getTranslation('apiDocumentation')}
              </a>
            </nav>
            
            <div className="flex items-center space-x-3 lg:space-x-4">
              <button 
                onClick={toggleLanguage}
                className="text-gray-500 hover:text-primary-600 flex items-center space-x-1 px-2 py-1 transition-colors duration-200"
                aria-label={language === 'en' ? 'Switch to German' : 'Switch to English'}
              >
                <span className={`text-base ${language === 'en' ? 'font-semibold' : ''}`}>🇺🇸</span>
                <span className="text-gray-300">|</span>
                <span className={`text-base ${language === 'de' ? 'font-semibold' : ''}`}>🇩🇪</span>
              </button>
              
              <a 
                href="https://app.centralchat.me" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-500 text-white px-4 lg:px-5 py-2 rounded-md hover:bg-primary-700 transition-colors duration-200 text-sm lg:text-base whitespace-nowrap"
              >
                {getTranslation('login')}
              </a>
            </div>
          </div>
          
          <button 
            className="md:hidden text-gray-700 p-2 -mr-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile menu with improved transitions */}
        <div 
          className={`md:hidden bg-white border-t transform transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <nav className="flex flex-col px-4 py-2 space-y-1">
            <a 
              href="/"
              className="py-3 px-2 text-gray-500 hover:text-primary-600 hover:bg-gray-50 rounded-lg font-medium cursor-pointer transition-colors duration-200"
            >
              {getTranslation('home')}
            </a>
            <a 
              href="#features" 
              onClick={(e) => {
                scrollToSection('features')(e);
                setIsMenuOpen(false);
              }} 
              className="py-3 px-2 text-gray-500 hover:text-primary-600 hover:bg-gray-50 rounded-lg font-medium cursor-pointer transition-colors duration-200"
            >
              {getTranslation('features')}
            </a>
            <a 
              href="#use-cases" 
              onClick={(e) => {
                scrollToSection('use-cases')(e);
                setIsMenuOpen(false);
              }} 
              className="py-3 px-2 text-gray-500 hover:text-primary-600 hover:bg-gray-50 rounded-lg font-medium cursor-pointer transition-colors duration-200"
            >
              {getTranslation('useCases')}
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => {
                scrollToSection('pricing')(e);
                setIsMenuOpen(false);
              }} 
              className="py-3 px-2 text-gray-500 hover:text-primary-600 hover:bg-gray-50 rounded-lg font-medium cursor-pointer transition-colors duration-200"
            >
              {getTranslation('pricing')}
            </a>
            <a 
              href="https://developer.centralchat.me" 
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-2 text-gray-500 hover:text-primary-600 hover:bg-gray-50 rounded-lg font-medium cursor-pointer transition-colors duration-200"
            >
              {getTranslation('apiDocumentation')}
            </a>
            
            <div className="py-3 px-2">
              <button 
                onClick={toggleLanguage}
                className="text-gray-500 hover:text-primary-600 flex items-center space-x-1 transition-colors duration-200"
                aria-label={language === 'en' ? 'Switch to German' : 'Switch to English'}
              >
                <span className={`text-lg ${language === 'en' ? 'font-semibold' : ''}`}>🇺🇸</span>
                <span className="text-gray-300">|</span>
                <span className={`text-lg ${language === 'de' ? 'font-semibold' : ''}`}>🇩🇪</span>
              </button>
            </div>
           
            <a 
              href="https://app.centralchat.me" 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-primary-600 text-white px-4 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 text-center font-medium"
            >
              {getTranslation('login')}
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;