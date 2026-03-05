import { useState } from 'react';
import { ArrowRight, Gift, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';
import ReferralPromo from '../components/ReferralPromo';
import { CAL_BOOKING_URL, trackBookingCTA } from '../lib/booking';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTilt3D } from '../hooks/useTilt3D';

/* ═══════════════════════════════════════════════════════════════════════
   VOUCHER CARD 3D  ─ hero visual
══════════════════════════════════════════════════════════════════════ */

function VoucherCard3D() {
  const { ref, tilt } = useTilt3D(10, -4, 8);

  return (
    <div
      ref={ref}
      className="relative w-full max-w-[420px] mx-auto select-none cursor-default"
      style={{ perspective: '1100px' }}
    >
      <div
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        {/* ── Main voucher card ─ z = 0 ── */}
        <div
          style={{ transform: 'translateZ(0px)' }}
          className="relative bg-white rounded-[22px] border border-[#324D7A]/10 shadow-[0_32px_80px_rgba(50,77,122,0.12),0_6px_16px_rgba(50,77,122,0.06)] overflow-hidden"
        >
          {/* Top band */}
          <div className="relative h-28 bg-gradient-to-br from-[#324D7A] to-[#1f3a5f] overflow-hidden">
            <div className="absolute inset-0 bg-grid-dark opacity-60" />
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#AFE2D4]/15 blur-2xl" />
            <div className="relative flex items-center justify-between h-full px-6">
              <div>
                <p className="text-[10px] font-bold tracking-[0.22em] text-[#AFE2D4]/60 uppercase mb-1">Voucher Reglo</p>
                <p className="text-2xl font-black text-white">2 Guide</p>
                <p className="text-xs text-white/50 mt-0.5">Gratuite · Nominativo</p>
              </div>
              <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-[#AFE2D4]/15 border border-[#AFE2D4]/20">
                <Gift className="h-7 w-7 text-[#AFE2D4]" />
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="px-6 py-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-2 w-2 rounded-full bg-[#22c55e]" style={{ boxShadow: '0 0 5px #22c55e80' }} />
              <span className="text-xs font-semibold text-[#22c55e]">Promo attiva</span>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Beneficiario', value: 'Tu — allievo Reglo' },
                { label: 'Condizione', value: 'Autoscuola attiva Reglo' },
                { label: 'Verifica', value: 'Entro 5 giorni lavorativi' },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between py-2 border-b border-[#324D7A]/6 last:border-0">
                  <span className="text-xs text-[#324D7A]/45 font-medium">{row.label}</span>
                  <span className="text-xs font-semibold text-[#0f1e36]">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dashed separator */}
          <div className="mx-6 border-t border-dashed border-[#324D7A]/10" />
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-[0.14em] text-[#324D7A]/25">REG-2024-PROMO</span>
              <div className="flex gap-0.5">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className={`h-5 w-1 rounded-full ${i % 3 === 0 ? 'bg-[#324D7A]/40' : 'bg-[#324D7A]/15'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Floating badge ─ z = 52 ── */}
        <div style={{ transform: 'translateZ(52px)', position: 'absolute', top: '-18px', right: '-18px' }}>
          <div style={{ animation: 'floatY-b 16s ease-in-out infinite' }}>
            <div className="bg-white rounded-2xl border border-[#324D7A]/10 shadow-[0_12px_32px_rgba(50,77,122,0.14)] px-4 py-3 flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-xl bg-[#AFE2D4]/30 flex items-center justify-center">
                <Zap className="h-4 w-4 text-[#324D7A]" />
              </div>
              <div>
                <p className="text-[10px] font-semibold text-[#324D7A]/50 uppercase tracking-wide">Promo</p>
                <p className="text-xs font-bold text-[#0f1e36]">Segnala & guadagna</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Floating check pill ─ z = 38 ── */}
        <div style={{ transform: 'translateZ(38px)', position: 'absolute', bottom: '-14px', left: '-12px' }}>
          <div style={{ animation: 'floatY-a 19s ease-in-out infinite' }}>
            <div className="bg-[#22c55e] rounded-full px-4 py-2 shadow-[0_8px_20px_rgba(34,197,94,0.3)] flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5 text-white" />
              <span className="text-xs font-bold text-white">Voucher verificato</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   STEP CARD  ─ how it works
══════════════════════════════════════════════════════════════════════ */

const steps = [
  {
    n: '01',
    title: 'Segnala la tua scuola',
    desc: 'Compili il modulo con i dati base. Ci vuole meno di 2 minuti.',
    icon: ArrowRight,
    accent: '#324D7A',
    bg: 'rgba(50,77,122,0.06)',
  },
  {
    n: '02',
    title: 'Noi verifichiamo',
    desc: 'Contattiamo la scuola e verifichiamo i requisiti entro 5 giorni lavorativi.',
    icon: ShieldCheck,
    accent: '#1a7a70',
    bg: 'rgba(26,122,112,0.06)',
  },
  {
    n: '03',
    title: 'Ricevi il voucher',
    desc: 'Se la scuola attiva Reglo, ricevi 2 guide gratuite nominative.',
    icon: Gift,
    accent: '#324D7A',
    bg: 'rgba(175,226,212,0.25)',
  },
];

function StepCard({
  step,
  index,
  isVisible,
}: {
  step: typeof steps[0];
  index: number;
  isVisible: boolean;
}) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouse({ x, y });
  };

  const Icon = step.icon;

  return (
    <div
      className={`reveal-fade stagger-${index + 1} ${isVisible ? 'is-visible' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setMouse({ x: 0, y: 0 }); }}
      style={{
        transform: hovered
          ? `perspective(800px) rotateX(${-mouse.y * 11}deg) rotateY(${mouse.x * 11}deg) translateY(-6px)`
          : 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)',
        transition: 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
        boxShadow: hovered
          ? `${mouse.x * 14}px ${mouse.y * 10 + 18}px 48px rgba(50,77,122,0.10), 0 2px 8px rgba(50,77,122,0.04)`
          : '0 4px 20px rgba(50,77,122,0.06), 0 1px 4px rgba(50,77,122,0.04)',
        borderRadius: '20px',
        background: 'white',
        border: '1px solid rgba(50,77,122,0.08)',
        padding: '28px',
        cursor: 'default',
      }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-2xl flex-shrink-0"
          style={{ background: step.bg }}
        >
          <Icon className="h-5 w-5" style={{ color: step.accent }} />
        </div>
        <span className="text-4xl font-black mt-0.5 leading-none" style={{ color: `${step.accent}18` }}>
          {step.n}
        </span>
      </div>
      <h3 className="text-base font-bold text-[#0f1e36] mb-2">{step.title}</h3>
      <p className="text-sm text-[#324D7A]/55 leading-relaxed">{step.desc}</p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════════════════ */

export default function AllieviPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal(0.1);
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollReveal(0.08);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative pt-20 pb-24 px-4 sm:px-6 bg-grid-light">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 70% 55% at 50% -10%, rgba(50,77,122,0.06) 0%, transparent 70%)',
          }}
        />

        <div className="relative mx-auto max-w-[1280px]">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left copy */}
            <div ref={heroRef} className={`reveal-left ${heroVisible ? 'is-visible' : ''}`}>
              <div className="hero-el hero-el-1 inline-flex items-center gap-2 rounded-full border border-[#324D7A]/12 bg-[#324D7A]/5 px-4 py-1.5 mb-6">
                <Gift className="h-3.5 w-3.5 text-[#324D7A]" />
                <span className="text-xs font-semibold tracking-[0.15em] text-[#324D7A]/70 uppercase">Promo Allievi</span>
              </div>

              <h1 className="hero-el hero-el-2 text-4xl sm:text-5xl font-bold leading-[1.06] text-[#0f1e36] mb-5">
                Segnala la tua autoscuola.<br />
                <span className="text-gradient-navy">Ricevi 2 guide gratuite.</span>
              </h1>

              <p className="hero-el hero-el-3 text-lg text-[#324D7A]/60 max-w-[480px] leading-relaxed mb-8">
                Tu segnali la scuola, noi facciamo la verifica. Se parte con Reglo, ti inviamo un voucher nominativo da 2 guide.
              </p>

              <div className="hero-el hero-el-4 flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 rounded-2xl bg-white border border-[#324D7A]/10 shadow-[0_4px_14px_rgba(50,77,122,0.07)] px-4 py-2.5">
                  <Gift className="h-4 w-4 text-[#324D7A]" />
                  <span className="text-sm font-semibold text-[#0f1e36]">Voucher 2 guide</span>
                </div>
                <div className="flex items-center gap-2 rounded-2xl bg-white border border-[#324D7A]/10 shadow-[0_4px_14px_rgba(50,77,122,0.07)] px-4 py-2.5">
                  <ShieldCheck className="h-4 w-4 text-[#324D7A]" />
                  <span className="text-sm font-semibold text-[#0f1e36]">Verifica in 5 giorni</span>
                </div>
              </div>

              <div className="hero-el hero-el-5">
                <a
                  href="#referral-form"
                  className="btn-shimmer inline-flex items-center gap-2.5 rounded-full bg-[#324D7A] px-7 py-3.5 text-base font-bold text-white hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(50,77,122,0.32)] transition-all duration-200"
                >
                  Richiedi adesso la promo
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right: 3D voucher */}
            <div className="hero-el hero-el-6 flex justify-center lg:justify-end py-8">
              <VoucherCard3D />
            </div>
          </div>
        </div>
      </section>

      <div className="section-line mx-auto max-w-[1280px] px-4" />

      {/* ── Come funziona ── */}
      <section className="py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-[1280px]">
          <div
            ref={stepsRef}
            className={`text-center mb-14 reveal-fade ${stepsVisible ? 'is-visible' : ''}`}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#324D7A]/12 bg-[#324D7A]/5 px-4 py-1.5 mb-5">
              <span className="text-xs font-semibold tracking-[0.15em] text-[#324D7A]/70 uppercase">Come funziona</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1e36] leading-tight">
              Tre passi per ottenere
              <span className="text-gradient-navy"> il tuo voucher</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {steps.map((step, i) => (
              <StepCard key={step.n} step={step} index={i} isVisible={stepsVisible} />
            ))}
          </div>

          <p className={`mt-7 text-center text-xs text-[#324D7A]/40 reveal-fade ${stepsVisible ? 'is-visible' : ''}`}>
            Promo valida solo per autoscuole non ancora attive su Reglo. Voucher nominativo e non cedibile.
          </p>
        </div>
      </section>

      <div className="section-line mx-auto max-w-[1280px] px-4" />

      {/* ── Referral form ── */}
      <ReferralPromo />

      {/* ── Bottom demo CTA ── */}
      <section className="py-16 px-4 sm:px-6 bg-[#f8fafc]">
        <div className="mx-auto max-w-[560px] text-center">
          <p className="text-sm text-[#324D7A]/55 mb-3">
            Sei un'autoscuola e vuoi vedere subito la piattaforma?
          </p>
          <a
            href={CAL_BOOKING_URL}
            onClick={() => trackBookingCTA('allievi_autoscuola')}
            className="inline-flex items-center gap-2 rounded-full bg-[#324D7A] px-6 py-2.5 text-sm font-bold text-white hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(50,77,122,0.28)] transition-all duration-200"
          >
            Prenota una demo
            <CheckCircle2 className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
