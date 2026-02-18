import { CheckCircle2, Compass, Layers3, Zap } from 'lucide-react';
import IphoneMockup from '../components/IphoneMockup';

const principles = [
  {
    title: 'Operativo prima di tutto',
    description: 'Ogni funzione nasce da problemi reali di segreteria, non da feature decorative.',
    icon: Compass,
  },
  {
    title: 'Un solo flusso condiviso',
    description: 'Agenda, disponibilita, pagamenti e comunicazioni in un unico sistema coerente.',
    icon: Layers3,
  },
  {
    title: 'Velocita di esecuzione',
    description: 'Meno passaggi manuali, piu decisioni immediate con dati sempre aggiornati.',
    icon: Zap,
  },
];

export default function AboutPage() {
  return (
    <div className="pb-16">
      <section className="px-6 pb-12 pt-8 sm:pt-10">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
              Chi siamo
            </p>
            <h1 className="text-4xl font-semibold leading-[1.04] text-[color:var(--color-ink)] sm:text-5xl">
              Costruiamo Reglo per far lavorare meglio le autoscuole, ogni giorno.
            </h1>
            <p className="max-w-2xl text-base text-[color:var(--color-ink-muted)] sm:text-lg">
              Non vogliamo aggiungere complessita. Vogliamo togliere attrito operativo: slot persi,
              chiamate manuali, informazioni sparse e decisioni prese al buio.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="glass-card rounded-2xl p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">Missione</p>
                <p className="mt-2 text-sm text-[color:var(--color-ink-muted)]">Zero slot vuoti, zero caos interno.</p>
              </div>
              <div className="glass-card rounded-2xl p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">Approccio</p>
                <p className="mt-2 text-sm text-[color:var(--color-ink-muted)]">Progettazione con feedback operativo reale.</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <IphoneMockup label="Visione prodotto" variant="agenda" />
            <IphoneMockup label="Esperienza mobile" variant="requests" className="-translate-y-4 hidden sm:block" />
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-[1440px] glass-panel rounded-3xl p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
            Principi di prodotto
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {principles.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="glass-card rounded-2xl p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[color:var(--color-accent)]">
                    <Icon className="h-5 w-5 text-[color:var(--color-ink)]" />
                  </div>
                  <h2 className="mt-4 text-base font-semibold text-[color:var(--color-ink)]">{item.title}</h2>
                  <p className="mt-2 text-sm text-[color:var(--color-ink-muted)]">{item.description}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-6 rounded-2xl border border-[color:var(--color-border)] bg-white/70 p-4">
            <p className="flex items-start gap-2 text-sm text-[color:var(--color-ink-muted)]">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:var(--color-ink)]" />
              Reglo e progettato per supportare sia la piattaforma web che la mobile app role-based.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
