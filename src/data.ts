import { Service, Benefit, Project, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'ct-sites',
    name: 'Criação de Sites Profissionais',
    slug: 'criacao-de-sites',
    shortDesc: 'Desenvolvimento sob medida de portais e plataformas web de alta velocidade e escalabilidade.',
    longDesc: 'Construímos websites de altíssimo impacto visual que convertem visitantes em clientes de forma contínua. Foco total em desempenho de carregamento e experiência do usuário diferenciada.',
    iconName: 'Laptop',
    badge: 'Mais Desejado',
    placeholderText: 'Quais páginas deseja no site? Descreva o principal objetivo do seu negócio.',
    features: ['Código limpo e otimizado', 'Design exclusivo e moderno', 'Estrutura focada em conversão', 'Configurado para todos os dispositivos']
  },
  {
    id: 'ecommerce',
    name: 'Lojas Virtuais (E-commerce)',
    slug: 'lojas-virtuais',
    shortDesc: 'Lojas virtuais elegantes e seguras preparadas para faturar alto e otimizar conversões.',
    longDesc: 'Implementamos plataformas de comércio eletrônico completas, integradas com meios de pagamento modernos (Pix, Cartão, boleto) e sistemas de frete automatizados. Design fluido focado em aumentar seu ticket médio.',
    iconName: 'ShoppingBag',
    badge: 'Alta Conversão',
    placeholderText: 'Como deseja sua loja virtual? Quais produtos irá vender e se possui referências?',
    features: ['Checkout transparente integrado', 'Gestão fácil de produtos', 'Layout otimizado para celulares', 'Estatísticas de vendas detalhadas']
  },
  {
    id: 'institutional',
    name: 'Sites Institucionais',
    slug: 'sites-institucionais',
    shortDesc: 'Sua marca com presença digital sólida, transmitindo extrema autoridade de mercado.',
    longDesc: 'Criamos sites empresariais que funcionam como os melhores cartões de visita corporativos do mundo. Ideal para consultorias, indústrias, prestadores de serviços e holdings.',
    iconName: 'Building2',
    placeholderText: 'Quais seções ou páginas gostaria de incluir? (ex: Quem somos, Serviços, Blog, Contato...)',
    features: ['Sessões estruturadas estrategicamente', 'SEO de primeira qualidade', 'Área de contato e captação rápida', 'Carregamento instantâneo']
  },
  {
    id: 'landing-pages',
    name: 'Landing Pages de Alta Conversão',
    slug: 'landing-pages',
    shortDesc: 'Páginas de vendas persuasivas construídas milimetricamente para campanhas de anúncios pagos.',
    longDesc: 'Desenvolvemos páginas de destino otimizadas com copywriting focado na dor do cliente, carregamento recorde (abaixo de 1.5s) e botões CTA estrategicamente distribuídos para maximizar seu tráfego pago (Google Ads/Meta Ads).',
    iconName: 'Compass',
    badge: 'Foco em Vendas',
    placeholderText: 'Qual produto ou serviço você vai anunciar nesta página? Possui material ou referência?',
    features: ['Copywriting direcionado', 'Layout otimizado para celulares', 'Integração de pixel de rastreio', 'Formulários rápidos e dinâmicos']
  },
  {
    id: 'automations',
    name: 'Automação de Processos',
    slug: 'automacoes',
    shortDesc: 'Elimine tarefas manuais repetitivas e conecte seus sistemas ao WhatsApp e CRM de forma autônoma.',
    longDesc: 'Desenvolvemos bots inteligentes, sistemas de integração de APIs e fluxos de automação de vendas e atendimento. Sua equipe foca no que importa, enquanto a tecnologia cuida do resto.',
    iconName: 'Zap',
    badge: 'Produtividade',
    placeholderText: 'Quais tarefas quer automatizar hoje? (ex: Enviar mensagem no WhatsApp quando o cliente assina, atualizar CRM...)',
    features: ['Integração com n8n, Make ou Webhooks', 'Disparos instantâneos no WhatsApp', 'Sincronização com planilhas e CRMs', 'Notificações inteligentes']
  },
  {
    id: 'ai-integrations',
    name: 'Integrações com IA',
    slug: 'integracoes-ia',
    shortDesc: 'Sistemas inteligentes com poder cognitivo da IA conectado às suas bases de dados e canais.',
    longDesc: 'Implementamos inteligência artificial (como Gemini, OpenAI) diretamente para responder clientes, triar leads, resumir informações ou auxiliar na criação de conteúdos dinâmicos em sua plataforma.',
    iconName: 'Cpu',
    badge: 'Inovação',
    placeholderText: 'Como você imagina a IA trabalhando na sua empresa? (ex: Chatbot inteligente no WhatsApp, assistente web...)',
    features: ['Conexão com LLMs comerciais', 'Treinamento com seus dados reais', 'Atendimento humanizado 24/7', 'Automação cognitiva avançada']
  },
  {
    id: 'blogs',
    name: 'Blogs & Portais de Conteúdo',
    slug: 'blogs',
    shortDesc: 'Portais rápidos otimizados para receber milhares de visitantes e monetizar seus conteúdos.',
    longDesc: 'Desenvolvemos blogs modernos com foco em legibilidade de leitura, facilidade extrema de postagem de novos artigos e design estruturado para anúncios e leads de captura.',
    iconName: 'BookOpen',
    placeholderText: 'Sobre qual nicho será o seu blog? Deseja sistema de newsletter ou anúncios?',
    features: ['Painel administrativo intuitivo', 'Estrutura otimizada para SEO', 'Tempos mínimos de renderização', 'Integração com mídias sociais']
  },
  {
    id: 'portfolios',
    name: 'Portfólios Profissionais',
    slug: 'portfolios',
    shortDesc: 'Apresentação impactante de seus melhores trabalhos em uma galeria interativa premium.',
    longDesc: 'Seja para arquitetos, designers, programadores ou fotógrafos. Construímos uma experiência visual fluida que conta sua história profissional por meio de uma curadoria imersiva.',
    iconName: 'UserCheck',
    placeholderText: 'Quais tipos de projetos deseja expor? Deseja galeria de fotos ou vídeos?',
    features: ['Animações fluidas de galeria', 'Seção interativa de biografia', 'Fácil atualização de arquivos', 'Integrações de mídias de alta definição']
  },
  {
    id: 'gmb',
    name: 'Google Meu Negócio & SEO Local',
    slug: 'google-meu-negocio',
    shortDesc: 'Apareça no topo das buscas do Google na sua região e conquiste clientes organicamente.',
    longDesc: 'Configuramos, otimizamos e posicionamos seu perfil do Google Meu Negócio / Maps. Através de técnicas de SEO focado, garantimos que sua empresa seja encontrada por quem está ativamente buscando seus serviços na sua cidade.',
    iconName: 'MapPin',
    placeholderText: 'Qual o ramo de atividade da sua empresa de nível regional e em qual cidade atua?',
    features: ['Otimização completa de palavras-chave', 'Estratégia para atração de avaliações', 'Geolocalização estratégica no Maps', 'Visual altamente profissional']
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: 'fast-delivery',
    title: 'Entrega Rápida',
    description: 'Nossa metodologia ágil de onboarding e setup garante projetos de alta excelência entregues no prazo acordado.',
    iconName: 'Activity'
  },
  {
    id: 'pro-design',
    title: 'Design Profissional',
    description: 'Unimos estética inovadora à usabilidade premium. Interfaces exclusivas que prendem a atenção e criam desejo pelos seus produtos.',
    iconName: 'Palette'
  },
  {
    id: 'responsive',
    title: 'Sites Responsivos',
    description: 'Sua marca renderizada perfeitamente em celulares, tablets, notebooks e smart TVs. Adaptação fluida garantida.',
    iconName: 'Smartphone'
  },
  {
    id: 'smart-integration',
    title: 'Integrações Inteligentes',
    description: 'Sistemas conectados com meios de pagamento, painéis administrativos, CRMs, chat ao vivo e ferramentas analíticas.',
    iconName: 'Share2'
  },
  {
    id: 'automations-b',
    title: 'Automações Avançadas',
    description: 'Automatizamos fluxos de e-mails, alertas e mensagens recorrentes de WhatsApp para otimizar sua taxa de conversão.',
    iconName: 'Workflow'
  },
  {
    id: 'support',
    title: 'Suporte Especializado',
    description: 'Equipe pronta para te auxiliar com manutenção, atualizações de segurança e otimizações contínuas de seu ecosistema digital.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'seo-optimized',
    title: 'SEO Otimizado',
    description: 'Estruturação semântica, meta tags estratégicas e otimização de velocidade para garantir indexação privilegiada nos buscadores.',
    iconName: 'Award'
  },
  {
    id: 'high-performance',
    title: 'Alta Performance',
    description: 'Atinja nota máxima no Google Mobile/Desktop PageSpeed Insights. Performance máxima em desempenho de renderização.',
    iconName: 'Gauge'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Aura Moda Fina',
    category: 'Loja Virtual',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    description: 'Plataforma e-commerce para marca de vestuário de alto padrão. Integração de rastreamento avançado de pedidos, Pix dinâmico, checkout sem fricção e filtros inteligentes.',
    tags: ['React', 'Automação Pix', 'UX Otimizado', 'Mobile First'],
    link: 'https://aura-fashion.example.com'
  },
  {
    id: 'proj-2',
    title: 'Apex Capital',
    category: 'Site Empresarial',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    description: 'Portal institucional premium para assessoria de investimentos private banking. Linhas visuais sofisticadas, área de simulação de rendimentos e marcação integrada no WhatsApp.',
    tags: ['Site Institucional', 'Integrações', 'SEO Top 1', 'Lead Box'],
    link: 'https://apex-capital.example.com'
  },
  {
    id: 'proj-3',
    title: 'Lyra Arquitetura',
    category: 'Portfólio',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'Showcase imersivo dos projetos do escritório paulista de arquitetura e design de interiores. Transições ultra fluidas em grid cinemático de alto luxo.',
    tags: ['Animação UI', 'Imagens Otimizadas', 'Carregamento < 1s', 'Minimalista'],
    link: 'https://lyra-arch.example.com'
  },
  {
    id: 'proj-4',
    title: 'Prospecta SaaS',
    category: 'Landing Page',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    description: 'Landing page focada em captação ativa de leads corporativos para plataforma internacional de dados B2B. Aumento demonstrado de 34% na taxa de conversão.',
    tags: ['Landing Page', 'Copywriting', 'Pixel Meta Ads', 'Autocaptura CRM'],
    link: 'https://prospecta-saas.example.com'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Fabiano Albuquerque',
    role: 'CEO & Fundador',
    company: 'Albuquerque Investimentos',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    content: 'A Gency Pop superou todas as nossas expectativas. Fecharam nosso site institucional e integraram com nosso funil. Nossa captação no WhatsApp cresceu 180% na primeira semana após o lançamento!',
    rating: 5
  },
  {
    id: 't-2',
    name: 'Mariana Gontijo',
    role: 'Diretora de Marca',
    company: 'Solare Semijoias',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    content: 'Extremamente profissionais. A nossa loja virtual carrega em milissegundos no celular. A facilidade para gerenciar nossos estoques e a agilidade deles no suporte pós-venda é incrível.',
    rating: 5
  },
  {
    id: 't-3',
    name: 'Henrique Castanheda',
    role: 'Sócio Gestor',
    company: 'Castanheda Advocacia',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    content: 'O design premium do nosso site transmite o exato valor que queríamos transpassar aos nossos clientes corporativos. Profissionalismo ímpar e entrega rigorosamente no prazo.',
    rating: 5
  },
  {
    id: 't-4',
    name: 'Juliana Vasconcelos',
    role: 'Coordenadora de Operações',
    company: 'LogExpress Brasil',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    content: 'As automações que a Gency Pop criou para nosso comercial pelo WhatsApp nos pouparam horas diárias de trabalho redundante. Agora nossos vendedores só focam nos leads realmente qualificados pela IA.',
    rating: 5
  }
];
