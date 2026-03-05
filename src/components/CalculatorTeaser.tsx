import { ArrowRight, Calculator, Clock3, TrendingDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

function trackCalculatorCTA(source: 'home_teaser') {
  const fbq = (window as Window & { fbq?: (...args: unknown[]) => void }).fbq;
  if (typeof fbq === 'function') {
    fbq('trackCustom', 'CalculatorCTA_Click', { source });
  }
}

const features = [
  {
    icon: Clock3,
    title: 'Vista mensile e annuale',
    desc: 'Vedi subito il costo ricorrente senza fare conti manuali.',
  },
  {
    icon: TrendingDown,
    title: 'Proiezione a 5 anni',
    desc: "Capisci l'impatto economico reale nel medio periodo.",
  },
  {
    icon: Calculator,
    title: 'Simulazione immediata',
    desc: 'Valutazione orientativa, pensata per decidere se intervenire ora.',
  },
];

export default function CalculatorTeaser() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>(0.1);

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-24 sm:py-32">
      {/* Gradient accent line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(50,77,122,0.2) 30%, rgba(175,226,212,0.4) 50%, rgba(50,77,122,0.2) 70%, transparent)',
        }}
      />

      {/* Decorative blobs */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(50,77,122,0.06) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(175,226,212,0.1) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6">
        <div
          ref={ref}
          className={`reveal-fade ${isVisible ? 'is-visible' : ''} rounded-3xl overflow-hidden`}
          style={{
            background: 'linear-gradient(145deg, #0d1929 0%, #162240 50%, #0f1e36 100%)',
            border: '1px solid rgba(175,226,212,0.1)',
            boxShadow: '0 24px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04) inset',
          }}
        >
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center gap-0">

            {/* Left: Copy */}
            <div className="p-8 sm:p-10 lg:p-12 border-b border-white/6 lg:border-b-0 lg:border-r">
              <span className="text-xs font-bold uppercase tracking-[0.34em] text-[#AFE2D4]/50">
                Calcolatore
              </span>
              <h2 className="mt-4 text-2xl sm:text-4xl font-black leading-[1.06] text-white">
                Scopri in 1 minuto
                <br />
                <span className="text-gradient-mint">quanto stai perdendo.</span>
              </h2>
              <p className="mt-4 max-w-xl text-base text-white/45 leading-relaxed">
                Inserisci pochi dati, ottieni una stima chiara e confronta subito
                lo scenario con Reglo.
              </p>
              <Link
                to="/calcolatore"
                onClick={() => trackCalculatorCTA('home_teaser')}
                className="btn-shimmer mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#AFE2D4] to-[#6cbfb0] px-6 py-3 text-sm sm:text-base font-bold text-[#0a1628] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(175,226,212,0.45)] cursor-pointer"
              >
                Vai al calcolatore
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Right: Features */}
            <div className="p-8 sm:p-10 lg:p-12 space-y-5">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className={`flex items-start gap-4 reveal-fade ${['stagger-1','stagger-2','stagger-3'][i]} ${isVisible ? 'is-visible' : ''}`}
                  >
                    <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#AFE2D4]/10 icon-glow-mint">
                      <Icon className="h-4 w-4 text-[#AFE2D4]" />
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
      </div>
    </section>
  );
}
