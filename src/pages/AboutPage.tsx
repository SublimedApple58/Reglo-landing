import { FileText, Workflow, Zap, Lock, Pencil, Database } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1536px] mx-auto px-6 py-16 space-y-14">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
            Piattaforma
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold mt-3 text-[color:var(--color-ink)]">
            Cos'è Reglo
          </h1>
          <p className="text-base text-[color:var(--color-ink-muted)] mt-4">
            Una piattaforma cloud che si connette al tuo gestionale e automatizza i processi interni
            attraverso due strumenti integrati e complementari.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <div className="glass-panel rounded-3xl p-6 relative">
            <img
              src="/workflow_screen.png"
              alt="Anteprima Workflow Builder"
              className="w-full rounded-3xl object-cover object-left-top shadow-soft"
            />
            <div className="absolute -bottom-4 left-6 hidden sm:inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)] shadow-soft">
              Workflow Builder
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-5">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-4 bg-[color:var(--color-ink)]">
                <Workflow className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-base font-semibold mb-2 text-[color:var(--color-ink)]">Workflow Builder</h2>
              <p className="text-sm text-[color:var(--color-ink-muted)]">
                Il cuore di Reglo: crea automazioni con un editor visuale a blocchi.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[color:var(--color-ink)]">
                    <Database className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[color:var(--color-ink)]">Connessione ERP</div>
                    <div className="text-xs text-[color:var(--color-ink-muted)]">Dati aggiornati e coerenti in tempo reale</div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[color:var(--color-accent)]">
                    <Lock className="w-4 h-4 text-[color:var(--color-ink)]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[color:var(--color-ink)]">Firma digitale</div>
                    <div className="text-xs text-[color:var(--color-ink-muted)]">Workflow certificati e tracciabili</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">
          <div className="glass-panel rounded-3xl p-6 relative lg:order-2">
            <img
              src="/docmanager_screen.png"
              alt="Anteprima DocManager"
              className="w-full rounded-3xl object-cover object-left-top shadow-soft"
            />
            <div className="absolute -bottom-4 right-6 hidden sm:inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)] shadow-soft">
              DocManager
            </div>
          </div>

          <div className="space-y-6 lg:order-1">
            <div className="glass-card rounded-2xl p-5">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-4 bg-[color:var(--color-accent)]">
                <FileText className="w-5 h-5 text-[color:var(--color-ink)]" />
              </div>
              <h2 className="text-base font-semibold mb-2 text-[color:var(--color-ink)]">DocManager</h2>
              <p className="text-sm text-[color:var(--color-ink-muted)]">
                Il tuo sistema avanzato di gestione documentale integrato con l'ERP.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[color:var(--color-accent)]">
                    <Pencil className="w-4 h-4 text-[color:var(--color-ink)]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[color:var(--color-ink)]">Editor PDF integrato</div>
                    <div className="text-xs text-[color:var(--color-ink-muted)]">Crea e modifica documenti in autonomia</div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[color:var(--color-accent)]">
                    <Zap className="w-4 h-4 text-[color:var(--color-ink)]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[color:var(--color-ink)]">Auto-compilazione AI</div>
                    <div className="text-xs text-[color:var(--color-ink-muted)]">Documenti compilati con i dati ERP</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
