import { CheckCircle2, Compass, Rocket } from 'lucide-react';

export default function SwitchTo() {
  const steps = [
    {
      title: 'Analisi operativa iniziale',
      description: 'Definiamo regole su disponibilita, durata guide e gestione veicoli.',
      icon: Compass,
    },
    {
      title: 'Configurazione assistita',
      description: 'Impostiamo ruoli, agenda e automazioni con i tuoi referenti interni.',
      icon: Rocket,
    },
    {
      title: 'Avvio e ottimizzazione',
      description: 'Monitoriamo i primi giorni e correggiamo il setup dove serve.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="glass-panel rounded-3xl p-8 sm:p-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
              Attivazione
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[color:var(--color-ink)]">
              Passa a Reglo senza fermare la segreteria
            </h2>
            <p className="text-base text-[color:var(--color-ink-muted)]">
              Migrazione graduale, training pratico e allineamento costante con il team operativo.
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="glass-card rounded-2xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-2xl flex items-center justify-center bg-[color:var(--color-accent)]">
                      <Icon className="h-5 w-5 text-[color:var(--color-ink)]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[color:var(--color-ink)]">{step.title}</div>
                      <div className="text-xs text-[color:var(--color-ink-muted)] mt-1">{step.description}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
