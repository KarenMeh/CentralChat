import React from 'react';

const Integrations: React.FC = () => {
  return (
    <section id="integrations" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Custom Integrations?</h3>
              <p className="text-gray-700">
                We offer seamless integration with systems such as CRM, ERP, PMS, and ticketing platforms. In addition to implementing CentralChat.ai into your environment, we can also integrate AI agents directly into your internal systems — giving them the tools and capabilities to autonomously perform tasks such as checking order statuses, making purchases, reporting issues, and much more, depending on your specific needs.
              </p>
            </div>
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Custom Integration" 
                className="rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;