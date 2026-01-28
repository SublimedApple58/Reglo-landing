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
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-grid opacity-15" aria-hidden="true" />
      <div
        className="absolute -top-20 left-[-12%] h-64 w-64 rounded-full bg-[color:var(--color-accent-soft)] blur-3xl opacity-70 animate-float-slow"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-18%] right-[-8%] h-80 w-80 rounded-full bg-[color:var(--color-sky)] blur-3xl opacity-70 animate-float-slower"
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
            Testimonianze
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold mt-3 mb-4 text-[color:var(--color-ink)]">
            Cosa dicono i nostri clienti
          </h2>
          <p className="text-lg text-[color:var(--color-ink-muted)] max-w-3xl mx-auto">
            PMI italiane che hanno scelto Reglo per automatizzare i loro processi
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card interactive-lift rounded-2xl p-7"
            >
              <div className="mb-6">
                <Quote className="w-10 h-10 opacity-20 text-[color:var(--color-ink)]" />
              </div>

              <p className="text-base sm:text-lg text-[color:var(--color-ink-muted)] leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              <div className="pt-6 border-t border-[color:var(--color-border)]">
                <div className="font-semibold text-[color:var(--color-ink)]">
                  {testimonial.author}
                </div>
                <div className="text-sm text-[color:var(--color-ink-muted)] mt-1">{testimonial.role}</div>
                <div className="text-sm font-medium mt-1 text-[color:var(--color-ink)]">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 glass-panel px-10 py-6 rounded-2xl">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-semibold text-[color:var(--color-ink)]">150+</div>
              <div className="text-sm text-[color:var(--color-ink-muted)] mt-1">PMI italiane</div>
            </div>
            <div className="w-px h-12 bg-[color:var(--color-border)] hidden sm:block"></div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-semibold text-[color:var(--color-ink)]">10.000+</div>
              <div className="text-sm text-[color:var(--color-ink-muted)] mt-1">Workflow attivi</div>
            </div>
            <div className="w-px h-12 bg-[color:var(--color-border)] hidden sm:block"></div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-semibold text-[color:var(--color-ink)]">75%</div>
              <div className="text-sm text-[color:var(--color-ink-muted)] mt-1">Riduzione tempi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
