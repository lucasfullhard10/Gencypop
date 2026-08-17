import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Service } from '../types';

interface ProjectPreviewProps {
  project: NonNullable<Service['project']>;
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({ project }) => {
  const projectHost = new URL(project.url).hostname.replace('www.', '');

  return (
    <div className="border-t border-white/8 pt-5">
      <div className="mb-3 flex items-end justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#00befc]">
            Projeto demonstrativo
          </p>
          <p className="mt-1 truncate text-sm font-bold text-white">{project.name}</p>
        </div>
        <ExternalLink aria-hidden="true" size={15} className="shrink-0 text-gray-500" />
      </div>

      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ver o projeto demonstrativo ${project.name} em uma nova aba`}
        className="group/preview block overflow-hidden rounded-2xl border border-white/10 bg-[#06080c] shadow-[0_14px_35px_rgba(0,0,0,0.28)] transition duration-300 hover:border-[#00befc]/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00befc] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1319]"
      >
        <div aria-hidden="true" className="flex h-8 items-center gap-1.5 border-b border-white/8 bg-[#0a0d12] px-3">
          <span className="h-2 w-2 rounded-full bg-[#ea2e3f]/80" />
          <span className="h-2 w-2 rounded-full bg-[#fca71a]/80" />
          <span className="h-2 w-2 rounded-full bg-[#59d533]/80" />
          <span className="ml-2 min-w-0 flex-1 truncate rounded-md bg-white/5 px-2 py-1 text-[8px] text-gray-500">
            {projectHost}
          </span>
        </div>

        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.imageAlt}
            width={1280}
            height={720}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-300 group-hover/preview:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070a]/90 via-transparent to-transparent opacity-80 sm:opacity-55 sm:transition-opacity sm:duration-300 sm:group-hover/preview:opacity-90" />
          <span className="absolute inset-x-3 bottom-3 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/65 px-3 py-2 text-[10px] font-extrabold uppercase tracking-wider text-white backdrop-blur-md sm:translate-y-2 sm:opacity-0 sm:transition-all sm:duration-300 sm:group-hover/preview:translate-y-0 sm:group-hover/preview:opacity-100 sm:group-focus-visible/preview:translate-y-0 sm:group-focus-visible/preview:opacity-100">
            Ver projeto
            <ArrowUpRight aria-hidden="true" size={14} />
          </span>
        </div>
      </a>

      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group/project-button mt-3 flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.035] px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-100 transition duration-300 hover:border-[#00befc]/40 hover:bg-[#00befc]/8 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00befc] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1319]"
      >
        Ver projeto
        <ArrowUpRight aria-hidden="true" size={14} className="transition-transform duration-300 group-hover/project-button:translate-x-0.5 group-hover/project-button:-translate-y-0.5" />
      </a>
    </div>
  );
};
