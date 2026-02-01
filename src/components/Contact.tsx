import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const SERVICE_ID = 'service_o2tfc7e';
    const TEMPLATE_ID = 'template_pdp9n9n';
    const PUBLIC_KEY = 'aRj3-j3RhfUj_FBB0';

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 perspective-1000 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-40 w-72 h-72 bg-indigo-600/10 rounded-full blur-[90px] animate-pulse"></div>
        <div className="absolute bottom-40 left-40 w-96 h-96 bg-violet-600/10 rounded-full blur-[90px] animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 transform transition-all duration-700 hover:scale-110 hover:neon-glow cursor-default">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full mb-6 transform transition-all duration-500 hover:scale-125 hover:rotate-3 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8" style={{ transform: `translateX(${mousePosition.x * -0.5}px) translateY(${mousePosition.y * -0.5}px)` }}>
            <div
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:border-indigo-500/30 preserve-3d"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 transform transition-transform duration-300 hover:translate-z-2">
                Let's Connect
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 transform transition-all duration-300 hover:translate-x-4 hover:scale-105 cursor-default group">
                  <div className="w-12 h-12 bg-indigo-500/20 border border-indigo-500/30 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]">
                    <Mail className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-200 font-medium">ashmitkamboj@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 transform transition-all duration-300 hover:translate-x-4 hover:scale-105 cursor-default group">
                  <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-500/30 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(52,211,153,0.4)]">
                    <Phone className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-gray-200 font-medium">+91 9045405279</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 transform transition-all duration-300 hover:translate-x-4 hover:scale-105 cursor-default group">
                  <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-500/30 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-200 font-medium">Greater Noida, Uttar Pradesh</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com/ashmitkamboj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center px-6 py-4 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:rotate-3 preserve-3d border border-slate-700"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <svg className="w-6 h-6 mr-2 transform transition-transform duration-300 hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/ashmitkamboj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:-rotate-3 preserve-3d"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <svg className="w-6 h-6 mr-2 transform transition-transform duration-300 hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl preserve-3d"
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateX(${mousePosition.y * -0.3}deg) rotateY(${mousePosition.x * 0.3}deg)`
            }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transform transition-transform duration-300 hover:translate-z-2">
              Send a Message
            </h3>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl flex items-center animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.2)]">
                <CheckCircle className="w-5 h-5 mr-2" />
                Message sent successfully!
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl flex items-center animate-pulse shadow-[0_0_10px_rgba(248,113,113,0.2)]">
                <AlertCircle className="w-5 h-5 mr-2" />
                Failed to send message. Please try again.
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_10px_rgba(99,102,241,0.2)] hover:bg-slate-800 preserve-3d disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ transformStyle: 'preserve-3d' }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_10px_rgba(99,102,241,0.2)] hover:bg-slate-800 preserve-3d disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ transformStyle: 'preserve-3d' }}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_10px_rgba(99,102,241,0.2)] hover:bg-slate-800 preserve-3d disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ transformStyle: 'preserve-3d' }}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_10px_rgba(99,102,241,0.2)] hover:bg-slate-800 preserve-3d resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ transformStyle: 'preserve-3d' }}
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-110 hover:rotate-3 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
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

export default Contact;
