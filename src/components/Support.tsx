import { Headset, MapPin, Users2 } from 'lucide-react';

export default function Support() {
  const items = [
    {
      title: 'Onboarding dedicato autoscuole',
      description: 'Setup iniziale su ruoli, veicoli, regole agenda e gestione disponibilita.',
      icon: Headset,
    },
    {
      title: 'Supporto operativo continuo',
      description: 'Affianchiamo segreteria e istruttori durante l\'adozione quotidiana.',
      icon: MapPin,
    },
    {
      title: 'Formazione per il team',
      description: 'Sessioni pratiche per titolare, istruttori e personale amministrativo.',
      icon: Users2,
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
              Supporto
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[color:var(--color-ink)]">
              Implementazione guidata, senza lasciare il team da solo
            </h2>
            <p className="text-base text-[color:var(--color-ink-muted)]">
              Ti aiutiamo a passare da gestione manuale a operativita strutturata con tempi e obiettivi chiari.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="glass-chip rounded-full px-4 py-2 text-sm text-[color:var(--color-ink-muted)]">
                Checkpoint settimanali
              </span>
              <span className="glass-chip rounded-full px-4 py-2 text-sm text-[color:var(--color-ink-muted)]">
                Supporto post go-live
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
                      <div className="text-sm font-semibold text-[color:var(--color-ink)]">{item.title}</div>
                      <div className="text-xs text-[color:var(--color-ink-muted)] mt-1">{item.description}</div>
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
