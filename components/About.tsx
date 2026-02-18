
import React from 'react';
import ScrollReveal from './ScrollReveal';

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5512981616121&text&type=phone_number&app_absent=0";

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        <ScrollReveal animation="reveal-left" className="lg:w-1/2 relative w-full">
          <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-emerald-50 rounded-full blur-[100px] z-0"></div>
          
          <div className="relative z-10 w-full flex justify-center lg:block">
            {/* Selo Acadêmico */}
            <div className="absolute -top-4 left-0 md:-left-6 bg-white p-3 md:p-5 rounded-2xl md:rounded-[2rem] shadow-xl z-30 border border-slate-50 flex items-center space-x-3 md:space-x-4">
               <div className="w-8 h-8 md:w-12 md:h-12 bg-emerald-50 rounded-lg md:rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path d="M12 14l9-5-9-5-9 5 9 5z" />
                   <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                 </svg>
               </div>
               <div>
                 <div className="text-[10px] md:text-sm font-extrabold text-slate-900 leading-tight">FGV Direito SP</div>
                 <div className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">OAB/SP n. 460.194</div>
               </div>
            </div>

            <ScrollReveal animation="reveal-scale">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97dee2dcb748?auto=format&fit=crop&q=80&w=1000" 
                alt="Dr. Natan Ambrosio - Especialista em Direito à Saúde e Causas Médicas" 
                className="relative rounded-[2.5rem] md:rounded-[3rem] shadow-2xl w-full max-w-[500px] lg:max-w-none object-cover h-[450px] md:h-[650px] transition-transform duration-700 grayscale-[0.2] hover:grayscale-0"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800";
                }}
              />
            </ScrollReveal>
            
            {/* Quote flutuante */}
            <ScrollReveal animation="fade-up" delayClass="stagger-3" className="absolute -bottom-10 left-4 right-4 md:left-auto md:-right-12 md:w-[110%] z-20">
              <div className="bg-slate-950 text-white p-5 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-white/10">
                <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-8 text-center md:text-left">
                  <div className="flex items-center justify-center space-x-4 shrink-0 md:pr-8 md:border-r border-white/10">
                    <div className="text-emerald-400 font-bold text-5xl md:text-6xl leading-none">7</div>
                    <div className="text-slate-400 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-black leading-tight max-w-[80px] md:max-w-[120px]">
                      Anos na Defesa de Pacientes
                    </div>
                  </div>
                  
                  <div className="flex-grow italic text-slate-300 text-[11px] md:text-sm leading-relaxed font-medium">
                    “Eu sei que quem me procura está com medo e cansado. Meu papel é trazer tranquilidade e solução técnica para cada caso.”
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="reveal-right" className="lg:w-1/2 mt-20 lg:mt-0">
          <div className="flex items-center space-x-2 text-emerald-500 font-bold text-sm uppercase mb-4">
             <div className="w-8 h-[2px] bg-emerald-500 line-expand"></div>
             <span>Sobre o Especialista</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 md:mb-8 leading-tight">
            Conheça o Dr. <span className="text-emerald-500">Natan Ambrosio</span>
          </h2>
          
          <div className="space-y-4 md:space-y-6 text-base md:text-lg text-slate-500 mb-8 md:mb-12 leading-relaxed font-normal">
            <p>
              Sou advogado com especialização em Direito à Saúde pela FGV e atuo exclusivamente na defesa de pacientes que enfrentam negativas abusivas dos planos de saúde.
            </p>
            <p>
              Em sete anos de carreira, dediquei-me a acompanhar famílias em seus momentos mais sensíveis, garantindo o acesso a cirurgias, tratamentos oncológicos e medicamentos de alto custo.
            </p>
            <p className="font-bold text-slate-800">
              Atendimento focado na solução imediata, com presença digital em todo o Brasil.
            </p>
          </div>
          
          <div className="grid gap-4 md:gap-6 mb-10 md:mb-12">
            {[
              {
                title: "Foco Exclusivo em Saúde",
                desc: "Estudo constante das decisões dos tribunais superiores para garantir a melhor estratégia.",
                icon: <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              },
              {
                title: "Transparência Total",
                desc: "Você saberá exatamente quais são os riscos e as chances reais de sucesso antes de iniciar.",
                icon: <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              }
            ].map((item, i) => (
              <ScrollReveal key={i} animation="fade-up" delayClass={`stagger-${i+1}`}>
                <div className="p-5 md:p-6 bg-white rounded-2xl md:rounded-3xl border border-slate-100 shadow-sm flex items-start space-x-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-50 rounded-xl md:rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                     {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1 text-base md:text-lg">{item.title}</h4>
                    <p className="text-xs md:text-sm text-slate-500 leading-snug">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal animation="fade-up" delayClass="stagger-3">
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto justify-center px-10 py-4 bg-emerald-500 text-white rounded-full font-bold text-lg hover:bg-emerald-600 transition-all shadow-xl items-center space-x-3 group"
            >
              <span>Conversar com o Dr. Natan</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </ScrollReveal>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default About;
