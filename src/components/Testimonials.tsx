import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        'In due settimane abbiamo eliminato i fogli condivisi. Ora segreteria e istruttori lavorano sulla stessa agenda.',
      name: 'Marco L.',
      role: 'Titolare autoscuola',
      metric: '-40% chiamate operative',
    },
    {
      quote:
        'Le cancellazioni vengono recuperate piu rapidamente e gli slot restano pieni molto piu spesso.',
      name: 'Giulia R.',
      role: 'Responsabile segreteria',
      metric: '+28% slot recuperati',
    },
    {
      quote:
        'Pagamenti e storico sono finalmente leggibili in app: meno domande ripetitive e piu controllo.',
      name: 'Andrea F.',
      role: 'Coordinatore didattico',
      metric: '-55% verifiche manuali',
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-[1536px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
            Risultati
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold mt-3 text-[color:var(--color-ink)]">
            Cosa dicono le autoscuole
          </h2>
          <p className="text-base text-[color:var(--color-ink-muted)] mt-3 max-w-2xl mx-auto">
            Team operativi che hanno ridotto i passaggi manuali e aumentato il controllo giornaliero.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card rounded-3xl p-7">
              <Quote className="w-8 h-8 mb-5 text-[color:var(--color-accent)]" />
              <p className="text-[color:var(--color-ink)] mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div className="border-t border-[color:var(--color-border)] pt-4">
                <div className="font-semibold text-[color:var(--color-ink)]">{testimonial.name}</div>
                <div className="text-sm text-[color:var(--color-ink-muted)]">{testimonial.role}</div>
                <div className="text-sm text-[color:var(--color-ink-muted)] mt-1">{testimonial.metric}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
