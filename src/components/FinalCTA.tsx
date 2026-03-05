import { ArrowRight, CalendarCheck2, Clock3, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CAL_BOOKING_URL, trackBookingCTA } from '../lib/booking';
import { useScrollReveal } from '../hooks/useScrollReveal';

const STEPS = [
  { icon: CalendarCheck2, title: 'Analisi operativa iniziale',    desc: 'Capire dove perdi slot e tempo in agenda oggi.'                       },
  { icon: Clock3,         title: 'Mappatura processo attuale',    desc: 'Rivedere insieme prenotazioni, no-show e gestione istruttori.'          },
  { icon: PhoneCall,      title: 'Piano pratico per la tua scuola', desc: 'Uscire dalla call con i prossimi passi chiari e prioritizzati.'       },
];

export default function FinalCTA() {
  const { ref: headRef,  isVisible: headVisible  } = useScrollReveal<HTMLDivElement>(0.15);
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollReveal<HTMLDivElement>(0.1);

  return (
    <section id="demo-form" className="relative overflow-hidden bg-[#f8fafc]">
      {/* Top line */}
      <div className="section-line" />

      {/* Mint accent blob */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(175,226,212,0.14) 0%, transparent 60%)',
          filter: 'blur(90px)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(50,77,122,0.05) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1120px] px-5 py-28 sm:px-8 sm:py-36">

        {/* Heading */}
        <div
          ref={headRef}
          className={`text-center mb-16 reveal-fade ${headVisible ? 'is-visible' : ''}`}
        >
          <span className="text-xs font-black uppercase tracking-[0.32em] text-[#324D7A]/35">
            Analisi strategica
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black leading-[1.05] text-[#0f1e36]">
            Prenota una call con{' '}
            <span className="text-gradient-navy">il team Reglo.</span>
          </h2>
          <p className="mt-4 text-base text-[#324D7A]/50 max-w-md mx-auto leading-relaxed">
            Niente form: scegli data e orario su calendario, ti confermiamo subito.
          </p>
        </div>

        {/* Step cards */}
        <div ref={stepsRef} className="grid gap-4 md:grid-cols-3 mb-14">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            const stagger = ['stagger-1', 'stagger-2', 'stagger-3'][i];
            return (
              <article
                key={step.title}
                className={`reveal-fade ${stagger} ${stepsVisible ? 'is-visible' : ''} bg-white rounded-2xl p-6 border border-[#324D7A]/7 shadow-[0_4px_20px_rgba(50,77,122,0.07)] hover:-translate-y-1 transition-transform duration-300 cursor-default`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#AFE2D4]/25 mb-5">
                  <Icon className="h-5 w-5 text-[#1a7a70]" />
                </div>
                <h3 className="text-sm font-bold text-[#0f1e36] mb-2">{step.title}</h3>
                <p className="text-sm text-[#324D7A]/50 leading-relaxed">{step.desc}</p>
              </article>
            );
          })}
        </div>

        {/* CTA button */}
        <div
          className={`text-center reveal-fade ${headVisible ? 'is-visible' : ''}`}
          style={{ transitionDelay: '300ms' }}
        >
          <a
            href={CAL_BOOKING_URL}
            onClick={() => trackBookingCTA('home_final_cta')}
            className="btn-shimmer inline-flex items-center gap-3 rounded-full bg-[#324D7A] text-white px-9 py-4 text-base sm:text-lg font-bold transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(50,77,122,0.4)] cursor-pointer"
          >
            Vai al calendario appuntamenti
            <ArrowRight className="h-5 w-5" />
          </a>
          <p className="mt-4 text-sm text-[#324D7A]/35">Nessun impegno. Solo una conversazione.</p>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-10 border-t border-[#324D7A]/8 space-y-4 text-center">
          <div className="text-xl sm:text-2xl font-black tracking-tight text-[#0f1e36]">Reglo</div>
          <p className="text-[#324D7A]/40 text-sm">Piattaforma operativa per autoscuole</p>
          <div className="flex justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-[#324D7A]/35">
            <Link to="/privacy-policy" className="hover:text-[#324D7A] transition-colors">Privacy Policy</Link>
            <Link to="/policy"         className="hover:text-[#324D7A] transition-colors">Policy</Link>
            <a href="mailto:privacy@reglo.it" className="hover:text-[#324D7A] transition-colors">Contatti</a>
          </div>
          <p className="text-xs text-[#324D7A]/25">© 2026 Reglo. Tutti i diritti riservati.</p>
        </footer>
      </div>
    </section>
  );
}
