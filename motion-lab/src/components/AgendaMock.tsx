import { interpolate } from 'remotion';
import { colors, fontFamily } from '../brand';
import { clamp01, type Point } from './geometry';

/** Geometria dell'agenda: esportata cosi' frecce e overlay sanno dove puntare. */
export const AGENDA = {
  width: 880,
  pad: 28,
  headerH: 64,
  dayHeadH: 40,
  timeColW: 64,
  cols: 5,
  rows: 5,
  rowH: 88,
  inset: 5,
} as const;

export const COL_W = (AGENDA.width - AGENDA.pad * 2 - AGENDA.timeColW) / AGENDA.cols;
export const AGENDA_H =
  AGENDA.pad * 2 + AGENDA.headerH + AGENDA.dayHeadH + AGENDA.rows * AGENDA.rowH;

export const DAYS = ['Lun 15', 'Mar 16', 'Mer 17', 'Gio 18', 'Ven 19'];
export const HOURS = ['08:00', '09:00', '10:00', '11:00', '12:00'];

export type Cell = { col: number; row: number };

/** Rettangolo della cella, relativo all'angolo in alto a sinistra dell'agenda. */
export const cellRect = ({ col, row }: Cell) => {
  const x = AGENDA.pad + AGENDA.timeColW + col * COL_W + AGENDA.inset;
  const y = AGENDA.pad + AGENDA.headerH + AGENDA.dayHeadH + row * AGENDA.rowH + AGENDA.inset;
  return { x, y, w: COL_W - AGENDA.inset * 2, h: AGENDA.rowH - AGENDA.inset * 2 };
};

/** Punto di una cella in coordinate di scena, dato l'origine dell'agenda. */
export const cellPoint = (origin: Point, cell: Cell, fx = 0.5, fy = 0.5): Point => {
  const r = cellRect(cell);
  return { x: origin.x + r.x + r.w * fx, y: origin.y + r.y + r.h * fy };
};

export type Booking = Cell & {
  name: string;
  detail?: string;
  tone: 'muted' | 'primary';
  /** 0..1 (spring): entrata */
  enter: number;
  /** 0..1: uscita */
  exit?: number;
  /** 0..1: badge di conferma verde */
  check?: number;
};

export type Focus = Cell & {
  /** 0..1: quanto e' "acceso" l'invito a guardare lo slot libero */
  pulse: number;
  /** fase del battito, in frame (gira da sola) */
  frame: number;
  /** 0..1: alone verde di successo */
  glow?: number;
};

const BookingCard: React.FC<{ b: Booking }> = ({ b }) => {
  const r = cellRect(b);
  const exit = clamp01(b.exit ?? 0);
  const vis = clamp01(b.enter) * (1 - exit);
  if (vis <= 0.001) return null;
  const primary = b.tone === 'primary';
  const scale =
    interpolate(b.enter, [0, 1], [0.82, 1], { extrapolateRight: 'extend' }) *
    interpolate(exit, [0, 1], [1, 0.88]);
  const check = clamp01(b.check ?? 0);

  return (
    <div
      style={{
        position: 'absolute',
        left: r.x,
        top: r.y,
        width: r.w,
        height: r.h,
        borderRadius: 14,
        background: primary ? colors.ink : colors.cardMuted,
        color: primary ? colors.white : colors.inkSoft,
        padding: '14px 14px',
        boxSizing: 'border-box',
        opacity: vis,
        transform: `scale(${scale})`,
        boxShadow: primary ? '0 10px 24px rgba(27,27,31,0.22)' : 'none',
      }}
    >
      <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: -0.2 }}>{b.name}</div>
      <div
        style={{
          fontSize: 13,
          fontWeight: 500,
          marginTop: 4,
          color: primary ? 'rgba(255,255,255,0.62)' : colors.grey600,
        }}
      >
        {b.detail ?? 'Guida · B'}
      </div>
      {check > 0 ? (
        <div
          style={{
            position: 'absolute',
            right: 10,
            top: 10,
            width: 24,
            height: 24,
            borderRadius: 12,
            background: colors.success,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: `scale(${check})`,
            boxShadow: '0 0 0 3px rgba(255,255,255,0.14)',
          }}
        >
          <svg width="13" height="13" viewBox="0 0 14 14">
            <path
              d="M2.5 7.4 L5.6 10.3 L11.5 3.9"
              fill="none"
              stroke="#fff"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="14"
              strokeDashoffset={14 * (1 - clamp01((check - 0.4) / 0.6))}
            />
          </svg>
        </div>
      ) : null}
    </div>
  );
};

const FocusSlot: React.FC<{ f: Focus }> = ({ f }) => {
  const r = cellRect(f);
  // battito: ~1.1 s, sempre deterministico perche' guidato dal frame
  const beat = (f.frame % 34) / 34;
  const ring = f.pulse * (1 - beat);
  const glow = clamp01(f.glow ?? 0);
  return (
    <>
      <div
        style={{
          position: 'absolute',
          left: r.x,
          top: r.y,
          width: r.w,
          height: r.h,
          borderRadius: 14,
          border: `2px dashed ${f.pulse > 0.05 ? colors.ink : colors.grey300}`,
          background: `rgba(27,27,31,${0.035 + 0.05 * f.pulse * (0.5 + 0.5 * Math.cos(beat * Math.PI * 2))})`,
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 14,
          fontWeight: 600,
          color: colors.grey600,
          opacity: interpolate(f.pulse, [0, 1], [0.7, 1]),
        }}
      >
        Slot libero
      </div>
      {ring > 0.01 ? (
        <div
          style={{
            position: 'absolute',
            left: r.x,
            top: r.y,
            width: r.w,
            height: r.h,
            borderRadius: 16,
            border: `2px solid ${colors.ink}`,
            transform: `scale(${1 + beat * 0.22})`,
            opacity: ring * 0.55,
          }}
        />
      ) : null}
      {glow > 0 ? (
        <div
          style={{
            position: 'absolute',
            left: r.x,
            top: r.y,
            width: r.w,
            height: r.h,
            borderRadius: 16,
            boxShadow: `0 0 0 ${3 + glow * 10}px rgba(63,138,100,${0.35 * (1 - glow)})`,
            zIndex: 3,
          }}
        />
      ) : null}
    </>
  );
};

export type AgendaMockProps = {
  bookings: Booking[];
  focus?: Focus;
  title?: string;
  week?: string;
};

/**
 * Agenda settimanale stilizzata, nello stile delle card del sito:
 * bianco, bordo #ececf0, ombra morbida, Figtree.
 */
export const AgendaMock: React.FC<AgendaMockProps> = ({
  bookings,
  focus,
  title = 'Agenda · Marco R.',
  week = '15 – 19 settembre',
}) => {
  const gridTop = AGENDA.pad + AGENDA.headerH + AGENDA.dayHeadH;
  return (
    <div
      style={{
        position: 'relative',
        width: AGENDA.width,
        height: AGENDA_H,
        background: colors.white,
        borderRadius: 26,
        border: `1.5px solid ${colors.line}`,
        boxShadow: '0 30px 80px rgba(20,20,30,0.10), 0 2px 6px rgba(20,20,30,0.04)',
        fontFamily,
        overflow: 'hidden',
      }}
    >
      {/* header */}
      <div
        style={{
          position: 'absolute',
          left: AGENDA.pad,
          right: AGENDA.pad,
          top: AGENDA.pad,
          height: AGENDA.headerH - 16,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: -0.6, color: colors.black }}>
          {title}
        </div>
        <div
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: colors.grey500,
            padding: '8px 14px',
            borderRadius: 12,
            border: `1.5px solid ${colors.line}`,
          }}
        >
          {week}
        </div>
      </div>

      {/* giorni */}
      {DAYS.map((d, i) => (
        <div
          key={d}
          style={{
            position: 'absolute',
            left: AGENDA.pad + AGENDA.timeColW + i * COL_W,
            width: COL_W,
            top: AGENDA.pad + AGENDA.headerH,
            height: AGENDA.dayHeadH,
            textAlign: 'center',
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: 0.2,
            color: colors.grey500,
          }}
        >
          {d}
        </div>
      ))}

      {/* ore + righe */}
      {HOURS.map((h, i) => (
        <div key={h}>
          <div
            style={{
              position: 'absolute',
              left: AGENDA.pad,
              top: gridTop + i * AGENDA.rowH + 8,
              fontSize: 13,
              fontWeight: 600,
              color: colors.grey600,
            }}
          >
            {h}
          </div>
          <div
            style={{
              position: 'absolute',
              left: AGENDA.pad + AGENDA.timeColW,
              right: AGENDA.pad,
              top: gridTop + i * AGENDA.rowH,
              height: 1,
              background: colors.line,
            }}
          />
        </div>
      ))}

      {focus ? <FocusSlot f={focus} /> : null}
      {bookings.map((b) => (
        <BookingCard key={`${b.col}-${b.row}-${b.name}`} b={b} />
      ))}
    </div>
  );
};
