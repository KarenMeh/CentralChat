import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

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
    const subject = `Contact form submission from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}

Message:
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Have questions about CentralChat.ai? Our team is here to help you get started.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-blue-500 text-white p-8 rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
            <h3 className="text-xl font-semibold mb-10">Contact Information</h3>
            
            <div className="space-y-9">
              <div className="flex items-start">
                <Mail className="h-6 w-6 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:Hello@CentralChat.des" className="text-blue-100 hover:text-white">
                    Hello@CentralChat.des
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+4912345678" className="text-blue-100 hover:text-white">
                    +49 123 456 78
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-blue-100">
                    Langenstr. 34,<br />
                    28195 Bremen,<br />
                    Germany
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 bg-white p-8 rounded-b-lg md:rounded-r-lg md:rounded-bl-none shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
            
            {status.submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                <p className="font-medium">Thank you for your message!</p>
                <p>Your email has been opened in Gmail. Please review and send it.</p>
                <button 
                  onClick={() => setStatus({ submitted: false, loading: false, error: null })}
                  className="mt-3 bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
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
                      Email Address
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
                    Company Name
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
                    Message
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
                  {status.loading ? 'Sending...' : 'Send Message with Gmail'}
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