import { ChevronDown } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  calculateAutoscuolaLoss,
  DEFAULT_CALCULATOR_INPUT,
  formatEuro,
  INSTRUCTORS_BUCKET_OPTIONS,
  MANAGEMENT_OPTIONS,
  SLOT_BUCKET_OPTIONS,
  STUDENTS_BUCKET_OPTIONS,
  type AutoscuolaCalculatorInput,
  type InstructorsBucket,
  type ManagementMode,
  type SlotsBucket,
  type StudentsBucket,
} from '../lib/calculator';

type NumericField = 'costoGuida' | 'costoIstruttoreOra' | 'costoSegreteriaOra';

function trackCustom(eventName: string, payload: Record<string, unknown>) {
  const fbq = (window as Window & { fbq?: (...args: unknown[]) => void }).fbq;
  if (typeof fbq === 'function') {
    fbq('trackCustom', eventName, payload);
  }
}

export default function CalculatorPage() {
  const [formData, setFormData] = useState<AutoscuolaCalculatorInput>(DEFAULT_CALCULATOR_INPUT);
  const [result, setResult] = useState(() => calculateAutoscuolaLoss(DEFAULT_CALCULATOR_INPUT));
  const [isFormulaOpen, setIsFormulaOpen] = useState(false);

  const primaryLoss = useMemo(
    () => (formData.periodo === 'mensile' ? result.mensile : result.annuale),
    [formData.periodo, result.annuale, result.mensile]
  );

  const handleNumericChange = (field: NumericField) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = Number(event.target.value);
    setFormData((prev) => ({
      ...prev,
      [field]: Number.isFinite(nextValue) ? Math.max(0, nextValue) : 0,
    }));
  };

  const handleManagementChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, gestione: event.target.value as ManagementMode }));
  };

  const handleSlotsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, slotLiberiSettimanali: event.target.value as SlotsBucket }));
  };

  const handleStudentsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, allieviAttivi: event.target.value as StudentsBucket }));
  };

  const handleInstructorsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, istruttori: event.target.value as InstructorsBucket }));
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
      slotsBucket: formData.slotLiberiSettimanali,
      studentsBucket: formData.allieviAttivi,
      instructorsBucket: formData.istruttori,
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
        <h1 className="text-3xl sm:text-4xl font-semibold text-[color:var(--color-ink)]">
          Calcolatore Reglo App Autoscuole
        </h1>

        <div className="calculator-shell mt-8 overflow-hidden">
          <div className="calculator-grid">
            <div className="calculator-left p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-[color:var(--color-ink-muted)] mb-2">
                    COSTO GUIDA
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-[color:var(--color-ink)]">
                      €
                    </span>
                    <input
                      type="number"
                      min={0}
                      step="0.01"
                      value={formData.costoGuida}
                      onChange={handleNumericChange('costoGuida')}
                      className="w-full rounded-xl border border-[color:var(--color-border)] bg-white/90 py-3 pl-11 pr-3 text-base text-[color:var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-ink)]/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[color:var(--color-ink-muted)] mb-2">
                    GESTIONE
                  </label>
                  <select
                    value={formData.gestione}
                    onChange={handleManagementChange}
                    className="w-full rounded-xl border border-[color:var(--color-border)] bg-white/90 py-3 px-3 text-base text-[color:var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-ink)]/20"
                  >
                    {MANAGEMENT_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[color:var(--color-ink-muted)] mb-2">
                    COSTO ISTRUTTORE (1 ORA)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-[color:var(--color-ink)]">
                      €
                    </span>
                    <input
                      type="number"
                      min={0}
                      step="0.01"
                      value={formData.costoIstruttoreOra}
                      onChange={handleNumericChange('costoIstruttoreOra')}
                      className="w-full rounded-xl border border-[color:var(--color-border)] bg-white/90 py-3 pl-11 pr-3 text-base text-[color:var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-ink)]/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[color:var(--color-ink-muted)] mb-2">
                    COSTO SEGRETARIA (1 ORA)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-[color:var(--color-ink)]">
                      €
                    </span>
                    <input
                      type="number"
                      min={0}
                      step="0.01"
                      value={formData.costoSegreteriaOra}
                      onChange={handleNumericChange('costoSegreteriaOra')}
                      className="w-full rounded-xl border border-[color:var(--color-border)] bg-white/90 py-3 pl-11 pr-3 text-base text-[color:var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-ink)]/20"
                    />
                  </div>
                </div>
              </div>

              <div className="my-6 border-t border-[color:var(--color-border)]/60" />

              <div className="grid gap-6 sm:grid-cols-3">
                <fieldset>
                  <legend className="text-sm font-medium text-[color:var(--color-ink-muted)]">
                    SLOT LIBERI SETTIMANALI
                  </legend>
                  <div className="mt-3 space-y-3">
                    {SLOT_BUCKET_OPTIONS.map((slot) => (
                      <label key={slot} className="flex items-center gap-3 text-[color:var(--color-ink)]">
                        <input
                          type="radio"
                          name="slotLiberiSettimanali"
                          value={slot}
                          checked={formData.slotLiberiSettimanali === slot}
                          onChange={handleSlotsChange}
                          className="h-4 w-4 accent-[color:var(--color-ink)]"
                        />
                        <span className="text-base">{slot}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="text-sm font-medium text-[color:var(--color-ink-muted)]">
                    ALLIEVI ATTIVI
                  </legend>
                  <div className="mt-3 space-y-3">
                    {STUDENTS_BUCKET_OPTIONS.map((bucket) => (
                      <label key={bucket} className="flex items-center gap-3 text-[color:var(--color-ink)]">
                        <input
                          type="radio"
                          name="allieviAttivi"
                          value={bucket}
                          checked={formData.allieviAttivi === bucket}
                          onChange={handleStudentsChange}
                          className="h-4 w-4 accent-[color:var(--color-ink)]"
                        />
                        <span className="text-base">{bucket}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="text-sm font-medium text-[color:var(--color-ink-muted)]">
                    ISTRUTTORI
                  </legend>
                  <div className="mt-3 space-y-3">
                    {INSTRUCTORS_BUCKET_OPTIONS.map((bucket) => (
                      <label key={bucket} className="flex items-center gap-3 text-[color:var(--color-ink)]">
                        <input
                          type="radio"
                          name="istruttori"
                          value={bucket}
                          checked={formData.istruttori === bucket}
                          onChange={handleInstructorsChange}
                          className="h-4 w-4 accent-[color:var(--color-ink)]"
                        />
                        <span className="text-base">{bucket}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>

              <button
                type="button"
                onClick={handleCalculate}
                className="interactive-lift mt-8 w-full sm:w-[280px] rounded-xl bg-[color:var(--color-ink)] py-4 text-lg font-semibold text-white"
              >
                Calcola
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-end gap-3 sm:gap-4">
                <span className={`text-3xl font-semibold ${formData.periodo === 'mensile' ? 'text-[color:var(--color-ink)]' : 'text-[color:var(--color-ink-muted)]'}`}>
                  Mensile
                </span>
                <button
                  type="button"
                  onClick={handleTogglePeriod}
                  className={`calculator-switch ${formData.periodo === 'annuale' ? 'is-annual' : ''}`}
                  aria-label="Cambia periodo tra mensile e annuale"
                />
                <span className={`text-3xl font-semibold ${formData.periodo === 'annuale' ? 'text-[color:var(--color-ink)]' : 'text-[color:var(--color-ink-muted)]'}`}>
                  Annuale
                </span>
              </div>

              <div className="mt-8">
                <p className="text-sm font-medium text-[color:var(--color-ink-muted)]">RISULTATO</p>
                <div className="mt-3 rounded-2xl border border-[color:var(--color-border)] bg-white/85 p-5">
                  <p className="text-4xl sm:text-5xl font-semibold text-[color:var(--color-ink)]">
                    Soldi Persi: {formatEuro(primaryLoss)}
                  </p>
                  <p className="mt-3 text-lg text-[color:var(--color-ink-muted)]">
                    Margine Guida {formatEuro(result.margineGuida)} + 35% del tempo giornaliero in azioni ripetitive
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsFormulaOpen((prev) => !prev)}
                    className="mt-3 inline-flex items-center gap-2 text-base font-semibold underline text-[color:var(--color-ink)]"
                  >
                    Scopri come calcoliamo questo dato.
                    <ChevronDown className={`h-4 w-4 transition-transform ${isFormulaOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isFormulaOpen ? (
                    <div className="mt-4 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-paper)] px-4 py-3 text-sm text-[color:var(--color-ink-muted)]">
                      <p>
                        Stima orientativa basata su margine guida, slot persi settimanali e tempo operativo
                        assorbito da gestione manuale.
                      </p>
                      <ul className="mt-2 space-y-1 list-disc pl-5">
                        <li>Perdita slot mensile = margine guida x slot persi x 4.33 settimane.</li>
                        <li>Perdita gestione mensile = costo orario operativo x 8.5 x 22 x 35% x fattori.</li>
                        <li>Annuale = mensile x 12, proiezione 5 anni = annuale x 5.</li>
                      </ul>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="my-6 border-t border-[color:var(--color-border)]/60" />

              <div>
                <p className="text-sm font-medium text-[color:var(--color-ink-muted)]">PROIEZIONE A 5 ANNI</p>
                <div className="mt-3 space-y-4">
                  <div className="rounded-2xl border border-[color:var(--color-border)] bg-white/85 p-5">
                    <p className="text-4xl sm:text-5xl font-semibold text-[color:var(--color-ink)]">
                      Soldi Persi: {formatEuro(result.cinqueAnni)}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[color:var(--color-border)] bg-white/85 p-5">
                    <p className="text-4xl sm:text-5xl font-semibold text-[color:var(--color-ink)]">
                      Soldi Persi *con Reglo: {formatEuro(result.conReglo)}
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/demo"
                onClick={handleDemoCta}
                className="interactive-lift mt-8 inline-flex w-full sm:w-[280px] items-center justify-center rounded-xl bg-[color:var(--color-ink)] py-4 text-lg font-semibold text-white"
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
