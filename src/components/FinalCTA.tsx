import { ArrowRight, CalendarCheck2, Clock3, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CAL_BOOKING_URL, trackBookingCTA } from '../lib/booking';

const steps = [
  {
    title: 'Analisi operativa iniziale',
    description: 'Capire dove perdi slot e tempo in agenda oggi.',
    icon: CalendarCheck2,
  },
  {
    title: 'Mappatura processo attuale',
    description: 'Rivedere insieme prenotazioni, no-show e gestione istruttori.',
    icon: Clock3,
  },
  {
    title: 'Piano pratico per la tua scuola',
    description: 'Uscire dalla call con i prossimi passi chiari e prioritizzati.',
    icon: PhoneCall,
  },
];

export default function FinalCTA() {
  return (
    <section id="demo-form" className="py-14 sm:py-16">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
        <div className="rounded-3xl border border-white/70 bg-white/72 p-6 shadow-[0_14px_36px_rgba(50,78,122,0.16)] backdrop-blur-[16px] sm:p-8 lg:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--color-ink-muted)]">
              Analisi strategica
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[color:var(--color-ink)] sm:text-4xl">
              Prenota direttamente una call con il team Reglo.
            </h2>
            <p className="mt-3 text-sm text-[color:var(--color-ink-muted)] sm:text-base">
              Niente form: scegli data e orario su calendario e ti confermiamo subito l'appuntamento.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="glass-card rounded-2xl p-4 sm:p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--color-accent)]">
                    <Icon className="h-5 w-5 text-[color:var(--color-ink)]" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-[color:var(--color-ink)]">{step.title}</h3>
                  <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">{step.description}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <a
              href={CAL_BOOKING_URL}
              onClick={() => trackBookingCTA('home_final_cta')}
              className="interactive-lift inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--color-ink)] px-6 py-3 text-sm font-semibold text-white sm:w-auto sm:text-base"
            >
              Vai al calendario appuntamenti
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <footer className="mt-10 space-y-3 text-center sm:mt-12">
          <div className="flex items-center justify-center gap-2">
            <div className="text-xl sm:text-2xl font-semibold text-[color:var(--color-ink)]">Reglo</div>
          </div>
          <p className="text-[color:var(--color-ink-muted)] text-sm">
            Piattaforma operativa per autoscuole
          </p>
          <div className="flex justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-[color:var(--color-ink-muted)]">
            <Link to="/privacy-policy" className="hover:text-[color:var(--color-ink)] transition-colors">Privacy Policy</Link>
            <Link to="/policy" className="hover:text-[color:var(--color-ink)] transition-colors">Policy</Link>
            <a href="mailto:privacy@reglo.it" className="hover:text-[color:var(--color-ink)] transition-colors">Contatti</a>
          </div>
          <p className="text-xs sm:text-sm text-[color:var(--color-ink-muted)]">© 2026 Reglo. Tutti i diritti riservati.</p>
        </footer>
      </div>
    </section>
  );
}
