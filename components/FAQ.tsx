
import React, { useState } from 'react';
import { FAQItem } from '../types';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "O plano de saúde pode negar uma cirurgia prescrita pelo médico?",
      answer: "Geralmente não. A escolha do tratamento cabe ao médico assistente, não à operadora. Não se sinta intimidado pela negativa: a lei protege o paciente e nossa estratégia é focada em restabelecer seu direito o mais rápido possível. Cuidamos de toda a burocracia para que você não precise se desgastar com o plano de saúde."
    },
    {
      question: "Quanto tempo leva para conseguir uma liminar contra plano de saúde?",
      answer: "Em casos de urgência ou emergência, os juízes costumam analisar o pedido em poucas horas ou dias. Nosso escritório possui processos otimizados para que o pedido chegue ao juiz com máxima prioridade. Entendemos a sua pressa e tratamos o seu caso com a urgência que a sua vida exige, monitorando cada passo judicial."
    },
    {
      question: "O plano pode cancelar meu contrato por eu ter entrado com processo?",
      answer: "Não. A lei veda qualquer tipo de retaliação ou rescisão unilateral imotivada. Muitos clientes têm receio de 'ficar marcados', mas a verdade é que o processo traz respeito e garante que a operadora cumpra o contrato. Você pode lutar pelos seus direitos com total segurança jurídica ao nosso lado."
    },
    {
      question: "Quais documentos preciso para processar o plano de saúde por negativa?",
      answer: "Você precisará do relatório médico detalhado, a carta de negativa (ou protocolo), comprovante de pagamento do plano e documentos pessoais. Mas fique tranquilo: nosso papel é te ajudar e simplificar esse processo. Nós te orientamos passo a passo como obter cada item, facilitando tudo para que você foque apenas na sua saúde."
    },
    {
      question: "Posso processar o plano de saúde por medicamentos de alto custo?",
      answer: "Sim. Se o medicamento tem registro na ANVISA e prescrição médica fundamentada, o plano deve fornecer. O alto valor não é desculpa para a negativa. Já ajudamos inúmeras famílias a garantirem tratamentos caríssimos com sucesso, tirando o peso financeiro e emocional das suas costas."
    }
  ];

  return (
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="text-center mb-16">
        <span className="text-emerald-500 font-bold uppercase tracking-widest text-xs">Esclarecimentos Jurídicos</span>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3">Dúvidas sobre <span className="text-emerald-500">Negativas</span></h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className={`rounded-3xl transition-all duration-300 ${openIndex === idx ? 'bg-white shadow-xl shadow-emerald-100/20 border-emerald-100 border' : 'bg-transparent border-slate-200 border'}`}>
            <button 
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex items-center justify-between p-6 md:p-8 text-left"
            >
              <span className="font-bold text-slate-900 text-lg md:text-xl pr-6">{faq.question}</span>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shrink-0 ${openIndex === idx ? 'bg-emerald-500 text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {openIndex === idx && (
              <div className="px-6 md:px-8 pb-8 pt-0 text-slate-600 leading-relaxed text-base md:text-lg animate-in slide-in-from-top-2 duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
        <p className="text-slate-500 font-medium text-lg">Não encontrou sua dúvida?</p>
        <a href="https://api.whatsapp.com/send/?phone=5512981616121" className="inline-flex items-center space-x-3 bg-emerald-100 text-emerald-700 px-8 py-4 rounded-2xl font-bold hover:bg-emerald-500 hover:text-white transition-all shrink-0">
          <span>Perguntar no WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default FAQ;
