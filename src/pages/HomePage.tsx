import { ArrowRight, Calculator, CalendarClock, CheckCircle2, MessageSquare, Smartphone, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import CalculatorTeaser from '../components/CalculatorTeaser';
import IphoneMockup from '../components/IphoneMockup';
import FinalCTA from '../components/FinalCTA';

const pains = [
  'Slot vuoti dopo disdette last-minute',
  'Segreteria bloccata su chiamate e follow-up manuali',
  'Istruttori senza vista unica su agenda e cambi stato',
  'Pagamenti e storico frammentati tra strumenti diversi',
];

const pillars = [
  {
    title: 'Agenda unica per tutti i ruoli',
    description:
      'Allievo, istruttore e titolare lavorano sullo stesso stato operativo, senza passaggi ciechi.',
    icon: CalendarClock,
  },
  {
    title: 'Engine anti-slot-vuoti',
    description:
      'Quando uno slot salta, Reglo innesca il recupero e propone subito nuove assegnazioni.',
    icon: Sparkles,
  },
  {
    title: 'Comunicazioni e pagamenti allineati',
    description:
      'Notifiche automatiche e situazione economica chiara dentro lo stesso flusso.',
    icon: MessageSquare,
  },
];

export default function HomePage() {
  const trackCalculatorCTA = () => {
    const fbq = (window as Window & { fbq?: (...args: unknown[]) => void }).fbq;
    if (typeof fbq === 'function') {
      fbq('trackCustom', 'CalculatorCTA_Click', { source: 'home_hero' });
    }
  };

  return (
    <div className="pb-16">
      <section className="relative overflow-hidden px-6 pb-16 pt-8 sm:pt-10">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <span className="glass-chip inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
              Reglo Autoscuole
            </span>
            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.04] text-[color:var(--color-ink)] sm:text-5xl lg:text-6xl">
              Cloud + app mobile per eliminare i buchi in agenda.
            </h1>
            <p className="max-w-xl text-base text-[color:var(--color-ink-muted)] sm:text-lg">
              Reglo coordina disponibilita, prenotazioni, presenze e pagamenti in un unico sistema.
              L obiettivo e semplice: meno caos operativo, zero slot sprecati.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/demo"
                className="interactive-lift inline-flex items-center gap-2 rounded-full bg-[color:var(--color-ink)] px-6 py-3 text-sm font-semibold text-white sm:text-base"
              >
                Prenota una demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/allievi"
                className="interactive-lift inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-white/80 px-6 py-3 text-sm font-semibold text-[color:var(--color-ink)] sm:text-base"
              >
                Promo allievi
                <Smartphone className="h-4 w-4" />
              </Link>
              <Link
                to="/calcolatore"
                onClick={trackCalculatorCTA}
                className="interactive-lift inline-flex items-center gap-2 rounded-full bg-[color:var(--color-accent)] px-6 py-3 text-sm font-semibold text-[color:var(--color-ink)] sm:text-base"
              >
                Calcola soldi persi
                <Calculator className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {pains.map((item) => (
                <div key={item} className="glass-card rounded-2xl px-4 py-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:var(--color-ink)]" />
                    <p className="text-sm text-[color:var(--color-ink-muted)]">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center gap-4 sm:gap-6">
            <IphoneMockup label="Agenda live" variant="agenda" className="translate-y-6" />
            <IphoneMockup label="Pagamenti" variant="payments" />
            <IphoneMockup label="Richieste guida" variant="requests" className="-translate-y-4 hidden md:block" />
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--color-ink-muted)]">
              Perche funziona
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[color:var(--color-ink)] sm:text-4xl">
              Non e un gestionale in piu: e il motore operativo della tua autoscuola.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article key={pillar.title} className="glass-panel rounded-3xl p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--color-accent)]">
                    <Icon className="h-5 w-5 text-[color:var(--color-ink)]" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-[color:var(--color-ink)]">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-[color:var(--color-ink-muted)]">{pillar.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CalculatorTeaser />

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-[1440px] gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="glass-panel rounded-3xl p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--color-ink-muted)]">
              App mobile protagonista
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-[color:var(--color-ink)] sm:text-3xl">
              Ogni ruolo vede solo cio che serve e agisce in pochi tap.
            </h3>
            <div className="mt-6 space-y-4">
              <div className="glass-card rounded-2xl p-4">
                <p className="text-sm font-semibold text-[color:var(--color-ink)]">Allievo</p>
                <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">
                  Richiede guide, conferma slot proposti e riceve promemoria senza chiamate.
                </p>
              </div>
              <div className="glass-card rounded-2xl p-4">
                <p className="text-sm font-semibold text-[color:var(--color-ink)]">Istruttore</p>
                <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">
                  Agenda giornaliera pulita, check-in/no-show in tempo reale, meno frizioni con la segreteria.
                </p>
              </div>
              <div className="glass-card rounded-2xl p-4">
                <p className="text-sm font-semibold text-[color:var(--color-ink)]">Titolare</p>
                <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">
                  Controlla saturazione slot, eccezioni operative e stato finanziario da un solo pannello.
                </p>
              </div>
            </div>
          </div>
          <div className="glass-panel rounded-3xl p-5">
            <IphoneMockup label="Preview app iOS/Android" variant="agenda" />
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
