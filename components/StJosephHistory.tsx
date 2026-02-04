import React from 'react';
import { Heart, Hammer, Sun, Calendar } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
import { Section } from './ui/Section';
import { SECTION_IDS } from '../constants';
import { HISTORY_CONTENT } from '../data/content';

export const StJosephHistory: React.FC = () => {
  const scrollToForm = () => {
    const element = document.getElementById(SECTION_IDS.FORM);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const icons = [Heart, Hammer, Sun];

  return (
    <Section bg="white" containerSize="md">
        <div className="text-center mb-12">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-6">{HISTORY_CONTENT.TITLE}</h2>
            <p className="text-brand-gray text-lg leading-relaxed max-w-2xl mx-auto">
              {HISTORY_CONTENT.DESCRIPTION}
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {HISTORY_CONTENT.CARDS.map((card, idx) => {
             const Icon = icons[idx];
             return (
              <FadeIn key={idx} delay={100 + (idx * 100)}>
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-brand-offWhite border border-brand-border/30 h-full">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-gold mb-4 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-brand-dark mb-2">{card.title}</h3>
                  <p className="text-sm text-brand-gray">{card.text}</p>
                </div>
              </FadeIn>
             );
          })}
        </div>

        <FadeIn delay={400}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-6 rounded-2xl border border-brand-gold/20 bg-brand-gold/5 mb-10">
            <Calendar className="w-8 h-8 text-brand-gold flex-shrink-0" />
            <div className="text-center md:text-left">
              <h4 className="font-serif text-lg font-medium text-brand-dark">{HISTORY_CONTENT.DATE_TITLE}</h4>
              <p className="text-sm text-brand-dark/70">
                {HISTORY_CONTENT.DATE_TEXT}
              </p>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={scrollToForm}
              className="text-brand-gold font-medium hover:text-brand-dark transition-colors underline decoration-1 underline-offset-4 text-sm"
            >
              Quer o catálogo de São José no atacado? Preencha o formulário.
            </button>
          </div>
        </FadeIn>
    </Section>
  );
};