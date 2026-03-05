import {
  ArrowRight,
  Calculator,
  CalendarClock,
  ChevronDown,
  CircleDollarSign,
  MessageSquare,
  Smartphone,
  Sparkles,
  TimerReset,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import CalculatorTeaser from '../components/CalculatorTeaser';
import FinalCTA from '../components/FinalCTA';
import { CAL_BOOKING_URL, trackBookingCTA } from '../lib/booking';
import { useScrollReveal, useCounter } from '../hooks/useScrollReveal';
import { useTilt3D } from '../hooks/useTilt3D';

/* ═══════════════════════════════════════════════════════════════════════
   AGENDA DASHBOARD 3D  ─ hero visual
══════════════════════════════════════════════════════════════════════ */

const SLOTS = [
  { time: '09:00', name: 'Luca M.',    desc: 'Guida B', status: 'Confermato', dot: '#22c55e', bg: 'rgba(34,197,94,0.07)'    },
  { time: '10:30', name: 'Sara P.',    desc: 'Guida A', status: 'In attesa',  dot: '#f59e0b', bg: 'rgba(245,158,11,0.07)'   },
  { time: '12:00', name: 'Slot libero',desc: '',        status: 'Libero',     dot: '#cbd5e1', bg: 'rgba(203,213,225,0.06)',  empty: true },
  { time: '14:00', name: 'Marco R.',   desc: 'Guida C', status: 'Confermato', dot: '#22c55e', bg: 'rgba(34,197,94,0.07)'    },
  { time: '16:00', name: 'Giulia F.',  desc: 'Guida A', status: 'Recuperato', dot: '#8b5cf6', bg: 'rgba(139,92,246,0.07)'   },
] as const;

function AgendaDashboard() {
  const { ref, tilt } = useTilt3D(12, -4, 9);

  return (
    <div
      ref={ref}
      className="relative w-full max-w-[480px] mx-auto select-none cursor-default"
      style={{ perspective: '1200px' }}
    >
      <div
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        {/* ── Main card ─ z = 0 ── */}
        <div
          style={{ transform: 'translateZ(0px)' }}
          className="relative bg-white rounded-[22px] border border-[#324D7A]/8 shadow-[0_32px_80px_rgba(50,77,122,0.1),0_6px_16px_rgba(50,77,122,0.06)] overflow-hidden"
        >
          {/* macOS titlebar */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-[#f8fafc] border-b border-[#324D7A]/6">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <div className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-[11px] font-bold tracking-[0.1em] text-[#324D7A]/50">AGENDA · OGGI</span>
            </div>
            <span className="text-[10px] font-mono text-[#324D7A]/28">Mer 5 Mar</span>
          </div>

          {/* Slots */}
          <div className="p-4 space-y-2">
            {SLOTS.map((slot) => (
              <div
                key={slot.time}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5"
                style={{ background: slot.bg }}
              >
                <span className="text-[10px] font-mono text-[#324D7A]/30 w-10 flex-shrink-0">{slot.time}</span>
                <span
                  className="h-2 w-2 rounded-full flex-shrink-0"
                  style={{ background: slot.dot, boxShadow: `0 0 5px ${slot.dot}80` }}
                />
                <span className={`text-xs flex-1 truncate ${slot.empty ? 'text-[#324D7A]/25 italic' : 'font-semibold text-[#0f1e36]'}`}>
                  {slot.name}
                </span>
                {slot.desc ? <span className="text-[10px] text-[#324D7A]/25 hidden sm:block">{slot.desc}</span> : null}
                <span
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
                  style={{ color: slot.dot, background: `${slot.dot}18`, border: `1px solid ${slot.dot}30` }}
                >
                  {slot.status}
                </span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="px-5 py-3 bg-[#f8fafc] border-t border-[#324D7A]/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[0,1,2,3].map(i => (
                  <div key={i} className="h-1.5 w-5 rounded-full bg-[#22c55e]/35" />
                ))}
                <div className="h-1.5 w-5 rounded-full bg-[#cbd5e1]/30" />
              </div>
              <span className="text-[11px] text-[#324D7A]/35">4 / 5</span>
            </div>
            <span className="text-[11px] font-semibold text-[#22c55e]">↑ +12% vs ieri</span>
          </div>
        </div>

        {/* ── Floating badge — stat  ─ z = 48 ── */}
        <div
          className="absolute -bottom-7 -right-8 bg-[#324D7A] rounded-2xl p-4 w-36 shadow-[0_20px_48px_rgba(50,77,122,0.45)]"
          style={{ transform: 'translateZ(48px)' }}
        >
          <div style={{ animation: 'floatY-a 14s ease-in-out infinite' }}>
            <div className="text-[10px] uppercase tracking-wider text-white/40">Slot pieni</div>
            <div
              className="text-3xl font-black mt-0.5"
              style={{
                background: 'linear-gradient(135deg, #AFE2D4, #6cbfb0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              +28%
            </div>
            <div className="text-[10px] text-white/30 mt-0.5">questa settimana</div>
          </div>
        </div>

        {/* ── Floating notification ─ z = 72 ── */}
        <div
          className="absolute -top-7 right-4 bg-white rounded-2xl shadow-[0_14px_36px_rgba(50,77,122,0.1)] border border-[#AFE2D4]/50 flex items-center gap-2.5 py-3 px-3.5 min-w-[170px]"
          style={{ transform: 'translateZ(72px)' }}
        >
          <div style={{ animation: 'floatY-b 18s ease-in-out infinite', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="h-8 w-8 rounded-full bg-[#AFE2D4]/25 flex items-center justify-center flex-shrink-0">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M1.5 7L4.5 10L11.5 3" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-bold text-[#0f1e36] whitespace-nowrap leading-tight">Slot recuperato</div>
              <div className="text-[10px] text-[#324D7A]/38 leading-tight">Carlo B. · 09:00</div>
            </div>
          </div>
        </div>

        {/* ── Floating avatars ─ z = 36 ── */}
        <div
          className="absolute -left-10 top-[36%] bg-white rounded-2xl py-2.5 px-3.5 shadow-[0_8px_24px_rgba(50,77,122,0.09)] border border-[#324D7A]/6"
          style={{ transform: 'translateZ(36px)' }}
        >
          <div style={{ animation: 'floatY-c 22s ease-in-out infinite' }}>
            <div className="text-[10px] text-[#324D7A]/38 mb-1.5">Istruttori attivi</div>
            <div className="flex items-center">
              {[
                { bg: '#AFE2D4', c: '#0f4a3a', l: 'M' },
                { bg: '#324D7A', c: '#fff',    l: 'S' },
                { bg: '#e2bff5', c: '#4a0e6e', l: 'L' },
              ].map((av, i) => (
                <div
                  key={i}
                  className="h-6 w-6 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold"
                  style={{ background: av.bg, color: av.c, marginLeft: i > 0 ? '-6px' : '0', position: 'relative', zIndex: 3 - i }}
                >
                  {av.l}
                </div>
              ))}
              <span className="text-xs font-bold text-[#324D7A] ml-2">3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   FEATURE CARD with per-card mouse-tracking 3D tilt
══════════════════════════════════════════════════════════════════════ */

function Feature3DCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top)  / rect.height - 0.5,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setMouse({ x: 0, y: 0 }); }}
      onMouseMove={handleMove}
      style={{
        transform: hovered
          ? `perspective(800px) rotateX(${-mouse.y * 13}deg) rotateY(${mouse.x * 13}deg) translateY(-8px)`
          : 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)',
        transition: 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease',
        boxShadow: hovered
          ? `${mouse.x * 18}px ${mouse.y * 14 + 20}px 56px rgba(50,77,122,0.11), 0 0 0 1px rgba(50,77,122,0.06)`
          : '0 4px 20px rgba(50,77,122,0.06), 0 0 0 1px rgba(50,77,122,0.06)',
      }}
      className="relative bg-white rounded-3xl p-7 cursor-default group overflow-hidden"
    >
      {/* Mint gradient fill on hover */}
      <div
        className="absolute inset-0 rounded-3xl transition-opacity duration-400 pointer-events-none"
        style={{
          opacity: hovered ? 1 : 0,
          background: 'linear-gradient(135deg, rgba(175,226,212,0.08) 0%, transparent 55%)',
        }}
      />

      {/* Top-left accent line */}
      <div
        className="absolute top-0 left-6 right-6 h-px rounded-full transition-all duration-400"
        style={{
          background: hovered
            ? 'linear-gradient(90deg, transparent, rgba(50,77,122,0.4) 40%, rgba(175,226,212,0.6) 60%, transparent)'
            : 'transparent',
        }}
      />

      {/* Icon */}
      <div
        className="relative flex h-12 w-12 items-center justify-center rounded-2xl mb-6 transition-all duration-300"
        style={{
          background: hovered ? 'rgba(50,77,122,0.1)' : 'rgba(175,226,212,0.25)',
          boxShadow: hovered ? '0 0 20px rgba(175,226,212,0.4)' : 'none',
        }}
      >
        <Icon
          className="h-5 w-5 transition-colors duration-300"
          style={{ color: hovered ? '#324D7A' : '#1a7a70' } as React.CSSProperties}
        />
      </div>

      <h3 className="text-[17px] font-bold text-[#0f1e36] mb-3">{title}</h3>
      <p className="text-sm text-[#324D7A]/52 leading-relaxed">{desc}</p>

      {/* Corner dot */}
      <div
        className="absolute top-5 right-5 h-2 w-2 rounded-full transition-all duration-300"
        style={{
          background: hovered ? '#AFE2D4' : 'rgba(50,77,122,0.1)',
          boxShadow: hovered ? '0 0 8px rgba(175,226,212,0.7)' : 'none',
        }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   STAT COUNTER
══════════════════════════════════════════════════════════════════════ */

const STATS_DATA = [
  { prefix: '-', value: 40, suffix: '%', label: 'Chiamate operative',  sub: 'liberate ogni settimana'     },
  { prefix: '+', value: 28, suffix: '%', label: 'Slot recuperati',     sub: 'dopo ogni cancellazione'     },
  { prefix: '-', value: 55, suffix: '%', label: 'Verifiche manuali',   sub: 'su pagamenti e storico'      },
];

function StatItem({ s, triggered, i }: { s: typeof STATS_DATA[0]; triggered: boolean; i: number }) {
  const count = useCounter(s.value, 1400, triggered);
  return (
    <div className="flex flex-col items-center py-12 px-8 text-center">
      <div
        className={`text-6xl sm:text-7xl font-black tracking-tight transition-all duration-500 ${triggered ? 'stat-number-enter' : 'opacity-0 scale-90'}`}
        style={{
          transitionDelay: `${i * 120}ms`,
          background: 'linear-gradient(135deg, #324D7A 0%, #1a7a70 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {s.prefix}{count}{s.suffix}
      </div>
      <div className="mt-3 text-base font-bold text-[#0f1e36]">{s.label}</div>
      <div className="mt-1 text-sm text-[#324D7A]/45">{s.sub}</div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   ROLE TAB SECTION
══════════════════════════════════════════════════════════════════════ */

const ROLES = [
  {
    id: 'allievo',
    label: 'Allievo',
    headline: 'Prenota in pochi tap.',
    desc: 'Guarda le disponibilità, scegli lo slot e conferma la guida — senza telefonate, senza attese.',
    accent: '#AFE2D4',
    accentText: '#0f4a3a',
    points: [
      'Visualizza slot disponibili in tempo reale',
      'Richiedi e conferma guide direttamente in app',
      'Segui pagamenti e saldo residuo aggiornato',
      'Promemoria automatici prima di ogni guida',
    ],
  },
  {
    id: 'istruttore',
    label: 'Istruttore',
    headline: 'La giornata sotto controllo.',
    desc: 'Agenda aggiornata in tempo reale. Check-in, no-show e assenze segnalati in un tocco.',
    accent: '#7ea8d4',
    accentText: '#0f1e36',
    points: [
      'Agenda giornaliera sempre sincronizzata',
      'Check-in e no-show in un tap',
      'Notifiche istantanee su modifiche e prenotazioni',
      'Storico completo delle guide effettuate',
    ],
  },
  {
    id: 'titolare',
    label: 'Titolare',
    headline: 'Tutto sotto un tetto.',
    desc: 'Saturazione, performance istruttori e incassi da un unico pannello operativo in tempo reale.',
    accent: '#324D7A',
    accentText: '#ffffff',
    points: [
      'Dashboard di saturazione in tempo reale',
      'Performance per istruttore e per veicolo',
      'Gestione pagamenti e residui allievi',
      'Recupero automatico degli slot cancellati',
    ],
  },
];

function RolesMockup({ role }: { role: typeof ROLES[0] }) {
  return (
    <div className="bg-white rounded-2xl border border-[#324D7A]/8 shadow-[0_16px_48px_rgba(50,77,122,0.09)] overflow-hidden transition-all duration-500">
      {/* Header */}
      <div
        className="px-5 py-4 border-b border-[#324D7A]/6"
        style={{ background: `${role.accent}14` }}
      >
        <div className="flex items-center gap-3">
          <div
            className="h-8 w-8 rounded-xl flex items-center justify-center text-xs font-black"
            style={{ background: role.accent, color: role.accentText }}
          >
            {role.label[0]}
          </div>
          <div>
            <div className="text-sm font-bold text-[#0f1e36]">{role.label}</div>
            <div className="text-[11px] text-[#324D7A]/40">Reglo App</div>
          </div>
          <div
            className="ml-auto h-2 w-2 rounded-full animate-pulse"
            style={{ background: role.accent }}
          />
        </div>
      </div>

      {/* Points as list items */}
      <div className="p-4 space-y-3">
        {role.points.map((point, i) => (
          <div key={i} className="flex items-start gap-3">
            <div
              className="mt-0.5 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-black"
              style={{ background: `${role.accent}20`, color: role.accent === '#ffffff' ? '#324D7A' : role.accent }}
            >
              {i + 1}
            </div>
            <span className="text-xs text-[#324D7A]/60 leading-relaxed">{point}</span>
          </div>
        ))}
      </div>

      {/* CTA row */}
      <div className="px-4 py-3.5 border-t border-[#324D7A]/5" style={{ background: '#f8fafc' }}>
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-[#324D7A]/35">Disponibile iOS & Android</span>
          <div
            className="text-[10px] font-bold px-2.5 py-1 rounded-full"
            style={{ background: `${role.accent}20`, color: role.accent === '#ffffff' ? '#324D7A' : role.accent }}
          >
            Attivo
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   HOME PAGE
══════════════════════════════════════════════════════════════════════ */

const PILLARS = [
  {
    icon: CalendarClock,
    title: 'Agenda condivisa',
    desc: 'Allievo, istruttore e segreteria vedono lo stesso stato in tempo reale — sempre aggiornato.',
  },
  {
    icon: Sparkles,
    title: 'Recupero slot automatico',
    desc: 'Quando una guida salta, Reglo propone subito chi può occupare quello spazio.',
  },
  {
    icon: MessageSquare,
    title: 'Comunicazioni chiare',
    desc: 'Promemoria e pagamenti restano collegati, senza rincorrere messaggi sparsi.',
  },
];

export default function HomePage() {
  const [activeRole, setActiveRole] = useState(0);

  const trackCalculatorCTA = () => {
    const fbq = (window as Window & { fbq?: (...args: unknown[]) => void }).fbq;
    if (typeof fbq === 'function') {
      fbq('trackCustom', 'CalculatorCTA_Click', { source: 'home_hero' });
    }
  };

  const { ref: statsRef,    isVisible: statsVisible }    = useScrollReveal<HTMLDivElement>(0.2);
  const { ref: pillarsRef,  isVisible: pillarsVisible }  = useScrollReveal<HTMLDivElement>(0.08);
  const { ref: rolesRef,    isVisible: rolesVisible }    = useScrollReveal<HTMLDivElement>(0.08);

  const role = ROLES[activeRole];

  return (
    <div className="overflow-x-hidden bg-white">

      {/* ═══════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden bg-white">
        {/* Subtle atmosphere blobs */}
        <div
          className="absolute -top-40 -right-60 w-[900px] h-[900px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(175,226,212,0.18) 0%, transparent 65%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(50,77,122,0.06) 0%, transparent 65%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Light grid */}
        <div className="absolute inset-0 bg-grid-light" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 pt-12 pb-24">
          <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 items-center">

            {/* Left: copy */}
            <div>
              {/* Badge */}
              <div className="hero-el hero-el-1 inline-flex items-center gap-2.5 rounded-full border border-[#AFE2D4] bg-[#AFE2D4]/15 px-4 py-1.5 mb-7">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1a7a70] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#1a7a70]">Per autoscuole</span>
              </div>

              {/* Headline */}
              <h1 className="hero-el hero-el-2 text-5xl sm:text-6xl lg:text-[72px] font-black leading-[1.02] tracking-tight text-[#0f1e36] mb-6">
                Meno buchi
                <br />
                <span className="text-gradient-navy">in agenda.</span>
              </h1>

              {/* Subtitle */}
              <p className="hero-el hero-el-3 text-lg sm:text-xl text-[#0f1e36]/50 leading-relaxed max-w-[500px] mb-8">
                Riempie slot liberi, riduce chiamate e allinea segreteria,
                istruttori e allievi — tutto da un'unica app.
              </p>

              {/* CTAs */}
              <div className="hero-el hero-el-4 flex flex-wrap gap-3 mb-6">
                <a
                  href={CAL_BOOKING_URL}
                  onClick={() => trackBookingCTA('home_hero')}
                  className="btn-shimmer inline-flex items-center gap-2 rounded-full bg-[#324D7A] text-white px-7 py-3.5 text-sm sm:text-base font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(50,77,122,0.4)] cursor-pointer"
                >
                  Prenota una demo
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to="/calcolatore"
                  onClick={trackCalculatorCTA}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#324D7A]/15 bg-white text-[#324D7A] px-7 py-3.5 text-sm sm:text-base font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:border-[#324D7A]/30 hover:shadow-[0_8px_24px_rgba(50,77,122,0.1)] cursor-pointer"
                >
                  Calcola soldi persi
                  <Calculator className="h-4 w-4" />
                </Link>
              </div>

              {/* Allievi + trust */}
              <div className="hero-el hero-el-5 space-y-4">
                <Link
                  to="/allievi"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#324D7A]/50 hover:text-[#324D7A] transition-colors"
                >
                  <Smartphone className="h-4 w-4" />
                  Sei un allievo? Attiva la promo
                </Link>
                <div className="flex flex-wrap gap-2">
                  {['Setup in 7 giorni', 'iOS & Android', 'Supporto italiano'].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[#324D7A]/10 bg-[#324D7A]/4 px-3 py-1 text-xs text-[#324D7A]/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: 3D dashboard */}
            <div className="hero-el hero-el-6 flex justify-center lg:justify-end pr-0 lg:pr-10">
              <AgendaDashboard />
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1 opacity-30">
          <span className="text-[10px] font-semibold tracking-[0.2em] text-[#324D7A] uppercase">Scorri</span>
          <ChevronDown className="h-5 w-5 text-[#324D7A] animate-bounce" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          STATS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#f8fafc] overflow-hidden">
        <div className="section-line" />
        <div
          ref={statsRef}
          className="mx-auto max-w-[1440px] px-5 sm:px-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#324D7A]/6">
            {STATS_DATA.map((s, i) => (
              <StatItem key={s.label} s={s} triggered={statsVisible} i={i} />
            ))}
          </div>
        </div>
        <div className="section-line" />
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FEATURES  — 3D tilt cards
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-white py-28 sm:py-36 overflow-hidden">
        {/* Decorative */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(175,226,212,0.1) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8">
          {/* Heading */}
          <div
            ref={pillarsRef}
            className={`mb-16 reveal-fade ${pillarsVisible ? 'is-visible' : ''}`}
          >
            <span className="text-xs font-black uppercase tracking-[0.32em] text-[#324D7A]/35">Perché funziona</span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-black leading-[1.06] text-[#0f1e36] max-w-xl">
              Una giornata più ordinata,{' '}
              <span className="text-gradient-navy">da subito.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#324D7A]/50 max-w-lg leading-relaxed">
              Ogni funzione nasce da un problema reale: slot vuoti, chiamate inutili, informazioni sparse.
            </p>
          </div>

          {/* Cards — 3D tilt per card */}
          <div className="grid gap-5 md:grid-cols-3">
            {PILLARS.map((p, i) => {
              const stagger = ['stagger-1', 'stagger-2', 'stagger-3'][i];
              return (
                <div
                  key={p.title}
                  className={`reveal-fade ${stagger} ${pillarsVisible ? 'is-visible' : ''}`}
                >
                  <Feature3DCard icon={p.icon} title={p.title} desc={p.desc} />
                </div>
              );
            })}
          </div>

          {/* Extra benefit row */}
          <div
            className={`mt-5 grid gap-5 md:grid-cols-2 reveal-fade stagger-4 ${pillarsVisible ? 'is-visible' : ''}`}
          >
            {[
              { icon: CircleDollarSign, title: 'Pagamenti sotto controllo', desc: 'Storico chiaro, residui immediati e documenti disponibili per ogni transazione.' },
              { icon: TimerReset,       title: 'Slot sempre valorizzati',   desc: 'Cancellazioni e ripianificazioni diventano opportunità, non ore perse.' },
            ].map((p) => (
              <Feature3DCard key={p.title} icon={p.icon} title={p.title} desc={p.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CALCULATOR TEASER
      ═══════════════════════════════════════════════════════════════ */}
      <CalculatorTeaser />

      {/* ═══════════════════════════════════════════════════════════════
          ROLES — tabbed interface
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-white py-28 sm:py-36 overflow-hidden">
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(50,77,122,0.05) 0%, transparent 65%)',
            filter: 'blur(80px)',
          }}
        />

        <div
          ref={rolesRef}
          className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8"
        >
          {/* Section header */}
          <div className={`mb-14 reveal-fade ${rolesVisible ? 'is-visible' : ''}`}>
            <span className="text-xs font-black uppercase tracking-[0.32em] text-[#324D7A]/35">Un'app, tre prospettive</span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-black leading-[1.06] text-[#0f1e36] max-w-xl">
              Ogni ruolo vede{' '}
              <span className="text-gradient-navy">subito cosa fare.</span>
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] items-start">

            {/* Left: tabs + copy */}
            <div className={`reveal-left ${rolesVisible ? 'is-visible' : ''}`}>
              {/* Tab switcher */}
              <div className="flex gap-2 mb-8">
                {ROLES.map((r, i) => (
                  <button
                    key={r.id}
                    onClick={() => setActiveRole(i)}
                    className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer"
                    style={
                      i === activeRole
                        ? { background: '#324D7A', color: '#ffffff', boxShadow: '0 4px 16px rgba(50,77,122,0.3)' }
                        : { background: 'rgba(50,77,122,0.06)', color: 'rgba(50,77,122,0.6)' }
                    }
                  >
                    {r.label}
                  </button>
                ))}
              </div>

              {/* Role content */}
              <div
                key={role.id}
                className="animate-fadeInUp"
              >
                {/* Accent bar */}
                <div
                  className="w-10 h-1 rounded-full mb-5"
                  style={{ background: role.accent }}
                />
                <h3 className="text-2xl sm:text-3xl font-black text-[#0f1e36] mb-3">{role.headline}</h3>
                <p className="text-base text-[#324D7A]/55 leading-relaxed mb-6">{role.desc}</p>

                <ul className="space-y-3">
                  {role.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className="mt-0.5 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-black"
                        style={{
                          background: `${role.accent}25`,
                          color: role.accent === '#ffffff' ? '#324D7A' : role.accent,
                        }}
                      >
                        {i + 1}
                      </div>
                      <span className="text-sm text-[#0f1e36]/65 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: mockup */}
            <div
              className={`reveal-right ${rolesVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: '100ms' }}
            >
              <div
                key={role.id}
                className="animate-scaleIn"
                style={{ filter: 'drop-shadow(0 32px 64px rgba(50,77,122,0.12))' }}
              >
                <RolesMockup role={role} />
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
