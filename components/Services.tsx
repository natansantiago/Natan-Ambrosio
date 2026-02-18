
import React from 'react';
import { Service } from '../types';
import ScrollReveal from './ScrollReveal';

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: "Negativa de internação",
      description: "Ação imediata contra recusas de internação hospitalar ou cirurgias urgentes ou de emergência.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1" />
        </svg>
      )
    },
    {
      title: "Negativa por carência",
      description: "Combate a negativas de atendimento sob alegação de prazos de carência abusivos.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Home care",
      description: "Garantia de internação e assistência médica domiciliar por recomendação médica.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "Medicamentos de alto custo",
      description: "Garantia de acesso a remédios essenciais negados pelo plano ou pelo SUS.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.673.337a4 4 0 01-2.583.343l-2.387-.477a2 2 0 00-1.022.547l-1.5 1.5a2 2 0 000 2.828l1.5 1.5a2 2 0 002.828 0l1.5-1.5a2 2 0 00.547-1.022l.477-2.387a6 6 0 01-.517-3.86l-.337-.673a4 4 0 00-.343-2.583l.477-2.387a2 2 0 01.547-1.022l1.5-1.5a2 2 0 012.828 0l1.5 1.5a2 2 0 010 2.828l-1.5 1.5z" />
        </svg>
      )
    },
    {
      title: "Próteses e órteses",
      description: "Liberação de materiais como stents, marcapassos e válvulas cardíacas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Terapias para TEA",
      description: "Cobertura integral de terapias multidisciplinares para autismo (TEA).",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    },
    {
      title: "Saúde mental",
      description: "Cobertura de internações psiquiátricas e tratamentos para transtornos mentais.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.989-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Erro médico",
      description: "Indenização por danos causados por negligência ou imperícia médica.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    {
      title: "Reajuste e cancelamento",
      description: "Defesa contra aumentos abusivos e rescisões unilaterais de contratos.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <ScrollReveal animation="fade-up">
        <div className="flex flex-col md:flex-row items-start md:items-end mb-12 gap-6 md:gap-16">
          <div className="max-w-xl">
            <div className="flex items-center space-x-2 text-emerald-500 font-bold text-xs uppercase mb-3">
               <div className="w-8 h-[2px] bg-emerald-500 line-expand"></div>
               <span>Nossas Especialidades</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">Áreas de atuação com <span className="text-emerald-500">precisão</span> jurídica</h2>
          </div>
          <div className="md:max-w-xs">
            <p className="text-slate-500 text-sm leading-relaxed">
              Focamos em soluções ágeis para garantir que seu tratamento não pare. Atendimento em todo o Brasil.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <ScrollReveal 
            key={idx} 
            animation="fade-up" 
            delayClass={`stagger-${(idx % 3) + 1}`}
            className="h-full"
          >
            <div 
              className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-11 h-11 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all shrink-0">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-tight">
                  {service.title}
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default Services;
