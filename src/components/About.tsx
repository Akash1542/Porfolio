import React from 'react';
import { Code, Rocket, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a passionate Data Science Engineering graduate from Syracuse University with a strong foundation 
              in Data Analytics. I enjoy creating innovative solutions that solve real-world problems 
              and deliver exceptional user experiences.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With hands-on experience in modern web technologies including C#, ReactJS, NodeJS, and MySQL, 
              I've developed several projects ranging from Predicting Toxicity in Mushrooms to Sentiment Analysis on social media data. 
              I'm always eager to learn new technologies and take on challenging projects.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                Problem Solver
              </span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                Team Player
              </span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                Quick Learner
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Code className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold ml-4">Full Stack Development</h3>
              </div>
              <p className="text-gray-600">
                Experienced in building end-to-end web applications using modern technologies
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <Rocket className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold ml-4">Data Analytics</h3>
              </div>
              <p className="text-gray-600">
                Leveraging data-driven insights to uncover hidden patterns, optimize decisions, and drive continuous innovation
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-green-600 p-3 rounded-lg">
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold ml-4">Collaborative</h3>
              </div>
              <p className="text-gray-600">
                Enjoy working in teams and contributing to cross-functional projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;