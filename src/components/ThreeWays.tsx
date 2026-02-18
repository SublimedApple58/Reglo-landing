import { CalendarCheck2, CircleDollarSign, TimerReset } from 'lucide-react';

export default function ThreeWays() {
  const ways = [
    {
      title: 'Agenda senza attriti',
      description: 'Ogni ruolo vede solo cio che serve e aggiorna lo stato guida in pochi tap.',
      icon: CalendarCheck2,
    },
    {
      title: 'Slot sempre valorizzati',
      description: 'Cancellazioni e ripianificazioni diventano opportunita, non ore perse.',
      icon: TimerReset,
    },
    {
      title: 'Pagamenti sotto controllo',
      description: 'Storico chiaro, residui immediati e documenti disponibili per ogni transazione.',
      icon: CircleDollarSign,
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
            Metodo
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold mt-3 mb-4 text-[color:var(--color-ink)]">
            Tre benefici concreti per la tua autoscuola
          </h2>
          <p className="text-base text-[color:var(--color-ink-muted)] max-w-3xl mx-auto">
            Meno coordinamento manuale, piu controllo operativo su lezioni e incassi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ways.map((way) => {
            const Icon = way.icon;
            return (
              <div key={way.title} className="glass-card interactive-lift rounded-3xl p-6">
                <div className="h-12 w-12 rounded-2xl flex items-center justify-center bg-[color:var(--color-accent)]">
                  <Icon className="h-6 w-6 text-[color:var(--color-ink)]" />
                </div>
                <h3 className="text-base font-semibold mt-5 text-[color:var(--color-ink)]">{way.title}</h3>
                <p className="text-xs text-[color:var(--color-ink-muted)] mt-3">{way.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
