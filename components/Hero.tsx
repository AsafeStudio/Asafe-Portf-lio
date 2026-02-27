
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Dramatic push-back parallax: recedes (scale down), blurs, and fades out
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.8], ["blur(0px)", "blur(60px)"]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Dynamic Background elements that also recede */}
      <motion.div 
        style={{ opacity: useTransform(scrollYProgress, [0, 1], [0.2, 0]) }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] bg-neutral-800 rounded-full blur-[180px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-neutral-900 rounded-full blur-[180px]" />
      </motion.div>

      <motion.div 
        style={{ scale, opacity, filter: blur, y }}
        className="container mx-auto px-6 text-center z-10"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-8"
        >
          Design que posiciona<br />
          e impulsiona seu <span className="text-neutral-500">negócio.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-neutral-400 text-base md:text-lg font-light leading-relaxed mb-10"
        >
          Especialista em UI Design, Web Design e Branding.<br />
          Transformo ideias em experiências digitais memoráveis<br />
          e marcas de alto impacto.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="flex justify-center"
        >
          <a 
            href="#portfolio" 
            className="bg-white text-black px-14 py-6 rounded-full font-bold uppercase text-[11px] tracking-[0.3em] hover:bg-neutral-200 transition-all duration-500 transform hover:scale-105 active:scale-95 shadow-2xl shadow-white/10"
          >
            Ver Portfólio
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
