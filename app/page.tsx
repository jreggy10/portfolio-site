'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Github, Linkedin, Moon, Sun } from 'lucide-react';
import Image from 'next/image';



const PortfolioPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check localStorage and system preference on mount
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setIsDarkMode(JSON.parse(savedMode));
    } else {
      // Check system preference if no saved preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(systemPrefersDark);
    }
  }, []);

  const toggleDarkMode = useCallback(() => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  }, [isDarkMode]);

const projects = useMemo(() => [
    {
      title: 'Project One',
      category: 'Development',
      description: 'A cutting-edge web application focused on delivering exceptional user experiences through innovative technology solutions.',
      image: '/api/placeholder/400/500'
    },
    {
      title: 'Project Two',
      category: 'Design & Development',
      description: 'Creative digital experience that pushes the boundaries of modern web development and interactive design.',
      image: '/api/placeholder/400/500'
    },
    {
      title: 'Project Three',
      category: 'Development',
      description: 'Innovative platform solution that transforms how users interact with digital content.',
      image: '/api/placeholder/400/500'
    }
], []);


  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed w-full p-6 ${isDarkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-sm z-50 transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">YourName</div>
          <div className="flex items-center space-x-6">
            <a href="#about" className="hover:text-gray-500 transition-colors">About</a>
            <a href="#work" className="hover:text-gray-500 transition-colors">Work</a>
            <a href="#contact" className="hover:text-gray-500 transition-colors">Contact</a>
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-7xl font-bold mb-8">
            your
            <br />
            name
          </h1>
          <p className="text-xl max-w-2xl opacity-80">
            Creative professional with a passion for digital innovation and development.
            Bringing together technology and creativity to build meaningful experiences.
          </p>
        </div>
      </section>

      {/* Recent Projects */}
      <section id="work" className={`py-20 px-6 ${isDarkMode ? 'bg-black/20' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">recent projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`group relative overflow-hidden rounded-lg transition-all duration-300 hover:transform hover:scale-[1.02] ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                } shadow-lg`}
              >
                <Image
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm opacity-60 mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="opacity-80 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Tell me what's next.</h2>
          <a 
            href="mailto:your.email@example.com" 
            className="text-2xl hover:opacity-70 transition-opacity"
          >
            your.email@example.com
          </a>
          <div className="mt-8 flex justify-center space-x-6">
            <a href="https://github.com" className="hover:opacity-70 transition-opacity">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="hover:opacity-70 transition-opacity">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 text-center text-sm opacity-60">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PortfolioPage;
