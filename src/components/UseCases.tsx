import React, { useEffect, useState, useRef } from 'react';
import { getTranslation, translations } from './LanguageSelector';

type TranslationKey = keyof typeof translations['en'];

interface UseCase {
  title: TranslationKey;
  description: TranslationKey;
  featured?: boolean;
}

const UseCases = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const useCases: UseCase[] = [
    {
      title: "hospitalityRentals",
      description: "hospitalityRentalsDesc"
    },
    {
      title: "ecommerce",
      description: "ecommerceDesc"
    },
    {
      title: "customerSupport",
      description: "customerSupportDesc"
    },
    {
      title: "salesLeadManagement",
      description: "salesLeadManagementDesc",
      featured: true
    },
    {
      title: "realEstateServices",
      description: "realEstateServicesDesc",
      featured: true
    }
  ];

  const regularUseCases = useCases.filter(useCase => !useCase.featured);
  const featuredUseCases = useCases.filter(useCase => useCase.featured);

  return (
    <section 
      ref={sectionRef}
      id="use-cases" 
      className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary-100 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-40 h-40 rounded-full bg-primary-200 opacity-10 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
            {getTranslation('useCases')}
          </h2>
          {/* <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            {getTranslation('useCasesDescription')}
          </p> */}
        </div>
        
        {/* Regular use cases */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {regularUseCases.map((useCase, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col transform hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="bg-primary-50 p-4 rounded-xl inline-block mb-6 w-16 h-16 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {getTranslation(useCase.title)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {getTranslation(useCase.description)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured use cases */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredUseCases.map((useCase, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col transform hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="bg-primary-50 p-4 rounded-xl inline-block mb-6 w-16 h-16 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {getTranslation(useCase.title)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {getTranslation(useCase.description)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases; 