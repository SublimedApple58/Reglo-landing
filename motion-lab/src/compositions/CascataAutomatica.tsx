import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  type SpringConfig,
} from 'remotion';
import { colors, fontFamily } from '../brand';
import { AgendaMock, cellPoint, AGENDA, AGENDA_H, type Booking, type Cell } from '../components/AgendaMock';
import { PhoneMock, LockScreen, PHONE } from '../components/PhoneMock';
import { Notification } from '../components/Notification';
import { TapRipple } from '../components/TapRipple';
import { CurvedArrow } from '../components/CurvedArrow';
import { AppBookingScreen, CANCEL_BUTTON } from '../components/AppBookingScreen';
import type { Point } from '../components/geometry';

export const CASCATA_DURATION_S = 16.5;

/* ------------------------------------------------------------------ scena */

const W = 1920;
const AGENDA_ORIGIN: Point = { x: 100, y: 240 };
const AGENDA_FINAL: Point = { x: (W - AGENDA.width) / 2, y: 140 };

/** Lo slot protagonista: venerdi' alle 10. */
const SLOT: Cell = { col: 4, row: 2 };
/** Buchi che si riempiono da soli in chiusura. */
const LATE_FILLS: (Cell & { name: string })[] = [
  { col: 2, row: 0, name: 'Irene C.' },
  { col: 3, row: 3, name: 'Tommaso V.' },
  { col: 1, row: 4, name: 'Chiara D.' },
];

const NAMES = [
  'Sara M.', 'Luca P.', 'Anna R.', 'Marco T.', 'Elena F.', 'Davide S.', 'Giorgia L.',
  'Paolo N.', 'Marta G.', 'Andrea B.', 'Sofia C.', 'Pietro A.', 'Alice V.', 'Matteo R.',
  'Noemi P.', 'Filippo D.', 'Bianca S.', 'Nicolò F.', 'Aurora M.', 'Samuele T.', 'Emma L.',
];

const isFree = (c: Cell) =>
  (c.col === SLOT.col && c.row === SLOT.row) ||
  LATE_FILLS.some((f) => f.col === c.col && f.row === c.row);

const BASE_CELLS: (Cell & { name: string })[] = (() => {
  const out: (Cell & { name: string })[] = [];
  let n = 0;
  for (let row = 0; row < AGENDA.rows; row++) {
    for (let col = 0; col < AGENDA.cols; col++) {
      if (!isFree({ col, row })) out.push({ col, row, name: NAMES[n++ % NAMES.length] });
    }
  }
  return out;
})();

/** Telefoni della lista d'attesa (scena 3): distribuiti con un ritmo sfalsato. */
const WAITLIST = [
  { x: 1060, y: 372 },
  { x: 1262, y: 290 },
  { x: 1464, y: 346 },
  { x: 1666, y: 258 },
];
const WL_SCALE = 0.62;
const WINNER = 1;

const PHONE_A: Point = { x: 1370, y: 210 };

/* -------------------------------------------------------------- caption */

const Caption: React.FC<{ n: string; text: string; enter: number; exit: number }> = ({
  n,
  text,
  enter,
  exit,
}) => {
  const o = enter * (1 - exit);
  if (o <= 0.001) return null;
  return (
    <div
      style={{
        position: 'absolute',
        left: AGENDA_ORIGIN.x,
        top: 150,
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        opacity: o,
        transform: `translateY(${(1 - enter) * 14 - exit * 10}px)`,
        fontFamily,
      }}
    >
      <span
        style={{
          width: 34,
          height: 34,
          borderRadius: 17,
          background: colors.ink,
          color: colors.white,
          fontSize: 14,
          fontWeight: 800,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {n}
      </span>
      <span style={{ fontSize: 26, fontWeight: 700, letterSpacing: -0.6, color: colors.ink }}>
        {text}
      </span>
    </div>
  );
};

/* ---------------------------------------------------------- composition */

export const CascataAutomatica: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const f = (sec: number) => Math.round(sec * fps);
  const SMOOTH: Partial<SpringConfig> = { damping: 200 };
  const SNAPPY: Partial<SpringConfig> = { damping: 18, stiffness: 180 };
  const POP: Partial<SpringConfig> = { damping: 13, stiffness: 170 };
  const sp = (sec: number, config: Partial<SpringConfig> = SMOOTH) =>
    spring({ frame: frame - f(sec), fps, config });
  const lin = (a: number, b: number, easing = Easing.inOut(Easing.cubic)) =>
    interpolate(frame, [f(a), f(b)], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing,
    });
  /** freccia che vola: testa in 0.7 s, coda che la insegue e la raggiunge */
  const flight = (t: number) => ({
    head: lin(t, t + 0.7, Easing.inOut(Easing.cubic)),
    tail: lin(t + 0.32, t + 0.98, Easing.in(Easing.cubic)),
  });
  const bump = (a: number, peak: number, b: number) =>
    interpolate(frame, [f(a), f(peak), f(b)], [0, 1, 0], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });

  /* -------------------------------------------------------- chiusura */
  const glide = lin(13.0, 14.2);
  const origin: Point = {
    x: interpolate(glide, [0, 1], [AGENDA_ORIGIN.x, AGENDA_FINAL.x]),
    y: interpolate(glide, [0, 1], [AGENDA_ORIGIN.y, AGENDA_FINAL.y]),
  };
  const camera = 1 - 0.035 * glide;

  /* ---------------------------------------------------------- agenda */
  const agendaIn = sp(0);
  const bookings: Booking[] = BASE_CELLS.map((c, i) => ({
    ...c,
    tone: 'muted',
    enter: sp(0.2 + i * 0.018, SMOOTH),
  }));
  // scena 1: Giulia prende lo slot / scena 2: lo lascia
  bookings.push({
    ...SLOT,
    name: 'Giulia R.',
    detail: 'Guida · 10:00',
    tone: 'primary',
    enter: sp(4.5, POP),
    exit: lin(7.5, 7.9),
  });
  // scena 3: dalla lista d'attesa arriva Luca
  bookings.push({
    ...SLOT,
    name: 'Luca B.',
    detail: 'Dalla lista d’attesa',
    tone: 'primary',
    enter: sp(12.1, POP),
    check: sp(12.4, { damping: 14, stiffness: 160 }),
  });
  LATE_FILLS.forEach((c, i) =>
    bookings.push({ ...c, tone: 'muted', enter: sp(13.9 + i * 0.22, POP) }),
  );

  const pulse =
    lin(1.0, 1.3) * (1 - lin(4.35, 4.5)) + lin(7.85, 8.15) * (1 - lin(12.0, 12.15));
  const glow = lin(12.15, 13.0, Easing.out(Easing.cubic));

  // punti di aggancio delle frecce (sempre nell'origine delle scene 1-3)
  const slotTop = cellPoint(AGENDA_ORIGIN, SLOT, 0.62, 0.02);
  const slotRight = cellPoint(AGENDA_ORIGIN, SLOT, 0.98, 0.55);
  const slotBottom = cellPoint(AGENDA_ORIGIN, SLOT, 0.7, 0.98);

  /* ---------------------------------------------------- scena 1 e 2 */
  const phoneAIn = sp(0.35);
  const phoneAOut = lin(8.0, 8.6);
  const toApp = lin(5.45, 6.0);
  const notif1 = {
    enter: sp(2.45, SNAPPY),
    press: bump(3.4, 3.55, 3.8),
    exit: lin(3.75, 4.05),
  };
  const booked1 = { enter: sp(4.15, SNAPPY), exit: lin(5.15, 5.45) };
  const arrow1 = flight(1.7);
  const arrowBack1 = flight(3.8);
  const arrowCancel = flight(6.85);
  const cancel = lin(6.85, 7.4);
  const cancelPress = bump(6.5, 6.65, 6.9);

  const phoneATop: Point = { x: PHONE_A.x + PHONE.w * 0.52, y: PHONE_A.y - 10 };
  const phoneALeftMid: Point = { x: PHONE_A.x - 8, y: PHONE_A.y + 230 };
  const phoneACancel: Point = { x: PHONE_A.x - 8, y: PHONE_A.y + PHONE.bezel + CANCEL_BUTTON.y };

  /* ---------------------------------------------------------- scena 3 */
  const wl = WAITLIST.map((p, i) => {
    const enter = sp(8.45 + i * 0.1);
    const isWinner = i === WINNER;
    const lift = isWinner ? sp(11.2) : 0;
    const scale = WL_SCALE + 0.07 * lift;
    const cx = p.x + (PHONE.w * WL_SCALE) / 2;
    const cy = p.y + (PHONE.h * WL_SCALE) / 2;
    const dim = isWinner ? 0 : lin(11.3, 11.85);
    const out = lin(12.9 + i * 0.06, 13.5 + i * 0.06);
    return {
      i,
      enter,
      lift,
      scale,
      x: cx - (PHONE.w * scale) / 2 + out * 80,
      y: cy - (PHONE.h * scale) / 2 + (1 - enter) * 70,
      opacity: enter * (1 - 0.62 * dim) * (1 - out),
      notif: {
        enter: sp(9.95 + i * 0.16, SNAPPY),
        press: isWinner ? bump(11.15, 11.3, 11.5) : 0,
        exit: isWinner ? lin(11.5, 11.8) : lin(11.3, 11.7),
      },
      booked: isWinner ? { enter: sp(11.8, SNAPPY), exit: 0 } : null,
      arrow: flight(9.3 + i * 0.16),
      top: { x: p.x + (PHONE.w * WL_SCALE) / 2, y: p.y - 12 },
    };
  });
  const winner = wl[WINNER];
  const winnerBottom: Point = {
    x: winner.x + (PHONE.w * winner.scale) / 2,
    y: winner.y + PHONE.h * winner.scale + 12,
  };
  const arrowWin = flight(11.5);

  /* ---------------------------------------------------------- claim */
  const claimLogo = sp(14.35);
  const claimText = sp(14.5);

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(90% 70% at 30% 20%, #ffffff 0%, ${colors.grey50} 60%, #ededf1 100%)`,
        fontFamily,
      }}
    >
      <AbsoluteFill style={{ transform: `scale(${camera})` }}>
        <Caption n="1" text="Uno slot libero arriva in app" enter={sp(0.5)} exit={lin(5.0, 5.3)} />
        <Caption n="2" text="Un allievo disdice" enter={sp(5.35)} exit={lin(8.0, 8.3)} />
        <Caption
          n="3"
          text="Reglo avvisa la lista d’attesa, in automatico"
          enter={sp(8.35)}
          exit={lin(12.8, 13.1)}
        />

        {/* agenda */}
        <div
          style={{
            position: 'absolute',
            left: origin.x,
            top: origin.y,
            opacity: agendaIn,
            transform: `translateY(${(1 - agendaIn) * 30}px)`,
          }}
        >
          <AgendaMock
            bookings={bookings}
            focus={{ ...SLOT, pulse, frame, glow: glow > 0 && glow < 1 ? glow : 0 }}
          />
        </div>

        {/* telefono dell'allievo (scene 1 e 2) */}
        {phoneAOut < 1 ? (
          <PhoneMock
            x={PHONE_A.x + (1 - phoneAIn) * 120 + phoneAOut * 160}
            y={PHONE_A.y}
            opacity={phoneAIn * (1 - phoneAOut)}
          >
            <div style={{ position: 'absolute', inset: 0, opacity: 1 - toApp }}>
              <LockScreen />
              <Notification
                {...notif1}
                title="Slot disponibile!"
                body="Ven 19 · 10:00 con Marco. Tocca per prenotare."
              />
              <Notification
                {...booked1}
                icon="success"
                title="Guida prenotata"
                body="Ven 19 · 10:00 – 11:00 con Marco R."
              />
            </div>
            {toApp > 0 ? (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: toApp,
                  transform: `translateY(${(1 - toApp) * 24}px)`,
                }}
              >
                <AppBookingScreen
                  press={cancelPress}
                  cancel={cancel}
                  when="10:00 – 11:00"
                  who="Guida con Marco R."
                />
              </div>
            ) : null}
            <TapRipple x={150} y={96} progress={lin(3.2, 4.15, Easing.linear)} />
            <TapRipple
              x={CANCEL_BUTTON.x}
              y={CANCEL_BUTTON.y}
              progress={lin(6.3, 7.25, Easing.linear)}
            />
          </PhoneMock>
        ) : null}

        {/* lista d'attesa (scena 3) */}
        {wl
          .slice()
          .sort((a, b) => a.lift - b.lift)
          .map((p) =>
            p.enter > 0.001 && p.opacity > 0.001 ? (
              <PhoneMock key={p.i} x={p.x} y={p.y} scale={p.scale} opacity={p.opacity} lift={p.lift}>
                <LockScreen />
                <Notification
                  {...p.notif}
                  title="Slot disponibile!"
                  body="Ven 19 · 10:00 con Marco. Tocca per prenotare."
                />
                {p.booked ? (
                  <Notification
                    {...p.booked}
                    icon="success"
                    title="Guida prenotata"
                    body="Ven 19 · 10:00 – 11:00 con Marco R."
                  />
                ) : null}
                {p.i === WINNER ? (
                  <TapRipple x={150} y={96} progress={lin(10.95, 11.9, Easing.linear)} />
                ) : null}
              </PhoneMock>
            ) : null,
          )}

        {/* frecce */}
        <svg width={1920} height={1080} style={{ position: 'absolute', inset: 0 }}>
          <CurvedArrow
            from={slotTop}
            to={phoneATop}
            control={{ x: (slotTop.x + phoneATop.x) / 2 - 70, y: phoneATop.y - 50 }}
            {...arrow1}
          />
          <CurvedArrow
            from={phoneALeftMid}
            to={slotRight}
            control={{ x: (phoneALeftMid.x + slotRight.x) / 2, y: slotRight.y + 70 }}
            {...arrowBack1}
          />
          <CurvedArrow
            from={phoneACancel}
            to={slotRight}
            control={{ x: (phoneACancel.x + slotRight.x) / 2, y: phoneACancel.y + 130 }}
            color={colors.danger}
            {...arrowCancel}
          />
          {wl.map((p) => (
            <CurvedArrow
              key={p.i}
              from={slotTop}
              to={p.top}
              control={{ x: slotTop.x + (p.top.x - slotTop.x) * 0.42, y: 130 - p.i * 42 }}
              width={2.6}
              {...p.arrow}
            />
          ))}
          <CurvedArrow
            from={winnerBottom}
            to={slotBottom}
            control={{ x: (winnerBottom.x + slotBottom.x) / 2, y: winnerBottom.y + 150 }}
            color={colors.success}
            {...arrowWin}
          />
        </svg>

        {/* chiusura */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: AGENDA_FINAL.y + AGENDA_H + 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 18,
          }}
        >
          <Img
            src={staticFile('logo-reglo-dark.png')}
            style={{
              width: 58,
              height: 58,
              opacity: claimLogo,
              transform: `scale(${interpolate(claimLogo, [0, 1], [0.7, 1])}) rotate(${(1 - claimLogo) * -40}deg)`,
            }}
          />
          <span
            style={{
              fontSize: 62,
              fontWeight: 800,
              letterSpacing: -2,
              color: colors.black,
              opacity: claimText,
              transform: `translateX(${(1 - claimText) * -16}px)`,
            }}
          >
            L’agenda si riempie da sola.
          </span>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
