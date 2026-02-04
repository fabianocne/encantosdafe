import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { CONTACT_INFO, SECTION_IDS } from '../constants';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    cnpj: '',
    city: '',
    phone: '',
    email: '',
    terms: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.terms) return;

    // Format message
    const message = `Olá! Quero comprar artigos religiosos católicos no ATACADO para a Campanha de SÃO JOSÉ.
Nome: ${formData.name}
Empresa: ${formData.company}
CNPJ: ${formData.cnpj}
Cidade/UF: ${formData.city}
WhatsApp: ${formData.phone}
E-mail: ${formData.email}`;

    // Encode and redirect
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  const openWhatsAppAgain = () => {
     // Re-trigger in case popup blocker caught it or user closed it
     const message = `Olá! Quero comprar artigos religiosos católicos no ATACADO para a Campanha de SÃO JOSÉ.
Nome: ${formData.name}
Empresa: ${formData.company}
CNPJ: ${formData.cnpj}
Cidade/UF: ${formData.city}
WhatsApp: ${formData.phone}
E-mail: ${formData.email}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  }

  return (
    <section id={SECTION_IDS.FORM} className="py-24 bg-white relative">
      <div className="max-w-2xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-4">
            Solicitar Catálogo <span className="text-brand-gold">São José</span>
          </h2>
          <p className="text-brand-gray">
            Preencha seus dados. Ao enviar, vamos abrir o WhatsApp com sua mensagem pronta para atendimento.
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-50 border border-green-100 rounded-2xl p-10 text-center animate-in fade-in zoom-in duration-500">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl text-green-800 mb-2">Perfeito!</h3>
            <p className="text-green-700 mb-6">Sua mensagem está pronta no WhatsApp.</p>
            <button 
              onClick={openWhatsAppAgain}
              className="text-green-800 font-semibold underline hover:text-green-900"
            >
              Se não abriu, clique aqui.
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 bg-brand-offWhite/50 p-8 rounded-3xl border border-brand-border/30 shadow-lg shadow-brand-dark/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wider text-brand-gray/80 ml-1">Nome Completo</label>
                <input required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-xl border border-brand-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold transition-all" placeholder="Seu nome" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wider text-brand-gray/80 ml-1">Empresa / Paróquia</label>
                <input required name="company" value={formData.company} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-xl border border-brand-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold transition-all" placeholder="Nome da loja" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wider text-brand-gray/80 ml-1">CNPJ</label>
                <input required name="cnpj" value={formData.cnpj} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-xl border border-brand-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold transition-all" placeholder="00.000.000/0001-00" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wider text-brand-gray/80 ml-1">Cidade / UF</label>
                <input required name="city" value={formData.city} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-xl border border-brand-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold transition-all" placeholder="Ex: Maringá/PR" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wider text-brand-gray/80 ml-1">WhatsApp</label>
                <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full px-4 py-3 rounded-xl border border-brand-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold transition-all" placeholder="(00) 00000-0000" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wider text-brand-gray/80 ml-1">E-mail</label>
                <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full px-4 py-3 rounded-xl border border-brand-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold transition-all" placeholder="seu@email.com" />
              </div>
            </div>

            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input required name="terms" checked={formData.terms} onChange={handleChange} type="checkbox" className="mt-1 w-4 h-4 text-brand-gold rounded border-brand-border focus:ring-brand-gold" />
                <span className="text-sm text-brand-gray group-hover:text-brand-dark transition-colors">Concordo em receber contato da Encantos da Fé por WhatsApp e e-mail.</span>
              </label>
            </div>

            <button 
              type="submit"
              disabled={!formData.terms}
              className="w-full py-4 bg-brand-dark hover:bg-black text-white rounded-xl font-medium text-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
              Solicitar Catálogo no WhatsApp
            </button>
          </form>
        )}
      </div>
    </section>
  );
};