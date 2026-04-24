import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CAL_BOOKING_URL, trackBookingCTA } from '../lib/booking';
import Footer from '../components/Footer';

/* ═══════════════════════════════════════════════════════════════════════
   HERO
══════════════════════════════════════════════════════════════════════ */

function Hero() {
  return (
    <section className="relative bg-white">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 pt-16 pb-10 sm:pt-20 sm:pb-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">

          {/* Left: copy */}
          <div className="hero-el hero-el-1">
            <h1 className="text-5xl sm:text-6xl lg:text-[64px] font-bold leading-[1.05] tracking-tight text-[#111] mb-6">
              L'autoscuola del{' '}
              <br className="hidden sm:block" />
              <span className="text-[#ec4899]">futuro.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#6b7280] leading-relaxed max-w-[480px] mb-8">
              Slot pieni. Meno chiamate. Segreteria, istruttori e
              allievi sincronizzati in un'unica app.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={CAL_BOOKING_URL}
                onClick={() => trackBookingCTA('home_hero')}
                className="btn-shimmer inline-flex items-center gap-2 rounded-full bg-[#ec4899] text-white px-7 py-3.5 text-base font-bold transition-all duration-200 hover:bg-[#db2777] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(236,72,153,0.3)]"
              >
                Richiedi una demo &rarr;
              </a>
              <a
                href="#come-funziona"
                onClick={(e) => { e.preventDefault(); document.getElementById('come-funziona')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#111]/15 bg-white text-[#111] px-7 py-3.5 text-base font-bold transition-all duration-200 hover:-translate-y-0.5 hover:border-[#111]/30 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
              >
                Scopri di più
              </a>
            </div>
          </div>

          {/* Right: dashboard + mascot */}
          <div className="hero-el hero-el-2 relative flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-[600px] pb-16"
              style={{ animation: 'floatY-a 8s ease-in-out infinite' }}
            >
              {/* Mascot at the left edge of the dashboard */}
              <img
                src="/mascot.png"
                alt="Mascotte Reglo"
                className="absolute left-[-100px] sm:left-[-115px] lg:left-[-125px] bottom-[22px] w-40 sm:w-48 lg:w-56 drop-shadow-xl z-20"
              />
              {/* Dashboard screenshot */}
              <img
                src="/dashboard-screenshot.png"
                alt="Dashboard Reglo"
                className="relative z-10 w-full rounded-[25px] shadow-[0_24px_64px_rgba(0,0,0,0.08)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   TRUSTED BY
══════════════════════════════════════════════════════════════════════ */

function TrustedBy() {
  return (
    <section className="bg-white pb-10 pt-6">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9ca3af] text-center mb-8">
          Già scelta dalle autoscuole innovative
        </p>
        <div className="flex items-center justify-center gap-6 sm:gap-8 flex-wrap">
          {[
            { src: '/partner-1.png', h: 'h-[56px]', href: 'https://www.scuolaguidamontreal.it/' },
            { src: '/partner-3.png', h: 'h-[22px]', href: 'https://autoscuolanewdrive.ai/' },
            { src: '/partner-2.png', h: 'h-[38px]', href: 'https://www.autoscuolazzurra.com/' },
            { src: '/partner-4.png', h: 'h-[52px]', href: 'https://www.autoscuolevicenza.it/' },
            { src: '/partner-5.png', h: 'h-full', href: 'https://www.autoscuoleandrea.com/', fill: true },
          ].map((logo, i) => (
            <a
              key={i}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              style={logo.bg ? { backgroundColor: logo.bg } : undefined}
              className={`flex items-center justify-center ${logo.bg ? '' : 'bg-white'} rounded-lg w-[140px] h-[48px] border border-[#E5E7EB] overflow-hidden hover:border-[#ec4899]/30 transition-colors`}
            >
              <img src={logo.src} alt="Partner" className={`${logo.fill ? 'w-full h-full object-cover' : `${logo.h} object-contain`}`} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   FEATURES 2x2
══════════════════════════════════════════════════════════════════════ */

const FEATURES = [
  {
    emoji: '⏱️',
    title: 'Recupero slot automatico',
    desc: 'Quando una guida salta, Reglo si attiva per riempire lo slot in automatico.',
  },
  {
    emoji: '💬',
    title: 'Comunicazioni chiare',
    desc: 'Promemoria per Allievi e Istruttori prima delle guide, per nuovi slot o promemoria generici.',
  },
  {
    emoji: '💳',
    title: 'Pagamenti sotto controllo',
    desc: 'Pagamenti tramite app, con fatturazione automatica e transazioni organizzate.',
  },
  {
    emoji: '📅',
    title: 'Agenda condivisa',
    desc: 'Allievo, istruttore e segreteria vedono lo stesso stato in tempo reale.',
  },
];

function Features() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>(0.1);

  return (
    <section className="bg-[#f9fafb] py-20 sm:py-28">
      <div ref={ref} className="max-w-[1440px] mx-auto px-5 sm:px-8">
        {/* Heading */}
        <div className={`text-center mb-14 reveal-fade ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="text-4xl sm:text-[52px] font-bold leading-tight text-[#111]">
            Una giornata più ordinata,{' '}
            <span className="text-[#facc15]">da subito.</span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-[#6b7280] max-w-2xl mx-auto">
            Ogni funzione nasce da un problema reale: slot vuoti, chiamate inutili, informazioni sparse.
          </p>
        </div>

        {/* 2x2 grid */}
        <div className="grid gap-5 sm:grid-cols-2 max-w-[960px] mx-auto">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className={`reveal-fade stagger-${i + 1} ${isVisible ? 'is-visible' : ''} bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#facc15]/15 mb-5">
                <span className="text-2xl">{f.emoji}</span>
              </div>
              <h3 className="text-xl font-bold text-[#111] mb-2">{f.title}</h3>
              <p className="text-base text-[#6b7280] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   CALCULATOR SECTION
══════════════════════════════════════════════════════════════════════ */

function CalculatorSection() {
  const [costoGuida, setCostoGuida] = useState('50');
  const [slotLiberi, setSlotLiberi] = useState('10');
  const [isAnnual, setIsAnnual] = useState(true);
  const [calculated, setCalculated] = useState(false);

  const costo = parseInt(costoGuida) || 0;
  const slot = parseInt(slotLiberi) || 0;
  const perditaMensile = costo * slot * 4;
  const perditaAnnuale = perditaMensile * 12;
  const proiezione5Anni = perditaAnnuale * 10;

  const displayPerdita = isAnnual ? perditaAnnuale : perditaMensile;
  const display5Anni = isAnnual ? proiezione5Anni : perditaMensile * 60;

  const formatCurrency = (n: number) =>
    n.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';

  const handleCalc = () => setCalculated(true);

  const { ref, isVisible } = useScrollReveal<HTMLDivElement>(0.1);

  return (
    <section className="bg-[#111] pt-24 pb-32 sm:pt-32 sm:pb-48 lg:pt-40 lg:pb-56 overflow-hidden">
      <div ref={ref} className="max-w-[1440px] mx-auto px-5 sm:px-8">
        {/* Heading */}
        <div className={`text-center mb-12 reveal-fade ${isVisible ? 'is-visible' : ''}`}>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#facc15] mb-3">
            Calcolatore Perdite
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Quanto stai perdendo ogni mese?
          </h2>
        </div>

        {/* Calculator card */}
        <div className={`reveal-fade stagger-2 ${isVisible ? 'is-visible' : ''} relative max-w-[900px] mx-auto`}>
          <div className="relative grid lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.3)]">

            {/* Left: Parameters */}
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-100">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#facc15] mb-6">
                Parametri
              </p>

              <label className="block mb-2 text-[15px] font-bold text-[#111]">Costo guida</label>
              <input
                type="number"
                value={costoGuida}
                onChange={(e) => { setCostoGuida(e.target.value); setCalculated(false); }}
                className="w-full bg-gray-50 rounded-xl px-4 py-3.5 mb-5 border border-gray-200 text-lg font-bold text-[#111] outline-none focus:border-[#ec4899] transition-colors"
              />

              <label className="block mb-2 text-[15px] font-bold text-[#111]">Slot liberi a settimana</label>
              <input
                type="number"
                value={slotLiberi}
                onChange={(e) => { setSlotLiberi(e.target.value); setCalculated(false); }}
                className="w-full bg-gray-50 rounded-xl px-4 py-3.5 mb-6 border border-gray-200 text-lg font-bold text-[#111] outline-none focus:border-[#ec4899] transition-colors"
              />

              <button
                onClick={handleCalc}
                className="w-full py-3.5 rounded-full bg-[#ec4899] text-white font-bold text-base hover:bg-[#db2777] transition-colors"
              >
                Calcola le perdite
              </button>
            </div>

            {/* Right: Results */}
            <div className="p-8">
              {/* Header row: label + toggle */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#facc15]">
                  Risultati
                </p>
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => setIsAnnual(!isAnnual)}
                    className={`relative w-[52px] h-[28px] rounded-full transition-colors shrink-0 ${isAnnual ? 'bg-[#ec4899]' : 'bg-gray-300'}`}
                  >
                    <span
                      className={`absolute top-[3px] left-[3px] w-[22px] h-[22px] rounded-full bg-white shadow-md transition-transform ${
                        isAnnual ? 'translate-x-[24px]' : 'translate-x-0'
                      }`}
                    />
                  </button>
                  <span className="text-sm font-bold text-[#111]">Annuale</span>
                </div>
              </div>

              {/* Loss */}
              <div className="bg-gray-50 rounded-xl p-5 mb-4 border border-gray-100">
                <p className="text-xs font-bold uppercase tracking-wider text-[#6b7280] mb-1">
                  Perdita {isAnnual ? 'annuale' : 'mensile'}
                </p>
                <p className="text-[36px] sm:text-[40px] font-bold text-[#111] leading-tight">
                  {calculated ? formatCurrency(displayPerdita) : formatCurrency(isAnnual ? 12000 : 1000)}
                </p>
              </div>

              {/* 5 year projection */}
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <p className="text-xs font-bold uppercase tracking-wider text-[#64748b] mb-1">
                  Proiezione 5 anni
                </p>
                <p className="text-2xl sm:text-[28px] font-bold text-[#64748b] leading-tight">
                  {calculated ? formatCurrency(display5Anni) : formatCurrency(isAnnual ? 120000 : 60000)}
                </p>
              </div>
            </div>
          </div>

          {/* Mascot bottom-right */}
          <img
            src="/mascot-calculator.png"
            alt="Mascotte Reglo"
            className="hidden lg:block absolute right-[-60px] -bottom-24 w-[170px] drop-shadow-xl pointer-events-none"
          />
        </div>

        {/* CTA after calculator */}
        {calculated && (
          <div className="text-center mt-10 animate-fadeInUp">
            <a
              href={CAL_BOOKING_URL}
              onClick={() => trackBookingCTA('calculator_cta')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#ec4899] text-white font-bold text-base hover:bg-[#db2777] transition-colors"
            >
              Richiedi una demo &rarr;
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   COME FUNZIONA
══════════════════════════════════════════════════════════════════════ */

const CHECK = (
  <svg className="w-4 h-4 text-[#facc15] flex-shrink-0" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill="#facc15" fillOpacity="0.15" />
    <path d="M6 10.5L8.5 13L14 7.5" stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function ComeFunziona() {
  const { ref: ref1, isVisible: vis1 } = useScrollReveal<HTMLDivElement>(0.1);
  const { ref: ref2, isVisible: vis2 } = useScrollReveal<HTMLDivElement>(0.1);

  return (
    <section id="come-funziona" className="bg-[#f9fafb] py-20 sm:py-28">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        <h2 className="text-4xl sm:text-[52px] font-bold text-[#111] text-center mb-16">
          Come funziona
        </h2>

        {/* Block 1 */}
        <div ref={ref1} className="grid gap-10 lg:grid-cols-2 items-center mb-20">
          <div className={`reveal-left ${vis1 ? 'is-visible' : ''}`}>
            <video className="w-full max-w-[560px] aspect-video rounded-[25px] shadow-[0_16px_48px_rgba(0,0,0,0.08)] object-cover" controls playsInline>
              <source src="/InstructorTutorial.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={`reveal-right ${vis1 ? 'is-visible' : ''}`}>
            <h3 className="text-3xl sm:text-[40px] font-bold text-[#111] mb-4 leading-tight">
              <span className="text-[#6b7280] font-bold">1.</span> Gestione Guide Automatica
            </h3>
            <p className="text-base text-[#6b7280] mb-2">
              Elimina il caos di chiamate e messaggi fuori orario.
            </p>
            <p className="text-base text-[#6b7280] mb-6">
              — Gli allievi vedono i tuoi slot liberi e prenotano in autonomia.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                {CHECK}
                <span className="text-base text-[#111]">Sincronizzazione in tempo reale</span>
              </li>
              <li className="flex items-center gap-3">
                {CHECK}
                <span className="text-base text-[#111]">Promemoria automatici agli allievi</span>
              </li>
              <li className="flex items-center gap-3">
                {CHECK}
                <span className="text-base text-[#111]">Pagamenti e penali disponibili in app.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Block 2 */}
        <div ref={ref2} className="grid gap-10 lg:grid-cols-2 items-center">
          <div className={`reveal-left ${vis2 ? 'is-visible' : ''} lg:order-2`}>
            <video className="w-full max-w-[560px] aspect-video rounded-[25px] shadow-[0_16px_48px_rgba(0,0,0,0.08)] object-cover" controls playsInline>
              <source src="/StudentTutorial.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={`reveal-right ${vis2 ? 'is-visible' : ''} lg:order-1`}>
            <h3 className="text-3xl sm:text-[40px] font-bold text-[#111] mb-4 leading-tight">
              <span className="text-[#6b7280] font-bold">2.</span> Il tuo tempo sotto controllo
            </h3>
            <p className="text-base text-[#6b7280] mb-2">
              Tutto il flusso di lavoro monitorato con un click.
            </p>
            <p className="text-base text-[#6b7280] mb-6">
              Gestisci presenze, assenze e pagamenti senza errori.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                {CHECK}
                <span className="text-base text-[#111]">Agenda sincronizzata di Istruttori e Veicoli</span>
              </li>
              <li className="flex items-center gap-3">
                {CHECK}
                <span className="text-base text-[#111]">Recupero automatico degli slot cancellati</span>
              </li>
              <li className="flex items-center gap-3">
                {CHECK}
                <span className="text-base text-[#111]">Gestione pagamenti e residui allievi</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   HOME PAGE
══════════════════════════════════════════════════════════════════════ */

export default function HomePage() {
  return (
    <div className="overflow-x-hidden bg-white">
      <Hero />
      <TrustedBy />
      <Features />
      <CalculatorSection />
      <ComeFunziona />
      <Footer />
    </div>
  );
}
