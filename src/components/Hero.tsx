import React from 'react';
import { ChevronDown, MapPin, Phone, Mail, Linkedin } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
           Sai Akash Addala
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Computer Science Engineering graduate passionate about creating innovative web applications
            with modern technologies. Experienced in .NET Framework, ReactJS, HTML, and SQL.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-12 text-gray-600">
          <div className="flex items-center gap-2">
            <Phone size={18} className="text-blue-600" />
            <span>+1 3155187391</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={18} className="text-blue-600" />
            <span>saiakash1542@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin size={18} className="text-blue-600" />
            <span>LinkedIn Profile</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium"
          >
            Get In Touch
          </button>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200 font-medium"
          >
            View Projects
          </button>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-gray-400" />
      </button>
    </section>
  );
};

export default Hero;