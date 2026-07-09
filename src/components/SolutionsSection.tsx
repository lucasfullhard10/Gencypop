import React from 'react';
import { motion } from 'motion/react';
import { 
  Check, 
  ShieldCheck, 
  Sparkles, 
  Rocket, 
  CheckCircle,
  Smartphone,
  Search,
  MessageSquare,
  Palette,
  Zap,
  Lock,
  Headphones,
  LayoutDashboard,
  ShoppingBag,
  Cpu
} from 'lucide-react';

interface SolutionsSectionProps {
  onSelectSolution: (solutionName: string, placeholderGoal: string) => void;
  speakOnWhatsApp: () => void;
}

export interface BenefitDetail {
  text: string;
  iconType: 'responsive' | 'seo' | 'whatsapp' | 'design' | 'performance' | 'security' | 'support' | 'dashboard';
}

export interface SolutionPackage {
  id: string;
  name: string;
  price: string;
  isPopular?: boolean;
  badge?: string;
  badgeStyle?: string;
  medal: string;
  medalColor: string;
  description: string;
  benefits: BenefitDetail[];
  goalPlaceholder: string;
  cardStyle: string;
}

const PACKAGES: SolutionPackage[] = [
  {
    id: 'landing-page',
    name: 'Plano Landing Page',
    price: 'R$ 497',
    medal: '🥉',
    medalColor: 'text-[#cd7f32]',
    cardStyle: 'border-white/5 hover:border-[#cd7f32]/40 hover:shadow-[0_0_30px_rgba(205,127,50,0.12)] bg-[#0f1319]/40',
    description: 'Ideal para empresas e profissionais que desejam divulgar seus serviços e captar clientes.',
    goalPlaceholder: 'Olá! Gostaria de um orçamento para o Plano Landing Page de R$ 497. Meu objetivo é...',
    benefits: [
      { text: 'Design Exclusivo', iconType: 'design' },
      { text: 'Site 100% Responsivo', iconType: 'responsive' },
      { text: 'Integração WhatsApp', iconType: 'whatsapp' },
      { text: 'SEO Básico Otimizado', iconType: 'seo' },
      { text: 'Alta Performance', iconType: 'performance' },
      { text: 'Segurança SSL inclusa', iconType: 'security' },
      { text: 'Suporte especializado', iconType: 'support' }
    ]
  },
  {
    id: 'one-page-premium',
    name: 'Plano Site One Page Premium',
    price: 'R$ 697',
    medal: '🥈',
    medalColor: 'text-slate-300',
    cardStyle: 'border-white/5 hover:border-slate-400/30 hover:shadow-[0_0_30px_rgba(148,163,184,0.12)] bg-[#0f1319]/40',
    description: 'Ideal para negócios locais e prestadores de serviços que buscam uma página única moderna de altíssima conversão.',
    goalPlaceholder: 'Olá! Gostaria de um orçamento para o Plano Site One Page Premium de R$ 697. Meu objetivo é...',
    benefits: [
      { text: 'Design Exclusivo Premium', iconType: 'design' },
      { text: 'Site 100% Responsivo', iconType: 'responsive' },
      { text: 'Integração WhatsApp + Botões', iconType: 'whatsapp' },
      { text: 'SEO Avançado Local', iconType: 'seo' },
      { text: 'Alta Performance', iconType: 'performance' },
      { text: 'Segurança SSL inclusa', iconType: 'security' },
      { text: 'Suporte especializado', iconType: 'support' }
    ]
  },
  {
    id: 'site-institucional',
    name: 'Plano Site Institucional',
    price: 'R$ 997',
    medal: '🥇',
    medalColor: 'text-amber-400',
    cardStyle: 'border-white/5 hover:border-amber-400/30 hover:shadow-[0_0_30px_rgba(251,191,36,0.12)] bg-[#0f1319]/40',
    description: 'Ideal para empresas consolidadas que precisam de uma estrutura completa com múltiplas seções para transmitir autoridade.',
    goalPlaceholder: 'Olá! Gostaria de um orçamento para o Plano Site Institucional de R$ 997. Meu objetivo é...',
    benefits: [
      { text: 'Design Corporativo Exclusivo', iconType: 'design' },
      { text: 'Site 100% Responsivo', iconType: 'responsive' },
      { text: 'Integração WhatsApp de Vendas', iconType: 'whatsapp' },
      { text: 'SEO Técnico Completo', iconType: 'seo' },
      { text: 'Alta Performance e Estabilidade', iconType: 'performance' },
      { text: 'Segurança SSL Premium', iconType: 'security' },
      { text: 'Suporte estendido', iconType: 'support' },
      { text: 'Painel Administrativo completo', iconType: 'dashboard' }
    ]
  },
  {
    id: 'site-profissional',
    name: 'Plano Site Profissional',
    price: 'R$ 1.297',
    medal: '⭐',
    medalColor: 'text-[#00befc]',
    isPopular: true,
    badge: '⭐ MAIS VENDIDO',
    badgeStyle: 'from-[#00befc] to-blue-600 text-white shadow-[0_0_15px_rgba(0,190,252,0.4)] animate-pulse',
    cardStyle: 'border-[#00befc]/50 bg-[#0c1622]/90 shadow-[0_0_40px_rgba(0,190,252,0.18)] hover:border-[#00befc] scale-[1.02] lg:scale-[1.04] z-10 ring-2 ring-[#00befc]/20',
    description: 'Nossa solução campeã de vendas. Desenvolvimento completo com foco total em posicionamento, conversão e credibilidade.',
    goalPlaceholder: 'Olá! Gostaria de um orçamento para o Plano Site Profissional de R$ 1.297 (Mais Vendido). Meu objetivo é...',
    benefits: [
      { text: 'Design Premium Ultra Exclusivo', iconType: 'design' },
      { text: 'Site 100% Responsivo Premium', iconType: 'responsive' },
      { text: 'Integração WhatsApp & Redes', iconType: 'whatsapp' },
      { text: 'SEO Avançado (Apareça no Google)', iconType: 'seo' },
      { text: 'Alta Performance Ultra Rápida', iconType: 'performance' },
      { text: 'Segurança Máxima Ativa', iconType: 'security' },
      { text: 'Suporte VIP Exclusivo 60 dias', iconType: 'support' },
      { text: 'Painel Administrativo Intuitivo', iconType: 'dashboard' }
    ]
  },
  {
    id: 'loja-virtual',
    name: 'Plano Loja Virtual',
    price: 'R$ 2.497',
    medal: '🛍️',
    medalColor: 'text-pink-400',
    cardStyle: 'border-white/5 hover:border-pink-400/30 hover:shadow-[0_0_30px_rgba(244,114,182,0.12)] bg-[#0f1319]/40',
    description: 'Ideal para varejistas e lojistas que querem vender online de forma profissional com catálogo integrado e alta segurança.',
    goalPlaceholder: 'Olá! Gostaria de um orçamento para o Plano Loja Virtual de R$ 2.497. Meu objetivo é...',
    benefits: [
      { text: 'Design E-commerce Exclusivo', iconType: 'design' },
      { text: 'Responsivo Inteligente', iconType: 'responsive' },
      { text: 'Integração WhatsApp & Carrinho', iconType: 'whatsapp' },
      { text: 'SEO focado em produtos', iconType: 'seo' },
      { text: 'Alta Performance de checkout', iconType: 'performance' },
      { text: 'Segurança SSL e Meios Pagamento', iconType: 'security' },
      { text: 'Suporte & Treinamento inicial', iconType: 'support' },
      { text: 'Painel Administrativo completo', iconType: 'dashboard' }
    ]
  },
  {
    id: 'sistema-web',
    name: 'Sistema Web Personalizado',
    price: 'A partir de R$ 3.500',
    medal: '💻',
    medalColor: 'text-emerald-400',
    cardStyle: 'border-white/5 hover:border-emerald-400/30 hover:shadow-[0_0_30px_rgba(52,211,153,0.12)] bg-[#0f1319]/40',
    description: 'Desenvolvimento sob demanda de plataformas complexas, SaaS, dashboards e sistemas internos. O valor varia conforme a complexidade do projeto.',
    goalPlaceholder: 'Olá! Gostaria de falar sobre o Sistema Web Personalizado (A partir de R$ 3.500). Meu projeto envolve...',
    benefits: [
      { text: 'Design e UI/UX Sob Medida', iconType: 'design' },
      { text: 'Responsivo de alta complexidade', iconType: 'responsive' },
      { text: 'Integração de APIs de Terceiros', iconType: 'whatsapp' },
      { text: 'SEO Estrutural e Arquitetura', iconType: 'seo' },
      { text: 'Alta Performance e Escalável', iconType: 'performance' },
      { text: 'Segurança Blindada Completa', iconType: 'security' },
      { text: 'Suporte contínuo sob medida', iconType: 'support' },
      { text: 'Painel Administrativo Robusto', iconType: 'dashboard' }
    ]
  }
];

const renderBenefitIcon = (iconType: string) => {
  switch (iconType) {
    case 'responsive':
      return <Smartphone size={16} className="text-[#00befc] flex-shrink-0 mt-0.5 stroke-[2.2]" />;
    case 'seo':
      return <Search size={16} className="text-indigo-400 flex-shrink-0 mt-0.5 stroke-[2.2]" />;
    case 'whatsapp':
      return <MessageSquare size={16} className="text-[#59d533] flex-shrink-0 mt-0.5 stroke-[2.2]" />;
    case 'design':
      return <Palette size={16} className="text-pink-400 flex-shrink-0 mt-0.5 stroke-[2.2]" />;
    case 'performance':
      return <Zap size={16} className="text-yellow-400 flex-shrink-0 mt-0.5 stroke-[2.2] animate-pulse" />;
    case 'security':
      return <Lock size={16} className="text-red-400 flex-shrink-0 mt-0.5 stroke-[2.2]" />;
    case 'support':
      return <Headphones size={16} className="text-purple-400 flex-shrink-0 mt-0.5 stroke-[2.2]" />;
    case 'dashboard':
      return <LayoutDashboard size={16} className="text-amber-400 flex-shrink-0 mt-0.5 stroke-[2.2]" />;
    default:
      return <Check size={16} className="text-emerald-400 flex-shrink-0 mt-0.5 stroke-[2.2]" />;
  }
};

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ 
  onSelectSolution,
  speakOnWhatsApp
}) => {
  return (
    <section id="solucoes-profissionais" className="py-24 relative border-t border-white/5 bg-[#07090d]/80">
      {/* Decorative Blur Ambiance Lights */}
      <div className="absolute top-[10%] right-[10%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-pop-blue/10 via-transparent to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-[#59d533]/8 via-transparent to-transparent blur-[130px] pointer-events-none" />
      <div className="absolute top-[50%] left-[40%] w-[30vw] h-[30vw] rounded-full bg-gradient-to-tr from-pop-orange/5 via-transparent to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title and subheader */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full bg-[#00befc]/8 border border-[#00befc]/15 text-[#00befc] text-xs font-bold tracking-widest uppercase mb-4"
          >
            <Rocket size={13} className="animate-bounce" />
            NOSSOS PLANOS ATIVOS
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            🚀 Soluções Digitais Para Impulsionar Sua Empresa
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            Ajudamos empresas a conquistar mais visibilidade, credibilidade e clientes através da internet.
          </p>
        </div>

        {/* 6 Plans Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg, idx) => {
            const isHighlight = pkg.isPopular;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: isHighlight ? -4 : -8 }}
                className={`group flex flex-col justify-between p-7 rounded-3xl border transition-all duration-300 relative overflow-hidden ${pkg.cardStyle}`}
              >
                {/* Visual Highlight background gloss for popular plan */}
                {isHighlight && (
                  <div className="absolute inset-0 bg-gradient-to-b from-[#00befc]/5 via-transparent to-transparent pointer-events-none" />
                )}

                <div>
                  {/* Badge & Medal indicator top row */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-2xl ${pkg.medalColor} select-none`} role="img" aria-label="medal">
                      {pkg.medal}
                    </span>
                    {pkg.badge && (
                      <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full bg-gradient-to-r uppercase tracking-wider ${pkg.badgeStyle}`}>
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  {/* Package Name */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 tracking-wide group-hover:text-[#00befc] transition-colors duration-200">
                    {pkg.name}
                  </h3>

                  {/* Brief descriptor text */}
                  <p className="text-xs text-gray-400 leading-relaxed mb-5 min-h-[40px]">
                    {pkg.description}
                  </p>

                  {/* Investment Price Box */}
                  <div className="my-5 p-4 rounded-2xl bg-white/3 border border-white/5 group-hover:bg-white/5 transition-all duration-300">
                    <span className="text-gray-400 text-[10px] uppercase font-bold tracking-wider block mb-1">Investimento único</span>
                    <div className="flex items-baseline gap-1.5">
                      {pkg.price.toLowerCase().includes('a partir') ? (
                        <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
                          {pkg.price}
                        </span>
                      ) : (
                        <>
                          <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                            {pkg.price}
                          </span>
                          <span className="text-gray-400 text-xs font-semibold">/projeto</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Features & Benefits included list */}
                  <div className="border-t border-white/5 pt-5 mb-8">
                    <div className="text-[10px] uppercase font-bold text-[#00befc] tracking-widest mb-4">Recursos & Benefícios:</div>
                    <ul className="space-y-3">
                      {pkg.benefits.map((ben, index) => (
                        <li key={index} className="flex items-start gap-3 text-xs text-gray-200 leading-relaxed group/item">
                          {renderBenefitIcon(ben.iconType)}
                          <span className="font-medium group-hover/item:text-white transition-colors">{ben.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => onSelectSolution(pkg.name, pkg.goalPlaceholder)}
                  className={`w-full py-3.5 px-5 rounded-2xl text-xs font-extrabold tracking-wider uppercase text-center cursor-pointer transition-all duration-300 ${
                    isHighlight 
                      ? 'bg-[#00befc] hover:bg-[#009ecc] text-white shadow-[0_4px_20px_rgba(0,190,252,0.35)] hover:shadow-[0_4px_30px_rgba(0,190,252,0.5)] border border-transparent'
                      : 'bg-white/5 hover:bg-gradient-to-r hover:from-[#00befc] hover:to-blue-600 border border-white/10 hover:border-transparent text-white'
                  }`}
                >
                  Solicitar Orçamento
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* 🛡 GARANTIA GENCYPOP SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 p-8 md:p-10 rounded-3xl bg-[#0f1319]/40 border border-white/5 relative overflow-hidden"
        >
          {/* Subtle background colored circle blur */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-48 bg-emerald-500/5 rounded-full blur-[80px]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Guarantee Title and Description */}
            <div className="lg:col-span-7">
              <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-pop-green bg-[#59d533]/8 px-3 py-1 rounded-full w-fit mb-4">
                <ShieldCheck size={14} />
                Garantia GencyPop
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                Segurança, Confiança e Entrega de Altíssimo Padrão
              </h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Todos os nossos projetos são desenvolvidos com acompanhamento personalizado, revisão minuciosa, aprovação completa antes da publicação e suporte especializado inicial para garantir uma entrega profissional impecável.
              </p>
            </div>

            {/* List of features */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Atendimento personalizado',
                'Transparência em todas as etapas',
                'Aprovação antes da publicação',
                'Suporte inicial incluso'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/2 border border-white/3">
                  <CheckCircle size={16} className="text-pop-green flex-shrink-0" />
                  <span className="text-xs font-semibold text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* SEÇÃO FINAL DO ESCOPO */}
        <div className="mt-20 border-t border-white/5 pt-16 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
            Sua empresa está pronta para crescer na internet?
          </h3>
          <p className="text-sm sm:text-base text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            A GencyPop ajuda empresas a conquistar mais clientes através de sites profissionais, Google Meu Negócio, landing pages e soluções digitais modernas.
          </p>

          <button
            onClick={speakOnWhatsApp}
            className="flex items-center gap-2.5 mx-auto bg-[#59d533] hover:bg-[#49bf26] text-white font-extrabold py-4 px-10 rounded-2xl duration-200 transition-all text-sm tracking-wide shadow-[0_4px_25px_rgba(89,213,51,0.3)] hover:shadow-[0_4px_35px_rgba(89,213,51,0.5)] hover:-translate-y-0.5 cursor-pointer"
          >
            <Rocket size={16} />
            🚀 Falar com um Especialista
          </button>
        </div>

      </div>
    </section>
  );
};
