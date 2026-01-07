import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Reglo ha trasformato il nostro reparto amministrativo. Prima impiegavamo 3 ore al giorno per generare e inviare documenti. Ora tutto avviene automaticamente.",
      author: "Laura Bianchi",
      role: "Responsabile Amministrativa",
      company: "Azienda commerciale, 35 dipendenti",
    },
    {
      quote: "L'integrazione con il nostro gestionale è stata velocissima. In una settimana eravamo operativi e già vedevamo i primi benefici. Il ROI è stato immediato.",
      author: "Giuseppe Ferrara",
      role: "Imprenditore",
      company: "PMI logistica, 60 dipendenti",
    },
    {
      quote: "Finalmente possiamo gestire il picco di ordini stagionale senza dover assumere personale temporaneo. Reglo scala perfettamente con il nostro business.",
      author: "Francesca Moretti",
      role: "Direttore Operations",
      company: "E-commerce B2B, 45 dipendenti",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#324D7A' }}>
            Cosa dicono i nostri clienti
          </h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            PMI italiane che hanno scelto Reglo per automatizzare i loro processi
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-[#AFE2D4]/10 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-6">
                <Quote className="w-12 h-12 opacity-20" style={{ color: '#6057A0' }} />
              </div>

              <p className="text-lg text-black/80 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              <div className="pt-6 border-t border-gray-200">
                <div className="font-bold" style={{ color: '#324D7A' }}>
                  {testimonial.author}
                </div>
                <div className="text-sm text-black/60 mt-1">{testimonial.role}</div>
                <div className="text-sm font-medium mt-1" style={{ color: '#324D7A' }}>
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 bg-gradient-to-r from-[#AFE2D4]/20 to-[#324D7A]/20 px-12 py-6 rounded-2xl shadow-lg">
            <div className="text-center">
              <div className="text-4xl font-bold" style={{ color: '#324D7A' }}>150+</div>
              <div className="text-sm text-black/60 mt-1">PMI italiane</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-4xl font-bold" style={{ color: '#58CFAE' }}>10.000+</div>
              <div className="text-sm text-black/60 mt-1">Workflow attivi</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-4xl font-bold" style={{ color: '#5B93FF' }}>75%</div>
              <div className="text-sm text-black/60 mt-1">Riduzione tempi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
