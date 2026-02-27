
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter uppercase">
          Asafe Vidal<span className="text-neutral-500">.</span>
        </a>
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase text-neutral-400">
          <a href="#portfolio" className="hover:text-white transition-colors">Portfólio</a>
          <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
          <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
          <a href="#contato" className="hover:text-white transition-colors">Contato</a>
        </div>
        <button className="text-xs font-bold uppercase tracking-widest border border-white/20 px-6 py-2 hover:bg-white hover:text-black transition-all">
          Orçamento
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
