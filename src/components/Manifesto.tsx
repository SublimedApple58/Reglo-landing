import { ArrowRight, FileCheck, Shield, Timer } from 'lucide-react';

export default function Manifesto() {
  const points = [
    'Semplifica le approvazioni interne in un unico flusso.',
    'Elimina i passaggi manuali che rallentano le operazioni.',
    'Traccia ogni documento con audit completo e storico.',
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <div className="glass-panel rounded-3xl p-8">
            <div className="glass-card rounded-2xl p-5 mb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl flex items-center justify-center bg-[color:var(--color-accent)]">
                  <FileCheck className="h-5 w-5 text-[color:var(--color-ink)]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[color:var(--color-ink)]">Workflow puliti</div>
                  <div className="text-xs text-[color:var(--color-ink-muted)]">Documenti sempre coerenti</div>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-5 mb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl flex items-center justify-center bg-[color:var(--color-accent)]">
                  <Shield className="h-5 w-5 text-[color:var(--color-ink)]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[color:var(--color-ink)]">Compliance sotto controllo</div>
                  <div className="text-xs text-[color:var(--color-ink-muted)]">Audit pronto in un click</div>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl flex items-center justify-center bg-[color:var(--color-accent)]">
                  <Timer className="h-5 w-5 text-[color:var(--color-ink)]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[color:var(--color-ink)]">Tempi ridotti</div>
                  <div className="text-xs text-[color:var(--color-ink-muted)]">Automazioni operative quotidiane</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
              Manifesto
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[color:var(--color-ink)]">
              Odiamo la burocrazia operativa
            </h2>
            <p className="text-base text-[color:var(--color-ink-muted)]">
              Reglo nasce per togliere attrito dal lavoro quotidiano. Ogni step superfluo viene trasformato
              in un flusso automatico, misurabile e condiviso da tutto il team.
            </p>
            <div className="space-y-3 text-sm text-[color:var(--color-ink-muted)]">
              {points.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[color:var(--color-ink)]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <button className="interactive-lift inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[color:var(--color-ink)] text-white font-semibold">
              Scopri la visione
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
