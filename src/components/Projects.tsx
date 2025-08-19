import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Real Estate Web Application',
      description: 'A comprehensive real estate platform featuring user authentication, property listings with detailed information, and advanced search filters for enhanced user experience.',
      technologies: ['ReactJS', 'NodeJS', 'MongoDB', 'Express.js'],
      features: [
        'User authentication and authorization',
        'Property listings with detailed information',
        'Advanced search and filter functionality',
        'Responsive design for all devices'
      ],
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Customer-to-Customer Marketplace',
      description: 'A dynamic marketplace platform enabling users to buy and sell products with real-time chat functionality for seamless communication between buyers and sellers.',
      technologies: ['ReactJS', 'NodeJS', 'MongoDB', 'Socket.io'],
      features: [
        'User registration and login system',
        'Product listing and management',
        'Real-time chat between users',
        'Secure payment integration ready'
      ],
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Video Chat Application',
      description: 'A real-time video calling application with screen sharing capabilities and text messaging, built using WebRTC for peer-to-peer communication.',
      technologies: ['ReactJS', 'WebRTC', 'Socket.io'],
      features: [
        'Real-time video calling',
        'Screen sharing functionality',
        'Text messaging during calls',
        'Cross-platform compatibility'
      ],
      gradient: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for web development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm">
                    <Github size={16} />
                    Code
                  </button>
                  <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm">
                    <ExternalLink size={16} />
                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;