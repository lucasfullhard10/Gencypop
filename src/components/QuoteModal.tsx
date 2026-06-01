import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, User, Building, Phone, Mail, FileText, Send, CheckCircle } from 'lucide-react';
import { Service } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService: Service | null;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  selectedService,
}) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Focus trap and esc key close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Mask for phone input (ex: (99) 99999-9999)
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    
    if (value.length > 10) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    setPhone(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return setError('Por favor, digite seu nome.');
    if (!phone.trim() || phone.length < 13) return setError('Por favor, informe um telefone válido com DDD.');
    if (!email.trim() || !email.includes('@')) return setError('Por favor, informe um e-mail válido.');
    if (!description.trim()) return setError('Por favor, conte um pouco do seu projeto.');

    setError('');
    
    // Construct WA Text
    const serviceName = selectedService ? selectedService.name : 'Projeto Personalizado';
    const companyText = company.trim() ? company.trim() : 'Não informada / Profissional Liberal';
    
    const rawMessage = `Olá, gostaria de solicitar um orçamento.

Serviço escolhido:
${serviceName}

Nome:
${name.trim()}

Empresa:
${companyText}

Telefone:
${phone.trim()}

E-mail:
${email.trim()}

Descrição do Projeto:
${description.trim()}`;

    const encodedMessage = encodeURIComponent(rawMessage);
    const phoneNumber = '5562999977530';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    // Success transition
    setIsSuccess(true);
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      onClose();
      // Reset
      setName('');
      setCompany('');
      setPhone('');
      setEmail('');
      setDescription('');
      setIsSuccess(false);
    }, 1200);
  };

  const currentPlaceholder = selectedService?.placeholderText || 'Como deseja seu site? Ex: quais páginas deseja no site, referências visuais, etc...';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur overlay */}
          <motion.div
            id="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-primary/80 backdrop-blur-md"
          />

          {/* Modal Content Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-xl glass-effect p-6 md:p-8 rounded-3xl glow-card shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              id="close-modal-btn"
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors"
              aria-label="Fechar modal"
            >
              <X size={18} />
            </button>

            {isSuccess ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="mb-4 text-emerald-400"
                >
                  <CheckCircle size={64} className="stroke-2" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">Quase lá!</h3>
                <p className="text-gray-300">
                  Estamos gerando sua mensagem personalizada. Você será redirecionado para o WhatsApp da Gency Pop para concluir a sua solicitação.
                </p>
                <div className="w-12 h-1 bg-gradient-to-r from-pop-blue to-pop-green rounded mt-6 animate-pulse" />
              </div>
            ) : (
              <div>
                {/* Header */}
                <div className="mb-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#00befc] bg-[#00befc]/10 px-3 py-1 rounded-full">
                    Solicitação Express
                  </span>
                  <h3 id="modal-title" className="text-2xl font-bold text-white mt-3">
                    {selectedService ? 'Solicitar Orçamento' : 'Inicie seu Projeto Premium'}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    {selectedService 
                      ? `Você está orçando para: ${selectedService.name}`
                      : 'Descubra o valor ideal para impulsionar suas vendas e presença online.'
                    }
                  </p>
                </div>

                {/* Form */}
                <form id="quote-request-form" onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name field */}
                  <div>
                    <label htmlFor="name-input" className="block text-xs font-semibold text-gray-300 mb-1">
                      Seu Nome Completo *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                        <User size={16} />
                      </div>
                      <input
                        id="name-input"
                        type="text"
                        required
                        placeholder="Ex: João da Silva"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#111622] border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#00befc] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Company field */}
                  <div>
                    <label htmlFor="company-input" className="block text-xs font-semibold text-gray-300 mb-1">
                      Sua Empresa / Negócio <span className="text-gray-500 font-normal">(Opcional)</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                        <Building size={16} />
                      </div>
                      <input
                        id="company-input"
                        type="text"
                        placeholder="Ex: Pizzaria Pop, Studio de Arquitetura, etc."
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full bg-[#111622] border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#00befc] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Phone field */}
                    <div>
                      <label htmlFor="phone-input" className="block text-xs font-semibold text-gray-300 mb-1">
                        Seu Telefone / WhatsApp *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                          <Phone size={16} />
                        </div>
                        <input
                          id="phone-input"
                          type="tel"
                          required
                          placeholder="Ex: (62) 99999-7753"
                          value={phone}
                          onChange={handlePhoneChange}
                          className="w-full bg-[#111622] border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#00befc] focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    {/* Email field */}
                    <div>
                      <label htmlFor="email-input" className="block text-xs font-semibold text-gray-300 mb-1">
                        Seu E-mail Corporativo *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                          <Mail size={16} />
                        </div>
                        <input
                          id="email-input"
                          type="email"
                          required
                          placeholder="Ex: contato@empresa.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-[#111622] border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#00befc] focus:border-transparent transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="desc-input" className="block text-xs font-semibold text-gray-300 mb-1">
                      Descreva como deseja seu projeto *
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 pointer-events-none text-gray-500">
                        <FileText size={16} />
                      </div>
                      <textarea
                        id="desc-input"
                        required
                        rows={4}
                        placeholder={currentPlaceholder}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full bg-[#111622] border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#00befc] focus:border-transparent transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Error Prompt */}
                  {error && (
                    <p id="error-msg" className="text-red-400 text-xs font-semibold bg-red-400/5 p-3 rounded-lg border border-red-400/20">
                      ⚠️ {error}
                    </p>
                  )}

                  {/* Submit Button */}
                  <button
                    id="submit-proposal-btn"
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pop-blue to-[#0072b5] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-[0_4px_20px_rgba(0,190,252,0.25)] hover:shadow-[0_4px_30px_rgba(0,190,252,0.4)] hover:brightness-110 active:scale-95 duration-200 cursor-pointer text-sm tracking-wide mt-2"
                  >
                    <Send size={15} />
                    Enviar Orçamento para o WhatsApp
                  </button>

                  <p className="text-center text-[11px] text-gray-500 leading-relaxed mt-2 select-none">
                    Suas informações estão salvas. Ao clicar em enviar, abriremos diretamente o WhatsApp para nosso especialista te atender em menos de 10 minutos.
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
