import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { SECTION_IDS } from '../constants';
import { FadeIn } from './ui/FadeIn';
import { HERO_CONTENT } from '../data/content';
import { IMAGES } from '../data/images';

export const Hero: React.FC = () => {
  const scrollToForm = () => {
    const element = document.getElementById(SECTION_IDS.FORM);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id={SECTION_IDS.HERO} className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-semibold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
                {HERO_CONTENT.BADGE}
              </div>
            </FadeIn>
            
            <FadeIn delay={100}>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-brand-dark tracking-tight leading-[1.1] mb-6">
                {HERO_CONTENT.TITLE} <br/>
                <span className="text-brand-gray/80 italic">{HERO_CONTENT.SUBTITLE}</span>
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-lg md:text-xl text-brand-gray font-light leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                {HERO_CONTENT.DESCRIPTION}
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-10 text-sm text-brand-dark font-medium">
                {HERO_CONTENT.BULLETS.map((bullet, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-brand-gold" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={scrollToForm}
                  className="group relative inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-[#9E7D4B] text-white text-lg font-medium px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-brand-gold/20 w-full sm:w-auto"
                >
                  {HERO_CONTENT.CTA}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-xs text-brand-gray/60 max-w-xs sm:max-w-none sm:text-left text-center">
                  {HERO_CONTENT.NOTE}
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Image Content */}
          <div className="relative mt-8 lg:mt-0">
             <FadeIn delay={200}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-dark/10 border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-700">
                    <img 
                        src={IMAGES.CATALOG_HERO} 
                        alt="Catálogo São José - Artigos Religiosos" 
                        className="w-full h-auto object-cover"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                </div>
             </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};