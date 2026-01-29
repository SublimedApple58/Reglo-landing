import { ArrowRight, CheckCircle2, Compass, Rocket } from 'lucide-react';

export default function SwitchTo() {
  const steps = [
    {
      title: 'Assessment iniziale',
      description: 'Mappiamo insieme processi e dati del tuo ERP.',
      icon: Compass,
    },
    {
      title: 'Migrazione guidata',
      description: 'Configuriamo workflow, documenti e ruoli con il team.',
      icon: Rocket,
    },
    {
      title: 'Go-live monitorato',
      description: 'Misuriamo risultati e ottimizziamo nei primi 30 giorni.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="glass-panel rounded-3xl p-8 sm:p-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
              Passaggio a Reglo
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[color:var(--color-ink)]">
              Passa a Reglo senza bloccare le operazioni
            </h2>
            <p className="text-lg text-[color:var(--color-ink-muted)]">
              Migrazione accompagnata, training dedicato e risultati misurabili in poche settimane.
            </p>
            <button className="interactive-lift inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[color:var(--color-ink)] text-white font-semibold">
              Pianifica la transizione
              <ArrowRight className="h-5 w-5" />
            </button>
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
                      <div className="text-sm font-semibold text-[color:var(--color-ink)]">
                        {step.title}
                      </div>
                      <div className="text-xs text-[color:var(--color-ink-muted)] mt-1">
                        {step.description}
                      </div>
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
