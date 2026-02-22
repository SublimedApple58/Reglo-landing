import { ArrowRight, CalendarClock, CheckCircle2, Users } from 'lucide-react';
import { CAL_BOOKING_URL, trackBookingCTA } from '../lib/booking';

const highlights = [
  'Analisi rapida della tua agenda attuale',
  'Stima slot recuperabili e tempi operativi',
  'Piano pratico per attivazione e onboarding',
];

export default function DemoPage() {
  return (
    <div className="min-h-screen py-14 sm:py-20 lg:py-20">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
        <section className="rounded-3xl border border-white/70 bg-white/72 p-6 shadow-[0_14px_36px_rgba(50,78,122,0.16)] backdrop-blur-[16px] sm:p-8 lg:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--color-ink-muted)]">
              Analisi strategica
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-[color:var(--color-ink)] sm:text-5xl">
              Scegli l'orario e prenota subito la call.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-[color:var(--color-ink-muted)] sm:text-base">
              Niente modulo da compilare: vai su calendario, seleziona uno slot libero e ricevi la conferma in automatico.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="glass-card rounded-2xl p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--color-accent)]">
                <CalendarClock className="h-5 w-5 text-[color:var(--color-ink)]" />
              </div>
              <h2 className="mt-4 text-base font-semibold text-[color:var(--color-ink)]">30 minuti</h2>
              <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">Confronto pratico sui tuoi processi reali.</p>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--color-accent)]">
                <Users className="h-5 w-5 text-[color:var(--color-ink)]" />
              </div>
              <h2 className="mt-4 text-base font-semibold text-[color:var(--color-ink)]">Team Reglo</h2>
              <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">Parli direttamente con chi segue le autoscuole ogni giorno.</p>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--color-accent)]">
                <CheckCircle2 className="h-5 w-5 text-[color:var(--color-ink)]" />
              </div>
              <h2 className="mt-4 text-base font-semibold text-[color:var(--color-ink)]">Output chiaro</h2>
              <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">Esci dalla call con priorita e prossimi passi concreti.</p>
            </div>
          </div>

          <ul className="mt-8 space-y-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[color:var(--color-ink-muted)]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:var(--color-ink)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <a
              href={CAL_BOOKING_URL}
              onClick={() => trackBookingCTA('demo_page')}
              className="interactive-lift inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--color-ink)] px-6 py-3 text-sm font-semibold text-white sm:w-auto sm:text-base"
            >
              Apri calendario Cal.com
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
