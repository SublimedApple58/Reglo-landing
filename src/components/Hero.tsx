import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const scrollToDemo = () => {
    document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
      <div
        className="absolute -top-24 right-[-8%] h-72 w-72 rounded-full bg-[color:var(--color-accent-soft)] blur-3xl opacity-70 animate-float-slow"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-12%] left-[-10%] h-80 w-80 rounded-full bg-[color:var(--color-sky)] blur-3xl opacity-80 animate-float-slower"
        aria-hidden="true"
      />
      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-20 lg:pt-20 lg:pb-24">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div className="space-y-8">
            <div className="glass-chip inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--color-ink)]">
              <span className="h-2 w-2 rounded-full bg-[color:var(--color-ink)]" />
              Automazione ERP
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-[color:var(--color-ink)]">
              Automatizza i processi aziendali senza cambiare gestionale
            </h1>
            <p className="text-lg sm:text-xl text-[color:var(--color-ink-muted)] leading-relaxed">
              Reglo si integra con il tuo ERP e trasforma operazioni manuali ripetitive in workflow chiari,
              tracciabili e pronti per la firma digitale. Tutto da un editor visuale, senza cambiare strumenti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToDemo}
                className="interactive-lift px-7 py-3.5 rounded-full bg-[color:var(--color-ink)] text-white font-semibold text-base sm:text-lg flex items-center justify-center gap-2 shadow-soft"
              >
                Richiedi una demo
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => document.getElementById('workflow-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="interactive-lift px-7 py-3.5 rounded-full font-semibold text-base sm:text-lg flex items-center justify-center gap-2 border border-white/70 text-[color:var(--color-ink)] bg-white/70"
              >
                <Play className="w-5 h-5" />
                Scopri come funziona
              </button>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-[color:var(--color-ink-muted)]">
              <div className="flex items-center gap-2">
                <span className="text-[color:var(--color-ink)] font-semibold">-80%</span>
                tempi operativi
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[color:var(--color-ink)] font-semibold">ERP ready</span>
                nessuna sostituzione
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[color:var(--color-ink)] font-semibold">Go-live</span>
                in pochi giorni
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glass-panel rounded-3xl p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
                  <span className="h-2 w-2 rounded-full bg-[color:var(--color-ink)]" />
                  Workflow live
                </div>
                <span className="text-xs text-[color:var(--color-ink-muted)]">ERP sync</span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="glass-card rounded-2xl p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-[color:var(--color-ink-muted)]">Trigger</div>
                  <div className="text-sm font-semibold text-[color:var(--color-ink)] mt-1">
                    Nuovo ordine nel gestionale
                  </div>
                  <div className="text-xs text-[color:var(--color-ink-muted)] mt-1">
                    Avvio automatico dal tuo ERP
                  </div>
                </div>

                <div className="flex justify-center">
                  <div
                    className="h-6 w-px"
                    style={{ background: 'linear-gradient(180deg, var(--color-ink), transparent)' }}
                  />
                </div>

                <div className="glass-card rounded-2xl p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-[color:var(--color-ink-muted)]">Azione</div>
                  <div className="text-sm font-semibold text-[color:var(--color-ink)] mt-1">
                    Genera documento con DocManager
                  </div>
                  <div className="text-xs text-[color:var(--color-ink-muted)] mt-1">
                    Dati compilati in tempo reale
                  </div>
                </div>

                <div className="flex justify-center">
                  <div
                    className="h-6 w-px"
                    style={{ background: 'linear-gradient(180deg, var(--color-ink), transparent)' }}
                  />
                </div>

                <div className="glass-card rounded-2xl p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-[color:var(--color-ink-muted)]">Output</div>
                  <div className="text-sm font-semibold text-[color:var(--color-ink)] mt-1">
                    Invio automatico al cliente
                  </div>
                  <div className="text-xs text-[color:var(--color-ink-muted)] mt-1">
                    Firma digitale e tracking inclusi
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card absolute -bottom-6 -left-6 hidden sm:block rounded-2xl px-4 py-3">
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
                Risparmio
              </div>
              <div className="text-lg font-semibold text-[color:var(--color-ink)]">
                -43 min per ordine
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
