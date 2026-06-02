import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Phone,
  Layers,
  Sparkles,
  Zap,
  ArrowUpRight,
  Send,
  Linkedin,
  Instagram,
  Facebook,
  Bot,
  MessageSquare,
  Network,
  Mail
} from 'lucide-react';

import { SERVICES, BENEFITS, PROJECTS, TESTIMONIALS } from './data';
import { Service } from './types';
import { Logo } from './components/Logo';
import { Navbar } from './components/Navbar';
import { ServiceCard } from './components/ServiceCard';
import { BenefitItem } from './components/BenefitItem';
import { PortfolioCard } from './components/PortfolioCard';
import { TestimonialCard } from './components/TestimonialCard';
import { QuoteModal } from './components/QuoteModal';
import { AnimatedBackground } from './components/AnimatedBackground';
import { SolutionsSection } from './components/SolutionsSection';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleOpenQuoteWithService = (service: Service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const handleOpenQuoteGeneral = () => {
    setSelectedService(null);
    setModalOpen(true);
  };

  const handleOpenSolutionQuote = (solutionName: string, placeholderGoal: string) => {
    setSelectedService({
      id: `sol-${solutionName.toLowerCase().replace(/\s+/g, '-')}`,
      name: `${solutionName}`,
      shortDesc: `Plano Profissional: ${solutionName}`,
      longDesc: `Plano Profissional: ${solutionName}`,
      iconName: 'Sparkles',
      slug: 'solucoes',
      placeholderText: placeholderGoal
    });
    setModalOpen(true);
  };

  const speakOnWhatsAppGeneral = () => {
    const rawMsg = 'Olá! Acessei o site da Gency Pop e gostaria de solicitar um orçamento para alavancar meu negócio no digital.';
    const url = `https://api.whatsapp.com/send?phone=5562999977530&text=${encodeURIComponent(rawMsg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#0a0c10] text-[#f3f4f6] relative overflow-hidden font-sans">
      
      {/* Dynamic Animated Particle Fields & Color Bloom Background */}
      <AnimatedBackground />

      {/* 2. Top Header Navigation */}
      <Navbar onOpenQuote={handleOpenQuoteGeneral} />

      {/* 3. HERO SECTION */}
      <header id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Text Frame */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Floating intro badge */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md mb-6 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] cursor-pointer select-none"
              >
                <Sparkles size={14} className="text-[#00befc] animate-spin-pulse" />
                <span className="text-[11px] font-bold text-gray-200 tracking-widest uppercase">
                  Agência Digital Premium de Conversão
                </span>
              </motion.div>

              {/* Dynamic Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6"
              >
                Sua Empresa Merece um{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pop-blue via-pop-green to-pop-orange drop-shadow-sm">
                  Site Profissional
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-gray-300 font-medium leading-relaxed max-w-2xl mb-8"
              >
                Criamos sites modernos, surpreendentemente rápidos e totalmente preparados para{' '}
                <span className="text-white border-b-2 border-pop-blue/30 font-semibold">vender mais todos os dias</span>. Transformamos suas ideias em negócios digitais de absoluto sucesso.
              </motion.p>

              {/* Dual CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <button
                  id="hero-quote-btn"
                  onClick={handleOpenQuoteGeneral}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-pop-blue to-[#0072b5] text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-[0_4px_25px_rgba(0,190,252,0.3)] hover:shadow-[0_4px_35px_rgba(0,190,252,0.5)] hover:brightness-110 hover:-translate-y-0.5 duration-200 cursor-pointer text-sm tracking-wide"
                >
                  Solicitar Orçamento
                  <ArrowRight size={16} />
                </button>
                
                <button
                  id="hero-whatsapp-btn"
                  onClick={speakOnWhatsAppGeneral}
                  className="flex items-center justify-center gap-2 bg-[#111622] hover:bg-[#161d2d] text-[#59d533] border border-white/10 hover:border-[#59d533]/40 font-bold py-4 px-8 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer text-sm tracking-wide"
                >
                  <Phone size={15} className="fill-current" />
                  Falar no WhatsApp
                </button>
              </motion.div>

              {/* Authority proofs */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-12 border-t border-white/5 pt-8 w-full"
              >
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-white leading-none">100%</span>
                  <span className="text-xs text-gray-400 mt-1 uppercase tracking-widest font-semibold">Responsivo & Fluido</span>
                </div>
                <div className="w-px h-8 bg-white/10 hidden sm:block" />
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-white leading-none">ULTRA</span>
                  <span className="text-xs text-gray-400 mt-1 uppercase tracking-widest font-semibold">Nota 100 no PageSpeed</span>
                </div>
                <div className="w-px h-8 bg-white/10 hidden sm:block" />
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-[#59d533] leading-none">24h</span>
                  <span className="text-xs text-gray-400 mt-1 uppercase tracking-widest font-semibold">Suporte Ativo</span>
                </div>
              </motion.div>
            </div>

            {/* Interactive Futuristic Terminal / Workspace mockup */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 1 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.7 }}
                className="relative mx-auto w-full max-w-[450px] glass-effect p-5 rounded-3xl glow-card shadow-2xl overflow-hidden"
              >
                {/* Simulated window header bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4 select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 tracking-wider">GENCYPOP.PRO</span>
                </div>

                {/* Styled Editor / Live Metrics Workspace */}
                <div className="space-y-4">
                  {/* Performance metric container */}
                  <div className="flex items-center justify-between bg-white/2 border border-white/5 p-4 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <div className="p-2 ml-1 rounded-lg bg-emerald-500/10 text-emerald-400">
                        <Zap size={20} className="fill-emerald-400/20" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Velocidade Google</div>
                        <div className="text-sm font-bold text-white">Carregamento Instantâneo</div>
                      </div>
                    </div>
                    <div className="w-11 h-11 rounded-full border-2 border-emerald-500/30 flex items-center justify-center font-mono text-xs font-bold text-emerald-400 bg-emerald-500/5 select-none">
                      A+
                    </div>
                  </div>

                  {/* AI Assistance card block */}
                  <div className="flex items-center justify-between bg-white/2 border border-white/5 p-4 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <div className="p-2 ml-1 rounded-lg bg-sky-500/10 text-[#00befc]">
                        <Bot size={20} />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Sistemas Customizados</div>
                        <div className="text-sm font-bold text-white">Integrações Inteligentes de IA</div>
                      </div>
                    </div>
                    <div className="text-xs py-1 px-2.5 rounded-md bg-[#00befc]/10 text-[#00befc] font-bold select-none animate-pulse-slow">
                      Ativo
                    </div>
                  </div>

                  {/* Interactive code box snippet layout */}
                  <div className="bg-[#05070a] border border-white/5 p-4 rounded-2xl font-mono text-xs text-gray-400 space-y-1">
                    <div className="text-emerald-400 font-medium">const agência = "Gency Pop";</div>
                    <div className="text-blue-400 font-medium">const projeto = &#123;</div>
                    <div className="pl-4">foco: <span className="text-amber-400">"Altíssima Conversão"</span>,</div>
                    <div className="pl-4">design: <span className="text-amber-400">"Exclusivo & Moderno"</span>,</div>
                    <div className="pl-4">suporte: <span className="text-green-400">true</span></div>
                    <div className="text-blue-400 font-medium">&#125;;</div>
                    <div className="text-pink-400 mt-2">await agência.criarSucesso(projeto);</div>
                  </div>

                  {/* Conversions success graph placeholder */}
                  <div className="bg-[#111622] rounded-2xl p-4 border border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Faturamento Semanal</div>
                      <div className="text-base font-bold text-[#59d533] mt-0.5">+R$ 48.250,00</div>
                    </div>
                    <div className="flex gap-1 items-end h-8">
                      <span className="w-1.5 h-3 bg-white/10 rounded-full" />
                      <span className="w-1.5 h-5 bg-white/10 rounded-full" />
                      <span className="w-1.5 h-4 bg-[#59d533]/40 rounded-full" />
                      <span className="w-1.5 h-7 bg-[#59d533]/70 rounded-full animate-bounce" />
                      <span className="w-1.5 h-8 bg-[#59d533] rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Outer floating visual node bubbles */}
                <div className="absolute -bottom-6 -left-6 bg-white/5 border border-white/10 p-3 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-2.5 animate-float select-none">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[10px] font-bold text-white tracking-wide uppercase">Vendas no WhatsApp Ativas</span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </header>

      {/* 4. SEÇÃO DE SERVIÇOS (SERVICES SECTION) */}
      <section id="servicos" className="py-24 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section title header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#00befc] bg-[#00befc]/10 px-4.5 py-1.5 rounded-full select-none">
              Nossos Serviços
            </span>
            <h2 id="service-section-title" className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4 select-none">
              Soluções Digitais sob Medida para sua Empresa
            </h2>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              Desenvolvemos produtos digitais elegantes de alta conversão, unindo design sofisticado com integrações tecnológicas robustas.
            </p>
          </div>

          {/* Service cards mesh grid */}
          <div id="service-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelect={handleOpenQuoteWithService}
              />
            ))}
          </div>

          {/* Quick extra consult notice */}
          <div className="mt-14 text-center">
            <p className="text-sm text-gray-400 select-none">
              Tem uma necessidade específica ou projeto de alta complexidade?{' '}
              <button
                onClick={handleOpenQuoteGeneral}
                className="text-[#00befc] font-bold hover:underline transition-all cursor-pointer inline-flex items-center gap-1 focus:outline-none"
              >
                Solicite uma reunião de Diagnóstico Gratuito
                <ArrowUpRight size={14} className="stroke-[2]" />
              </button>
            </p>
          </div>

        </div>
      </section>

      {/* Solutions / Professional Packages and Guarantee Section */}
      <SolutionsSection
        onSelectSolution={handleOpenSolutionQuote}
        speakOnWhatsApp={speakOnWhatsAppGeneral}
      />

      {/* 5. SEÇÃO DE BENEFÍCIOS (BENEFITS SECTION) */}
      <section id="beneficios" className="py-24 relative border-t border-white/5 bg-[#080b0f]">
        {/* Background light splash */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-[#00befc]/2 blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Highlights Header */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <span className="text-xs font-extrabold uppercase tracking-widest text-pop-green bg-[#59d533]/10 px-4 py-1.5 rounded-full select-none">
                Seus Diferenciais
              </span>
              <h2 id="benefits-section-title" className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-4 mb-6 leading-tight">
                Por que Escolher a Gency Pop?
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-8">
                Unimos excelência técnica, prazos transparentes e um design impecável focado no crescimento de negócios e atração orgânica de novos clientes.
              </p>
              
              <button
                id="benefits-cta-wa"
                onClick={speakOnWhatsAppGeneral}
                className="flex items-center gap-2 text-white bg-gradient-to-r from-pop-green to-[#359c12] hover:brightness-110 font-bold px-7 py-3.5 rounded-2xl transition-all shadow-[0_4px_20px_rgba(89,213,51,0.25)] cursor-pointer text-sm"
              >
                <Phone size={14} className="fill-current" />
                Agendar Onboarding
              </button>
            </div>

            {/* Benefits Matrix */}
            <div id="benefits-grid" className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {BENEFITS.map((benefit, idx) => (
                <BenefitItem
                  key={benefit.id}
                  benefit={benefit}
                  index={idx}
                />
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 6. PORTFÓLIO SECTION */}
      <section id="portfolio" className="py-24 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-pop-orange bg-pop-orange/10 px-4.5 py-1.5 rounded-full select-none">
                Estudo de Casos
              </span>
              <h2 id="portfolio-section-title" className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mt-4 leading-none select-none">
                Nosso Portfólio de Sucesso
              </h2>
            </div>
            <p className="text-gray-400 text-sm md:text-base max-w-md leading-relaxed mt-4 md:mt-0">
              Conheça alguns dos projetos entregues pela nossa equipe. Design estético premium e integridade técnica absoluta.
            </p>
          </div>

          <div id="portfolio-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {PROJECTS.map((project) => (
              <PortfolioCard
                key={project.id}
                project={project}
                onOpenQuote={handleOpenQuoteGeneral}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 7. DEPOIMENTOS (TESTIMONIALS SECTION) */}
      <section id="depoimentos" className="py-24 relative border-t border-white/5 bg-[#080b0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-pop-blue bg-[#00befc]/10 px-4 py-1.5 rounded-full select-none">
              Histórias de Sucesso
            </span>
            <h2 id="testimonials-section-title" className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4 leading-tight select-none">
              O que Dizem Nossos Clientes
            </h2>
            <p className="text-sm md:text-base text-gray-400">
              A satisfação dos nossos parceiros de negócios é a garantia do nosso profissionalismo. Confira relatos de projetos reais.
            </p>
          </div>

          {/* Testimonials slider / rows */}
          <div id="testimonials-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-20 relative overflow-hidden border-t border-white/5 bg-gradient-to-b from-[#0a0c10] to-[#0d121c]">
        {/* Colorful glowing spot decorations */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-pop-blue/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-pop-green/5 blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-effect p-8 md:p-14 rounded-3xl glow-card shadow-2xl flex flex-col items-center"
          >
            <span className="text-xs font-extrabold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pop-blue via-pop-green to-pop-orange bg-white/5 h-auto px-4 py-1.5 rounded-full border border-white/5 mb-6 select-none">
              Fórmula do Sucesso
            </span>
            
            <h2 id="final-cta-title" className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4 max-w-3xl">
              Pronto para levar sua empresa para outro nível?
            </h2>
            
            <p className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed mb-8">
              Solicite um orçamento sem compromisso e descubra como podemos transformar sua presença digital.
            </p>

            <button
              id="final-cta-btn"
              onClick={speakOnWhatsAppGeneral}
              className="flex items-center gap-2 bg-[#59d533] hover:bg-[#49bf26] text-white font-extrabold py-4 px-10 rounded-2xl duration-200 transition-all text-sm tracking-wide shadow-[0_4px_25px_rgba(89,213,51,0.3)] hover:shadow-[0_4px_35px_rgba(89,213,51,0.5)] hover:-translate-y-0.5 cursor-pointer"
            >
              <Phone size={15} className="fill-current" />
              Falar no WhatsApp
            </button>
          </motion.div>

        </div>
      </section>

      {/* 9. RODAPÉ (FOOTER) */}
      <footer id="contato" className="bg-[#05070a] pt-16 pb-12 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
            
            {/* Logo and brief company summary */}
            <div className="col-span-1 md:col-span-1">
              <Logo iconSize={32} />
              <p className="text-xs text-gray-400 mt-4 leading-relaxed">
                Transformando ideias em negócios digitais de sucesso com alta performance, estética e automações inteligentes.
              </p>
              
              {/* Social Media Link Icons */}
              <div className="flex items-center gap-4 mt-6">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Ir para Instagram">
                  <Instagram size={18} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Ir para Facebook">
                  <Facebook size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Ir para LinkedIn">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h6 className="text-[11px] font-extrabold uppercase tracking-widest text-[#00befc] mb-4">
                Links Rápidos
              </h6>
              <ul className="space-y-3 font-medium text-xs">
                <li>
                  <a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Início</a>
                </li>
                <li>
                  <a href="#servicos" className="text-gray-400 hover:text-white transition-colors">Serviços</a>
                </li>
                <li>
                  <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfólio Casos</a>
                </li>
                <li>
                  <a href="#beneficios" className="text-gray-400 hover:text-white transition-colors">Diferenciais</a>
                </li>
                <li>
                  <a href="#depoimentos" className="text-gray-400 hover:text-white transition-colors">Depoimentos</a>
                </li>
              </ul>
            </div>

            {/* Solutions list columns */}
            <div>
              <h6 className="text-[11px] font-extrabold uppercase tracking-widest text-pop-green mb-4">
                Nossas Soluções
              </h6>
              <ul className="space-y-3 font-medium text-xs text-gray-400">
                <li>Sites Institucionais</li>
                <li>Lojas Virtuais (E-commerce)</li>
                <li>Landing Pages de Alta Conversão</li>
                <li>Automação de Processos</li>
                <li>Integrações com IA (Ex: Chatbots)</li>
              </ul>
            </div>

            {/* Contact details */}
            <div className="flex flex-col items-start gap-3">
              <h6 className="text-[11px] font-extrabold uppercase tracking-widest text-pop-orange mb-4">
                Contato Comercial
              </h6>
              <a
                href="https://api.whatsapp.com/send?phone=5562999977530"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 group text-sm font-semibold text-white hover:text-[#59d533] duration-150 transition-all cursor-pointer"
              >
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 group-hover:bg-[#59d533]/10 transition-colors">
                  <Phone size={15} />
                </div>
                <span>(62) 99997-7530</span>
              </a>

              <a
                href="mailto:gencypop.suporteaocliente@gmail.com"
                className="flex items-center gap-2 group text-sm font-semibold text-white hover:text-[#00befc] duration-150 transition-all cursor-pointer mt-1"
              >
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 group-hover:bg-[#00befc]/10 transition-colors">
                  <Mail size={15} />
                </div>
                <span className="break-all text-xs">gencypop.suporteaocliente@gmail.com</span>
              </a>

              <div className="text-xs text-gray-400 leading-relaxed mt-2 select-none">
                <span className="block font-bold text-gray-300">Horário de Atendimento:</span>
                Segunda a Sábado - 08h às 20h
              </div>
            </div>

          </div>

          {/* Bottom Copyright declaration */}
          <div className="border-t border-white/5 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-500">
            <p className="select-none text-center md:text-left">
              © GENCY POP - Todos os direitos reservados.
            </p>
            
            <p className="mt-2 md:mt-0 select-none text-center md:text-right">
              Desenvolvido com excelência tecnológica premium.
            </p>
          </div>

        </div>
      </footer>

      {/* Render Quote Modal overlay element */}
      <QuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedService={selectedService}
      />

    </div>
  );
}
