
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-black border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-sm tracking-widest uppercase font-bold">
          Asafe Vidal<span className="text-neutral-500">.</span>
        </div>
        
        <div className="flex gap-8 text-xs uppercase tracking-widest text-neutral-500">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Behance</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>

        <div className="text-[10px] uppercase tracking-widest text-neutral-600">
          © {currentYear} — Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
};

export default Footer;
