
import React from 'react';

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5512981616121&text&type=phone_number&app_absent=0";

const StrategicSteps: React.FC = () => {
  const blocks = [
    {
      label: "Ter clareza imediata sobre o que pode ser feito após a negativa",
      title: "Segurança para decidir com base em informação concreta",
      description: "Realizamos análise técnica individualizada, avaliamos riscos e prazos e definimos a estratégia jurídica adequada para cada situação.",
    },
    {
      label: "Buscar uma resposta jurídica adequada quando o tratamento não pode esperar",
      title: "Você não precisa aguardar indefinidamente em risco",
      description: "Estudamos a documentação médica, avaliamos a viabilidade de medida urgente ou de emergência e estruturamos a providência adequada de forma fundamentada.",
    },
    {
      label: "Ser atendido por quem atua exclusivamente em direito à saúde",
      title: "Conhecimento técnico específico para lidar com negativas",
      description: "Nossa atuação é focada nesse tipo de demanda, com análise aprofundada de decisões judiciais e estratégia personalizada.",
    }
  ];

  return (
    <section className="bg-white pt-4 pb-10 md:py-20 border-b border-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {blocks.map((block, idx) => (
            <div key={idx} className="flex flex-col h-full bg-slate-50/50 p-8 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-emerald-100/30 transition-all duration-500 group">
              
              <div className="flex items-start space-x-3 mb-5">
                <div className="w-6 h-[2px] bg-emerald-500 mt-[0.5rem] shrink-0"></div>
                <p className="font-bold text-emerald-500 text-[11px] uppercase tracking-wider leading-tight">
                  {block.label}
                </p>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-5 leading-tight">
                {block.title}
              </h3>

              <p className="text-base text-slate-600 leading-relaxed font-normal flex-grow">
                {block.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a 
            href={WHATSAPP_LINK} 
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-4 bg-slate-950 text-white rounded-full font-bold text-lg hover:bg-emerald-500 transition-all shadow-xl items-center space-x-3 group text-center"
          >
            <span>Analisar meu caso agora</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default StrategicSteps;
