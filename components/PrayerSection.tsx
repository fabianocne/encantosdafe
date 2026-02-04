import React from 'react';
import { Star } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
import { Section } from './ui/Section';
import { PRAYER_CONTENT } from '../data/content';

export const PrayerSection: React.FC = () => {
  return (
    <Section bg="white" containerSize="sm">
      <div className="text-center">
        <FadeIn>
          <div className="flex justify-center mb-4">
            <Star className="w-5 h-5 text-brand-gold fill-brand-gold/20" />
          </div>
          <h2 className="font-serif text-3xl text-brand-dark mb-10">{PRAYER_CONTENT.TITLE}</h2>
        </FadeIn>
        
        <FadeIn delay={200}>
          <div className="relative p-10 md:p-14 bg-brand-offWhite rounded-[2rem] border border-brand-border shadow-sm">
            {/* Decorative corners */}
            <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-brand-gold/40 rounded-tl-lg"></div>
            <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-brand-gold/40 rounded-tr-lg"></div>
            <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-brand-gold/40 rounded-bl-lg"></div>
            <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-brand-gold/40 rounded-br-lg"></div>

            <p className="font-serif text-xl md:text-2xl text-brand-dark leading-relaxed italic">
              {PRAYER_CONTENT.TEXT}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="mt-8 text-sm text-brand-gray/60">
            {PRAYER_CONTENT.NOTE}
          </p>
        </FadeIn>
      </div>
    </Section>
  );
};