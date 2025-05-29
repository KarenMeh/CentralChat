import React from 'react';

interface LanguageSelectorProps {
  onClose: () => void;
}

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
];

const translations = {
  en: {
    // Navigation
    features: 'Features',
    pricing: 'Pricing',
    integrations: 'Integrations',
    about: 'About',
    contactUs: 'Contact Us',
    language: 'Language',
    
    // Hero Section
    unifyMessaging: 'Unify All Your Messaging Channels in One Place',
    heroDescription: 'CentralChat.ai consolidates WhatsApp, Facebook, and Instagram into a single platform, enhanced with AI-powered responses.',
    requestDemo: 'Show Demo',
    exploreFeatures: 'Explore Features',
    watchDemo: 'See CentralChat in Action',
    demoFeatures: 'Featuring our unified inbox, AI responses, and seamless channel switching',

    // Features Section
    powerfulFeatures: 'Powerful Features',
    featuresDescription: 'CentralChat.ai combines cutting-edge AI with seamless integration to transform your customer communication.',
    unifiedMessaging: 'Unified Messaging',
    unifiedMessagingDesc: 'Consolidate WhatsApp, Facebook, and Instagram into a single platform.',
    aiResponses: 'AI-Powered Responses',
    aiResponsesDesc: 'Integrated chatbot using Meta\'s Llama via IONOS AI Model Hub for GDPR compliance.',
    multiLanguage: 'Multi-Language Support',
    multiLanguageDesc: 'Automatic language detection and response in multiple languages.',
    gdprCompliant: 'GDPR Compliant',
    gdprCompliantDesc: 'All data processing follows strict European data protection regulations.',
    teamEscalation: 'Team Escalation',
    teamEscalationDesc: 'Seamless escalation to human support via TEAMSTAR when needed.',
    continuousLearning: 'Continuous Learning',
    continuousLearningDesc: 'The chatbot learns from each interaction to improve future responses.',

    // Pricing Section
    pricingTitle: 'Simple, Transparent Pricing',
    pricingDescription: 'Get started with CentralChat.ai and transform your customer communication experience.',
    businessPlan: 'Business Plan',
    perMonth: '/month',
    plusCosts: 'Plus LLM and messaging costs',
    getStarted: 'Get Started',
    customSolution: 'Need a Custom Solution?',
    contactSales: 'Contact Sales',
    customSolutionDesc: 'Contact us for custom integrations, enterprise pricing, or specific requirements.',

    // Contact Section
    getInTouch: 'Get in Touch',
    contactDescription: 'Have questions about CentralChat.ai? Our team is here to help you get started.',
    fullName: 'Full Name',
    emailAddress: 'Email Address',
    companyName: 'Company Name',
    message: 'Message',
    sendMessage: 'Send Message',
    
    // Footer
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved.',
    product: 'Product',
    company: 'Company',
    legal: 'Legal',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    gdprCompliance: 'GDPR Compliance',
    security: 'Security',
    cookiePolicy: 'Cookie Policy'
  },
  de: {
    // Navigation
    features: 'Funktionen',
    pricing: 'Preise',
    integrations: 'Integrationen',
    about: 'Über uns',
    contactUs: 'Kontakt',
    language: 'Sprache',
    
    // Hero Section
    unifyMessaging: 'Vereinen Sie alle Ihre Nachrichtenkanäle an einem Ort',
    heroDescription: 'CentralChat.ai vereint WhatsApp, Facebook, und Instagram in einer einzigen Plattform, erweitert durch KI-gestützte Antworten.',
    requestDemo: 'Demo anzeigen',
    exploreFeatures: 'Funktionen entdecken',
    watchDemo: 'See CentralChat in Action',
    demoFeatures: 'Mit unserem einheitlichen Posteingang, KI-Antworten und nahtlosem Kanalwechsel',

    // Features Section
    powerfulFeatures: 'Leistungsstarke Funktionen',
    featuresDescription: 'CentralChat.ai verbindet modernste KI mit nahtloser Integration, um Ihre Kundenkommunikation zu transformieren.',
    unifiedMessaging: 'Vereinheitlichte Nachrichten',
    unifiedMessagingDesc: 'Konsolidieren Sie WhatsApp, Facebook, und Instagram in einer Plattform.',
    aiResponses: 'KI-gestützte Antworten',
    aiResponsesDesc: 'Integrierter Chatbot mit Meta\'s Llama über IONOS AI Model Hub für DSGVO-Konformität.',
    multiLanguage: 'Mehrsprachiger Support',
    multiLanguageDesc: 'Automatische Spracherkennung und Antwort in mehreren Sprachen.',
    gdprCompliant: 'DSGVO-konform',
    gdprCompliantDesc: 'Alle Datenverarbeitung folgt strengen europäischen Datenschutzbestimmungen.',
    teamEscalation: 'Team-Eskalation',
    teamEscalationDesc: 'Nahtlose Eskalation zum menschlichen Support über TEAMSTAR bei Bedarf.',
    continuousLearning: 'Kontinuierliches Lernen',
    continuousLearningDesc: 'Der Chatbot lernt aus jeder Interaktion, um zukünftige Antworten zu verbessern.',

    // Pricing Section
    pricingTitle: 'Einfache, transparente Preise',
    pricingDescription: 'Starten Sie mit CentralChat.ai und transformieren Sie Ihre Kundenkommunikation.',
    businessPlan: 'Business-Plan',
    perMonth: '/Monat',
    plusCosts: 'Plus LLM- und Nachrichtenkosten',
    getStarted: 'Jetzt starten',
    customSolution: 'Benötigen Sie eine individuelle Lösung?',
    contactSales: 'Vertrieb kontaktieren',
    customSolutionDesc: 'Kontaktieren Sie uns für individuelle Integrationen, Enterprise-Preise oder spezifische Anforderungen.',

    // Contact Section
    getInTouch: 'Kontaktieren Sie uns',
    contactDescription: 'Haben Sie Fragen zu CentralChat.ai? Unser Team hilft Ihnen beim Start.',
    fullName: 'Vollständiger Name',
    emailAddress: 'E-Mail-Adresse',
    companyName: 'Firmenname',
    message: 'Nachricht',
    sendMessage: 'Nachricht senden',
    
    // Footer
    followUs: 'Folgen Sie uns',
    allRightsReserved: 'Alle Rechte vorbehalten.',
    product: 'Produkt',
    company: 'Unternehmen',
    legal: 'Rechtliches',
    privacyPolicy: 'Datenschutzerklärung',
    termsOfService: 'Nutzungsbedingungen',
    gdprCompliance: 'DSGVO-Konformität',
    security: 'Sicherheit',
    cookiePolicy: 'Cookie-Richtlinie'
  }
};

export const getCurrentLanguage = () => {
  return localStorage.getItem('language') || 'en';
};

export const getTranslation = (key: keyof typeof translations['en']) => {
  const currentLang = getCurrentLanguage();
  return translations[currentLang as keyof typeof translations][key];
};

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onClose }) => {
  const handleLanguageChange = (code: string) => {
    localStorage.setItem('language', code);
    window.location.reload();
    onClose();
  };

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
      {languages.map((language) => (
        <button
          key={language.code}
          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-500 flex items-center"
          onClick={() => handleLanguageChange(language.code)}
        >
          <span className="mr-2">{language.flag}</span>
          {language.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;