
import React from 'react';

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5512981616121&text&type=phone_number&app_absent=0";

const CriticalMoment: React.FC = () => {
  return (
    <section className="bg-white pt-10 pb-4 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-emerald-50 rounded-[2.5rem] p-7 md:p-16 relative overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-80 h-80 bg-emerald-100/50 rounded-full blur-3xl"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="flex items-center space-x-2 text-emerald-600 font-bold text-xs uppercase mb-5">
                 <div className="w-8 h-[2px] bg-emerald-600"></div>
                 <span>Avaliação de urgência ou emergência</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Em momentos críticos, tempo pode ser <span className="underline decoration-emerald-500/30 decoration-8 underline-offset-4">decisivo</span>
              </h2>

              <div className="space-y-5 text-base md:text-lg text-slate-600 mb-10 leading-relaxed">
                <p>
                  Muitos pacientes perdem tempo precioso em protocolos e ouvidorias enquanto o tratamento segue parado.
                </p>
                <p className="font-semibold text-slate-700">
                  Uma avaliação técnica imediata permite agir com mais segurança quando há urgência ou emergência médica.
                </p>
              </div>

              <a 
                href={WHATSAPP_LINK} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-10 py-4 bg-slate-950 text-white rounded-full font-bold text-lg hover:bg-emerald-600 transition-all shadow-xl items-center space-x-3 group"
              >
                <span>Analisar meu caso</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800" 
                  alt="Urgência médica" 
                  className="rounded-3xl shadow-xl w-full aspect-square md:aspect-auto h-auto md:h-[400px] object-cover"
                />
                
                <div className="absolute -bottom-4 -right-4 bg-white p-5 rounded-2xl shadow-xl border border-emerald-50 max-w-[200px]">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Ação prioritária</span>
                  </div>
                  <div className="text-sm font-bold text-slate-900 leading-tight">
                    Análise imediata para casos de risco
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CriticalMoment;
