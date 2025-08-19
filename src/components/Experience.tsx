import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and contributions to the tech industry
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            <div className="relative pl-20 pb-12">
              <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-blue-600">
                    <Briefcase size={18} />
                    <h3 className="text-xl font-semibold">Software Developer</h3>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={16} />
                    <span>May 2024 - Dec 2024</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={16} />
                    <span>Tesla Motors</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Key Responsibilities & Achievements:</h4>
                  
                  <div className="grid gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600">
                        Contributed to backend and API-level improvements for increased performance and scalability while working across several Tesla service domains, such as Queue Management, Notification Systems, Vehicle Service Operations, and Trade-In procedures.
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600">
                        Using workflow orchestration and system-to-system integration, automation scripts were designed and implemented to eliminate manual involvement during Full Self-Driving transfers to new cars.
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600">
                        Helped supercharge infrastructure automation by streamlining configuration, monitoring, and load management procedures without requiring human intervention.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600">
                        Developed and implemented software modules to facilitate Trade-In and other service offerings' cross-market introductions in locations such as New Zealand, Malaysia, Hong Kong, and Missouri.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600">
                        Through the implementation of reliable data processing, error monitoring, and API-driven connectivity across internal systems, I worked with technical teams to improve Tesla's car fulfilment environment.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h4 className="font-medium text-gray-900 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['.NET Framework','ReactJS', 'NodeJS', 'Express.js', 'JavaScript', 'HTML5', 'CSS3','MySQL'].map((tech) => (
                        <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;