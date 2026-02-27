
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="sobre" className="relative py-24 bg-black z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <span className="text-neutral-500 uppercase tracking-[0.4em] text-[10px] mb-6 block">Sobre o Designer</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-8 leading-[1.1]">
              Estratégia aplicada <span className="text-neutral-500 italic font-light">à interface.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-neutral-400 space-y-6 text-base md:text-lg font-light leading-relaxed pt-2 md:pt-14"
          >
            <p>
              Sou Asafe Vidal, designer gráfico com foco em UI/UX e Web Design. Minha abordagem une estética contemporânea a uma visão estratégica de negócio, garantindo que cada pixel tenha um propósito.
            </p>
            <p>
              Acredito que marcas de sucesso precisam de consistência e clareza. Por isso, meu processo criativo envolve imersão profunda no problema do cliente para entregar soluções que não apenas encantam visualmente, mas convertem e geram confiança.
            </p>
            
            <div className="pt-10 grid grid-cols-2 gap-12 border-t border-white/10">
              <div className="group">
                <h4 className="text-white font-bold text-3xl group-hover:text-neutral-500 transition-colors">5+</h4>
                <p className="text-[10px] uppercase tracking-widest mt-2 text-neutral-500">Anos de Experiência</p>
              </div>
              <div className="group">
                <h4 className="text-white font-bold text-3xl group-hover:text-neutral-500 transition-colors">100+</h4>
                <p className="text-[10px] uppercase tracking-widest mt-2 text-neutral-500">Projetos Entregues</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
