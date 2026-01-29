import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  const scrollToDemo = () => {
    document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const highlights = [
    'Onboarding guidato e team dedicato',
    'Integrazione con il tuo ERP senza sostituzioni',
    'Processi tracciati end-to-end',
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="glass-panel rounded-3xl px-8 py-10 sm:px-12 sm:py-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink-muted)]">
              Iniziamo
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[color:var(--color-ink)]">
              Pronto a liberare il tuo team dalla burocrazia?
            </h2>
            <p className="text-lg text-[color:var(--color-ink-muted)]">
              Parliamo del tuo flusso attuale e costruiamo insieme la roadmap di automazione.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToDemo}
                className="interactive-lift px-7 py-3.5 rounded-full bg-[color:var(--color-ink)] text-white font-semibold text-base sm:text-lg flex items-center justify-center gap-2 shadow-soft"
              >
                Richiedi una demo
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                to="/demo"
                className="interactive-lift px-7 py-3.5 rounded-full font-semibold text-base sm:text-lg flex items-center justify-center gap-2 border border-white/70 text-[color:var(--color-ink)] bg-white/70"
              >
                Inizia ora
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {highlights.map((item) => (
              <div key={item} className="glass-card rounded-2xl px-5 py-4 flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-[color:var(--color-accent)] flex items-center justify-center">
                  <Check className="h-4 w-4 text-[color:var(--color-ink)]" />
                </div>
                <div className="text-sm text-[color:var(--color-ink-muted)]">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer className="mt-12 sm:mt-16 text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="text-2xl sm:text-3xl font-semibold text-[color:var(--color-ink)]">Reglo</div>
          </div>
          <p className="text-[color:var(--color-ink-muted)]">
            La piattaforma cloud per automatizzare i processi aziendali
          </p>
          <div className="flex justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-[color:var(--color-ink-muted)]">
            <a href="#" className="hover:text-[color:var(--color-ink)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[color:var(--color-ink)] transition-colors">Termini di Servizio</a>
            <a href="#" className="hover:text-[color:var(--color-ink)] transition-colors">Contatti</a>
          </div>
          <p className="text-xs sm:text-sm text-[color:var(--color-ink-muted)]">
            © 2026 Reglo. Tutti i diritti riservati.
          </p>
        </footer>
      </div>
    </section>
  );
}
