import { ArrowRight, Calculator, Clock3, TrendingDown } from 'lucide-react';
import { Link } from 'react-router-dom';

function trackCalculatorCTA(source: 'home_teaser') {
  const fbq = (window as Window & { fbq?: (...args: unknown[]) => void }).fbq;
  if (typeof fbq === 'function') {
    fbq('trackCustom', 'CalculatorCTA_Click', { source });
  }
}

export default function CalculatorTeaser() {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="rounded-3xl border border-white/70 bg-white/72 p-5 shadow-[0_14px_36px_rgba(50,78,122,0.16)] backdrop-blur-[16px] sm:p-8 lg:grid lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-8 lg:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--color-ink-muted)]">
              Calcolatore
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[color:var(--color-ink)] sm:text-4xl">
              Scopri in 1 minuto quanto stai perdendo ogni mese.
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] text-[color:var(--color-ink-muted)] sm:mt-4 sm:text-base">
              Inserisci pochi dati, ottieni una stima chiara e confronta subito lo scenario con Reglo.
            </p>
            <Link
              to="/calcolatore"
              onClick={() => trackCalculatorCTA('home_teaser')}
              className="interactive-lift mt-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--color-ink)] px-6 py-3 text-sm sm:text-base font-semibold text-white"
            >
              Vai al calcolatore
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-6 space-y-0 border-t border-[color:var(--color-border)]/55 pt-2 sm:mt-8 sm:space-y-3 sm:border-0 sm:pt-0">
            <div className="flex items-start gap-3 border-b border-[color:var(--color-border)]/55 py-3 sm:rounded-2xl sm:border sm:border-b sm:border-white/70 sm:bg-white/82 sm:p-5 sm:shadow-[0_18px_35px_rgba(50,78,122,0.14)] sm:backdrop-blur-[14px]">
              <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--color-accent)]">
                <Clock3 className="h-4 w-4 text-[color:var(--color-ink)]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[color:var(--color-ink)]">Vista mensile e annuale</p>
                <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">
                  Vedi subito il costo ricorrente senza fare conti manuali.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 border-b border-[color:var(--color-border)]/55 py-3 sm:rounded-2xl sm:border sm:border-b sm:border-white/70 sm:bg-white/82 sm:p-5 sm:shadow-[0_18px_35px_rgba(50,78,122,0.14)] sm:backdrop-blur-[14px]">
              <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--color-accent)]">
                <TrendingDown className="h-4 w-4 text-[color:var(--color-ink)]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[color:var(--color-ink)]">Proiezione a 5 anni</p>
                <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">
                  Capisci l impatto economico reale nel medio periodo.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 py-3 sm:rounded-2xl sm:border sm:border-white/70 sm:bg-white/82 sm:p-5 sm:shadow-[0_18px_35px_rgba(50,78,122,0.14)] sm:backdrop-blur-[14px]">
              <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--color-accent)]">
                <Calculator className="h-4 w-4 text-[color:var(--color-ink)]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[color:var(--color-ink)]">
                  Simulazione immediata
                </p>
                <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">
                  Valutazione orientativa, pensata per decidere se intervenire ora.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
