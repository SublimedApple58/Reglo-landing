import {
  ArrowRight,
  Calculator,
  CalendarClock,
  ChevronDown,
  MessageSquare,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import CalculatorTeaser from '../components/CalculatorTeaser';
import IphoneMockup from '../components/IphoneMockup';
import FinalCTA from '../components/FinalCTA';
import { CAL_BOOKING_URL, trackBookingCTA } from '../lib/booking';
import { useScrollReveal, useCounter } from '../hooks/useScrollReveal';

/* ─── DATA ────────────────────────────────────────────────────────────── */

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
      'Quando una guida salta, Reglo propone subito chi può occupare quello spazio.',
    icon: Sparkles,
  },
  {
    title: 'Comunicazioni chiare',
    description:
      'Promemoria e pagamenti restano collegati, senza rincorrere messaggi sparsi.',
    icon: MessageSquare,
  },
];

const statsData = [
  { prefix: '-', value: 40, suffix: '%', label: 'Chiamate operative', sub: 'liberate ogni settimana' },
  { prefix: '+', value: 28, suffix: '%', label: 'Slot recuperati', sub: 'dopo ogni cancellazione' },
  { prefix: '-', value: 55, suffix: '%', label: 'Verifiche manuali', sub: 'su pagamenti e storico' },
];

const roles = [
  {
    name: 'Allievo',
    desc: 'Prenota e conferma guide in pochi tap, senza telefonate continue.',
    color: '#AFE2D4',
  },
  {
    name: 'Istruttore',
    desc: 'Ha la giornata ordinata e segnala subito check-in o no-show.',
    color: '#82c8bc',
  },
  {
    name: 'Titolare',
    desc: 'Controlla saturazione, performance e priorità operative da un solo punto.',
    color: '#7ea8d4',
  },
];

/* ─── STAT COUNTER ────────────────────────────────────────────────────── */

function StatItem({
  stat,
  triggered,
  index,
}: {
  stat: (typeof statsData)[0];
  triggered: boolean;
  index: number;
}) {
  const count = useCounter(stat.value, 1400, triggered);

  return (
    <div
      className="group flex flex-col items-center py-10 px-6 sm:px-10 text-center"
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div
        className={`text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-gradient-mint transition-all duration-600 ${
          triggered ? 'stat-number-enter' : 'opacity-0 scale-90'
        }`}
      >
        {stat.prefix}
        {count}
        {stat.suffix}
      </div>
      <div className="mt-3 text-sm sm:text-base font-semibold text-white/80">{stat.label}</div>
      <div className="mt-1 text-xs sm:text-sm text-white/35">{stat.sub}</div>
    </div>
  );
}

/* ─── PAGE ────────────────────────────────────────────────────────────── */

export default function HomePage() {
  const trackCalculatorCTA = () => {
    const fbq = (window as Window & { fbq?: (...args: unknown[]) => void }).fbq;
    if (typeof fbq === 'function') {
      fbq('trackCustom', 'CalculatorCTA_Click', { source: 'home_hero' });
    }
  };

  const { ref: statsRef, isVisible: statsVisible } =
    useScrollReveal<HTMLDivElement>(0.2);
  const { ref: pillarsRef, isVisible: pillarsVisible } =
    useScrollReveal<HTMLDivElement>(0.08);
  const { ref: rolesRef, isVisible: rolesVisible } =
    useScrollReveal<HTMLDivElement>(0.08);

  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div className="overflow-x-hidden bg-[#0a1628]">

      {/* ═══════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden"
      >
        {/* Aurora background */}
        <div className="aurora-orb aurora-orb-1" />
        <div className="aurora-orb aurora-orb-2" />
        <div className="aurora-orb aurora-orb-3" />

        {/* Dark grid */}
        <div className="absolute inset-0 bg-grid-dark" />

        {/* Radial vignette */}
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(50,77,122,0.18) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 pt-14 pb-24 sm:pt-20 sm:pb-32">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 items-center">

            {/* ── Left: Copy ── */}
            <div className="space-y-7 animate-fadeInUp">
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#AFE2D4]/20 bg-[#AFE2D4]/6 px-4 py-1.5 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#AFE2D4] animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#AFE2D4]/80">
                  Per autoscuole
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.03] tracking-tight text-white">
                Meno buchi
                <br />
                <span className="text-gradient-mint">in agenda.</span>
              </h1>

              {/* Subtitle */}
              <p className="max-w-[520px] text-base sm:text-xl text-white/50 leading-relaxed">
                Riempie slot liberi, riduce chiamate e allinea segreteria,
                istruttori e allievi — in un'unica app.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 animation-delay-200 animate-fadeInUp">
                <a
                  href={CAL_BOOKING_URL}
                  onClick={() => trackBookingCTA('home_hero')}
                  className="btn-shimmer inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#AFE2D4] to-[#6cbfb0] px-6 py-3.5 text-sm sm:text-base font-bold text-[#0a1628] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(175,226,212,0.5)] cursor-pointer"
                >
                  Prenota una demo
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to="/calcolatore"
                  onClick={trackCalculatorCTA}
                  className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 hover:border-white/25"
                >
                  Calcola soldi persi
                  <Calculator className="h-4 w-4" />
                </Link>
              </div>

              {/* Allievi link */}
              <Link
                to="/allievi"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#AFE2D4]/55 hover:text-[#AFE2D4] transition-colors duration-200"
              >
                <Smartphone className="h-4 w-4" />
                Sei un allievo? Attiva la promo
              </Link>

              {/* Trust pills */}
              <div className="flex flex-wrap gap-2 pt-1 animation-delay-400 animate-fadeInUp">
                {[
                  'Setup operativo in 7 giorni',
                  'iOS & Android',
                  'Supporto italiano',
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/8 bg-white/4 px-3.5 py-1 text-xs text-white/35"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Right: Phone mockups ── */}
            <div className="hidden lg:flex items-start justify-center gap-5 animation-delay-300 animate-fadeInUp">
              <div
                className="animate-float-slow mt-10"
                style={{
                  filter: 'drop-shadow(0 40px 60px rgba(0,0,0,0.65)) drop-shadow(0 0 40px rgba(175,226,212,0.08))',
                }}
              >
                <IphoneMockup
                  label="Agenda live"
                  variant="agenda"
                  screenImageSrc="/home-allievo.jpeg"
                  screenImageAlt="Home allievo"
                  className="w-full max-w-[215px]"
                />
              </div>
              <div
                className="animate-float-slower"
                style={{
                  filter: 'drop-shadow(0 40px 60px rgba(0,0,0,0.65)) drop-shadow(0 0 40px rgba(175,226,212,0.06))',
                }}
              >
                <IphoneMockup
                  label="Pagamenti"
                  variant="payments"
                  screenImageSrc="/pagamenti-allievo.jpeg"
                  screenImageAlt="Pagamenti allievo"
                  className="w-full max-w-[215px]"
                />
              </div>
            </div>

            {/* Mobile: single phone */}
            <div className="flex justify-center lg:hidden">
              <div
                style={{
                  filter: 'drop-shadow(0 30px 50px rgba(0,0,0,0.55))',
                }}
              >
                <IphoneMockup
                  label="Agenda live"
                  variant="agenda"
                  screenImageSrc="/home-allievo.jpeg"
                  screenImageAlt="Home allievo"
                  className="w-full max-w-[200px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator hidden sm:block">
          <ChevronDown className="h-6 w-6 text-white/30" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          STATS STRIP
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#0d1929] border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark" />
        {/* Soft center glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(50,77,122,0.2) 0%, transparent 70%)',
          }}
        />

        <div
          ref={statsRef}
          className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/5">
            {statsData.map((stat, i) => (
              <StatItem key={stat.label} stat={stat} triggered={statsVisible} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          HOW IT WORKS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#f8fafc] py-24 sm:py-32 overflow-hidden">
        {/* Decorative mint blob */}
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(175,226,212,0.12) 0%, transparent 65%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(50,77,122,0.06) 0%, transparent 65%)',
            filter: 'blur(80px)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6">
          {/* Section header */}
          <div
            ref={pillarsRef}
            className={`mb-16 max-w-2xl reveal-fade ${pillarsVisible ? 'is-visible' : ''}`}
          >
            <span className="text-xs font-bold uppercase tracking-[0.34em] text-[#324D7A]/45">
              Perché funziona
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-black leading-[1.05] text-[#0a1628]">
              Una giornata più ordinata,
              <br />
              <span className="text-gradient-primary">da subito.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#324D7A]/55 max-w-xl leading-relaxed">
              Ogni funzione nasce da un problema reale: slot vuoti, chiamate inutili,
              informazioni sparse.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              const staggerClass = ['stagger-1', 'stagger-2', 'stagger-3'][i];
              return (
                <article
                  key={pillar.title}
                  className={`reveal-fade ${staggerClass} ${pillarsVisible ? 'is-visible' : ''} group rounded-3xl bg-[#0d1929] p-7 border border-white/5 hover:border-[#AFE2D4]/18 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_64px_rgba(0,0,0,0.32)] cursor-default`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#AFE2D4]/10 group-hover:bg-[#AFE2D4]/16 transition-colors duration-300 icon-glow-mint">
                    <Icon className="h-5 w-5 text-[#AFE2D4]" />
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-white">{pillar.title}</h3>
                  <p className="mt-2.5 text-sm text-white/50 leading-relaxed">
                    {pillar.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CALCULATOR TEASER
      ═══════════════════════════════════════════════════════════════ */}
      <CalculatorTeaser />

      {/* ═══════════════════════════════════════════════════════════════
          APP ROLES
      ═══════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden py-24 sm:py-32"
        style={{
          background: 'linear-gradient(160deg, #0a1628 0%, #13243e 50%, #0f1e36 100%)',
        }}
      >
        <div
          className="aurora-orb"
          style={{
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(175,226,212,0.15) 0%, transparent 70%)',
            top: '10%',
            right: '-100px',
            animation: 'aurora-drift-2 28s ease-in-out infinite',
          }}
        />
        <div className="absolute inset-0 bg-grid-dark" />

        <div
          ref={rolesRef}
          className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6"
        >
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-center">

            {/* Left: content */}
            <div className={`reveal-left ${rolesVisible ? 'is-visible' : ''}`}>
              <span className="text-xs font-bold uppercase tracking-[0.34em] text-[#AFE2D4]/50">
                App mobile protagonista
              </span>
              <h2 className="mt-4 text-3xl sm:text-5xl font-black leading-[1.05] text-white">
                Ogni ruolo vede
                <br />
                <span className="text-gradient-mint">subito cosa fare.</span>
              </h2>
              <p className="mt-4 text-base text-white/45 max-w-lg leading-relaxed">
                Niente confusione, niente chiamate per capire lo stato. Ogni
                persona apre l'app e sa esattamente cosa fare.
              </p>

              {/* Role cards */}
              <div className="mt-8 space-y-3">
                {roles.map((item, i) => (
                  <div
                    key={item.name}
                    className={`gradient-border-card rounded-2xl p-5 ${
                      rolesVisible ? 'reveal-fade is-visible' : 'reveal-fade'
                    }`}
                    style={{ transitionDelay: `${200 + i * 100}ms` }}
                  >
                    <div className="flex items-start gap-3.5">
                      <div
                        className="mt-1 h-2 w-2 rounded-full flex-shrink-0"
                        style={{
                          background: item.color,
                          boxShadow: `0 0 10px ${item.color}`,
                        }}
                      />
                      <div>
                        <span className="text-sm font-bold text-white">
                          {item.name}
                        </span>
                        <p className="mt-1 text-sm text-white/45 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: phone mockup */}
            <div
              className={`reveal-right ${rolesVisible ? 'is-visible' : ''} flex justify-center lg:justify-end`}
            >
              <div
                className="animate-float-slow"
                style={{
                  filter:
                    'drop-shadow(0 48px 80px rgba(0,0,0,0.7)) drop-shadow(0 0 48px rgba(175,226,212,0.07))',
                }}
              >
                <IphoneMockup
                  label="Home istruttore"
                  variant="agenda"
                  screenImageSrc="/home-istruttore.jpeg"
                  screenImageAlt="Home istruttore"
                  className="w-full max-w-[240px] sm:max-w-[280px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════════════════ */}
      <FinalCTA />
    </div>
  );
}
