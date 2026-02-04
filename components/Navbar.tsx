import React, { useState, useEffect } from 'react';
import { SECTION_IDS } from '../constants';
import { IMAGES } from '../data/images';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const element = document.getElementById(SECTION_IDS.FORM);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md border-brand-border py-3 shadow-sm' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
           <img 
             src={IMAGES.LOGO}
             alt="Encantos da Fé" 
             className="h-10 md:h-12 w-auto object-contain"
           />
        </div>
        
        <button 
          onClick={scrollToForm}
          className={`text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-brand-dark text-white hover:bg-black'
              : 'bg-white text-brand-dark hover:bg-brand-offWhite shadow-sm border border-brand-border/50'
          }`}
        >
          Falar com a equipe
        </button>
      </div>
    </nav>
  );
};