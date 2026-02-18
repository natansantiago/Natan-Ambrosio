
import React from 'react';

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5512981616121&text&type=phone_number&app_absent=0";

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        
        {/* Left Side: Text, Payment & CTA */}
        <div className="text-left">
          <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm uppercase mb-6">
             <div className="w-8 h-[2px] bg-emerald-400"></div>
             <span>Canais de Atendimento</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Vamos discutir o seu <span className="text-emerald-400">Direito</span> agora
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-md">
            Entre em contato hoje para uma consulta confidencial. Nossa equipe está pronta para trazer a clareza e a solução que você precisa.
          </p>

          {/* Payment Information Block */}
          <div className="mb-10 p-6 bg-white/5 rounded-3xl border border-white/10 max-w-md">
            <p className="text-emerald-400 font-bold text-[10px] uppercase tracking-widest mb-4">Facilidades de Pagamento</p>
            <div className="grid grid-cols-2 gap-y-4 gap-x-6">
              <div className="flex items-center space-x-3 text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Boleto e PIX</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Crédito ou Débito</span>
              </div>
            </div>
            <div className="mt-5 pt-4 border-t border-white/5 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-tight">Parcelamento disponível</p>
            </div>
          </div>
          
          <a 
            href={WHATSAPP_LINK} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-10 py-4 bg-emerald-500 text-white rounded-full font-extrabold text-lg hover:bg-white hover:text-emerald-600 transition-all shadow-xl items-center space-x-3 group"
          >
            <span>Analisar meu caso agora</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Right Side: Contact Grid - Optimized for Mobile */}
        <div className="grid sm:grid-cols-2 gap-4 mt-12 lg:mt-20">
          {/* WhatsApp Card */}
          <a 
            href={WHATSAPP_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-5 md:p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-emerald-500/50 transition-all flex items-center md:items-start md:flex-col space-x-4 md:space-x-0"
          >
            <div className="text-emerald-400 md:mb-3 group-hover:scale-110 transition-transform shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-0.5 md:mb-1">WhatsApp</p>
              <p className="text-base md:text-lg font-bold text-white">(12) 98161 6121</p>
            </div>
          </a>

          {/* Email Card - Also redirecting to WhatsApp as per "all buttons" instruction */}
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 md:p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-emerald-500/50 transition-all flex items-center md:items-start md:flex-col space-x-4 md:space-x-0"
          >
            <div className="text-emerald-400 md:mb-3 group-hover:scale-110 transition-transform shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-0.5 md:mb-1">E-mail</p>
              <p className="text-sm md:text-base font-bold text-white truncate">natan@nambrosio.com.br</p>
            </div>
          </a>

          {/* Instagram Card - Stays Instagram as requested */}
          <a 
            href="https://instagram.com/natanambrosio.adv" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-5 md:p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-emerald-500/50 transition-all flex items-center md:items-start md:flex-col space-x-4 md:space-x-0"
          >
            <div className="text-emerald-400 md:mb-3 group-hover:scale-110 transition-transform shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-0.5 md:mb-1">Instagram</p>
              <p className="text-base md:text-lg font-bold text-white">@natanambrosio.adv</p>
            </div>
          </a>

          {/* Location Card - Also redirecting to WhatsApp as per "all buttons" instruction */}
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 md:p-6 bg-white/5 rounded-3xl border border-white/10 flex items-center md:items-start md:flex-col space-x-4 md:space-x-0 hover:border-emerald-500/50 transition-all cursor-pointer"
          >
            <div className="text-emerald-400 md:mb-3 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-0.5 md:mb-1">Localização</p>
              <p className="text-sm md:text-base font-bold text-white leading-tight">São José dos Campos/SP</p>
              <p className="text-[9px] md:text-[10px] text-slate-400 uppercase font-bold mt-1 tracking-wider">Atendimento Online Nacional</p>
            </div>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Contact;
