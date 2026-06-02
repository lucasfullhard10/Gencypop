import React from 'react';
import { motion } from 'motion/react';
import { 
  Check, 
  ShieldCheck, 
  Sparkles, 
  Award, 
  Flame, 
  Compass, 
  Rocket, 
  CheckCircle,
  HelpCircle,
  Smartphone,
  Zap,
  Globe,
  TrendingUp
} from 'lucide-react';
import { Service } from '../types';

interface SolutionsSectionProps {
  onSelectSolution: (solutionName: string, placeholderGoal: string) => void;
  speakOnWhatsApp: () => void;
}

export interface SolutionPackage {
  id: string;
  name: string;
  badge?: string;
  badgeStyle?: string;
  medal: string;
  medalColor: string;
  description: string;
  included: string[];
  benefits: string[];
  goalPlaceholder: string;
  cardAccentColor: string;
}

const PACKAGES: SolutionPackage[] = [
  {
    id: 'start-google',
    name: 'START GOOGLE',
    medal: '🥉',
    medalColor: 'text-[#cd7f32]',
    cardAccentColor: 'group-hover:border-[#cd7f32]/45 group-hover:shadow-[0_0_30px_rgba(205,127,50,0.15)]',
    description: 'Ideal para empresas que desejam fortalecer sua presença no Google e facilitar o contato com novos clientes.',
    goalPlaceholder: 'Quais os principais serviços e horários da sua empresa para cadastrarmos no Google?',
    included: [
      'Configuração completa do Perfil da Empresa no Google',
      'Configuração do Google Maps',
      'Cadastro de serviços',
      'Configuração de horários',
      'Integração com WhatsApp',
      'Descrição profissional da empresa',
      'Inserção de fotos',
      'Orientação para obtenção de avaliações'
    ],
    benefits: [
      'Mais visibilidade local',
      'Mais contatos pelo WhatsApp',
      'Melhor posicionamento no Google Maps',
      'Mais credibilidade para a empresa'
    ]
  },
  {
    id: 'presenca-digital',
    name: 'PRESENÇA DIGITAL',
    medal: '🥈',
    medalColor: 'text-slate-300',
    cardAccentColor: 'group-hover:border-[#00befc]/45 group-hover:shadow-[0_0_30px_rgba(0,190,252,0.15)]',
    description: 'Ideal para empresas que precisam apresentar seus serviços de forma profissional na internet.',
    goalPlaceholder: 'Descreva a sua ideia de Landing Page, de quais seções e links sociais você precisa.',
    included: [
      'Landing Page Profissional',
      'Design moderno e responsivo',
      'Botão de WhatsApp',
      'Formulário de contato',
      'Integração com redes sociais',
      'Publicação da página'
    ],
    benefits: [
      'Mais profissionalismo',
      'Divulgação simplificada',
      'Melhor apresentação da empresa',
      'Captação de novos contatos'
    ]
  },
  {
    id: 'empresa-online',
    name: 'EMPRESA ONLINE',
    medal: '🥇',
    medalColor: 'text-amber-400',
    badge: '⭐ Mais Procurado',
    badgeStyle: 'from-amber-400 to-orange-500 text-white',
    cardAccentColor: 'group-hover:border-amber-400/50 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]',
    description: 'Ideal para empresas que desejam ter um site profissional para fortalecer sua marca.',
    goalPlaceholder: 'Quais páginas e galerias você deseja incluir no seu novo site profissional?',
    included: [
      'Página Inicial',
      'Sobre a Empresa',
      'Página de Serviços',
      'Galeria de Fotos',
      'Página de Contato',
      'Integração com WhatsApp',
      'SEO Básico',
      'Site responsivo'
    ],
    benefits: [
      'Presença digital profissional',
      'Mais autoridade',
      'Empresa disponível 24 horas',
      'Melhor experiência para clientes'
    ]
  },
  {
    id: 'growth',
    name: 'GROWTH',
    medal: '🏆',
    medalColor: 'text-emerald-400',
    badge: '🔥 Solução Completa',
    badgeStyle: 'from-[#59d533] to-[#00befc] text-white',
    cardAccentColor: 'group-hover:border-emerald-400/50 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]',
    description: 'Solução completa para empresas que desejam acelerar seu crescimento digital.',
    goalPlaceholder: 'Como deseja estruturar o seu projeto de Growth e funil de conversão no WhatsApp?',
    included: [
      'Tudo do Plano Empresa Online',
      'Configuração Google Meu Negócio',
      'SEO Básico',
      'Formulários personalizados',
      'Integração com WhatsApp',
      'Integração com redes sociais',
      'Estrutura otimizada para geração de contatos'
    ],
    benefits: [
      'Presença digital completa',
      'Mais visibilidade',
      'Mais autoridade',
      'Mais oportunidades de negócio'
    ]
  }
];

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ 
  onSelectSolution,
  speakOnWhatsApp
}) => {
  return (
    <section id="solucoes-profissionais" className="py-24 relative border-t border-white/5 bg-[#07090d]/60">
      {/* Decorative Ambiance Lights */}
      <div className="absolute top-[10%] right-[15%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-tr from-pop-blue/5 via-transparent to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[15%] left-[5%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-pop-green/5 via-transparent to-transparent blur-[120px] pointer-events-none" />

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
            Soluções Profissionais Ativas
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            🚀 Soluções Digitais Para Impulsionar Sua Empresa
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            Ajudamos empresas a conquistar mais visibilidade, credibilidade e clientes através da internet.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PACKAGES.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group flex flex-col justify-between p-6 rounded-3xl bg-[#0f1319]/50 border border-white/5 hover:bg-[#0f1319]/90 duration-300 transition-all overflow-hidden ${pkg.cardAccentColor}`}
            >
              <div>
                {/* Badge and Medal indicator top row */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-2xl ${pkg.medalColor} select-none`} role="img" aria-label="medal">
                    {pkg.medal}
                  </span>
                  {pkg.badge && (
                    <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-gradient-to-r uppercase tracking-wider ${pkg.badgeStyle} shadow-sm`}>
                      {pkg.badge}
                    </span>
                  )}
                </div>

                {/* Pacakge name */}
                <h3 className="text-xl font-bold text-white mb-2 tracking-wide group-hover:text-[#00befc] transition-colors">
                  {pkg.name}
                </h3>

                {/* Brief descriptor text */}
                <p className="text-xs text-gray-400 leading-relaxed mb-6">
                  {pkg.description}
                </p>

                {/* Features included list */}
                <div className="border-t border-white/5 pt-4 mb-6">
                  <div className="text-[10px] uppercase font-bold text-[#00befc] tracking-widest mb-3">O que está incluso:</div>
                  <ul className="space-y-2">
                    {pkg.included.map((inc, index) => (
                      <li key={index} className="flex items-start gap-2 text-xs text-gray-300 leading-relaxed">
                        <Check size={14} className="text-pop-green flex-shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Core Benefits list */}
                <div className="border-t border-white/5 pt-4 mb-8">
                  <div className="text-[10px] uppercase font-bold text-pop-green tracking-widest mb-3">Principais Benefícios:</div>
                  <ul className="space-y-2">
                    {pkg.benefits.map((ben, index) => (
                      <li key={index} className="flex items-start gap-2 text-xs text-gray-400 leading-relaxed">
                        <CheckCircle size={13} className="text-sky-400 flex-shrink-0 mt-0.5" />
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectSolution(pkg.name, pkg.goalPlaceholder)}
                className="w-full py-3 px-5 rounded-xl text-xs font-bold tracking-wider uppercase text-center cursor-pointer transition-all border border-white/10 hover:border-transparent bg-white/2 hover:bg-gradient-to-r hover:from-pop-blue hover:to-[#0072b5] text-white hover:shadow-[0_4px_15px_rgba(0,190,252,0.25)]"
              >
                Solicitar Orçamento
              </button>
            </motion.div>
          ))}
        </div>

        {/* 🛡 GARANTIA GENCYPOP SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 p-8 md:p-10 rounded-3xl bg-[#0f1319]/40 border border-white/5 relative overflow-hidden glow-card"
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
                Todos os nossos projetos são minuciosamente desenvolvidos com acompanhamento personalizado, revisão de layout, aprovação detalhada antes da publicação e suporte especializado inicial para garantir uma entrega profissional de extrema excelência.
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
