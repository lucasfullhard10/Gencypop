import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Layers } from 'lucide-react';
import { Project } from '../types';

interface PortfolioCardProps {
  project: Project;
  onOpenQuote: () => void;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ project, onOpenQuote }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col rounded-3xl bg-[#0f1319]/60 border border-white/5 overflow-hidden shadow-xl hover:border-white/10 transition-all duration-300 h-full"
    >
      {/* Visual Frame */}
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-primary">
        {/* Color Overlay Accent */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-transparent opacity-80 z-10" />
        
        {/* The Project Image */}
        <img
          src={project.imageUrl}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Floating Category Tag */}
        <span className="absolute top-4 left-4 z-20 text-[10px] font-bold text-white bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1.5">
          <Layers size={10} className="text-[#00befc]" />
          {project.category}
        </span>
      </div>

      {/* Description Panel */}
      <div className="p-6 flex flex-col justify-between flex-grow z-20">
        <div>
          <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#00befc] transition-colors">
            {project.title}
          </h4>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] font-medium text-gray-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Call to action element */}
        <button
          onClick={onOpenQuote}
          className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold text-gray-300 bg-white/5 hover:bg-white/10 hover:text-[#00befc] border border-white/10 hover:border-[#00befc]/20 transition-all cursor-pointer select-none"
        >
          <span>Estudar Projeto Semelhante</span>
          <ExternalLink size={12} />
        </button>
      </div>
    </motion.div>
  );
};
