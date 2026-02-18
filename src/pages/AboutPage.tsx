import { CalendarClock, CarFront, CreditCard, ShieldCheck, TimerReset, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1536px] mx-auto px-6 py-16 space-y-14">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
            Piattaforma
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold mt-3 text-[color:var(--color-ink)]">
            Reglo Autoscuole
          </h1>
          <p className="text-base text-[color:var(--color-ink-muted)] mt-4">
            Una piattaforma cloud pensata per coordinare agenda, disponibilita e pagamenti
            tra allievi, istruttori e titolare.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <div className="glass-panel rounded-3xl p-6 relative">
            <img
              src="/agenda_screen.png"
              alt="Anteprima agenda e stato guide"
              className="w-full rounded-3xl object-cover object-left-top shadow-soft"
            />
            <div className="absolute -bottom-4 left-6 hidden sm:inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)] shadow-soft">
              Agenda operativa
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-5">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-4 bg-[color:var(--color-ink)]">
                <CalendarClock className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-base font-semibold mb-2 text-[color:var(--color-ink)]">Agenda centralizzata</h2>
              <p className="text-sm text-[color:var(--color-ink-muted)]">
                Pianificazione guide, disponibilita istruttori e stato lezioni in tempo reale.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[color:var(--color-ink)]">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[color:var(--color-ink)]">Ruoli separati</div>
                    <div className="text-xs text-[color:var(--color-ink-muted)]">Flussi dedicati per allievi, istruttori e titolare</div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[color:var(--color-accent)]">
                    <CarFront className="w-4 h-4 text-[color:var(--color-ink)]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[color:var(--color-ink)]">Veicoli gestiti</div>
                    <div className="text-xs text-[color:var(--color-ink-muted)]">Disponibilita e override rapidi in un pannello unico</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">
          <div className="glass-panel rounded-3xl p-6 relative lg:order-2">
            <img
              src="/saas_screen.png"
              alt="Anteprima pagamenti e storico"
              className="w-full rounded-3xl object-cover object-left-top shadow-soft"
            />
            <div className="absolute -bottom-4 right-6 hidden sm:inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)] shadow-soft">
              Pagamenti e storico
            </div>
          </div>

          <div className="space-y-6 lg:order-1">
            <div className="glass-card rounded-2xl p-5">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-4 bg-[color:var(--color-accent)]">
                <CreditCard className="w-5 h-5 text-[color:var(--color-ink)]" />
              </div>
              <h2 className="text-base font-semibold mb-2 text-[color:var(--color-ink)]">Controllo economico</h2>
              <p className="text-sm text-[color:var(--color-ink-muted)]">
                Stato pagamenti, residui e transazioni collegati alle guide in un unico punto.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[color:var(--color-accent)]">
                    <TimerReset className="w-4 h-4 text-[color:var(--color-ink)]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[color:var(--color-ink)]">Slot recovery</div>
                    <div className="text-xs text-[color:var(--color-ink-muted)]">Gestione rapida delle cancellazioni per ridurre i buchi</div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[color:var(--color-accent)]">
                    <ShieldCheck className="w-4 h-4 text-[color:var(--color-ink)]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[color:var(--color-ink)]">Storico affidabile</div>
                    <div className="text-xs text-[color:var(--color-ink-muted)]">Eventi tracciati per lezioni, presenze e addebiti</div>
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
