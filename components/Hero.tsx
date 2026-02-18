
import React from 'react';
import ScrollReveal from './ScrollReveal';

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5512981616121&text=Olá,%20gostaria%20de%20uma%20análise%20do%20meu%20caso%20de%20negativa%20de%20plano%20de%20saúde.";

const Hero: React.FC = () => {
  const benefits = [
    {
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      text: "Advogados\nEspecialistas"
    },
    {
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      text: "Atendimento\nDigital"
    },
    {
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11h2.02m1.124 7.485l1.428-1.428m11.147-1.124l1.428 1.428M11 3.055v2.02m0 13.85v2.02m7.485-11.147l-1.428 1.428M7.485 7.485L6.057 6.057m13.85 11.147l-2.02-2.02" />
        </svg>
      ),
      text: "Atuação em\nTodo o Brasil"
    }
  ];

  return (
    <div className="relative pt-32 pb-6 md:pt-40 md:pb-24 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[120%] bg-emerald-50 rounded-[10rem] rotate-12 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal animation="reveal-left" className="duration-1000">
          <div>
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-slate-100 shadow-sm mb-5 md:mb-6">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-slate-900 font-bold text-[10px] uppercase tracking-wider">Advocacia Especializada e Humanizada</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-5 md:mb-6">
              Advogado especialista em <span className="text-emerald-500 underline decoration-emerald-200 decoration-4">plano de saúde</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 md:mb-10 leading-relaxed max-w-xl font-medium">
              Atuação estratégica contra negativas de cirurgias, medicamentos e tratamentos. Proteja seu direito à saúde com agilidade e transparência.
            </p>
            <div className="flex flex-col sm:flex-row">
              <a 
                href={WHATSAPP_LINK} 
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-slate-950 text-white rounded-full font-extrabold text-lg hover:bg-emerald-500 transition-all shadow-xl hover:shadow-emerald-200 text-center flex items-center justify-center space-x-3 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86(9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>Falar no WhatsApp agora</span>
              </a>
            </div>

            <div className="flex items-center mt-6 md:mt-8 text-sm font-bold text-emerald-600">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-3 animate-pulse"></span>
              Análise gratuita e imediata para urgências
            </div>
            
            <div className="hidden sm:grid mt-12 pt-6 border-t border-slate-100 grid-cols-3 gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                    {benefit.icon}
                  </div>
                  <span className="text-slate-900 font-bold text-xs leading-tight whitespace-pre-line">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="reveal-scale" className="relative flex justify-center lg:justify-end mt-8 lg:mt-0 duration-1000">
          <div className="relative w-full max-w-[480px]">
            {/* Badge flutuante 1 */}
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-xl z-30 flex items-center space-x-3 border border-slate-50">
               <div className="bg-emerald-100 p-2 rounded-xl text-emerald-600">
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" /></svg>
               </div>
               <div>
                 <div className="text-[9px] font-bold text-slate-400 uppercase tracking-tight">Estratégia</div>
                 <div className="text-xs font-extrabold text-slate-900">Liminar em até 24h</div>
               </div>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1000" 
              alt="Dr. Natan Ambrosio - Especialista em Direito à Saúde" 
              className="relative w-full aspect-square md:aspect-auto h-auto md:h-[600px] object-cover rounded-[2.5rem] shadow-2xl z-10 border-8 border-white"
            />
            
            {/* Elemento decorativo traseiro */}
            <div className="absolute bottom-[-4%] left-[-8%] w-full h-full bg-emerald-400/20 rounded-[3rem] z-0 -rotate-3"></div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Hero;
