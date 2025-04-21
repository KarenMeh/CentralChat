import React, { useState } from 'react';
import { MessageSquare, Menu, X, Globe } from 'lucide-react';
import LanguageSelector, { getTranslation } from './LanguageSelector';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
        <img src="/cc_logo.svg" alt="CentralChat Logo" className="h-10 w-10 text-primary-500" />
        <span className="text-2xl font-bold text-gray-800">CentralChat<span className="text-primary-600">.ai</span></span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <a href="#about" className="text-gray-700 hover:text-primary-600 font-medium">{getTranslation('about')}</a>
            <a href="#features" className="text-gray-700 hover:text-primary-600 font-medium">{getTranslation('features')}</a>
            <a href="#pricing" className="text-gray-700 hover:text-primary-600 font-medium">{getTranslation('pricing')}</a>
            <a href="#integrations" className="text-gray-700 hover:text-primary-600 font-medium">{getTranslation('integrations')}</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button 
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-primary-600"
              >
                <Globe className="h-5 w-5" />
                <span className="text-sm">{getTranslation('language')}</span>
              </button>
              
              {isLanguageMenuOpen && (
                <LanguageSelector onClose={() => setIsLanguageMenuOpen(false)} />
              )}
            </div>
            
            <a href="#contact" className="bg-primary-600 text-white px-5 py-2 rounded-md hover:bg-primary-700 transition-colors">
              {getTranslation('contactUs')}
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
            <a href="#features" className="py-2 text-gray-700 hover:text-primary-600 font-medium">{getTranslation('features')}</a>
            <a href="#pricing" className="py-2 text-gray-700 hover:text-primary-600 font-medium">{getTranslation('pricing')}</a>
            <a href="#integrations" className="py-2 text-gray-700 hover:text-primary-600 font-medium">{getTranslation('integrations')}</a>
            <a href="#about" className="py-2 text-gray-700 hover:text-primary-600 font-medium">{getTranslation('about')}</a>
            <div className="py-2">
              <button 
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-primary-600"
              >
                <Globe className="h-5 w-5" />
                <span className="text-sm">{getTranslation('language')}</span>
              </button>
              
              {isLanguageMenuOpen && (
                <LanguageSelector onClose={() => setIsLanguageMenuOpen(false)} />
              )}
            </div>
            <a href="#contact" className="mt-2 bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors text-center">
              {getTranslation('contactUs')}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;