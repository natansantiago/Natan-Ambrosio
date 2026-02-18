
import React from 'react';

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5512981616121&text=Olá,%20gostaria%20de%20uma%20análise%20do%20meu%20caso%20de%20negativa%20de%20plano%20de%20saúde.";

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: "Especialista em Saúde",
      description: "Atuação exclusiva na defesa de pacientes, garantindo conhecimento técnico das decisões mais recentes dos tribunais.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
      )
    },
    {
      title: "Agilidade Processual",
      description: "Protocolos imediatos com monitoramento constante para buscar decisões judiciais em tempo célere.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      )
    },
    {
      title: "Tecnologia e Segurança",
      description: "Processos 100% digitais com acompanhamento online e segurança de dados em todas as etapas.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      )
    },
    {
      title: "Transparência Ética",
      description: "Comunicação clara sobre riscos, prazos e possibilidades reais do seu caso, sem promessas infundadas.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
      )
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <div className="flex items-center space-x-2 text-emerald-500 font-bold text-sm uppercase mb-6">
             <div className="w-8 h-[2px] bg-emerald-500"></div>
             <span>Autoridade Técnica</span>
          </div>
          <h2 className="text-3xl md:text-6xl font-bold text-slate-900 mb-6 md:mb-8 leading-tight">
            Estratégias jurídicas para <span className="text-emerald-500">proteger</span> o seu acesso à saúde
          </h2>
          <p className="text-base md:text-lg text-slate-500 mb-8 md:mb-10">
            Mais do que assistência jurídica, oferecemos um acompanhamento especializado para reverter negativas abusivas e garantir que seu tratamento não seja interrompido.
          </p>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto text-center px-10 py-5 bg-slate-950 text-white rounded-full font-bold text-lg hover:bg-emerald-500 transition-all shadow-xl items-center justify-center space-x-3"
          >
            <span>Analisar meu caso no WhatsApp</span>
          </a>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mt-12 lg:mt-0">
          {features.map((f, i) => (
            <div key={i} className="bg-slate-50 p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300 group">
               <div className="flex items-center space-x-4 mb-4">
                 <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-sm shrink-0 border border-slate-100">
                   {f.icon}
                 </div>
                 <h4 className="text-base md:text-xl font-bold text-slate-900 leading-tight">{f.title}</h4>
               </div>
               <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
