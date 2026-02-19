export type PeriodMode = 'mensile' | 'annuale';

export type AutoscuolaCalculatorInput = {
  costoGuida: number;
  slotLiberiSettimanali: number;
  periodo: PeriodMode;
};

export type AutoscuolaCalculatorResult = {
  mensile: number;
  annuale: number;
  cinqueAnni: number;
  conReglo: number;
};

export const DEFAULT_CALCULATOR_INPUT: AutoscuolaCalculatorInput = {
  costoGuida: 50,
  slotLiberiSettimanali: 10,
  periodo: 'mensile',
};

function normalizeNumber(value: number) {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, value);
}

export function calculateAutoscuolaLoss(
  input: AutoscuolaCalculatorInput
): AutoscuolaCalculatorResult {
  const costoGuida = normalizeNumber(input.costoGuida);
  const slotLiberiSettimanali = normalizeNumber(input.slotLiberiSettimanali);

  // Formula concordata: costo guida x slot liberi x 4 settimane.
  const perditaMensile = costoGuida * slotLiberiSettimanali * 4;
  const perditaAnnuale = perditaMensile * 12;

  return {
    mensile: perditaMensile,
    annuale: perditaAnnuale,
    cinqueAnni: perditaAnnuale * 5,
    conReglo: 0,
  };
}

export function formatEuro(value: number) {
  return new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}
