import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const scrollToDemo = () => {
    document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 pt-12 pb-16 lg:pt-16">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
          <div className="space-y-6">
            <div className="glass-chip inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[color:var(--color-ink)]">
              <span className="h-2 w-2 rounded-full bg-[color:var(--color-ink)]" />
              Automazione operativa
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.08] text-[color:var(--color-ink)]">
              Il nuovo modo di automatizzare processi e documenti aziendali
            </h1>
            <p className="text-base sm:text-lg text-[color:var(--color-ink-muted)] leading-relaxed">
              Reglo centralizza workflow, documenti e firme digitali collegandosi al tuo ERP.
              Meno burocrazia, più visibilità, team più veloci.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={scrollToDemo}
                className="interactive-lift px-6 py-3 rounded-full bg-[color:var(--color-ink)] text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-soft"
              >
                Richiedi una demo
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/demo"
                className="interactive-lift px-6 py-3 rounded-full font-semibold text-sm sm:text-base flex items-center justify-center gap-2 border border-white/70 text-[color:var(--color-ink)] bg-white/70"
              >
                Inizia ora
              </Link>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="glass-card rounded-full px-4 py-2 text-xs text-[color:var(--color-ink-muted)] flex items-center gap-2">
                <Star className="h-4 w-4 text-[color:var(--color-ink)]" />
                4,9/5 valutazione media
              </div>
              <div className="glass-card rounded-full px-4 py-2 text-xs text-[color:var(--color-ink-muted)]">
                Go-live medio in 7 giorni
              </div>
              <div className="glass-card rounded-full px-4 py-2 text-xs text-[color:var(--color-ink-muted)]">
                Setup assistito dal team Reglo
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-6">
            <div className="flex items-center justify-between">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
                Angolo prodotto
              </div>
              <span className="text-[10px] text-[color:var(--color-ink-muted)]">Preview</span>
            </div>
            <div className="mt-4 glass-card rounded-2xl aspect-[4/3] flex items-center justify-center text-xs text-[color:var(--color-ink-muted)]">
              Inserisci qui lo screen del prodotto
            </div>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              <div className="glass-card rounded-2xl px-4 py-3 text-xs text-[color:var(--color-ink-muted)]">
                Dashboard operativa con KPI, task e colli di bottiglia.
              </div>
              <div className="glass-card rounded-2xl px-4 py-3 text-xs text-[color:var(--color-ink-muted)]">
                Flussi approvativi e documenti in un solo pannello.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
