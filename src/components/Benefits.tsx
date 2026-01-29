import { Clock, Target, Shield, TrendingUp } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: 'Riduci il lavoro manuale',
      color: 'var(--color-ink-soft)',
      soft: 'rgba(50, 77, 122, 0.16)',
      points: [
        'Elimina operazioni ripetitive quotidiane',
        'Libera tempo per attività strategiche',
        'Riduci i tempi di elaborazione fino all\'80%',
        'Automatizza processi che richiedono ore di lavoro',
      ],
    },
    {
      icon: Target,
      title: 'Elimina gli errori ripetitivi',
      color: 'var(--color-ink)',
      soft: 'rgba(50, 77, 122, 0.16)',
      points: [
        'Zero errori di trascrizione manuale',
        'Dati sempre aggiornati e coerenti',
        'Tracciabilità completa di ogni operazione',
        'Conformità garantita su ogni documento',
      ],
    },
    {
      icon: Shield,
      title: 'Documenti sempre aggiornati e tracciabili',
      color: 'var(--color-ink)',
      soft: 'rgba(50, 77, 122, 0.16)',
      points: [
        'Versioning automatico di tutti i documenti',
        'Storico completo delle modifiche',
        'Firma digitale integrata e certificata',
        'Archiviazione sicura in cloud',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Cresci senza aumentare i costi operativi',
      color: 'var(--color-ink)',
      soft: 'rgba(50, 77, 122, 0.16)',
      points: [
        'Scala il business senza assumere nuovo personale',
        'ROI positivo già nei primi mesi',
        'Gestisci più ordini con lo stesso team',
        'Investi il risparmio in crescita strategica',
      ],
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
            Vantaggi
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold mt-3 mb-4 text-[color:var(--color-ink)]">
            I vantaggi per le PMI italiane
          </h2>
          <p className="text-lg text-[color:var(--color-ink-muted)] max-w-3xl mx-auto">
            Reglo è progettato per le esigenze concrete delle PMI che vogliono crescere senza
            complicazioni tecnologiche.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="glass-card interactive-lift rounded-2xl px-5 py-4"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl border border-white/60 bg-white/80"
                  >
                    <Icon className="h-4 w-4 text-[color:var(--color-ink)]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-[color:var(--color-ink)]">
                      {benefit.title}
                    </div>
                    <ul className="mt-2 grid gap-2 text-xs text-[color:var(--color-ink-muted)] sm:grid-cols-2">
                      {benefit.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[color:var(--color-ink)]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* <div className="mt-12 glass-panel rounded-3xl px-8 py-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="glass-chip inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[color:var(--color-ink-muted)]">Caso reale</span>
            </div>
            <p className="text-base sm:text-lg text-[color:var(--color-ink-muted)] leading-relaxed">
              "<span className="font-semibold text-[color:var(--color-ink)]">Con Reglo abbiamo automatizzato la gestione degli ordini</span>,
              riducendo i tempi da 45 minuti a 2 minuti per ordine. Il team commerciale ora si concentra sulle vendite
              invece di compilare documenti."
            </p>
            <div className="mt-5 pt-5 border-t border-[color:var(--color-border)]">
              <div className="text-sm font-semibold text-[color:var(--color-ink)]">Marco Rossi</div>
              <div className="text-xs text-[color:var(--color-ink-muted)]">
                Responsabile Operations, PMI manifatturiera 50 dipendenti
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
