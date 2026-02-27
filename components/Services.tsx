
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-neutral-500 uppercase tracking-[0.6em] text-[10px] mb-4 block">Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Como posso elevar sua marca</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-[1400px] mx-auto">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-8 lg:p-10 border border-white/10 hover:border-white/30 transition-all duration-700 hover:bg-neutral-900 group flex flex-col items-start h-full ${service.isSpecial ? 'bg-neutral-950/50' : ''}`}
            >
              {service.isSpecial && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-white text-black text-[8px] font-bold uppercase tracking-[0.2em] rounded-full flex items-center gap-2 whitespace-nowrap z-10 shadow-xl">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  Este site foi feito via IA+Códigos
                </div>
              )}
              
              <div className="w-12 h-12 mb-8 flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-black transition-all duration-500 rounded-lg shrink-0">
                {service.icon === 'palette' && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>}
                {service.icon === 'layout' && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>}
                {service.icon === 'globe' && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>}
                {service.icon === 'code' && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>}
              </div>
              
              <h3 className="text-lg font-bold mb-4 tracking-tight leading-snug">{service.title}</h3>
              <p className="text-neutral-500 leading-relaxed font-light text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
