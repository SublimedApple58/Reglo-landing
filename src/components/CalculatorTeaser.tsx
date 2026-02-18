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
    <section className="px-6 py-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--color-ink-muted)]">
              Nuovo strumento
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-[color:var(--color-ink)]">
              Calcola quanti soldi perdi ogni mese con slot vuoti e calendario manuale.
            </h2>
            <p className="mt-4 text-base text-[color:var(--color-ink-muted)] max-w-2xl">
              Inserisci pochi dati operativi e ottieni una stima mensile, annuale e a 5 anni.
              Poi confronta l impatto con Reglo.
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

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="glass-card rounded-2xl p-5">
              <div className="w-10 h-10 rounded-2xl bg-[color:var(--color-accent)] flex items-center justify-center">
                <Clock3 className="h-5 w-5 text-[color:var(--color-ink)]" />
              </div>
              <p className="mt-4 text-sm font-semibold text-[color:var(--color-ink)]">Vista mensile/annuale</p>
              <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">
                Passa da mese ad anno con un toggle immediato.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <div className="w-10 h-10 rounded-2xl bg-[color:var(--color-accent)] flex items-center justify-center">
                <TrendingDown className="h-5 w-5 text-[color:var(--color-ink)]" />
              </div>
              <p className="mt-4 text-sm font-semibold text-[color:var(--color-ink)]">Proiezione a 5 anni</p>
              <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">
                Mostra il costo cumulato della gestione attuale.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-5 sm:col-span-2">
              <div className="w-10 h-10 rounded-2xl bg-[color:var(--color-accent)] flex items-center justify-center">
                <Calculator className="h-5 w-5 text-[color:var(--color-ink)]" />
              </div>
              <p className="mt-4 text-sm font-semibold text-[color:var(--color-ink)]">
                Simulazione coerente con il tuo assetto autoscuola
              </p>
              <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">
                Costi guida, costi orari e volumi operativi vengono pesati nello stesso modello.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
