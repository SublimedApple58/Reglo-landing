import { ChevronDown } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  calculateAutoscuolaLoss,
  DEFAULT_CALCULATOR_INPUT,
  formatEuro,
  NO_SHOW_OPTIONS,
  type AutoscuolaCalculatorInput,
  type NoShowLevel,
} from '../lib/calculator';

type NumericField =
  | 'costoGuida'
  | 'costoIstruttoreOra'
  | 'oreGuideGiornalierePerIstruttore'
  | 'slotLiberiSettimanali';

function trackCustom(eventName: string, payload: Record<string, unknown>) {
  const fbq = (window as Window & { fbq?: (...args: unknown[]) => void }).fbq;
  if (typeof fbq === 'function') {
    fbq('trackCustom', eventName, payload);
  }
}

type NoShowSelectProps = {
  value: NoShowLevel;
  options: Array<{ value: NoShowLevel; label: string }>;
  onChange: (value: NoShowLevel) => void;
};

function NoShowSelect({ value, options, onChange }: NoShowSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selected = options.find((option) => option.value === value);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-xl border border-[color:var(--color-border)] bg-white/90 py-3 px-3 text-sm text-[color:var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-ink)]/20"
      >
        <span>{selected?.label}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen ? (
        <div className="absolute z-20 mt-2 max-h-56 w-full overflow-auto rounded-xl border border-[color:var(--color-border)] bg-white p-1.5 shadow-soft">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`w-full rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                option.value === value
                  ? 'bg-[color:var(--color-accent-soft)] text-[color:var(--color-ink)]'
                  : 'text-[color:var(--color-ink-muted)] hover:bg-[color:var(--color-sand)]'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function CalculatorPage() {
  const [formData, setFormData] = useState<AutoscuolaCalculatorInput>(DEFAULT_CALCULATOR_INPUT);
  const [result, setResult] = useState(() => calculateAutoscuolaLoss(DEFAULT_CALCULATOR_INPUT));
  const [isFormulaOpen, setIsFormulaOpen] = useState(false);

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

  const handleNoShowChange = (value: NoShowLevel) => {
    setFormData((prev) => ({ ...prev, percentualeNoShow: value }));
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
      noShowLevel: formData.percentualeNoShow,
      slotLiberiSettimanali: formData.slotLiberiSettimanali,
      oreGuideGiornalierePerIstruttore: formData.oreGuideGiornalierePerIstruttore,
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
      <div className="max-w-[1440px] mx-auto px-6">
        <h1 className="text-2xl sm:text-3xl font-semibold text-[color:var(--color-ink)]">
          Calcolatore Reglo App Autoscuole
        </h1>

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
                    COSTO ISTRUTTORE (1 ORA)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-[color:var(--color-ink)]">
                      €
                    </span>
                    <input
                      type="number"
                      min={0}
                      step="0.01"
                      value={formData.costoIstruttoreOra}
                      onChange={handleNumericChange('costoIstruttoreOra')}
                      className="w-full rounded-xl border border-[color:var(--color-border)] bg-white/90 py-3 pl-11 pr-3 text-sm text-[color:var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-ink)]/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[color:var(--color-ink-muted)] mb-2">
                    ORE GUIDE GIORNALIERE PER ISTRUTTORE
                  </label>
                  <input
                    type="number"
                    min={0}
                    step="0.5"
                    value={formData.oreGuideGiornalierePerIstruttore}
                    onChange={handleNumericChange('oreGuideGiornalierePerIstruttore')}
                    className="w-full rounded-xl border border-[color:var(--color-border)] bg-white/90 py-3 px-3 text-sm text-[color:var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-ink)]/20"
                  />
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

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-[color:var(--color-ink-muted)] mb-2">
                    PERCENTUALE NO SHOW
                  </label>
                  <NoShowSelect
                    value={formData.percentualeNoShow}
                    options={NO_SHOW_OPTIONS}
                    onChange={handleNoShowChange}
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
                  <p className="mt-3 text-sm sm:text-base text-[color:var(--color-ink-muted)]">
                    Margine guida {formatEuro(result.margineGuida)} - no show stimato{' '}
                    {(result.noShowPercent * 100).toFixed(0)}%
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsFormulaOpen((prev) => !prev)}
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold underline text-[color:var(--color-ink)]"
                  >
                    Scopri come calcoliamo questo dato.
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${isFormulaOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isFormulaOpen ? (
                    <div className="mt-4 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-paper)] px-4 py-3 text-xs sm:text-sm text-[color:var(--color-ink-muted)]">
                      <p>Stima orientativa basata solo sui 5 parametri selezionati.</p>
                      <ul className="mt-2 space-y-1 list-disc pl-5">
                        <li>
                          Margine guida = costo guida - costo istruttore orario (minimo 0).
                        </li>
                        <li>
                          Slot persi per no show (settimanali) = ore guida giornaliere x 5 x % no show.
                        </li>
                        <li>
                          Slot persi totali = slot liberi settimanali + slot persi da no show.
                        </li>
                        <li>
                          Perdita mensile = margine guida x slot persi totali x 4.33 settimane.
                        </li>
                        <li>Annuale = mensile x 12. Proiezione 5 anni = annuale x 5.</li>
                      </ul>
                    </div>
                  ) : null}
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
