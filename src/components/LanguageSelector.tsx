import React from 'react';

interface LanguageSelectorProps {
  onClose: () => void;
}

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
];

export const translations = {
  en: {
    // Navigation
    features: 'Features',
    pricing: 'Pricing',
    integrations: 'Integrations',
    about: 'About',
    contactUs: 'Contact Us',
    language: 'Language',
    home: 'Home',
    apiDocumentation: 'API Documentation',
    login: 'Login',
    
    // Hero Section
    unifyMessaging: 'Unify All Your Messaging Channels in One Place',
    heroDescription: 'CentralChat.ai consolidates WhatsApp, Facebook, and Instagram into a single platform, enhanced with AI-powered responses.',
    requestDemo: 'Show Demo',
    exploreFeatures: 'Explore Features',
    watchDemo: 'See CentralChat in Action',
    demoFeatures: 'Featuring our unified inbox, AI responses, and seamless channel switching',
    oneCentralChat: 'One Central Chat',
    allConversationsOnePlace: 'All Conversations, One Place.',
    poweredByAI: 'Powered by AI.',
    heroSubtitle: 'AI-enhanced, API-first, and role-based. Know exactly who replied what and when – while bots and agents handle the rest.',
    startNow: 'Start Now',
    from100PerMonth: 'from €100/month',
    bookLiveDemoCall: 'Book Live Demo Call',
    learnHowCentralChat: 'Learn how CentralChat merges communication, enables collaboration, and delivers automation - with full team control and powerful integrations.',

    // Features Section
    powerfulFeatures: 'Powerful Features',
    featuresDescription: 'CentralChat.ai combines cutting-edge AI with seamless integration to transform your customer communication.',
    unifiedMessaging: 'Unified Multi-Channel Inbox',
    unifiedMessagingDesc: 'All customer messages from WhatsApp, Facebook, Instagram, Email, Telegram, and more - gathered in one central workspace.',
    roleBasedAccess: 'Role-Based Access & Accountability',
    roleBasedAccessDesc: 'Assign conversations to the right team members and track every reply - who responded, what was said, and when it happened.',
    aiResponses: 'AI Chatbots',
    aiResponsesDesc: 'Respond instantly to common inquiries and FAQs. Each bot is custom-trained to reflect your service logic and brand tone.',
    aiAgents: 'AI Agents',
    aiAgentsDesc: 'Go beyond responses: Let agents perform tasks such as retrieving booking data, checking order statuses, or even creating transactions directly in your connected systems.',
    triggerBasedMessaging: 'Trigger-Based Messaging',
    triggerBasedMessagingDesc: 'Automatically message customers when events occur—such as new bookings, CRM updates, or WhatsApp opt-ins.',
    apiFirstIntegration: 'API-First Integration',
    apiFirstIntegrationDesc: 'Connect to your CRM, ERP, PMS, and/or ticketing tools. Easily embed CentralChat in your operational workflows.',
    multiAgentCollaboration: 'Multi-Agent Collaboration',
    multiAgentCollaborationDesc: 'Let multiple staff work in the same conversation thread. Maintain clarity through reply history and visible assignments.',
    responsiveWebApp: 'Responsive Web App',
    responsiveWebAppDesc: 'Works flawlessly in all modern browsers—on desktop and mobile. No separate app download required.',
    gdprCompliant: 'GDPR-Ready & Privacy-First',
    gdprCompliantDesc: 'Hosted on servers in Germany with self-hosted LLMs—ensuring maximum privacy and full compliance.',
    onboardingAccountManager: 'Onboarding & Dedicated Account Manager',
    onboardingAccountManagerDesc: 'Every client receives a guided setup and a personal contact for success management.',
    multiLanguage: 'Multi-Language Support',
    multiLanguageDesc: 'Automatic language detection and response in multiple languages.',
    teamEscalation: 'Team Escalation',
    teamEscalationDesc: 'Seamless escalation to human support via TEAMSTAR when needed.',
    continuousLearning: 'Continuous Learning',
    continuousLearningDesc: 'The chatbot learns from each interaction to improve future responses.',

    // Use Cases Section
    useCases: 'Use Cases',
    useCasesDescription: 'Discover how CentralChat.ai transforms communication across different industries',
    hospitalityRentals: 'Hospitality & Rentals',
    hospitalityRentalsDesc: 'Automate guest communication after bookings. Escalate complex cases or hand off chats to live agents when needed.',
    ecommerce: 'E-Commerce',
    ecommerceDesc: 'Answer product and order questions, provide real-time status updates, and let customers place orders directly via chat.',
    customerSupport: 'Customer Support',
    customerSupportDesc: 'Replace scattered support messages with one central inbox. A trained bot responds immediately and forwards to the right team if necessary.',
    salesLeadManagement: 'Sales & Lead Management',
    salesLeadManagementDesc: 'Qualify leads via chatbot, close deals through AI agents, or pass hot leads to your sales team—automatically and efficiently.',
    realEstateServices: 'Real Estate & Services',
    realEstateServicesDesc: 'Use WhatsApp or Facebook as entry point. An AI agent fully automates the entire sales process – from lead qualification to conversion - or routes qualified leads to the sales team.',

    // Integrations Section
    needCustomIntegrations: 'Need Custom Integrations?',
    customIntegrationsDescription: 'We offer seamless integration with systems such as CRM, ERP, PMS, and ticketing platforms. In addition to implementing CentralChat.ai into your environment, we can also integrate AI agents directly into your internal systems — giving them the tools and capabilities to autonomously perform tasks such as checking order statuses, making purchases, reporting issues, and much more, depending on your specific needs.',

    // Testimonials Section
    testimonials: 'Testimonials',
    testimonialsDescription: 'Don\'t just take our word for it - hear from some of our satisfied customers',
    customerExperienceManager: 'Customer Experience Manager',
    digitalSalesLead: 'Digital Sales Lead',
    testimonialLea: 'CentralChat helped us unify communication across five platforms. Now we reply faster, know exactly who said what, and our bot handles repetitive questions.',
    testimonialMarc: 'With Central Chat, our e-commerce team can even process orders directly in the chat. It\'s a game changer.',

    // Pricing Section
    pricingTitle: 'Simple, Transparent Pricing',
    pricingDescription: 'Get started with CentralChat.ai and transform your customer communication experience.',
    businessPlan: 'Base Plan',
    perMonth: '/month',
    netExclVat: 'net, excl. VAT',
    fullChatInbox: 'Full chat inbox across all channels',
    upTo5Users: 'Up to 5 users',
    upTo5Channels: 'Up to 5 channels',
    addOns: 'Add-ons',
    additionalUsers: 'Additional Users',
    perUser: 'per user',
    additionalChannels: 'Additional Channels',
    perChannel: 'per channel',
    aiChatbot: 'AI Chatbot',
    aiAgent: 'AI Agent',
    perAction: 'per action',
    terms: 'Terms',
    monthlySubscription: 'Monthly Subscription',
    monthlySubscriptionDesc: 'You\'re never locked in. We believe in earning your trust month after month—cancel anytime at the end of each billing cycle.',
    transparentPricing: 'Transparent Pricing',
    transparentPricingDesc: 'No setup fees, no hidden costs. All prices are net (VAT will be added where applicable).',
    integrationAICapabilities: 'We offer seamless integration with systems such as CRM, ERP, PMS, and ticketing platforms. In addition to implementing CentralChat.ai into your environment, we can also integrate AI agents directly into your internal systems — giving them the tools and capabilities to autonomously perform tasks such as checking order statuses, making purchases, reporting issues, and much more, depending on your specific needs.',
    plusCosts: 'Plus LLM and messaging costs',
    getStarted: 'Get Started',
    customSolution: 'Need a Custom Solution?',
    contactSales: 'Contact Sales',
    customSolutionDesc: 'Contact us for custom integrations, enterprise pricing, or specific requirements.',

    // Contact Section
    getInTouch: 'Get in Touch',
    contactDescription: 'Have questions about CentralChat.ai? Our team is here to help you get started.',
    sendUsMessage: 'Send us a Message',
    contactFormSubmission: 'Contact form submission from',
    name: 'Name',
    email: 'Email',
    company: 'Company',
    message: 'Message',
    sendMessage: 'Send Message',
    thankYouMessage: 'Thank you for your message!',
    emailOpenedGmail: 'Your email has been opened in Gmail. Please review and send it.',
    sendAnotherMessage: 'Send Another Message',
    sending: 'Sending...',
    fullName: 'Full Name',
    emailAddress: 'Email Address',
    companyName: 'Company Name',
    
    // Footer
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved.',
    footerDescription: 'Unify all your messaging channels in one place with AI-powered responses.',
    isProductOf: 'is a product of',
    product: 'Product',
    legal: 'Legal',
    legalNotice: 'Legal Notice',
    termsConditions: 'Terms & Conditions',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    gdprCompliance: 'GDPR Compliance',
    security: 'Security',
    cookiePolicy: 'Cookie Policy',

    // About Section
    aboutDescription1: 'CentralChat.ai is a powerful multi-channel chat platform that brings together communication from WhatsApp, Facebook, Instagram, and various other messengers in one unified interface.',
    aboutDescription2: 'Built on our API-First-Approach, CentralChat.ai integrates seamlessly into existing ecosystems such as CRM, ERP, PMS, or ticketing systems – ensuring maximum efficiency in customer communication.',
    aboutDescription3: 'While CentralChat.ai works perfectly on its own, we also offer fully integrated, GDPR-compliant chatbots and next-generation AI agents as an optional add-on. These are custom-trained using your FAQs, previous conversations, and other relevant training data. On request, we also handle full integration into your systems — enabling agents to actively perform tasks such as managing bookings, checking order statuses, or processing customer inquiries in real time.',
    aboutDescription4: 'With a strong focus on privacy, seamless integration, and usability, CentralChat.ai offers a central, intuitive interface for cross-channel communication – efficient, secure, and future-ready.'
  },
  de: {
    // Navigation
    features: 'Funktionen',
    pricing: 'Preise',
    integrations: 'Integrationen',
    about: 'Über uns',
    contactUs: 'Kontakt',
    language: 'Sprache',
    home: 'Startseite',
    apiDocumentation: 'API-Dokumentation',
    login: 'Anmelden',
    
    // Hero Section
    unifyMessaging: 'Vereinen Sie alle Ihre Nachrichtenkanäle an einem Ort',
    heroDescription: 'CentralChat.ai vereint WhatsApp, Facebook, und Instagram in einer einzigen Plattform, erweitert durch KI-gestützte Antworten.',
    requestDemo: 'Demo anzeigen',
    exploreFeatures: 'Funktionen entdecken',
    watchDemo: 'CentralChat in Aktion sehen',
    demoFeatures: 'Mit unserem einheitlichen Posteingang, KI-Antworten und nahtlosem Kanalwechsel',
    oneCentralChat: 'Ein zentraler Chat',
    allConversationsOnePlace: 'Alle Gespräche, an einem Ort.',
    poweredByAI: 'Mit KI angetrieben.',
    heroSubtitle: 'KI-gestützt, API-First und rollenbasiert. Wissen Sie genau, wer was geantwortet hat und wann – während Bots und Agenten den Rest bewältigen.',
    startNow: 'Jetzt starten',
    from100PerMonth: 'ab €100/Monat',
    bookLiveDemoCall: 'Live-Demo-Anruf buchen',
    learnHowCentralChat: 'Lernen Sie, wie CentralChat Kommunikation, Zusammenarbeit und Automatisierung zusammenfasst – mit vollem Team-Kontrolle und mächtigen Integrationen.',

    // Features Section
    powerfulFeatures: 'Leistungsstarke Funktionen',
    featuresDescription: 'CentralChat.ai verbindet modernste KI mit nahtloser Integration, um Ihre Kundenkommunikation zu transformieren.',
    unifiedMessaging: 'Vereinheitlichte Multi-Kanal-Inbox',
    unifiedMessagingDesc: 'Alle Kundennachrichten von WhatsApp, Facebook, Instagram, E-Mail, Telegram und mehr - gesammelt in einem zentralen Arbeitsbereich.',
    roleBasedAccess: 'Rollenbasierter Zugriff & Verantwortlichkeit',
    roleBasedAccessDesc: 'Weisen Sie Gespräche den richtigen Teammitgliedern zu und verfolgen Sie jede Antwort - wer geantwortet hat, was gesagt wurde und wann es passiert ist.',
    aiResponses: 'KI-Chatbots',
    aiResponsesDesc: 'Antworten Sie sofort auf häufige Anfragen und FAQs. Jeder Bot wird individuell trainiert, um Ihre Service-Logik und Marken-Ton zu reflektieren.',
    aiAgents: 'KI-Agenten',
    aiAgentsDesc: 'Gehen Sie über Antworten hinaus: Lassen Sie Agenten Aufgaben ausführen wie das Abrufen von Buchungsdaten, das Überprüfen von Bestellstatus oder sogar das direkte Erstellen von Transaktionen in Ihren verbundenen Systemen.',
    triggerBasedMessaging: 'Trigger-basierte Nachrichten',
    triggerBasedMessagingDesc: 'Nachrichten Sie automatisch Kunden, wenn Ereignisse auftreten - wie neue Buchungen, CRM-Updates oder WhatsApp-Opt-ins.',
    apiFirstIntegration: 'API-First Integration',
    apiFirstIntegrationDesc: 'Verbinden Sie sich mit Ihren CRM-, ERP-, PMS- und/oder Ticketing-Tools. Betten Sie CentralChat einfach in Ihre operativen Workflows ein.',
    multiAgentCollaboration: 'Multi-Agent-Kollaboration',
    multiAgentCollaborationDesc: 'Lassen Sie mehrere Mitarbeiter im selben Gesprächsthread arbeiten. Behalten Sie Klarheit durch Antwortverlauf und sichtbare Zuweisungen.',
    responsiveWebApp: 'Responsive Web-App',
    responsiveWebAppDesc: 'Funktioniert einwandfrei in allen modernen Browsern - auf Desktop und Mobile. Keine separate App-Download erforderlich.',
    gdprCompliant: 'DSGVO-bereit & Datenschutz-zuerst',
    gdprCompliantDesc: 'Gehostet auf Servern in Deutschland mit selbst gehosteten LLMs - für maximale Privatsphäre und vollständige Compliance.',
    onboardingAccountManager: 'Onboarding & Dedizierter Account Manager',
    onboardingAccountManagerDesc: 'Jeder Kunde erhält eine geführte Einrichtung und einen persönlichen Ansprechpartner für das Erfolgsmanagement.',
    multiLanguage: 'Mehrsprachiger Support',
    multiLanguageDesc: 'Automatische Spracherkennung und Antwort in mehreren Sprachen.',
    teamEscalation: 'Team-Eskalation',
    teamEscalationDesc: 'Nahtlose Eskalation zum menschlichen Support über TEAMSTAR bei Bedarf.',
    continuousLearning: 'Kontinuierliches Lernen',
    continuousLearningDesc: 'Der Chatbot lernt aus jeder Interaktion, um zukünftige Antworten zu verbessern.',

    // Use Cases Section
    useCases: 'Anwendungsfälle',
    useCasesDescription: 'Entdecken Sie, wie CentralChat.ai die Kommunikation in verschiedenen Branchen transformiert',
    hospitalityRentals: 'Gastgewerbe & Vermietungen',
    hospitalityRentalsDesc: 'Automatisieren Sie die Gastkommunikation nach Buchungen. Escalieren Sie komplexe Fälle oder übergeben Sie Chats an lebende Agenten, wenn nötig.',
    ecommerce: 'E-Commerce',
    ecommerceDesc: 'Beantworten Sie Produkt- und Bestellfragen, stellen Sie reale Statusaktualisierungen bereit und lassen Sie Kunden direkt über den Chat bestellen.',
    customerSupport: 'Kundenbetreuung',
    customerSupportDesc: 'Ersetzen Sie gestreute Supportnachrichten durch einen zentralen Posteingang. Ein trainiertes Bot-System antwortet sofort und leitet bei Bedarf an die richtige Abteilung weiter.',
    salesLeadManagement: 'Verkaufs- und Lead-Management',
    salesLeadManagementDesc: 'Qualifizieren Sie Leads über den Chatbot, schließen Sie Deals mit AI-Agenten oder übergeben Sie heiße Leads an Ihre Verkaufsabteilung - automatisch und effizient.',
    realEstateServices: 'Immobilien- und Dienstleistungen',
    realEstateServicesDesc: 'Nutzen Sie WhatsApp oder Facebook als Einstiegspunkt. Ein AI-Agent führt den gesamten Verkaufsprozess vollständig durch - vom Lead-Qualifizierungs- zum Konversionsprozess - oder leitet qualifizierte Leads an die Verkaufsabteilung weiter.',

    // Integrations Section
    needCustomIntegrations: 'Benötigen Sie individuelle Integrationen?',
    customIntegrationsDescription: 'Wir bieten nahtlose Integrationen mit Systemen wie CRM, ERP, PMS und Ticketing-Plattformen. Zusätzlich zur Implementierung von CentralChat.ai in Ihre Umgebung können wir auch direkt AI-Agenten in Ihre interne Systeme integrieren – sie mit den Tools und Fähigkeiten ausstatten, um autonome Aufgaben wie das Überprüfen von Bestellstatus, Einkäufe, Meldungen oder vieles mehr auszuführen, je nach Ihren spezifischen Anforderungen.',

    // Testimonials Section
    testimonials: 'Kundenbewertungen',
    testimonialsDescription: 'Hören Sie nicht nur auf unser Wort - hören Sie von einigen unserer zufriedenen Kunden',
    customerExperienceManager: 'Kundenerfahrungsmanager',
    digitalSalesLead: 'Digital Sales Lead',
    testimonialLea: 'CentralChat half uns, die Kommunikation über fünf Plattformen zu vereinheitlichen. Jetzt antworten wir schneller, wissen genau, wer was gesagt hat, und unser Bot bearbeitet wiederholte Fragen.',
    testimonialMarc: 'Mit Central Chat kann unser E-Commerce-Team sogar Bestellungen direkt im Chat verarbeiten. Es ist ein Game Changer.',

    // Pricing Section
    pricingTitle: 'Einfache, transparente Preise',
    pricingDescription: 'Starten Sie mit CentralChat.ai und transformieren Sie Ihre Kundenkommunikation.',
    businessPlan: 'Basis-Plan',
    perMonth: '/Monat',
    netExclVat: 'netto, zzgl. MwSt.',
    fullChatInbox: 'Vollständiger Chat-Posteingang über alle Kanäle',
    upTo5Users: 'Bis zu 5 Benutzer',
    upTo5Channels: 'Bis zu 5 Kanäle',
    addOns: 'Zusatzfunktionen',
    additionalUsers: 'Zusätzliche Benutzer',
    perUser: 'pro Benutzer',
    additionalChannels: 'Zusätzliche Kanäle',
    perChannel: 'pro Kanal',
    aiChatbot: 'KI-Chatbot',
    aiAgent: 'KI-Agent',
    perAction: 'pro Aktion',
    terms: 'Bedingungen',
    monthlySubscription: 'Monatliches Abonnement',
    monthlySubscriptionDesc: 'Sie sind nie fest gebunden. Wir glauben daran, Ihr Vertrauen Monat für Monat zu verdienen – kündigen Sie jederzeit am Ende jedes Abrechnungszyklus.',
    transparentPricing: 'Transparente Preise',
    transparentPricingDesc: 'Keine Einrichtungsgebühren, keine versteckten Kosten. Alle Preise sind netto (MwSt. wird bei Bedarf hinzugefügt).',
    integrationAICapabilities: 'Wir bieten nahtlose Integrationen mit Systemen wie CRM, ERP, PMS und Ticketing-Plattformen. Zusätzlich zur Implementierung von CentralChat.ai in Ihre Umgebung können wir auch direkt AI-Agenten in Ihre interne Systeme integrieren – sie mit den Tools und Fähigkeiten ausstatten, um autonome Aufgaben wie das Überprüfen von Bestellstatus, Einkäufe, Meldungen oder vieles mehr auszuführen, je nach Ihren spezifischen Anforderungen.',
    plusCosts: 'Plus LLM- und Nachrichtenkosten',
    getStarted: 'Jetzt starten',
    customSolution: 'Benötigen Sie eine individuelle Lösung?',
    contactSales: 'Vertrieb kontaktieren',
    customSolutionDesc: 'Kontaktieren Sie uns für individuelle Integrationen, Enterprise-Preise oder spezifische Anforderungen.',

    // Contact Section
    getInTouch: 'Kontaktieren Sie uns',
    contactDescription: 'Haben Sie Fragen zu CentralChat.ai? Unser Team hilft Ihnen beim Start.',
    sendUsMessage: 'Senden Sie uns eine Nachricht',
    contactFormSubmission: 'Kontaktformular-Einreichung von',
    name: 'Name',
    email: 'E-Mail-Adresse',
    company: 'Firmenname',
    message: 'Nachricht',
    sendMessage: 'Nachricht senden',
    thankYouMessage: 'Vielen Dank für Ihre Nachricht!',
    emailOpenedGmail: 'Ihre E-Mail wurde in Gmail geöffnet. Bitte überprüfen und senden Sie sie.',
    sendAnotherMessage: 'Noch eine Nachricht senden',
    sending: 'Senden...',
    fullName: 'Vollständiger Name',
    emailAddress: 'E-Mail-Adresse',
    companyName: 'Firmenname',
    
    // Footer
    followUs: 'Folgen Sie uns',
    allRightsReserved: 'Alle Rechte vorbehalten.',
    footerDescription: 'Vereinen Sie alle Ihre Nachrichtenkanäle an einem Ort mit KI-gestützten Antworten.',
    isProductOf: 'ist ein Produkt von',
    product: 'Produkt',
    legal: 'Rechtliches',
    legalNotice: 'Rechtliche Hinweise',
    termsConditions: 'Allgemeine Geschäftsbedingungen',
    privacyPolicy: 'Datenschutzerklärung',
    termsOfService: 'Nutzungsbedingungen',
    gdprCompliance: 'DSGVO-Konformität',
    security: 'Sicherheit',
    cookiePolicy: 'Cookie-Richtlinie',

    // About Section
    aboutDescription1: 'CentralChat.ai ist eine leistungsstarke Multi-Kanal-Chat-Plattform, die die Kommunikation von WhatsApp, Facebook, Instagram und verschiedenen anderen Messenger-Diensten zusammenbringt in einer einheitlichen Oberfläche.',
    aboutDescription2: 'Auf unserer API-First-Ansatz basierend, integriert CentralChat.ai sich nahtlos in bestehende Ökosysteme wie CRM, ERP, PMS oder Ticketing-Systeme – wodurch die Kundendienstleistung maximale Effizienz bietet.',
    aboutDescription3: 'Während CentralChat.ai perfekt allein funktioniert, bieten wir auch vollständig integrierte, DSGVO-konforme Chatbots und neue Generation AI-Agenten als optionale Zusatzfunktionen an. Diese werden individuell trainiert, um Ihre FAQs, vorherige Gespräche und andere relevante Trainingsdaten zu reflektieren. Auf Anfrage führen wir auch vollständige Integration in Ihre Systeme durch – was es Agenten ermöglicht, aktiv Aufgaben wie das Verwalten von Buchungen, das Überprüfen von Bestellstatus oder das Verarbeiten von Kundenzuschriften in Echtzeit auszuführen.',
    aboutDescription4: 'Mit einem starken Fokus auf Datenschutz, nahtlose Integration und Benutzerfreundlichkeit bietet CentralChat.ai eine zentrale, intuitive Oberfläche für die Kommunikation über verschiedene Kanäle – effizient, sicher und zukunftsfähig.'
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