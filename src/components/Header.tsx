import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-9 left-0 right-0 z-50 transition-all duration-300">
      <nav className={`container mx-auto px-6 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled 
          ? 'bg-black/50 backdrop-blur-lg rounded-full mt-4' 
          : 'bg-transparent mt-0'
      }`}>
        <a className="flex-shrink-0" href="#">
          <ImageWithFallback 
            alt="Alie Network Logo" 
            height={48} 
            width={48}
            src="/assets/images/logos/alie-logo.png"
            className="rounded-lg hover:scale-110 transition-transform duration-300"
          />
        </a>
        
        <div className="hidden md:flex items-center space-x-8 text-gray-300">
          <a className="hover:text-white transition-colors duration-300 relative group" href="#services">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a className="hover:text-white transition-colors duration-300 relative group" href="#how-it-works">
            Technology
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a className="hover:text-white transition-colors duration-300 relative group" href="#insights">
            Insights
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a className="hover:text-white transition-colors duration-300 relative group" href="#whitepaper">
            Whitepaper
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a className="hover:text-white transition-colors duration-300 relative group" href="#team">
            Team
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
        
        <a 
          className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] transition-all duration-300 text-white rounded-full font-semibold border border-transparent hover:border-blue-400/50"
          href="#contact"
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}