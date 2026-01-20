import React from 'react';

const Skills: React.FC = () => {
 const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
      { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-800' },
      { name: 'Next.js', level: 88, color: 'from-gray-800 to-black' },
      { name: 'Tailwind CSS', level: 92, color: 'from-teal-400 to-blue-500' },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Java', level: 80, color: 'from-red-600 to-yellow-600' },
      { name: 'JavaScript', level: 88, color: 'from-yellow-400 to-yellow-600' },
      { name: 'Node.js', level: 90, color: 'from-green-500 to-green-700' },
      { name: 'Express', level: 87, color: 'from-gray-700 to-gray-900' },
      { name: 'Python', level: 85, color: 'from-yellow-400 to-blue-500' },
      { name: 'FastAPI', level: 78, color: 'from-green-400 to-emerald-600' },
      { name: 'PostgreSQL', level: 82, color: 'from-blue-600 to-indigo-600' },
      { name: 'MySQL', level: 80, color: 'from-blue-400 to-blue-700' },
      { name: 'MongoDB', level: 80, color: 'from-green-500 to-green-800' },
    ]
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git', level: 95, color: 'from-orange-500 to-red-500' },
      { name: 'GitHub', level: 90, color: 'from-gray-700 to-black' },
      { name: 'AWS', level: 72, color: 'from-yellow-400 to-orange-500' },
      { name: 'Vercel', level: 82, color: 'from-black to-gray-700' },
      { name: 'Figma', level: 88, color: 'from-purple-500 to-pink-500' },
      { name: 'Canva', level: 85, color: 'from-cyan-400 to-teal-500' },
    ]
  }
];

const techIcons = [
  { name: 'Java', icon: '☕', color: 'hover:text-red-600' },
  { name: 'JavaScript', icon: '🟨', color: 'hover:text-yellow-500' },
  { name: 'React', icon: '⚛️', color: 'hover:text-blue-500' },
  { name: 'TypeScript', icon: '🔷', color: 'hover:text-blue-600' },
  { name: 'Node.js', icon: '🟢', color: 'hover:text-green-500' },
  { name: 'Express.js', icon: '🚂', color: 'hover:text-gray-500' },
  { name: 'Python', icon: '🐍', color: 'hover:text-yellow-400' },
  { name: 'FastAPI', icon: '⚡', color: 'hover:text-green-500' },
  { name: 'PostgreSQL', icon: '🐘', color: 'hover:text-blue-600' },
  { name: 'MySQL', icon: '🐬', color: 'hover:text-blue-500' },
  { name: 'MongoDB', icon: '🍃', color: 'hover:text-green-600' },
  { name: 'AWS', icon: '☁️', color: 'hover:text-orange-500' },
  { name: 'Vercel', icon: '▲', color: 'hover:text-black' },
  { name: 'Git', icon: '📊', color: 'hover:text-orange-600' },
  { name: 'GitHub', icon: '🐙', color: 'hover:text-gray-800' },
  { name: 'Figma', icon: '🎨', color: 'hover:text-purple-500' },
  { name: 'Canva', icon: '🖌️', color: 'hover:text-cyan-500' },
  { name: 'Tailwind', icon: '💨', color: 'hover:text-teal-500' },
];



  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to bring ideas to life.
          </p>
        </div>

        {/* Technology Icons Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">
            Technologies I Work With
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {techIcons.map((tech, index) => (
              <div
                key={tech.name}
                className="group flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {tech.icon}
                </div>
                <span className={`text-sm font-medium text-gray-600 dark:text-gray-300 ${tech.color} transition-colors duration-300`}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out group-hover:shadow-lg`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            Other Skills & Interests
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Team Leadership', 'Open Source'
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium hover:bg-indigo-200 dark:hover:bg-indigo-800/50 transition-colors duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;