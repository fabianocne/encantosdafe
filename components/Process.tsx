import React from 'react';
import { FadeIn } from './ui/FadeIn';

export const Process: React.FC = () => {
  const steps = [
    { number: "01", title: "Solicitação", text: "Você preenche o formulário abaixo." },
    { number: "02", title: "Atendimento", text: "Nossa equipe recebe e analisa." },
    { number: "03", title: "Catálogo", text: "Enviamos catálogo e condições." },
    { number: "04", title: "Pedido", text: "Montamos seu pedido de São José." },
  ];

  return (
    <section className="py-20 bg-brand-offWhite">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark">Como funciona</h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-brand-border z-0"></div>

          {steps.map((step, idx) => (
            <FadeIn key={idx} delay={idx * 150} className="relative z-10">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-white border border-brand-border shadow-sm flex items-center justify-center mb-6">
                  <span className="font-serif text-2xl text-brand-gold italic">{step.number}</span>
                </div>
                <h3 className="font-semibold text-lg text-brand-dark mb-2">{step.title}</h3>
                <p className="text-brand-gray text-sm">{step.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};