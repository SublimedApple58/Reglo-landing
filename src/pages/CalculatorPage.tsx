import { useState } from 'react';
import { CAL_BOOKING_URL, trackBookingCTA } from '../lib/booking';
import Footer from '../components/Footer';

/* ═══════════════════════════════════════════════════════════════════════
   CALCULATOR PAGE
══════════════════════════════════════════════════════════════════════ */

export default function CalculatorPage() {
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

  return (
    <div className="min-h-screen flex flex-col">

      {/* ── Calculator ── */}
      <section className="bg-[#111] py-20 sm:py-28 overflow-hidden flex-1">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#facc15] mb-3">
              Calcolatore Perdite
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Quanto stai perdendo ogni mese?
            </h1>
          </div>

          {/* Calculator card */}
          <div className="relative max-w-[900px] mx-auto">
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

      <Footer />
    </div>
  );
}
