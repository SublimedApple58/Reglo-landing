export type PeriodMode = 'mensile' | 'annuale';
export type NoShowLevel = 'bassa' | 'media' | 'alta';

export type AutoscuolaCalculatorInput = {
  costoGuida: number;
  costoIstruttoreOra: number;
  oreGuideGiornalierePerIstruttore: number;
  slotLiberiSettimanali: number;
  percentualeNoShow: NoShowLevel;
  periodo: PeriodMode;
};

export type AutoscuolaCalculatorResult = {
  mensile: number;
  annuale: number;
  cinqueAnni: number;
  conReglo: number;
  margineGuida: number;
  noShowPercent: number;
  slotNoShowSettimanali: number;
  slotTotaliPersiSettimanali: number;
};

export const NO_SHOW_OPTIONS: Array<{ value: NoShowLevel; label: string }> = [
  { value: 'bassa', label: 'Bassa (8%)' },
  { value: 'media', label: 'Media (15%)' },
  { value: 'alta', label: 'Alta (25%)' },
];

export const DEFAULT_CALCULATOR_INPUT: AutoscuolaCalculatorInput = {
  costoGuida: 50,
  costoIstruttoreOra: 20,
  oreGuideGiornalierePerIstruttore: 6,
  slotLiberiSettimanali: 12.5,
  percentualeNoShow: 'media',
  periodo: 'mensile',
};

const NO_SHOW_RATES: Record<NoShowLevel, number> = {
  bassa: 0.08,
  media: 0.15,
  alta: 0.25,
};

function normalizeNumber(value: number) {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, value);
}

export function calculateAutoscuolaLoss(
  input: AutoscuolaCalculatorInput
): AutoscuolaCalculatorResult {
  const costoGuida = normalizeNumber(input.costoGuida);
  const costoIstruttoreOra = normalizeNumber(input.costoIstruttoreOra);
  const oreGuideGiornalierePerIstruttore = normalizeNumber(input.oreGuideGiornalierePerIstruttore);
  const slotLiberiSettimanali = normalizeNumber(input.slotLiberiSettimanali);
  const noShowPercent = NO_SHOW_RATES[input.percentualeNoShow];

  const margineGuida = Math.max(0, costoGuida - costoIstruttoreOra);
  const slotNoShowSettimanali = oreGuideGiornalierePerIstruttore * 5 * noShowPercent;
  const slotTotaliPersiSettimanali = slotLiberiSettimanali + slotNoShowSettimanali;

  const perditaMensile = margineGuida * slotTotaliPersiSettimanali * 4.33;
  const perditaAnnuale = perditaMensile * 12;
  const perditaCinqueAnni = perditaAnnuale * 5;

  return {
    mensile: perditaMensile,
    annuale: perditaAnnuale,
    cinqueAnni: perditaCinqueAnni,
    conReglo: 0,
    margineGuida,
    noShowPercent,
    slotNoShowSettimanali,
    slotTotaliPersiSettimanali,
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
