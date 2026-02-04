import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { Section } from './ui/Section';
import { WHY_CONTENT } from '../data/content';
import { IMAGES } from '../data/images';

export const WhySection: React.FC = () => {
  return (
    <Section bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <FadeIn>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-brand-offWhite relative shadow-2xl shadow-brand-dark/5">
                 <img 
                   src={IMAGES.SAO_JOSE_ILLUSTRATION} 
                   alt="Imagem ilustrativa de São José" 
                   className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
            </FadeIn>
          </div>

          <div className="order-1 lg:order-2">
            <FadeIn delay={100}>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-6 leading-tight">
                {WHY_CONTENT.TITLE_PREFIX} <span className="text-brand-gold">{WHY_CONTENT.TITLE_HIGHLIGHT}</span> {WHY_CONTENT.TITLE_SUFFIX}
              </h2>
            </FadeIn>
            
            <FadeIn delay={200}>
              <p className="text-brand-gray mb-10 text-lg leading-relaxed">
                {WHY_CONTENT.DESCRIPTION}
              </p>
            </FadeIn>

            <div className="space-y-8">
              {WHY_CONTENT.REASONS.map((reason, index) => (
                <FadeIn key={index} delay={300 + (index * 100)}>
                  <div className="flex gap-5 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-brand-border flex items-center justify-center text-brand-gold font-serif text-xl italic group-hover:border-brand-gold transition-colors">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-medium text-xl text-brand-dark mb-1">{reason.title}</h3>
                      <p className="text-brand-gray">{reason.text}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

        </div>
    </Section>
  );
};