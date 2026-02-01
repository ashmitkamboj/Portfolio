import React, { useState, useEffect } from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
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

  const certifications = [
    {
      id: 1,
      title: 'Certification Name',
      issuer: 'Issuing Organization',
      date: '2024',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', // Replace with relevant icon
      credentialUrl: 'https://example.com/credential',
      description: 'Description of the certification and what you learned.',
    },
    // Add more certifications here
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-950 perspective-1000 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-60 left-1/3 w-72 h-72 bg-indigo-600/10 rounded-full blur-[80px] animate-pulse"></div>
        <div className="absolute bottom-60 right-1/3 w-96 h-96 bg-violet-600/10 rounded-full blur-[80px] animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 transform transition-all duration-700 hover:scale-110 hover:neon-glow cursor-default">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full mb-6 transform transition-all duration-500 hover:scale-125 hover:rotate-3 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Professional certifications validating my expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:border-violet-500/30 preserve-3d"
              style={{
                animationDelay: `${index * 100}ms`,
                transformStyle: 'preserve-3d',
                transform: `rotateX(${mousePosition.y * -0.2}deg) rotateY(${mousePosition.x * 0.2}deg) translateZ(${index * 5}px)`
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-slate-800/50 rounded-xl flex items-center justify-center transform transition-all duration-300 hover:rotate-12 hover:scale-125 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] border border-slate-700">
                  {cert.image && cert.image.includes('http') ? (
                    <img src={cert.image} alt={cert.title} className="w-8 h-8 object-contain" />
                  ) : (
                    <Award className="w-8 h-8 text-violet-400" />
                  )}
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Calendar size={14} className="text-indigo-400" />
                  <span>{cert.date}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors duration-300 transform transition-transform duration-300 hover:translate-z-2">
                {cert.title}
              </h3>

              <p className="text-sm font-medium text-indigo-400 mb-3 transform transition-transform duration-300 hover:scale-105">
                {cert.issuer}
              </p>

              <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                {cert.description}
              </p>

              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-all duration-300 transform hover:translate-x-3 hover:scale-110 hover:neon-glow-violet"
              >
                <ExternalLink size={14} className="mr-2" />
                View Credential
              </a>
            </div>
          ))}
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

export default Certifications;
