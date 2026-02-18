
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Envie sua Negativa",
      desc: "Compartilhe via WhatsApp a prescrição médica ou o documento de negativa do plano."
    },
    {
      num: "02",
      title: "Análise Técnica",
      desc: "Analisamos as chances reais do seu caso e a melhor estratégia jurídica para o seu tratamento."
    },
    {
      num: "03",
      title: "Ação Estratégica",
      desc: "Entramos com o pedido judicial (liminar) para garantir o seu direito o mais rápido possível."
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-emerald-500 font-bold uppercase tracking-widest text-xs">Jornada do Cliente</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3">Como garantimos seu <span className="text-emerald-500">direito</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, idx) => (
            <div key={idx} className="relative group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-emerald-500 hover:border-emerald-400 transition-all duration-500">
              <span className="text-5xl font-black text-slate-200 group-hover:text-emerald-400 transition-colors mb-6 block leading-none">
                {s.num}
              </span>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-4 transition-colors">
                {s.title}
              </h3>
              <p className="text-slate-500 group-hover:text-emerald-50 transition-colors leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
