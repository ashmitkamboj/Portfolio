import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Projects: React.FC = () => {
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

  const projects = [
    {
      id: 1,
      title: 'Project Title',
      description: 'Brief description of your project. Explain the key features, the problems it solves, and the technologies used.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project',
      date: '2024',
      featured: true,
      category: 'MERN Stack', // or 'AI/ML'
    },
    // Add more projects here
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-slate-950 perspective-1000 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-40 w-72 h-72 bg-indigo-600/10 rounded-full blur-[80px] animate-pulse"></div>
        <div className="absolute bottom-40 right-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-[80px] animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 transform transition-all duration-700 hover:scale-110 hover:neon-glow cursor-default">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full mb-6 transform transition-all duration-500 hover:scale-125 hover:rotate-3 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work in MERN stack and AI development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] hover:border-indigo-500/30 hover:-translate-y-2 preserve-3d"
              style={{
                animationDelay: `${index * 100}ms`,
                transformStyle: 'preserve-3d',
                transform: `rotateX(${mousePosition.y * -0.3}deg) rotateY(${mousePosition.x * 0.3}deg) translateZ(${index * 10}px)`
              }}
            >
              <div className="relative overflow-hidden h-48">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 z-10 transition-opacity duration-300 group-hover:opacity-40"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-md text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/30 shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 relative z-20 bg-slate-900/40">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <Calendar size={14} className="text-indigo-400" />
                  <span>{project.date}</span>
                </div>

                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300 transform group-hover:translate-x-1">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-400 mb-6 line-clamp-2 transform transition-all duration-300 group-hover:text-gray-300">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-800/50 text-indigo-300 text-xs rounded-md border border-indigo-500/10 group-hover:border-indigo-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-3 pt-4 border-t border-slate-800/50">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                    >
                      <ExternalLink size={14} className="mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-110 border border-slate-700"
                    >
                      <Github size={14} className="mr-2" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8 transform transition-all duration-500 hover:scale-105 hover:neon-glow-cyan cursor-default">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-xl p-6 shadow-lg hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 preserve-3d"
                style={{
                  animationDelay: `${index * 100}ms`,
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="aspect-video mb-4 overflow-hidden rounded-lg relative">
                  <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <span className="text-sm text-gray-500">{project.date}</span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-800/80 text-cyan-300 text-xs rounded border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-3 mt-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
                  >
                    <ExternalLink size={12} className="mr-1" />
                    Live
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-400 hover:text-white text-sm font-medium transition-colors"
                  >
                    <Github size={12} className="mr-1" />
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://github.com/ashmitkamboj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] border border-slate-700"
          >
            <Github className="mr-2" size={20} />
            View All Projects on GitHub
          </a>
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

export default Projects;
