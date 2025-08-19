import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sai Akash Addala
            </h3>
            <p className="text-gray-400 mt-1">Full Stack Developer</p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 flex items-center gap-2">
              Made with <Heart size={16} className="text-red-500" /> using React & TypeScript
            </p>
            <p className="text-gray-500 text-sm mt-1">
              © {new Date().getFullYear()} Sai Akash Addala. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;