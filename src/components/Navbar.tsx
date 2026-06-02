import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  // Detect scroll to style navbar and trigger scroll-spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['inicio', 'servicos', 'solucoes-profissionais', 'portfolio', 'beneficios', 'depoimentos', 'contato'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio', id: 'inicio' },
    { name: 'Serviços', href: '#servicos', id: 'servicos' },
    { name: 'Soluções', href: '#solucoes-profissionais', id: 'solucoes-profissionais' },
    { name: 'Portfólio', href: '#portfolio', id: 'portfolio' },
    { name: 'Benefícios', href: '#beneficios', id: 'beneficios' },
    { name: 'Depoimentos', href: '#depoimentos', id: 'depoimentos' },
    { name: 'Contato', href: '#contato', id: 'contato' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full ${
        isScrolled
          ? 'bg-brand-primary/80 backdrop-blur-md border-b border-white/5 py-3 shadow-[0_5px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          
          {/* Logo element */}
          <a href="#inicio" className="flex items-center focus:outline-none" aria-label="Ir para o topo">
            <Logo iconSize={32} />
          </a>

          {/* Desktop navigation menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-[#00befc] relative py-1 ${
                  activeSection === link.id ? 'text-[#00befc]' : 'text-gray-300'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-2/3 h-0.5 bg-gradient-to-r from-pop-blue to-pop-green rounded-full" />
                )}
              </a>
            ))}
          </div>

          {/* CTA Header Button */}
          <div className="hidden lg:flex items-center">
            <button
              id="header-cta-btn"
              onClick={onOpenQuote}
              className="flex items-center gap-1.5 bg-gradient-to-r from-pop-blue to-[#0072b5] hover:brightness-110 text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all duration-200 shadow-[0_4px_15px_rgba(0,190,252,0.2)] hover:shadow-[0_4px_25px_rgba(0,190,252,0.4)] active:scale-95 cursor-pointer"
            >
              Solicitar Orçamento
              <ArrowUpRight size={14} className="stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-white hover:bg-white/5 p-2 rounded-xl transition-colors cursor-pointer"
            aria-label="Abrir menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile panel menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] glass-effect border-b border-white/5 p-6 shadow-2xl flex flex-col gap-4 z-40">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium py-2 rounded-xl transition-colors ${
                activeSection === link.id ? 'text-[#00befc] bg-[#00befc]/5 px-4 font-bold' : 'text-gray-300 px-4'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenQuote();
            }}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pop-blue to-[#0072b5] text-white font-bold py-3 rounded-xl transition-all shadow-[0_4px_15px_rgba(0,190,252,0.2)] hover:shadow-[0_4px_25px_rgba(0,190,252,0.4)] mt-2 cursor-pointer text-sm"
          >
            Solicitar Orçamento
            <ArrowUpRight size={16} />
          </button>
        </div>
      )}
    </nav>
  );
};
