import React from 'react';
import { BookOpen, Tag, Package, BarChart3 } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

const deliverables = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Catálogo São José",
    desc: "Acesso completo aos produtos da coleção com fotos de alta resolução."
  },
  {
    icon: <Tag className="w-6 h-6" />,
    title: "Condições de Revenda",
    desc: "Tabela de preços exclusiva para atacado com margens saudáveis."
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: "Mix Recomendado",
    desc: "Sugestão inteligente dos itens que mais saem na época da campanha."
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Orientação de Venda",
    desc: "Dicas rápidas de exposição para valorizar as peças na sua loja."
  }
];

export const Deliverables: React.FC = () => {
  return (
    <section className="py-20 bg-brand-offWhite">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-4">O que você vai receber</h2>
            <p className="text-brand-gray max-w-2xl mx-auto">Tudo o que você precisa para tomar sua decisão de compra com tranquilidade.</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliverables.map((item, index) => (
            <FadeIn key={index} delay={index * 100} className="h-full">
              <div className="bg-white p-8 rounded-2xl border border-brand-border/40 h-full hover:shadow-xl hover:shadow-brand-dark/5 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-brand-offWhite rounded-xl flex items-center justify-center text-brand-gold mb-6">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg text-brand-dark mb-2">{item.title}</h3>
                <p className="text-sm text-brand-gray leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};