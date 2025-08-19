import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C#','C++', 'Java', 'Python', 'JavaScript','R Programming'],
      color: 'blue',
    },
    {
      title: 'Frontend Technologies',
      skills: ['ReactJS', 'HTML5', 'CSS3', 'JavaScript'],
      color: 'purple',
    },
    {
      title: 'Backend Technologies',
      skills: ['NodeJS', 'Express.js', 'RESTful APIs'],
      color: 'green',
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'MySQL'],
      color: 'orange',
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'VS Code', 'Eclipse', 'AWS','Tableau','PowerBI'],
      color: 'teal',
    },
    {
      title: 'Other Technologies',
      skills: ['Excel','Adobe','Access'],
      color: 'pink',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 border-blue-200 text-blue-800',
      purple: 'bg-purple-50 border-purple-200 text-purple-800',
      green: 'bg-green-50 border-green-200 text-green-800',
      orange: 'bg-orange-50 border-orange-200 text-orange-800',
      teal: 'bg-teal-50 border-teal-200 text-teal-800',
      pink: 'bg-pink-50 border-pink-200 text-pink-800',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-sm font-medium border ${getColorClasses(category.color)}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;