import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Integrations from './components/Integrations';
import ChatInterface from './components/ChatInterface';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Features />
     <Integrations />
      <ChatInterface />
      <Pricing />
    
      <Contact />
      <Footer />
    </div>
  );
}

export default App;