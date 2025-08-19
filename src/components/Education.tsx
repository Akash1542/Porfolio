import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Sreenidhi Institute of Science and Technology',
      period: '2019-2023',
      grade: 'CGPA: 3.7',
      description: 'Focused on Software Development, Data Structures, Algorithms, and Modern Web Technologies',
      color: 'blue'
    },
    {
      degree: 'Masters in Applied Data Science',
      institution: 'Syracuse University',
      period: '2023-2025',
      grade: '3.85',
      description: 'Specialized in Data Analytics, ML, AI, and Big Data Technologies',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        icon: 'bg-blue-600',
        dot: 'bg-blue-500'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        icon: 'bg-purple-600',
        dot: 'bg-purple-500'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        icon: 'bg-green-600',
        dot: 'bg-green-500'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic journey that shaped my technical foundation and problem-solving skills
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-green-600"></div>
            
            {educationData.map((edu, index) => {
              const colorClasses = getColorClasses(edu.color);
              
              return (
                <div key={index} className="relative pl-20 pb-12 last:pb-0">
                  <div className={`absolute left-6 w-4 h-4 ${colorClasses.dot} rounded-full border-4 border-white shadow-lg`}></div>
                  
                  <div className={`${colorClasses.bg} border ${colorClasses.border} rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                    <div className="flex flex-wrap items-start gap-4 mb-4">
                      <div className={`${colorClasses.icon} p-3 rounded-lg`}>
                        <GraduationCap className="text-white" size={24} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {edu.degree}
                        </h3>
                        
                        <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-3">
                          <span className="font-medium">{edu.institution}</span>
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Award size={16} />
                            <span>{edu.grade}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;