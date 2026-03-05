import { useMemo, useState } from 'react';
import {
  calculateAutoscuolaLoss,
  DEFAULT_CALCULATOR_INPUT,
  formatEuro,
  type AutoscuolaCalculatorInput,
} from '../lib/calculator';
import { CAL_BOOKING_URL } from '../lib/booking';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight, TrendingDown, CalendarX, Euro } from 'lucide-react';

type NumericField = 'costoGuida' | 'slotLiberiSettimanali';

function trackCustom(eventName: string, payload: Record<string, unknown>) {
  const fbq = (window as Window & { fbq?: (...args: unknown[]) => void }).fbq;
  if (typeof fbq === 'function') {
    fbq('trackCustom', eventName, payload);
  }
}

export default function CalculatorPage() {
  const [formData, setFormData] = useState<AutoscuolaCalculatorInput>(DEFAULT_CALCULATOR_INPUT);
  const [result, setResult] = useState(() => calculateAutoscuolaLoss(DEFAULT_CALCULATOR_INPUT));
  const [hasCalculated, setHasCalculated] = useState(false);

  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal(0.1);
  const { ref: calcRef, isVisible: calcVisible } = useScrollReveal(0.05);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal(0.1);

  const primaryLoss = useMemo(
    () => (formData.periodo === 'mensile' ? result.mensile : result.annuale),
    [formData.periodo, result.annuale, result.mensile]
  );

  const handleNumericChange =
    (field: NumericField) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const nextValue = Number(event.target.value);
      setFormData((prev) => ({
        ...prev,
        [field]: Number.isFinite(nextValue) ? Math.max(0, nextValue) : 0,
      }));
    };

  const handleTogglePeriod = () => {
    setFormData((prev) => ({
      ...prev,
      periodo: prev.periodo === 'mensile' ? 'annuale' : 'mensile',
    }));
  };

  const handleCalculate = () => {
    const nextResult = calculateAutoscuolaLoss(formData);
    setResult(nextResult);
    setHasCalculated(true);

    trackCustom('Calculator_Compute', {
      period: formData.periodo,
      costoGuida: formData.costoGuida,
      slotLiberiSettimanali: formData.slotLiberiSettimanali,
      amount: Number(
        (formData.periodo === 'mensile' ? nextResult.mensile : nextResult.annuale).toFixed(2)
      ),
    });
  };

  const handleDemoCta = () => {
    trackCustom('Calculator_DemoCTA_Click', { source: 'calculator_result' });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* ── Hero header ── */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 bg-grid-light">
        {/* Radial glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 70% 55% at 50% -10%, rgba(50,77,122,0.06) 0%, transparent 70%)',
          }}
        />

        <div
          ref={heroRef}
          className={`relative mx-auto max-w-[720px] text-center reveal-fade ${heroVisible ? 'is-visible' : ''}`}
        >
          <div className="hero-el hero-el-1 inline-flex items-center gap-2 rounded-full border border-[#324D7A]/12 bg-[#324D7A]/5 px-4 py-1.5 mb-6">
            <TrendingDown className="h-3.5 w-3.5 text-[#324D7A]" />
            <span className="text-xs font-semibold tracking-[0.15em] text-[#324D7A]/70 uppercase">Calcolatore perdite</span>
          </div>

          <h1 className="hero-el hero-el-2 text-4xl sm:text-5xl font-bold leading-[1.08] text-[#0f1e36] mb-5">
            Quanto stai perdendo{' '}
            <span className="text-gradient-navy">ogni settimana?</span>
          </h1>

          <p className="hero-el hero-el-3 text-lg text-[#324D7A]/60 max-w-[520px] mx-auto">
            Inserisci il costo di una guida e gli slot rimasti vuoti. Calcola in tempo reale il fatturato che ti sfugge.
          </p>
        </div>
      </section>

      <div className="section-line mx-auto max-w-[1280px] px-4" />

      {/* ── Calculator ── */}
      <section className="py-16 px-4 sm:px-6">
        <div
          ref={calcRef}
          className={`mx-auto max-w-[900px] reveal-fade ${calcVisible ? 'is-visible' : ''}`}
        >
          <div className="bg-white rounded-[28px] border border-[#324D7A]/10 shadow-[0_24px_80px_rgba(50,77,122,0.09),0_4px_16px_rgba(50,77,122,0.05)] overflow-hidden">

            {/* Top bar */}
            <div className="flex items-center gap-2 px-6 py-3.5 border-b border-[#324D7A]/6 bg-[#f8fafc]">
              <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <div className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-2 text-[11px] font-bold tracking-[0.12em] text-[#324D7A]/40 uppercase">Reglo · Calcolatore perdite</span>
            </div>

            <div className="grid lg:grid-cols-2">

              {/* ─ Left: inputs ─ */}
              <div className="p-7 sm:p-9 border-b lg:border-b-0 lg:border-r border-[#324D7A]/8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#324D7A]/45 mb-6">Parametri</p>

                <div className="space-y-6">
                  {/* Costo guida */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0f1e36] mb-2">
                      Costo guida
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center h-7 w-7 rounded-full bg-[#AFE2D4]/40">
                        <Euro className="h-3.5 w-3.5 text-[#324D7A]" />
                      </div>
                      <input
                        type="number"
                        min={0}
                        step="0.01"
                        value={formData.costoGuida}
                        onChange={handleNumericChange('costoGuida')}
                        className="w-full rounded-2xl border border-[#324D7A]/12 bg-[#f8fafc] py-3.5 pl-14 pr-4 text-sm font-medium text-[#0f1e36] focus:outline-none focus:ring-2 focus:ring-[#324D7A]/20 focus:border-[#324D7A]/30 transition-all"
                      />
                    </div>
                  </div>

                  {/* Slot liberi */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0f1e36] mb-2">
                      Slot liberi a settimana
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center h-7 w-7 rounded-full bg-[#AFE2D4]/40">
                        <CalendarX className="h-3.5 w-3.5 text-[#324D7A]" />
                      </div>
                      <input
                        type="number"
                        min={0}
                        step="0.5"
                        value={formData.slotLiberiSettimanali}
                        onChange={handleNumericChange('slotLiberiSettimanali')}
                        className="w-full rounded-2xl border border-[#324D7A]/12 bg-[#f8fafc] py-3.5 pl-14 pr-4 text-sm font-medium text-[#0f1e36] focus:outline-none focus:ring-2 focus:ring-[#324D7A]/20 focus:border-[#324D7A]/30 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Formula note */}
                <div className="mt-7 rounded-2xl bg-[#AFE2D4]/15 border border-[#AFE2D4]/40 p-4">
                  <p className="text-xs text-[#324D7A]/65 leading-relaxed">
                    <span className="font-semibold text-[#324D7A]">Formula:</span> costo guida × slot liberi × 4 settimane = perdita mensile. Perdita annuale = mensile × 12.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleCalculate}
                  className="btn-shimmer mt-7 w-full rounded-2xl bg-[#324D7A] py-3.5 text-sm font-bold text-white hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(50,77,122,0.3)] transition-all duration-200"
                >
                  Calcola le perdite
                </button>
              </div>

              {/* ─ Right: results ─ */}
              <div className="p-7 sm:p-9">
                {/* Period toggle */}
                <div className="flex items-center justify-between mb-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#324D7A]/45">Risultati</p>
                  <div className="flex items-center gap-2.5 bg-[#f8fafc] rounded-full border border-[#324D7A]/8 p-1 pr-3">
                    <button
                      type="button"
                      onClick={handleTogglePeriod}
                      className={`calculator-switch ${formData.periodo === 'annuale' ? 'is-annual' : ''}`}
                      aria-label="Cambia periodo tra mensile e annuale"
                    />
                    <span className="text-xs font-semibold text-[#0f1e36]">
                      {formData.periodo === 'mensile' ? 'Mensile' : 'Annuale'}
                    </span>
                  </div>
                </div>

                {/* Primary result */}
                <div className="rounded-2xl border border-[#324D7A]/8 bg-gradient-to-br from-[#f8fafc] to-white p-6 mb-4">
                  <div className="flex items-start justify-between mb-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#324D7A]/45">
                      Perdita {formData.periodo}
                    </p>
                    <div className="flex items-center justify-center h-7 w-7 rounded-full bg-red-50 border border-red-100">
                      <TrendingDown className="h-3.5 w-3.5 text-red-400" />
                    </div>
                  </div>
                  <p
                    className={`text-3xl sm:text-4xl font-bold ${hasCalculated ? 'stat-enter text-gradient-navy' : 'text-[#324D7A]/25'}`}
                    key={`${primaryLoss}-${formData.periodo}`}
                  >
                    {formatEuro(primaryLoss)}
                  </p>
                  {!hasCalculated && (
                    <p className="mt-1 text-xs text-[#324D7A]/35">Clicca "Calcola" per vedere il risultato</p>
                  )}
                </div>

                {/* 5-year result */}
                <div className="rounded-2xl border border-[#324D7A]/8 bg-gradient-to-br from-[#f8fafc] to-white p-6">
                  <div className="flex items-start justify-between mb-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#324D7A]/45">
                      Proiezione 5 anni
                    </p>
                    <span className="text-[10px] font-bold text-[#AFE2D4] bg-[#324D7A] px-2 py-0.5 rounded-full">5Y</span>
                  </div>
                  <p
                    className={`text-2xl sm:text-3xl font-bold ${hasCalculated ? 'stat-enter text-gradient-navy' : 'text-[#324D7A]/25'}`}
                    key={`5y-${result.cinqueAnni}`}
                  >
                    {formatEuro(result.cinqueAnni)}
                  </p>
                </div>

                {/* CTA */}
                <a
                  href={CAL_BOOKING_URL}
                  onClick={handleDemoCta}
                  className="btn-shimmer mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#324D7A] py-3.5 text-sm font-bold text-white hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(50,77,122,0.3)] transition-all duration-200"
                >
                  Recupera questi soldi con Reglo
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 px-4 sm:px-6 bg-[#f8fafc]">
        <div
          ref={ctaRef}
          className={`mx-auto max-w-[620px] text-center reveal-fade ${ctaVisible ? 'is-visible' : ''}`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#AFE2D4]/60 bg-[#AFE2D4]/20 px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold tracking-[0.15em] text-[#324D7A]/70 uppercase">Soluzione</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1e36] mb-4 leading-tight">
            Smetti di perdere fatturato.<br />
            <span className="text-gradient-navy">Reglo riempie i tuoi slot vuoti.</span>
          </h2>
          <p className="text-[#324D7A]/60 mb-8 text-base leading-relaxed">
            Il sistema di prenotazione automatico e di recupero lezioni riduce drasticamente il numero di ore perse ogni settimana.
          </p>
          <a
            href={CAL_BOOKING_URL}
            onClick={handleDemoCta}
            className="btn-shimmer inline-flex items-center gap-2.5 rounded-full bg-[#324D7A] px-8 py-4 text-base font-bold text-white hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(50,77,122,0.32)] transition-all duration-200"
          >
            Prenota una demo gratuita
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
