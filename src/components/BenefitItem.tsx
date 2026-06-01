import React from 'react';
import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { Benefit } from '../types';

interface BenefitItemProps {
  benefit: Benefit;
  index: number;
}

export const BenefitItem: React.FC<BenefitItemProps> = ({ benefit, index }) => {
  // Safe helper to dynamically retrieve Lucide Icons
  const renderIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-6 h-6 text-[#00befc]" />;
    }
    return <LucideIcons.Check className="w-6 h-6 text-[#00befc]" />;
  };

  // Give a staggering animation delay based on element index
  const delay = (index % 4) * 0.1;

  // Let's alternate linear border highlight coloring
  const getBorderColor = (idx: number) => {
    const modes = [
      'group-hover:border-[#00befc]/50',
      'group-hover:border-[#59d533]/50',
      'group-hover:border-[#fca71a]/50',
      'group-hover:border-[#ea2e3f]/50'
    ];
    return modes[idx % 4];
  };

  const getBgIconColor = (idx: number) => {
    const iconBgs = [
      'bg-[#00befc]/10 text-[#00befc]',
      'bg-[#59d533]/10 text-[#59d533]',
      'bg-[#fca71a]/10 text-[#fca71a]',
      'bg-[#ea2e3f]/10 text-[#ea2e3f]'
    ];
    return iconBgs[idx % 4];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className={`group flex items-start gap-4 p-5 rounded-2xl bg-[#0f1319]/40 border border-white/5 hover:bg-[#0f1319]/80 transition-all duration-300 ${getBorderColor(index)}`}
    >
      {/* Icon Frame */}
      <div className={`p-3 rounded-xl flex-shrink-0 transition-all duration-300 group-hover:scale-110 ${getBgIconColor(index)}`}>
        {renderIcon(benefit.iconName)}
      </div>

      {/* Description */}
      <div>
        <h5 className="text-base font-bold text-white mb-1 group-hover:text-white transition-colors">
          {benefit.title}
        </h5>
        <p className="text-sm text-gray-400 group-hover:text-gray-300 leading-relaxed transition-colors">
          {benefit.description}
        </p>
      </div>
    </motion.div>
  );
};
