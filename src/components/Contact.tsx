import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { getTranslation } from './LanguageSelector';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    loading: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitted: false, loading: true, error: null });
    
    // Create mailto URL that opens Gmail with prefilled content
    const subject = `${getTranslation('contactFormSubmission')} ${formData.name}`;
    const body = `
${getTranslation('name')}: ${formData.name}
${getTranslation('email')}: ${formData.email}
${getTranslation('company')}: ${formData.company}

${getTranslation('message')}:
${formData.message}
    `;
    
    const mailtoURL = `https://mail.google.com/mail/?view=cm&fs=1&to=Hello@CentralChat.des&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open Gmail in a new tab
    window.open(mailtoURL, '_blank');
    
    // Update status and reset form
    setStatus({ submitted: true, loading: false, error: null });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{getTranslation('getInTouch')}</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {getTranslation('contactDescription')}
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">{getTranslation('sendUsMessage')}</h3>
            
            {status.submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                <p className="font-medium">{getTranslation('thankYouMessage')}</p>
                <p>{getTranslation('emailOpenedGmail')}</p>
                <button 
                  onClick={() => setStatus({ submitted: false, loading: false, error: null })}
                  className="mt-3 bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
                >
                  {getTranslation('sendAnotherMessage')}
                </button>
              </div>
            ) : (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {getTranslation('fullName')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {getTranslation('emailAddress')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    {getTranslation('companyName')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {getTranslation('message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <button 
                  onClick={handleSubmit}
                  disabled={status.loading}
                  className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center disabled:opacity-50"
                >
                  {status.loading ? getTranslation('sending') : getTranslation('sendMessage')}
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;