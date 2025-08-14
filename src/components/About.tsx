import React from 'react';
import { Code, Coffee, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time.'
    },
    {
      icon: Coffee,
      title: 'Problem Solver',
      description: 'Turning complex challenges into elegant, user-friendly solutions.'
    },
    {
      icon: Heart,
      title: 'Passionate',
      description: 'Genuinely excited about technology and continuous learning.'
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Working effectively with teams to deliver exceptional results.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with over 2 years of experience creating 
                digital solutions that bridge the gap between design and technology. My journey 
                began with a curiosity about how things work, and it has evolved into a love 
                for crafting experiences that users genuinely enjoy.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I believe 
                in the power of collaboration and continuous learning to push the boundaries of 
                what's possible.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">2+</div>
                <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/50 transition-colors duration-300">
                    <highlight.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;