import React from 'react';
import { CONTACT_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-offWhite border-t border-brand-border/40 py-12 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <div className="font-serif text-2xl font-bold tracking-tight text-brand-dark mb-6">
          Encantos da Fé
          <span className="text-brand-gold text-2xl leading-none">.</span>
        </div>
        
        <div className="space-y-2 text-brand-gray text-sm mb-8">
          <p>WhatsApp: <span className="text-brand-dark font-medium">{CONTACT_INFO.WHATSAPP_DISPLAY}</span></p>
          <p>E-mail: <span className="text-brand-dark font-medium">{CONTACT_INFO.EMAIL}</span></p>
          <p className="max-w-md mx-auto">{CONTACT_INFO.ADDRESS}</p>
        </div>

        <p className="text-xs text-brand-gray/50">
          © {new Date().getFullYear()} Encantos da Fé. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};