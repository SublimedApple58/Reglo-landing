import { FileText, Workflow, Zap, Lock, Pencil, Database } from 'lucide-react';

export default function AboutReglo() {
  return (
    <section
      className="py-20"
      style={{
        background: 'linear-gradient(180deg, var(--color-paper) 0%, var(--color-sand) 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
            Piattaforma
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold mt-3 mb-4 text-[color:var(--color-ink)]">
            Cos'è Reglo
          </h2>
          <p className="text-lg text-[color:var(--color-ink-muted)] max-w-3xl mx-auto">
            Una piattaforma cloud che si connette al tuo gestionale e automatizza i processi interni
            attraverso due strumenti potenti e integrati
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-3xl p-8 border border-[color:var(--color-border)] bg-white/90 shadow-soft">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm" style={{ backgroundColor: 'var(--color-accent)' }}>
              <FileText className="w-7 h-7 text-[color:var(--color-ink)]" />
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-[color:var(--color-ink)]">
              DocManager
            </h3>

            <p className="text-base sm:text-lg text-[color:var(--color-ink-muted)] mb-6">
              Il tuo sistema avanzato di gestione documentale integrato con l'ERP
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm" style={{ backgroundColor: 'var(--color-accent)' }}>
                  <Pencil className="w-4 h-4 text-[color:var(--color-ink)]" />
                </div>
                <div>
                  <div className="font-semibold text-[color:var(--color-ink)]">Editor PDF integrato con form builder</div>
                  <div className="text-sm text-[color:var(--color-ink-muted)]">Crea e modifica documenti senza uscire dalla piattaforma</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm" style={{ backgroundColor: 'var(--color-accent)' }}>
                  <Zap className="w-4 h-4 text-[color:var(--color-ink)]" />
                </div>
                <div>
                  <div className="font-semibold text-[color:var(--color-ink)]">Auto-compilazione assistita da AI</div>
                  <div className="text-sm text-[color:var(--color-ink-muted)]">L'intelligenza artificiale compila i documenti automaticamente</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm" style={{ backgroundColor: 'var(--color-ink)' }}>
                  <Database className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-[color:var(--color-ink)]">Connessione automatica con anagrafiche ERP</div>
                  <div className="text-sm text-[color:var(--color-ink-muted)]">I dati del gestionale popolano i documenti in tempo reale</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm" style={{ backgroundColor: 'var(--color-accent)' }}>
                  <Lock className="w-4 h-4 text-[color:var(--color-ink)]" />
                </div>
                <div>
                  <div className="font-semibold text-[color:var(--color-ink)]">Firma digitale integrata nei workflow</div>
                  <div className="text-sm text-[color:var(--color-ink-muted)]">Genera, compila e firma documenti automaticamente</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-8 border border-[color:var(--color-border)] bg-white/90 shadow-soft">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm" style={{ backgroundColor: 'var(--color-ink)' }}>
              <Workflow className="w-7 h-7 text-white" />
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-[color:var(--color-ink)]">
              Workflow Builder
            </h3>

            <p className="text-base sm:text-lg text-[color:var(--color-ink-muted)] mb-6">
              Il cuore di Reglo: crea automazioni con un editor visuale a blocchi
            </p>

            <div className="space-y-6">
              <div>
                <div className="font-semibold text-[color:var(--color-ink)] mb-3">Trigger flessibili</div>
                <div className="space-y-2">
                  <div className="bg-[color:var(--color-sand)] px-4 py-2 rounded-lg text-[color:var(--color-ink-muted)] border border-[color:var(--color-border)]">
                    Eventi dal tuo gestionale aziendale
                  </div>
                  <div className="bg-[color:var(--color-sand)] px-4 py-2 rounded-lg text-[color:var(--color-ink-muted)] border border-[color:var(--color-border)]">
                    Attivazione manuale da utenti
                  </div>
                  <div className="bg-[color:var(--color-sand)] px-4 py-2 rounded-lg text-[color:var(--color-ink-muted)] border border-[color:var(--color-border)]">
                    Schedulazione temporale automatica
                  </div>
                </div>
              </div>

              <div>
                <div className="font-semibold text-[color:var(--color-ink)] mb-3">Azioni potenti</div>
                <div className="space-y-2">
                  <div className="bg-[color:var(--color-sand)] px-4 py-2 rounded-lg text-[color:var(--color-ink-muted)] border border-[color:var(--color-border)]">
                    Crea/aggiorna record nel gestionale
                  </div>
                  <div className="bg-[color:var(--color-sand)] px-4 py-2 rounded-lg text-[color:var(--color-ink-muted)] border border-[color:var(--color-border)]">
                    Genera e compila documenti con DocManager
                  </div>
                  <div className="bg-[color:var(--color-sand)] px-4 py-2 rounded-lg text-[color:var(--color-ink-muted)] border border-[color:var(--color-border)]">
                    Invia email, notifiche Slack, e altro
                  </div>
                  <div className="bg-[color:var(--color-sand)] px-4 py-2 rounded-lg text-[color:var(--color-ink-muted)] border border-[color:var(--color-border)]">
                    Integra servizi esterni via API
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
