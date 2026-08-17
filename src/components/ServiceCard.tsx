import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  BookOpen,
  Building2,
  Compass,
  Cpu,
  HelpCircle,
  Laptop,
  MapPin,
  ShoppingBag,
  UserCheck,
  Zap,
  type LucideIcon
} from 'lucide-react';
import { Service } from '../types';
import { ProjectPreview } from './ProjectPreview';

const SERVICE_ICONS: Record<string, LucideIcon> = {
  BookOpen,
  Building2,
  Compass,
  Cpu,
  Laptop,
  MapPin,
  ShoppingBag,
  UserCheck,
  Zap
};

interface ServiceCardProps {
  service: Service;
  onSelect: (service: Service) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect }) => {
  // Safe helper to dynamically retrieve Lucide Icons
  const renderIcon = (iconName: string) => {
    const IconComponent = SERVICE_ICONS[iconName] ?? HelpCircle;
    return <IconComponent className="h-7 w-7 text-white" />;
  };

  const getGlowColor = (id: string) => {
    switch(id) {
      case 'ct-sites': return 'group-hover:bg-[#00befc]/10 group-hover:shadow-[0_0_30px_rgba(0,190,252,0.2)]';
      case 'ecommerce': return 'group-hover:bg-[#59d533]/10 group-hover:shadow-[0_0_30px_rgba(89,213,51,0.2)]';
      case 'landing-pages': return 'group-hover:bg-[#fca71a]/10 group-hover:shadow-[0_0_30px_rgba(250,167,26,0.2)]';
      case 'automations': return 'group-hover:bg-[#ea2e3f]/10 group-hover:shadow-[0_0_30px_rgba(234,46,63,0.2)]';
      default: return 'group-hover:bg-[#00befc]/10 group-hover:shadow-[0_0_30px_rgba(0,190,252,0.15)]';
    }
  };

  const getBorderGradient = (id: string) => {
    switch(id) {
      case 'ct-sites': return 'from-pop-blue to-[#0072b5]';
      case 'ecommerce': return 'from-pop-green to-[#359c12]';
      case 'landing-pages': return 'from-pop-orange to-pop-red';
      case 'automations': return 'from-pop-red to-[#b51220]';
      default: return 'from-pop-blue to-pop-green';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl p-5 transition-all duration-300 glass-effect glass-effect-hover sm:p-6 ${getGlowColor(service.id)}`}
    >
      {/* Decorative Blur Background Circle */}
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/2 rounded-full blur-2xl group-hover:bg-white/5 transition-all" />

      <div className="flex flex-1 flex-col">
        {/* Header Icon + Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
            {renderIcon(service.iconName)}
          </div>
          
          {service.badge && (
            <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-gradient-to-r ${getBorderGradient(service.id)} text-white shadow-sm`}>
              {service.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#00befc] transition-colors leading-snug">
          {service.name}
        </h4>

        {/* Short Description */}
        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed mb-6">
          {service.shortDesc}
        </p>

        {/* Core Sub-features bullet lines */}
        {service.features && (
          <ul className="mb-5 space-y-2 border-t border-white/5 pt-4">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2.5 text-xs text-gray-400">
                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${getBorderGradient(service.id)}`} />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {service.project && <ProjectPreview project={service.project} />}
      </div>

      {/* Primary conversion CTA */}
      <button
        onClick={() => onSelect(service)}
        className="relative mt-4 flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl px-5 py-3 text-xs font-bold uppercase tracking-wider transition-all group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#59d533] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1319]"
      >
        {/* Background gradient mask */}
        <div className={`absolute inset-0 bg-gradient-to-r ${getBorderGradient(service.id)} opacity-90 transition-opacity duration-300 group-hover:opacity-100`} />
        
        {/* Content text */}
        <span className="relative z-10 text-white group-hover:text-white transition-colors flex items-center gap-1.5">
          Solicitar Serviço
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </span>
      </button>
    </motion.div>
  );
};
