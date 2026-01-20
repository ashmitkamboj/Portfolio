import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transform transition-all duration-500 hover:scale-105">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl perspective-1000 hover:rotate-1">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in the MERN stack and a growing interest in Artificial Intelligence and Machine Learning. I love building modern web applications that solve real-world problems.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4 transform transition-all duration-300 hover:translate-x-2">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mt-3"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  Specialized in building full-stack applications using MongoDB, Express.js, React.js, and Node.js
                </p>
              </div>
              <div className="flex items-start space-x-4 transform transition-all duration-300 hover:translate-x-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  Exploring AI/ML technologies including TensorFlow, PyTorch, and scikit-learn
                </p>
              </div>
              <div className="flex items-start space-x-4 transform transition-all duration-300 hover:translate-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-3"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  Passionate about creating scalable APIs and efficient database solutions
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg transform transition-all duration-500 hover:rotate-2 hover:scale-105 hover:shadow-xl hover:-translate-y-2 perspective-1000">
              <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">3+</h3>
              <p className="text-gray-700 dark:text-gray-300">Years of Experience</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg transform transition-all duration-500 hover:-rotate-2 hover:scale-105 hover:shadow-xl hover:-translate-y-2 perspective-1000">
              <h3 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">15+</h3>
              <p className="text-gray-700 dark:text-gray-300">Projects Completed</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg transform transition-all duration-500 hover:rotate-1 hover:scale-105 hover:shadow-xl hover:-translate-y-2 perspective-1000">
              <h3 className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">10+</h3>
              <p className="text-gray-700 dark:text-gray-300">AI/ML Models</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg transform transition-all duration-500 hover:-rotate-1 hover:scale-105 hover:shadow-xl hover:-translate-y-2 perspective-1000">
              <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</h3>
              <p className="text-gray-700 dark:text-gray-300">Certifications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
