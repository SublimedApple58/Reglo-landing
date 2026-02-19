export type PeriodMode = 'mensile' | 'annuale';

export type AutoscuolaCalculatorInput = {
  costoGuida: number;
  costoIstruttore: number;
  slotLiberiSettimanali: number;
  periodo: PeriodMode;
};

export type AutoscuolaCalculatorResult = {
  mensile: number;
  annuale: number;
  cinqueAnni: number;
  conReglo: number;
  marginePerSlot: number;
};

export const DEFAULT_CALCULATOR_INPUT: AutoscuolaCalculatorInput = {
  costoGuida: 50,
  costoIstruttore: 20,
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
  const costoIstruttore = normalizeNumber(input.costoIstruttore);
  const slotLiberiSettimanali = normalizeNumber(input.slotLiberiSettimanali);

  // Formula concordata: (costo guida - costo istruttore) x slot liberi x 4 settimane x 12 mesi.
  const marginePerSlot = Math.max(0, costoGuida - costoIstruttore);
  const perditaMensile = marginePerSlot * slotLiberiSettimanali * 4;
  const perditaAnnuale = perditaMensile * 12;

  return {
    mensile: perditaMensile,
    annuale: perditaAnnuale,
    cinqueAnni: perditaAnnuale * 5,
    conReglo: 0,
    marginePerSlot,
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
