import React from 'react';
import { Hexagon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center space-x-2 mb-2">
              <img src="/ccentral.png" alt="CentralChat Logo" className="h-10 w-30 text-primary-500" />
            </div>
            <p className="text-gray-400 mb-2">
              Unify all your messaging channels in one place with AI-powered responses.
            </p>
            <p className="text-xs text-gray-500 mt-1">v0.8.1 Beta</p>
          </div>

          <div className="md:col-span-2 text-center">
            <div className="mt-4 text-gray-400 mb-4">
              <p>&copy; 2025 CentralChat.ai. All rights reserved.</p>
              <div className="mt-2 flex flex-col items-center justify-center">
                <span className="text-sm mb-3">Developed by</span>
                <a href="https://d3.net" className="flex items-center justify-center hover:text-white transition-colors">
                  <img src="/D3.png" alt="My Custom Logo" className="h-9 w-auto" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
