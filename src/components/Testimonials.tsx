import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Con Reglo abbiamo eliminato 12 passaggi manuali nelle conferme d'ordine. Il team è più veloce e gli errori sono spariti.",
      author: 'Elena Conti',
      role: 'Operations Manager',
      company: 'PMI manifatturiera, 80 dipendenti',
    },
    {
      quote: "In 10 giorni abbiamo automatizzato la generazione dei documenti e la firma digitale. Ora possiamo gestire il doppio degli ordini.",
      author: 'Luca Marin',
      role: 'Responsabile Amministrazione',
      company: 'Azienda commerciale, 45 dipendenti',
    },
    {
      quote: "La visibilità sui workflow è totale. Ogni reparto sa cosa fare e quando, senza rincorrere email e file Excel.",
      author: 'Sara Galli',
      role: 'Direttrice Operations',
      company: 'Servizi B2B, 60 dipendenti',
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
            Testimonianze
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold mt-3 mb-4 text-[color:var(--color-ink)]">
            Non crederci sulla parola
          </h2>
          <p className="text-lg text-[color:var(--color-ink-muted)] max-w-3xl mx-auto">
            Le storie di chi ha già automatizzato processi e documenti con Reglo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="glass-card interactive-lift rounded-3xl p-7"
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
              <div className="text-3xl sm:text-4xl font-semibold text-[color:var(--color-ink)]">12k+</div>
              <div className="text-sm text-[color:var(--color-ink-muted)] mt-1">Workflow automatizzati</div>
            </div>
            <div className="w-px h-12 bg-[color:var(--color-border)] hidden sm:block"></div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-semibold text-[color:var(--color-ink)]">-78%</div>
              <div className="text-sm text-[color:var(--color-ink-muted)] mt-1">Tempo operativo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
