import { interpolate } from 'remotion';
import { colors, fontFamily } from '../brand';
import { clamp01 } from './geometry';

export type AppBookingScreenProps = {
  /** 0..1: pressione sul pulsante */
  press: number;
  /** 0..1: la guida viene annullata (card che si chiude) */
  cancel: number;
  when: string;
  who: string;
};

/** Posizione del pulsante "Annulla guida", in coordinate dello schermo. */
export const CANCEL_BUTTON = { x: 149, y: 404 };

/** Schermata in-app "Le tue guide", con la guida appena presa. */
export const AppBookingScreen: React.FC<AppBookingScreenProps> = ({ press, cancel, when, who }) => {
  const c = clamp01(cancel);
  const cardOpacity = interpolate(c, [0, 0.6], [1, 0], { extrapolateRight: 'clamp' });
  const cardScale = interpolate(c, [0, 1], [1, 0.92]);
  const empty = interpolate(c, [0.5, 1], [0, 1], { extrapolateLeft: 'clamp' });
  const p = clamp01(press);

  return (
    <div style={{ position: 'absolute', inset: 0, background: colors.grey50, fontFamily }}>
      <div style={{ position: 'absolute', top: 18, left: 30, fontSize: 15, fontWeight: 700 }}>9:41</div>
      <div
        style={{
          position: 'absolute',
          top: 78,
          left: 22,
          fontSize: 30,
          fontWeight: 800,
          letterSpacing: -1,
          color: colors.black,
        }}
      >
        Le tue guide
      </div>
      <div
        style={{
          position: 'absolute',
          top: 124,
          left: 22,
          fontSize: 14,
          fontWeight: 600,
          color: colors.grey600,
        }}
      >
        Prossima guida
      </div>

      <div
        style={{
          position: 'absolute',
          top: 154,
          left: 16,
          right: 16,
          padding: 18,
          borderRadius: 22,
          background: colors.white,
          border: `1.5px solid ${colors.line}`,
          boxShadow: '0 10px 26px rgba(20,20,30,0.07)',
          opacity: cardOpacity,
          transform: `scale(${cardScale})`,
        }}
      >
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <div
            style={{
              width: 58,
              height: 62,
              borderRadius: 14,
              background: colors.ink,
              color: colors.white,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 700, opacity: 0.6, letterSpacing: 1 }}>VEN</div>
            <div style={{ fontSize: 24, fontWeight: 800, lineHeight: 1 }}>19</div>
          </div>
          <div>
            <div style={{ fontSize: 19, fontWeight: 800, letterSpacing: -0.4 }}>{when}</div>
            <div style={{ fontSize: 14, fontWeight: 500, color: colors.grey500, marginTop: 3 }}>
              {who}
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            gap: 8,
            marginTop: 16,
          }}
        >
          {['Manovre', 'Auto 12'].map((t) => (
            <span
              key={t}
              style={{
                fontSize: 12.5,
                fontWeight: 600,
                padding: '6px 11px',
                borderRadius: 10,
                background: colors.cardMuted,
                color: colors.inkSoft,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 16,
          right: 16,
          top: CANCEL_BUTTON.y - 25,
          height: 50,
          borderRadius: 16,
          border: `1.5px solid ${colors.danger}`,
          color: colors.danger,
          background: `rgba(190,18,80,${0.08 * p})`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 16,
          fontWeight: 700,
          transform: `scale(${1 - 0.04 * p})`,
          opacity: cardOpacity,
        }}
      >
        Annulla guida
      </div>

      <div
        style={{
          position: 'absolute',
          top: 200,
          left: 0,
          right: 0,
          textAlign: 'center',
          opacity: empty,
          transform: `translateY(${(1 - empty) * 10}px)`,
        }}
      >
        <div style={{ fontSize: 17, fontWeight: 700, color: colors.inkSoft }}>Guida annullata</div>
        <div style={{ fontSize: 14, fontWeight: 500, color: colors.grey600, marginTop: 6 }}>
          Lo slot torna disponibile
        </div>
      </div>
    </div>
  );
};
