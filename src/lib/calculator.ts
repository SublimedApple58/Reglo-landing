export type PeriodMode = 'mensile' | 'annuale';
export type OperationalComplexity = 'bassa' | 'media' | 'alta';

export type AutoscuolaCalculatorInput = {
  prezzoMedioGuida: number;
  costoIstruttoreOra: number;
  costoSegreteriaOra: number;
  slotPersiSettimanali: number;
  oreGestioneManualeGiornaliere: number;
  complessitaCalendario: OperationalComplexity;
  periodo: PeriodMode;
};

export type AutoscuolaCalculatorResult = {
  mensile: number;
  annuale: number;
  cinqueAnni: number;
  conReglo: number;
  margineGuida: number;
  fattoreComplessita: number;
  perditaSlotMensile: number;
  perditaGestioneMensile: number;
};

export const COMPLEXITY_OPTIONS: Array<{ value: OperationalComplexity; label: string }> = [
  { value: 'bassa', label: 'Bassa' },
  { value: 'media', label: 'Media' },
  { value: 'alta', label: 'Alta' },
];

export const DEFAULT_CALCULATOR_INPUT: AutoscuolaCalculatorInput = {
  prezzoMedioGuida: 50,
  costoIstruttoreOra: 20,
  costoSegreteriaOra: 14,
  slotPersiSettimanali: 10,
  oreGestioneManualeGiornaliere: 2.5,
  complessitaCalendario: 'media',
  periodo: 'mensile',
};

const COMPLEXITY_FACTORS: Record<OperationalComplexity, number> = {
  bassa: 0.85,
  media: 1,
  alta: 1.2,
};

function normalizeNumber(value: number) {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, value);
}

export function calculateAutoscuolaLoss(
  input: AutoscuolaCalculatorInput
): AutoscuolaCalculatorResult {
  const prezzoMedioGuida = normalizeNumber(input.prezzoMedioGuida);
  const costoIstruttoreOra = normalizeNumber(input.costoIstruttoreOra);
  const costoSegreteriaOra = normalizeNumber(input.costoSegreteriaOra);
  const slotPersiSettimanali = normalizeNumber(input.slotPersiSettimanali);
  const oreGestioneManualeGiornaliere = normalizeNumber(input.oreGestioneManualeGiornaliere);
  const fattoreComplessita = COMPLEXITY_FACTORS[input.complessitaCalendario];

  const margineGuida = Math.max(0, prezzoMedioGuida - costoIstruttoreOra);

  const perditaSlotMensile = margineGuida * slotPersiSettimanali * 4.33;

  const costoSegreteriaMensile = costoSegreteriaOra * oreGestioneManualeGiornaliere * 22;
  const costoCoordIstruttoriMensile =
    costoIstruttoreOra * (oreGestioneManualeGiornaliere * 0.45) * 22;

  const perditaGestioneMensile =
    (costoSegreteriaMensile + costoCoordIstruttoriMensile) * fattoreComplessita;

  const perditaMensile = perditaSlotMensile + perditaGestioneMensile;
  const perditaAnnuale = perditaMensile * 12;
  const perditaCinqueAnni = perditaAnnuale * 5;

  return {
    mensile: perditaMensile,
    annuale: perditaAnnuale,
    cinqueAnni: perditaCinqueAnni,
    conReglo: 0,
    margineGuida,
    fattoreComplessita,
    perditaSlotMensile,
    perditaGestioneMensile,
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
