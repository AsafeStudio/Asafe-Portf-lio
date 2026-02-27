
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const ProjectCard: React.FC<{ project: any; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
      className="group relative cursor-pointer"
    >
      {/* Project Image Container - Sharp Edges */}
      <div className="relative aspect-[4/5] md:aspect-[16/10] overflow-hidden bg-neutral-900 border border-white/5">
        <motion.img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Service Tags - Top Right */}
        <div className="absolute top-6 right-6 flex flex-wrap justify-end gap-2 z-10">
          {project.services.map((service: string, i: number) => (
            <span 
              key={i} 
              className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-white"
            >
              {service}
            </span>
          ))}
        </div>
      </div>

      {/* Project Info - Bottom */}
      <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-neutral-500 text-[9px] md:text-[10px] uppercase tracking-[0.4em] mb-2 block font-medium">
            {project.category}
          </span>
          <h3 className="text-xl md:text-2xl font-bold tracking-tighter text-white">
            {project.title}
          </h3>
        </div>
        
        <div className="flex items-center gap-4 group/link overflow-hidden pb-1">
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-white whitespace-nowrap">Ver Case</span>
          <div className="w-8 h-px bg-white/40 group-hover/link:w-16 group-hover/link:bg-white transition-all duration-500"></div>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="relative py-20 bg-black">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-neutral-500 uppercase tracking-[0.6em] text-[10px] mb-4 block"
          >
            Trabalhos Recentes
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tighter max-w-4xl leading-tight"
          >
            Design e performance para marcas<br className="hidden md:block" /> que buscam o <span className="text-neutral-500 italic font-light">próximo nível.</span>
          </motion.h2>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-12 lg:gap-x-20">
          {PROJECTS.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 pt-12 border-t border-white/5 flex justify-center"
        >
          <a 
            href="#contato" 
            className="text-xs font-bold uppercase tracking-[0.4em] text-neutral-500 hover:text-white transition-colors"
          >
            Ver todos os projetos no Behance →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
