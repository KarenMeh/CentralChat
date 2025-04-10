import React, { useState } from 'react';
import { Send, Check, Edit, User, Bot, MessageSquare } from 'lucide-react';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm interested in your services. Can you tell me more about your pricing?", sender: 'user', time: '10:30 AM', channel: 'WhatsApp' },
    { id: 2, text: "Hi there! Thank you for your interest in CentralChat.ai. Our pricing starts at €200 net per month, plus the costs for the GDPR-compliant LLM from IONOS and the Meta messaging fees. Would you like more specific details?", sender: 'bot', time: '10:31 AM', suggestion: true }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [suggestion, setSuggestion] = useState("I'd be happy to provide more details about our pricing structure. The base fee of €200 includes unlimited users and channel integrations. Additionally, there's a 10% service fee on the LLM and messaging costs. Would you like to schedule a demo to see how it works?");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        text: inputValue,
        sender: 'agent',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        channel: 'WhatsApp'
      }]);
      setInputValue('');
      
      // Simulate new user message after agent response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: prev.length + 1,
          text: "That sounds interesting. Can you tell me more about the AI features?",
          sender: 'user',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          channel: 'WhatsApp'
        }]);
        
        // Set new suggestion
        setSuggestion("Our AI features include automatic response generation using Meta's Llama model via IONOS AI Model Hub, ensuring GDPR compliance. The chatbot learns from each interaction to improve future responses. You can choose to have it respond autonomously or provide suggestions for your approval. Would you like to know more about specific AI capabilities?");
      }, 1500);
    }
  };

  const handleSendSuggestion = () => {
    setMessages([...messages, {
      id: messages.length + 1,
      text: suggestion,
      sender: 'agent',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      channel: 'WhatsApp'
    }]);
    
    // Simulate new user message after agent response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        text: "That sounds interesting. Can you tell me more about the AI features?",
        sender: 'user',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        channel: 'WhatsApp'
      }]);
      
      // Set new suggestion
      setSuggestion("Our AI features include automatic response generation using Meta's Llama model via IONOS AI Model Hub, ensuring GDPR compliance. The chatbot learns from each interaction to improve future responses. You can choose to have it respond autonomously or provide suggestions for your approval. Would you like to know more about specific AI capabilities?");
    }, 1500);
  };

  const handleEditSuggestion = () => {
    setInputValue(suggestion);
    setSuggestion("");
  };

  return (
    <section id="demo" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience the Interface</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            See how CentralChat.ai works with this interactive demo of our chat interface.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
          <div className="bg-primary-500 text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-6 w-6" />
                <h3 className="font-semibold">Customer Support - WhatsApp</h3>
              </div>
              <div className="text-sm">Agent: Sarah</div>
            </div>
          </div>
          
          <div className="h-96 overflow-y-auto p-4 bg-gray-50">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`mb-4 flex ${message.sender === 'user' ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`max-w-xs md:max-w-md rounded-lg p-3 ${
                  message.sender === 'user' 
                    ? 'bg-white border border-gray-200' 
                    : message.sender === 'bot' 
                      ? 'bg-primary-100 border border-primary-200' 
                      : 'bg-primary-500 text-white'
                }`}>
                  <div className="flex items-center mb-1">
                    {message.sender === 'user' ? (
                      <User className="h-4 w-4 mr-1" />
                    ) : message.sender === 'bot' ? (
                      <Bot className="h-4 w-4 mr-1" />
                    ) : (
                      <div className="h-4 w-4 mr-1 rounded-full bg-white text-primary-500 flex items-center justify-center text-xs">A</div>
                    )}
                    <span className="text-xs font-medium">
                      {message.sender === 'user' ? 'Customer' : message.sender === 'bot' ? 'AI Suggestion' : 'Agent'}
                    </span>
                    <span className="text-xs ml-2 opacity-70">{message.time}</span>
                    {message.channel && (
                      <span className="text-xs ml-2 px-1.5 py-0.5 rounded-full bg-gray-200 text-gray-700">
                        {message.channel}
                      </span>
                    )}
                  </div>
                  <p className={`text-sm ${message.sender === 'agent' ? 'text-white' : 'text-gray-800'}`}>
                    {message.text}
                  </p>
                  {message.suggestion && (
                    <div className="mt-2 flex space-x-2">
                      <button 
                        onClick={handleSendSuggestion}
                        className="p-1 rounded-full bg-primary-500 text-white hover:bg-primary-700"
                      >
                        <Check className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={handleEditSuggestion}
                        className="p-1 rounded-full bg-white text-primary-500 border border-primary-500 hover:bg-primary-50"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {suggestion && (
            <div className="p-3 bg-primary-50 border-t border-primary-100">
              <div className="flex items-center">
                <Bot className="h-4 w-4 text-primary-500 mr-2" />
                <span className="text-sm font-medium text-primary-700">AI Suggestion:</span>
              </div>
              <div className="mt-1 flex">
                <p className="text-sm text-gray-800 flex-grow">{suggestion}</p>
                <div className="flex space-x-2 ml-2">
                  <button 
                    onClick={handleSendSuggestion}
                    className="p-1 rounded-full bg-primary-500 text-white hover:bg-primary-700"
                  >
                    <Check className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={handleEditSuggestion}
                    className="p-1 rounded-full bg-white text-primary-500 border border-primary-500 hover:bg-primary-50"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
          
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button 
                onClick={handleSendMessage}
                className="bg-primary-500 text-white p-2 rounded-r-md hover:bg-primary-700"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatInterface;