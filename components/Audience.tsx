import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const Audience: React.FC = () => {
  const list = [
    "Lojas e livrarias católicas",
    "Papelarias com linha religiosa",
    "Lojas de presentes",
    "Paróquias e movimentos",
    "Revendedores autônomos",
    "Distribuidores regionais"
  ];

  return (
    <section className="py-20 bg-white border-b border-brand-border/30">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <span className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-3 block">Público Alvo</span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-12">Para quem preparamos este catálogo?</h2>
        </FadeIn>
        
        <FadeIn delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-left max-w-2xl mx-auto">
            {list.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 py-3 border-b border-brand-border/30 last:border-0 md:last:border-b">
                <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <span className="text-brand-dark font-medium">{item}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};