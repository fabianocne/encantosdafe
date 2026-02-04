import React from 'react';
import { ArrowDown } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
import { Section } from './ui/Section';
import { SECTION_IDS } from '../constants';
import { ROSARY_CONTENT } from '../data/content';

export const RosaryGuide: React.FC = () => {
  const scrollToForm = () => {
    const element = document.getElementById(SECTION_IDS.FORM);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section bg="offWhite">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-4">{ROSARY_CONTENT.TITLE}</h2>
            <p className="text-brand-gray">{ROSARY_CONTENT.SUBTITLE}</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative mb-12">
           {/* Mobile connector line */}
           <div className="absolute left-6 top-6 bottom-6 w-[1px] bg-brand-border md:hidden z-0"></div>

          {ROSARY_CONTENT.STEPS.map((step, idx) => (
            <FadeIn key={idx} delay={idx * 100} className="relative z-10">
              <div className="bg-white p-6 rounded-xl border border-brand-border/50 h-full hover:border-brand-gold/30 transition-colors flex md:flex-col items-start md:items-center gap-4 md:text-center">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-gold text-white flex items-center justify-center font-serif font-medium text-sm">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-medium text-brand-dark mb-1">{step.title}</h3>
                  <p className="text-xs text-brand-gray leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={500}>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm text-brand-gray italic mb-6">
              {ROSARY_CONTENT.NOTE}
            </p>
            <button 
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 text-brand-dark font-medium border border-brand-border px-6 py-3 rounded-full hover:bg-white hover:shadow-sm transition-all text-sm"
            >
              {ROSARY_CONTENT.CTA}
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        </FadeIn>
    </Section>
  );
};