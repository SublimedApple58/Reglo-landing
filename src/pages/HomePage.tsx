import { ArrowRight, Calculator, CalendarClock, CheckCircle2, MessageSquare, Smartphone, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import CalculatorTeaser from '../components/CalculatorTeaser';
import IphoneMockup from '../components/IphoneMockup';
import FinalCTA from '../components/FinalCTA';

const pains = [
  'Meno slot vuoti dopo disdette e assenze',
  'Segreteria meno bloccata su chiamate ripetitive',
  'Istruttori sempre allineati sulla stessa agenda',
];

const pillars = [
  {
    title: 'Agenda condivisa',
    description:
      'Allievo, istruttore e segreteria vedono lo stesso stato in tempo reale.',
    icon: CalendarClock,
  },
  {
    title: 'Recupero slot automatico',
    description:
      'Quando una guida salta, Reglo propone subito chi puo occupare quello spazio.',
    icon: Sparkles,
  },
  {
    title: 'Comunicazioni chiare',
    description:
      'Promemoria e pagamenti restano collegati, senza rincorrere messaggi sparsi.',
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
    <div className="overflow-x-hidden pb-16">
      <section className="relative overflow-hidden px-4 pb-10 pt-6 sm:px-6 sm:pb-14 sm:pt-10">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="space-y-5">
            <span className="glass-chip inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
              Per autoscuole
            </span>
            <h1 className="max-w-2xl text-3xl font-semibold leading-[1.08] text-[color:var(--color-ink)] sm:text-5xl lg:text-6xl">
              Meno buchi in agenda. Piu guide prenotate.
            </h1>
            <p className="max-w-xl text-[15px] text-[color:var(--color-ink-muted)] sm:text-lg">
              Riempie slot liberi, riduce chiamate e allinea segreteria, istruttori e allievi.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/demo"
                className="interactive-lift inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--color-ink)] px-6 py-3 text-sm font-semibold text-white sm:w-auto sm:text-base"
              >
                Prenota una demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/calcolatore"
                onClick={trackCalculatorCTA}
                className="interactive-lift inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--color-accent)] px-6 py-3 text-sm font-semibold text-[color:var(--color-ink)] sm:w-auto sm:text-base"
              >
                Calcola soldi persi
                <Calculator className="h-4 w-4" />
              </Link>
              <Link
                to="/allievi"
                className="inline-flex items-center gap-2 px-1 py-1 text-sm font-semibold text-[color:var(--color-ink)] underline-offset-4 hover:underline"
              >
                Sei un allievo? Attiva la promo
                <Smartphone className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-0 sm:grid-cols-2 sm:gap-3">
              {pains.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-b border-[color:var(--color-border)]/65 py-3 last:border-b-0 sm:rounded-2xl sm:border sm:border-b-0 sm:border-white/70 sm:bg-white/82 sm:px-4 sm:py-3 sm:shadow-[0_18px_35px_rgba(50,78,122,0.14)] sm:backdrop-blur-[14px]"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:var(--color-ink)]" />
                    <p className="text-sm text-[color:var(--color-ink-muted)]">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="mx-auto w-full max-w-[250px] sm:hidden">
              <IphoneMockup
                label="Agenda live"
                variant="agenda"
                screenImageSrc="/home-allievo.jpeg"
                screenImageAlt="Home allievo"
              />
            </div>
            <div className="hidden items-center justify-center gap-4 sm:flex lg:items-start lg:gap-6 lg:pt-12">
              <IphoneMockup
                label="Agenda live"
                variant="agenda"
                screenImageSrc="/home-allievo.jpeg"
                screenImageAlt="Home allievo"
                className="w-full max-w-[236px] sm:max-w-[244px] lg:mt-8"
              />
              <IphoneMockup
                label="Pagamenti"
                variant="payments"
                screenImageSrc="/pagamenti-allievo.jpeg"
                screenImageAlt="Pagamenti allievo"
                className="w-full max-w-[236px] sm:max-w-[244px] lg:mt-4"
              />
              <IphoneMockup
                label="Richieste guida"
                variant="requests"
                screenImageSrc="/prenota-guida.jpeg"
                screenImageAlt="Prenota guida"
                className="hidden w-full max-w-[244px] lg:block"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-8 max-w-2xl sm:mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--color-ink-muted)]">
              Perche funziona
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[color:var(--color-ink)] sm:text-4xl">
              Una giornata piu ordinata, da subito.
            </h2>
          </div>
          <div className="space-y-0 md:hidden">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article key={pillar.title} className="border-b border-[color:var(--color-border)]/65 py-4 last:border-b-0">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--color-accent)]">
                      <Icon className="h-4 w-4 text-[color:var(--color-ink)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[color:var(--color-ink)]">{pillar.title}</h3>
                      <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">{pillar.description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="hidden gap-4 md:grid md:grid-cols-3 md:gap-5">
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

      <section className="px-4 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto grid max-w-[1440px] gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
          <div className="rounded-3xl border border-white/70 bg-white/72 p-5 shadow-[0_14px_36px_rgba(50,78,122,0.16)] backdrop-blur-[16px] sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--color-ink-muted)]">
              App mobile protagonista
            </p>
            <h3 className="mt-3 text-xl font-semibold text-[color:var(--color-ink)] sm:text-3xl">
              Ogni ruolo vede subito cosa fare, senza confusione.
            </h3>
            <div className="mt-5 space-y-0 sm:space-y-3">
              <div className="border-b border-[color:var(--color-border)]/65 py-3 sm:rounded-2xl sm:border sm:border-b sm:border-white/70 sm:bg-white/82 sm:px-4 sm:py-4 sm:shadow-[0_18px_35px_rgba(50,78,122,0.14)] sm:backdrop-blur-[14px]">
                <p className="text-sm font-semibold text-[color:var(--color-ink)]">Allievo</p>
                <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">
                  Prenota e conferma guide in pochi tap, senza telefonate continue.
                </p>
              </div>
              <div className="border-b border-[color:var(--color-border)]/65 py-3 sm:rounded-2xl sm:border sm:border-b sm:border-white/70 sm:bg-white/82 sm:px-4 sm:py-4 sm:shadow-[0_18px_35px_rgba(50,78,122,0.14)] sm:backdrop-blur-[14px]">
                <p className="text-sm font-semibold text-[color:var(--color-ink)]">Istruttore</p>
                <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">
                  Ha la giornata ordinata e segnala subito check-in o no-show.
                </p>
              </div>
              <div className="py-3 sm:rounded-2xl sm:border sm:border-white/70 sm:bg-white/82 sm:px-4 sm:py-4 sm:shadow-[0_18px_35px_rgba(50,78,122,0.14)] sm:backdrop-blur-[14px]">
                <p className="text-sm font-semibold text-[color:var(--color-ink)]">Titolare</p>
                <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">
                  Controlla saturazione, performance e priorita operative da un solo punto.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-white/70 bg-white/72 p-4 shadow-[0_14px_36px_rgba(50,78,122,0.16)] backdrop-blur-[16px] sm:p-5">
            <div className="mx-auto w-full max-w-[250px] sm:max-w-none">
              <IphoneMockup
                label="Preview app iOS/Android"
                variant="agenda"
                screenImageSrc="/home-istruttore.jpeg"
                screenImageAlt="Home istruttore"
              />
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
