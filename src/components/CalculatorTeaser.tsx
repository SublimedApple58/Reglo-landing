import { ArrowRight, Calculator, Clock3, TrendingDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

function trackCalculatorCTA(source: 'home_teaser') {
  const fbq = (window as Window & { fbq?: (...args: unknown[]) => void }).fbq;
  if (typeof fbq === 'function') {
    fbq('trackCustom', 'CalculatorCTA_Click', { source });
  }
}

const FEATURES = [
  { icon: Clock3,        title: 'Vista mensile e annuale',  desc: 'Vedi subito il costo ricorrente senza fare conti manuali.' },
  { icon: TrendingDown,  title: 'Proiezione a 5 anni',      desc: "Capisci l'impatto economico reale nel medio periodo."     },
  { icon: Calculator,    title: 'Simulazione immediata',    desc: 'Valutazione orientativa per decidere se intervenire ora.' },
];

export default function CalculatorTeaser() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>(0.1);

  return (
    <section className="relative overflow-hidden" style={{ background: '#324D7A' }}>
      {/* Dark grid overlay */}
      <div className="absolute inset-0 bg-grid-dark" />

      {/* Subtle mint glow top-right */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(175,226,212,0.12) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />
      {/* Darker glow bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,0,0,0.2) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 py-28 sm:py-36">
        <div
          ref={ref}
          className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20 items-center"
        >

          {/* Left: copy */}
          <div className={`reveal-left ${isVisible ? 'is-visible' : ''}`}>
            <span className="text-xs font-black uppercase tracking-[0.32em] text-[#AFE2D4]/50">
              Calcolatore
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-black leading-[1.05] text-white">
              Scopri in 1 minuto
              <br />
              <span className="text-gradient-mint">quanto stai perdendo.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-white/45 leading-relaxed max-w-lg">
              Inserisci pochi dati, ottieni una stima chiara e confronta lo scenario con e senza Reglo.
            </p>

            <Link
              to="/calcolatore"
              onClick={() => trackCalculatorCTA('home_teaser')}
              className="btn-shimmer mt-8 inline-flex items-center gap-2 rounded-full bg-[#AFE2D4] text-[#0a2a22] px-7 py-3.5 text-sm sm:text-base font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(175,226,212,0.4)] cursor-pointer"
            >
              Vai al calcolatore
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right: feature list */}
          <div className={`reveal-right ${isVisible ? 'is-visible' : ''} space-y-4`}>
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              const stagger = ['stagger-1', 'stagger-2', 'stagger-3'][i];
              return (
                <div
                  key={f.title}
                  className={`reveal-fade ${stagger} ${isVisible ? 'is-visible' : ''} flex items-start gap-4 rounded-2xl p-5`}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#AFE2D4]/12">
                    <Icon className="h-4.5 w-4.5 text-[#AFE2D4]" style={{ width: '18px', height: '18px' }} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{f.title}</p>
                    <p className="mt-1 text-sm text-white/40 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
