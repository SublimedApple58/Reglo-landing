import { BellRing, CalendarDays, CheckCircle2, CreditCard, Repeat2, ShieldCheck } from 'lucide-react';
import IphoneMockup from '../components/IphoneMockup';

const architecture = [
  {
    title: 'Input operativo',
    points: [
      'Disponibilita di allievi, istruttori e veicoli',
      'Richieste guida da app mobile',
      'Annulli e no-show in tempo reale',
    ],
  },
  {
    title: 'Motore Reglo',
    points: [
      'Matching slot con regole autoscuola',
      'Priorita e riassegnazioni automatiche',
      'Storico completo di eventi e stati',
    ],
  },
  {
    title: 'Output immediato',
    points: [
      'Agenda aggiornata per tutti i ruoli',
      'Comunicazioni automatiche',
      'Situazione pagamenti sempre allineata',
    ],
  },
];

const capabilities = [
  {
    title: 'Agenda condivisa',
    description: 'Vista chiara per segreteria, istruttori e titolare su ogni slot della giornata.',
    icon: CalendarDays,
  },
  {
    title: 'Recovery slot automatico',
    description: 'Quando un appuntamento salta, Reglo avvia il recupero senza dipendere da chiamate manuali.',
    icon: Repeat2,
  },
  {
    title: 'Notifiche operative',
    description: 'Promemoria, cambi stato e aggiornamenti prioritari inviati al ruolo giusto.',
    icon: BellRing,
  },
  {
    title: 'Controllo pagamenti',
    description: 'Residui, incassi e stato documentale in una timeline unica.',
    icon: CreditCard,
  },
  {
    title: 'Tracciabilita completa',
    description: 'Ogni modifica resta storicizzata per controllo interno e decisioni rapide.',
    icon: ShieldCheck,
  },
  {
    title: 'Azione in pochi tap',
    description: 'Esperienze mobile pensate per operativita reale, non per demo statiche.',
    icon: CheckCircle2,
  },
];

export default function PlatformPage() {
  return (
    <div className="pb-16">
      <section className="px-6 pb-14 pt-8 sm:pt-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
              Piattaforma Reglo
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-[color:var(--color-ink)] sm:text-5xl">
              Architettura pensata per tenere l agenda sempre piena.
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base text-[color:var(--color-ink-muted)] sm:text-lg">
              Reglo collega input operativi, engine di pianificazione e output immediato in un unico sistema.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {architecture.map((block) => (
              <article key={block.title} className="glass-panel rounded-3xl p-6">
                <h2 className="text-lg font-semibold text-[color:var(--color-ink)]">{block.title}</h2>
                <ul className="mt-4 space-y-2">
                  {block.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-[color:var(--color-ink-muted)]">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--color-accent)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-[1440px] gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-panel rounded-3xl p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
              Esperienza mobile
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-[color:var(--color-ink)] sm:text-3xl">
              Mockup placeholder pronti per inserire i tuoi screenshot reali.
            </h3>
            <p className="mt-2 text-sm text-[color:var(--color-ink-muted)]">
              Abbiamo eliminato i visual legacy e messo frame iPhone neutri per mostrare chiaramente l app protagonista.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="glass-card rounded-2xl p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">Allievo</p>
                <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">Richieste guida, conferme, promemoria.</p>
              </div>
              <div className="glass-card rounded-2xl p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">Istruttore</p>
                <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">Check-in/no-show e agenda giornaliera.</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <IphoneMockup
              label="Agenda ruolo istruttore"
              variant="agenda"
              screenImageSrc="/home-istruttore.jpeg"
              screenImageAlt="Home istruttore"
            />
            <IphoneMockup
              label="Pagamenti allievo"
              variant="payments"
              screenImageSrc="/gestisci-veicoli.jpeg"
              screenImageAlt="Gestione veicoli"
              className="-translate-y-5 hidden sm:block"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
              Funzioni chiave
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="glass-card rounded-3xl p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[color:var(--color-accent)]">
                    <Icon className="h-5 w-5 text-[color:var(--color-ink)]" />
                  </div>
                  <h4 className="mt-4 text-base font-semibold text-[color:var(--color-ink)]">{item.title}</h4>
                  <p className="mt-2 text-sm text-[color:var(--color-ink-muted)]">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
