import React, { useState, useEffect } from 'react';

const Skills: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const mernSkills = [
    { name: 'MongoDB', icon: '🍃', level: 90, color: 'from-green-500 to-green-700' },
    { name: 'Express.js', icon: '🚂', level: 85, color: 'from-gray-600 to-gray-800' },
    { name: 'React.js', icon: '⚛️', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'Node.js', icon: '🟢', level: 90, color: 'from-green-600 to-green-800' },
    { name: 'TypeScript', icon: '🔷', level: 88, color: 'from-blue-600 to-blue-800' },
    { name: 'Tailwind CSS', icon: '💨', level: 92, color: 'from-teal-400 to-blue-500' },
    { name: 'JavaScript', icon: '🟨', level: 95, color: 'from-yellow-400 to-yellow-600' },
    { name: 'REST APIs', icon: '🌐', level: 90, color: 'from-indigo-500 to-purple-600' },
  ];

  const aiMlSkills = [
    { name: 'Python', icon: '🐍', level: 85, color: 'from-yellow-400 to-blue-500' },
    { name: 'TensorFlow', icon: '🧠', level: 75, color: 'from-orange-500 to-red-600' },
    { name: 'PyTorch', icon: '🔥', level: 70, color: 'from-red-500 to-orange-600' },
    { name: 'scikit-learn', icon: '📊', level: 80, color: 'from-green-500 to-emerald-600' },
    { name: 'Pandas', icon: '🐼', level: 85, color: 'from-blue-500 to-blue-700' },
    { name: 'NumPy', icon: '🔢', level: 82, color: 'from-purple-500 to-purple-700' },
    { name: 'Data Analysis', icon: '📈', level: 80, color: 'from-indigo-500 to-indigo-700' },
    { name: 'Neural Networks', icon: '🕸️', level: 72, color: 'from-pink-500 to-rose-600' },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 perspective-1000 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-60 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-60 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transform transition-all duration-700 hover:scale-110 hover:rotate-2 cursor-default">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6 transform transition-all duration-500 hover:scale-125 hover:rotate-3"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Expertise in full-stack development with MERN and AI/ML technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div 
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl preserve-3d"
            style={{ 
              transformStyle: 'preserve-3d',
              transform: `rotateX(${mousePosition.y * -0.5}deg) rotateY(${mousePosition.x * 0.5}deg)`
            }}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center transform transition-all duration-300 hover:rotate-12 hover:scale-125">
                <span className="text-2xl">⚛️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white ml-4">
                MERN Stack
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {mernSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-xl transform transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-lg preserve-3d"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <span className="text-2xl mr-3 transform transition-transform duration-300 hover:rotate-12 hover:scale-125">{skill.icon}</span>
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {mernSkills.slice(0, 4).map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 transform transition-transform duration-300 hover:scale-y-125">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out group-hover:shadow-2xl`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div 
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl preserve-3d"
            style={{ 
              transformStyle: 'preserve-3d',
              transform: `rotateX(${mousePosition.y * -0.5}deg) rotateY(${mousePosition.x * -0.5}deg)`
            }}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center transform transition-all duration-300 hover:rotate-12 hover:scale-125">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white ml-4">
                AI / ML
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {aiMlSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-xl transform transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-lg preserve-3d"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <span className="text-2xl mr-3 transform transition-transform duration-300 hover:rotate-12 hover:scale-125">{skill.icon}</span>
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {aiMlSkills.slice(0, 4).map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 transform transition-transform duration-300 hover:scale-y-125">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out group-hover:shadow-2xl`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default Skills;
