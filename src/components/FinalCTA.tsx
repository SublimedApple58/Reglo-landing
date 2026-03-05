import { ArrowRight, CalendarCheck2, Clock3, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CAL_BOOKING_URL, trackBookingCTA } from '../lib/booking';
import { useScrollReveal } from '../hooks/useScrollReveal';

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
  const { ref: headingRef, isVisible: headingVisible } =
    useScrollReveal<HTMLDivElement>(0.15);
  const { ref: stepsRef, isVisible: stepsVisible } =
    useScrollReveal<HTMLDivElement>(0.1);

  return (
    <section
      id="demo-form"
      className="relative overflow-hidden"
      style={{
        background:
          'linear-gradient(170deg, #0f1e36 0%, #1a2d4e 35%, #162240 60%, #0a1628 100%)',
      }}
    >
      {/* Glow blobs */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: '900px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(50,77,122,0.35) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(175,226,212,0.1) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none"
        style={{
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(175,226,212,0.07) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="absolute inset-0 bg-grid-dark" />

      <div className="relative z-10 mx-auto max-w-[1120px] px-4 py-20 sm:px-6 sm:py-28">

        {/* Heading */}
        <div
          ref={headingRef}
          className={`text-center mb-16 reveal-fade ${headingVisible ? 'is-visible' : ''}`}
        >
          <span className="text-xs font-bold uppercase tracking-[0.34em] text-[#AFE2D4]/50">
            Analisi strategica
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black leading-[1.05] text-white">
            Prenota una call con
            <br />
            <span className="text-gradient-mint">il team Reglo.</span>
          </h2>
          <p className="mt-4 text-base text-white/45 max-w-lg mx-auto leading-relaxed">
            Niente form: scegli data e orario su calendario e ti confermiamo
            subito l'appuntamento.
          </p>
        </div>

        {/* Step cards */}
        <div
          ref={stepsRef}
          className="grid gap-4 md:grid-cols-3 mb-14"
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            const staggerClass = ['stagger-1', 'stagger-2', 'stagger-3'][i];
            return (
              <article
                key={step.title}
                className={`reveal-fade ${staggerClass} ${stepsVisible ? 'is-visible' : ''} gradient-border-card rounded-2xl p-6 group hover:-translate-y-1 transition-transform duration-300`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#AFE2D4]/10 group-hover:bg-[#AFE2D4]/16 transition-colors duration-300 icon-glow-mint">
                  <Icon className="h-5 w-5 text-[#AFE2D4]" />
                </div>
                <h3 className="mt-5 text-sm font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-white/45 leading-relaxed">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* CTA button */}
        <div
          className={`text-center reveal-fade ${headingVisible ? 'is-visible' : ''}`}
          style={{ transitionDelay: '300ms' }}
        >
          <a
            href={CAL_BOOKING_URL}
            onClick={() => trackBookingCTA('home_final_cta')}
            className="btn-shimmer animate-glow-pulse inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#AFE2D4] to-[#6cbfb0] px-8 py-4 text-base sm:text-lg font-bold text-[#0a1628] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_48px_rgba(175,226,212,0.55)] cursor-pointer"
          >
            Vai al calendario appuntamenti
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-10 border-t border-white/8 space-y-4 text-center">
          <div className="text-xl sm:text-2xl font-black tracking-tight text-white">
            Reglo
          </div>
          <p className="text-white/35 text-sm">
            Piattaforma operativa per autoscuole
          </p>
          <div className="flex justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-white/30">
            <Link
              to="/privacy-policy"
              className="hover:text-white/65 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to="/policy"
              className="hover:text-white/65 transition-colors duration-200"
            >
              Policy
            </Link>
            <a
              href="mailto:privacy@reglo.it"
              className="hover:text-white/65 transition-colors duration-200"
            >
              Contatti
            </a>
          </div>
          <p className="text-xs text-white/20">
            © 2026 Reglo. Tutti i diritti riservati.
          </p>
        </footer>
      </div>
    </section>
  );
}
