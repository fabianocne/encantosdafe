import React from 'react';
import { FadeIn } from './ui/FadeIn';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="grid grid-cols-2 gap-4">
             <FadeIn delay={0}>
                <img 
                  src="https://picsum.photos/400/500?random=1&grayscale" 
                  alt="Detalhe produto" 
                  className="rounded-2xl w-full h-64 object-cover mb-4"
                />
             </FadeIn>
             <FadeIn delay={100}>
                <img 
                  src="https://picsum.photos/400/500?random=2&grayscale" 
                  alt="Estoque" 
                  className="rounded-2xl w-full h-64 object-cover mt-8"
                />
             </FadeIn>
          </div>

          <div>
             <FadeIn delay={200}>
                <div className="inline-block px-3 py-1 mb-4 rounded-full border border-brand-border bg-brand-offWhite text-xs font-semibold tracking-wider text-brand-gray uppercase">
                  Confiança
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-6">
                  Qualidade que seus clientes sentem ao tocar.
                </h2>
                <blockquote className="text-xl text-brand-gray font-light italic mb-8 border-l-2 border-brand-gold pl-6">
                  "Atendimento humano e rápido. O processo foi muito claro e o suporte ajudou a escolher o mix certo para minha região."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="text-sm">
                    <p className="font-semibold text-brand-dark">Encantos da Fé</p>
                    <p className="text-brand-gray">Excelência em Artigos Religiosos</p>
                  </div>
                </div>
             </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};