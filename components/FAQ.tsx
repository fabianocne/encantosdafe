import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
import { Section } from './ui/Section';
import { FAQ_CONTENT } from '../data/content';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <Section bg="offWhite" containerSize="md">
        <FadeIn>
          <h2 className="font-serif text-3xl text-center text-brand-dark mb-12">Dúvidas Frequentes</h2>
        </FadeIn>

        <div className="space-y-4">
          {FAQ_CONTENT.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 50}>
              <div className="bg-white rounded-xl border border-brand-border/50 overflow-hidden">
                <button 
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
                >
                  <span className="font-medium text-brand-dark pr-8">{item.q}</span>
                  {openIndex === idx ? (
                    <Minus className="w-5 h-5 text-brand-gold flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-brand-dark/30 flex-shrink-0" />
                  )}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-6 text-brand-gray text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
    </Section>
  );
};