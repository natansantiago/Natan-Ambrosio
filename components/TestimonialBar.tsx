
import React from 'react';

const TestimonialBar: React.FC = () => {
  const testimonials = [
    {
      name: "Diego Marinho",
      text: "“Excelente atendimento do Dr. Natan Ambrosio. Passou confiança desde o primeiro contato, acompanhou todo o processo com presteza e ao final tivemos sucesso. Recomendo os serviços desse escritório.”",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
    },
    {
      name: "Cidna Silva",
      text: "“Dr. Natan resolveu meu processo com muita eficiência e agilidade. Obrigada por ser tão dedicado e atencioso.”",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    {
      name: "Eduardo Roque",
      text: "“Excelente profissional, ele tira todas as dúvidas com máxima atenção e dedicação, foi o que me trouxe segurança em contratá-lo.”",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
    }
  ];

  return (
    <div className="bg-emerald-50 py-10 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header indicating Google My Business source */}
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="flex items-center space-x-3 mb-3">
            <svg className="w-5 h-5 fill-emerald-600" viewBox="0 0 24 24">
              <path d="M12.48 10.92v3.28h4.74c-.18 1.1-.9 2.03-1.9 2.7l2.72 2.1c1.6-1.48 2.52-3.66 2.52-6.22 0-.44-.04-.88-.12-1.3H12.48z" />
              <path d="M12.48 21c2.43 0 4.47-.8 5.96-2.2l-2.72-2.1c-.8.54-1.84.86-3.24.86-2.48 0-4.58-1.68-5.33-3.92l-2.8 2.16C6.1 19.32 9.04 21 12.48 21z" />
              <path d="M7.15 13.64c-.2-.58-.3-1.2-.3-1.84s.1-1.26.3-1.84L4.35 7.8C3.48 9.54 3 11.5 3 13.5s.48 3.96 1.35 5.7l2.8-2.56z" />
              <path d="M12.48 6.26c1.33 0 2.52.46 3.46 1.36l2.6-2.6C16.95 3.54 14.9 2.74 12.48 2.74c-3.44 0-6.38 1.68-8.13 4.14l2.8 2.16c.75-2.24 2.85-3.92 5.33-3.92z" />
            </svg>
            <span className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-[10px]">Avaliações Verificadas</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">O que dizem no Google Meu Negócio</h2>
          <div className="flex text-amber-400 items-center space-x-1">
            <span className="font-bold text-slate-900 mr-2 text-lg">5.0</span>
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="flex flex-col bg-white p-6 rounded-3xl shadow-sm border border-emerald-100/50 hover:shadow-md transition-all duration-500"
            >
              {/* Card Header: Photo, Name and (Stars + Verification) in one row */}
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <div className="flex items-center space-x-3">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-10 h-10 rounded-full object-cover shadow-sm border border-slate-100"
                  />
                  <div className="text-slate-900 font-bold text-sm leading-tight">{t.name}</div>
                </div>
                
                <div className="flex flex-col items-end">
                  <div className="flex text-amber-400 mb-0.5">
                    {[...Array(5)].map((_, starIdx) => (
                      <svg key={starIdx} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  {/* Google Review Tag placed under the stars */}
                  <div className="flex items-center text-[7px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                    <svg className="w-2 h-2 mr-1 fill-emerald-500 shrink-0" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    Google Review Verificado
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-600 text-[13px] leading-relaxed font-medium">
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialBar;
