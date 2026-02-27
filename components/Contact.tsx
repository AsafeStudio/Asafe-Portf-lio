
import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-12 leading-tight">
              Vamos construir o próximo <span className="text-neutral-500 italic font-light">nível da sua marca?</span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Estou pronto para ouvir sobre seu projeto e ajudar a encontrar a melhor solução visual para seu negócio.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <a 
                href="mailto:contato@asafevidal.com" 
                className="group flex items-center gap-4 text-2xl font-bold border-b border-white/20 pb-2 hover:border-white transition-all"
              >
                contato@asafevidal.com
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </a>
              <div className="w-px h-12 bg-white/10 hidden md:block"></div>
              <a 
                href="#" 
                className="text-2xl font-bold border-b border-white/20 pb-2 hover:border-white transition-all"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
