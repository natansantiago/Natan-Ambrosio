
import React from 'react';

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5512981616121&text&type=phone_number&app_absent=0";

const FinalRecap: React.FC = () => {
  const items = [
    {
      title: "Clareza antes de qualquer medida",
      description: "Você entende riscos, prazos e possibilidades reais antes de tomar uma decisão."
    },
    {
      title: "Estratégia para situações urgentes ou de emergência",
      description: "Análise técnica individualizada e definição da medida adequada quando o caso exige rapidez."
    },
    {
      title: "Atendimento humano e especializado",
      description: "Foco exclusivo na defesa do paciente contra planos de saúde em todo o Brasil."
    }
  ];

  return (
    <section className="bg-slate-50 py-12 md:py-20 border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="lg:w-3/5">
            <div className="flex items-center space-x-2 text-emerald-500 font-bold text-xs uppercase mb-5">
               <div className="w-8 h-[2px] bg-emerald-500"></div>
               <span>Decisão estratégica</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Sua saúde não pode esperar — Adiar uma decisão pode custar <span className="text-emerald-500">muito caro</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Quando há prescrição médica e o tratamento foi negado, buscar orientação adequada desde o início permite agir com estratégia — e não apenas reagir à negativa.
            </p>

            <div className="space-y-5 mb-10">
              {items.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-snug">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a 
              href={WHATSAPP_LINK} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-10 py-4 bg-slate-950 text-white rounded-full font-bold text-lg hover:bg-emerald-500 transition-all shadow-xl items-center space-x-3 group"
            >
              <span>Analisar meu caso agora</span>
            </a>
          </div>

          <div className="lg:w-2/5 relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
                alt="Cuidados e saúde" 
                className="rounded-3xl shadow-xl w-full aspect-square md:aspect-auto h-auto md:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-emerald-900/5 rounded-3xl"></div>
              
              <div className="absolute -bottom-6 -left-6 bg-white w-28 h-28 rounded-2xl shadow-2xl border border-slate-50 flex flex-col items-center justify-center text-center p-2 z-20">
                <div className="text-emerald-500 font-black text-3xl leading-none mb-1">24h</div>
                <div className="text-[8px] font-extrabold text-slate-400 uppercase tracking-tighter leading-tight px-1">
                  PRONTIDÃO EM URGÊNCIA OU EMERGÊNCIA
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-emerald-100/40 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalRecap;
