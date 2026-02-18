import { CalendarDays, Shield, Timer } from 'lucide-react';

export default function Manifesto() {
  const points = [
    'Ridurre al minimo i passaggi manuali tra segreteria e istruttori.',
    'Mantenere l\'agenda sempre aggiornata e leggibile da tutti i ruoli.',
    'Avere storico e stato pagamenti chiari, senza fogli paralleli.',
  ];

  return (
    <section className="py-16">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <div className="glass-panel rounded-3xl p-8">
            <div className="glass-card rounded-2xl p-5 mb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl flex items-center justify-center bg-[color:var(--color-ink)]">
                  <CalendarDays className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[color:var(--color-ink)]">Agenda pulita</div>
                  <div className="text-xs text-[color:var(--color-ink-muted)]">Guide, disponibilita e no-show sotto controllo</div>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-5 mb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl flex items-center justify-center bg-[color:var(--color-ink)]">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[color:var(--color-ink)]">Decisioni piu sicure</div>
                  <div className="text-xs text-[color:var(--color-ink-muted)]">Storico completo su lezioni e pagamenti</div>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl flex items-center justify-center bg-[color:var(--color-ink)]">
                  <Timer className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[color:var(--color-ink)]">Tempo recuperato</div>
                  <div className="text-xs text-[color:var(--color-ink-muted)]">Meno telefonate, meno riempimenti manuali</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[color:var(--color-ink)]">
              Reglo nasce per il lavoro reale delle autoscuole
            </h2>
            <p className="text-base text-[color:var(--color-ink-muted)]">
              Ogni funzione e pensata per le operazioni quotidiane: richieste guida, disponibilita
              istruttori, assegnazione veicoli, notifiche e incassi.
            </p>
            <div className="space-y-3 text-sm text-[color:var(--color-ink-muted)]">
              {points.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[color:var(--color-ink)]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
