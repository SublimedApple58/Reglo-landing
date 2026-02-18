export type PeriodMode = 'mensile' | 'annuale';
export type ManagementMode = 'manuale' | 'agenda' | 'agenda_telefono' | 'digitale_parziale';
export type SlotsBucket = '0-5' | '5-10' | '10-15' | '+20';
export type StudentsBucket = '10-50' | '50-100' | '100-200' | '+250';
export type InstructorsBucket = '1' | '2-5' | '5-15' | '+20';

export type AutoscuolaCalculatorInput = {
  costoGuida: number;
  costoIstruttoreOra: number;
  costoSegreteriaOra: number;
  gestione: ManagementMode;
  slotLiberiSettimanali: SlotsBucket;
  allieviAttivi: StudentsBucket;
  istruttori: InstructorsBucket;
  periodo: PeriodMode;
};

export type AutoscuolaCalculatorResult = {
  mensile: number;
  annuale: number;
  cinqueAnni: number;
  conReglo: number;
  margineGuida: number;
};

export const MANAGEMENT_OPTIONS: Array<{ value: ManagementMode; label: string }> = [
  { value: 'manuale', label: '1. Manuale' },
  { value: 'agenda', label: '2. Agenda cartacea' },
  { value: 'agenda_telefono', label: '3. Agenda + Telefono' },
  { value: 'digitale_parziale', label: '4. Digitale parziale' },
];

export const SLOT_BUCKET_OPTIONS: SlotsBucket[] = ['0-5', '5-10', '10-15', '+20'];
export const STUDENTS_BUCKET_OPTIONS: StudentsBucket[] = ['10-50', '50-100', '100-200', '+250'];
export const INSTRUCTORS_BUCKET_OPTIONS: InstructorsBucket[] = ['1', '2-5', '5-15', '+20'];

export const DEFAULT_CALCULATOR_INPUT: AutoscuolaCalculatorInput = {
  costoGuida: 50,
  costoIstruttoreOra: 20,
  costoSegreteriaOra: 10,
  gestione: 'agenda_telefono',
  slotLiberiSettimanali: '10-15',
  allieviAttivi: '50-100',
  istruttori: '+20',
  periodo: 'mensile',
};

const SLOT_BUCKET_VALUES: Record<SlotsBucket, number> = {
  '0-5': 2.5,
  '5-10': 7.5,
  '10-15': 12.5,
  '+20': 20,
};

const STUDENTS_FACTORS: Record<StudentsBucket, number> = {
  '10-50': 0.85,
  '50-100': 1.0,
  '100-200': 1.12,
  '+250': 1.25,
};

const INSTRUCTORS_FACTORS: Record<InstructorsBucket, number> = {
  '1': 0.85,
  '2-5': 0.95,
  '5-15': 1.07,
  '+20': 1.18,
};

const MANAGEMENT_FACTORS: Record<ManagementMode, number> = {
  manuale: 1.25,
  agenda: 1.12,
  agenda_telefono: 1.0,
  digitale_parziale: 0.86,
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
  const costoSegreteriaOra = normalizeNumber(input.costoSegreteriaOra);
  const slotPersiSettimanali = SLOT_BUCKET_VALUES[input.slotLiberiSettimanali];
  const fattoreAllievi = STUDENTS_FACTORS[input.allieviAttivi];
  const fattoreIstruttori = INSTRUCTORS_FACTORS[input.istruttori];
  const fattoreGestione = MANAGEMENT_FACTORS[input.gestione];

  const margineGuida = Math.max(0, costoGuida - costoIstruttoreOra - costoSegreteriaOra);
  const perditaSlotMensile = margineGuida * slotPersiSettimanali * 4.33;
  const costoOperativoOrario = costoSegreteriaOra + (costoIstruttoreOra * 0.65);
  const perditaGestioneMensile =
    costoOperativoOrario * 8.5 * 22 * 0.35 * fattoreGestione * fattoreAllievi * fattoreIstruttori;
  const perditaMensile = perditaSlotMensile + perditaGestioneMensile;
  const perditaAnnuale = perditaMensile * 12;
  const perditaCinqueAnni = perditaAnnuale * 5;

  return {
    mensile: perditaMensile,
    annuale: perditaAnnuale,
    cinqueAnni: perditaCinqueAnni,
    conReglo: 0,
    margineGuida,
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
