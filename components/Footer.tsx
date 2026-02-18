
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-500 pt-6 pb-16">
      <div className="container mx-auto px-6">
        
        {/* Unified Legal & Branding Block */}
        <div className="flex flex-col gap-10">
          
          {/* Top Row: Main Identity & Socials */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                Natan Dias Santiago Ambrosio
              </h3>
              <div className="flex items-center">
                <span className="bg-emerald-500/10 px-3 py-1 rounded-md text-[10px] md:text-xs tracking-[0.2em] font-bold text-emerald-400 uppercase border border-emerald-500/20">
                  OAB/SP n. 460.194
                </span>
              </div>
            </div>

            <div className="flex space-x-3">
              <a 
                href="https://instagram.com/natanambrosio.adv" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all group"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/natanambrosio/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all group"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Detailed Legal Content */}
          <div className="grid lg:grid-cols-2 gap-10 md:gap-20">
            <div className="space-y-4">
              <p className="text-sm font-bold text-slate-300 leading-relaxed">
                Natan Dias Santiago Ambrosio Sociedade Individual de Advocacia <br />
                <span className="text-slate-500 font-medium">CNPJ 54.982.179/0001-59 — OAB/SP n. 53.647</span>
              </p>
              <p className="text-xs leading-relaxed text-slate-500 max-w-xl">
                As informações deste site possuem caráter informativo e não constituem aconselhamento jurídico individual. A contratação depende da análise do caso concreto e formalização de contrato.
              </p>
            </div>

            <div className="flex flex-col lg:items-end justify-start space-y-4">
              <div className="bg-white/5 p-5 rounded-2xl border border-white/5 max-w-sm lg:text-right w-full">
                <p className="text-[10px] leading-relaxed text-slate-400 font-black uppercase tracking-widest mb-1">
                  Disclaimer de Plataforma
                </p>
                <p className="text-[11px] leading-relaxed text-slate-500">
                  Este site não possui vínculo com Google, Facebook ou órgãos governamentais.
                </p>
              </div>
            </div>
          </div>

          {/* Final Bottom Copyright */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold">
            <p className="mb-4 md:mb-0 text-slate-600">© 2026 – Todos os direitos reservados</p>
            <div className="flex items-center space-x-2">
              <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
              <span className="text-slate-500">Direito à Saúde de Alta Performance</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
