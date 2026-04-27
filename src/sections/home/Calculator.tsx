'use client';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Calculator as CalcIcon } from '@phosphor-icons/react';
import CountUp from '../../components/ui/CountUp';
import MagneticButton from '../../components/ui/MagneticButton';
import { CAL_BOOKING_URL, trackBookingCTA } from '../../lib/booking';
import { SPRING } from '../../motion';

export default function CalculatorSection() {
  const [costoGuida, setCostoGuida] = useState('50');
  const [slotLiberi, setSlotLiberi] = useState('10');
  const [isAnnual, setIsAnnual] = useState(true);
  const [calculated, setCalculated] = useState(false);

  const { perdita, projection } = useMemo(() => {
    const c = parseInt(costoGuida) || 0;
    const s = parseInt(slotLiberi) || 0;
    const monthly = c * s * 4;
    return {
      perdita: isAnnual ? monthly * 12 : monthly,
      projection: isAnnual ? monthly * 12 * 5 : monthly * 60,
    };
  }, [costoGuida, slotLiberi, isAnnual]);

  return (
    <section id="calcolatore" className="relative isolate overflow-hidden bg-ink-950 text-paper py-28 sm:py-36 lg:py-44">
      {/* Background orbs */}
      <div className="pointer-events-none absolute -top-32 right-1/4 h-[500px] w-[500px] rounded-full bg-rose-500/15 blur-[140px]" aria-hidden />
      <div className="pointer-events-none absolute -bottom-40 left-1/4 h-[420px] w-[420px] rounded-full bg-amber-400/10 blur-[140px]" aria-hidden />

      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

        {/* LEFT — heading (cols 1..5) */}
        <div className="lg:col-span-5">
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-amber-400 mb-5"
          >
            <CalcIcon size={14} weight="bold" />
            Calcolatore perdite
          </motion.p>
          <h2 className="h-section text-4xl sm:text-5xl lg:text-6xl text-paper">
            Quanto stai<br />
            perdendo,<br />
            <span className="italic font-light text-paper/60">davvero</span>?
          </h2>
          <p className="mt-6 text-paper/70 text-lg max-w-[440px] leading-relaxed">
            Inserisci i tuoi dati. La perdita media delle autoscuole non digitalizzate è di 5 cifre annue.
          </p>
        </div>

        {/* RIGHT — calculator card (cols 6..12) */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={SPRING.soft}
            className="glass rounded-[28px] p-2 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]"
          >
            <div className="rounded-[24px] bg-paper p-7 sm:p-9">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">

                {/* Inputs */}
                <div className="space-y-5">
                  <NumberField
                    label="Costo guida (€)"
                    value={costoGuida}
                    onChange={(v) => { setCostoGuida(v); setCalculated(false); }}
                  />
                  <NumberField
                    label="Slot liberi a settimana"
                    value={slotLiberi}
                    onChange={(v) => { setSlotLiberi(v); setCalculated(false); }}
                  />
                </div>

                {/* Results */}
                <div className="space-y-4">
                  <div className="flex items-center justify-end gap-3">
                    <button
                      onClick={() => setIsAnnual(false)}
                      className={`text-[12px] font-semibold transition-colors ${!isAnnual ? 'text-ink-950' : 'text-ink-300 hover:text-ink-500'}`}
                    >
                      Mensile
                    </button>
                    <button
                      onClick={() => setIsAnnual(!isAnnual)}
                      className="relative h-7 w-12 rounded-full bg-ink-100 transition-colors"
                      aria-label="Toggle period"
                    >
                      <motion.span
                        layout
                        transition={SPRING.snappy}
                        className={`absolute top-0.5 h-6 w-6 rounded-full bg-ink-950 shadow-md ${isAnnual ? 'right-0.5' : 'left-0.5'}`}
                      />
                    </button>
                    <button
                      onClick={() => setIsAnnual(true)}
                      className={`text-[12px] font-semibold transition-colors ${isAnnual ? 'text-ink-950' : 'text-ink-300 hover:text-ink-500'}`}
                    >
                      Annuale
                    </button>
                  </div>

                  <div className="rounded-2xl bg-ink-50 p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-500 mb-2">
                      Perdita {isAnnual ? 'annuale' : 'mensile'}
                    </p>
                    <p className="text-[40px] font-bold text-ink-950 leading-none tabular-nums">
                      €{' '}<CountUp value={perdita} />
                    </p>
                  </div>

                  <div className="rounded-2xl border border-ink-100 p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-500 mb-2">
                      Proiezione 5 anni
                    </p>
                    <p className="text-2xl font-bold text-ink-500 tabular-nums leading-none">
                      €{' '}<CountUp value={projection} />
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setCalculated(true)}
                className="mt-6 w-full rounded-2xl bg-ink-950 text-paper py-4 text-[15px] font-semibold hover:bg-rose-500 transition-colors"
              >
                Calcola le perdite
              </button>
            </div>
          </motion.div>

          <AnimatePresence>
            {calculated && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={SPRING.snappy}
                className="mt-6 flex justify-end"
              >
                <MagneticButton
                  href={CAL_BOOKING_URL}
                  onClick={() => trackBookingCTA('calculator_cta')}
                  className="group inline-flex items-center gap-3 rounded-full bg-rose-500 text-paper pl-6 pr-5 py-3.5 text-[14px] font-semibold shadow-rose-soft hover:bg-paper hover:text-rose-500 transition-colors"
                >
                  Recupera questi soldi
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-paper/15 group-hover:bg-rose-500/15 transition-all group-hover:rotate-45">
                    <ArrowUpRight size={14} weight="bold" />
                  </span>
                </MagneticButton>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function NumberField({
  label, value, onChange,
}: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[12px] font-semibold uppercase tracking-wider text-ink-500">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-ink-200 bg-paper px-4 py-3.5 text-2xl font-bold text-ink-950 tabular-nums outline-none transition-colors focus:border-rose-500"
      />
    </div>
  );
}
