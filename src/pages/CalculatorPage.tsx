import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  calculateAutoscuolaLoss,
  DEFAULT_CALCULATOR_INPUT,
  formatEuro,
  type AutoscuolaCalculatorInput,
} from '../lib/calculator';

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
    <div className="min-h-screen py-16 sm:py-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl font-semibold text-[color:var(--color-ink)]">
          Calcolatore perdite autoscuola
        </h1>
        <p className="mt-2 text-sm sm:text-base text-[color:var(--color-ink-muted)]">
          Formula base: costo guida x slot liberi settimanali x 4 settimane.
        </p>

        <div className="calculator-shell mt-8 overflow-hidden">
          <div className="calculator-grid">
            <div className="calculator-left p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-[color:var(--color-ink-muted)] mb-2">
                    COSTO GUIDA
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-[color:var(--color-ink)]">
                      €
                    </span>
                    <input
                      type="number"
                      min={0}
                      step="0.01"
                      value={formData.costoGuida}
                      onChange={handleNumericChange('costoGuida')}
                      className="w-full rounded-xl border border-[color:var(--color-border)] bg-white/90 py-3 pl-11 pr-3 text-sm text-[color:var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-ink)]/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[color:var(--color-ink-muted)] mb-2">
                    SLOT LIBERI SETTIMANALI
                  </label>
                  <input
                    type="number"
                    min={0}
                    step="0.5"
                    value={formData.slotLiberiSettimanali}
                    onChange={handleNumericChange('slotLiberiSettimanali')}
                    className="w-full rounded-xl border border-[color:var(--color-border)] bg-white/90 py-3 px-3 text-sm text-[color:var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-ink)]/20"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={handleCalculate}
                className="interactive-lift mt-8 w-full sm:w-[260px] rounded-xl bg-[color:var(--color-ink)] py-3.5 text-base font-semibold text-white"
              >
                Calcola
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-end gap-3 sm:gap-4">
                <span
                  className={`text-xl sm:text-2xl font-semibold ${
                    formData.periodo === 'mensile'
                      ? 'text-[color:var(--color-ink)]'
                      : 'text-[color:var(--color-ink-muted)]'
                  }`}
                >
                  Mensile
                </span>
                <button
                  type="button"
                  onClick={handleTogglePeriod}
                  className={`calculator-switch ${formData.periodo === 'annuale' ? 'is-annual' : ''}`}
                  aria-label="Cambia periodo tra mensile e annuale"
                />
                <span
                  className={`text-xl sm:text-2xl font-semibold ${
                    formData.periodo === 'annuale'
                      ? 'text-[color:var(--color-ink)]'
                      : 'text-[color:var(--color-ink-muted)]'
                  }`}
                >
                  Annuale
                </span>
              </div>

              <div className="mt-8">
                <p className="text-xs font-medium text-[color:var(--color-ink-muted)]">RISULTATO</p>
                <div className="mt-3 rounded-2xl border border-[color:var(--color-border)] bg-white/85 p-5">
                  <p className="text-2xl sm:text-3xl font-semibold text-[color:var(--color-ink)]">
                    Soldi Persi: {formatEuro(primaryLoss)}
                  </p>
                </div>
              </div>

              <div className="my-6 border-t border-[color:var(--color-border)]/60" />

              <div>
                <p className="text-xs font-medium text-[color:var(--color-ink-muted)]">PROIEZIONE A 5 ANNI</p>
                <div className="mt-3 space-y-4">
                  <div className="rounded-2xl border border-[color:var(--color-border)] bg-white/85 p-5">
                    <p className="text-2xl sm:text-3xl font-semibold text-[color:var(--color-ink)]">
                      Soldi Persi: {formatEuro(result.cinqueAnni)}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[color:var(--color-border)] bg-white/85 p-5">
                    <p className="text-2xl sm:text-3xl font-semibold text-[color:var(--color-ink)]">
                      Soldi Persi *con Reglo: {formatEuro(result.conReglo)}
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/demo"
                onClick={handleDemoCta}
                className="interactive-lift mt-8 inline-flex w-full sm:w-[260px] items-center justify-center rounded-xl bg-[color:var(--color-ink)] py-3.5 text-base font-semibold text-white"
              >
                Prenota una DEMO
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
