import { Headset, MapPin, Users2 } from 'lucide-react';

export default function Support() {
  const items = [
    {
      title: 'Project manager dedicato',
      description: 'Un referente unico per onboarding, configurazione e go-live.',
      icon: Headset,
    },
    {
      title: 'Conoscenza del tuo ERP',
      description: 'Parliamo il linguaggio del gestionale e dei tuoi flussi interni.',
      icon: MapPin,
    },
    {
      title: 'Training per il team',
      description: 'Sessioni guidate per operations, amministrazione e IT.',
      icon: Users2,
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
              Supporto
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[color:var(--color-ink)]">
              Un team dedicato ti segue passo dopo passo
            </h2>
            <p className="text-lg text-[color:var(--color-ink-muted)]">
              Non sei mai solo: dal primo workshop all'automazione completa. Reglo nasce per
              accompagnare le PMI con un onboarding rapido e concreto.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="glass-chip rounded-full px-4 py-2 text-sm text-[color:var(--color-ink-muted)]">
                Go-live in poche settimane
              </span>
              <span className="glass-chip rounded-full px-4 py-2 text-sm text-[color:var(--color-ink-muted)]">
                Supporto continuo post-lancio
              </span>
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-8 space-y-4">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="glass-card rounded-2xl p-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[color:var(--color-accent)]">
                      <Icon className="h-5 w-5 text-[color:var(--color-ink)]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[color:var(--color-ink)]">
                        {item.title}
                      </div>
                      <div className="text-xs text-[color:var(--color-ink-muted)] mt-1">
                        {item.description}
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
